import PageTransition from "../components/PageTransition";
import ScrollArrow from "../components/ScrollArrow";
import TypeWriter from "../components/TypeWriter";
import { HomeContent } from "../content";

export default function Home() {
    return (
        <PageTransition>
            
            {/* Losango decorativo */}
            <div
            className="hidden sm:block bg-diamond"
            />

            <section
                id="home"
                className="
                    relative z-10
                    flex flex-col items-center justify-center
                    text-center
                    px-6
                    min-h-[70vh]
                    md:mt-10
                    md:px-30
                    lg:mt-18
                    2xl:mt-25
                "
            >
                {/* Texto principal */}
                <div className="max-w-xl">
                    <h1
                        className="
                            text-2xl font-extrabold leading-tight
                            sm:text-3xl
                            md:text-4xl
                            2xl:text-5xl
                        "
                    >
                        {HomeContent.title_half_one}
                        <span className="text-accent-primary block">
                            {HomeContent.title_half_two}
                        </span>
                    </h1>

                    {/* Texto com efeito de digitação */}
                    <TypeWriter
                        text={HomeContent.main_text}
                        speed={30}
                        className="
                            mt-4
                            text-sm text-text-secondary
                            sm:text-base
                            md:text-lg
                            lg:px-10
                            2xl:px-20
                        "
                    />
                </div>

                {/* Seta */}
                <ScrollArrow
                    to="/projetos"
                    label="Ver projetos"
                    absolute={true}
                />
            </section>
        </PageTransition>    
    )
};
