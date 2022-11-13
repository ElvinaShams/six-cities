import { CardList } from '../../components/CardList';
import { Tabs } from '../../components/Tabs';
import { Map } from '../../components/Map';
import { Sort } from '../../components/Sort';
import { RoomOffer } from '../../types/room-offer';
import { Layout } from '../../components/Layout';
import { City } from '../../types/map';
import { useState } from 'react';

type MainProps = {
  roomOffers: RoomOffer[],
  city: City,
};

function Main({ roomOffers, city }: MainProps) {
  const [activeCard, setActiveCard] = useState<number | null>(0);

  const points = roomOffers.map((roomOffer) => {
    const { id } = roomOffer;
    const { latitude } = roomOffer.location;
    const { longitude } = roomOffer.location;
    return { id, latitude, longitude };
  });

  return (
    <>
      <div className="page page--gray page--main">
        <Layout>
          <main className="page__main page__main--index">
            <h1 className="visually-hidden">Cities</h1>
            <Tabs />
            <div className="cities">
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">
                    {roomOffers.length} places to stay in Amsterdam
                  </b>
                  <Sort />
                  <CardList
                    roomOffers={roomOffers}
                    setActiveCard={setActiveCard}
                  />
                </section>
                <div className="cities__right-section">
                  <Map
                    className="cities"
                    city={city}
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
