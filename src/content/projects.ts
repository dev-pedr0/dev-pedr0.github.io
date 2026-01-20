// Filtros para botões
export const projectFilters = [
  "todos",
  "frontend",
  "backend",
  "fullstack",
  "mobile",
  "software",
] as const

export type ProjectCategory = typeof projectFilters[number]

//Lista de projetos
export type Project = {
  id: string
  title: string
  description: string
  media: string
  mediaType: "image" | "video"
  link: string
  category: ProjectCategory
}

export const projects: Project[] = [
  {
    id: "pass",
    title: "Sistema de Gestão de Veículos",
    description: "No ano de 2025 participei de um processo seletivo em que o desafio era desenvolver um sistema fullstack para gestão de veículos e, com a virada do ano, decidi retomar esse projeto para evoluí-lo e aplicar melhorias. O sistema permite cadastrar e gerenciar veículos, fazer upload e controle de documentos como CRLV e seguros, registrar ocorrências como multas, avarias e manutenções, além de visualizar, editar e excluir registros. No frontend utilizei React e Next.js com TypeScript e Shadcn, e no backend NestJS com Prisma, PostgreSQL e Multer para upload de arquivos, seguindo uma arquitetura bem organizada e uma API REST clara. O foco do projeto tem sido boas práticas, organização do código, integração eficiente entre frontend e backend e o tratamento correto de arquivos e relacionamentos, servindo como um ótimo exercício para aprofundar conceitos de CRUD avançado e integração fullstack.",
    media: "/projects/projeto-pass.jpg",
    mediaType: "image",
    link: "https://github.com/dev-pedr0/desafio-pass",
    category: "fullstack",
  },
  {
    id: "livros",
    title: "Bookmania - Loja de Livros",
    description: "Finalizando o projeto de bloco do professor Thiago Vieira de Aguiar, no Instituto Infnet, apresento o Bookmania, um sistema cujo foco principal era o backend, mas que acabou ganhando também um front-end temático — afinal, fica muito melhor trabalhar em algo que a gente consegue ver funcionando. O projeto foi desenvolvido com ASP.NET Core e Razor Pages, utilizando o ASP.NET Core Identity para autenticação e autorização, com controle de acesso baseado em papéis como cliente, funcionário, gerente e administrador, implementados por meio do IdentityRole. O Entity Framework Core foi usado como ORM para mapear entidades como livros, usuários e pedidos ao banco de dados SQL Server, facilitando as operações e consultas, enquanto o front-end foi construído com HTML, CSS, JavaScript e Bootstrap, trazendo uma interface simples e temática. O sistema permite o registro e login de usuários nesses quatro perfis, cada um com permissões específicas. O cliente pode acessar o catálogo de livros, adicionar itens ao carrinho e escolher entre compra ou aluguel, gerando uma ordem que, após o pagamento, precisa ser confirmada por um funcionário. Já o funcionário tem acesso às ordens geradas e a um CRUD de livros e usuários, com algumas restrições de edição. O gerente possui os mesmos acessos, porém com menos limitações, enquanto o administrador tem acesso total ao sistema, sem restrições de uso.",
    media: "/projects/bookmania.mp4",
    mediaType: "video",
    link: "https://github.com/dev-pedr0/Bookmania",
    category: "fullstack",
  },
  {
    id: "investimento",
    title: "Pseudosite de Investimentos",
    description: "Esse projeto consiste em uma aplicação web desenvolvida em Python, HTML e CSS, utilizando Flask como framework backend e Jinja para a renderização dinâmica das páginas. A ideia foi simular um site de investimentos, oferecendo uma experiência próxima à de uma plataforma real de compra e venda de ações. A aplicação conta com uma API responsável por fornecer os dados necessários para exibir preços de ações, além de permitir operações de compra, venda e visualização do portfólio do usuário. O sistema foi pensado para integrar de forma simples e eficiente o backend com o frontend, permitindo que as informações sejam atualizadas dinamicamente na interface. Além das funcionalidades principais, o projeto serviu como um ótimo exercício para consolidar conceitos de rotas, templates, consumo de APIs e organização de uma aplicação web com Flask, focando em clareza, escalabilidade e boa separação de responsabilidades.",
    media: "/projects/investimento.png",
    mediaType: "image",
    link: "https://github.com/dev-pedr0/CS50_finance",
    category: "fullstack",
  },
  {
    id: "cop-31",
    title: "Simulador de Gerenciamento da COP-31",
    description: "Esse projeto começou como uma atividade da disciplina de React no Instituto Infnet e, inspirado pelas apresentações de alguns colegas, decidi evoluí-lo para um simulador de gerenciamento da COP-31. Desenvolvido em React com TypeScript e Vite, o site simula a organização de países participantes, autoridades e agendas do evento, com foco em manter tudo bem estruturado e escalável. A aplicação consome a API pública REST Countries para listar e filtrar países, permite o cadastro e a gestão de autoridades com regras de negócio e persistência em localStorage, além do agendamento de apresentações com controle de conflitos de horário. O projeto foi uma ótima oportunidade para praticar boas práticas de arquitetura frontend, organização de estado global e criação de interfaces mais próximas de cenários reais.",
    media: "/projects/cop31.mp4",
    mediaType: "video",
    link: "https://github.com/dev-pedr0/cop-30",
    category: "frontend",
  },
  {
    id: "finanças",
    title: "Controlador de Finanças",
    description: "Este foi um projeto pessoal com foco em organização financeira: um Dashboard Financeiro Web desenvolvido com Vue 3, Pinia, Tailwind CSS e Chart.js. A ideia foi criar uma aplicação moderna, rápida e totalmente responsiva para gerenciar entradas e saídas financeiras, ajudando o usuário a acompanhar o próprio orçamento de forma simples e visual. O sistema permite adicionar e remover transações, visualizar um resumo financeiro com entradas, saídas e saldo disponível, além de acompanhar os gastos por categoria por meio de um gráfico de pizza. A aplicação também conta com modo claro e escuro com toggle, persistência automática dos dados no LocalStorage e uma interface responsiva e bem organizada, construída inteiramente com Tailwind CSS.",
    media: "/projects/vue.mp4",
    mediaType: "video",
    link: "https://github.com/dev-pedr0/vue-project",
    category: "frontend",
  },
    {
    id: "cronologia",
    title: "Cronologia Fantástica",
    description: "A Cronologia Fantástica é um visualizador interativo de eventos históricos pensado para mundos de fantasia, ideal para escritores, mestres de RPG e criadores de universos fictícios. O projeto permite criar, visualizar e filtrar eventos em uma linha do tempo fictícia, com foco na organização narrativa e na construção de lore, tudo por meio de uma interface moderna e responsiva. A aplicação conta com criação e exibição de eventos, filtros por ano, região, descrição e tags, ordenação cronológica crescente ou decrescente, modo de linha do tempo vertical e opção para limpar filtros. O projeto foi desenvolvido com React e Vite, utilizando TypeScript, Tailwind CSS, Zustand para gerenciamento de estado, além de Lucide para ícones, Drag and Drop Kit e Framer Motion para interações e animações.",
    media: "/projects/cronologia.mp4",
    mediaType: "video",
    link: "https://cronologia-rpg.vercel.app",
    category: "frontend",
  },
  {
    id: "docker",
    title: "Sistema de Deploy",
    description: "Sempre tive dificuldade em entender a área de DevOps e suas tecnologias — tudo parecia coisa de outro mundo. Mas, assim como o front-end também já foi assim para mim um dia, eu sabia que com estudo daria para desmistificar esse universo. Pensando nisso, criei um projeto (eu = Pedro + internet + algumas preces) utilizando Docker, Kubernetes e Helm, com a ideia de montar um sistema de deployment modular para um arquivo server.js, que funcionasse bem em diferentes ambientes — desenvolvimento, teste e produção — e fosse fácil de escalar e atualizar sem impactar o usuário final. No projeto, o Docker é responsável por empacotar a aplicação Node.js com tudo o que ela precisa para rodar, o Kubernetes cuida da orquestração, escalabilidade e resiliência dos containers, e o Helm facilita a instalação, atualização e versionamento da aplicação por meio de charts reutilizáveis. Mesmo sendo um projeto simples, ele representa bem os princípios do DevOps, como padronização de ambientes, consistência no funcionamento do sistema e facilidade para realizar mudanças e atualizações de forma segura.",
    media: "/projects/docker.jpg",
    mediaType: "image",
    link: "https://github.com/dev-pedr0/Projeto-Docker",
    category: "backend",
  },
  {
    id: "recuperar",
    title: "Recuperação de Fotos",
    description: "Esse projeto foi desenvolvido em C durante o curso CC50 e tem como objetivo ensinar como recuperar fotos a partir de um arquivo corrompido. A aplicação trabalha diretamente com leitura de arquivos em baixo nível, analisando blocos de bytes para identificar padrões que indicam o início e o fim de arquivos de imagem, como no caso de fotos JPEG. A partir dessa identificação, o programa reconstrói as imagens e as salva corretamente no sistema de arquivos. O projeto foi uma excelente oportunidade para aprofundar conceitos fundamentais da linguagem C, como manipulação de arquivos, ponteiros, uso de buffers e controle de memória. Além disso, ele ajuda a entender melhor como os dados são armazenados em dispositivos e como é possível recuperar informações mesmo quando a estrutura original do arquivo foi comprometida, reforçando a importância do pensamento lógico e do cuidado com operações de baixo nível.",
    media: "/projects/recuperar.png",
    mediaType: "image",
    link: "https://github.com/dev-pedr0/CS50_recover",
    category: "backend",
  },
  {
    id: "cartao",
    title: "Validador de Cartão",
    description: "Esse projeto foi desenvolvido em Python durante o curso CC50 e tem como objetivo simular a verificação da validade de cartões de crédito. A aplicação analisa o número do cartão informado pelo usuário e aplica o algoritmo de Luhn para determinar se ele é válido ou não, além de identificar a bandeira do cartão com base em padrões específicos de numeração. O projeto foi importante para praticar lógica de programação, manipulação de strings e números, estruturas condicionais e laços de repetição. Além disso, ajudou a reforçar a atenção a regras e validações, mostrando como algoritmos relativamente simples podem ser usados em sistemas reais para garantir a consistência e a confiabilidade dos dados.",
    media: "/projects/cartao.png",
    mediaType: "image",
    link: "https://github.com/dev-pedr0/CS50_credit_python",
    category: "backend",
  },
  {
    id: "receitas",
    title: "Aplicativo de Receitas",
    description: "Esse projeto foi desenvolvido durante a disciplina de React Native no Instituto Infnet com o objetivo de aprofundar os conhecimentos em desenvolvimento mobile e no consumo de APIs externas. Trata-se de um app de receitas criado com React Native, Expo e Expo Router, utilizando TypeScript e a API pública TheMealDB. A aplicação conta com uma tela inicial que destaca uma receita aleatória, além de permitir a busca de receitas pelo nome, o filtro por categorias e a visualização completa dos detalhes de cada prato. O layout foi pensado para ser responsivo, ajustando a exibição da lista para uma ou duas colunas conforme o tamanho da tela, garantindo uma melhor experiência em diferentes dispositivos.",
    media: "/projects/receitas.mp4",
    mediaType: "video",
    link: "https://github.com/dev-pedr0/react-native-AT",
    category: "mobile",
  },
  {
    id: "luta",
    title: "Simulador de Batalha RPG",
    description: "Como fã de RPG, resolvi criar um protótipo de combate por turno, e a experiência acabou sendo mais fácil do que eu imaginava — mas definitivamente não simples. Um dos pontos mais interessantes do desenvolvimento foi perceber que o “loop” do jogo não funciona como um while ou for tradicional, mas sim como um conjunto de funções que se chamam e se comunicam entre si, formando um ciclo que sustenta a lógica do jogo. Assim como em loops clássicos, é fundamental que exista sempre uma verificação de condição para quebrar esse ciclo e encerrar o combate no momento certo. O projeto foi desenvolvido em C# no Visual Studio, utilizando Windows Forms, a ferramenta de criação de interfaces gráficas da plataforma .NET. O Windows Forms permite criar telas de forma visual, arrastando e configurando componentes como botões, labels e campos de texto, o que facilita bastante a construção de interfaces desktop simples e funcionais. Essa abordagem ajudou a dar vida ao protótipo, tornando o combate mais intuitivo e permitindo focar na lógica do jogo sem complicar demais a interface.",
    media: "/projects/turn-fight.mp4",
    mediaType: "video",
    link: "https://github.com/dev-pedr0/TurnBaseCombatCSharp",
    category: "software",
  },
  {
    id: "paint",
    title: "Interface de Pintura e Desenho",
    description: "À medida que fui estudando programação, sempre tive curiosidade de entender como funcionava um aplicativo semelhante ao Paint, especialmente a parte de desenhar na tela e interagir diretamente com o mouse. Esse projeto foi a oportunidade perfeita para explorar esses conceitos na prática. Posso dizer que o desenvolvimento acabou sendo mais difícil do que eu imaginava no início, mas, ao mesmo tempo, mais simples do que parecia quando visto de fora. O projeto foi desenvolvido em Java, utilizando o IntelliJ IDEA como ambiente de desenvolvimento, o que facilitou bastante a organização do código e os testes durante a implementação. A aplicação permite ao usuário realizar duas modificações principais: escolher a cor do pincel e ajustar o seu tamanho. Apesar de simples, essas funcionalidades já envolvem conceitos importantes como captura de eventos do mouse, renderização gráfica e controle de estado da aplicação. A partir dessa base, diversas outras ferramentas podem ser adicionadas, como borracha, formas geométricas ou diferentes tipos de pincel. Por isso, o foco principal do projeto foi criar um código bem estruturado e escalável, garantindo que a inclusão de novas funcionalidades no futuro não se torne complexa ou custosa.",
    media: "/projects/Java-paint.mp4",
    mediaType: "video",
    link: "https://github.com/dev-pedr0/Java-Paint",
    category: "software",
  },
]