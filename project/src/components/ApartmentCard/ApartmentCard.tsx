import { generatePath, Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { RoomOffer } from '../../types/room-offer';
import { getRating } from '../../util';
import { CardButton } from '../CardButton';

type ApartmentCardProps = {
  card: 'main' | 'favorite',
  roomOffer: RoomOffer,
  onMouseOver?: (id: number) => void,
  onMouseLeave?: (id: number) => void,
};

const properties = {
  main: {
    className: 'cities',
    width: 260,
    height: 200,
    placeCardActive: '',
    AppRoute: AppRoute.Room,
  },
  favorite: {
    className: 'favorites',
    width: 150,
    height: 110,
    placeCardActive: 'place-card__bookmark-button--active',
    AppRoute: AppRoute.Favorites,
  },
};

function ApartmentCard({
  roomOffer,
  onMouseOver,
  onMouseLeave,
  card,
}: ApartmentCardProps) {
  const { id, previewImage, isPremium, price, rating, title, type } = roomOffer;
  const { className, width, height, placeCardActive } = properties[card];

  const ratingValue = getRating(rating);

  return (
    <article
      className={`${className}__places-card place-card`}
      onMouseOver={() => {
        if (onMouseOver !== undefined) {
          onMouseOver(id);
        }
      }}
      onMouseLeave={() => onMouseLeave}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${className}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${AppRoute.Room}/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={width}
            height={height}
            alt="Place_image"
          />
        </Link>
      </div>
      <div className="place-card__info favorites__card-info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <CardButton placeCardActive={placeCardActive} />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: ratingValue }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={generatePath(AppRoute.Room, { id: roomOffer.id })}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export { ApartmentCard };
