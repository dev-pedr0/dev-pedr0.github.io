import PageTransition from "../components/PageTransition";
import ScrollArrow from "../components/ScrollArrow";
import TypeWriter from "../components/TypeWriter";
import { HomeContent } from "../content";

export default function Home() {
    return (
        <PageTransition>
            
            {/* Losango decorativo */}
            <div
            className="
                hidden sm:block
                absolute top-1/2 left-1/2
                w-[90%] h-full
                max-w-175
                -translate-x-1/2 -translate-y-1/2
                bg-(--color-bg-secondary)
                [clip-path:polygon(50%_0%,100%_50%,50%_100%,0%_50%)]
                z-0
            "
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
                            lg:text-5xl
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
