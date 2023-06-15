import { FlowerSearchBar } from '@/components/atoms/FlowerSearchBar';
import { LocationSearchBar } from '@/components/atoms/LocationSearchBar';

const HeaderSearchBar = () => {
  return (
    <div>
      <div className="flex flex-row">
        <LocationSearchBar />
        <FlowerSearchBar />
      </div>
    </div>
  );
};

export default HeaderSearchBar;
