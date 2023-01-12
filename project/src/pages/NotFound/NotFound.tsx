import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import styles from './NotFound.module.css';

function NotFound() {
  return (
    <section className={styles.page_404}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div>
            <div className={styles.text_center}>
              <div className={styles.four_zero_four_bg}>
                <h1 className={styles.text_center}>404</h1>
              </div>

              <div className={styles.content_box_404}>
                <h3 className={styles.h2}>Look like you're lost</h3>

                <p>The page you are looking for not available!</p>

                <Link to={AppRoute.Main} className={styles.link_404}>
                  Go to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { NotFound };
