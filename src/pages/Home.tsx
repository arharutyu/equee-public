import {Hero} from "../components/Hero.tsx";
import {Statistics} from "../components/Statistics.tsx";
import {SignUp} from "../components/SignUp.tsx";
import {Introducing} from "../components/Introducing.tsx";
import {LifetimeValue} from "../components/LifetimeValue.tsx";

export const Home = () => {
    return (
        <div className="page">
            <Hero />
            <Statistics />
            <SignUp />
            <Introducing />
            <LifetimeValue />
        </div>
    );
};