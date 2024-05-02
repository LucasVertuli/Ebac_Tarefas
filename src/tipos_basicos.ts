let estaChovendo:boolean = false

estaChovendo = true

let idade: number = 27

let altura: number = 1.75

let nacionalidade: string = 'Brasileiro'

const colegas: string[] = ['Lucas', 'Maria', 'João']
const tecnologias: Array<string> = ['HTML', 'css', 'Js']
const notas :ReadonlyArray<number> = [7,8,2,10]

//tuplas são construções parecidas com arrays, porém, com dados de diferentes tipos.
// EX:

const lista :[nome: string, estaOnline:boolean, idade:number] = ['Lucas', true, 27]


// Uinion type é usado para a avariavel aceitar mais de um tipo, usado junto ao pipe | para declarar os tipos aceitos.
let idadeDaAna:number | string = 25
idadeDaAna = '25 anos'


let Jogadores: any = 25
Jogadores =  'Trinta e dois'
Jogadores = true
Jogadores = [1,2,3]

