import { useState } from "react";

import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { ImReddit } from "react-icons/im";

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/chandan-1427",
    icon: FiGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/chandan-dakka-805068360/",
    icon: FiLinkedin,
  },
  {
    label: "X",
    href: "https://x.com/chandan_1427",
    icon: FaXTwitter,
  },
  {
    label: "Reddit",
    href: "https://www.reddit.com/user/Klutzy-Contract-353",
    icon: ImReddit,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/their_kanna_",
    icon: FiInstagram,
  },
];

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = "chandandakka@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-visible px-[1.618rem] py-[6.854rem] text-white md:px-[2.618rem] lg:px-[4.236rem]">
      <div className="relative z-10 mx-auto flex max-w-[68.54rem] flex-col gap-[2.618rem]">
        <header className="space-y-[1rem] md:space-y-[1.618rem]">
          <p className="text-[0.858rem] uppercase tracking-[0.382em] text-white/[0.382]">
            Contact
          </p>
        </header>

        <div className="grid gap-[2rem] md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:items-start md:gap-[2.618rem]">
          <div className="space-y-[0.764rem] md:space-y-[1rem]">
            <p className="text-[0.85rem] uppercase tracking-[0.26em] text-white/[0.5]">
              Email
            </p>

            <div className="rounded-[0.5rem] border border-white/[0.146] bg-black/[0.24] p-[1rem] backdrop-blur-[14px] sm:p-[1.25rem] md:p-[1.618rem]">
              <div className="flex flex-wrap items-center gap-[0.764rem]">
                <span className="min-w-0 flex-1 truncate text-[0.82rem] tracking-[0.04em] text-white/[0.9] sm:text-[0.95rem] md:text-[1.05rem]">
                  {email}
                </span>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="group relative shrink-0 cursor-pointer rounded-[0.3rem] border border-white/[0.18] bg-white/[0.06] px-[0.75rem] py-[0.42rem] text-[0.64rem] uppercase tracking-[0.14em] text-white/[0.8] transition-colors duration-200 hover:border-white/[0.16] hover:bg-white/[0.1] sm:px-[0.9rem] sm:text-[0.73rem]"
                >
                  {copied ? "Copied" : "Copy"}

                  {!copied && (
                    <span className="pointer-events-none absolute left-1/2 top-[-2.2rem] hidden -translate-x-1/2 rounded-[0.3rem] border border-white/[0.12] bg-[#111111] px-[0.5rem] py-[0.25rem] text-[0.58rem] uppercase tracking-[0.14em] text-white/[0.75] shadow-lg group-hover:block">
                      Copy
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-[0.764rem] md:space-y-[1rem]">
            <p className="text-[0.85rem] uppercase tracking-[0.26em] text-white/[0.5]">
              Social
            </p>

            <div className="overflow-y-visible pb-[0.25rem]">
              <div className="flex min-w-max gap-[0.764rem]">
                {SOCIALS.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group relative z-20 flex h-[3.2rem] w-[3.2rem] shrink-0 items-center justify-center rounded-[0.4rem] border border-white/[0.18] bg-white/[0.04] transition-all duration-200 hover:border-white/[0.16] hover:bg-white/[0.08]"
                    >
                      <div className="flex items-center justify-center text-white/[0.78] transition-colors duration-200 group-hover:text-white">
                        <Icon size={18} />
                      </div>

                      <span className="pointer-events-none absolute left-1/2 top-[-2.4rem] z-30 -translate-x-1/2 whitespace-nowrap rounded-[0.3rem] border border-white/[0.12] bg-[#111111] px-[0.55rem] py-[0.3rem] text-[0.58rem] uppercase tracking-[0.14em] text-white/[0.75] opacity-0 shadow-lg transition-all duration-200 group-hover:top-[-2.7rem] group-hover:opacity-100">
                        {social.label}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}