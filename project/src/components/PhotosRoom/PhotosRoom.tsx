import { MAX_COUNT_IMAGES } from '../../const';
import { RoomOffer } from '../../types/room-offer';

type PhotosRoomProps = {
  roomOffer: RoomOffer,
};

function PhotosRoom({ roomOffer }: PhotosRoomProps) {
  const { images } = roomOffer;

  const renderImage = images.slice(0, MAX_COUNT_IMAGES).map((image: string) => (
    <div className="property__image-wrapper" key={image}>
      <img className="property__image" src={image} alt="Photo studio" />
    </div>
  ));

  return <>{renderImage}</>;
}

export { PhotosRoom };
