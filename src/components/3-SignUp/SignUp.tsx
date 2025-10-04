import './SignUp.css';

export const SignUp = () => {
    return (
        <section className="signup section">
            <div className="container">
                <div className="section-two-col">
                    <div className="signup-text">
                        <h2 className="section-title">
                            Imagine if there was a way to squeeze a financial adviser into your phone.
                        </h2>

                        <p className="section-description">
                            As financial advisers we know you don't want to spend a fortune making sure your super and life insurance is done right.
                        </p>

                        <p className="section-description">
                            So we got to work on creating a solution and we started with the idea of how we could put a financial adviser in your pocket.
                        </p>

                        <p className="section-description">
                            Specifically in your phone, but then we thought why not your laptop and desktop as well.*
                        </p>

                        <p className="signup-features-title">
                            A simple site that allows you to:
                        </p>

                        <ul className="signup-features-list">
                            <li className="signup-feature-item">
                                Make sure your super is correctly invested by a licensed financial adviser
                            </li>
                            <li className="signup-feature-item">
                                Make sure you have the insurance you need to protect you from life's ups and down
                            </li>
                        </ul>

                        <div className="signup-actions">
                            <button className="btn btn-secondary hover-lift hover-shadow">
                                Sign up now
                            </button>
                        </div>
                    </div>

                    <div className="illustration-container">
                        <img
                            src="/img/home-img-bridge.jpg"
                            alt="Illustrated bridge representing the connection between you and financial advice"
                            className="signup-illustration"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};