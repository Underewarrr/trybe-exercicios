// declarando newPerson com a função fullName

const newPerson = (fullName) => {
    const email = fullName.toLowerCase().replace(' ', '_');// trocando os espaços por _ e deixando todas letras em minusculo
    return { fullname, email: `${email}@trybe.com`};
}

const newEmployees = () => {
    const employees = {
      id1: 'Pedro Guerra', // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: 'Luiza Drumond', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: 'Carla Paiva', // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

  console.table(newEmployees(newPerson)) 