import {
  BanknotesIcon,
  ClockIcon,
  ChartPieIcon,
  InboxIcon,
  ChevronDoubleUpIcon,
} from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import { ReactNode } from "react";

const iconMap = {
  opInfo: ChevronDoubleUpIcon,
  progressInfo: ChartPieIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
};

export default async function CardWrapper() {
  return (
    <>
      {/* NOTE: Uncomment this code in Chapter 9 */}

      {/* <Card title="opInfo" value={totalPaidInvoices} type="opInfo" />
      <Card title="Pending" value={totalPendingInvoices} type="pending" />
      <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
      <Card
        title="Total progressInfo"
        value={numberOfprogressInfo}
        type="progressInfo"
      /> */}
    </>
  );
}

export function Card({
  title,
  value1,
  value2,
  type,
}: {
  title: string;
  value1: number | string;
  value2: number | string;
  type: 'opInfo';
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="h-8 w-8 text-gray-700" /> : null}
        <h3 className="ml-2 text-2xl font-medium">{title}</h3>
      </div>
      <div className={`${lusitana.className} truncate rounded-xl bg-white px-4 py-8 text-center text-xl`}>
        <div className="flex flex-col gap-2">
          <span>{value1}</span>
          <span>{value2}</span>
        </div>
      </div>
    </div>
  );
}

export function ProgressCard({
  title,
  value1,
  type,
}: {
  title: string;
  value1: number | string | ReactNode;
  value2: number | string;
  type: "progressInfo";
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="h-8 w-8 text-gray-700" /> : null}
        <h3 className="ml-2 text-2xl font-medium">{title}</h3>
      </div>
      <div className={`${lusitana.className} truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}>
        <div className="flex flex-col gap-2">
          {typeof value1 === "string" || typeof value1 === "number" ? (
            <span>{value1}</span>
          ) : (
            <div className="flex justify-center">{value1}</div>
          )}
        </div>
      </div>
    </div>
  );
}