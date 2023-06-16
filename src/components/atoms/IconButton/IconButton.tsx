import type { ReactNode } from 'react';

export interface IIconButtonProps {
  showNotificationIndicator: boolean;
  icon: ReactNode;
}

const IconButton = ({ showNotificationIndicator, icon }: IIconButtonProps) => {
  return (
    <button
      type="button"
      className="h-11 cursor-pointer rounded-md bg-[#F1F5F9] px-3 py-2 text-base font-semibold leading-4 text-white"
    >
      <div className="relative">
        {icon}
        {showNotificationIndicator && (
          <div className="absolute right-0 top-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="9"
              height="9"
              viewBox="0 0 9 9"
              fill="none"
            >
              <rect
                x="0.5"
                y="0.5"
                width="8"
                height="8"
                rx="4"
                fill="#FE0000"
                stroke="#F1F5F9"
              />
            </svg>
          </div>
        )}
      </div>
    </button>
  );
};

export default IconButton;
