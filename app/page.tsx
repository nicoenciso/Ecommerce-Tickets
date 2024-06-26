import Previews from "../components/Previews";
import OffersSection from "../components/OffersSection";

export const dynamic = "auto";
export const runtime = "edge";

export default function Home() {
  return (
    <div>
      <section>
        <Previews />
      </section>
      <section>
        <OffersSection />
      </section>
    </div>
  );
}
