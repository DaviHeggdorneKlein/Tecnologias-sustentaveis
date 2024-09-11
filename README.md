
# Tecnologias Sustentáveis

Aplicação focada em tecnologias sustentáveis, utilizando Docker e PostgreSQL para ambiente de desenvolvimento.

## Como rodar a aplicação

Siga os passos abaixo para rodar a aplicação corretamente.

### 1. Clonar o Repositório
Clone o repositório para sua máquina local:

```bash
git clone https://github.com/DaviHeggdorneKlein/Tecnologias-sustentaveis.git
cd Tecnologias-sustentaveis
```

### 2. Instalar Docker e Docker Compose
Certifique-se de ter o Docker e o Docker Compose instalados em sua máquina. Caso não tenha, você pode instalá-los através dos links abaixo:

- [Instruções de instalação do Docker](https://docs.docker.com/get-docker/)
- [Instruções de instalação do Docker Compose](https://docs.docker.com/compose/install/)

### 3. Build e Up dos containers Docker
Para construir as imagens e rodar o projeto com Docker, execute:

```bash
docker-compose up --build
```

Este comando irá criar os containers necessários e iniciar os serviços definidos no arquivo `docker-compose.yml`.

### 4. Acessar a aplicação
Assim que os containers estiverem em execução, acesse a aplicação no seu navegador, provavelmente através da URL:

```bash
http://localhost:3000
```

### 5. Parar os containers
Para parar a execução dos containers, utilize o comando:

```bash
docker-compose down
```

### Observações:
- Verifique se a porta do PostgreSQL configurada no `docker-compose.yml` está disponível no seu sistema.
- Certifique-se de que as permissões de leitura e escrita estejam corretas nos volumes mapeados pelo Docker.
- Se houver migrações no banco de dados, não se esqueça de rodar os comandos necessários após subir os containers.
