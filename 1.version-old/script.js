const content = document.querySelector("content");
const clipedBackground = document.querySelector(".clipped-background");
const navLinks = document.querySelectorAll(".nav a");
console.log(navLinks);

function typeText(element, text, index, callback) {
    if (index < text.length) {
        element.innerHTML += text.charAt(index);
        setTimeout(() => typeText(element, text, index + 1, callback), 10);
    } else if (callback) {
        callback();
    }
}

function startTypingEffect() {
    const homeTitle = document.getElementById("home-title");
    const homeText = document.getElementById("home-text");

    const titleText = "Da Ideia Criativa para o Código Eficiente";
    const paragraphText = "Meu trabalho é transformar conceitos em interfaces funcionais e impactantes.  Desenvolvo páginas e aplicativos com foco na experiência do usuário, e performance eficiente.";

    if (homeTitle && homeText) {
        homeTitle.innerHTML = "";
        homeText.innerHTML = "";
        typeText(homeTitle, titleText, 0, () => {
            setTimeout(() => {
                typeText(homeText, paragraphText, 0);
            }, 500);
        });
    }
}

function renderProjects(filterTag = "all") {
    const container = document.getElementById("projects-list");
    if (!container || typeof videos === "undefined") {
        return;
    }

    container.innerHTML = "";

    const filteredVideos = (filterTag === "all") ? videos : videos.filter(video => video.tag === filterTag);

    filteredVideos.sort((a, b) => {
        if (a.main === b.main) return 0;
        return a.main ? -1 : 1;
    });

    filteredVideos.forEach(video => {
        const card = document.createElement("div");
        card.classList.add("project-card");

        card.innerHTML = `
            <h3>${video.name}</h3>
            <video controls muted width="100%" preload="metadata">
                <source src="${video.source}" type="video/mp4"/>
                Seu navegador não suporta vídeos.
            </video>
            <p class="project-text">
                ${video.text}<br>
                ${video.text2 ?? ""}<br>
                ${video.githubLink ? `<a href="${video.githubLink}" target="_blank" class="github-link">Ver repositório no GitHub</a>` : ""}
            </p>
        `;

        container.appendChild(card);
    });
}

function renderCertifications() {
    const container = document.querySelector(".certification-list");
    if (!container || typeof videos === "undefined") {
        return;
    }

    container.innerHTML = "";

    certifications.forEach(certification => {
        const item = document.createElement("li");
        item.classList.add("certification-item");

        if (certification.source) {
            item.innerHTML = `
                <span>${certification.name}</span>
                <button class="certification-button" onclick="window.open('${certification.source}', '_blank')">Ver</button>
            `;
        } else {
            item.innerHTML = `
                <span>${certification.name}</span>
                <span class="certification-status">(em andamento)</span>
            `;
        }
        container.appendChild(item);
    });
}

function loadContent() {
    const route = window.location.hash.replace("#", "") || "home";
    const document = `views/${route}.html`;
    clipedBackground.style.display = "none";
    content.classList.remove("slide-in-up");
    content.classList.add("slide-out-up");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === `#${route}`) {
            link.classList.add("link-active");
        } else {
            link.classList.remove("link-active");
        }
    });

    setTimeout(() => {
        fetch(document)
            .then(response => response.text())
            .then(data => {
                content.innerHTML = data;

                content.classList.remove("slide-out-up");
                content.classList.add("slide-in-up");

                if (route === "home") {
                    clipedBackground.style.display = "block";
                    startTypingEffect();
                } else if (route === "projetos") {                   
                    renderProjects();
                } else if (route === "certificacao") {
                    renderCertifications();
                }
            })
            .catch(() => {
                content.innerHTML = "<h2>Erro 404</h2><p>Página não encontrada!</p>";
                content.classList.remove("slide-out-up");
                content.classList.add("slide-in-up");
            });
    }, 400);
}

window.addEventListener("hashchange", loadContent);
window.addEventListener("load", loadContent);

function setActive(activeButton) {
    languageButtons = document.querySelectorAll(".language-button");
    const selectedTag = activeButton.getAttribute("data-tag");
    languageButtons.forEach(button => {
        button.classList.remove("active");
    });
    activeButton.classList.add("active");
    renderProjects(selectedTag);
}

function handleSubmit(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const params = {
        name,
        email,
        message
    };

    emailjs.send("service_hfu5rlj", "template_qjnodrs", params)
        .then(() => {
            alert("Mensagem enviada com sucesso! ✅");
            document.querySelector("form").reset();
        })
        .catch((err) => {
            console.error("Erro ao enviar:", err);
            alert("Ops! Algo deu errado. 😕");
        });
}