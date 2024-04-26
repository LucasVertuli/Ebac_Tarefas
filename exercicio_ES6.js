//criar uma array de objetos, onde teremos como atributos do objeto: o nome e a nota de alunos.

// const arrayDeObjetos = [
//     {nome: 'Lucas', nota : 5},
//     {nome:'Maria', nota:7},
//     {nome:'carlos', nota:8},
//     {nome:'João', nota: 0},
//     {nome: 'Graça', nota: 10},
//     {nome: 'Clara', nota: 4},
//     {nome: 'Matheus', nota: 6}
// ]

// //Criar uma função que irá retornar apenas os alunos que tiveram nota maior ou igual à 6.

// function aprovado(){
//     for (let i =0; i > arrayDeObjetos.lenthg; i++) {
//         let aprovado() = this.nota >= 6{
//             console.log(`Parabéns ${this.nome}, você foi aprovado(a)!`)
//     }
//             if (this.nota >= 6)
//             console.log(`Parabéns ${this.nome}, você foi aprovado(a)!`)
//                 else {
//                     console.log(`Que pena ${this.nome}, você foi reprovado(a), tente novamente!`)
//                 }
//         }






    class Notas {
        constructor(nomeDoAluno, notaDoAluno){
            this.nome = nomeDoAluno,
            this.nota = notaDoAluno
        }

//Criar uma função que irá retornar apenas os alunos que tiveram nota maior ou igual à 6.

        aprovado(){
            if (this.nota >= 6)
            console.log(`Parabéns ${this.nome}, você foi aprovado(a)!`)
                else {
                    console.log(`Que pena ${this.nome}, você foi reprovado(a), tente novamente!`)
                }
        }
        
    }

const aluno = new Notas ('Lucas', 5);
aluno.aprovado();

const aluno2 = new Notas ('Maria', 7);
aluno2.aprovado();

const aluno3 = new Notas ('Carlos', 8);
aluno3.aprovado();

const aluno4 = new Notas ('João', 0);
aluno4.aprovado();

const aluno5 = new Notas ('Graça', 10);
aluno5.aprovado();

const aluno6 = new Notas ('Clara', 4);
aluno6.aprovado();

const aluno7 = new Notas ('Matheus', 6);
aluno7.aprovado()




