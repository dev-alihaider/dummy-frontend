export interface IAvatarProps {
  url: string;
}

const Avatar = ({ url }: IAvatarProps) => {
  return (
    <img
      className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
      src={url}
      alt=""
    />
  );
};

export default Avatar;
