import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <div className="page">
            <div className="hero">
                <div className="container">
                    <h1>Welcome to Your App</h1>
                    <p className="p-large">
                        Experience the power of modern design with our comprehensive style system
                    </p>
                    <div className="d-flex justify-center" style={{ gap: 'var(--spacing-md)' }}>
                        <Link to="/about" className="btn btn-primary-orange">
                            Learn More
                        </Link>
                        <Link to="/contact" className="btn btn-secondary">
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="section">
                    <h2 className="text-center mb-4">Our Features</h2>
                    <div className="d-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-lg)' }}>
                        <div className="card">
                            <h3>Modern Design</h3>
                            <p>Built with the latest design trends and best practices for optimal user experience.</p>
                        </div>
                        <div className="card">
                            <h3>Responsive Layout</h3>
                            <p>Looks great on all devices, from mobile phones to desktop computers.</p>
                        </div>
                        <div className="card">
                            <h3>Fast Performance</h3>
                            <p>Optimized for speed and performance with modern web technologies.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};