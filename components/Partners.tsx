import React from 'react';
import { BoltshiftIcon } from './icons/partner/BoltshiftIcon';
import { LightboxIcon } from './icons/partner/LightboxIcon';
import { FeatherDevIcon } from './icons/partner/FeatherDevIcon';
import { SpheruleIcon } from './icons/partner/SpheruleIcon';
import { GlobalBankIcon } from './icons/partner/GlobalBankIcon';

const partners = [
  { name: 'Boltshift', icon: <BoltshiftIcon /> },
  { name: 'Lightbox', icon: <LightboxIcon /> },
  { name: 'FeatherDev', icon: <FeatherDevIcon /> },
  { name: 'Spherule', icon: <SpheruleIcon /> },
  { name: 'GlobalBank', icon: <GlobalBankIcon /> },
];

const Partners: React.FC = () => {
  return (
    <section className="py-8 bg-neutral-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-around items-center gap-x-8 gap-y-4">
          {partners.map((partner) => (
            <div key={partner.name} className="h-8 text-neutral-400 hover:text-neutral-600 transition-colors duration-300">
              {partner.icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;