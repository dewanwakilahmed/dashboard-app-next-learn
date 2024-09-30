import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Component
import AcmeLogo from '@/components/AcmeLogo/AcmeLogo';

// Font
import { lusitana } from '@/app/ui/fonts';

// CSS
import './home-page.css';

// Icon
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const HomePage: FC = () => {
  return (
    <main className="main">
      <header className="header">
        <AcmeLogo />
      </header>

      <div className="hero-section">
        <h1 className={`hero-title ${lusitana.className}`}>Welcome to Acme</h1>
        <p className="hero-description">
          This is the example for the{' '}
          <a href="https://nextjs.org/learn/" className="learn-course-link">
            Next.js Learn Course
          </a>
          , brought to you by Vercel.
        </p>
        <Link className="login-btn" href="/login">
          <span className="login-text">Log in</span>
          <ArrowRightIcon className="arrow-right-icon" />
        </Link>
      </div>

      <div className="app-view-img-container">
        <Image
          className="app-view-img app-view-desktop"
          src="/hero-desktop.png"
          width={2000}
          height={1520}
          alt="Screenshots of the dashboard project showing desktop version"
        />
        {/* <Image
          className="app-view-img app-view-mobile"
          src="/hero-mobile.png"
          width={560}
          height={620}
          alt="Screenshots of the dashboard project showing mobile version"
        /> */}
      </div>
    </main>
  );
};

export default HomePage;
