import { Carousel } from 'src/components/atoms/CardCarousel';

import { StarSvg } from '@/components/atoms/Svgs/StarSvg';

const ListingCard = () => {
  return (
    <div className="col-span-4">
      <Carousel
        imageUrls={[
          'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80',
          'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
        ]}
      />
      <div className="mt-3 flex flex-col">
        <div className="flex flex-col md:flex-row">
          <div className="text-base font-semibold leading-6 text-neutral-900">
            Tulips
          </div>
          <div className="mx-2 hidden text-neutral-300 md:block"> | </div>
          <div className="text-base font-normal leading-6 text-neutral-900">
            flower
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="text-base font-normal leading-6 text-neutral-900">
            China
          </div>
          <div className="mx-2 hidden text-neutral-300 md:block"> | </div>
          <div className="text-base font-normal leading-6 text-neutral-900">
            1 Km
          </div>
          <div className="mx-2 hidden text-neutral-300 md:block"> | </div>
          <div className="text-base font-normal leading-6 text-neutral-900">
            Owner
          </div>
          <div className="mx-1">
            <StarSvg />
          </div>
          <div className="text-base font-normal leading-6 text-neutral-900">
            5,0 (12)
          </div>
        </div>
        <div className="flex flex-row">
          <div className="text-base font-semibold leading-6 text-neutral-900">
            1$
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
