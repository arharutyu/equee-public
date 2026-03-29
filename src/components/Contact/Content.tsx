import { useState } from 'react';
import './Content.css';
import * as React from "react";

export const ContactContent = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        enquiry: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // No action - form submission not yet integrated
    };

    return (
        <section className="contact-content">
            <div className="container">
                <div className="contact-content-grid">
                    {/* Left Column - Contact Info */}
                    <div className="contact-info">
                        <h2 className="contact-info-title">We'd love to hear from you</h2>
                        <p className="contact-info-description">
                            Whether you have a question about Equee, need assistance with your application, or would like to learn more about how the platform works, our team is here to help.
                        </p>
                        <p className="contact-info-description">
                            Send us a message using the form and we’ll get back to you as soon as possible. We aim to respond to all enquiries promptly and provide clear, helpful information.
                        </p>
                        <div className="contact-info-details">
                            <p className="contact-info-email">info@equee.com.au</p>
                            <p className="contact-info-phone">1300 842 568</p>
                        </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div className="contact-form-wrapper">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="firstName" className="form-label">First Name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    className="form-control"
                                    placeholder="First Name"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="lastName" className="form-label">Last Name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    className="form-control"
                                    placeholder="Last Name"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="form-control"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone" className="form-label">Phone number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    className="form-control"
                                    placeholder="Phone number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="enquiry" className="form-label">Enquiry</label>
                                <textarea
                                    id="enquiry"
                                    name="enquiry"
                                    className="form-control form-textarea"
                                    placeholder="Enquiry"
                                    value={formData.enquiry}
                                    onChange={handleChange}
                                />
                            </div>

                            <button type="submit" className="btn btn-primary-purple">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};