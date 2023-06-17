import { FullSearchBar } from 'src/components/molecules/FullSearchBar';

import { LogoPlaceholder } from '@/components/atoms/LogoPlaceholder';
import { HeaderActions } from '@/components/molecules/HeaderActions';

const NavBar = () => {
  return (
    <div className="flex flex-row items-center justify-between px-16 py-3">
      <LogoPlaceholder />
      <FullSearchBar />
      <HeaderActions />
    </div>
  );
};

export default NavBar;
