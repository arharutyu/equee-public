import './LifetimeValue.css';
import piggyIcon from '../../assets/icons/icon-piggybank.svg';

export const LifetimeValue = () => {
    return (
        <section className="lifetime-value section">
            <div className="container">
                <div className="section-two-col">
                    <div className="lifetime-value-text">
                        <h2 className="section-title">
                            Up to 30% Better Over Your Lifetime
                        </h2>

                        <p className="section-description">
                            Research shows you can be up to 30% better off over your lifetime with a financial adviser. This means if you want $1 million saved for your retirement a financial adviser can help make that $1.3 million instead. A big difference. And you already know that if you want to retire well it's up to you to make it happen.
                        </p>

                        <p className="section-description">
                            But it's not easy knowing where to go to for the right advice.
                        </p>

                        <p className="section-description">
                            And it can be expensive especially when you're younger and don't have as much saved. That's why Equee is only $49 a month with a one-off setup fee of $99. A lot more affordable than the average adviser charges.
                        </p>

                        <p className="section-description">
                            But there's better news.
                        </p>

                        <div className="lifetime-value-callout">
                            <div className="callout-icon">
                                <img
                                    src={piggyIcon}
                                    alt="Piggy bank icon"
                                    className="piggy-icon"
                                />
                            </div>
                            <div className="callout-content">
                                <p className="callout-title">Your super fund will pay for it.</p>
                                <p className="callout-description">
                                    That's right. The rules are designed to help you if you understand how they work.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="illustration-container lifetime-order">
                        <img
                            src="/img/home-img-lifetime.png"
                            alt="Financial growth illustration showing upward trend with adviser guidance"
                            className="illustration-img"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};