import { useTranslations } from "next-intl";

export default function HistoryConceptSection() {
  const tH = useTranslations("history");
  const tC = useTranslations("concept");

  return (
    <section id="history" className="py-14 md:py-24">
      <div className="container-w grid gap-10">
        <div className="card shadow-soft flex flex-col md:h-full">
          <h3 className="serif text-xl md:text-2xl font-semibold mb-3 text-white">
            {tH("title")}
          </h3>
          <div className="flex-1">
            <p className="text-neutral-300 leading-relaxed">{tH("body")}</p>
          </div>
        </div>

        <div id="concept" className="card shadow-soft flex flex-col md:h-full">
          <h3 className="serif text-xl md:text-2xl font-semibold mb-3 text-white">
            {tC("title")}
          </h3>
          <div className="flex-1">
            <p className="text-neutral-300 leading-relaxed">{tC("body")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}