import React from "react";

const FeaturesSection = () => {
  return (
    <section className="space">
      <div className="container">
        <div className="row gy-40 justify-content-center">
          <div className="col-xl-3 col-md-6">
            <div className="feature-card">
              <div className="feature-card__icon">
                <img src="assets/img/icon/feature_1_1.svg" alt="icon" />
              </div>
              <h3 className="feature-card__title">Budget Packages</h3>
              <p className="feature-card__text">
                Many travelers lack flexible travel budgets. For those looking
                to see some of the most incredible tourist spots at a lower
                cost, our affordable tour packages can be the ideal option.
              </p>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="feature-card">
              <div className="feature-card__icon">
                <img src="assets/img/icon/feature_1_2.svg" alt="icon" />
              </div>
              <h3 className="feature-card__title">Best Guide</h3>
              <p className="feature-card__text">
                You can find all the information you need for an amazing road
                trip journey here, including routes, rental car options, and
                local advice.
              </p>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="feature-card">
              <div className="feature-card__icon">
                <img src="assets/img/icon/feature_1_3.svg" alt="icon" />
              </div>
              <h3 className="feature-card__title">24/7 Support</h3>
              <p className="feature-card__text">
                The Voyage Castle Help Center enumerates the different kinds of
                problems that you might have run into so that you can quickly
                fix them and go back into Travel Mode.
              </p>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="feature-card">
              <div className="feature-card__icon">
                <img src="assets/img/icon/feature_1_4.svg" alt="icon" />
              </div>
              <h3 className="feature-card__title">Travel Management</h3>
              <p className="feature-card__text">
                The Travel Management Division is in charge of creating travel
                rules and processes in order to give our clients the best
                possible service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
