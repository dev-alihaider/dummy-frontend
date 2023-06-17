import { Pagination } from '@/components/atoms/Pagination';
import { PrimaryButton } from '@/components/atoms/PrimaryButton';
import { ListingCallToAction } from '@/components/molecules/ListingCallToAction';
import { ListingCard } from '@/components/molecules/ListingCard';

const Listing = () => {
  return (
    <div>
      <ListingCallToAction resultsCount={20} />
      <div className="mt-3 grid grid-cols-8 gap-4 overflow-auto">
        {Array.from(Array(4).keys()).map((card) => {
          return <ListingCard key={card} />;
        })}
      </div>
      <div className="my-8 flex flex-col items-center justify-center rounded-lg bg-neutral-100 px-4 py-2 md:flex-row md:justify-between">
        <div className="flex flex-col items-center md:flex-row">
          <div className="h-8 w-8 bg-[#E1E1E1]" />
          <div className="ml-4">
            <div className="text-base font-normal leading-6 text-neutral-900">
              More distant, but no less important
            </div>
            <div className="text-sm">
              Clear the filter to view 458 flower options
            </div>
          </div>
        </div>
        <div>
          <PrimaryButton buttonText="Clear Filters" />
        </div>
      </div>
      <div className="border-t border-gray-300 text-center text-sm">
        <Pagination />
      </div>
    </div>
  );
};

export default Listing;
