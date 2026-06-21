import Link from "next/link";
import { businessInfo, navLinks } from "@/constants/business";

export function Footer() {
  return (
    <footer className="bg-text text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="font-heading text-xl font-bold text-primary">
              Archies <span className="text-gold">Beauty Clinic</span>
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Premium beauty clinic and restuarnt and academy in Raichur, offering advanced
              skin treatments, beauty services, and professional training.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">
              Contact
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <a
                  href={`tel:${businessInfo.phone}`}
                  className="transition-colors hover:text-primary"
                >
                  {businessInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${businessInfo.email}`}
                  className="transition-colors hover:text-primary"
                >
                  {businessInfo.email}
                </a>
              </li>
              <li>{businessInfo.address}</li>
              <li>
                <a
                  href={businessInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-primary"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/50">
&copy; {new Date().getFullYear()} Archies Beauty Clinic. All rights
            reserved.
        </div>
      </div>
    </footer>
  );
}
