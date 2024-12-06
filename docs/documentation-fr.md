# Documentation de l'Application Zodiac

## Structure de l'Application

## Composants Principaux

### Pages
- **Home**: Page d'accueil de l'application
- **FindSign**: Permet aux utilisateurs de trouver leur signe astrologique
- **Compatibility**: Calcule la compatibilité entre deux signes
- **Horoscope**: Affiche l'horoscope quotidien

### Composants Réutilisables
- **SplashScreen**: Écran de démarrage avec animation (2.5 secondes)
- **Navigation**: Barre de navigation principale
- **ThemeToggle**: Bouton pour basculer entre thème clair/sombre

## Gestion d'État (Redux)

### Store Principal
- Gère l'état global avec deux reducers:
  - `zodiac`: Gestion des données astrologiques
  - `theme`: Gestion du thème de l'application

### ZodiacSlice
États gérés:
- `currentSign`: Signe actuel
- `birthDate`: Date de naissance
- `compatibility`: Scores de compatibilité
- `favorites`: Liste des horoscopes favoris

## Utilitaires

### FavoritesManager
Fonctionnalités:
- Ajout aux favoris
- Suppression des favoris
- Récupération des favoris
- Stockage local (localStorage)

### NotificationManager
Gestion des notifications:
- Demande de permission
- Affichage des notifications système

## Fonctionnalités Principales

1. **Recherche de Signe**
   - Calcul du signe astrologique par date de naissance
   - Affichage des caractéristiques du signe

2. **Compatibilité**
   - Analyse entre deux signes
   - Score de compatibilité
   - Recommandations

3. **Horoscope**
   - Prédictions quotidiennes
   - Système de favoris
   - Notifications personnalisées

4. **Thème**
   - Mode clair/sombre
   - Persistance des préférences

## Technologies Utilisées

- React
- Redux Toolkit
- React Router
- Local Storage
- Web Notifications API

## Installation et Démarrage

1. Installation des dépendances:
```bash
npm install
