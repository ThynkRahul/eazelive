"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const travelDestinations = ["India", "Bhutan", "Sri Lanka", "Nepal", "Maldives"];
const tourTypes = [
  "Adventure Tours",
  "Cultural Tours",
  "Luxury Tours",
  "Honeymoon Tours",
  "Pilgrim Tours",
  "Tribal Tours",
  "Wildlife Tours",
  "Bhutan Tours",
  "Sri Lanka Tours",
  "Nepal Tours",
  "Maldives Tours",
  "Custom Tour",
];

export default function ContactForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    city: "",
    email: "",
    phone: "",
    destination: "",
    dateOfTravel: "",
    people: "",
    tourType: "",
    message: "",
  });

  const [showToast, setShowToast] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const res = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setShowToast(true);
        setFormData({
          name: "",
          city: "",
          email: "",
          phone: "",
          destination: "",
          dateOfTravel: "",
          people: "",
          tourType: "",
          message: "",
        });

        setTimeout(() => {
          setShowToast(false);
          router.push("/thank-you");
        }, 2000);
      } else {
        alert(data.message || "Something went wrong. Please try again.");
      }
    } catch (err: any) {
      console.error(err);
      alert(err.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <>
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500">
          <div className="alert alert-success shadow-lg">
            <div>
              <span>We have received your query! Redirecting...</span>
            </div>
          </div>
        </div>
      )}

      {/* Contact Form */}
      <div className="card bg-base-100 max-w-[1170px] mx-8 sm:p-0 p-4 border-2 mt-0">
        <div className="text-center mt-5">
          <h3 className="text-3xl font-bold">Let&apos;s plan your dream trip!</h3>
          <p className="pt-6">
            Planning a trip? Drop your details and we&apos;ll help you organize a seamless travel
            experience.
          </p>
        </div>

        <form className="card-body gap-0" onSubmit={onSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="input input-bordered w-full border-gray-300"
              required
            />

            <input
              type="text"
              name="city"
              placeholder="City of Residence"
              value={formData.city}
              onChange={handleChange}
              className="input input-bordered w-full border-gray-300"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="input input-bordered w-full border-gray-300"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="input input-bordered w-full border-gray-300"
              required
            />

            <select
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              className={`select w-full border border-gray-300 ${formData.destination ? "text-black" : "text-gray-400"}`}
              required
            >
              <option value="" disabled hidden>
                Select Travel Destination
              </option>
              {travelDestinations.map(d => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>

            <div className="relative w-full">
              <input
                type="date"
                name="dateOfTravel"
                value={formData.dateOfTravel}
                onChange={handleChange}
                className={`input input-bordered w-full appearance-none border border-gray-300 placeholder-gray-400 ${
                  formData.dateOfTravel ? "text-black" : "text-transparent"
                } focus:border focus:border-gray-300`}
                required
                style={{
                  WebkitAppearance: "none",
                  MozAppearance: "textfield",
                }}
              />
              {!formData.dateOfTravel && (
                <span className="absolute left-3 top-3 text-gray-400 opacity-70 pointer-events-none">
                  Date of Travel
                </span>
              )}
            </div>

            <input
              type="number"
              name="people"
              placeholder="No. of People"
              value={formData.people}
              onChange={handleChange}
              className="input input-bordered w-full border-gray-300"
              required
            />

            <select
              name="tourType"
              value={formData.tourType}
              onChange={handleChange}
              className={`select w-full border border-gray-300 ${formData.tourType ? "text-black" : "text-gray-400"}`}
              required
            >
              <option value="" disabled hidden>
                Tour Type
              </option>
              {tourTypes.map(type => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="textarea textarea-bordered textarea-lg w-full mt-4 border-gray-300"
          ></textarea>

          <button
            type="submit"
            className="btn bg-[#025C7A] self-center rounded-[41px] text-white px-8 mt-4 hover:bg-[#6E9753] transition-all duration-300 w-[200px] uppercase"
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
}
