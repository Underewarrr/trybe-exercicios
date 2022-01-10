const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  function containsA() {
    // escreva seu código aqui
    const verify = (names) => {
        names.reduce((result, names) => {
            // transform all to lowercase first
            // using include to search for an element matching
            names.toLowerCase().includes('a')
            // if name to lower case if found wihout spaces
           names.toLowerCase().split('').reduce((result, current) => {
                if (current === 'a'){
                    return current + 1
                }
                else {return result}
            )
        })
    }
}
  }
