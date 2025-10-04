import {Hero} from "../components/Hero.tsx";
import {Statistics} from "../components/Statistics.tsx";
import {SignUp} from "../components/SignUp.tsx";
import {Introducing} from "../components/Introducing.tsx";
import {LifetimeValue} from "../components/LifetimeValue.tsx";
import {WhyNow} from "../components/WhyNow..tsx";
import {RiskFree} from "../components/RiskFree.tsx";
import {TryNow} from "../components/TryNow.tsx";

export const Home = () => {
    return (
        <div className="page">
            <Hero />
            <Statistics />
            <SignUp />
            <Introducing />
            <LifetimeValue />
            <RiskFree />
            <WhyNow />
            <TryNow />
        </div>
    );
};