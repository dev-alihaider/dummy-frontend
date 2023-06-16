import { FlowerAvatar } from '@/components/atoms/FlowerAvatar';
import { CarretSvg } from '@/components/atoms/Svgs/CarretSvg';
import { DividerSvg } from '@/components/atoms/Svgs/DividerSvg';
import { FunnelSvg } from '@/components/atoms/Svgs/FunnelSvg';
import { SecondaryButtonWithElements } from '@/components/molecules/SecondaryButtonWithElements';

const SecondaryNavbar = () => {
  return (
    <div className="flex flex-row items-center justify-between px-16 py-8">
      <div className="flex flex-row items-center">
        <div>
          <FlowerAvatar emptyImageColor="#C4C4C4" categoryName="flower" />
        </div>
        <div className="ml-3">
          <CarretSvg />
        </div>
        <div className="ml-10">
          <DividerSvg />
        </div>
        {Array.from(Array(5).keys()).map((i) => {
          return (
            <div className="ml-12 mr-10" key={i}>
              <FlowerAvatar categoryName="flower" emptyImageColor="#C4C4C4" />
            </div>
          );
        })}
      </div>
      <div>
        <SecondaryButtonWithElements
          buttonText="Filters"
          isIcon
          firstIcon={<FunnelSvg />}
        />
      </div>
    </div>
  );
};

export default SecondaryNavbar;
