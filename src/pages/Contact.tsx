import { useRef } from "react";
import PageTransition from "../components/PageTransition";
import { ContactContent } from "../content";
import emailjs from "@emailjs/browser"

export default function Contact() {
    const formRef = useRef<HTMLFormElement | null>(null)
    
    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault()

        if (!formRef.current) return

        emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
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
                    className="md:min-h-[70vh] flex justify-center items-center"
                >
                    <div 
                        className="grid grid-cols-1 md:grid-cols-2
                        gap-10 sm:w-md md:w-2xl lg:w-3xl xl:w-5xl 2xl:h-140"
                    >
                        {/* Lista de contatos */}
                        <section className="
                            bg-bg-secondary
                            rounded-2xl
                            p-6 sm:p-8
                            flex flex-col
                        "
                        >
                            <h2 className="text-2xl mb-4 font-semibold text-center">
                                {ContactContent.title}
                            </h2>
                            <ul
                                className="
                                flex flex-col
                                grow
                                gap-4
                                text-sm sm:text-base
                                "
                            >
                                {[
                                {
                                    label: "Email",
                                    value: ContactContent.email,
                                    href: ContactContent.email_href,
                                },
                                {
                                    label: "LinkedIn",
                                    value: ContactContent.linkedin_short,
                                    href: ContactContent.linkedin,
                                },
                                {
                                    label: "GitHub",
                                    value: ContactContent.github_short,
                                    href: ContactContent.github,
                                },
                                ].map(item => (
                                <li
                                    key={item.label}
                                    className="
                                    flex items-center justify-between
                                    bg-bg-primary
                                    rounded-xl
                                    px-4 py-3
                                    grow
                                    lg:text-xl
                                    "
                                >
                                    <span className="font-medium">
                                    {item.label}
                                    </span>

                                    <a
                                    href={item.href}
                                    target="_blank"
                                    className="text-accent-primary hover:underline"
                                    >
                                    {item.value}
                                    </a>
                                </li>
                                ))}
                            </ul>
                        </section>
                        {/* Formulário */}
                        <section className="flex flex-col gap-4 bg-bg-secondary rounded-2xl p-6 sm:p-8">
                            <h2 className="text-2xl font-semibold text-center">
                                Me mande uma mensagem
                            </h2>

                            <form 
                                className="flex flex-col gap-4 grow"
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
                                    grow
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
                </div>
            </div>
        </PageTransition>
    )
};
