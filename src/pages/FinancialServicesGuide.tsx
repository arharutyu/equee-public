import { Hero } from '../components/Hero/Hero.tsx';
import {FSGContent} from "../components/FSG/FinancialServicesGuide.tsx";

export const FinancialServicesGuide = () => {
    return (
        <>
            <Hero
                title="FINANCIAL SERVICES GUIDE"
                subtitle="A guide to our relationship with you and others"
                date="1 July 2021"
            />
            <FSGContent />
        </>
    );
};