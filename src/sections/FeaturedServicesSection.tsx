"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/data/services";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionHeader } from "@/components/SectionHeader";
import { scrollFadeIn, fadeInUp, staggerContainer } from "@/lib/animations";

export function FeaturedServicesSection() {
  const featured = services.slice(0, 6);

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          title="Our Services"
          subtitle="Premium beauty treatments designed for your unique needs"
        />

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featured.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          {...scrollFadeIn(fadeInUp)}
        >
          <Link
            href="/services"
            className="inline-block rounded-lg bg-gold px-8 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-gold/90 hover:shadow-lg"
          >
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
