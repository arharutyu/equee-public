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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <div className="contact-info-details">
                            <p className="contact-info-email">Johndoe@equee.com.au</p>
                            <p className="contact-info-phone">1234 567 890</p>
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