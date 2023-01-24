import { useAppDispatch } from '../../hooks';
import { fetchOffersList } from '../../store/api-action/api-action-offers';
import styles from './ErrorMessage.module.css';

function ErrorMessage(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.container}>
      <p className={styles.errorText}>
        {' '}
        Something went wrong. Please try again{' '}
      </p>
      <button
        className={styles.button}
        onClick={() => {
          dispatch(fetchOffersList());
        }}
      >
        <span className={styles.btnText}> Try again </span>
      </button>
    </div>
  );
}

export { ErrorMessage };
