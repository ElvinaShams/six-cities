import { CardList } from '../../components/CardList';
import { Tabs } from '../../components/Tabs';
import { Map } from '../../components/Map';
import { Sort } from '../../components/Sort';
import { RoomOffer } from '../../types/room-offer';
import { Layout } from '../../components/Layout';
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { CITY } from '../../mocks/cities';
import { changeCity } from '../../store/action';

type MainProps = {
  roomOffers: RoomOffer[],
};

function Main({ roomOffers }: MainProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleMouseOver = (id: number | null) => setActiveCard(id);

  const points = roomOffers.map((roomOffer) => ({
    id: roomOffer.id,
    latitude: roomOffer.location.latitude,
    longitude: roomOffer.location.longitude,
  }));

  const currentCityName = useAppSelector((state) => state.city);
  const sortType = useAppSelector((state) => state.sortType);
  const dispatch = useAppDispatch();
  const onChangeCity = (name: string) => {
    dispatch(changeCity(name));
  };

  const cityName =
    CITY.find((item) => item.name === currentCityName) || CITY[0];
  return (
    <>
      <div className="page page--gray page--main">
        <Layout>
          <main className="page__main page__main--index">
            <h1 className="visually-hidden">Cities</h1>
            <Tabs chooseName={currentCityName} onChangeCity={onChangeCity} />
            <div className="cities">
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">
                    {roomOffers.length} places to stay in {cityName.name}
                  </b>
                  <Sort />
                  <CardList
                    page="main"
                    roomOffers={roomOffers}
                    onMouseOver={handleMouseOver}
                  />
                </section>
                <div className="cities__right-section">
                  <Map
                    className="cities"
                    city={cityName}
                    points={points}
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
