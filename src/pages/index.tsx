// import { useRouter } from 'next/router';

import { Listing } from '@/components/organisms/Listing';
import { ListingsMap } from '@/components/organisms/ListingsMap';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  // const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title="Dummy frontend"
          description="Dummy frontend for mocking dummy API."
        />
      }
    >
      <div className="grid grid-cols-12 gap-4">
        <div id="listingsContainer" className="col-span-6 pl-16 pr-6 pt-6">
          <Listing />
        </div>
        <div id="mapContainer" className="col-span-6">
          <ListingsMap />
        </div>
      </div>
    </Main>
  );
};

export default Index;
