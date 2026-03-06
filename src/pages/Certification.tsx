import PageTransition from "../components/PageTransition"
import { CertificationContent } from "../content"

const Certification = () => {
  return (
    <PageTransition>
      <div className="w-full mx-auto max-w-4xl flex flex-col gap-8">
        
        {/* Lista de Certificados */}
        <ul className="flex flex-col gap-4">
          {CertificationContent.map((cert, index) => (
            <li
              key={index}
              className="
                flex flex-col justify-center sm:flex-row
                sm:items-center sm:justify-between
                gap-4
                bg-bg-secondary
                rounded-xl
                p-4
              "
            >
              {/* Título */}
              <h3 className="text-lg font-semibold">
                {cert.title}
              </h3>

              {/* Imagem/Link */}
              {cert.image ? (
                <a
                  href={cert.image}
                  target="_blank"
                  className="
                    text-sm
                    px-4 py-2
                    sm:self-auto
                    btn-effect
                  "
                >
                  Ver certificado
                </a>
              ) : (
                <span className="text-sm text-text-secondary italic">
                  Em andamento
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </PageTransition>
  )
}

export default Certification