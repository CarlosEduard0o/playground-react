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

    <main className="flex min-h-screen flex-col" style={{backgroundColor: "#fbb019"}}>
      <div className="flex h-20 items-end bg-gray-800 p-4 md:h-22">
        <JflLogo />
      </div>
      <div className="p-4 pr-6 pl-6 grid md:grid-cols-2 mt-2 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 md:w-100 md:px-5">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            <Card title="Consectetur " value1="Nulla facilisi" value2="Vivamus fringilla" type="opInfo" />
            <ProgressCard title="Lorem " value1={<ProgressPieChart />} value2="" type="progressInfo" />
          </div>
          <RevenueChart revenue={revenue} type={'barGraph'} />
        </div>
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 md:w-100 md:px-5">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            <Card title="Consectetur " value1="Nulla facilisi" value2="Vivamus fringilla" type="opInfo" />
            <ProgressCard title="Lorem " value1={<ProgressPieChart />} value2="" type="progressInfo" />
          </div>
          <RevenueChart revenue={revenue} type={'barGraph'} />
        </div>
      </div>
      <div className="pr-6 pl-6 grid md:grid-cols-2 mt-2 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 md:w-100 md:px-5">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            <Card title="Consectetur " value1="Nulla facilisi" value2="Vivamus fringilla" type="opInfo" />
            <ProgressCard title="Lorem " value1={<ProgressPieChart />} value2="" type="progressInfo" />
          </div>
          <RevenueChart revenue={revenue} type={'barGraph'} />
        </div>
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 md:w-100 md:px-5">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            <Card title="Consectetur " value1="Nulla facilisi" value2="Vivamus fringilla" type="opInfo" />
            <ProgressCard title="Lorem " value1={<ProgressPieChart />} value2="" type="progressInfo" />
          </div>
          <RevenueChart revenue={revenue} type={'barGraph'} />
        </div>
      </div>
    </main>
  );
}
