export interface IFlowerAvatarProps {
  url?: string;
  alt?: string;
  emptyImageColor?: string;
  categoryName: string;
  isSelected: boolean;
}

const FlowerAvatar = ({
  url,
  alt,
  emptyImageColor,
  categoryName,
  isSelected,
}: IFlowerAvatarProps) => {
  return (
    <div
      className={`flex h-20 cursor-pointer flex-col items-center justify-center ${
        isSelected
          ? 'border-b border-b-neutral-900'
          : 'hover:border-b hover:border-[#C4C4C4]'
      }`}
    >
      {url ? (
        <img src={url} className="h-6 w-6" alt={alt ?? 'Selected Flower'} />
      ) : (
        <div className={`bg-[${emptyImageColor}] h-6 w-6`} />
      )}
      <div className="mt-1 text-neutral-900">{categoryName}</div>
    </div>
  );
};

export default FlowerAvatar;
