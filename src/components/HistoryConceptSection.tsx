import { useTranslations } from "next-intl";

export default function HistoryConceptSection() {
  const tH = useTranslations("history");
  const tC = useTranslations("concept");

  return (
    <section id="history" className="py-14 md:py-24 bg-neutral-50">
      <div className="container-w grid md:grid-cols-2 gap-10 md:items-stretch">
        <div className="card shadow-soft flex flex-col md:h-full">
          <h3 className="serif text-xl md:text-2xl font-semibold mb-3">
            {tH("title")}
          </h3>
          <div className="flex-1">
            <p className="text-neutral-700 leading-relaxed">{tH("body")}</p>
          </div>
        </div>

        <div id="concept" className="card shadow-soft flex flex-col md:h-full">
          <h3 className="serif text-xl md:text-2xl font-semibold mb-3">
            {tC("title")}
          </h3>
          <div className="flex-1">
            <p className="text-neutral-700 leading-relaxed">{tC("body")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
