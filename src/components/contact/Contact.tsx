import SectionTitle from "../ui/SectionTitle";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-40">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-12 md:gap-24">
        <div>
          <SectionTitle
            eyebrow="Get In Touch"
            heading={<>Let&apos;s Design<br />Something Beautiful.</>}
          />
          <ContactInfo />
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
