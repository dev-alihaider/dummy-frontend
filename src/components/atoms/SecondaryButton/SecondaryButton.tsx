export interface ISecondaryProps {
  buttonText: string;
  clickHandler?: (event: any) => any;
}

const SecondaryButton = ({ buttonText, clickHandler }: ISecondaryProps) => {
  return (
    <button
      type="button"
      className="h-11 cursor-pointer rounded-md bg-[#F1F5F9] px-3 py-2 text-base font-semibold leading-4 text-[#0F172A]"
      onClick={clickHandler}
    >
      <span>{buttonText}</span>
    </button>
  );
};

export default SecondaryButton;
