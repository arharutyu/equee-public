export const Contact = () => {
    return (
        <div className="page">
            <div className="container">
                <h1 className="text-center">Get In Touch</h1>
                <p className="p-large text-center mb-6">
                    Ready to start your next project? We'd love to hear from you.
                </p>

                <div className="d-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-2xl)' }}>
                    <div className="card">
                        <h3>Contact Information</h3>
                        <div style={{ marginBottom: 'var(--spacing-md)' }}>
                            <h6>Email</h6>
                            <p className="mb-2">hello@yourcompany.com</p>
                        </div>
                        <div style={{ marginBottom: 'var(--spacing-md)' }}>
                            <h6>Phone</h6>
                            <p className="mb-2">+1 (555) 123-4567</p>
                        </div>
                        <div>
                            <h6>Address</h6>
                            <p className="mb-2">123 Business Street<br />City, State 12345</p>
                        </div>
                    </div>

                    <div className="card">
                        <h3>Send us a Message</h3>
                        <div className="contact-placeholder">
                            <p><strong>Contact form coming soon!</strong></p>
                            <p>This form will include fields for name, email, subject, and message, with proper validation and API integration.</p>
                            <div className="mt-4">
                                <button className="btn btn-primary-orange btn-sm" disabled>
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section text-center">
                    <h3>Follow Us</h3>
                    <p>Stay connected with us on social media for the latest updates and insights.</p>
                    <div className="d-flex justify-center" style={{ gap: 'var(--spacing-md)' }}>
                        <button className="btn btn-secondary btn-sm">LinkedIn</button>
                        <button className="btn btn-secondary btn-sm">Twitter</button>
                        <button className="btn btn-secondary btn-sm">Instagram</button>
                    </div>
                </div>
            </div>
        </div>
    );
};