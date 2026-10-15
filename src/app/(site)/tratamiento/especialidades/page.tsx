import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/ui/PageHeader";
import PageBody from "@/components/ui/PageBody";
import BrandPanel from "@/components/ui/BrandPanel";
import Reveal from "@/components/ui/Reveal";
import RichText from "@/components/ui/RichText";
import {
  AppleIcon,
  BoneIcon,
  ClipboardCheckIcon,
  DnaIcon,
  DropIcon,
  EarIcon,
  HandHeartIcon,
  HospitalIcon,
  MovementIcon,
  SpeechIcon,
  StethoscopeIcon,
  SupportIcon,
  SyringeIcon,
  TeamIcon,
  ToothIcon,
} from "@/components/ui/icons";
import { especialidadesContent } from "@/lib/content/especialidades";
import type { SpecialtyIcon } from "@/types/tratamiento";

export const metadata: Metadata = {
  title: especialidadesContent.header.title,
  description: especialidadesContent.header.subtitle,
};

const iconMap: Record<SpecialtyIcon, typeof StethoscopeIcon> = {
  stethoscope: StethoscopeIcon,
  tooth: ToothIcon,
  ear: EarIcon,
  speech: SpeechIcon,
  dna: DnaIcon,
  syringe: SyringeIcon,
  hospital: HospitalIcon,
  heart: SupportIcon,
  team: TeamIcon,
  clipboard: ClipboardCheckIcon,
  "hand-heart": HandHeartIcon,
  apple: AppleIcon,
  movement: MovementIcon,
  bone: BoneIcon,
  drop: DropIcon,
};

export default function EspecialidadesPage() {
  const { header, specialties } = especialidadesContent;

  return (
    <>
      <PageHeader {...header} />

      <PageBody padding="lg">
        <div className="flex flex-col gap-16 lg:gap-24">
          {specialties.map((specialty, index) => {
            const Icon = iconMap[specialty.icon ?? "stethoscope"];
            const reverse = index % 2 === 1;
            return (
              <Reveal
                key={specialty.title}
                className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
              >
                <div className={reverse ? "lg:order-2" : undefined}>
                  {specialty.image ? (
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[2rem] shadow-lg sm:rounded-[2.5rem]">
                      <Image
                        src={specialty.image.src}
                        alt={specialty.image.alt}
                        fill
                        sizes="(min-width: 1024px) 38rem, 100vw"
                        className={`object-cover ${specialty.image.position ?? ""}`}
                      />
                    </div>
                  ) : (
                    <BrandPanel icon={Icon} className="aspect-[16/10]" />
                  )}
                </div>
                <div className={reverse ? "lg:order-1" : undefined}>
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-piel-blue-soft/40 text-piel-navy">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h2 className="text-2xl font-bold text-piel-navy sm:text-3xl">{specialty.title}</h2>
                  </div>
                  <p className="mt-4 text-piel-text/75">
                    <RichText text={specialty.description} />
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </PageBody>
    </>
  );
}
