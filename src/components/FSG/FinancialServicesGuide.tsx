import { Callout } from '../Callout/Callout.tsx';
import './FinancialServicesGuide.css';

export const FSGContent = () => {
    return (
        <section className="fsg-page">
            <div className="container">
                {/* Intro Paragraph */}
                <p className="fsg-intro">
                    This Financial Services Guide (FSG) is issued by Lifestyle Investment Planning Pty Ltd,
                    which holds Australian Financial Service Licence number 278361. This FSG comprises
                    and must be read in conjunction with your adviser's current Adviser Profile that
                    includes amongst other information, details of your adviser's remuneration.
                </p>

                {/* Not Independent Callout */}
                <Callout title="Not independent" variant="purple">
                    <p>
                        Lifestyle Investment Planning and its authorised representatives are not independent in relation
                        to the provision of personal advice. Lifestyle Investment Planning may also receive commissions
                        from life insurance providers when we recommend life insurance to our clients.
                    </p>
                </Callout>

                {/* Additional content paragraphs */}
                <p className="section-description">
                    Distribution of this FSG by your adviser, who is a Lifestyle Investment Planning Authorised
                    Representative, is authorised by the licensee, Lifestyle Investment Planning.
                </p>

                <p className="section-description">
                    This FSG dated 1 July 2021 describes our financial planning and advisory services to assist you to
                    decide whether to use our services. It also outlines your rights as a client and our obligations and
                    responsibilities as the licensee and your adviser.
                </p>

                <p className="section-description">
                    You have the right to ask us about our charges, the type of advice we will provide to you, and what you can do if you have a complaint about our services. This FSG is intended to inform you of certain basic matters relating to our relationship, prior to us providing you with a financial service.
                </p>
                {/* Heading with bulleted list */}
                <h3 className="fsg-subtitle">
                    The key matters covered by the FSG include the following:
                </h3>

                <ul className="feature-list">
                    <li className="feature-list-item">who Lifestyle Investment Planning and your adviser are;</li>
                    <li className="feature-list-item">how we can be contacted;</li>
                    <li className="feature-list-item">how Lifestyle Investment Planning and your adviser are paid;</li>
                    <li className="feature-list-item">what services we are authorised to provide to you;</li>
                    <li className="feature-list-item">details of any potential conflicts of interests;</li>
                    <li className="feature-list-item">details of our professional indemnity insurance; and</li>
                    <li className="feature-list-item">details of our dispute resolution procedures and how you can access them.</li>
                </ul>

                {/* Section heading */}
                <h2 className="fsg-section-title">
                    Statements of Advice and Product Disclosure Statements
                </h2>

                {/* Body paragraph */}
                <p className="section-description">
                    You should also be aware that you must receive a Statement of Advice (SOA) and a Product
                    Disclosure Statement(s) when personal advice involving a financial product is provided to you...
                </p>
            </div>
        </section>
    );
};