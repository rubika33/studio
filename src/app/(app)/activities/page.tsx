import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { PageHeader } from '@/components/page-header';
import { activities } from '@/lib/placeholder-data';
import { AddActivitySheet } from './add-activity-sheet';
import type { Activity } from '@/lib/placeholder-data';

function getStatusVariant(status: Activity['status']) {
  switch (status) {
    case 'Approved':
      return 'default';
    case 'Pending':
      return 'secondary';
    case 'Rejected':
      return 'destructive';
    default:
      return 'outline';
  }
}

export default function ActivitiesPage() {
  return (
    <>
      <PageHeader
        title="Activity Tracker"
        description="Manage and track all your academic and co-curricular activities."
      >
        <AddActivitySheet />
      </PageHeader>
      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Activity Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Credits</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {activities.map((activity) => (
              <TableRow key={activity.id}>
                <TableCell className="font-medium">{activity.name}</TableCell>
                <TableCell>{activity.category}</TableCell>
                <TableCell>{activity.date}</TableCell>
                <TableCell>{activity.credits || 'N/A'}</TableCell>
                <TableCell className="text-right">
                  <Badge variant={getStatusVariant(activity.status)}>
                    {activity.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
