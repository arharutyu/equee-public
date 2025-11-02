import { useState } from 'react';
import './FAQ.css';

interface FAQItem {
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        question: "Can't I just leave my super with the option I've chosen?",
        answer: "You can but there's a big problem with set and forget super. Things change. Your investment strategy or fund may not always be the right one for you. Fund performance changes. Fees change. Even the people managing your money may change. Equee makes sure you always have the right strategy in place for you. Having the right strategy may mean better returns over the life of the investment and in turn a bigger super balance."
    },
    {
        question: "How much insurance do I need?",
        answer: "Most Aussies are underinsured but they only find that out when something happens and it's too late. They then realise they aren't covered properly at all. Equee tries to make sure you have the best possible protection at a competitive price. No one likes paying for insurance, but what's worse is being unprotected. It can lead to financial nightmares that can take years to recover from, if ever."
    },
    {
        question: "What if I need more help?",
        answer: "You have unlimited email access to expert financial advisers to answer your basic questions. If something is more complex, then we will connect you directly with an adviser, at a great rate, who can help you."
    },
    {
        question: "Isn't seeing a financial adviser in person better?",
        answer: "Great question. If your financial affairs are complex the answer is always yes. But what most people need, and don't get, is to get the basics right. Equee does everything a financial adviser will but for a lot less money out of your pocket. If the advice you require becomes complex, eg. inheritance, family trust, etc. Equee can connect you to a face-to-face- adviser who can help you. Please note that depending on the complexity of the advice required, there may be extra costs."
    },
    {
        question: "Who's behind Equee?",
        answer: "Equee is the brainchild of two licensed financial advisers that want to help everyone access basic financial advice for their super and insurance needs without paying a large amount of fees that they would normally have to, if they were to go see a financial adviser personally. It's that simple advice at an affordable price from licensed advisers that help you set everything up as well. And once you're a client they look after your super and insurances and can also help you with other basic advice matters such as salary sacrificing into super, budgeting, saving, personal tax (not tax returns)."
    },
    {
        question: "Does Equee work on all devices?",
        answer: "Yes. If you have any problems support is one email away."
    }
];

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faq section">
            <div className="container">
                <div className="faq-grid">
                    <div className="faq-header">
                        <h2 className="section-title">
                            Frequently asked questions
                        </h2>
                    </div>

                    <div className="faq-items">
                        {faqData.map((item, index) => (
                            <div
                                key={index}
                                className={`faq-item ${openIndex === index ? 'faq-item-open' : ''}`}
                            >
                                <button
                                    className="faq-question"
                                    onClick={() => toggleFAQ(index)}
                                    aria-expanded={openIndex === index}
                                >
                                    <span className="faq-question-text">{item.question}</span>
                                    <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
                                </button>

                                {openIndex === index && (
                                    <div className="faq-answer">
                                        <p>{item.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};