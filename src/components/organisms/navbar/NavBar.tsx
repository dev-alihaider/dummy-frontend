import { LogoPlaceholder } from '@/components/atoms/LogoPlaceholder';
import { HeaderActions } from '@/components/molecules/HeaderActions';
import { HeaderSearchBar } from '@/components/molecules/HeaderSearchBar';

const NavBar = () => {
  return (
    <div className="flex flex-row items-center justify-between px-16 py-6">
      <LogoPlaceholder />
      <HeaderSearchBar />
      <HeaderActions />
    </div>
  );
};

export default NavBar;
