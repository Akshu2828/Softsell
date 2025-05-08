import React, { useState } from "react";

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted");
  };

  return (
    <section className="py-16 px-6 text-center dark:bg-gray-900 dark:text-white">
      <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
        <input
          className="w-full p-3 border rounded bg-white text-black dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          name="name"
          placeholder="Name"
          required
          onChange={handleChange}
        />
        <input
          className="w-full p-3 border rounded bg-white text-black dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={handleChange}
        />
        <input
          className="w-full p-3 border rounded bg-white text-black dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          name="company"
          placeholder="Company"
          required
          onChange={handleChange}
        />
        <select
          className="w-full p-3 border rounded bg-white text-black dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          name="licenseType"
          required
          onChange={handleChange}
        >
          <option value="">Select License Type</option>
          <option value="Microsoft">Microsoft</option>
          <option value="Adobe">Adobe</option>
          <option value="Other">Other</option>
        </select>
        <textarea
          className="w-full p-3 border rounded bg-white text-black dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          name="message"
          placeholder="Your Message"
          rows={4}
          required
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-600 transition dark:bg-blue-700 dark:hover:bg-blue-800"
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
