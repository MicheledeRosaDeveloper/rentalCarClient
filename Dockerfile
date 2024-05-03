# Usa un'immagine di base di Node.js LTS
FROM node:14 as builder

# Imposta il percorso di lavoro nell'app Angular
WORKDIR /app

# Copia il file package.json nella directory di lavoro
COPY package.json .

# Installa le dipendenze del progetto
RUN npm install

# Copia il resto del codice dell'applicazione nell'immagine
COPY . .

# Usa un'immagine di base di nginx per servire l'applicazione compilata
FROM nginx:alpine


EXPOSE 4200

CMD ["npm", "start"]
