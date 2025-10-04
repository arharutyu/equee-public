import './TryNow.css';

export const TryNow = () => {
    return (
        <section className="try-now section">
            <div className="container">
                <div className="try-now-card">
                    <h2 className="section-title">
                        Try Equee Today
                    </h2>

                    <p className="section-description">
                        Get your financial planner in your pocket right now
                    </p>

                    <div className="try-now-actions">
                        <button className="btn btn-primary-orange hover-lift hover-shadow">
                            Sign up now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};