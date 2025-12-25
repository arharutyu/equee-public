import { useState } from 'react';
import './Process.css';
import processImg1 from '../../../public/img/home-img-process-1.jpg';
import processImg2 from '../../../public/img/home-img-process-2.jpg';
import processImg3 from '../../../public/img/home-img-process-3.jpg';

interface ProcessStep {
    id: number;
    title: string;
    items: { number: number; text: string }[];
    image: string;
}

const processSteps: ProcessStep[] = [
    {
        id: 1,
        title: 'Step 1 - Registering',
        image: processImg1,
        items: [
            {
                number: 1,
                text: 'We confirm your identity (this a Government requirement).'
            },
            {
                number: 2,
                text: 'You complete some questions for us.'
            },
            {
                number: 3,
                text: "We complete of advice with your recommendations and send it to you. You'll also have a copy of it in your personal online portal as well as all other communications we have with you, eg. Email."
            },
            {
                number: 4,
                text: "Once you've read the document and you're happy to proceed, we prepare the paperwork."
            },
            {
                number: 5,
                text: 'You have access to a human financial adviser via email. They will help you with any financial questions or any topic you wish to discuss like your super, saving, budgeting, salary sacrifice, etc.'
            }
        ]
    },
    {
        id: 2,
        title: 'Step 2 - Receiving documents',        image: processImg2,        items: [
            {
                number: 6,
                text: "Once you've signed the paperwork, we send some to your old superfund to close your account and to your new one (if we have recommended a change), for the opening of a new account and the transfer of your super balance."
            },
            {
                number: 7,
                text: 'The new superfund then sets up your account, receives your super balance and invests it based on our recommendations. They also provide you online log in details and password.'
            },
            {
                number: 8,
                text: 'If we are recommending insurance cover and you have agreed to proceed with our insurance recommendations, we will contact you to set up a time to complete a health questionnaire that the insurer requires.'
            },
            {
                number: 9,
                text: 'Once your insurances are approved, you will be issued with policy documents and be provided with online access.'
            }
        ]
    },
    {
        id: 3,
        title: 'Step 3 - Monitoring performance',
        image: processImg3,
        items: [
            {
                number: 10,
                text: 'Once everything is set up, we monitor your super investments.'
            },
            {
                number: 11,
                text: 'We report to you annually via email.'
            },
            {
                number: 12,
                text: "Every 3 years we will review any insurances you have set up with us. The review would cover things like if the premium you're currently paying is reasonable and if you've still got the right amount of cover based on any changes in personal circumstances. Generally, insurance requirements tend to change less often in a major way e.g. buying a house or say giving birth, so a review once every 3 years is enough. You're also welcome to contact us earlier, via email, for an earlier review if there has been a major change in your personal circumstances."
            }
        ]
    }
];

export const Process = () => {
    const [activeStep, setActiveStep] = useState(0);
    // const [mobileExpandedStep, setMobileExpandedStep] = useState<number | null>(null);

    const currentStep = processSteps[activeStep];
    const prevStep = activeStep > 0 ? processSteps[activeStep - 1] : null;
    const nextStep = activeStep < processSteps.length - 1 ? processSteps[activeStep + 1] : null;

    const handleStepChange = (index: number) => {
        setActiveStep(index);
    };

    // const toggleMobileStep = (stepId: number) => {
    //     setMobileExpandedStep(mobileExpandedStep === stepId ? null : stepId);
    // };

    return (
        <section className="process section">
            <div className="container">
                {/* Desktop Navigation */}
                <div className="process-navigation">
                    {prevStep && (
                        <button
                            className="process-nav-link prev"
                            onClick={() => handleStepChange(activeStep - 1)}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            {prevStep.title}
                        </button>
                    )}

                    <div className="process-dots">
                        {processSteps.map((step, index) => (
                            <button
                                key={step.id}
                                className={`process-dot ${index === activeStep ? 'active' : ''}`}
                                onClick={() => handleStepChange(index)}
                                aria-label={step.title}
                            />
                        ))}
                    </div>

                    {nextStep && (
                        <button
                            className="process-nav-link next"
                            onClick={() => handleStepChange(activeStep + 1)}
                        >
                            {nextStep.title}
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    )}
                </div>

                {/* Desktop View */}
                <div className="process-content-desktop">
                    <div className="process-text">
                        <h2 className="process-main-title">The Process</h2>

                        <h3 className="process-step-title">{currentStep.title}</h3>

                        <ul className="process-list">
                            {currentStep.items.map((item) => (
                                <li key={item.number} className="process-list-item">
                                    <span className="process-number">{item.number}</span>
                                    <p>{item.text}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="process-illustration">
                        <img src={currentStep.image} alt={currentStep.title} />
                    </div>
                </div>

                {/* Mobile View - Accordion */}
                <div className="process-content-mobile">
                    <h2 className="process-main-title">The Process</h2>

                    <div className="process-accordion">
                        {processSteps.map((step) => (
                            <div key={step.id} className="process-accordion-item">
                                <div className="process-accordion-content">
                                    <h3 className="process-step-title-mobile">{step.title}</h3>
                                    <ul className="process-list">
                                        {step.items.map((item) => (
                                            <li key={item.number} className="process-list-item">
                                                <span className="process-number">{item.number}</span>
                                                <p>{item.text}</p>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="process-illustration-mobile">
                                        <img src={step.image} alt={step.title} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};