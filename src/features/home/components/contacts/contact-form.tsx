"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const schema = z.object({
  name: z.string().min(2, "Full name is required"),
  email: z.email("Enter a valid email address"),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

interface ContactFormProps {
  services?: { value: string; label: string }[];
}

const ContactForm = ({ services }: ContactFormProps) => {
  const serviceOptions = services ?? [];
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setError(null);
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      setError("Something went wrong. Please try again or contact us directly.");
      return;
    }
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="bg-white rounded-sm shadow-lg shadow-slate-200/80 border border-slate-100 p-8 md:p-10">
      {submitted ? (
        <div className="flex flex-col items-center justify-center py-10 text-center">
          <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mb-4">
            <CheckCircle size={32} className="text-emerald-500" />
          </div>
          <h3 className="font-heading text-xl font-semibold text-[var(--navy)] mb-2">
            Message Sent Successfully
          </h3>
          <p className="text-slate-500 text-sm">
            Thank you for reaching out. We&apos;ll get back to you within one business day.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="text-xs text-slate-500 tracking-wider uppercase block mb-2 font-medium">
                Full Name <span className="text-red-400">*</span>
              </label>
              <Input
                {...register("name")}
                placeholder="Juan Dela Cruz"
                className="w-full bg-[var(--surface)] border border-slate-200 rounded-sm px-4 py-3 text-[var(--navy)] text-sm placeholder:text-slate-400 focus:border-[var(--gold)]/60 transition-colors"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
              )}
            </div>
            <div>
              <label className="text-xs text-slate-500 tracking-wider uppercase block mb-2 font-medium">
                Phone Number
              </label>
              <Input
                {...register("phone")}
                type="tel"
                placeholder="+63 912 345 6789"
                className="w-full bg-[var(--surface)] border border-slate-200 rounded-sm px-4 py-3 text-[var(--navy)] text-sm placeholder:text-slate-400 focus:border-[var(--gold)]/60 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="text-xs text-slate-500 tracking-wider uppercase block mb-2 font-medium">
              Email Address <span className="text-red-400">*</span>
            </label>
            <Input
              {...register("email")}
              type="email"
              placeholder="juan@company.com"
              className="w-full bg-[var(--surface)] border border-slate-200 rounded-sm px-4 py-3 text-[var(--navy)] text-sm placeholder:text-slate-400 focus:border-[var(--gold)]/60 transition-colors"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="text-xs text-slate-500 tracking-wider uppercase block mb-2 font-medium">
              Service Interest <span className="text-red-400">*</span>
            </label>
            <Controller
              name="service"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-full bg-[var(--surface)] border border-slate-200 rounded-sm px-4 py-3 text-[var(--navy)] text-sm focus:border-[var(--gold)]/60 transition-colors h-auto">
                    <SelectValue placeholder="Select a service…" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceOptions.map((s) => (
                      <SelectItem key={s.value} value={s.value}>
                        {s.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.service && (
              <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>
            )}
          </div>

          <div>
            <label className="text-xs text-slate-500 tracking-wider uppercase block mb-2 font-medium">
              Message <span className="text-red-400">*</span>
            </label>
            <Textarea
              {...register("message")}
              rows={4}
              placeholder="Tell us about your project or inquiry…"
              className="w-full bg-[var(--surface)] border border-slate-200 rounded-sm px-4 py-3 text-[var(--navy)] text-sm placeholder:text-slate-400 focus:border-[var(--gold)]/60 transition-colors resize-none"
            />
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
            )}
          </div>

          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[var(--navy)] hover:bg-[var(--navy-dark)] text-white font-semibold py-3.5 text-sm rounded-sm flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-60 shadow-md shadow-[var(--navy)]/20"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                Sending…
              </>
            ) : (
              <>
                <Send size={15} />
                Send Message
              </>
            )}
          </Button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
