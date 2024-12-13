import React from 'react';
import { Droplets } from 'lucide-react';

export function FooterLogo() {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Droplets className="h-8 w-8 text-white" />
        <span className="font-bold text-xl text-white">
          Seigneurie Océan
        </span>
      </div>
      <p className="text-sm text-white/80">
        Votre partenaire en peinture professionnelle depuis 1970
      </p>
    </div>
  );
}
