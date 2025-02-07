import { generateYAxis } from '@/app/lib/utils';
import { CalendarIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import { Revenue } from '@/app/lib/definitions';
import {
  BanknotesIcon,
  ClockIcon,
  ChartPieIcon,
  InboxIcon,
  ChevronDoubleUpIcon,
} from '@heroicons/react/24/outline';

const iconMap = {
  barGraph: ClockIcon,
} as const;
type IconKey = keyof typeof iconMap;

// https://www.tremor.so/
// https://www.chartjs.org/
// https://airbnb.io/visx/

export default async function RevenueChart({
  revenue,
}: {
  revenue: Revenue[];
  type: 'barGraph';
}) {
  const chartHeight = 250;
  const someVariable: IconKey = "barGraph";
  const Icon = iconMap[someVariable];

  const { yAxisLabels, topLabel } = generateYAxis(revenue);

  if (!revenue || revenue.length === 0) {
    return <p className="mt-4 text-gray-400">No data available.</p>;
  }


  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="h-8 w-8 text-gray-700" /> : null}
        <h3 className={"font-medium text-xl md:text-2xl"}>
          Vivamus fringilla, nunc a suscipit
        </h3>
      </div>
      <div className="rounded-xl bg-gray-50">
        <div className="sm:grid-cols-13 mt-0 grid grid-cols-12 items-end gap-2 rounded-md bg-white p-4 md:gap-12">
          <div
            className="mb-6 hidden flex-col justify-between text-sm text-gray-400 sm:flex"
            style={{ height: `${chartHeight}px` }}
          >
            {yAxisLabels.map((label) => (
              <p key={label}>{label}</p>
            ))}
          </div>

          {revenue.map((month) => (
            <div key={month.month} className="flex flex-col items-center gap-2">
              <div className="flex gap-2">
                <div
                  className="rounded-md bg-blue-300"
                  style={{
                    height: `${(chartHeight / topLabel) * month.revenue}px`,
                    width: '10px',
                  }}
                ></div>
                <div
                  className="rounded-md bg-gray-500"
                  style={{
                    height: `${(chartHeight / topLabel) * month.revenue}px`,
                    width: '10px',
                  }}
                ></div>
              </div>
              <p className="-rotate-90 text-sm text-gray-400 sm:rotate-0">
                {month.month}
              </p>
            </div>
          ))}

        </div>
        <div className="flex items-center pb-2 pt-6">
          <CalendarIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500 ">Last 12 months</h3>
        </div>
      </div>
    </div>
  );
}
