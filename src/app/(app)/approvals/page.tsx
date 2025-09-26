'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { PageHeader } from '@/components/page-header';
import { approvalRequests } from '@/lib/placeholder-data';
import { Check, X } from 'lucide-react';
import Link from 'next/link';

export default function ApprovalsPage() {
  const { toast } = useToast();

  const handleApproval = (
    action: 'Approved' | 'Rejected',
    requestName: string
  ) => {
    toast({
      title: `Submission ${action}`,
      description: `"${requestName}" has been ${action.toLowerCase()}.`,
    });
    // In a real app, you would also update the state
  };

  return (
    <>
      <PageHeader
        title="Faculty Approval Panel"
        description="Review and verify student-submitted activities."
      />
      <div className="grid gap-4">
        {approvalRequests.length > 0 ? (
          approvalRequests.map((request) => (
            <Card key={request.id}>
              <CardHeader>
                <CardTitle>{request.activityName}</CardTitle>
                <CardDescription>
                  Submitted by {request.studentName} on{' '}
                  {new Date(request.date).toLocaleDateString()}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  <span className="font-semibold">Category:</span>{' '}
                  {request.category}
                </p>
                {request.documentUrl && (
                  <Button variant="link" asChild className="p-0 h-auto mt-2">
                    <Link href={request.documentUrl} target="_blank">
                      View Certificate/Document
                    </Link>
                  </Button>
                )}
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    handleApproval('Rejected', request.activityName)
                  }
                >
                  <X className="mr-2 h-4 w-4" />
                  Reject
                </Button>
                <Button
                  size="sm"
                  onClick={() =>
                    handleApproval('Approved', request.activityName)
                  }
                >
                  <Check className="mr-2 h-4 w-4" />
                  Approve
                </Button>
              </CardFooter>
            </Card>
          ))
        ) : (
          <div className="text-center py-10 border rounded-lg">
            <h3 className="text-lg font-semibold">No Pending Approvals</h3>
            <p className="text-muted-foreground">
              All student submissions have been reviewed.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
