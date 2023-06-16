export interface IFlowerAvatarProps {
  url?: string;
  alt?: string;
  emptyImageColor?: string;
  categoryName: string;
}

const FlowerAvatar = ({
  url,
  alt,
  emptyImageColor,
  categoryName,
}: IFlowerAvatarProps) => {
  return (
    <div className="flex cursor-pointer flex-col items-center">
      {url ? (
        <img src={url} className="h-6 w-6" alt={alt ?? 'Selected Flower'} />
      ) : (
        <div className={`bg-[${emptyImageColor}] h-6 w-6`} />
      )}
      <div className="mt-1">{categoryName}</div>
    </div>
  );
};

export default FlowerAvatar;
