import './Statistics.css';

import iconCash from '../../assets/icons/icon-cash.svg';
import iconSpeechBubble from '../../assets/icons/icon-speech-bubble.svg';
import iconArrowDownwards from '../../assets/icons/icon-arrow-downwards.svg';

export const Statistics = () => {
    const statistics = [
        {
            icon: iconCash,
            iconAlt: "Financial advice icon",
            text: "10.5 million Australians want financial advice but are put off by factors like cost"
        },
        {
            icon: iconSpeechBubble,
            iconAlt: "Advice consultation icon",
            text: "Even the most basic level of advice such as how to properly invest your super and how much personal risk insurance you need can cost as much as $2,000"
        },
        {
            icon: iconArrowDownwards,
            iconAlt: "Retirement planning icon",
            text: "Studies show that without financial advice you could be up to 30% worse off in retirement"
        }
    ];

    return (
        <section className="did-you-know">
            <div className="container-fluid">
                <div className="did-you-know-content">
                    <h2 className="section-title text-center">
                        Did you know that
                    </h2>

                    <div className="statistics-grid">
                        {statistics.map((stat, index) => (
                            <div key={index} className="statistic-item">
                                <div className="statistic-icon-wrapper">
                                    <img
                                        src={stat.icon}
                                        alt={stat.iconAlt}
                                        className="statistic-icon"
                                    />
                                </div>
                                <p className="statistic-text text-center">
                                    {stat.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};