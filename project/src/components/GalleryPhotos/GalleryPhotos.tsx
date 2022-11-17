import { RoomOffer } from '../../types/room-offer';
import { PhotosRoom } from '../PhotosRoom';

type GalleryPhotosProps = {
  roomOffers: RoomOffer[],
};

function GalleryPhotos({ roomOffers }: GalleryPhotosProps) {
  const renderImages = roomOffers.map((roomOffer) => (
    <PhotosRoom roomOffer={roomOffer} />
  ));

  return <div className="property__gallery">{renderImages}</div>;
}

export { GalleryPhotos };
