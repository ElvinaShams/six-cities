import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { AppRoute } from '../../const';
import { useAppDispatch } from '../../hooks';
import { loginAction } from '../../store/api-action/api-action-login';
import { AuthData } from '../../types/auth-data';

function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [loginField, setLoginField] = useState('');
  const [passwordField, setPasswordField] = useState('');

  const handleLogin = (e: React.ChangeEvent<HTMLInputElement>) =>
    setLoginField(e.target.value);
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPasswordField(e.target.value);

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginField !== null && passwordField !== null) {
      onSubmit({
        login: loginField,
        password: passwordField,
      });
    }
  };

  return (
    <div className="page page--gray page--login">
      <Layout>
        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <form
                className="login__form form"
                action="#"
                method="post"
                onSubmit={handleSubmit}
              >
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">E-mail</label>
                  <input
                    onChange={handleLogin}
                    className="login__input form__input"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required={false}
                  />
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">Password</label>
                  <input
                    onChange={handlePassword}
                    className="login__input form__input"
                    type="password"
                    name="password"
                    placeholder="Password"
                    required={false}
                  />
                </div>
                <button
                  className="login__submit form__submit button"
                  type="submit"
                  onClick={() => navigate(AppRoute.Room)}
                >
                  Sign in
                </button>
              </form>
            </section>
            <section className="locations locations--login locations--current">
              <div className="locations__item">
                <Link className="locations__item-link" to={'#'}>
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

export { Login };
