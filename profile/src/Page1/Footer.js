import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

function Footer() {
    const form = useRef();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        interest: "",
        message: ""
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }
        if (!formData.interest.trim()) {
            newErrors.interest = "Interest is required";
        }
        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const sendEmail = (e) => {
        e.preventDefault();
        if (validateForm()) {
            emailjs
                .sendForm('service_8n574le', 'template_325r88q', form.current, {
                    publicKey: 'T60ByU8LIeoUDXwfZ',
                })
                .then(
                    () => {
                        console.log('SUCCESS!');
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );
            e.target.reset();
            setFormData({
                name: "",
                email: "",
                interest: "",
                message: ""
            });
            setErrors({});
        }
    };

    return (
        <footer className="bg-gray-200 px-4 sm:px-8 pb-8" id="contactUs">
            <div className="container mx-auto pt-10">
                <div className="sm:flex flex-col md:flex-row items-center justify-center">
                    <div className="w-full md:w-1/2 p-4 md:p-10">
                        <div class="text-left">
                            <p class="text-4xl md:text-4xl font-bold text-yellow-500">Ready for an adventure?</p>
                            <p class="mb-4 text-sm md:text-base">Share your web ideas with us through our form and let's turn them into something amazing together!</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 p-4">
                        <form className="mt-4" ref={form} onSubmit={sendEmail}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 my-3">Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    className="py-2 px-4 w-full bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    
                                />
                                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 my-3">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    className="py-2 px-4 w-full bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    
                                />
                                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="interest" className="block text-sm font-medium text-gray-700 my-3">Interest</label>
                                <input
                                    id="interest"
                                    type="text"
                                    name="interest"
                                    value={formData.interest}
                                    onChange={handleChange}
                                    placeholder="Enter your Interest"
                                    className="py-2 px-4 w-full bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    
                                />
                                {errors.interest && <p className="text-red-500 text-xs mt-1">{errors.interest}</p>}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 my-3">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    placeholder="Describe your interest"
                                    className="py-2 px-4 w-full bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                ></textarea>
                                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                            </div>
                            <button
                                type="submit"
                                className="bg-yellow-500 font-medium text-white py-2 px-4 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
