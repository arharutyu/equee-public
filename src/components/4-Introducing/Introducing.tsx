import './Introducing.css';
import checkmarkIcon from '../../assets/icons/icon-checkmark.svg';

export const Introducing = () => {
    const features = [
        "Helps you invest your super under the guidance of a licensed financial adviser",
        "Makes sure that your super stays correctly invested for the long term.",
        "Reviews the performance of your super and makes changes to investments when necessary.",
        "Gives you access to a licensed financial adviser by email.",
        "Makes sure you and your family are properly insured and protected against long term illness, injury and death. The last thing you need is big bills and loans you can't pay if you can't work",
        "Reviews your insurances to make sure you're not overpaying on premiums in the future",
        "Will always do your paperwork (something most super funds and insurers don't do for you)",
        "Sends you an easy-to-read monthly newsletter that keeps you updated on important financial topics"
    ];

    return (
        <section className="introducing section bg-purple-backdrop">
            <div className="container">
                <div className="introducing-content">
                    <div className="introducing-text">
                        <h2 className="introducing-title">
                            Introducing Equee
                        </h2>

                        <p className="introducing-subtitle">
                            Your financial bestfriend that runs on any device
                        </p>

                        <ul className="introducing-features-list">
                            {features.map((feature, index) => (
                                <li key={index} className="introducing-feature-item">
                                    <img src={checkmarkIcon} alt="" className="checkmark-icon" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};