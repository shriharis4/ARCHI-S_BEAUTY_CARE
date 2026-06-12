"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { getWhatsAppUrl } from "@/components/WhatsAppButton";
import { scrollFadeIn, fadeInUp } from "@/lib/animations";

export function FinalCTASection() {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <section className="bg-gradient-to-br from-primary/30 to-gold/10 py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <motion.h2
          className="font-heading text-2xl font-bold text-text md:text-3xl lg:text-4xl"
          {...scrollFadeIn(fadeInUp)}
        >
          Ready to Begin Your Beauty Journey?
        </motion.h2>

        <motion.p
          className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-text/60 md:text-base"
          {...scrollFadeIn(fadeInUp)}
        >
          Book your consultation today and experience premium beauty care
          tailored just for you.
        </motion.p>

        <motion.div
          className="mt-6 flex flex-wrap justify-center gap-3"
          {...scrollFadeIn(fadeInUp)}
        >
          <Link
            href="/contact"
            className="rounded-lg bg-gold px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-gold/90 hover:shadow-lg"
          >
            Book Appointment
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-gold/40 px-6 py-2.5 text-sm font-semibold text-gold transition-all duration-200 hover:bg-gold/10"
          >
            Chat on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
