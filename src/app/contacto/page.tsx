import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ContactForm from "@/components/sections/ContactForm";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import RichText from "@/components/ui/RichText";
import { contactoContent } from "@/lib/content/contacto";
import { siteContact, siteLegal } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Contacto",
  description: contactoContent.header.subtitle,
};

export default function ContactoPage() {
  const { header, intro } = contactoContent;

  return (
    <>
      <PageHeader {...header} />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <p className="text-lg text-piel-text/80">
              <RichText text={intro} />
            </p>
            <ContactForm />
          </Reveal>

          <div className="flex flex-col gap-6">
            <Reveal delay={80}>
              <Card>
                <h2 className="text-lg font-semibold text-piel-navy">Datos de contacto</h2>
                <ul className="mt-4 flex flex-col gap-3 text-sm text-piel-text/80">
                  <li>{siteContact.address}</li>
                  <li>
                    <a href={`tel:${siteContact.phone}`} className="hover:text-piel-navy">
                      {siteLegal.alternatePhone}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`https://wa.me/${siteContact.whatsapp.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-piel-navy"
                    >
                      WhatsApp: {siteContact.whatsapp}
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${siteContact.email}`} className="hover:text-piel-navy">
                      {siteContact.email}
                    </a>
                  </li>
                </ul>
              </Card>
            </Reveal>

            <Reveal delay={160}>
              <Card>
                <h2 className="text-lg font-semibold text-piel-navy">Sobre la institución</h2>
                <ul className="mt-4 flex flex-col gap-2 text-sm text-piel-text/80">
                  <li>{siteLegal.legalEntity}</li>
                  <li>{siteLegal.legalPersonality}</li>
                  <li>{siteLegal.publicBenefitEntity}</li>
                  <li>Fundada el {siteLegal.foundedOn}</li>
                </ul>
                <p className="mt-4 text-sm text-piel-text/80">
                  <RichText text={siteLegal.smileTrainPartnership} />
                </p>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
