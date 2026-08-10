import { IoIosArrowForward } from "react-icons/io";
import { EXPERIENCE_ITEMS } from "@/data/experience_items";
import SectionEyebrow from "@/components/layout/SectionEyebrow";
import SectionHeading from "@/components/layout/SectionHeading";
import Card from "@/components/content/Card";
import Description from "@/components/content/Description";
import MetaDataRow from "@/components/content/MetaDataRow";
import LinkButton from "@/components/ui/LinkButton";
import { ABOUT_PARAGRAPHS } from "@/data/about_paragraphs";

function ExperienceCard({ title, value, description, link, domain }) {
  return (
    <Card>
      <MetaDataRow title={title} value={value} />
      <Description desc={description} />

      <div className="mt-auto flex justify-end border-t border-white/30 pt-[0.8rem]">
        <LinkButton href={link}>
          <span>{domain}</span>
          <IoIosArrowForward />
        </LinkButton>
      </div>
    </Card>
  );
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative px-[1.618rem] py-[6.854rem] text-white md:px-[2.618rem] lg:px-[4.236rem]"
    >
      <div className="mx-auto flex max-w-[68.54rem] flex-col gap-[4.236rem]">
        <div className="space-y-[2.618rem]">
          <div className="space-y-[1.618rem]">
            <SectionEyebrow label="About" />
            <SectionHeading>
              Building practical AI agents and full-stack systems that are
              reliable, scalable, and grounded in real-world problems.
            </SectionHeading>

          </div>

          <div className="space-y-[1.618rem]">
            {ABOUT_PARAGRAPHS.map((paragraph) => (
              <Description
                key={paragraph.slice(0, 24)}
                desc={paragraph}
                className="text-[1.06rem] leading-[1.618] text-white/90"
              />
            ))}
          </div>
        </div>

        <div className="space-y-[2.618rem]">
          <SectionEyebrow label="Experience" />
          
          <div className="grid gap-[1.618rem] md:grid-cols-2 md:gap-[2.618rem]">
            {EXPERIENCE_ITEMS.map((item) => (
              <ExperienceCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}