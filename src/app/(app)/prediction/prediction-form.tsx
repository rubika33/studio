'use client';

import { useFormState } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { predictAchievements } from '@/ai/flows/achievement-prediction';
import { student } from '@/lib/placeholder-data';
import { Loader2, Sparkles } from 'lucide-react';
import type { AchievementPredictionOutput } from '@/ai/flows/achievement-prediction';

const initialState: { output: AchievementPredictionOutput | null; error: string | null } = {
  output: null,
  error: null,
};

function SubmitButton() {
  // `useFormStatus` is not yet stable in React Canary for Next.js App Router
  // We'll use a manual loading state for now.
  // const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full">
      <Sparkles className="mr-2 h-4 w-4" />
      Predict Achievements
    </Button>
  );
}

export function PredictionForm() {
  const [state, formAction] = useFormState(async (prevState: any, formData: FormData) => {
    try {
      const output = await predictAchievements({
        academicPerformance: formData.get('academicPerformance') as string,
        activities: formData.get('activities') as string,
        skills: formData.get('skills') as string,
        goals: formData.get('goals') as string,
      });
      return { output, error: null };
    } catch (e: any) {
      return { output: null, error: e.message || 'An unknown error occurred.' };
    }
  }, initialState);

  return (
    <div>
      <Card>
        <form action={formAction}>
          <CardHeader>
            <CardTitle>AI Achievement Prediction</CardTitle>
            <CardDescription>
              Provide details about a student to predict their potential future achievements.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="academicPerformance">Academic Performance</Label>
              <Textarea
                id="academicPerformance"
                name="academicPerformance"
                placeholder="e.g., GPA, relevant courses, awards"
                defaultValue={`GPA: ${student.gpa}. ${student.academicBackground}`}
                rows={3}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="activities">Activities & Experience</Label>
              <Textarea
                id="activities"
                name="activities"
                placeholder="e.g., Internships, club roles, volunteering"
                defaultValue="Tech Lead at Coding Club, Summer Internship at Innovate Inc., Volunteering for Code for Community."
                rows={3}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="skills">Skills</Label>
              <Textarea
                id="skills"
                name="skills"
                placeholder="e.g., JavaScript, Python, Project Management"
                defaultValue={student.skills}
                rows={2}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="goals">Goals</Label>
              <Textarea
                id="goals"
                name="goals"
                placeholder="e.g., Secure a software engineering role at a top tech company."
                defaultValue="To become a full-stack developer specializing in AI-driven applications."
                rows={2}
                required
              />
            </div>
            <SubmitButton />
          </CardContent>
        </form>
      </Card>

      {state?.error && (
        <Card className="mt-4 bg-destructive/10 border-destructive">
          <CardHeader>
            <CardTitle className="text-destructive">Error</CardTitle>
            <CardDescription className="text-destructive">
              {state.error}
            </CardDescription>
          </CardHeader>
        </Card>
      )}

      {state?.output && (
        <div className="mt-6 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="text-primary" />
                Predicted Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{state.output.predictedAchievements}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Areas for Improvement</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{state.output.areasForImprovement}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Recommended Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{state.output.recommendedActions}</p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
