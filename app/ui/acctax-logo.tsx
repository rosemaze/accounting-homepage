import { ChartBarIcon } from '@heroicons/react/24/outline';

export default function AcctaxLogo() {
  return (
    <div className={`flex flex-row items-center leading-none text-white`}>
      <ChartBarIcon className="text-brown-medium h-24 w-24" />
      <p className="text-[88px] text-slate-300">Acctax</p>
    </div>
  );
}
