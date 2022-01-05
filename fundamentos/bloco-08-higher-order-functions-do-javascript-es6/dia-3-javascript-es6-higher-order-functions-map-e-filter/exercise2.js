const expectedResult = [
    {
      age: 31,
      author: 'Isaac Asimov',
    },
    {
      age: 38,
      author: 'H. P. Lovecraft',
    },
    {
      age: 39,
      author: 'Stephen King',
    },
    {
      age: 43,
      author: 'George R. R. Martin',
    },
    {
      age: 45,
      author: 'Frank Herbert',
    },
    {
      age: 62,
      author: 'J. R. R. Tolkien',
    },
  ];
  
  function nameAndAge() {
    // escreva seu código aqui
    const authorAndName = expectedResult.map((expectedResult) => {
        return `${expectedResult.author} ${expectedResult.age}`;
        
    })
    console.log('Ordenada sem função de comparação:', expectedResult.sort());
  }

  nameAndAge()