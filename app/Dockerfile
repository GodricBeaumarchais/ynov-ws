# Utiliser l'image officielle de Node.js comme image de base
FROM node:latest

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers de package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances du projet
RUN npm install

# Copier le reste des fichiers du projet dans le répertoire de travail du conteneur
COPY . .

CMD ["npm", "start"]
