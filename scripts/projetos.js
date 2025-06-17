const videos = [
    {
        name: "Interface de Pintura e Desenho",
        main: false,
        tag: "java",
        source: "../videos/Java-paint.mp4",
        text: "A medida que estudava programação sempre tive a curiosidade de como fazer algo parecido com o programa Paint e esse foi o projeto onde eu pude obter esses conhecimentos. Devo dizer, é mais difícil do que pensava, porém mais fácil do que parece. Aqui existem apenas duas modificações que podem ser feitas pelo usuário, a cor do pincel e seu tamanho, mas a partir disso outras funcionalidades podem ser desenvolvidas. O importante aqui é criar um código escalável para que a adição de novas ferramentas não se torne muito custosa.",
        text2: "Linguagens e Ferramentas utilizadas: Java.",
        githubLink: "https://github.com/dev-pedr0/Java-Paint"
    },
    {
        name: "Lista de Tarefas",
        main: false,
        tag: "java",
        source: "../videos/Java-To-Do-List.mp4",
        text: "O projeto de uma lista de tarefas é muito comum, porém muito importante. Ele demonstra como é possível adicionar e eliminar elementos de uma tela. Também acredito que seja uma das melhores demonstrações da orientação a objeto, já que é necessário literalmente desenvolver o objeto da tarefa para ser adicionada pelo usuário. Nessa lista de tarefas em java é possível descrever a tarefa, marca-la como concluída e elimina-la. Um ponto de expansão para este programa pode ser manter as tarefas salvas de forma local ou em nuvem para o usuário poder acessar novamente e até mesmo criar grupos de tarefas com um só nome para uma melhor organização. Diferente da lista de tarefas que desenvolvi em C#, neste projeto também é possível editar a tarefa, sem precisar deletá-la e reescrevê-la.",
        text2: "Linguagens e Ferramentas utilizadas: Java, Java Swing.",
        githubLink: "https://github.com/dev-pedr0/To-Do-List-Java"
    },
    {
        name: "Antigo Portifólio",
        main: false,
        tag: "javascript",
        source: "../videos/js-old-portifolio.mp4",
        text: "Esta foi minha entrega final durante o semestre de introdução de desenvolvimento web no instituto Infnet. Foi meu primeiro portfólio e a jornada para construí-lo foi muito gratificante. Este novo site onde você está é a versão 2.0 do antigo site. O objetivo dos dois é apresentar quem sou e o que sou capaz de desenvolver. Busquei atualizar a imagem do site, deixando ele mais profissional e utilizando ferramentas mais complexas para demonstrar minha evolução de conhecimento. E quem sabe um dia sairá uma versão ainda melhor, a 3.0? Aceito sugestões.",
        text2: "Linguagens e Ferramentas utilizadas: HTML 5, CSS 3, Javascript.",
        githubLink: "https://github.com/dev-pedr0/portifolio"
    },
    {
        name: "Pokemon Pokedex",
        main: false,
        tag: "javascript",
        source: "../videos/js-pokedex.mp4",
        text: "Um dos desafios propostos durante o curso no Instituto Infnet foi o desenvolvimento de uma página que busca informações de uma API, as organiza e mostra de forma agradável ao usuário. E disso surgiu meu pequeno projeto de pokedex. Esse site está conectado a API pokeapi, e mostra todos os pokemons que existem (até onde eles tem atualizado, claro). Eu escolhi este formato de cards, pois lembra as cartas do jogo de cartas de pokemon. É possível visualizar novos pokemons através  do clique nas setas, buscando pelo número ou pelo nome.",
        text2: "Linguagens e Ferramentas utilizadas: HTML 5, CSS 3, Javascript.",
        githubLink: "https://github.com/dev-pedr0/simple-pokedex"
    },
    {
        name: "Warhammer Dark heresy RPG",
        main: true,
        tag: "javascript",
        source: "../videos/js-Site-Warhammer-Atualizado.mp4",
        text: "O Site Warhammer em Português é um projeto para aprimoramento das minhas habilidades e também a realização do sonho de um fã do universo de Warhammer. Assim como esse, diversos sistemas de rpg existem apenas na língua inglesa e esse é o primeiro de muitos sites onde pretendo tornar possível o acesso a um resumo das regras do sistema de rpg e a uma página de criação e gerenciamento de personagens. O site conta com um sistema de autenticação e encriptação de senhas e todos os dados são salvos em nuvem (via MongoDB), permitindo acessar seus personagens de qualquer lugar. O projeto ainda está em andamento e deve ser concluído até o terceiro trimestre de 2025.",
        text2: "Linguagens e Ferramentas utilizadas: EJS, CSS 3, Javascript, JTW, MongoDB.",
        githubLink: "https://github.com/dev-pedr0/project-warhammer40k-rpg"
    },
    {
        name: "Pedra, Papel e Tesoura",
        main: false,
        tag: "c#",
        source: "../videos/projeto-c-sharp-pedra-papel-tesoura.mp4",
        text: "Este projeto em C# explorou o uso de diferentes telas e interfaces para o usuário. O jogo de pedra, papel e tesoura é praticamente um programa completo com um jogo. Ele possui a tela inicial, as instruções e a tela de jogo. Foi desenvolvido um sistema de geração aleatória para o computador jogar contra o usuário. É possível aprofundar mais permitindo que dois jogadores joguem um contra o outro localmente.",
        text2: "Linguagens e Ferramentas utilizadas: C#.",
        githubLink: "https://github.com/dev-pedr0/RockPaperScissor-C-Sharp"
    },
    {
        name: "Calculadora",
        main: false,
        tag: "c#",
        source: "../videos/projeto-Calculadora-csharp.mp4",
        text: "Praticar as vezes é copiar algo que já existe, com o objetivo de adquirir os conhecimentos de como construir algo. Este projeto de calculadora em C#, é um exemplo da frase anterior. Essa é uma calculadora simples, porém completamente funcional e me proporcionou compreender diversos elementos da criação de interfaces em C#. Este foi um dos meus primeiros projetos visuais e o resultado foi muito satisfatório.",
        text2: "Linguagens e Ferramentas utilizadas: C#.",
        githubLink: "https://github.com/dev-pedr0/c-sharp-calculator"
    },
    {
        name: "Calculadora Geométrica",
        main: false,
        tag: "c#",
        source: "../videos/projeto-calculadora-geometrica.mp4",
        text: "Devo admitir que a calculadora geométrica é um projeto que precisa de melhorias. Seu objetivo é que seja possível selecionar uma forma e ter sua área e volumes calculados. A interface gráfica é intuitiva o bastante e funcional. Porém, o backend, apesar de servir ao propósito, não é escalável e necessita de maiores organizações. Mesmo assim decidi manter este projeto em meu portfólio, pois as vezes são esses ‘fracassos’ que nos fazem evoluir mais que os sucessos.",
        text2: "Linguagens e Ferramentas utilizadas: C#.",
        githubLink: "https://github.com/dev-pedr0/C-Sharp-Shape-Calculator"
    },
    {
        name: "Calculadora",
        main: false,
        tag: "java",
        source: "../videos/projeto-calculadora-java.mp4",
        text: "Praticar as vezes é copiar algo que já existe, com o objetivo de adquirir os conhecimentos de como construir algo. Este projeto de calculadora em Java é um exemplo da frase anterior. Essa é uma calculadora simples, porém completamente funcional e me proporcionou compreender diversos elementos da criação de interfaces em Java Este foi um dos meus primeiros projetos visuais e o resultado foi muito satisfatório.",
        text2: "Linguagens e Ferramentas utilizadas: Java.",
        githubLink: "https://github.com/dev-pedr0/java-calculator"
    },
    {
        name: "Cookie Clicker",
        main: true,
        tag: "java",
        source: "../videos/Projeto-java-cookie-clicker.mp4",
        text: "Java não só é útil no backend, como támbem possuí suporte para criação de interfaces. Este projeto foi uma pequena cópia do site cookie clicker, que ficou muito conhecido a alguns anos atrás. A ideia é clicar no biscoito e comprar itens que gerem mais cliques no biscoito e isso gera um ciclo contínuo. Nessa interface é possível tanto realizar o clique manual quanto comprar um item que clica para você. Por fim o botão de reset permite começar o jogo do zero. Esse projeto pode ser estendido com mais itens e também a criação de uma segunda interface onde você pode ver tudo que já adquiriu com seus biscoitos.",
        text2: "Linguagens e Ferramentas utilizadas: Java, Java Swing.",
        githubLink: "https://github.com/dev-pedr0/JavaSwing-cookie-clicker"
    },
    {
        name: "Adivinhe o Número!",
        main: false,
        tag: "c#",
        source: "../videos/Projeto-jogo-adivinha-csharp.mp4",
        text: "Todo programador iniciante já desenvolveu um jogo de adivinha, onde o computador gera um número aleatório e o usuário deve tentar adivinha-lo, recebendo dicas se o número correto é maior ou menor que o chute. Mas e se desenvolvêssemos mais essa ideia e realmente criássemos um JOGO de adivinha? Foi exatamente o que eu fiz. Um jogo completamente funcional, e, devo dizer, muito difícil. O usuário tem 3 escolhas de dificuldades e uma quantidade limitada de chances para acertar. Convido todos vocês a clonarem o projeto e tentarem passar do nível difícil. Boa sorte.",
        text2: "Linguagens e Ferramentas utilizadas: C#.",
        githubLink: "https://github.com/dev-pedr0/Number-Guessing-Game-C-Sharp"
    },
    {
        name: "Interface de Login",
        main: false,
        tag: "java",
        source: "../videos/Projeto-Login-Java.mp4",
        text: "Geralmente um programa terá alguma tela ou interface para que o usuário faça Login em sua conta. Esse simples programa em Java foi uma prática do desenvolvimento dessa tela e da forma como o código está, com poucos ajustes, é possível acopla-lo em um programa maior para que sirva de página inicial e sistema de Login.",
        text2: "Linguagens e Ferramentas utilizadas: Java, Java Swing.",
        githubLink: "https://github.com/dev-pedr0/JavaSwing-login-GUI"
    },
    {
        name: "Portifólio de Imagens",
        main: false,
        tag: "react",
        source: "../videos/react-image-site.mp4",
        text: "Este projeto busca a prática da criação de modais com o React. Os modais são essas telas sobre outra tela, neste caso para mostrar a imagem em um tamanho maior e com mais detalhes. Essa é uma funcionalidade importante e muito comum em diversas páginas. Aqui a atenção aos detalhes é relevante. Não só é possível sair do modal clicando no ‘X’, mas também clicando fora da imagem. Essa é uma função comum de modais, mas que um programador desatento pode deixar passar.",
        text2: "Linguagens e Ferramentas utilizadas: React, Next, Typescript, Tailwind CSS.",
        githubLink: "https://github.com/dev-pedr0/react-pictures-list"
    },
    {
        name: "Quiz Randômico",
        main: true,
        tag: "react",
        source: "../videos/react-random-quiz.mp4",
        text: "Esse quiz, desenvolvido em React é uma pequena brincadeira de perguntas de conhecimentos gerais. O usuário não possui tempo limite, mas é capaz de ver seus erros, acertos, quantas perguntas faltam e sua pontuação final. A parte desafiadora é que ele possui um pequeno banco de perguntas e são selecionadas 5 perguntas aleatoriamente dessa grupo, além de sua ordem também ser embaralhada. É possível expandir esse projeto aumentando o banco de perguntas (preferencialmente utilizando uma API) e também criando uma tela inicial com modos de jogo, para selecionar quantas perguntas devem ser feitas.",
        text2: "Linguagens e Ferramentas utilizadas: React, Next, Typescript, Tailwind CSS.",
        githubLink: "https://github.com/dev-pedr0/react-random-quiz"
    },
    {
        name: "Sistema de Combate por Turno",
        main: true,
        tag: "c#",
        source: "../videos/Turn-Based-Combat-C-Sharp.mp4",
        text: "Como um grande fã de tudo RPG, este projeto foi é o início da minha exploração de interfaces de jogos. Aqui é um pequeno sistema de combate por turno, onde o jogador pode escolher entre atacar e se curar, porém começando do simples é possível chegar ao complexo. Novas habilidades podem ser adicionadas, personagens, e inimigos. É realmente interessante ver como o C# possui essa capacidade de produzir jogos, visto que a Unity utiliza ele como linguagem.",
        text2: "Linguagens e Ferramentas utilizadas: C#.",
        githubLink: "https://github.com/dev-pedr0/TurnBaseCombatCSharp"
    },
    {
        name: "Sistema de Cadastro com Spring Boot",
        main: true,
        tag: "java",
        source: "../videos/Springboot-cadastro-java.mp4",
        text: "Um dos meus projetos mais backends que frontend. Mas um programador que se preze não pode se deixar intimidar, então este projeto foi um teste das minhas habilidades com desenvolvimento de API’s e conexão com banco de dados. Um simples sistema de cadastro e visualização de usuários que pode ser rapidamente expandido.",
        text2: "Linguagens e Ferramentas utilizadas: Java (spring boot), HTML, CSS, javascript, MySQL",
        githubLink: "https://github.com/dev-pedr0/cadastro-spring-boot"
    },
    {
        name: "Bookmania - Aluguel e Compra de Livros",
        main: true,
        tag: "c#",
        source: "../videos/projeto-bookmania.mp4",
        text: "Bookmania é um site completo de aluguel e compra de livros, desenvolvido com ASP.NET Core e Razor Pages. Conta com sistema de login e autenticação com controle de acesso baseado em papéis (cliente, funcionário e gerente). O usuário pode adicionar livros ao carrinho, finalizar pedidos e visualizar histórico. Funcionários e gerentes têm funções administrativas específicas. Sessões são usadas para manter o carrinho temporariamente ativo durante a navegação.",
        text2: "Linguagens e Ferramentas utilizadas: ASP.NET Core, Razor Pages, C#, Entity Framework Core, SQL Server, ASP.NET Identity, Session State.",
        githubLink: "https://github.com/dev-pedr0/Bookmania" 
    }
];