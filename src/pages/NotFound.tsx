import { Link } from 'react-router-dom';

export const NotFound = () => {
    return (
        <div className="page not-found">
            <h1>404 - Page Not Found</h1>
            <p>The page you're looking for doesn't exist.</p>
            <Link to="/" className="back-home">
                Go back to Home
            </Link>
        </div>
    );
};