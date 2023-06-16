export interface IPrimaryButtonProps {
  buttonText: string;
  clickHandler?: (event: any) => any;
}

const PrimaryButton = ({ buttonText, clickHandler }: IPrimaryButtonProps) => {
  return (
    <button
      type="button"
      className="h-11 rounded-md bg-[#FA6F32] px-3 py-2 text-base font-semibold leading-4 text-white"
      onClick={clickHandler}
    >
      {buttonText}
    </button>
  );
};

export default PrimaryButton;
