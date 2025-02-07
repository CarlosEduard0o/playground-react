import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { lusitana } from "@/app/ui/fonts";

export default function JflLogo() {
  return (
    <div
      className={`${lusitana.className} flex items-center justify-between w-full px-4 sm:px-8 text-white`}
    >
      <button className="p-2 sm:p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition">
        <ChevronLeftIcon className="w-4 h-4 sm:w-6 sm:h-6" />
      </button>

      <p className="text-[28px] sm:text-[44px] leading-none">Lorem Ipsum</p>

      <button className="p-2 sm:p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition">
        <ChevronRightIcon className="w-4 h-4 sm:w-6 sm:h-6" />
      </button>
    </div>
  );
}
