"use client";
import { route } from "./utils/routing";
import { useState } from "react";
import { useRouter } from 'next/navigation';

export default function Contact() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const submitForm = async (e) => {
    e.preventDefault();
    const res = await fetch(`${route}/form`, {
      body: JSON.stringify({
        name,
        email,
        subject,
        message
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST"
    });
    if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    } else {
      router.push('/about')
    }
  }
  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handleSubjectChange(e) {
    setSubject(e.target.value);
  }
  function handleMessageChange(e) {
    setMessage(e.target.value);
  }
  return (
    <section className="py-10 md:py-16 container max-w-screen-xl mx-auto px-4">
      <div className="bg-gray-50 px-8 py-10 max-w-[50%] mx-auto rounded-md">
        <h4 className="font-semibold text-gray-700 mb-4 text-lg">Get in touch</h4>
        <p className="font-normal text-gray-500 text-md mb-2">Please fill out the form below and I`ll be in touch</p>
        <div className="pt-2 pb-4 grid">
          <label htmlFor="name" className="font-medium text-gray-700 text-sm mb-2">Name</label>
          <input className="border p-3 bg-transparent" placeholder="Full Name" type="text" id="name" name="name" required onChange={handleNameChange}/>
        </div>
        <div className="pt-2 pb-4 grid">
          <label htmlFor="email" className="font-medium text-gray-700 text-sm mb-2">Email</label>
          <input className="border p-3 bg-transparent" placeholder="you@examp.le" type="text" id="email" name="email" required onChange={handleEmailChange} />
        </div>
        <div className="pt-2 pb-4 grid">
          <label htmlFor="subject" className="font-medium text-gray-700 text-sm mb-2">Subject</label>
          <input className="border p-3 bg-transparent" placeholder="Subject" type="text" id="subject" name="subject" required  onChange={handleSubjectChange} />
        </div>
        <div className="pt-2 pb-4 grid">
          <label htmlFor="message" className="font-medium text-gray-700 text-sm mb-2">Message</label>
          <input className="border p-3 bg-transparent" placeholder="Message" type="text" id="message" name="message" required onChange={handleMessageChange} />
        </div>  
        <div type="submit" className="bg-slate-950 text-white rounded-md mt-2 p-3 text-center" onClick={submitForm}>Submit</div>
      </div>  
    </section>
  )
}
