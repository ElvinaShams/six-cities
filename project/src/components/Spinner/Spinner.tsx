import * as Loader from 'react-loader-spinner';
import styles from './Spinner.module.css';

function Spinner(): JSX.Element {
  return (
    <div className={styles.spinner}>
      <Loader.Grid color="#00BFFF" height={80} width={80} />
    </div>
  );
}
export { Spinner };
