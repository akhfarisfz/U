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
            <div className="container mx-auto">
                <div className="flex items-center justify-center">
                    <h1 className="text-5xl font-bold mt-10 ">UPZERO</h1>
                </div>
                <div className="w-1/2">
                <form className="mt-4"
                ref={form} onSubmit={sendEmail}
                >
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Enter your name"
                            className="py-2 px-4 w-full bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            className="py-2 px-4 w-full bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="interest" className="block text-sm font-medium text-gray-700">Interest</label>
                        <input
                            id="interest"
                            type="text"
                            placeholder="Enter your Interest"
                            className="py-2 px-4 w-full bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message " className="block text-sm font-medium text-gray-700">Message</label>
                        <input
                            id="message"
                            type="text"
                            placeholder="Describe your interest"
                            className="py-2 px-4 w-full bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Subscribe
                    </button>
                </form>
                </div>

            </div>
        </footer>

    );
}

export default Footer;
