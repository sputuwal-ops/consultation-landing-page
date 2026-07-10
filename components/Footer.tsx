import Link from "next/link";
import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { navLinks, services, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-[#F8F9FA]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.3fr_0.7fr_0.9fr_1fr] lg:px-8">
        <div>
          <Link href="/" className="text-xl font-bold text-ink">{site.name}</Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-muted">
            AI marketing consulting for businesses that want better systems, stronger campaigns, and clearer growth.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Linkedin, Twitter].map((Icon, index) => (
              <a key={index} href="#" aria-label="Social profile" className="grid h-10 w-10 place-items-center rounded-full border border-line bg-white text-muted transition hover:border-blue hover:text-blue">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-ink">Quick Links</h3>
          <div className="mt-4 grid gap-3">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-muted hover:text-blue">{link.label}</Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-ink">Services</h3>
          <div className="mt-4 grid gap-3">
            {services.slice(0, 5).map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="text-sm text-muted hover:text-blue">{service.title}</Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-ink">Contact</h3>
          <div className="mt-4 grid gap-3 text-sm text-muted">
            <a className="flex gap-2 hover:text-blue" href={`mailto:${site.email}`}><Mail className="h-4 w-4" />{site.email}</a>
            <a className="flex gap-2 hover:text-blue" href={`tel:${site.phone}`}><Phone className="h-4 w-4" />{site.phone}</a>
            <p className="flex gap-2"><MapPin className="h-4 w-4" />{site.location}</p>
          </div>
          <form className="mt-5 flex overflow-hidden rounded-full border border-line bg-white p-1">
            <input aria-label="Newsletter email" placeholder="Email address" className="min-w-0 flex-1 bg-transparent px-4 text-sm outline-none" />
            <button className="button-gradient rounded-full px-4 text-sm font-semibold text-white">Join</button>
          </form>
        </div>
      </div>
      <div className="border-t border-line py-5 text-center text-sm text-muted">© {new Date().getFullYear()} Digital Saroz. All rights reserved.</div>
    </footer>
  );
}
