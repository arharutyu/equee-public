import './Hero.css';

export const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1 className="hero-title">
                            A Financial Adviser In Your Pocket.
                        </h1>
                        <p className="hero-description">
                            Equee is a licensed advice platform that helps you to invest your super
                            correctly as well as helps you find the insurance that you need to protect you
                            from life's ups and downs
                        </p>
                        <div className="hero-actions">
                            <button className="btn btn-hero">
                                <span className="btn-text-mobile">Contact us</span>
                                <span className="btn-text-desktop">Register</span>
                            </button>
                        </div>
                    </div>
                    <div className="hero-visual">
                        <div className="phone-mockup-container">
                            <img
                                src="/assets/phone-mockup.png"
                                alt="Equee mobile app interface showing user registration forms"
                                className="phone-mockup-img"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};