import Form from "@/components/layouts/Form";
import { questions } from "@/constants/questions";

export default function Home() {
  return (
    <main className="flex flex-col space-y-4">
      <Form />

      <section className="container space-y-4 py-4">
        <div className="space-y-1">
          <h1 className="text-xl font-bold">
            Webpfy - Convert your images to webp format - fast, easy and for
            free!
          </h1>
          <p>
            Webpfy is a free online tool that converts your images to webp
            format in a few clicks.
          </p>
        </div>

        {questions.map((question) => (
          <div key={question.q} className="space-y-1">
            <h2 className="text-lg font-semibold">{question.q}</h2>
            <p>{question.a}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
