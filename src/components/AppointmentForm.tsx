"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { services } from "@/constants/services";
import { submitAppointment } from "@/lib/api";
import { validateAppointmentForm, sanitizeString } from "@/utils/validation";
import { AppointmentFormData } from "@/types";
import { fadeUp, getMotionProps } from "@/lib/motion";

const whatsappNumber =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "917619621584";

export function AppointmentForm() {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: "",
    mobileNumber: "",
    service: "",
    preferredDate: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (errors[name]) {
        setErrors((prev) => {
          const copy = { ...prev };
          delete copy[name];
          return copy;
        });
      }
    },
    [errors]
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const validationErrors = validateAppointmentForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors as Record<string, string>);
      return;
    }

    setStatus("loading");
    setErrors({});

    const sanitizedData: AppointmentFormData = {
      fullName: sanitizeString(formData.fullName),
      mobileNumber: sanitizeString(formData.mobileNumber),
      service: sanitizeString(formData.service),
      preferredDate: sanitizeString(formData.preferredDate),
      message: sanitizeString(formData.message),
    };

    try {
      const result = await submitAppointment(sanitizedData);
      if (result.success) {
        setStatus("success");
        setStatusMessage(result.message);
        setFormData({
          fullName: "",
          mobileNumber: "",
          service: "",
          preferredDate: "",
          message: "",
        });
        window.open(`https://wa.me/${whatsappNumber}?text=Hi%2C%20I%20am%20${encodeURIComponent(sanitizedData.fullName)}.%20I%20have%20booked%20an%20appointment%20for%20${encodeURIComponent(sanitizedData.service)}%20on%20${encodeURIComponent(sanitizedData.preferredDate)}.%20Please%20confirm.`, "_blank");
      } else {
        setStatus("error");
        setStatusMessage(result.message);
      }
    } catch {
      setStatus("error");
      setStatusMessage("Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        className="rounded-2xl bg-white p-8 text-center shadow-sm md:p-12"
        {...getMotionProps(fadeUp)}
      >
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="font-heading text-2xl font-bold text-text">
          Thank You!
        </h3>
        <p className="mt-2 text-sm text-text/60">{statusMessage}</p>
        <p className="mt-2 text-sm text-text/60">
          You will be redirected to WhatsApp to confirm your appointment.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-white p-6 shadow-sm md:p-8"
      {...getMotionProps(fadeUp)}
    >
      <h3 className="font-heading text-xl font-bold text-text">
        Book Your Appointment
      </h3>
      <p className="mt-1 text-sm text-text/60">
        Fill in your details and we&apos;ll get back to you.
      </p>

      <div className="mt-6 space-y-4">
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-text"
          >
            Full Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="mt-1 w-full rounded-lg border border-primary/40 bg-background px-4 py-2.5 text-sm text-text outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold"
            placeholder="Your full name"
          />
          {errors.fullName && (
            <p className="mt-1 text-xs text-red-400">{errors.fullName}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="mobileNumber"
            className="block text-sm font-medium text-text"
          >
            Mobile Number <span className="text-red-400">*</span>
          </label>
          <input
            type="tel"
            id="mobileNumber"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            className="mt-1 w-full rounded-lg border border-primary/40 bg-background px-4 py-2.5 text-sm text-text outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold"
            placeholder="10-digit mobile number"
          />
          {errors.mobileNumber && (
            <p className="mt-1 text-xs text-red-400">{errors.mobileNumber}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="service"
            className="block text-sm font-medium text-text"
          >
            Service Interested In <span className="text-red-400">*</span>
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="mt-1 w-full rounded-lg border border-primary/40 bg-background px-4 py-2.5 text-sm text-text outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold"
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.id} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="mt-1 text-xs text-red-400">{errors.service}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="preferredDate"
            className="block text-sm font-medium text-text"
          >
            Preferred Date <span className="text-red-400">*</span>
          </label>
          <input
            type="date"
            id="preferredDate"
            name="preferredDate"
            value={formData.preferredDate}
            onChange={handleChange}
            min={new Date().toISOString().split("T")[0]}
            className="mt-1 w-full rounded-lg border border-primary/40 bg-background px-4 py-2.5 text-sm text-text outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold"
          />
          {errors.preferredDate && (
            <p className="mt-1 text-xs text-red-400">{errors.preferredDate}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-text"
          >
            Message <span className="text-text/40">(Optional)</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            className="mt-1 w-full rounded-lg border border-primary/40 bg-background px-4 py-2.5 text-sm text-text outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold"
            placeholder="Any specific concerns or questions..."
          />
        </div>
      </div>

      {status === "error" && (
        <p className="mt-4 text-sm text-red-400">{statusMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 w-full rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-gold/90 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? (
          <span className="flex items-center justify-center gap-2">
            <svg
              className="h-4 w-4 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Submitting...
          </span>
        ) : (
          "Book Appointment"
        )}
      </button>
    </motion.form>
  );
}
