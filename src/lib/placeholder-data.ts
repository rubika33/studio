export type Activity = {
  id: string;
  name: string;
  category: 'Conference' | 'Workshop' | 'Certification' | 'Competition' | 'Volunteering' | 'Leadership' | 'Internship' | 'Sports';
  date: string;
  status: 'Approved' | 'Pending' | 'Rejected';
  credits?: number;
  certificateUrl?: string;
};

export type Student = {
  id: string;
  name: string;
  email: string;
  major: string;
  gpa: number;
  academicBackground: string;
  skills: string;
  profilePhotoUrl: string;
  resumeUrl: string;
};

export type ApprovalRequest = {
  id: string;
  studentName: string;
  studentId: string;
  activityName: string;
  category: Activity['category'];
  date: string;
  documentUrl?: string;
};

export const student: Student = {
  id: 'user_123',
  name: 'Alex Doe',
  email: 'alex.doe@university.edu',
  major: 'Computer Science',
  gpa: 3.8,
  academicBackground: 'B.S. in Computer Science from Innovation University, focusing on AI and Machine Learning. Expected graduation: May 2025. Relevant coursework includes Data Structures, Algorithms, and Software Engineering.',
  skills: 'JavaScript, React, Node.js, Python, TensorFlow, UI/UX Design, Project Management',
  profilePhotoUrl: 'https://picsum.photos/seed/avatar/200/200',
  resumeUrl: '#',
};

export const activities: Activity[] = [
  { id: '1', name: 'Web Dev Conference 2024', category: 'Conference', date: '2024-05-20', status: 'Approved', credits: 2 },
  { id: '2', name: 'Agile & Scrum Certification', category: 'Certification', date: '2024-04-12', status: 'Approved', credits: 5 },
  { id: '3', name: 'AI Hackathon 2024', category: 'Competition', date: '2024-06-15', status: 'Pending', credits: 3 },
  { id: '4', name: 'Code for Community', category: 'Volunteering', date: '2024-03-30', status: 'Approved', credits: 1 },
  { id: '5', name: 'Tech Lead at Coding Club', category: 'Leadership', date: '2023-09-01', status: 'Approved', credits: 4 },
  { id: '6', name: 'Summer Internship at Innovate Inc.', category: 'Internship', date: '2023-08-15', status: 'Approved', credits: 10 },
  { id: '7', name: 'University Football Team', category: 'Sports', date: '2023-10-10', status: 'Approved', credits: 2 },
  { id: '8', name: 'Advanced React Workshop', category: 'Workshop', date: '2024-07-05', status: 'Pending', credits: 1 },
];

export const activitySummary = {
  certificates: activities.filter(a => a.category === 'Certification' && a.status === 'Approved').length,
  events: activities.filter(a => ['Conference', 'Workshop', 'Competition'].includes(a.category) && a.status === 'Approved').length,
  volunteerHours: 48, // Mocked for display
  credits: activities.filter(a => a.status === 'Approved').reduce((sum, act) => sum + (act.credits || 0), 0),
};

export const activityDistribution = [
  { category: 'Conference', count: activities.filter(a => a.category === 'Conference').length },
  { category: 'Workshop', count: activities.filter(a => a.category === 'Workshop').length },
  { category: 'Certification', count: activities.filter(a => a.category === 'Certification').length },
  { category: 'Competition', count: activities.filter(a => a.category === 'Competition').length },
  { category: 'Volunteering', count: activities.filter(a => a.category === 'Volunteering').length },
  { category: 'Leadership', count: activities.filter(a => a.category === 'Leadership').length },
  { category: 'Internship', count: activities.filter(a => a.category === 'Internship').length },
  { category: 'Sports', count: activities.filter(a => a.category === 'Sports').length },
].filter(d => d.count > 0);


export const approvalRequests: ApprovalRequest[] = [
  { id: 'act-3', studentName: 'Alex Doe', studentId: 'user_123', activityName: 'AI Hackathon 2024', category: 'Competition', date: '2024-06-15', documentUrl: '#' },
  { id: 'act-8', studentName: 'Alex Doe', studentId: 'user_123', activityName: 'Advanced React Workshop', category: 'Workshop', date: '2024-07-05', documentUrl: '#' },
  { id: 'act-9', studentName: 'Jane Smith', studentId: 'user_456', activityName: 'Graphic Design Seminar', category: 'Workshop', date: '2024-07-10', documentUrl: '#' },
];
