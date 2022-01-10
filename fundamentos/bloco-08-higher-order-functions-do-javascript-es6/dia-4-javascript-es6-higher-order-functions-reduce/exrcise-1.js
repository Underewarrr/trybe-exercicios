const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten() {
    // escreva seu código aqui
    // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
        // usando reduce para retornar um novo array de array com a hofConcat
    const array = arrays.reduce((result, newarray) => result.concat(newarray), [])
    console.log(array)
  }
flatten();