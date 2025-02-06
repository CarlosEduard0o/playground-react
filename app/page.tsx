import AcmeLogo from '@/app/ui/acme-logo';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import { fetchRevenue, fetchCardData } from '@/app/lib/data'; // Importação da função
import { Card, ProgressCard } from '@/app/ui/dashboard/cards';
import ProgressPieChart from './ui/dashboard/progress-pie-chart';

export default async function Page() {
  const revenue = await fetchRevenue(); // Busca os dados de receita
  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();
  return (

    <main className="flex min-h-screen flex-col">
      <div className="flex h-20 items-end bg-blue-500 p-4 md:h-22">
        <AcmeLogo />
      </div>
      <div className="pr-6 pl-6 grid md:grid-cols-2 mt-2 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 md:w-100 md:px-5">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            <Card title="Dummy text" value1="of the printing" value2="and typesetting" type="collected" />
            <ProgressCard title="industry" value1={<ProgressPieChart />} value2="" type="collected" />
          </div>
          <RevenueChart revenue={revenue} />
        </div>
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 md:w-100 md:px-5">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            <Card title="Dummy text" value1="of the printing" value2="and typesetting" type="collected" />
            <ProgressCard title="industry" value1={<ProgressPieChart />} value2="" type="collected" />
          </div>
          <RevenueChart revenue={revenue} />
        </div>
      </div>
      <div className="pr-6 pl-6 grid md:grid-cols-2 mt-2 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 md:w-100 md:px-5">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            <Card title="Dummy text" value1="of the printing" value2="and typesetting" type="collected" />
            <ProgressCard title="industry" value1={<ProgressPieChart />} value2="" type="collected" />
          </div>
          <RevenueChart revenue={revenue} />
        </div>
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 md:w-100 md:px-5">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            <Card title="Dummy text" value1="of the printing" value2="and typesetting" type="collected" />
            <ProgressCard title="industry" value1={<ProgressPieChart />} value2="" type="collected" />
          </div>
          <RevenueChart revenue={revenue} />
        </div>
      </div>
    </main>
  );
}
