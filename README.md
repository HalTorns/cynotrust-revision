# CynoTrust Formation - Aide révision

Site de révision de l’anatomie canine : 6 planches et 90 repères, interface sombre, descriptions, exercices de placement, correction, score, reprise des erreurs, zoom à la molette et déplacement de l’image. Les schémas sont issus des cours CynoTrust ; leurs mentions d’origine sont conservées.

## Déployer avec Coolify

Créer une **Application depuis un dépôt Git** (pas un service Compose vide), puis renseigner :

| Réglage | Valeur |
| --- | --- |
| Dépôt | `https://github.com/HalTorns/cynotrust-revision` |
| Branche | `main` |
| Build Pack | `Docker Compose` |
| Base Directory | `/` |
| Docker Compose Location | `/docker-compose.yml` |
| Service HTTP | `web` |
| Port interne | `80` |
| Domains for web | `https://revision.truffosphere.fr` |

1. Faire pointer le DNS de `revision.truffosphere.fr` vers le serveur Coolify.
2. Charger/enregistrer la configuration Compose, puis attribuer le domaine au service `web`.
3. Cliquer sur **Deploy**. Coolify construit l’image Nginx, route les requêtes vers le port 80 et gère HTTPS.

Aucun secret, variable d’environnement ou volume persistant n’est nécessaire. Le port n’est pas publié sur l’hôte : le proxy Coolify accède directement au service. Le healthcheck utilise `/healthz`. Le fichier `docker-compose.local.yml` sert uniquement aux essais locaux.

[Documentation Coolify : déploiement Docker Compose depuis Git](https://coolify.io/docs/applications/builds/docker-compose).

## Essayer en local avec Docker

```sh
docker compose -f docker-compose.yml -f docker-compose.local.yml up -d --build
```

Ouvrir http://localhost:8080. Pour arrêter :

```sh
docker compose -f docker-compose.yml -f docker-compose.local.yml down
```

## Modifier le site

- `dist/index.html` : structure de la page.
- `dist/style.css` : thème et mise en page.
- `dist/app.js` : exercices et navigation dans les images.
- `dist/data.js` : légendes, descriptions et coordonnées des repères.
- `dist/assets/` : six images utilisées.
- `nginx.conf` : serveur HTTP, revalidation du cache et healthcheck.

Après une modification, pousser sur `main` puis redéployer dans Coolify (ou activer les déploiements automatiques via son intégration GitHub).

Le site est autonome : il ne dépend ni de Sites ni d’une API OpenAI. Les réponses sont conservées uniquement pendant la session de la page. Il n’intègre pas de connexion utilisateur ; l’accès dépend du domaine et des protections configurées sur ton hébergement.

## Vérification automatique

GitHub Actions construit l’image, démarre le service Compose, attend son état sain, vérifie la configuration Nginx et contrôle les pages, scripts et six images par HTTP.
