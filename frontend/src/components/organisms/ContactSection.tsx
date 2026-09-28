import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { Button } from '../atoms/Button';
import type { ContactInfo } from '../../types/cv.types';

export interface ContactSectionProps {
  contact: ContactInfo;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ contact }) => {
  return (
    <section
      id="contacto"
      aria-labelledby="contacto-title"
      className="py-16 sm:py-24 md:py-28"
    >
      <div className="max-w-[1120px] w-[calc(100%-40px)] mx-auto">
        <div className="relative overflow-hidden p-8 sm:p-14 md:p-20 rounded-[28px] text-[#f7fbff] bg-[#0b1220] shadow-2xl after:content-['AG'] after:absolute after:-right-6 after:-bottom-20 after:text-[rgba(89,225,213,0.08)] after:font-display after:text-[11rem] sm:after:text-[18rem] md:after:text-[22rem] after:font-black after:leading-none after:pointer-events-none select-none">
          <div className="relative z-10 max-w-[760px]">
            <span className="font-mono text-xs uppercase tracking-[0.13em] font-bold text-brand-signalDark">
              05 / Contacto
            </span>

            <h2
              id="contacto-title"
              className="mt-4 mb-5 font-display font-bold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white"
            >
              Construyamos la siguiente oportunidad
            </h2>

            <p className="text-[#bcc8d4] text-base sm:text-lg md:text-xl max-w-[650px] leading-relaxed">
              Estoy abierto a oportunidades donde pueda seguir aprendiendo y aportar en soporte, operación administrativa o funciones tecnológicas de nivel inicial.
            </p>

            <div className="flex flex-wrap gap-3.5 sm:gap-4 mt-8">
              <Button
                variant="contact-primary"
                href={`mailto:${contact.email}`}
                icon={<Mail className="w-5 h-5 text-current" />}
                ariaLabel={`Enviar correo a ${contact.email}`}
              >
                {contact.email}
              </Button>

              <Button
                variant="contact-secondary"
                href={`tel:${contact.phone}`}
                icon={<Phone className="w-5 h-5 text-current" />}
                ariaLabel={`Llamar al teléfono ${contact.phone}`}
              >
                {contact.phone}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
