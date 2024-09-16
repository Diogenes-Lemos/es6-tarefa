const AlunosDeMecanica = [
    {nome: 'João', nota: 4},
    {nome: 'Antônio', nota: 9},
    {nome: 'Maria', nota: 5},
    {nome: 'José', nota: 7},
    {nome: 'Magnólia', nota: 8}
];

const desempenhoDosAlunos = (alunos) => {
    const notaBaixa = alunos.filter(aluno => aluno.nota <= 6);
    const notaAlta = alunos.filter(aluno => aluno.nota >= 6);
    
    return { notaBaixa, notaAlta };
};

const {notaBaixa, notaAlta} = desempenhoDosAlunos(AlunosDeMecanica)

console.log(`Os alunos: ${JSON.stringify(notaBaixa)} infelizmente foram reprovados`);
console.log(`Parabens aos alunos: ${JSON.stringify(notaAlta)} pois foram aprovados`);