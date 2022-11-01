import { Link } from 'react-router-dom';
import { AppRoute, MAX_RATING } from '../../const';
import { RoomOffer } from '../../types/room-offer';

type ApartmentСardProps = {
  roomOffer: RoomOffer,
  onMouseOver: () => void,
  onMouseLeave: () => void,
};

const getRating = (rating: number): string => `${(100 / MAX_RATING) * rating}%`;

function ApartmentСard({
  roomOffer,
  onMouseOver,
  onMouseLeave,
}: ApartmentСardProps) {
  const { id, previewImage, isPremium, price, rating, title, type } = roomOffer;

  const ratingValue = getRating(rating);
  return (
    <article
      className="cities__place-card place-card"
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Room}/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width="260"
            height="200"
            alt="Place_image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: ratingValue }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Room}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export { ApartmentСard };
