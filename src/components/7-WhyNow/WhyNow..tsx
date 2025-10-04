import './WhyNow.css';

export const WhyNow = () => {
    return (
        <section className="why-now section">
            <div className="container">
                <div className="section-two-col">
                    <div className="why-now-text">
                        <h2 className="section-title">
                            Why Get Equee Now?
                        </h2>

                        <p className="section-description">
                            The sooner you take control of your financial future the greater the chance that it will be brighter. Sure, it may not be top of mind now with everything else going on in life. But your future self will thank you for the smart moves you make now.
                        </p>

                        <p className="section-description">
                            The sooner you start, the more savings you build.
                        </p>

                        <p className="section-description">
                            The more savings you build the more you can invest. The more you invest the greater the potential for bigger returns. It's known in the industry as compounding. But in
                        </p>
                    </div>

                    <div className="illustration-container why-now-illustration">
                        <img
                            src="/img/home-img-equee-now.png"
                            alt="Taking action now for future benefits illustration"
                            className="illustration-img"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};