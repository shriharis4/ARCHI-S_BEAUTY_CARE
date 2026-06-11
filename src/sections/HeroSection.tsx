"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { getWhatsAppUrl } from "@/components/WhatsAppButton";
import { fadeInUp, fadeInRight, fadeInLeft } from "@/lib/animations";

export function HeroSection() {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <section className="relative min-h-screen overflow-hidden bg-background pt-24 md:pt-28">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 pb-16 pt-8 md:grid-cols-2 md:px-8 md:pt-16 lg:pb-24">
        <div className="relative z-10">
          <motion.span
            className="mb-4 inline-block rounded-full bg-primary/60 px-4 py-1.5 text-xs font-medium text-text/70"
            variants={fadeInLeft}
            initial="hidden"
            animate="visible"
          >
            Premium Beauty Clinic in Raichur
          </motion.span>

          <motion.h1
            className="font-heading text-4xl font-bold leading-tight text-text md:text-5xl lg:text-6xl"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            Where Your{" "}
            <span className="text-gold">Natural Beauty</span> Shines
          </motion.h1>

          <motion.p
            className="mt-4 max-w-lg text-sm leading-relaxed text-text/60 md:text-base"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            Experience premium skincare, beauty treatments, and professional
            grooming at Archi&apos;s Beauty Care. Personalized care for every
            woman.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-4"
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
          >
            <Link
              href="/contact"
              className="rounded-lg bg-gold px-8 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-gold/90 hover:shadow-lg"
            >
              Book Appointment
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-gold/40 px-8 py-3 text-sm font-semibold text-gold transition-all duration-200 hover:bg-gold/10"
            >
              Chat on WhatsApp
            </a>
          </motion.div>
        </div>

        <motion.div
          className="relative aspect-[4/5] md:aspect-square"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/40 to-gold/10" />
          <Image
            src="/images/placeholder.svg"
            alt="Premium beauty treatment at Archi's Beauty Care"
            fill
            className="rounded-3xl object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      </div>
    </section>
  );
}
