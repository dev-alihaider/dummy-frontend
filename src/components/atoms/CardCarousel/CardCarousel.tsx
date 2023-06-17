import { Carousel } from '@material-tailwind/react';

export interface ICardCarouselImages {
  imageUrls: string[];
}

const CardCarousel = ({ imageUrls }: ICardCarouselImages) => {
  return (
    <Carousel className="h-48 overflow-hidden rounded-xl" autoplay={false}>
      {imageUrls.map((url) => {
        return (
          <img
            key={url}
            src={url}
            alt="1"
            className="h-full w-full object-cover"
          />
        );
      })}
    </Carousel>
  );
};

export default CardCarousel;
