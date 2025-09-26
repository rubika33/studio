import { PageHeader } from '@/components/page-header';
import { PredictionForm } from './prediction-form';

export default function PredictionPage() {
  return (
    <>
      <PageHeader
        title="Achievement Prediction"
        description="Leverage AI to forecast future successes based on current data."
      />
      <PredictionForm />
    </>
  );
}
