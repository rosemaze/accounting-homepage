import { ChartBarIcon } from '@heroicons/react/24/outline';

export default function AcctaxLogo() {
  return (
    <div className={`flex flex-row items-center leading-none text-white`}>
      <ChartBarIcon className="h-24 w-24 text-brown-light" />
      <p className="text-blue-dark text-[88px]">Acctax</p>
    </div>
  );
}
