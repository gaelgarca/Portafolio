import React from 'react';
import { Mail, Phone, Download } from 'lucide-react';
import { Button } from '../atoms/Button';
import type { ButtonProps } from '../atoms/Button';

export interface ContactActionProps {
  type: 'email' | 'phone' | 'download';
  value: string;
  label?: string;
  variant?: ButtonProps['variant'];
  className?: string;
}

export const ContactAction: React.FC<ContactActionProps> = ({
  type,
  value,
  label,
  variant,
  className = '',
}) => {
  if (type === 'email') {
    return (
      <Button
        variant={variant || 'contact-primary'}
        href={`mailto:${value}`}
        icon={<Mail className="w-5 h-5" />}
        className={className}
        ariaLabel={`Enviar correo electrónico a ${value}`}
      >
        {label || value}
      </Button>
    );
  }

  if (type === 'phone') {
    return (
      <Button
        variant={variant || 'contact-secondary'}
        href={`tel:${value.replace(/\s+/g, '')}`}
        icon={<Phone className="w-5 h-5" />}
        className={className}
        ariaLabel={`Llamar por teléfono al ${value}`}
      >
        {label || value}
      </Button>
    );
  }

  return (
    <Button
      variant={variant || 'secondary'}
      href={value}
      download
      icon={<Download className="w-5 h-5" />}
      className={className}
      ariaLabel="Descargar currículum vitae en formato PDF"
    >
      {label || 'Descargar currículum'}
    </Button>
  );
};
