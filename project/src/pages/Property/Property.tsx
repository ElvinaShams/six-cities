import { ErrorMessage } from '../../components/ErrorMessage';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CardBookmarkButton } from '../../components/CardBookmarkButton';
import { CardList } from '../../components/CardList';
import { GalleryPhotos } from '../../components/GalleryPhotos';
import { HostApartment } from '../../components/HostApartment';
import { Layout } from '../../components/Layout';
import { Map } from '../../components/Map';
import { ReviewsList } from '../../components/ReviewsList';
import { Spinner } from '../../components/Spinner';
import { MAX_COUNT_IMAGES, MAX_RATING } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  fetchComments,
  fetchNearby,
  fetchProperty,
  postFavorites,
} from '../../store/api-action/api-action-offers';
import {
  getNearbyOffers,
  getOfferStatus,
  getProperty,
} from '../../store/offers-data/selectors';

function Property(): JSX.Element {
  const dispatch = useAppDispatch();
  const { isLoading, isError } = useAppSelector(getOfferStatus);
  const property = useAppSelector(getProperty);
  const nearbyOffers = useAppSelector(getNearbyOffers);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(fetchComments(id));
      dispatch(fetchProperty(id));
      dispatch(fetchNearby(id));
    }
  }, [id, dispatch]);

  if (!property || isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <ErrorMessage />;
  }

  const {
    images,
    type,
    isPremium,
    title,
    rating,
    bedrooms,
    maxAdults,
    price,
    goods,
    host,
    description,
    city,
    isFavorite,
  } = property;

  const ratingHotel = (Math.round(rating) * 100) / MAX_RATING;

  const changeFavorite = () => {
    if (property) {
      const { id, isFavorite } = property;

      dispatch(postFavorites({ id, isFavorite }));
    }
  };

  return (
    <div className="page">
      <Layout>
        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <GalleryPhotos
                images={images.slice(0, MAX_COUNT_IMAGES)}
                type={type}
              />
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {isPremium && (
                  <div className="property__mark">
                    <span>Premium</span>
                  </div>
                )}
                <div className="property__name-wrapper">
                  <h1 className="property__name">{title}</h1>
                  <CardBookmarkButton
                    page="property"
                    isFavorite={isFavorite}
                    changeFavorite={changeFavorite}
                  />
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{ width: `${ratingHotel}%` }}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">
                    {rating}
                  </span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {bedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {maxAdults} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {goods.map((good) => (
                      <li className="property__inside-item" key={good}>
                        {good}
                      </li>
                    ))}
                  </ul>
                </div>
                <HostApartment host={host} description={description} />
                <ReviewsList />
              </div>
            </div>
            <Map
              className="property"
              city={city}
              points={[...nearbyOffers, property]}
              activeCard={property.id}
            />
          </section>
          {nearbyOffers.length > 0 && (
            <div className="container">
              <section className="near-places places">
                <h2 className="near-places__title">
                  Other places in the neighbourhood
                </h2>
                <CardList page="property" roomOffers={nearbyOffers} />
              </section>
            </div>
          )}
        </main>
      </Layout>
    </div>
  );
}

export { Property };
