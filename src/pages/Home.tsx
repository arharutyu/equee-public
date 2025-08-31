import {Hero} from "../components/Hero.tsx";
import {Statistics} from "../components/Statistics.tsx";

export const Home = () => {
    return (
        <div className="page">
            <Hero />
            <Statistics />
        </div>
    );
};