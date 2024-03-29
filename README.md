# Projet API avec Docker

Ce projet implémente une API REST simple avec Node.js et Express, permettant de créer et de supprimer des tables dans une base de données PostgreSQL. Le projet utilise Docker pour faciliter la configuration et le déploiement de l'application et de la base de données.

## Utilité de l'API

L'API fournie par ce projet permet d'interagir facilement avec une base de données PostgreSQL en offrant des endpoints pour créer et supprimer des tables. Cette API peut être utilisée pour gérer dynamiquement la structure de la base de données dans des applications qui nécessitent une modification fréquente des schémas de base de données.

## Installation

### Prérequis

- Docker et Docker Compose doivent être installés sur votre machine.
- Node.js doit être installé si vous souhaitez exécuter l'application hors conteneurs.

### Mise en place avec Docker

1. Clonez le dépôt contenant les fichiers du projet.
2. Dans le répertoire du projet, choisissez l'un des fichiers Docker Compose fournis pour démarrer l'application et la base de données.

### Utilisation de `docker-compose.yml`

Ce fichier Docker Compose configure et lance un conteneur pour l'application Node.js et un conteneur pour la base de données PostgreSQL. 

Pour l'utiliser :
```
docker-compose up --build
```

Cette commande construit l'image de l'application à partir du Dockerfile situé dans le dossier `./app` et lance les services `app` et `db` comme configuré.

### Utilisation de `docker-compose-bis.yml`

Ce fichier Docker Compose est configuré pour connecter l'application à une instance PostgreSQL hébergée (dans cet exemple, sur Aiven Cloud). Il ne démarre pas de conteneur pour la base de données PostgreSQL localement mais configure l'application pour se connecter à une base de données distante.

Pour l'utiliser :
```
docker-compose -f docker-compose-bis.yml up --build
```

## Différences entre les deux configurations Docker Compose

- `docker-compose.yml` crée un environnement local complet avec une base de données PostgreSQL hébergée dans un conteneur Docker. Il est idéal pour le développement et les tests locaux.
- `docker-compose-bis.yml` est configuré pour utiliser une base de données PostgreSQL distante. Cela convient aux environnements de production ou lorsque l'accès à une base de données PostgreSQL spécifique est nécessaire.

## Accéder à l'API

Une fois l'application lancée, l'API est accessible via `http://localhost:3000/api`. Vous pouvez utiliser les endpoints suivants pour interagir avec la base de données :
- POST `/api/table/create/:tableName` : Crée une nouvelle table avec le nom spécifié.
- POST `/api/table/delete/:tableName` : Supprime la table spécifiée.

Utilisez un outil comme Postman ou curl pour envoyer des requêtes à l'API.
