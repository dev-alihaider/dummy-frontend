import { FlowerSearchBar } from '@/components/atoms/FlowerSearchBar';
import { LocationSearchBar } from '@/components/atoms/LocationSearchBar';

const FullSearchBar = () => {
  return (
    <div>
      <div className="flex flex-row">
        <LocationSearchBar />
        <FlowerSearchBar />
      </div>
    </div>
  );
};

export default FullSearchBar;
