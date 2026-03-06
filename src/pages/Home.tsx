import PageTransition from "../components/PageTransition";
import TypeWriter from "../components/TypeWriter";
import { HomeContent } from "../content";

export default function Home() {
    return (
        <PageTransition>
            <section
                id="home"
                className="
                    relative
                    flex flex-col items-center justify-center
                    text-center
                    px-6
                    min-h-[70vh]
                "
            >
                {/* Texto principal */}
                <div 
                className="
                max-w-lg
                lg:max-w-2xl
                2xl:max-w-3xl
                ">
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
                            lg:text-xl
                            [text-shadow:0_1px_0_var(--color-accent-primary)]
                        "
                    />
                </div>

            </section>
        </PageTransition>    
    )
};
