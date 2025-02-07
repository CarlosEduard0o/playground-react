import JflLogo from '@/app/ui/jfl-logo';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import { fetchRevenue, fetchCardData } from '@/app/lib/data';
import { Card, ProgressCard } from '@/app/ui/dashboard/cards';
import ProgressPieChart from './ui/dashboard/progress-pie-chart';

export default async function Page() {
  const revenue = await fetchRevenue();
  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();
  return (

    <main className="flex min-h-screen flex-col" style={{ backgroundColor: "#fbb019" }}>
      <div className="flex grow h-35 items-end bg-gray-800 p-4">
        <JflLogo />
      </div>
      <div className="p-4 pr-6 pl-6 grid md:grid-cols-2 sm:grid-cols-1 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center rounded-lg bg-gray-50 w-full">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            <Card title="CARD 1 " value1="INFO 1" value2="INFO 2" type="opInfo" />
            <ProgressCard title="Progresso " value1={<ProgressPieChart />} value2="" type="progressInfo" />
          </div>
          <RevenueChart revenue={revenue} type={'barGraph'} />
        </div>
        <div className="flex flex-col justify-center rounded-lg bg-gray-50 w-full">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            <Card title="CARD 2 " value1="INFO 1" value2="INFO 2" type="opInfo" />
            <ProgressCard title="Progresso " value1={<ProgressPieChart />} value2="" type="progressInfo" />
          </div>
          <RevenueChart revenue={revenue} type={'barGraph'} />
        </div>
      </div>
      <div className="pr-6 pl-6 grid md:grid-cols-2 sm:grid-cols-1 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center rounded-lg bg-gray-50 w-full">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            <Card title="CARD 3" value1="INFO 1" value2="INFO 2" type="opInfo" />
            <ProgressCard title="Progresso " value1={<ProgressPieChart />} value2="" type="progressInfo" />
          </div>
          <RevenueChart revenue={revenue} type={'barGraph'} />
        </div>
        <div className="flex flex-col justify-center rounded-lg bg-gray-50 w-full">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            <Card title="CARD 4" value1="INFO 1" value2="INFO 2" type="opInfo" />
            <ProgressCard title="Progresso " value1={<ProgressPieChart />} value2="" type="progressInfo" />
          </div>
          <RevenueChart revenue={revenue} type={'barGraph'} />
        </div>
      </div>
    </main>
  );
}
