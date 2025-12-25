import './Callout.css';
import * as React from "react";

interface CalloutProps {
    title: string;
    children: React.ReactNode;
    variant?: 'purple' | 'blue' | 'cream';
}

export const Callout = ({ title, children, variant = 'purple' }: CalloutProps) => {
    return (
        <div className={`callout callout--${variant}`}>
            <h3 className="callout-title">{title}</h3>
            <div className="callout-content">
                {children}
            </div>
        </div>
    );
};
