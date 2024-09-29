import { FC } from 'react';

// Font
import { lusitana } from '@/app/ui/fonts';

// CSS
import './acme-logo.css';

// Icon
import { GlobeAltIcon } from '@heroicons/react/24/outline';

const AcmeLogo: FC = () => {
  return (
    <div className={`${lusitana.className} acme-logo`}>
      <GlobeAltIcon className="acme-logo-icon" />
      <span className="acme-logo-text">Acme</span>
    </div>
  );
};

export default AcmeLogo;
