import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type LogoProps = {
  type: 'header' | 'footer',
};

const sizes = {
  header: {
    width: 81,
    height: 41,
  },
  footer: {
    width: 64,
    height: 33,
  },
};

function Logo({ type }: LogoProps) {
  const { width, height } = sizes[type];
  return (
    <Link
      to={AppRoute.Main}
      className={`${type}__logo-link header__logo-link--active`}
    >
      <img
        className={`${type}__logo`}
        src="img/logo.svg"
        alt="6 cities logo"
        width={width}
        height={height}
      />
    </Link>
  );
}

export { Logo };
