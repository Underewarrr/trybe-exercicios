### Criando a imagen e rodando em um container

Baseando-se então no Dockerfile, vamos executar o comando docker build -t primeira-imagem .


docker run --rm primeira-imagem

docker run -p 1234:80 -d --name container-name image-name

### Imagens mais robustas
docker build -t multi-stage-imagen-name .