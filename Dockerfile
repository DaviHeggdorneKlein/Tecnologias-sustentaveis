# Dockerfile
# Use uma imagem Node.js como base
FROM node:18

# Cria um diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copia os arquivos de configuração do Node.js
COPY package*.json ./

# Instala as dependências do aplicativo
RUN npm install

# Copia o restante do código fonte para o contêiner
COPY . .

# Expõe a porta que o aplicativo irá rodar
EXPOSE 8080

# Comando para iniciar o aplicativo
CMD ["node", "index.js"]
