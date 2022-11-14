import { MAX_COUNT_IMAGES } from '../../const';
import { RoomOffer } from '../../types/room-offer';
import { PhotoRoom } from '../PhotoRoom';

type GalleryPhotosProps = {
  roomOffer: RoomOffer,
};

function GalleryPhotos({ roomOffer }: GalleryPhotosProps) {
  const { images } = roomOffer;
  const renderImages = images.slice(0, MAX_COUNT_IMAGES);
  return (
    <div className="property__gallery">
      {renderImages.map((image) => (
        <PhotoRoom image={image} />
      ))}
    </div>
  );
}

export { GalleryPhotos };
