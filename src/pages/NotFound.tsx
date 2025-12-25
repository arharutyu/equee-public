import { Link } from 'react-router-dom';

export const NotFound = () => {
    return (
        <div className="page not-found">
            <div className="container text-center">
                <h1 style={{ fontSize: '6rem', marginBottom: 'var(--spacing-md)' }}>404</h1>
                <h2>Page Not Found</h2>
                <p className="p-large mb-6">
                    The page you're looking for doesn't exist or has been moved.
                </p>
                <Link to="/" className="btn btn-primary-purple back-home">
                    Go back to Home
                </Link>
            </div>
        </div>
    );
};