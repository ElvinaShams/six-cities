import styles from './ErrorMessage.module.css';

function ErrorMessage() {
  return (
    <>
      <div className={styles.errorPage}>
        <p className={styles.error}>
          Please reload the page if you want to send a message again.
        </p>
      </div>
    </>
  );
}

export { ErrorMessage };
