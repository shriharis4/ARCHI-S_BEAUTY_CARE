"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { services, serviceCategories } from "@/data/services";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionHeader } from "@/components/SectionHeader";
import { FinalCTASection } from "@/sections/FinalCTASection";
import { cn } from "@/lib/utils";
import { scrollFadeIn, fadeInUp, staggerContainer } from "@/lib/animations";

export function ServicesPageClient() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered =
    activeCategory === "all"
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <>
      <section className="bg-background pb-12 pt-28 md:pb-20 md:pt-36">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeader
            title="Our Premium Services"
            subtitle="Discover our range of professional beauty treatments and training programs designed for you."
          />

          <motion.div
            className="mb-12 flex flex-wrap justify-center gap-2"
            {...scrollFadeIn(fadeInUp)}
          >
            <button
              onClick={() => setActiveCategory("all")}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-medium transition-all duration-200",
                activeCategory === "all"
                  ? "bg-gold text-white"
                  : "bg-white text-text/60 hover:bg-primary/50"
              )}
            >
              All Services
            </button>

            {serviceCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "rounded-full px-5 py-2 text-sm font-medium transition-all duration-200",
                  activeCategory === cat.id
                    ? "bg-gold text-white"
                    : "bg-white text-text/60 hover:bg-primary/50"
                )}
              >
                {cat.title}
              </button>
            ))}
          </motion.div>

          <motion.div
            key={activeCategory}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {filtered.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      <FinalCTASection />
    </>
  );
}
