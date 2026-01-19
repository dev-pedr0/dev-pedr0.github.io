import ScrollArrow from "../components/ScrollArrow";
import TypeWriter from "../components/TypeWriter";

export default function Home() {
    return (
        <section
            id="home"
            className="
                relative z-10
                flex flex-col items-center justify-center
                text-center
                px-6
                min-h-[70vh]
                md:px-30
            "
        >
            {/* Texto principal */}
            <div className="max-w-xl">
                <h1
                    className="
                        text-2xl font-extrabold leading-tight
                        sm:text-3xl
                        md:text-4xl
                        lg:text-5xl
                    "
                >
                    Da Ideia Criativa para o
                    <span className="text-accent-primary block">
                        Código Eficiente
                    </span>
                </h1>

                <TypeWriter
                    text="Meu trabalho é transformar conceitos em interfaces funcionais e impactantes. Desenvolvo páginas e aplicações com foco na experiência do usuário e performance eficiente."
                    speed={30}
                    className="
                        mt-4
                        text-sm text-text-secondary
                        sm:text-base
                        md:text-lg
                        lg: px-10
                    "
                />
            </div>

            {/* Seta */}
            <ScrollArrow
                to="/projetos"
                label="Ver projetos"
            />
        </section>
    )
};
