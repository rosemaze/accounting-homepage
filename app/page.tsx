import AcctaxLogo from '@/app/ui/acctax-logo';
import { ArrowRightIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { dosis } from '@/app/ui/fonts';
import Image from 'next/image';
import penangBridge from '../public/penangbridgesamplecropped.jpg';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col">
      <div
        style={{
          backgroundImage: `url(${penangBridge.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
          minHeight: '100vh',
        }}
        className="flex grow flex-col gap-4 md:flex-row"
      >
        <div
          style={{
            position: 'absolute',
            bottom: '0px',
            height: '90px',
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            paddingLeft: '20px',
          }}
        >
          <Link
            style={{ marginLeft: '10px' }}
            className={styles.footerLink}
            href="/about"
          >
            ABOUT
          </Link>

          <Link className={styles.footerLink} href="/services">
            SERVICES
          </Link>
          <Link className={styles.footerLink} href="/career">
            CONTACT US
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}

          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshots of the dashboard project showing desktop version"
          />
        </div>
        <div className="m-10 flex flex-col justify-center gap-6 rounded-lg bg-gray-50/50 px-6 py-10 md:w-2/5 md:px-20">
          <p
            className={`max-h-550 text-blue-dark text-xl antialiased md:text-3xl md:leading-normal`}
          >
            <AcctaxLogo />
            Welcome to our homepage. This is the website for the blablabla,
            brought to you by bla bla bla.
          </p>
          <Link
            href="/login"
            className="bg-blue-dark hover:text-blue-dark flex items-center gap-5 self-start rounded-lg px-6 py-3 text-2xl font-medium text-white transition-colors hover:bg-brown-light md:text-2xl"
          >
            <span>LEARN MORE</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
      </div>
    </main>
  );
}
