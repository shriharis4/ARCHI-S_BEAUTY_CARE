"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { VideoModal } from "@/components/VideoModal";
import { fadeUp, getMotionProps } from "@/lib/motion";
import { assetPath } from "@/lib/utils";

const galleryVideoSections = [
  {
    id: "transformations",
    title: "Our Transformations",
    subtitle: "Stunning skin transformations from our expert treatments",
    videos: [
      { src: "/gallery/Hydra_Facial_transformation.mp4", label: "Hydra Facial Transformation" },
      { src: "/gallery/happy_customer_transformation.mp4", label: "Happy Customer Transformation" },
      { src: "/gallery/customer_transforms.mp4", label: "Customer Transforms" },
      { src: "/gallery/ackni_transformation.mp4", label: "Acne Transformation" },
    ],
  },
  {
    id: "before-after",
    title: "Before & After Results",
    subtitle: "Real results — see the difference our treatments make",
    videos: [
      { src: "/gallery/before_and_after_treatment.mp4", label: "Before & After Treatment" },
      { src: "/gallery/before_and_after_the_treatment.mp4", label: "Treatment Results" },
      { src: "/gallery/result_after_one_session.mp4", label: "Result After One Session" },
      { src: "/gallery/BB_Glow.mp4", label: "BB Glow Result" },
    ],
  },
  {
    id: "customer-satisfaction",
    title: "Customer Satisfaction",
    subtitle: "Hear directly from our happy, glowing clients",
    videos: [
      { src: "/gallery/customer_feedback.mp4", label: "Customer Feedback" },
    ],
  },
];

export function GalleryPageClient() {
  const [activeVideo, setActiveVideo] = useState<{ src: string; label: string } | null>(null);

  return (
    <>
      {/* Hero Banner */}
      <section className="relative bg-background pt-28 pb-0 md:pt-36">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            title="Our Gallery"
            subtitle="Real transformations from our premium beauty treatments"
          />

          <motion.div
            className="relative mb-16 h-64 w-full overflow-hidden rounded-2xl shadow-lg md:h-96 lg:h-[480px] bg-primary/20"
            {...getMotionProps(fadeUp)}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-20 w-20 text-gold/50"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
              </svg>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Sections */}
      <section className="bg-background pb-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          {galleryVideoSections.map((section) => (
            <div key={section.id} className="mb-20">
              <motion.div className="mb-8" {...getMotionProps(fadeUp)}>
                <h2 className="font-heading text-2xl font-bold text-text md:text-3xl">
                  {section.title}
                </h2>
                <p className="mt-1 text-sm text-text/60">{section.subtitle}</p>
                <div className="mt-3 h-0.5 w-16 rounded bg-gold" />
              </motion.div>

              <div
                className={`grid gap-4 ${
                  section.videos.length === 1
                    ? "max-w-sm mx-auto"
                    : section.videos.length === 2
                    ? "sm:grid-cols-2 max-w-2xl mx-auto"
                    : section.videos.length === 3
                    ? "sm:grid-cols-2 md:grid-cols-3"
                    : "sm:grid-cols-2 lg:grid-cols-4"
                }`}
              >
                {section.videos.map((video, i) => (
                  <motion.div
                    key={i}
                    className="group relative cursor-pointer overflow-hidden rounded-2xl bg-primary/20 shadow-sm"
                    {...getMotionProps(fadeUp)}
                    onClick={() => setActiveVideo({ src: video.src, label: video.label })}
                  >
                    <div className="relative w-full overflow-hidden rounded-t-2xl">
                      <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/20 transition-all duration-300 group-hover:bg-black/40">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform duration-300 group-hover:scale-110">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 h-6 w-6 text-text">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute left-1.5 top-1.5 z-20 rounded bg-black/60 px-1.5 py-0.5 text-[9px] font-medium uppercase tracking-wide text-white/90">
                        Watch Video
                      </div>
                      <video
                        src={assetPath(video.src)}
                        preload="metadata"
                        muted
                        playsInline
                        className="aspect-[3/4] sm:aspect-[9/16] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="rounded-b-2xl bg-white px-3 py-2.5">
                      <p className="text-xs font-semibold text-text line-clamp-1">{video.label}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5 text-center md:px-8">
          <h2 className="font-heading text-2xl font-bold text-text md:text-3xl">
            Want Results Like These?
          </h2>
          <p className="mt-2 text-sm text-text/60">
            Book your consultation today and start your transformation.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-lg bg-gold px-8 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-gold/90 hover:shadow-lg"
          >
            Book Appointment
          </Link>
        </div>
      </section>

      {activeVideo && (
        <VideoModal
          src={activeVideo.src}
          label={activeVideo.label}
          isOpen={!!activeVideo}
          onClose={() => setActiveVideo(null)}
        />
      )}
    </>
  );
}
