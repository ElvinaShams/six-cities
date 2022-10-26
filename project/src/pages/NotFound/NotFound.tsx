import React from 'react';
import './NotFound.css';

function NotFound() {
  return (
    <section className="page_404">
      <div className="container">
        <div className="row">
          <div>
            <div className="text_center">
              <div className="four_zero_four_bg">
                <h1 className="text_center ">404</h1>
              </div>

              <div className="contant_box_404 text_center">
                <h3 className="h2">Look like you're lost</h3>

                <p>the page you are looking for not avaible!</p>

                <a href="/" className="link_404">
                  Go to Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { NotFound };
