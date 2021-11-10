var logBackup = console.log;
var logMessages = [];

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    msg: {
        welcomeMsg : "'Bem Vindo!'"
    },
    language:{
       ptBr:'pt-br'
    },
    country:{
        brazil:'Brasil'
    },
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  console.log(info.personagem + " received a msg from server", info.msg["welcomeMsg"],  ": from country : " + info.country['brazil'])
  /*  Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console: */