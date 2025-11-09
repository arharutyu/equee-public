import './Header.css';

interface HeaderProps {
    title: string;
    subtitle?: string;
    date?: string;
}

export const Header = ({ title, subtitle, date }: HeaderProps) => {
    return (
        <section className="header">
            <div className="container">
                <h1 className="header-title">{title}</h1>
                {(subtitle || date) && (
                    <div className="header-meta">
                        {subtitle && <p className="header-subtitle">{subtitle}</p>}
                        {date && <p className="header-date">{date}</p>}
                    </div>
                )}
            </div>
        </section>
    );
};