import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PageHeader } from '@/components/page-header';
import { activitySummary, student } from '@/lib/placeholder-data';
import { Award, Calendar, Clock, Star } from 'lucide-react';
import { ActivityChart } from './activity-chart';

export default function DashboardPage() {
  return (
    <>
      <PageHeader
        title={`Welcome, ${student.name}!`}
        description="Here's a snapshot of your journey at StudentLife Hub."
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Credits Earned</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activitySummary.credits}</div>
            <p className="text-xs text-muted-foreground">
              Total credits from all approved activities
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Certificates</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activitySummary.certificates}</div>
            <p className="text-xs text-muted-foreground">
              Total verified certifications
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Events Attended</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activitySummary.events}</div>
            <p className="text-xs text-muted-foreground">
              Conferences, workshops, and competitions
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Volunteer Hours</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activitySummary.volunteerHours}</div>
            <p className="text-xs text-muted-foreground">
              Total hours of community service
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 mt-4">
        <ActivityChart />
      </div>
    </>
  );
}
