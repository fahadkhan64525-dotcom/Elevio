import { MapPin } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";
import { business } from "@/lib/utils";

export default function MapSection() {
  return (
    <section id="map" className="bg-background-secondary py-24 md:py-40">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8">
        <SectionTitle heading="Visit Our Studio." className="mb-14" />
        <div
          className="flex flex-col items-center text-center gap-6 py-20 px-5 border border-border relative"
          style={{
            backgroundImage:
              "linear-gradient(rgba(13,13,13,.55),rgba(13,13,13,.75)), repeating-linear-gradient(0deg, rgba(245,239,230,.05) 0 1px, transparent 1px 60px), repeating-linear-gradient(90deg, rgba(245,239,230,.05) 0 1px, transparent 1px 60px)",
          }}
        >
          <div className="w-11 h-11 rounded-[50%_50%_50%_0] bg-gold rotate-[-45deg] flex items-center justify-center">
            <MapPin size={18} className="rotate-45 text-dark" />
          </div>
          <div>
            <h3 className="text-2xl font-serif">Noida Sector 93</h3>
            <p className="text-muted mt-2">Uttar Pradesh, India</p>
          </div>
          <Button href={business.mapsUrl} variant="outline" external showArrow>
            Open in Google Maps
          </Button>
        </div>
      </div>
    </section>
  );
}
