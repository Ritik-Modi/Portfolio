import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "sonner";

function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
  console.log("Service:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
console.log("Template:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
console.log("Public Key:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

    emailjs
      .send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          message: form.message,
        },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        toast.success("Message sent successfully!");
        setForm({ name: "", email: "", phone: "", message: "" });
      })
      .catch((error) => {
        toast.warning("Something went wrong. Please try again.");
        console.error(error);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="flex justify-center items-center px-4 py-16 sm:px-6 md:px-12">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-[#1a1a1a] p-8 rounded-lg shadow-md space-y-6"
      >
        {/* NAME */}
        <div>
          <label className="block mb-1 font-medium text-white">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            name="name"
            required
            type="text"
            value={form.name}
            onChange={handleChange}
            className="w-full bg-[#2d2d2d] text-white p-3 rounded outline-none"
            placeholder="Enter your name"
          />
        </div>

        {/* EMAIL */}
        <div>
          <label className="block mb-1 font-medium text-white">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            name="email"
            required
            type="email"
            value={form.email}
            onChange={handleChange}
            className="w-full bg-[#2d2d2d] text-white p-3 rounded outline-none"
            placeholder="Enter your email"
          />
        </div>

        {/* PHONE */}
        <div>
          <label className="block mb-1 font-medium text-white">Phone No</label>
          <input
            name="phone"
            type="text"
            value={form.phone}
            onChange={handleChange}
            className="w-full bg-[#2d2d2d] text-white p-3 rounded outline-none"
            placeholder="Enter your phone number"
          />
        </div>

        {/* MESSAGE */}
        <div>
          <label className="block mb-1 font-medium text-white">
            About Project <span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            required
            rows={6}
            value={form.message}
            onChange={handleChange}
            className="w-full bg-[#2d2d2d] text-white p-3 rounded outline-none resize-none"
            placeholder="Describe your project..."
          />
        </div>

        {/* BUTTON */}
        <div>
          <button
            type="submit"
            disabled={loading}
            className="bg-white text-black px-6 py-2 rounded font-semibold hover:opacity-90 transition-all"
          >
            {loading ? "Sending..." : "➤ Send"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactPage;
