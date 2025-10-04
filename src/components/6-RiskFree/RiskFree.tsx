import './RiskFree.css';

export const RiskFree = () => {
    return (
        <section className="risk-free section">
            <div className="container">
                <div className="risk-free-content">
                    <div className="illustration-container">
                        <img
                            src="/img/home-img-riskfree.png"
                            alt="Prevention illustration showing stopping falling dominoes"
                            className="illustration-img"
                        />
                    </div>

                    <div className="risk-free-text">
                        <h2 className="risk-free-title">
                            Try Equee Risk Free
                        </h2>

                        <p className="risk-free-description">
                            Hopefully you're thinking this sounds great and a lot better than forking out $2k for the same advice. But you may be on the fence and that's understandable.
                        </p>

                        <p className="risk-free-description">
                            So how about we make it risk-free for you.
                        </p>

                        <p className="risk-free-description">
                            Try Equee for a full 12 months. If at any time you don't love it, then let us know and we'll issue you a full refund. Sound fair?
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};