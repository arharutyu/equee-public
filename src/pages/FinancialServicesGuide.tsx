import { Header } from '../components/Header/Header.tsx';
import {FSGContent} from "../components/FSG/FinancialServicesGuide.tsx";

export const FinancialServicesGuide = () => {
    return (
        <>
            <Header
                title="FINANCIAL SERVICES GUIDE"
                subtitle="A guide to our relationship with you and others"
                date="1 July 2021"
            />
            <FSGContent />
        </>
    );
};