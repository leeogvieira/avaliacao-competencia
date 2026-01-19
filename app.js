new Vue({
    el: '#app',
    data: {
        showIntro: true, // Variável para controlar a exibição da tela inicial
        categories: {
            Disciplina: {
                Perguntas: [
                    "Você se considera uma pessoa disciplinada?",
                    "Você teria dificuldades em se disciplinar?",
                    "Manter disciplina é importante para o seu dia a dia?",
                    "Mudaria seus hábitos para se disciplinar?",
                    "Você concorda que é muito importante ser disciplinado tanto na vida social quanto na vida profissional?"
                ]
            },
            Negociação: {
                Perguntas: [
                    "Você entende o que a outra pessoa quer antes de negociar?",
                    "Você adapta sua forma de comunicação para ajudar o outro a entender melhor?",
                    "Você consegue manter a calma e controlar as emoções em uma negociação?",
                    "Você abre mão de algo para alcançar um objetivo maior?",
                    "Você define metas claras antes de iniciar uma negociação?"
                ]
            },
            Ambição: {
                Perguntas: [
                    "Você se sente motivado a alcançar metas desafiadoras?",
                    "Você se compara com outros para medir o seu progresso?",
                    "Você estabelece novos objetivos assim que alcança os anteriores?",
                    "Você dedica tempo extra para aprender habilidades que podem avançar sua carreira?",
                    "Você se sente insatisfeito com o seu progresso atual?"
                ]
            },
            Criatividade: {
                Perguntas: [
                    "Você costuma sugerir novas ideias ou melhorias para processos no trabalho?",
                    "Quando enfrenta um problema, você costuma buscar soluções diferentes das já conhecidas?",
                    "Em situações desafiadoras, você tende a pensar “fora da caixa” para resolver os problemas?",
                    "Você se sente confortável ao experimentar métodos novos para realizar suas tarefas?",
                    "Você busca inspiração em diferentes fontes, mesmo que não sejam diretamente relacionadas ao trabalho?"
                ]
            },
            "Trabalho em Equipe": {
                Perguntas: [
                    "Você lida com os conflitos dentro do ambiente de trabalho de maneira construtiva?",
                    "Normalmente você é quem define e distribui responsabilidades em um projeto em equipe?",
                    "Você motiva sua equipe a alcançar metas comuns?",
                    "Você lida bem com prazos e pressão em equipe?",
                    "Você contribui ativamente para melhorar a colaboração e o desempenho do grupo desde o início do projeto?"
                ]
            },
            "Gestão de Pessoas": {
                Perguntas: [
                    "Você acha que ser um bom gestor é saber resolver todas as questões emocionais que surgirem no trabalho?",
                    "Já foi escolhido pelos seus colegas para liderar algum projeto?",
                    "Você saberia lidar com alguns dos seus colegas que estão infelizes no trabalho?",
                    "No trabalho, já precisou convencer alguém sobre alguma coisa?",
                    "Você gosta de se comunicar e estar envolvido em projetos voltados para o desenvolvimento de pessoas na empresa?"
                ]
            },
            Comunicação: {
                Perguntas: [
                    "Você se sente à vontade para expressar suas ideias em grupos grandes?",
                    "Você se considera uma pessoa comunicativa?",
                    "Quando você precisa apresentar um assunto importante, você normalmente se prepara para a apresentação?",
                    "Em um grupo com opiniões divergentes, você se posiciona e conduz a discussão?",
                    "Você se sente confortável ao falar em público ou em reuniões?"
                ]
            },
            Resiliência: {
                Perguntas: [
                    "Você costuma manter a calma em situações de alta pressão?",
                    "Quando algo não sai como planejado, você consegue rapidamente ajustar seus planos?",
                    "Você já se sentiu desmotivado, mas conseguiu seguir em frente mesmo assim?",
                    "Você costuma aprender algo positivo com os fracassos?",
                    "Você consegue lidar com críticas de forma construtiva, sem se abalar emocionalmente?"
                ]
            }
            // Adicione as outras categorias usando a mesma estrutura
        },
        currentCategoryIndex: 0,
        step: 0,
        answers: {},
        scores: {},
        showResult: false
    },
    computed: {
        category() {
            return Object.keys(this.categories)[this.currentCategoryIndex];
        },
        currentQuestion() {
            return this.categories[this.category].Perguntas[this.step];
        }
    },
    methods: {
        startQuiz() {
            this.showIntro = false; // Oculta a tela inicial e inicia o questionário
        },
        answer(response) {
            if (!this.answers[this.category]) {
                this.answers[this.category] = [];
            }
            this.answers[this.category].push(response);

            if (this.step < this.categories[this.category].Perguntas.length - 1) {
                this.step++;
            } else {
                this.step = 0;
                if (this.currentCategoryIndex < Object.keys(this.categories).length - 1) {
                    this.currentCategoryIndex++;
                } else {
                    this.calculateScores();
                    this.showResult = true;
                }
            }
        },
        reset() {
            this.currentCategoryIndex = 0;
            this.step = 0;
            this.answers = {};
            this.scores = {};
            this.showResult = false;
            this.showIntro = true; // Retorna à tela inicial
        },
        calculateScores() {
            const calculateScore = (answers) => {
                return answers.reduce((score, answer) => {
                    if (answer === 'sim') score += 20;
                    else if (answer === 'as_vezes') score += 10;
                    return score;
                }, 0);
            };

            for (let cat in this.answers) {
                this.scores[cat] = calculateScore(this.answers[cat]);
            }
        }
    }
});
