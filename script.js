//Lista dos cards que serão gerados
let cards = [
    {
        subject: "AUT",
        title: "Atividade 1",
        image: "./Imagens Materias/Automacao Industrial/Ati.01.png",
        contentTitle1: "Aplicação Semáforo",
        content: "Primeiro projeto feito em C++, onde aprendemos leitura de input com digitalRead(botão) e saida por digitalWrite(LEDs) com os estados digitais HIGH e LOW."
    },
    {
        subject: "AUT",
        title: "Atividade 2",
        image: "./Imagens Materias/Automacao Industrial/Ati.02.png",
        contentTitle1: "Aplicação contador com 7 segmentos",
        content: "Fizemos um contador usando o display de 7 segmentos e fizemos funções para incrementar e decrementar de acordo com clique ou tempo."
    },
    {
        subject: "AUT",
        title: "Atividade 3",
        image: "./Imagens Materias/Automacao Industrial/Ati.03.png",
        contentTitle1: "Dinâmica LEDs",
        content: "Nesse exemplo trabalhamos com diferentes funções para cada tipo de clique no botão, com loops e setup de entrada."
    },
    {
        subject: "AUT",
        title: "Atividade 4",
        image: "./Imagens Materias/Automacao Industrial/Ati.04.png",
        contentTitle1: "Dois controles, uma Saída",
        content: "Objetivo era acender e apagar o LED com dois botões diferentes, sem que eles se conflitassem, usando variaveis de controle de estado para essa identificação."
    },
    {
        subject: "AUT",
        title: "Atividade 5",
        image: "./Imagens Materias/Automacao Industrial/Ati.05.png",
        contentTitle1: "Resistor Variável com LED",
        content: "Início do aprendizado de como utilziar as entradas e saídas analógicas (Saídas que variam sua corrente). Utilizando como sintaxe o analogicRead e analogicWrite."
    },
    {
        subject: "AUT",
        title: "Atividade 6",
        image: "./Imagens Materias/Automacao Industrial/Ati.06.png",
        contentTitle1: "Aplicação Garagem",
        content: "O projeto direcionava para uma simulação de uma garagem, onde teve um resistor dependente de luz (LDR) que controlava a entrada e acionava o led de acordo com a tensão que enviava. E por fim cada mudança de cor do LED acionava o Buzzer como efeito sonoro."
    },
    {
        subject: "AUT",
        title: "Atividade 7",
        image: "./Imagens Materias/Automacao Industrial/Ati.07.png",
        contentTitle1: "Digital e Analógico",
        content: "Com foco em misturar os dois tipos de entradas e saídas, colocamos LEDs em sequencia para que em relação a ao sinal do potenciometro eles acendem gradativamente, indo de totalmente apagados até totalmente ligados."
    },
    {
        subject: "AUT",
        title: "Atividade 8",
        image: "./Imagens Materias/Automacao Industrial/Ati.08.png",
        contentTitle1: "ESP 32",
        content: "Para usar outro microcontralador usamos o ESP 32 para outra automação junto com LCD para exibição - Comandos LCD.print e LCD.clear -, nesse caso, a tela inicial, contador, relógio/cronometro e tela de RESET."
    },
    {
        subject: "WEB",
        title: "Atividade 1",
        image: "./Imagens Materias/Desenvolvimento WEB/Ativ01.png",
        contentTitle1: "Iniciação em HTML e CSS",
        content: "Iniciação aos comandos de marcação do HTML - <p>, <h1>, <h2> e <ul> -  e estilizaçao no CSS - Background-Color, Color, Border-Color, Border-Radius -. No final fazendo uma lista simples."
    },
    {
        subject: "WEB",
        title: "Atividade 2",
        image: "./Imagens Materias/Desenvolvimento WEB/Ativ02.png",
        contentTitle1: "Figma para WEB",
        content: "Foi apresentado o aplicativo Figma, usado para representar como ficaria um site para que possa ser feito. Logo após o Figma, aprendemos a controlar as divs para que fique similar ao Figma.Junto é claro o HTML semântico, onde invés de criar várias divs com variados nomes, classes ou IDs, ussase um nome específico para cada conteudo -HEADER,MAIN,FOOTER-."
    },
    {
        subject: "WEB",
        title: "Atividade 3",
        image: "./Imagens Materias/Desenvolvimento WEB/Ativ03.png",
        contentTitle1: "Calculadora IMC",
        content: "Aprendemos a trabalhar com inputs e botões no HTML e conversar com o JavaScript para que possa faer o cálculo do IMC."
    },
    {
        subject: "WEB",
        title: "Atividade 4",
        image: "./Imagens Materias/Desenvolvimento WEB/Ativ04.png",
        contentTitle1: "Curriculo",
        content: "Objetivo principal era fazer um currículo pessoal com somente HTML e CSS."
    },
    {
        subject: "WEB",
        title: "Atividade 5",
        image: "./Imagens Materias/Desenvolvimento WEB/Ativ05.png",
        contentTitle1: "To Do List",
        content: "Estava em foco fazer uma página focada em lista de tarefas pessoais, com duração, números de tarefas em andamento e finalizadas, sendo usado o JavaScript para armazenar os valores de cada tarefa em Array para mostralo depois. Junto ao CSS que deixamos uma div fixa e outra dinamica."
    },
    {
        subject: "WEB",
        title: "Atividade 6",
        image: "./Imagens Materias/Desenvolvimento WEB/Ativ06.png",
        contentTitle1: "Árvore DOM",
        content: "Programamos uma Árvore DOM com a finalidade de fazer uma tabela com valores do tema de nossa escolha. Usando Somente JavaScript para fazer a implementação automática."
    },
    {
        subject: "WEB",
        title: "Atividade 7",
        image: "./Imagens Materias/Desenvolvimento WEB/Ativ07.png",
        contentTitle1: "Calculadora padrão",
        content: "Temos a calculadora como projeto principal, onde se concentrava na lógica por trás da calculadora, por adicionar algumas formas de interpretação como pos-fixa, infixa e pre-fixa, e apresentado como estrutura de dados a pilha."
    },
    {
        subject: "WEB",
        title: "Atividade 8",
        image: "./Imagens Materias/Desenvolvimento WEB/Ativ08.png",
        contentTitle1: "IDE WEB",
        content: "Aplicativo tinha por contraste pesquisa para conseguir realizar a atividade, pois a forma de ser feita era totalmente diferente das outras, junto é claro com receptores de escritas das inputs e mais os copiladores."
    },
    {
        subject: "WEB",
        title: "Atividade 9",
        image: "./Imagens Materias/Desenvolvimento WEB/Ativ09.png",
        contentTitle1: "Calculadora INSS",
        content: "Como ultíma calcudora, tivemos que programa-la para realizar os cálculos corretos. Maior dificuldade que teve em si foi procurar em como calcular, pois são bastante variáveis e que são dependentes  de acordo com outros valores."
    },
    {
        subject: "WEB",
        title: "Atividade 10",
        image: "./Imagens Materias/Desenvolvimento WEB/Ativ10.png",
        contentTitle1: "iFrame",
        content: "O foco era conectar os últimos 3 projetos num só, onde apenas um site mostraria as calculadoras e a IDE de WEB. Usamos como intermediario o iFrame para que consiga chamar os diferentes projetos."
    },
    {
        subject: "BAD",
        title: "Atividade 01",
        image: "./Imagens Materias/Banco de Dados/Ativ01.png",
        contentTitle1: "Diagrama DER",
        content: "Foi introduzindo o diagrama DER (Diagrama Entidade Relacionamento), onde apresenta a estrutura de um banco, mostrando como devem se comunicar através da primary key e foreigh key."
    },
    {
        subject: "BAD",
        title: "Atividade 02",
        image: "./Imagens Materias/Banco de Dados/Ativ02.png",
        contentTitle1: "Diagrama DER Simples",
        content: "Foi apresentado outras formas de estruturas de entidades e caracteristicas das mesmas, como entidade forte, fraca e entidade-relacionamento."
    },
    {
        subject: "BAD",
        title: "Atividade 03",
        image: "./Imagens Materias/Banco de Dados/Ativ03.png",
        contentTitle1: "Criando Tabelas",
        content: "Tivemos como última atividade envolvendo DER, um gerenciamento de matriculas de uma escola, envolvendo cursos, alunos, endereços, contatos e departamentos."
    },
    {
        subject: "BAD",
        title: "Atividade 04",
        image: "./Imagens Materias/Banco de Dados/Ativ04.png",
        contentTitle1: "Criando Tabelas",
        content: "Começamos criando tabelas para depois relaciona-las. Com comandos DDL - CREATE, ALTER e DROP - criamos, alteramos valores e deletamos tabelas. Para parametros usa-se INT e VARCHAR."
    },
    {
        subject: "BAD",
        title: "Atividade 05",
        image: "./Imagens Materias/Banco de Dados/Ativ05.png",
        contentTitle1: "Povoando Tabelas",
        content: "Para extrair os dados de tabelas usamos os DML - INSERT, UPDATE, DELETE e SELECT - para povoar tabelas."
    },
    {
        subject: "BAD",
        title: "Atividade 06",
        image: "./Imagens Materias/Banco de Dados/Ativ06.png",
        contentTitle1: "Relacionando Tabelas",
        content: "Para relacionar tabelas usamos o DQL - Comandos de QUERYs - para conseguir mesclar diferentes entidades para fitragem de tabelas."
    },
    {
        subject: "BAD",
        title: "Atividade 07",
        image: "./Imagens Materias/Banco de Dados/Ativ07.png",
        contentTitle1: "Implementação Escola",
        content: "Objetivo da atividade era fazer tanto o DER - Atividade 3 - e povoar e exetar as QUERYs necessárias, como número de alunos ativos, cursos vinculados ao aluno, informações relacionadas ao aluno ou curso."
    },
    {
        subject: "BAD",
        title: "Atividade 08",
        image: "./Imagens Materias/Banco de Dados/Ativ08.png",
        contentTitle1: "Normalização",
        content: "A finalidade é inves de conter uma ou duas tabelas com todos os valores que podem não serem diretamente relacionados, separa-las em mais tabelas para que cada uma fique mais especifica e possa ser melhor para fazer as buscas tendo de NF1 até NF5."
    },
    {
        subject: "BAD",
        title: "Atividade 09",
        image: "./Imagens Materias/Banco de Dados/Ativ09.png",
        contentTitle1: "NoSQL",
        content: "Diferente SQL que são dados estruturados (Tabelas), usamos o serviço de banco do MongoDB para NoSQL - Dados não estruturados (Imagens, Vídeos, Áudio) - e executamos os comandos de QUERYs no PowerShell."
    },
    {
        subject: "LIP",
        title: "Atividade 01",
        image: "./Imagens Materias/Linguagem de Programação/Ativ01.png",
        contentTitle1: "Introdução à variáveis",
        content: "Iniciação à sintaxe de Java e lógica de programação, com variaveis e seus tipos - INT, FLOAT, DOUBLE -, mais exercícios envolvendo lógica matemáticas e etc."
    },
    {
        subject: "LIP",
        title: "Atividade 02",
        image: "./Imagens Materias/Linguagem de Programação/Ativ02.JPG",
        contentTitle1: "IF ELSE",
        content: "Lógicas de decisão como IF e ELSE IF/ELSE foi comulmente usado nas atividades para executar encaminhamento de  alguma condição."
    },
    {
        subject: "LIP",
        title: "Atividade 03",
        image: "./Imagens Materias/Linguagem de Programação/Ativ03.png",
        contentTitle1: "SWITCH CASE",
        content: "Outra lógica de decisão usada para para diversos tipos de respostas possíveis, inves de usar ELSE IF para cada condição. Necessita do BREAK no final de cada CASE para que saia do LOOP."
    },
    {
        subject: "LIP",
        title: "Atividade 04",
        image: "./Imagens Materias/Linguagem de Programação/Ativ04.png",
        contentTitle1: "WHILE e FOR",
        content: "Por fim, as ultimas logicas de decisão, WHILE faz uma ação enquanto for verdadeira e o for executa uma verificação ou ação até que um limite de execuções ou condição seja atingida."
    },
    {
        subject: "LIP",
        title: "Atividade 05",
        image: "./Imagens Materias/Linguagem de Programação/Ativ05.png",
        contentTitle1: "ARRAY",
        content: "Aprendemos a manipular Arrays, que são um conjunto que armazena dados numéricos, textuais ou ambos, onde através do for executamos a ação sobre eles, seja exibilos ou muda-los de lugar ou valores."
    },
    {
        subject: "LIP",
        title: "Atividade 06",
        image: "./Imagens Materias/Linguagem de Programação/Ativ06.png",
        contentTitle1: "Funções",
        content: "Inserimos funções em algumas atividades para que deixe o MAIN mais livre/vazio possível, apenas usado para rodar o programa e função que cuida da lógica em si, onde ela pode rodar a parte e retorna o valor desejado ou simplesmente retornar nada."
    },
    {
        subject: "LIP",
        title: "Atividade 07",
        image: "./Imagens Materias/Linguagem de Programação/Ativ07.png",
        contentTitle1: "Funções Recursivas",
        content: "Usa-se para algumas funções que precisam chamar elas mesmas porém com valores diferentes a cada chamada, assim executando uma ação de retorno ou conta para MAIN."
    },
    {
        subject: "LIP",
        title: "Atividade 07.1",
        image: "./Imagens Materias/Linguagem de Programação/Ativ07_buscaBinaria.png",
        contentTitle1: "Busca Binária",
        content: "Tem por objetivo buscar um valor sem que seja verificando um por um dentro de um ARRAY ordenado, e no fim retorna se o valor está nele ou não. Ele acaba sendo mais eficiente numa busca de dados mais longa, pois pula partes dados que seu valor não estaria neles."
    },
    {
        subject: "LIP",
        title: "Atividade 08",
        image: "./Imagens Materias/Linguagem de Programação/Ativ08.png",
        contentTitle1: "Classes",
        content: "A CLASSE surge como a idealização do que um objeto - Exemplo carro -, o que ele tem de atributos - Cor e Velocidade -, métodos - Acelerar e Frear -, mais o construtor para inicializar o objeto e usar GET e SET para pegar e mudar os valores de velocidade ou cor."
    }
    ,
    {
        subject: "LIP",
        title: "Atividade 09",
        image: "./Imagens Materias/Linguagem de Programação/Ativ09.png",
        contentTitle1: "Orientação Objeto",
        content: "Suas derivações são HERANÇA -Filho herda atributos do Pai-, POLIMORFISMO - Mesmo Método, resposta diferente - e ENCAMPSULAMENTO - Quando os atributos são PRIVADOS -."
    },
    {
        subject: "LIP",
        title: "Atividade 10",
        image: "./Imagens Materias/Linguagem de Programação/Ativ10.png",
        contentTitle1: "Interface Gráfica",
        content: "Usamos uma biblioteca/extensão do Java para interface gráfica, onde fizemos uma tela de bloqueio com que gerasse alguns quadriláteros de tamanho e cor aleatoriamente e deslocassem pela tela."
    },
    {
        subject: "CID",
        title: "Atividade 01",
        image: "./Imagens Materias/Ciencia de Dados/Ativ01.png",
        contentTitle1: "Titanic",
        content: "Importamos as bibliotecas Pandas,Numpy e matplotlib,pyplot para termos recursos de estatísticas sobre os dados que puxamos de um GitHub do naufrágio do navio Titanic."
    },
    {
        subject: "CID",
        title: "Atividade 02",
        image: "./Imagens Materias/Ciencia de Dados/Ativ02.png",
        contentTitle1: "Amostras",
        content: "Iniciamos com estatísticas por amostra e seus tipos, como estratificada e envializada. Mostrando também que a aleatoriedade de uma função de RANDOM() é pseudoaleatória. Junto com SEED que tem por dados predefinidos."
    },
    {
        subject: "CID",
        title: "Atividade 03",
        image: "./Imagens Materias/Ciencia de Dados/Ativ03.png",
        contentTitle1: "Amostras",
        content: "Iniciamos com estatísticas por amostra e seus tipos, como estratificada e envializada."
    },
    {
        subject: "CID",
        title: "Atividade 04",
        image: "./Imagens Materias/Ciencia de Dados/Ativ04.png",
        contentTitle1: "Pseudoaleatoriedade",
        content: "Mostrando também que a aleatoriedade de uma função de RANDOM() é pseudoaleatória. Junto com SEED que tem por dados predefinidos."
    },
    {
        subject: "CID",
        title: "Atividade 05",
        image: "./Imagens Materias/Ciencia de Dados/Ativ05.png",
        contentTitle1: "Gráficos",
        content: "Aprendemos a plotar gráficos para melhor entindimente e mostragem de proporção para os dados com .plot()."
    },
    {
        subject: "CID",
        title: "Atividade 06",
        image: "./Imagens Materias/Ciencia de Dados/Ativ06.png",
        contentTitle1: "Mais Gráficos",
        content: "Fomos testando com os dados do Titanic outros tipos de gráficos para que possamos ver como o programa formaria-los, surgindo alguns representativamente bons e outros não interpretaveis pela quantidade de dados."
    },
    {
        subject: "CID",
        title: "Atividade 07",
        image: "./Imagens Materias/Ciencia de Dados/Ativ07.png",
        contentTitle1: "Média, Mediana e Moda",
        content: "Próximo assunto foi de média, mediana e moda para os dados do Titanic e junto com outros dados mais simples para implementa-los."
    },
    {
        subject: "CID",
        title: "Atividade 08",
        image: "./Imagens Materias/Ciencia de Dados/Ativ08.png",
        contentTitle1: "Percentil",
        content: "Outras formas de organização de dados para verifica-los é a divisão de conjuntos por 100 para que possa ter valores mais precisos e formas de comparação entre porcentagem dos dados."
    },
    {
        subject: "CID",
        title: "Atividade 09",
        image: "./Imagens Materias/Ciencia de Dados/Ativ09.png",
        contentTitle1: "Qui-Quadrado",
        content: "Usado para ver a relação direta entre dois dados distintos e suas ocorrencias (Por exemplo, nivel de embriagues com relação ao sexo da pessoa)."
    },
    {
        subject: "CID",
        title: "Atividade 10",
        image: "./Imagens Materias/Ciencia de Dados/Ativ10.png",
        contentTitle1: "Shapiro e Kolmogorov",
        content: "Cáculos usados em estatística para ver a relação entre gráficos de dados fornecidos baseado na sua forma normal (simetria e calda não encostando no eixo X do gráfico)."
    },
    {
        subject: "CID",
        title: "Atividade 11",
        image: "./Imagens Materias/Ciencia de Dados/Ativ11.png",
        contentTitle1: "Anderson",
        content: "Mesma dinânimica de Shapiro e Kolmogorov, porém quando o gráfico comeria a diminuir depois do pico, ele se acumula, formando o tempo todo uma Crescente e alguns dados quase cruzando com o gráfico sendo atendido ou não pelo desvio padrão permitido."
    },
    {
        subject: "EXT",
        title: "Atividade 01",
        image: "./Imagens Materias/Extras/Ativ01.png",
        contentTitle1: "Loja de Relógios",
        content: "Atividade proposta pelos veteranos, onde o foco era pegar um produto de preferencia e fazer um loja/site para ele após FIGMA."
    },
    {
        subject: "EXT",
        title: "Atividade 02",
        image: "./Imagens Materias/Extras/Ativ02.png",
        contentTitle1: "CRUD em C",
        content: "Fizemos um CRUD em C como atividade extra do estágio, onde envolvia cadastrar  pessoas com Nome, ID e Horário. Junto com a verificação da lista de cadastro, modificar dados já armazenados e excluilos."
    },
    {
        subject: "EXT",
        title: "Atividade 03",
        image: "./Imagens Materias/Extras/Ativ03.png",
        contentTitle1: "Jogo de luta em POO",
        content: "Fiz um jogo de luta onde o jogador é um heroi que tem que matar o monstro, tendo os dois a habilidade de salto/investida e ataques, com um dado para roletar o dano de ataque ou investida, acaba o jogo quando um dos dois morre."
    }
];
//Link do Git Hub de acordo com cada matéria
let git = [
    {
        subject: "AUT",
        link: "https://github.com/Henferper/Portifolio-AUT.git"
    },
    {
        subject: "WEB",
        link: "https://github.com/Henferper/Web"
    },
    {
        subject: "BAD",
        link: "https://github.com/Henferper/Portfolio-BAD.git"
    },
    {
        subject: "LIP",
        link: "https://github.com/Henferper/Portifolio-LIP.git"
    },
    {
        subject: "CID",
        link: "https://colab.research.google.com/drive/1uBW5IBKLgaU-1oC5s9-aM88-Iaky9cx-"
    },
    {
        subject: "EXT",
        link: ""
    }
];
//Função para criar os Cards
function createCard(card) {
    //Criação de cada elemento do card
    let cardDiv = document.createElement('div');
    cardDiv.className = 'card';

    let title = document.createElement('div');
    title.className = 'title';
    title.textContent = card.title;
    cardDiv.appendChild(title);

    let contentDiv = document.createElement('div');
    contentDiv.className = 'content';

    let imageDiv = document.createElement('div');
    imageDiv.className = 'img';
    let image = document.createElement('img');
    image.src = card.image;
    imageDiv.appendChild(image);

    let descriptionDiv = document.createElement('div');
    descriptionDiv.className = 'description';
    let contentTitle = document.createElement('h2');
    contentTitle.textContent = card.contentTitle1;
    let contentText = document.createElement('p');
    contentText.textContent = card.content;
    descriptionDiv.appendChild(contentTitle);
    descriptionDiv.appendChild(contentText);

    contentDiv.appendChild(imageDiv);
    contentDiv.appendChild(descriptionDiv);
    cardDiv.appendChild(contentDiv);

    return cardDiv;
}
//Função para mostrar os cards após fazer os cads
function showCards(cards) {
    let carrossel = document.getElementById('carrossel');
    carrossel.innerHTML = ''; 
    cards.forEach(card => {
        let cardElement = createCard(card);
        carrossel.appendChild(cardElement);
    });
}
//Index de card
let currentIndex = 0;
//Funcionalidade do botão de voltar
document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarrossel();
    }
});
//Funcionalidade do botão de avançar
document.getElementById('nextBtn').addEventListener('click', () => {
    const visibleCards = document.querySelectorAll('.card').length;
    if (currentIndex < visibleCards - 1) {
        currentIndex++;
        updateCarrossel();
    }
});
//Gira o carrossel de acordo com o index dele
function updateCarrossel() {
    const carrossel = document.getElementById('carrossel');
    carrossel.style.transform = `translateX(${-currentIndex * 460}px)`;
}
//Funcionalidade para verificar se o icone é igual ao card da matéria
document.querySelectorAll('.ic').forEach(icon => {
    icon.addEventListener('click', function() {
        document.querySelectorAll('.ic').forEach(icon => {
            icon.classList.remove('ic-colored');
        });
        this.classList.add('ic-colored');

        let subject = this.getAttribute('data-subject');
        let filteredCards = cards.filter(card => card.subject === subject);
        showCards(filteredCards);

        const carrossel = document.getElementById('carrossel');
        carrossel.style.width = `${(filteredCards.length * 460) + 200}px`;

        currentIndex = 0;
        updateCarrossel();
        //Verifica se a matéria do Git Hub é igual ao card mostrado
        let gitLink = git.find(g => g.subject === subject);
        let linkButton = document.getElementById('gitlink');
        if (gitLink) {
            linkButton.onclick = () => window.open(gitLink.link, '_blank');
        } else {
            linkButton.disabled = true;
            linkButton.onclick = null;
        }
    });
});

