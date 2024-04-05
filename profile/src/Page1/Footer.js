import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
function Footer() {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();

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
        e.target.reset()
    };

    return (
        <footer className="bg-gray-200 px-8 pb-8">
            <div className="container mx-auto ">

                <div className="flex items-center justify-center">
                    <div className="block w-1/2 p-4" >
                        <form className="mt-4" ref={form} onSubmit={sendEmail}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 my-3">Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Enter your name"
                                    className="py-2 px-4 w-full bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 my-3">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    className="py-2 px-4 w-full bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="interest" className="block text-sm font-medium text-gray-700 my-3">Interest</label>
                                <input
                                    id="interest"
                                    type="text"
                                    placeholder="Enter your Interest"
                                    className="py-2 px-4 w-full bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 my-3">Message</label>
                                <input
                                    type="text"
                                    id="message"
                                    rows="4"
                                    placeholder="Describe your interest"
                                    className="py-2 px-4 w-full bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-yellow-500 font-medium text-white py-2 px-4 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                    <div className="block w-1/2 p-10 " >
                        <div class="text-left">
                            <p class="text-7xl font-bold text-yellow-500">Ready for an adventure?</p>
                            <p class="mb-4">Share your web ideas with us through our form and let's turn them into something amazing together!</p>
                        </div>

                    </div>
                </div>


            </div>
        </footer>

    );
}

export default Footer;
