import type { ReactElement } from 'react';

import { Avatar } from '@/components/atoms/Avatar';

export interface ISecondaryButtonWithElementsProps {
  buttonText: string;
  clickHandler?: (event: any) => any;
  avatarUrl?: string;
  endIcon?: ReactElement;
  isIcon?: boolean;
  firstIcon?: ReactElement;
}

const SecondaryButtonWithElements = ({
  buttonText,
  clickHandler,
  avatarUrl,
  endIcon,
  isIcon,
  firstIcon,
}: ISecondaryButtonWithElementsProps) => {
  return (
    <button
      type="button"
      className="h-11 w-fit cursor-pointer rounded-md bg-[#F1F5F9] px-3 py-2 text-base font-semibold leading-4 text-[#0F172A]"
      onClick={clickHandler}
    >
      <div className="flex flex-row items-center justify-center">
        <div className="mr-2">
          {isIcon ? (
            <div>{firstIcon}</div>
          ) : (
            <Avatar
              url={
                avatarUrl ??
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
              }
            />
          )}
        </div>
        <div className="mr-2">{buttonText}</div>
        <div>{endIcon}</div>
      </div>
    </button>
  );
};

export default SecondaryButtonWithElements;
