import { Link } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { Login } from '../../components/Login';
import { AppRoute } from '../../const';

function LoginPage() {
  return (
    <div className="page page--gray page--login">
      <Layout>
        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <Login />
            </section>
            <section className="locations locations--login locations--current">
              <div className="locations__item">
                <Link className="locations__item-link" to={AppRoute.Room}>
                  <span>Amsterdam</span>
                </Link>
              </div>
            </section>
          </div>
        </main>
      </Layout>
    </div>
  );
}

export { LoginPage };
