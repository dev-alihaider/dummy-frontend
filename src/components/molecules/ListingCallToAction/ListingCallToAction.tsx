import { BellIconSvg } from '@/components/atoms/Svgs/BellIconSvg';
import { CarretSvg } from '@/components/atoms/Svgs/CarretSvg';
import { SecondaryButtonWithElements } from '@/components/molecules/SecondaryButtonWithElements';

export interface IListingCTAProps {
  resultsCount: number;
}

const ListingCallToAction = ({ resultsCount }: IListingCTAProps) => {
  return (
    <div className="flex flex-col items-center justify-between text-sm font-normal leading-5 text-black md:flex-row">
      <div>{resultsCount} results found</div>
      <div className="flex flex-col items-center md:flex-row">
        <div className="mr-2">
          <SecondaryButtonWithElements
            buttonText="Follow the filter"
            isIcon
            firstIcon={<BellIconSvg />}
          />
        </div>
        <div>
          <SecondaryButtonWithElements
            buttonText="Sort by"
            isIcon
            endIcon={<CarretSvg />}
          />
        </div>
      </div>
    </div>
  );
};

export default ListingCallToAction;
