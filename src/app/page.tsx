import Form from "@/components/Form";
import { questionsPT } from "@/constants/questions";

export default function Home() {
  return (
    <main className="flex flex-col space-y-4 overflow-hidden">
      <Form />

      <section className="container space-y-4 py-4">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold text-zinc-200">
            Converta suas imagens para o formato webp - rápido, fácil e de
            graça!
          </h1>
          <p className="text-zinc-400">
            Webpfy é uma ferramenta online gratuita que converte suas imagens
            para o formato webp em poucos cliques.
          </p>
        </div>

        {questionsPT.map((question) => (
          <div key={question.q} className="space-y-1">
            <h2 className="text-lg font-semibold text-zinc-300">
              {question.q}
            </h2>
            <p className="text-zinc-400">{question.a}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
