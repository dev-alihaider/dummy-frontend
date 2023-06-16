import { IconButton } from '@/components/atoms/IconButton';
import { PrimaryButton } from '@/components/atoms/PrimaryButton';
import { BellIconSvg } from '@/components/atoms/Svgs/BellIconSvg';
import { HamburgerSvg } from '@/components/atoms/Svgs/HamburgerSvg';
import { SecondaryButtonWithElements } from '@/components/molecules/SecondaryButtonWithElements';

export const HeaderActions = () => {
  return (
    <div className="flex w-80 flex-row items-center justify-between">
      <PrimaryButton buttonText="Give five" />
      <IconButton showNotificationIndicator icon={<BellIconSvg />} />
      <SecondaryButtonWithElements
        buttonText="Profile"
        endIcon={<HamburgerSvg />}
      />
    </div>
  );
};

export default HeaderActions;
