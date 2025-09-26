import { student, activities } from '@/lib/placeholder-data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import type { Activity } from '@/lib/placeholder-data';

const PortfolioPreview = () => {
  const approvedActivities = activities.filter(
    (act) => act.status === 'Approved'
  );

  return (
    <div className="bg-card text-card-foreground rounded-lg shadow-lg p-8 max-w-4xl mx-auto my-8">
      {/* Header */}
      <header className="flex flex-col sm:flex-row items-center gap-8">
        <Avatar className="w-32 h-32 border-4 border-primary">
          <AvatarImage src={student.profilePhotoUrl} alt={student.name} />
          <AvatarFallback className="text-4xl">
            {student.name.charAt(0)}
          </AvatarFallback>
        </Avatar>
        <div className="text-center sm:text-left">
          <h1 className="text-4xl font-bold text-primary font-headline">
            {student.name}
          </h1>
          <h2 className="text-xl font-light text-muted-foreground mt-1">
            {student.major}
          </h2>
          <div className="flex gap-4 mt-4 justify-center sm:justify-start text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>{student.email}</span>
            </div>
            {/* Add more contact details if available */}
          </div>
        </div>
      </header>

      <Separator className="my-8 bg-border" />

      {/* Main Content */}
      <main className="grid md:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="md:col-span-1 space-y-8">
          <section>
            <h3 className="text-lg font-semibold text-primary uppercase tracking-wider mb-4">
              About Me
            </h3>
            <p className="text-sm text-muted-foreground">
              {student.academicBackground}
            </p>
          </section>
          <section>
            <h3 className="text-lg font-semibold text-primary uppercase tracking-wider mb-4">
              Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {student.skills.split(', ').map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div className="md:col-span-2 space-y-8">
          <section>
            <h3 className="text-lg font-semibold text-primary uppercase tracking-wider mb-4">
              Activities & Achievements
            </h3>
            <div className="space-y-6">
              {approvedActivities.map((activity: Activity) => (
                <div key={activity.id} className="flex gap-4">
                  <div className="w-1/4 text-sm text-muted-foreground pt-1">
                    {activity.date}
                  </div>
                  <div className="w-3/4">
                    <h4 className="font-semibold">{activity.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {activity.category}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PortfolioPreview;
