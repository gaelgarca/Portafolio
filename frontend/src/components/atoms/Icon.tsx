import React from 'react';
import {
  FileSpreadsheet,
  Database,
  CheckSquare,
  Users,
  GraduationCap,
  Mail,
  Phone,
  Download,
  ArrowUp,
  Menu,
  X,
  Sun,
  Moon,
  HelpCircle,
} from 'lucide-react';

export interface IconProps {
  name: string;
  className?: string;
  size?: number | string;
  strokeWidth?: number;
}

const ICON_MAP: Record<
  string,
  React.ComponentType<{
    className?: string;
    size?: number | string;
    strokeWidth?: number;
    'aria-hidden'?: boolean | 'true' | 'false';
  }>
> = {
  filespreadsheet: FileSpreadsheet,
  tools: FileSpreadsheet,
  table: FileSpreadsheet,
  database: Database,
  info: Database,
  checksquare: CheckSquare,
  ops: CheckSquare,
  operation: CheckSquare,
  users: Users,
  collab: Users,
  collaboration: Users,
  graduationcap: GraduationCap,
  mail: Mail,
  phone: Phone,
  download: Download,
  arrowup: ArrowUp,
  menu: Menu,
  x: X,
  sun: Sun,
  moon: Moon,
};

export const Icon: React.FC<IconProps> = ({
  name,
  className = 'w-5 h-5',
  size,
  strokeWidth = 2,
}) => {
  const normalizedKey = name.toLowerCase().replace(/[-_]/g, '');
  const Component = ICON_MAP[normalizedKey] || HelpCircle;

  return (
    <Component
      className={className}
      size={size}
      strokeWidth={strokeWidth}
      aria-hidden="true"
    />
  );
};
