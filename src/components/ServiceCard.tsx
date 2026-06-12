"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { type Service } from "@/data/services";
import { getWhatsAppUrl } from "@/components/WhatsAppButton";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { assetPath } from "@/lib/utils";

export function ServiceCard({
  service,
  index = 0,
}: {
  service: Service;
  index?: number;
}) {
  const whatsappUrl = getWhatsAppUrl(service.title);
  const imageSrc = assetPath(service.image || "/images/placeholder.svg");

  return (
    <motion.div
      className="group overflow-hidden rounded-2xl bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md md:p-8"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="relative mb-5 aspect-[4/5] w-full overflow-hidden rounded-xl bg-primary/30">
        <img
          src={imageSrc}
          alt={service.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement;
            if (!target.src.includes("placeholder")) {
              target.src = assetPath("/images/placeholder.svg");
            }
          }}
        />
      </div>

      <h3 className="font-heading text-xl font-semibold text-text">
        {service.title}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-text/60">
        {service.description}
      </p>

      {service.benefits.length > 0 && (
        <ul className="mt-4 space-y-1.5">
          {service.benefits.map((benefit) => (
            <li
              key={benefit}
              className="flex items-center gap-2 text-sm text-text/70"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              {benefit}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href={`/contact?service=${service.id}`}
          className="flex-1 rounded-lg bg-gold px-4 py-2.5 text-center text-sm font-semibold text-white transition-all duration-200 hover:bg-gold/90 hover:shadow-lg"
        >
          Book Now
        </Link>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-lg border border-gold/40 px-4 py-2.5 text-sm font-semibold text-gold transition-all duration-200 hover:bg-gold/10"
          aria-label={`Enquire about ${service.title} on WhatsApp`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          WhatsApp
        </a>
      </div>
    </motion.div>
  );
}

export function ServiceGrid({
  services,
}: {
  services: Service[];
}) {
  return (
    <motion.div
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {services.map((service, index) => (
        <ServiceCard key={service.id} service={service} index={index} />
      ))}
    </motion.div>
  );
}
