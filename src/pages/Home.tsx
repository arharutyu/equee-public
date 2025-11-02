import {Hero} from "../components/1-Hero/Hero.tsx";
import {Statistics} from "../components/2-Statistics/Statistics.tsx";
import {SignUp} from "../components/3-SignUp/SignUp.tsx";
import {Introducing} from "../components/4-Introducing/Introducing.tsx";
import {LifetimeValue} from "../components/5-LifetimeValue/LifetimeValue.tsx";
import {WhyNow} from "../components/7-WhyNow/WhyNow..tsx";
import {RiskFree} from "../components/6-RiskFree/RiskFree.tsx";
import {TryNow} from "../components/8-TryNow/TryNow.tsx";
import {Process} from "../components/9-Process/Process.tsx";
import {FAQ} from "../components/10-FAQ/FAQ.tsx";

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
            <Process />
            <FAQ />
        </div>
    );
};