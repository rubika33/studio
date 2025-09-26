'use client';

import { useState } from 'react';
import Image from 'next/image';
import { PageHeader } from '@/components/page-header';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import PortfolioPreview from './portfolio-preview';
import { Download, Share2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const templates = [
  {
    id: 'modern',
    name: 'Modern',
    imageUrl: 'https://picsum.photos/seed/p-modern/600/800',
    imageHint: 'modern resume',
  },
  {
    id: 'classic',
    name: 'Classic',
    imageUrl: 'https://picsum.photos/seed/p-classic/600/800',
    imageHint: 'classic resume',
  },
];

export default function PortfolioPage() {
  const [step, setStep] = useState(1);
  const [selectedTemplate, setSelectedTemplate] = useState('modern');
  const { toast } = useToast();

  const handleAction = (action: 'Download' | 'Share') => {
    toast({
      title: `${action} Initiated`,
      description: `Your portfolio is being prepared. This is a demo feature.`,
    });
  };

  return (
    <>
      <PageHeader
        title="Auto-Generated Portfolio"
        description="Create and share a professional portfolio of your achievements."
      >
        {step === 2 && (
          <>
            <Button variant="outline" onClick={() => handleAction('Share')}>
              <Share2 className="mr-2" />
              Share Link
            </Button>
            <Button onClick={() => handleAction('Download')}>
              <Download className="mr-2" />
              Download PDF
            </Button>
          </>
        )}
      </PageHeader>

      {step === 1 && (
        <Card>
          <CardHeader>
            <CardTitle>Step 1: Choose a Template</CardTitle>
            <CardDescription>
              Select a design for your portfolio.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup
              defaultValue={selectedTemplate}
              onValueChange={setSelectedTemplate}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {templates.map((template) => (
                <div key={template.id}>
                  <RadioGroupItem
                    value={template.id}
                    id={template.id}
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor={template.id}
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <Image
                      src={template.imageUrl}
                      alt={template.name}
                      width={150}
                      height={200}
                      className="mb-2 rounded-sm"
                      data-ai-hint={template.imageHint}
                    />
                    {template.name}
                  </Label>
                </div>
              ))}
            </RadioGroup>
            <div className="flex justify-end mt-6">
              <Button onClick={() => setStep(2)}>Generate Portfolio</Button>
            </div>
          </CardContent>
        </Card>
      )}

      {step === 2 && (
        <div>
          <Button variant="outline" onClick={() => setStep(1)} className="mb-4">
            Back to Templates
          </Button>
          <PortfolioPreview />
        </div>
      )}
    </>
  );
}
