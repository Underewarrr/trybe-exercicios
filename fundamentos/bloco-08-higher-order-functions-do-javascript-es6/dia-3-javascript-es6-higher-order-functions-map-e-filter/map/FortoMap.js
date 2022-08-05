const allNameStudents = [];

    // FOR 1
for (let index = 0; index < estudantes.length; index += 1 ) {
  if(estudantes[index].turno === 'Manhã') {
    allNameStudents.push(`${estudantes[index].nome} ${estudantes[index].sobrenome}`)
  }
}

console.log(allNameStudents);

    //MAP 1
const allNameStudents = estudantes.filter((estudante) => (
    estudante.turno === 'Manhã')).map((estudante) => `${estudante.nome} ${estudante.sobrenome}`);
  /*   
  O que foi feito? 
  Primeiro usou-se o filter para filtrar todos os estudantes que estudam no período da manhã. 
  Como o retorno do filter é um array de elementos, você pode usar o map logo em seguida para 
  retornar os nomes completos de estudantes presentes nesse novo array. O
   map nesse caso é usado apenas para retornar as informações pedidas, o nome completo, 
   enquanto o filter é usado para filtrar o array.  */
  console.log(allNameStudents);


         // FOR 2
   const findStudent = (name, students) => {
    for (let index = 0; index < students.length; index += 1) {
      if (students[index].nome === name) {
        return students[index];
      }
    }
  };

  const reportStatus = (name, students) => {
    const getStudent = findStudent(name, students);
    const report = [];
    for (let index = 0; index < getStudent.materias.length; index += 1) {
      if (getStudent.materias[index].nota >= 60) {
        report.push(`${getStudent.materias[index].name} Aprovado`);
      } else {
        report.push(`${getStudent.materias[index].name} Reprovado`);
      }
    }
    return report;
  };
  
  console.log(reportStatus('Natalia', estudantes));
    // MAP 2
  const reportStatus = (name, students) => {
    const studentInfo = students.find((student) => student.nome === name);
    return studentInfo.materias.map((materia) => (
      `${materia.name} ${(materia.nota >= 60) ? 'Aprovado' : 'Reprovado'}`
    ));
  };
  /* 
  Primeiro, fizemos um find para buscar e retornar os dados do estudante. 
  O objeto foi retornado e salvo na variável studentsInfo , depois o map foi usado 
  para percorrer as matérias do objeto retornado e salvar o que se queria em um array da forma desejada. */ 

  console.log(reportStatus('Natalia', estudantes));