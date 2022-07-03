<h2>Docker</h2>
    <h3>Listando containers</h3>
<p>➡️ Utilize o comando docker ps` ou o comando mais novo, o `docker container ls`, para listar todos os containers em execução neste momento em sua máquina. </p>
    <h3>Executando um novo container</h3>
<p>➡️ Utilize o comando docker container run flags ? imagem:tag argumentos ? para executar um container utilizando a imagem identificada pelo imagem:tag.</p>
    <h3>Acessando o terminal do container</h3>
<p>➡️ docker container run --rm -d --name meu-container debian:stable-20220622-slim</p>
<p>➡️ Comando docker exec -it nome-do-container comando-a-ser-executado</p>
<p>➡️ Mostrar Terminnal : docker exec -it meu-container sh</p>
    <h4>Encerradno o terminal do container</h4>
<p>➡️ docker stop -t 0 meu-container</p>
<p>➡️ Adding the flags -t and -i will allow Ctrl-c to work as suggested: [(source)] (https://github.com/moby/moby/issues/2838#issuecomment-29205965 1.1k)</p>
<p>➡️ docker run -t -i -p debian:stable-slim</p>

   

 