"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { VideoModal } from "@/components/VideoModal";
import { fadeUp, getMotionProps } from "@/lib/motion";
import { assetPath } from "@/lib/utils";

const transformationVideos = [
  {
    id: "v1",
    src: "/gallery/Hydra_Facial_transformation.mp4",
    title: "Hydra Facial Transformation",
    subtitle: "Deep hydration results",
  },
  {
    id: "v2",
    src: "/gallery/before_and_after_treatment.mp4",
    title: "Before & After Treatment",
    subtitle: "See the real difference",
  },
  {
    id: "v3",
    src: "/gallery/happy_customer_transformation.mp4",
    title: "Happy Customer",
    subtitle: "Real client satisfaction",
  },
];

export function TransformationGallerySection() {
  const [activeVideo, setActiveVideo] = useState<{ src: string; label: string } | null>(null);

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          title="Our Transformations"
          subtitle="Real results from our premium beauty treatments"
        />

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {transformationVideos.map((video) => (
            <motion.div
              key={video.id}
              className="group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl bg-primary/10 shadow-sm"
              {...getMotionProps(fadeUp)}
              onClick={() => setActiveVideo({ src: video.src, label: video.title })}
            >
              <div className="relative w-full overflow-hidden rounded-t-2xl">
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/20 transition-all duration-300 group-hover:bg-black/40">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-7 w-7 text-text">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute left-2 top-2 z-20 rounded bg-black/60 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-white/90">
                  Watch
                </div>
                <video
                  src={assetPath(video.src)}
                  preload="metadata"
                  muted
                  playsInline
                  className="aspect-[3/4] sm:aspect-[9/16] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-0.5 rounded-b-2xl bg-white px-4 py-3">
                <p className="text-sm font-semibold text-text">{video.title}</p>
                <p className="text-xs text-text/50">{video.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div className="mt-12 text-center" {...getMotionProps(fadeUp)}>
          <Link
            href="/gallery"
            className="inline-block rounded-lg bg-gold px-8 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-gold/90 hover:shadow-lg"
          >
            View Full Gallery
          </Link>
        </motion.div>

        {activeVideo && (
          <VideoModal
            src={activeVideo.src}
            label={activeVideo.label}
            isOpen={!!activeVideo}
            onClose={() => setActiveVideo(null)}
          />
        )}
      </div>
    </section>
  );
}
