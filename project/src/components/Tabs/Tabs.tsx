import { Link } from 'react-router-dom';
import { AppRoute, CityName } from '../../const';
import cn from 'classnames';

type TabsProps = {
  chooseName: string,
  onChangeCity: (cityName: string) => void,
};

function Tabs({ chooseName, onChangeCity }: TabsProps): JSX.Element {
  const renderCityTabs = Object.values(CityName).map((city) => (
    <li className="locations__item" key={city}>
      <Link
        className={cn('locations__item-link', {
          'tabs__item tabs__item--active': city === chooseName,
        })}
        to={AppRoute.Main}
        onClick={() => onChangeCity(city)}
      >
        <span>{city}</span>
      </Link>
    </li>
  ));

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">{renderCityTabs}</ul>
      </section>
    </div>
  );
}

export { Tabs };
