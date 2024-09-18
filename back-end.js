let TodasAsPalavras = [
    'BMW',
    'Mercedes',
    'Audi',
    'Fiat',
    'Jaguar',
    'Seat',
    'Citroen',
    'Porshe',
    'Prozis',
    'Monster',
    'Redbull',
    'Zara',
    'McDonalds',
    'Samsung',
    'Apple',
    'Microsoft',
    'Lotus',
    'Amazon',
    'Razer',
    'HP',
    'SportZone',
    'Decathlon',
    'Coca-Cola',
    'Disney',
    'Google',
    'Nike',
    'Addidas',
    'Meta',
    'Instagram',
    'Facebook',
    'Honda',
    'IKEA',
    'Nescafe',
    'Gucci',
    'Prada',
    'Sony',
    'Huawei',
    'Nestle',
    'Ebay',
    'Rolex',
    'Nintendo',
    'PlayStation',
    'Burger-King',
    'Lego',
    'Gomas',
    'Banana',
    'Chocolate',
    'Pera',
    'Limão',
    'Arroz',
    'Massa',
    'Croquete',
    'Batatas',
    'Rissol',
    'Sumol',
    'Água',
    'Kiwi',
    'Ketchup',
]
let Marcas = [
    'BMW',
    'Mercedes',
    'Audi',
    'Fiat',
    'Jaguar',
    'Seat',
    'Citroen',
    'Porshe',
    'Prozis',
    'Monster',
    'Redbull',
    'Zara',
    'McDonalds',
    'Samsung',
    'Apple',
    'Microsoft',
    'Lotus',
    'Amazon',
    'Razer',
    'HP',
    'SportZone',
    'Decathlon',
    'Coca-Cola',
    'Disney',
    'Google',
    'Nike',
    'Addidas',
    'Meta',
    'Instagram',
    'Facebook',
    'Honda',
    'IKEA',
    'Nescafe',
    'Gucci',
    'Prada',
    'Sony',
    'Huawei',
    'Nestle',
    'Ebay',
    'Rolex',
    'Nintendo',
    'PlayStation',
    'Burger-King',
    'Lego',
]
let Comidas = [
    'Gomas',
    'Banana',
    'Chocolate',
    'Pera',
    'Limão',
    'Arroz',
    'Massa',
    'Croquete',
    'Batatas',
    'Rissol',
    'Sumol',
    'Água',
    'Kiwi',
    'Ketchup',
]

// Only para testes vv
let Selecao = 0
let EscolhaCategora = 1

// Only para testes ^^

function GerarNumeroRandom(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
}

function GerarRandomLetra() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    return alphabet[Math.floor(Math.random() * alphabet.length)]
}

let JogoFacil = [
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
]
let JogoMedio = [
    [
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
    ],
    [
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
    ],
    [
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
    ],
    [
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
    ],
    [
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
    ],
    [
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
    ],
    [
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
    ],
    [
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
    ],
    [
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
    ],
    [
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
    ],
    [
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
    ],
    [
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
    ],
    [
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
    ],
    [
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
    ],
    [
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
    ],
    [
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
    ],
]
let JogoDificil = [
    [
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
    ],
    [
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
    ],
    [
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
    ],
    [
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
    ],
    [
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
    ],
    [
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
    ],
    [
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
    ],
    [
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
    ],
    [
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
    ],
    [
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
    ],
    [
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
    ],
    [
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
    ],
    [
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
    ],
    [
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
    ],
    [
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
    ],
    [
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
    ],
    [
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
    ],
    [
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
    ],
    [
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
    ],
]

var Config = {
    Lista: TodasAsPalavras,
    Display: JogoFacil,
    Distancia: 8,
    NdePalavrasGeradas: 6,
    Tempo: 60,
    Limite: 50,
    Limpar: 13,
}

if (EscolhaCategora == 1) {
    Config.Lista = TodasAsPalavras
    Config.Limite = 58
} else if (EscolhaCategora == 2) {
    Config.Lista = Marcas
    Config.Limite = 20 // Definir Aqui Limite De Palavras
} else if (EscolhaCategora == 3) {
    Config.Lista = Comidas
    Config.Limite = 20 // Definir Aqui Limite De Palavras
}

if (Selecao == 0) {
    Config.Display = JogoFacil
    Config.Distancia = 8
    Config.NdePalavrasGeradas = GerarNumeroRandom(5, 10)
    Config.Tempo = 60
    Config.Limpar = 13
} else if (Selecao == 1) {
    Config.Display = JogoMedio
    Config.Distancia = 16
    Config.NdePalavrasGeradas = GerarNumeroRandom(10, 20)
    Config.Tempo = 50
    Config.Limpar = 13
} else if (Selecao == 2) {
    Config.Display = JogoDificil
    Config.Distancia = 18
    Config.NdePalavrasGeradas = GerarNumeroRandom(10, 20)
    Config.Tempo = 40
    Config.Limpar = 13
}

console.log('Tabela Vazia:')
console.table(Config.Display)

let AdicionarPalavra = 1
while (AdicionarPalavra < Config.NdePalavrasGeradas) {
    let PalavraInserida = 0
    while (PalavraInserida == 0) {
        PalavraInserida = PosicionarPalavra()
    }

    for (let Palavra = 0; Palavra < Config.Lista.length; Palavra++) {
        const element = Config.Lista[Palavra]
        if (element == PalavraInserida) {
            Config.Lista[Palavra] = ''
        }
    }

    AdicionarPalavra = AdicionarPalavra + 1
}

if (AdicionarPalavra == Config.NdePalavrasGeradas) {
    Config.Display.forEach((Palavra) => {
        for (let P = 0; P < Config.Limpar; P++) {
            const element = Palavra[P]
            if (element == ' ') {
                let RandomLetra = GerarRandomLetra()
                Palavra[P] = RandomLetra
            }
        }
    })
}

function PosicionarPalavra() {
    let BuscarPalavraRandom = GerarNumeroRandom(1, Config.Limite)
    let PalavraEncontrada = Config.Lista[BuscarPalavraRandom]

    if (PalavraEncontrada == '') {
        // Se a palavra foi removida
        return 0
    }

    let DimensaoPalavra = PalavraEncontrada.length
    let GerarPosicaoX = GerarNumeroRandom(1, Config.Distancia)
    let GerarPosicaoY = GerarNumeroRandom(1, Config.Distancia)
    let Direcao = GerarNumeroRandom(1, 18)
    let ReturnarPreenchido = 0

    if (Direcao > 15) {
        // Direita

        let VerificaDistancaDireita = GerarPosicaoX + DimensaoPalavra
        if (VerificaDistancaDireita > Config.Distancia) {
            return 0 // Cancelar Palavra Inválida
        }

        ReturnarPreenchido = DefinirPalavra(
            GerarPosicaoX,
            GerarPosicaoY,
            PalavraEncontrada
        )
    } else if (Direcao > 12) {
        // Esquerda

        let VerificaDistancaDireita = GerarPosicaoX - DimensaoPalavra
        if (VerificaDistancaDireita < 1) {
            return 0 // Cancelar Palavra Inválida
        }

        ReturnarPreenchido = DefinirPalavra(
            VerificaDistancaDireita,
            GerarPosicaoY,
            PalavraEncontrada
        ) // Aqui enviamos o X como a posição de verificação para facilitar o inject da palavra ao inves de fazermos o algoritmo inverso :)
    } else if (Direcao > 9) {
        // Diagonal Baixo

        let VerificaDistancaDiagonaBaixoX = GerarPosicaoX - DimensaoPalavra
        let VerificaDistancaDiagonaBaixoY = GerarPosicaoY - DimensaoPalavra

        if (
            VerificaDistancaDiagonaBaixoX < 1 ||
            VerificaDistancaDiagonaBaixoY < 1
        ) {
            return 0 // Cancelar Palavra Inválida
        }

        ReturnarPreenchido = DefinirPalavra(
            GerarPosicaoX,
            GerarPosicaoY,
            PalavraEncontrada
        )
    } else if (Direcao > 6) {
        // Diagonal Cima

        let VerificaDistancaDiagonaCimaoX = GerarPosicaoX + DimensaoPalavra
        let VerificaDistancaDiagonaCimaY = GerarPosicaoY + DimensaoPalavra

        if (
            VerificaDistancaDiagonaCimaoX > Config.Distancia ||
            VerificaDistancaDiagonaCimaY > Config.Distancia
        ) {
            return 0 // Cancelar Palavra Inválida
        }

        ReturnarPreenchido = DefinirPalavra(
            GerarPosicaoX,
            GerarPosicaoY,
            PalavraEncontrada
        )
    } else if (Direcao > 3) {
        // Cima

        let VerificaDistancaCima = GerarPosicaoY + DimensaoPalavra
        if (VerificaDistancaCima > Config.Distancia) {
            return 0 // Cancelar Palavra Inválida
        }

        ReturnarPreenchido = DefinirPalavra(
            GerarPosicaoX,
            GerarPosicaoY,
            PalavraEncontrada
        )
    } else if (Direcao > 0) {
        // Baixo

        let VerificaDistancaBaixo = GerarPosicaoY - DimensaoPalavra
        if (VerificaDistancaBaixo < 1) {
            return 0 // Cancelar Palavra Inválida
        }

        ReturnarPreenchido = DefinirPalavra(
            GerarPosicaoX,
            GerarPosicaoY,
            PalavraEncontrada
        )
    }

    return ReturnarPreenchido
}

function DefinirPalavra(PosX, PosY, Palavra) {
    for (let u = 0; u < Palavra.length; u++) {
        let PosicaoCorreta = u - 1
        let ContaCertaY = PosY + PosicaoCorreta
        let ContaCertaX = PosX + PosicaoCorreta
        if (Config.Display[ContaCertaY][ContaCertaX] != ' ') {
            return 0
        } else {
            Config.Display[ContaCertaY][ContaCertaX] = Palavra[u]
        }
    }

    return Palavra
}

console.log('Tabela Já Preenchida!')
console.table(Config.Display)
