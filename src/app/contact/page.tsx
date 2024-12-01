


"use client";
import React, { useState } from 'react';
import { EnvelopeIcon, PhoneIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline'
import { FadeIn } from '@/components/FadeIn'
import ConfirmationModal from '@/components/ConfirmationModal';


export default function ContactForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({ firstName: '', lastName: '', email: '', phone: '', message: '' });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const validate = () => {
    let tempErrors = { firstName: '', lastName: '', email: '', phone: '', message: '' };
    if (!firstName) tempErrors.firstName = 'First name is required';
    if (!lastName) tempErrors.lastName = 'Last name is required';
    if (!email) tempErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) tempErrors.email = 'Email is invalid';
    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = { firstName, lastName, email, phone, message };

    if (validate()) {
      try {
        // await sendToDiscord(formData);
        setIsModalOpen(true);
      } catch (error) {
        alert('Failed to send message.');
      }
    }
  };




  return (
    <>
      <div className="flex min-h-screen">
        <div className="flex w-1/2 bg-[#d1cec9] p-8 items-center justify-start">
          <div className="max-w-md text-left">
            <h1 className="mb-4 text-4xl font-bold text-black">Get in touch</h1>
            <p className="mb-4 text-lg text-black">
              Why should you reach out to us? Because we can make awesome stuff for you! We would be happy to hear about your ideas and get back to you shortly.
            </p>
            <p className="mb-4 text-lg text-black flex items-center">
              <BuildingOfficeIcon className="h-6 w-6 mr-2" />
              545 Example St Chicago, IL 17701
            </p>
            <p className="mb-4 text-lg text-black flex items-center">
              <PhoneIcon className="h-6 w-6 mr-2" />
              +1(800)555-6666
            </p>
            <p className="mb-4 text-lg text-black flex items-center">
              <EnvelopeIcon className="h-6 w-6 mr-2" />
              hello@example.com
            </p>
          </div>
        </div>

        <div className="flex w-1/2 bg-white p-8 items-center justify-center">
        <form onSubmit={handleSubmit} className="w-3/4 space-y-6">
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                autoComplete="given-name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                required
              />
              {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}
            </div>
            <div className="w-1/2">
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                autoComplete="family-name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                required
              />
              {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
              required
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              autoComplete="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-[#32c632] bg-opacity-60 py-2 px-4 text-sm font-medium text-black shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </div>
        </form>
        {isModalOpen && <ConfirmationModal onClose={() => setIsModalOpen(false)} />}
      </div>
      </div>
    </>
  )
}

