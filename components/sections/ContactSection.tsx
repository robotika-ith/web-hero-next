import { socials } from "@/config/content";
import { Icon } from "@/components/ui/Icon";
import { Img } from "@/components/ui/Img";

const socialCircleClasses: Record<string, string> = {
  instagram: "bg-gradient-to-br from-pink-500 to-purple-600",
  tiktok: "bg-black",
  youtube: "bg-red-600",
};

export function ContactSection() {
  return (
    <section id="contact" className="pt-32">
      <div className="section-container">
        <h1 className="title mb-16 text-center">
          Hubungi <span className="text-my-primary">Kami</span>
        </h1>

        <div className="flex flex-col gap-10 lg:flex-row">
          {/* Image */}
          <div className="slide-left hidden lg:block lg:w-1/2">
            <Img
              className="mx-auto w-full max-w-md"
              src="/assets/chat1.svg"
              alt="Contact Illustration"
            />
          </div>

          {/* Social media links */}
          <div className="slide-right m-auto w-full lg:m-0 lg:w-1/2">
            <div className="h-full rounded-lg bg-zinc-900 p-5 shadow-lg">
              <h2 className="mb-3 px-4 text-xl">
                Follow <span className="text-my-primary">Kami!!!</span>
              </h2>
              <ul className="flex h-full flex-col">
                {socials.map((social) => (
                  <li key={social.id} className="slide-right">
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 rounded-lg p-4 transition-colors hover:bg-zinc-800"
                    >
                      <span
                        className={`flex h-12 w-12 items-center justify-center rounded-full ${socialCircleClasses[social.id]}`}
                      >
                        <Icon name={social.id} className="h-6 w-6 text-white" />
                      </span>
                      <div>
                        <h3 className="font-semibold">{social.label}</h3>
                        <p className="text-zinc-400">{social.handle}</p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
