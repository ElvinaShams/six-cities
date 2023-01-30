import { generatePath, Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { RoomOffer } from '../../types/room-offer';
import { getRating } from '../../util';
import { CardBookmarkButton } from '../CardBookmarkButton';
import { useAppDispatch } from '../../hooks';
import { postFavorites } from '../../store/api-action/api-action-offers';
import cn from 'classnames';

type ApartmentCardProps = {
  card: 'main' | 'favorite' | 'property',
  roomOffer: RoomOffer,
  onMouseOver?: (id: number) => void,
  onMouseLeave?: (id: number | null) => void,
};

const properties = {
  main: {
    className: 'cities',
    width: 260,
    height: 200,
  },
  favorite: {
    className: 'favorites',
    width: 150,
    height: 110,
  },
  property: {
    className: 'near-places',
    width: 260,
    height: 200,
  },
};

function ApartmentCard({
  roomOffer,
  onMouseOver,
  onMouseLeave,
  card,
}: ApartmentCardProps) {
  const dispatch = useAppDispatch();

  const {
    id,
    previewImage,
    isPremium,
    price,
    rating,
    title,
    type,
    isFavorite,
  } = roomOffer;
  const { className, width, height } = properties[card];

  const ratingValue = getRating(Math.round(rating));

  const getFirstCapital = (str: string) => str[0]?.toUpperCase() + str.slice(1);

  const changeFavorite = () => {
    dispatch(
      postFavorites({
        hotelId: id,
        status: isFavorite ? 0 : 1,
      })
    );
  };

  const infoClassName = cn('place-card__info', {
    'favorites__card-info': card === 'favorite',
  });

  return (
    <article
      className={`${className}__card place-card`}
      onMouseOver={() => {
        onMouseOver?.(id);
      }}
      onMouseLeave={() => {
        onMouseLeave?.(0);
      }}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${className}__image-wrapper place-card__image-wrapper`}>
        <Link to={generatePath(AppRoute.Room, { id: `${id}` })}>
          <img
            className="place-card__image"
            src={previewImage}
            width={width}
            height={height}
            alt="Place_image"
          />
        </Link>
      </div>
      <div className={infoClassName}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <CardBookmarkButton
            page="place-card"
            size="small"
            isFavorite={isFavorite}
            changeFavorite={changeFavorite}
          />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: ratingValue }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={generatePath(AppRoute.Room, { id: `${id}` })}>{title}</Link>
        </h2>
        <p className="place-card__type">{getFirstCapital(type)}</p>
      </div>
    </article>
  );
}

export { ApartmentCard };
