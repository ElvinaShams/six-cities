import { useEffect, useCallback } from 'react';
import CardList from '../../components/CardList/CardList';
import { Tabs } from '../../components/Tabs';
import { Map } from '../../components/Map';
import { Sort } from '../../components/Sort';
import { Layout } from '../../components/Layout';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { sortOffers } from '../../util';
import { RoomOffer } from '../../types/room-offer';
import { changeCity } from '../../store/app-process/app-process';
import { getOffers, getOffersStatus } from '../../store/offers-data/selectors';
import { getCity, getSortType } from '../../store/app-process/selectors';
import { fetchOffersList } from '../../store/api-action/api-action-offers';
import { checkAuth } from '../../store/api-action/api-action-user';
import { getIsAuth } from '../../store/user-process/selectors';
import { Spinner } from '../../components/Spinner';

function Main(): JSX.Element {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const dispatch = useAppDispatch();
  const currentCityName = useAppSelector(getCity);
  const offers = useAppSelector(getOffers);
  const sortType = useAppSelector(getSortType);
  const offersStatus = useAppSelector(getOffersStatus);

  useEffect(() => {
    dispatch(fetchOffersList());
    dispatch(checkAuth());
  }, [dispatch]);

  const handleMouseOver = useCallback(
    (id: number | null) => setActiveCard(id),
    []
  );

  if (!getIsAuth || offersStatus.isLoading) {
    return <Spinner />;
  }

  const filteredOffers = offers.filter(
    (roomOffer) => roomOffer.city.name === currentCityName
  );

  const sortOffersType: RoomOffer[] = sortOffers(sortType, filteredOffers);

  const handleChangeCity = (name: string) => {
    dispatch(changeCity(name));
  };

  return (
    <>
      <div className="page page--gray page--main">
        <Layout>
          <main className="page__main page__main--index">
            <h1 className="visually-hidden">Cities</h1>
            <Tabs
              chooseName={currentCityName}
              onChangeCity={handleChangeCity}
            />
            <div className="cities">
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">
                    {filteredOffers.length} places to stay in {currentCityName}
                  </b>
                  <Sort />
                  <CardList
                    page="main"
                    roomOffers={sortOffersType}
                    onMouseOver={handleMouseOver}
                  />
                </section>
                <div className="cities__right-section">
                  <Map
                    className="cities"
                    city={sortOffersType[0].city}
                    points={filteredOffers}
                    activeCard={activeCard}
                  />
                </div>
              </div>
            </div>
          </main>
        </Layout>
      </div>
    </>
  );
}

export { Main };
