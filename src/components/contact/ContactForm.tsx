"use client";

import { useState, useRef } from "react";
import { AlertCircle, CheckCircle, Clock, Loader2, Lock, MessageCircle, Send } from "lucide-react";
import { CLINIC } from "@/lib/constants";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const formRef = useRef<HTMLFormElement>(null);

  const validate = (data: FormData): Record<string, string> => {
    const errs: Record<string, string> = {};
    const name  = data.get("name")   as string;
    const phone = data.get("phone")  as string;
    const email = data.get("email")  as string;
    const reason = data.get("reason") as string;

    if (!name || name.trim().length < 2)
      errs.name = "Please enter your full name (at least 2 characters).";

    const phoneClean = phone.replace(/[\s\-\+]/g, "");
    if (!phone || !/^[6-9]\d{9}$/.test(phoneClean) && !/^91[6-9]\d{9}$/.test(phoneClean))
      errs.phone = "Please enter a valid 10-digit Indian mobile number.";

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "Please enter a valid email address.";

    if (!reason || reason === "")
      errs.reason = "Please select a reason for your visit.";

    return errs;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const validationErrors = validate(data);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus("loading");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();

      if (json.success) {
        setStatus("success");
        formRef.current?.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-brand-offwhite border border-brand-border rounded-xl2 p-7 lg:p-9 h-full flex flex-col items-center justify-center text-center py-12 px-6">
        {/* Animated checkmark circle */}
        <div className="w-20 h-20 rounded-full bg-green-50 border-2 border-brand-green flex items-center justify-center mx-auto">
          <CheckCircle className="w-10 h-10 text-brand-green" />
        </div>

        <h3 className="font-heading text-h3 text-brand-navy mt-6">
          Request Sent Successfully!
        </h3>

        <p className="font-body text-sm text-brand-gray mt-3 max-w-sm mx-auto">
          Thank you for reaching out. Dr. Paul&apos;s team will contact you
          on your provided phone number within a few hours.
        </p>

        {/* Clinic hours reminder */}
        <div className="bg-white border border-brand-border rounded-xl p-4 mt-6 text-left max-w-sm mx-auto w-full">
          <p className="text-xs font-semibold text-brand-navy flex items-center gap-2">
            <Clock className="w-4 h-4 text-brand-green" />
            Clinic Hours (for your reference)
          </p>
          <p className="text-xs text-brand-gray mt-2">
            Monday–Sunday: 10:00 AM – 2:00 PM &middot; 5:00 PM – 10:00 PM
          </p>
        </div>

        {/* WhatsApp fallback */}
        <a
          href={CLINIC.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-brand-green hover:underline"
        >
          <MessageCircle className="w-4 h-4" />
          Or message us directly on WhatsApp
        </a>

        {/* Reset button */}
        <button
          onClick={() => setStatus("idle")}
          className="block mx-auto mt-4 text-xs text-brand-gray hover:text-brand-navy underline"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  const inputClasses = "w-full px-4 py-3.5 rounded-xl border border-brand-border bg-gray-50/50 font-body text-sm text-brand-charcoal placeholder:text-brand-gray/50 transition-all duration-300 outline-none focus:bg-white focus:border-brand-navy focus:ring-4 focus:ring-brand-navy/5 focus:shadow-sm";
  const errorInputClasses = "border-brand-red focus:border-brand-red focus:ring-brand-red/10";

  return (
    <div className="bg-white rounded-2xl p-7 lg:p-10 h-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-brand-border/60">
      <span className="badge-red">APPOINTMENT ENQUIRY</span>
      <h3 className="font-heading text-h3 text-brand-navy mt-2">
        Send Us a Message
      </h3>
      <p className="font-body text-sm text-brand-gray mt-1 mb-8">
        Fill in the form below and Dr. Paul&apos;s team will contact you within a few hours.
      </p>

      <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
        {/* Web3Forms config */}
        <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY} />
        <input type="hidden" name="subject" value="New Appointment Enquiry — Dr. J.D. Paul's Clinic" />
        <input type="hidden" name="from_name" value="Dr. JD Paul Website" />
        <input type="hidden" name="redirect" value="false" />
        <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

        {/* Grid for Name & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Name */}
          <div>
            <label className="block font-body font-semibold text-brand-navy text-sm mb-1.5">
              Full Name <span className="text-brand-red">*</span>
            </label>
            <input 
              type="text" 
              name="name" 
              placeholder="Your full name"
              className={`${inputClasses} ${errors.name ? errorInputClasses : ""}`}
            />
            {errors.name && (
              <p className="text-brand-red text-xs mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.name}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block font-body font-semibold text-brand-navy text-sm mb-1.5">
              Phone Number <span className="text-brand-red">*</span>
            </label>
            <input 
              type="tel" 
              name="phone" 
              placeholder="+91 98765 43210"
              className={`${inputClasses} ${errors.phone ? errorInputClasses : ""}`}
            />
            {errors.phone ? (
              <p className="text-brand-red text-xs mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.phone}
              </p>
            ) : (
              <p className="text-xs text-brand-gray mt-1">We will contact you on this number</p>
            )}
          </div>
        </div>

        {/* Email & Reason */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Email */}
          <div>
            <label className="block font-body font-semibold text-brand-navy text-sm mb-1.5 flex justify-between">
              Email Address <span className="text-brand-gray text-xs font-normal mt-0.5">(optional)</span>
            </label>
            <input 
              type="email" 
              name="email" 
              placeholder="your@email.com"
              className={`${inputClasses} ${errors.email ? errorInputClasses : ""}`}
            />
            {errors.email && (
              <p className="text-brand-red text-xs mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.email}
              </p>
            )}
          </div>

          {/* Reason */}
          <div>
            <label className="block font-body font-semibold text-brand-navy text-sm mb-1.5">
              Reason for Visit <span className="text-brand-red">*</span>
            </label>
            <div className="relative">
              <select 
                name="reason" 
                defaultValue=""
                className={`appearance-none bg-white ${inputClasses} ${errors.reason ? errorInputClasses : ""}`}
                style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: `right 0.5rem center`, backgroundRepeat: `no-repeat`, backgroundSize: `1.5em 1.5em` }}
              >
                <option value="" disabled>-- Select a condition --</option>
                <option value="PCOD / PCOS">PCOD / PCOS</option>
                <option value="Piles, Fissure, Fistula">Piles, Fissure, Fistula</option>
                <option value="Fatty Liver">Fatty Liver</option>
                <option value="Liver Cirrhosis">Liver Cirrhosis</option>
                <option value="Infertility (Male & Female)">Infertility (Male & Female)</option>
                <option value="Chronic Disease / Lifestyle Condition">Chronic Disease / Lifestyle Condition</option>
                <option value="General Consultation">General Consultation</option>
                <option value="Other">Other</option>
              </select>
            </div>
            {errors.reason && (
              <p className="text-brand-red text-xs mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.reason}
              </p>
            )}
          </div>
        </div>

        {/* Preferred Time */}
        <div>
          <label className="block font-body font-semibold text-brand-navy text-sm mb-1.5 flex justify-between">
            Preferred Day &amp; Time <span className="text-brand-gray text-xs font-normal mt-0.5">(optional)</span>
          </label>
          <input 
            type="text" 
            name="preferred_time" 
            placeholder="e.g. Saturday morning, Weekday evening"
            className={`${inputClasses}`}
          />
          <p className="text-xs text-brand-gray mt-1">
            Clinic hours: Mon–Sun, 10AM–2PM and 5PM–10PM
          </p>
        </div>

        {/* Message */}
        <div>
          <label className="block font-body font-semibold text-brand-navy text-sm mb-1.5 flex justify-between">
            Additional Details <span className="text-brand-gray text-xs font-normal mt-0.5">(optional)</span>
          </label>
          <textarea 
            name="message" 
            rows={4} 
            placeholder="Any additional information about your condition or concerns..."
            className={`${inputClasses} resize-none`}
          ></textarea>
        </div>

        {/* Error Banner */}
        {status === "error" && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3 mt-2">
            <AlertCircle className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-brand-red">
                Something went wrong
              </p>
              <p className="text-xs text-red-600 mt-1">
                Your message could not be sent. Please try again, or contact
                us directly on{" "}
                <a href={`tel:${CLINIC.phoneRaw}`} className="underline font-semibold">
                  {CLINIC.phone}
                </a>.
              </p>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-primary w-full mt-2 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Send Appointment Request
            </>
          )}
        </button>

        {/* Privacy Note */}
        <p className="text-center text-xs text-brand-gray mt-4 flex items-center justify-center gap-1.5">
          <Lock className="w-3 h-3 text-brand-gray" />
          Your details are private and will only be used to contact you regarding your appointment.
        </p>

      </form>
    </div>
  );
}
