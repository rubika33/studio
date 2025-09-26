import type { LucideIcon } from 'lucide-react';
import {
  LayoutDashboard,
  ListChecks,
  CheckSquare,
  Contact,
  BrainCircuit,
  Settings,
} from 'lucide-react';

export interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
  auth?: boolean;
}

export const navItems: NavItem[] = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/activities', label: 'Activities', icon: ListChecks },
  { href: '/approvals', label: 'Approvals', icon: CheckSquare },
  { href: '/portfolio', label: 'Portfolio', icon: Contact },
  { href: '/prediction', label: 'AI Prediction', icon: BrainCircuit },
  { href: '/settings', label: 'Settings', icon: Settings },
];
