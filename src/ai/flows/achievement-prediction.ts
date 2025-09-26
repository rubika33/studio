'use server';

/**
 * @fileOverview An AI agent that predicts potential future achievements based on a student's current activities and performance data.
 *
 * - predictAchievements - A function that handles the achievement prediction process.
 * - AchievementPredictionInput - The input type for the predictAchievements function.
 * - AchievementPredictionOutput - The return type for the predictAchievements function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AchievementPredictionInputSchema = z.object({
  academicPerformance: z.string().describe('A summary of the student\'s academic performance, including GPA, grades in relevant courses, and any academic awards or recognitions.'),
  activities: z.string().describe('A detailed list of the student\'s current activities, including extracurriculars, internships, volunteering, and other relevant experiences.'),
  skills: z.string().describe('A list of the student\'s skills.'),
  goals: z.string().describe('The student\'s goals.'),
});
export type AchievementPredictionInput = z.infer<typeof AchievementPredictionInputSchema>;

const AchievementPredictionOutputSchema = z.object({
  predictedAchievements: z.string().describe('A list of predicted future achievements for the student, based on their current activities and performance data.'),
  areasForImprovement: z.string().describe('A list of areas where the student could improve to increase their chances of achieving their goals.'),
  recommendedActions: z.string().describe('A list of recommended actions the student can take to improve their chances of achieving their goals.'),
});
export type AchievementPredictionOutput = z.infer<typeof AchievementPredictionOutputSchema>;

export async function predictAchievements(input: AchievementPredictionInput): Promise<AchievementPredictionOutput> {
  return predictAchievementsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'achievementPredictionPrompt',
  input: {schema: AchievementPredictionInputSchema},
  output: {schema: AchievementPredictionOutputSchema},
  prompt: `You are an AI assistant that predicts potential future achievements for students based on their current activities, performance data, skills and goals.

  Consider the following information about the student:

  Academic Performance: {{{academicPerformance}}}
  Activities: {{{activities}}}
  Skills: {{{skills}}}
  Goals: {{{goals}}}

  Based on this information, predict the student's potential future achievements, areas for improvement, and recommended actions.
  `,
});

const predictAchievementsFlow = ai.defineFlow(
  {
    name: 'predictAchievementsFlow',
    inputSchema: AchievementPredictionInputSchema,
    outputSchema: AchievementPredictionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
