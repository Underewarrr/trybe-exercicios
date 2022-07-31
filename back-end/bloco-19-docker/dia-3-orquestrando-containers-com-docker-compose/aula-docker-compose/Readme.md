

## Compose
Ao utilizar a flag -p <porta-do-computador>:<porta-do-container> <br>
O primeiro parâmetro é sempre a porta do computador local e o segundo parâmetro é a porta exposta no container. 

 O Compose possui quatro políticas de reinicialização, sendo elas:

     no : define que o container não reiniciará automaticamente (Padrão);
    on-failure: define que o container será reiniciado caso ocorra alguma falha apontada pelo exit code, diferente de zero;
    always: especifica que sempre que o serviço parar, seja por um falha ou porque ele simplesmente finalizou sua execução, ele deverá ser reiniciado;
    unless-stopped: define que o container sempre será reiniciado, a menos que utilizemos o comando docker stop <container> manualmente.

## Usando Variáveis de Ambiente
É possível criar e usar variáveis de ambiente dentro dos containers.<br>
Podemos até especificar para o Compose utilizar o conteúdo de variáveis de ambiente do nosso próprio computador! <br>
O nome da chave que utilizamos é environment. Com esta chave, conseguimos configurar as variáveis de ambiente em nossos serviços do Compose.<br>
Vamos precisar passar para nosso back-end o nome do serviço onde o banco de dados vai rodar, em uma variável chamada DB_HOST.<br>
Logo, nosso environment de ficará assim:<br>

<p>environment:<br>
      - DB_HOST=database</p>
      <br>

## Dependência entre Serviços
Uma configuração importante para garantir a ordem de inicialização e encerramento dos nossos serviços é a chave depends_on. Com esta chave, conseguimos criar dependências entre os serviços!

## Useful Commands
### Subindo todos os serviços
Chamamos o ato de executar todos os serviços do Compose de subir. Para subir todos os serviços utilizamos o comando <br>docker-compose up<br> no terminal.<br>
A flag -d serve para executarmos todos os serviços no modo segundo plano<br>
Nós podemos ler os logs de cada um dos serviços posteriormente, usando o comando <br>docker-compose logs <nome-do-serviço>.

### Verificando o status dos serviços
Agora precisamos visualizar o status dos nossos serviços. Faremos isso usando o comando <br>docker-compose ps.

### Reconstruindo a Imagem Docker
Podemos deixar nítido que as imagens precisam ser construídas novamente usando o Compose. <br>Para isso, utilizamos a flag --build, junto com o comando <br>docker-compose up

### Subindo serviços específicos
Além de subir e descer, é possível subir apenas parte dos serviços.
<br>rodarmos o comando:
<br>
docker-compose up backend

### Visualizando os logs dos serviços
Outro comando importante do Compose é o <br>docker-compose logs <nome-do-serviço>. <br>Com este comando, podemos ver os logs de nossos serviços de maneira semelhante como fazemos unitariamente com os containers<br>
docker-compose logs backend<br>
Para limitar a quantidade de linhas de logs retornadas pelo comando, podemos usar a flag --tail especificando quantas linhas desejamos que o comando retorne.
<br>
docker-compose logs --tail 5 database<br>
De maneira similar ao comando no Docker, podemos utilizar a flag -f ou --follow para acompanhar em tempo real as saídas dos containers. Para sair, use Ctrl+C ou Command+C. 