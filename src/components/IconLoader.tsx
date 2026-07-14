import React from 'react';
import {
  GraduationCap,
  Users,
  HeartHandshake,
  Sparkles,
  TrendingUp,
  FileText,
  ShieldCheck,
  CheckCircle,
  Lightbulb,
  Award,
  HelpCircle,
  Clock,
  Phone,
  Facebook,
  MapPin,
  Mail,
  ChevronRight,
  X,
  Send,
  Calendar,
  Menu,
  ChevronUp
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<any>> = {
  GraduationCap,
  Users,
  HeartHandshake,
  Sparkles,
  TrendingUp,
  FileText,
  ShieldCheck,
  CheckCircle,
  Lightbulb,
  Award,
  HelpCircle,
  Clock,
  Phone,
  Facebook,
  MapPin,
  Mail,
  ChevronRight,
  X,
  Send,
  Calendar,
  Menu,
  ChevronUp
};

interface IconLoaderProps {
  name: string;
  className?: string;
  size?: number;
}

export default function IconLoader({ name, className = '', size = 24 }: IconLoaderProps) {
  const IconComponent = iconMap[name] || HelpCircle;
  return <IconComponent className={className} size={size} />;
}
