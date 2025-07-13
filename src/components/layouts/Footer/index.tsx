import Link from "next/link";

import { contact_info, footer_data } from "@/constants/data";

import Logo from "@/components/common/Logo";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      {/* Main Footer Content */}
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-6 text-center lg:col-span-2 lg:text-left">
            <div className="flex items-center justify-center gap-3 lg:justify-start">
              <div className="text-foreground rounded-lg bg-white p-2">
                <Logo />
              </div>
            </div>
            <p className="mx-auto max-w-md leading-relaxed text-white/80 lg:mx-0">
              {footer_data.description}
            </p>

            {/* Social Media */}
            <div className="space-y-3">
              <h4 className="text-lg font-semibold">Ikuti Kami</h4>
              <div className="flex justify-center gap-4 lg:justify-start">
                {footer_data.social_links.map(social => {
                  const IconComponent = social.icon;
                  return (
                    <Link
                      key={social.name}
                      href={social.href}
                      className="hover:text-primary flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 text-white transition-colors hover:bg-white"
                      aria-label={social.aria_label}
                    >
                      <IconComponent className="h-5 w-5" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6 text-center lg:text-left">
            <h4 className="text-lg font-semibold">Menu Utama</h4>
            <nav className="space-y-3">
              {footer_data.navigation_links.map(link => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-white/80 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 text-center lg:text-left">
            <h4 className="text-lg font-semibold">Hubungi Kami</h4>
            <div className="space-y-4">
              {contact_info.map(info => {
                const IconComponent = info.icon;
                return (
                  <div
                    key={info.type}
                    className="flex items-start justify-center gap-3 lg:justify-start"
                  >
                    <IconComponent className="mt-0.5 h-5 w-5 flex-shrink-0 text-white" />
                    <div>
                      <p className="text-white">{info.value}</p>
                      {info.type === "phone" && (
                        <p className="text-sm text-white/70">
                          Senin - Sabtu, 09:00 - 18:00
                        </p>
                      )}
                      {info.type === "email" && (
                        <p className="text-sm text-white/70">
                          Respon dalam 24 jam
                        </p>
                      )}
                      {info.type === "address" && (
                        <p className="text-sm text-white/70">
                          Jakarta Selatan 12345
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-primary-foreground/10 border-t border-white/20">
        <div className="container py-6">
          <div className="flex flex-col items-center justify-center gap-4 text-center md:flex-row md:justify-between md:text-left">
            <div>
              <p className="text-sm text-white/70">
                {footer_data.copyright_text}
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
              {footer_data.legal_links.map(link => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
