import './Hero.css';

interface HeroProps {
    title: string;
    subtitle?: string;
    date?: string;
}

export const Hero = ({ title, subtitle, date }: HeroProps) => {
    return (
        <section className="hero">
            <div className="container">
                <h1 className="hero-title">{title}</h1>
                {(subtitle || date) && (
                    <div className="hero-meta">
                        {subtitle && <p className="hero-subtitle">{subtitle}</p>}
                        {date && <p className="hero-date">{date}</p>}
                    </div>
                )}
            </div>
        </section>
    );
};