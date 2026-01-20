import { useRef } from "react";
import PageTransition from "../components/PageTransition";
import ScrollArrow from "../components/ScrollArrow";
import { ContactContent } from "../content";
import emailjs from "@emailjs/browser"

export default function Contact() {
    const formRef = useRef<HTMLFormElement | null>(null)
    
    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault()

        if (!formRef.current) return

        emailjs.sendForm(
        "service_hfu5rlj",
        "template_qjnodrs",
        formRef.current,
        "LCTgshI0j4Qgw9bKh"
        )
        .then(() => {
        alert("Mensagem enviada com sucesso!")
        formRef.current?.reset()
        })
        .catch(() => {
        alert("Erro ao enviar mensagem.")
        })
    }

    return (
        <PageTransition>
            <div
                className="
                w-full max-w-5xl mx-auto
                flex flex-col gap-12
                "
            >
                <div
                className="
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    gap-10
                "
                >
                    {/* Lista de contatos */}
                    <section className="flex flex-col bg-bg-secondary gap-4 text-left rounded-2xl p-6 sm:p-8">
                        <h2 className="text-2xl font-semibold text-center">
                            {ContactContent.title}
                        </h2>

                        <ul className="flex flex-col gap-3 text-sm sm:text-base">
                            <li>
                                <strong>Email:</strong>{" "}
                                <a
                                    href={ContactContent.email_href}
                                    className="text-accent-primary hover:underline"
                                >
                                    {ContactContent.email}
                                </a>
                            </li>

                            <li>
                                <strong>LinkedIn:</strong>{" "}
                                <a
                                    href={ContactContent.linkedin}
                                    target="_blank"
                                    className="text-accent-primary hover:underline"
                                >
                                    {ContactContent.linkedin_short}
                                </a>
                            </li>

                            <li>
                                <strong>GitHub:</strong>{" "}
                                <a
                                    href={ContactContent.github}
                                    target="_blank"
                                    className="text-accent-primary hover:underline"
                                >
                                    {ContactContent.github_short}
                                </a>
                            </li>
                        </ul>
                    </section>

                    {/* Formulário */}
                    <section className="flex flex-col gap-4 bg-bg-secondary rounded-2xl p-6 sm:p-8">
                        <h2 className="text-2xl font-semibold text-left">
                            Me mande uma mensagem
                        </h2>

                        <form 
                            className="flex flex-col gap-4"
                            ref={formRef}
                            onSubmit={sendEmail}
                        >
                            <input
                                type="text"
                                name="name"
                                placeholder="Seu nome"
                                className="
                                p-3 rounded-lg
                                bg-bg-primary
                                text-text-primary
                                outline-none
                                focus:ring-2 focus:ring-accent-primary
                                "
                                required
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Seu email"
                                className="
                                p-3 rounded-lg
                                bg-bg-primary
                                text-text-primary
                                outline-none
                                focus:ring-2 focus:ring-accent-primary
                                "
                                required
                            />

                            <textarea
                                placeholder="Sua mensagem"
                                name="message"
                                rows={5}
                                className="
                                p-3 rounded-lg
                                bg-bg-primary
                                text-text-primary
                                outline-none
                                resize-none
                                focus:ring-2 focus:ring-accent-primary
                                "
                                required
                            />

                            <button
                                type="submit"
                                className="
                                mt-2
                                px-6 py-3
                                rounded-lg
                                bg-accent-primary
                                text-bg-primary
                                font-medium
                                hover:opacity-90
                                transition
                                "
                            >
                                Enviar
                            </button>
                        </form>
                    </section>
                </div>

                <ScrollArrow to="/" label="Voltar ao início" />
            </div>
        </PageTransition>
    )
};
