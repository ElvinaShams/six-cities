import React, { FormEvent, useState } from 'react';
import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks';

import styles from './Login.module.css';
import { loginAction } from '../../store/api-action/api-action-user';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { AuthStatus } from '../../const';

const formField = {
  email: 'E-mail',
  password: 'Password',
};

type FieldProps = {
  value: string,
  error: boolean | undefined,
  errorText: string,
  regex: RegExp,
};

type FormStateProps = {
  [key: string]: FieldProps,
};

function Login(): JSX.Element {
  const dispatch = useAppDispatch();

  const [formState, setFormState] = useState<FormStateProps>({
    email: {
      value: '',
      error: false,
      errorText: 'Неправильный почтовый адрес',
      regex: /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/,
    },
    password: {
      value: '',
      error: false,
      errorText: 'Придумайте надежный пароль, состоящий из букв и цифр',
      regex: /^(?=.*?[A-Za-z])(?=.*?[0-9]).{2,}$/,
    },
  });

  const authStatus = useAppSelector(getAuthorizationStatus);

  const isLoading = authStatus === AuthStatus.Loading;

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    const rule = formState[name].regex;
    const isFieldValid = rule.test(value);

    setFormState({
      ...formState,
      [name]: {
        ...formState[name],
        value: value,
        error: !isFieldValid,
      },
    });
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    dispatch(
      loginAction({
        login: formState.email.value,
        password: formState.password.value,
      })
    );
  };

  const noValidForm = Object.values(formState).some(
    (item) => item.error || !item.value
  );

  return (
    <>
      <h1 className="login__title">Sign in</h1>
      <form
        className="login__form form"
        action="#"
        method="post"
        onSubmit={handleSubmit}
      >
        {Object.entries(formField).map(([name, label]) => {
          return (
            <div
              className="login__input-wrapper form__input-wrapper"
              key={name}
            >
              <label className="visually-hidden">{label}</label>
              <input
                onChange={handleChange}
                className={cn('login__input form__input', {
                  [styles.error]: formState[name].error,
                })}
                type={name}
                name={name}
                placeholder={label}
                value={formState[name].value}
              />
              {formState[name].error && (
                <p className={styles.errorText}> {formState[name].errorText}</p>
              )}
            </div>
          );
        })}

        <button
          className="login__submit form__submit button"
          type="submit"
          disabled={noValidForm || isLoading}
        >
          {isLoading ? 'Signing in' : 'Sign in'}
        </button>
      </form>
    </>
  );
}

export { Login };
