import { generateYAxis } from '@/app/lib/utils';
import { CalendarIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import { Revenue } from '@/app/lib/definitions';
import {
  ClockIcon,
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
    <div className="rounded-xl bg-gray-50 shadow-sm m-2" style={{ backgroundColor: "#d9d9d9" }}>
      <div className="lg:flex md:flex sm:block p-4">
        {Icon ? <Icon className="h-8 w-8 text-gray-700" /> : null}
        <h3 className={"font-medium text-xl md:text-2xl md:mr-12"}>
          CARD 3
        </h3>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginRight: "12px" }}>
          <span style={{ width: "20px", height: "20px", backgroundColor: "#93c5fd", borderRadius: "50%" }}></span>
          <p style={{ fontSize: "1.2em", fontFamily: 'lusitana' }}>Aprovadas</p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginRight: "25px" }}>
          <span style={{ width: "20px", height: "20px", backgroundColor: "#6b7280", borderRadius: "50%" }}></span>
          <p style={{ fontSize: "1.2em", fontFamily: 'lusitana' }}>Reprovadas</p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <CalendarIcon className="h-8 w-8 text-gray-500" />
          <h3 className="text-sm text-gray-500 ">Last 12 months</h3>
        </div>
      </div>
      <div className="rounded-xl bg-gray-50 mr-2 ml-2">
        <div className="sm:grid-cols-13 mt-0 grid grid-cols-12 items-end gap-2 rounded-md bg-white p-4 md:gap-12 mb-2">
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
      </div>
    </div >
  );
}
