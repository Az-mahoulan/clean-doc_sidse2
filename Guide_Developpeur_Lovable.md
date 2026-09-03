# Guide d'utilisation SIDSE IBDC (Piè Baromètre)

> **Plateforme :** SIDSE IBDC (Glazoué)
> **Source :** https://clean-doc-style.lovable.app
> **Format :** Markdown avec captures d'écran intégrées

`## Bienvenue sur SIDSE IBDC

*Guide d'utilisation*

Ce guide explique, étape par étape et avec des captures d'écran de la plateforme, comment utiliser SIDSE IBDC (Piè Baromètre) : les profils utilisateurs, la gestion des permissions et la gestion des comptes. D'autres sections (tableau de bord, PDC, ODD & indicateurs, projets phares…) viendront compléter ce document.

  

---

    
### [À propos] Ce que couvre ce guide

    
_SIDSE IBDC est la plateforme de suivi utilisée par la commune (ici illustrée avec l'exemple **Glazoué**) pour gérer le Plan de Développement Communal (PDC), les Objectifs de Développement Durable (ODD) et les indicateurs associés, ainsi que les projets phares. Chaque utilisateur y accède avec un compte associé à un **profil**, qui détermine ce qu'il peut voir et faire._

    
> 💡 **Comment lire ce guide**  
> Chaque section explique une action précise (ex. « changer le profil d'un utilisateur ») avec la marche à suivre numérotée et une capture d'écran réelle de la plateforme.

  

  

---

    
### [Comptes & accès] Les profils utilisateurs

    
_Chaque compte créé sur la plateforme se voit attribuer un profil parmi la liste ci-dessous. Le profil détermine les permissions accordées par défaut (voir la section « Permissions d'interface »), qui peuvent ensuite être ajustées individuellement pour chaque utilisateur._

    
![Liste des profils disponibles sur SIDSE IBDC](./images/shot-01.jpg)

    *📷 Liste des profils proposés lors de la création ou de la modification d'un compte utilisateur.*

    
**Profils et Rôles disponibles :**

Accès complet, y compris la gestion des utilisateurs.
      AdministrateurAccès complet aux modules métier, sans la gestion des utilisateurs.
      Administration-FinanceSocle commun + Suivi des PIT + Suivi financier.
      PersonnelSocle commun + Suivi des PIT.
      PartenaireSocle commun (tableau de bord décideur, PDC, indicateurs, rapports…).
      Partenaire / ONGOrganisation non gouvernementale associée à la commune. *(permissions à confirmer)*
      Bailleur / DonateurSocle commun — accès en consultation aux projets soutenus.
      Agent-CollecteurSocle commun — chargé de la collecte de données sur le terrain.
      Arrondissement de ChefsSocle commun — représentant au niveau de l'arrondissement.
      VUDSocle commun — profil lié au suivi urbain / développement.
      Ministère / PréfectureSocle commun — instance de tutelle départementale ou nationale.
    
    
> 💡 **Le détail complet**  
> Le détail module par module de chaque profil (« socle commun » et permissions supplémentaires) est expliqué et illustré dans la section <a href="#permissions-par-profil" style="color:inherit;">Permissions par défaut selon le profil</a>.

  

  

---

    
### [Administration] Comprendre les permissions d'interface

    
_En plus du profil général, chaque utilisateur peut avoir ses permissions ajustées individuellement, module par module. C'est ce que montre l'écran **« Permissions d'interface »**, accessible depuis la gestion des utilisateurs._

    
![Écran des permissions d'interface pour un profil Super Administrateur](./images/shot-02.jpg)

    *📷 Exemple : permissions du profil **Super Administrateur** — tous les modules sont activés.*

    
#### i. Comment lire cet écran

    
| Bloc de permissions | Contenu |
| --- | --- |
| Gestion du PDC | Tableau de bord, Tableau de bord décideur, Gestion de PDC, Éléments des indicateurs, Visualiser les indicateurs, Rapports, Nouveau PTA, Révision PTA, Suivi des PIT, Nouvelle évaluation, Recommandations, Suivi des recommandations, Calendrier budgétaire, Calendrier des évaluations, Structures municipales, Partenaires, Source de financement, Suivi financier, Statistiques. |
| ODD & Indicateurs | Liste des ODD, Liste des indicateurs, Faire une collecte, Paramètres ODD. |
| Projets Phares | Projets de tableau de bord, Projets, Secteurs, Collecte de données, Contrôle qualité. |
| Paramètres | Gestion des utilisateurs. |

    
1. **Chaque interrupteur (toggle)** correspond à un écran ou une fonctionnalité précise de la plateforme.
        
   > 💡 *Un interrupteur activé (violet) donne accès à cette fonctionnalité pour l'utilisateur concerné.*
2. **L'étiquette « Par défaut »** sous chaque permission indique qu'elle correspond au réglage standard du profil de l'utilisateur.
        
   > 💡 *Une permission modifiée manuellement n'affiche plus cette étiquette.*
3. **Le compteur en haut à droite de chaque bloc** (ex. « 19/19 ») indique le nombre de permissions activées sur le total du bloc.
4. **Bouton « Réinitialiser »** : ramène toutes les permissions du bloc aux réglages par défaut du profil.
5. **Bouton « Sauvegarder »** : enregistre les modifications apportées aux permissions de l'utilisateur.

    
#### i. Permissions par défaut selon le profil

    
_En observant les réglages « Par défaut » de plusieurs comptes, on retrouve un **socle commun** de permissions accordé à la majorité des profils, auquel s'ajoutent des permissions spécifiques pour certains d'entre eux._

    
> 💡 **Le socle commun (« base »)**  
> Tableau de bord décideur, Gestion de PDC, Visualiser les Indicateurs, Rapports (bloc Gestion du PDC) · Liste des indicateurs (bloc ODD & Indicateurs) · Projets de tableau de bord (bloc Projets Phares).

    
| Profil | Gestion du PDC | ODD & Indicateurs | Projets Phares | Gestion des utilisateurs |
| --- | --- | --- | --- | --- |
| Super Administrateur | 19/19 — tout | 4/4 — tout | 5/5 — tout | ✅ Oui |
| Administrateur | 19/19 — tout | 4/4 — tout | 5/5 — tout | ❌ Non |
| Administration‑Finance | 6/19 — socle + Suivi des PIT + Suivi financier | 1/4 — socle | 1/5 — socle | ❌ Non |
| Personnel | 5/19 — socle + Suivi des PIT | 1/4 — socle | 1/5 — socle | ❌ Non |
| Partenaire | 4/19 — socle | 1/4 — socle | 1/5 — socle | ❌ Non |
| Bailleur / Donateur | 4/19 — socle | 1/4 — socle | 1/5 — socle | ❌ Non |
| Ministère / Préfecture | 4/19 — socle | 1/4 — socle | 1/5 — socle | ❌ Non |
| VUD | 4/19 — socle | 1/4 — socle | 1/5 — socle | ❌ Non |
| Agent‑Collecteur | 4/19 — socle | 1/4 — socle | 1/5 — socle | ❌ Non |
| Arrondissement de Chefs | 4/19 — socle | 1/4 — socle | 1/5 — socle | ❌ Non |

    
> 💡 **À confirmer**  
> Le profil « Partenaire / ONG » n'a pas encore de capture d'écran dédiée — il sera ajouté dès que possible. Rappel : quel que soit le profil, l'administrateur peut toujours accorder ou retirer une permission individuellement (voir étape 5 ci-dessous).

    
![Permissions du profil Administrateur](./images/shot-03.jpg)

    *📷 Profil **Administrateur** : accès à tous les modules métier, sauf « Gestion des utilisateurs ».*

    
![Permissions du profil Administration-Finance](./images/shot-04.jpg)

    *📷 Profil **Administration‑Finance** : le socle commun, complété par « Suivi des PIT » et « Suivi financier ».*

    
![Permissions du profil Personnel](./images/shot-05.jpg)

    *📷 Profil **Personnel** : le socle commun, complété par « Suivi des PIT ».*

    
![Exemple du socle commun de permissions, profil Partenaire](./images/shot-06.jpg)

    *📷 Exemple du **socle commun** partagé par plusieurs profils (ici « Partenaire ») : Tableau de bord décideur, Gestion de PDC, Visualiser les Indicateurs, Rapports, Liste des indicateurs, Projets de tableau de bord.*

  

  

---

    
### [Administration] Gestion des utilisateurs

    
_C'est depuis cet écran que l'administrateur consulte, crée, modifie et gère les comptes de la plateforme._

    
#### 1. Voir la liste des utilisateurs

    
![Liste des utilisateurs de la plateforme SIDSE IBDC](./images/shot-07.jpg)

    *📷 Écran « Gestion des utilisateurs » : liste de tous les comptes de la commune.*

    
      
- ID, Nom, Prénoms, Contact, Email  : identité du compte.
- Profil  : rôle attribué à l'utilisateur (voir section « Profils utilisateurs »).
- Institution  : structure de rattachement (ex. la commune).
- Statut  : indique si le compte est  Activé  ou désactivé.
- Action  : icônes permettant de gérer le compte.
           
             🛡 Permissions  ⇄ Changer le profil  ✎ Modifier  🗑 Supprimer

    

    
#### 2. Rechercher ou filtrer un utilisateur

    
1. Utiliser le champ **« Nom, prénom ou email… »** pour rechercher un utilisateur précis.
2. Utiliser le menu déroulant **« Tous les profils »** pour n'afficher que les comptes d'un profil donné (ex. uniquement les « Personnel »).

    
#### 3. Créer un utilisateur

    
_La création d'un compte se fait en deux temps : la plateforme vérifie d'abord si l'adresse email existe déjà, puis propose soit de créer un nouveau compte, soit d'associer un compte existant à l'institution._

    
1. **Cliquer sur « + Créer un utilisateur »** en haut à droite de l'écran « Gestion des utilisateurs ».
2. **Étape 1 — Vérification :** saisir l'adresse email de la personne, puis cliquer sur **« Vérifier »**.
        
   > 💡 *La plateforme recherche si un compte existe déjà avec cet email.*

    
![Fenêtre de vérification de l'email avant création d'un utilisateur](./images/shot-08.jpg)

    *📷 Étape 1 : saisie de l'email et vérification de l'existence du compte.*

    
> 💡 **Deux cas de figure possibles**  
> Selon le résultat de la vérification, la fenêtre propose soit de créer un nouveau compte (aucun compte trouvé), soit d'associer un compte existant à l'institution (un compte existe déjà). Les deux cas sont détaillés ci-dessous.

    
#### 3a. Cas 1 — Aucun compte trouvé : créer un nouveau compte

    
![Formulaire d'identité pour créer un nouvel utilisateur](./images/shot-09.jpg)

    *📷 Aucun compte trouvé pour cet email : la plateforme invite à renseigner les informations du nouvel utilisateur.*

    
1. **Identité** : renseigner le **Nom** et les **Prénoms** de la personne.
2. **Contact** : renseigner le **Téléphone** (l'email saisi à l'étape précédente est déjà pré-rempli).

    
![Formulaire compte et accès pour créer un nouvel utilisateur](./images/shot-10.jpg)

    *📷 Suite du formulaire : profil, langue, mot de passe et photo de profil.*

    
1. **Compte & Accès** : choisir le **Profil** de l'utilisateur (ex. Personnel, Administrateur…) et la **Langue** de l'interface.
2. Définir un **Mot de passe** et le confirmer dans le champ **« Confirmer le mot de passe »**.
3. Ajouter éventuellement une **Photo de profil** (facultatif).
4. Cliquer sur **« Créer l'utilisateur »** pour valider, ou sur **« Annuler »** pour abandonner.

    
#### 3b. Cas 2 — Un compte existe déjà : associer l'utilisateur

    
![Fenêtre indiquant qu'un utilisateur existe déjà pour cet email](./images/shot-11.jpg)

    *📷 Un compte existe déjà pour cet email : la plateforme affiche l'identité trouvée (« Utilisateur trouvé »).*

    
1. La fenêtre affiche le nom et l'email du compte déjà existant, avec l'indicateur d'étape passé à **« 2 Association »**.
2. Si le message **« Cet utilisateur est déjà associé à une institution »** apparaît, cela signifie que ce compte appartient déjà à une autre institution ; l'association à une nouvelle institution n'est alors pas proposée depuis cet écran.
3. Cliquer sur **« Annuler »** pour fermer la fenêtre dans ce cas.

    
#### 4. Changer le profil d'un utilisateur

    
![Fenêtre de changement de profil d'un utilisateur](./images/shot-12.jpg)

    *📷 Fenêtre « Changer le profil », ouverte depuis la ligne d'un utilisateur.*

    
1. Dans la liste des utilisateurs, cliquer sur l'icône **⇄ (changer le profil)** sur la ligne de l'utilisateur concerné.
2. La fenêtre **« Changer le profil »** s'ouvre et affiche le nom et l'email du compte sélectionné.
3. Dans le champ **« Nouveau profil »**, choisir le profil souhaité dans la liste déroulante (Super Administrateur, Administrateur, Partenaire, Personnel, Arrondissement de chefs, Agent-collecteur, VUD, Ministère / Préfecture, Bailleur / Donateur, Partenaire / ONG, Administration-Finance).
4. Cliquer sur **« Enregistrer »** pour appliquer le nouveau profil, ou sur **« Annuler »** pour ne rien changer.

    
#### 5. Modifier les permissions d'un utilisateur

    
1. Dans la liste des utilisateurs, cliquer sur l'icône **🛡 (permissions)** sur la ligne de l'utilisateur concerné.
2. La page **« Permissions d'interface »** s'ouvre pour ce compte (voir la section dédiée ci-dessus pour le détail des blocs).
3. Activer ou désactiver les permissions souhaitées, puis cliquer sur **« Sauvegarder »**.

  

  

---

    
### [Module PDC] Accéder aux modules de la plateforme

    
_Après connexion, la page d'accueil de l'institution (ici la commune de Glazoué) présente les **modules** disponibles : PDC, ODD, Projet Phare, et Gestion des paramètres de comptes. C'est le point de départ pour accéder au module de gestion du Plan de Développement Communal._

    
![Écran de sélection des modules de la plateforme](./images/shot-13.jpg)

    *📷 Espace de travail : choix du module à ouvrir (PDC, ODD, Projet Phare, Paramètres).*

    
1. Cliquer sur **« Accéder au module »** sous la carte **« Plan de Développement Communal (PDC) »** pour entrer dans le module PDC.
2. Le menu latéral de gauche s'affiche alors avec toutes les sections du module : Tableau de bord, Tableau de bord décideur, Gestion de PDC, Éléments des Indicateurs, Visualiser les Indicateurs, Rapports, ainsi que la Gestion de PTA et de PIT.

  

  

---

    
### [Module PDC] Tableau de bord PDC

    
_Vue d'ensemble de l'avancement du Plan de Développement Communal : projets actifs, taux d'exécution, budget consommé, partenaires actifs, ainsi que le suivi du PTA (Plan de Travail Annuel) en cours._

    
![Tableau de bord PDC](./images/shot-14.jpg)

    *📷 Tableau de bord PDC : indicateurs clés, informations PTA, projets en cours et activités récentes.*

    
      
- Cartes du haut  : Projets PDC actifs, Taux d'exécution, Budget consommé, Partenaires actifs.
- Portée temporelle  et  Vision  : rappellent la période couverte par le PDC et sa vision stratégique.
- Filtres Année / Trimestre  : permettent d'affiner les chiffres affichés sur une période précise (bouton « Réinitialiser » pour revenir à la vue globale).
- Informations PTA  : montant du PTA, montant exécuté, date de dernière révision, prochaine évaluation, et nombre d'activités en retard.
- Niveau de mise en œuvre  : compare la prévision, la réalisation et le taux à date.
- Projets en cours  et  Activités récentes  : suivi visuel de l'avancement de chaque projet et journal des dernières actions.

    
  

  

---

    
### [Module PDC] Tableau de bord Décideurs

    
_Vue simplifiée destinée aux décideurs, avec des filtres de recherche pour cibler un PDC, une année ou un PTA précis, et des raccourcis vers les documents stratégiques._

    
![Tableau de bord Décideurs](./images/shot-15.jpg)

    *📷 Tableau de bord Décideurs : filtres de recherche, informations PTA et accès rapide.*

    
1. **Filtres de recherche** : choisir un PDC, une année, un PTA et une date de référence, puis cliquer sur **« Rechercher »**.
2. **Informations PTA** : montant, montant exécuté, dernière révision, prochaine évaluation (affiche « N/A » tant qu'aucun PDC/PTA n'est sélectionné).
3. **Activités en retard** : cliquer sur cette carte pour voir le détail (voir section « Activités en retard » ci-dessous).
4. **Accès rapide** : liens directs vers le **Document de Plan TBS** (Tableau de Bord Stratégique) et le module **ODD**.

  

  

---

    
### [Module PDC] Gestion des PDC

    
_Écran de gestion des Plans de Développement Communaux eux-mêmes : création, recherche et export de la liste des PDC de l'institution._

    
![Écran de gestion des PDC](./images/shot-16.jpg)

    *📷 Liste des PDC de l'institution, avec recherche par code ou libellé.*

    
1. Utiliser le champ **« Rechercher par code ou libellé… »** pour retrouver un PDC existant.
2. Cliquer sur **« + Nouveau PDC »** pour créer un nouveau plan de développement communal.
3. Cliquer sur **« Exportateur »** pour exporter la liste affichée.
4. Le tableau affiche pour chaque PDC : ID, Code, Libellé, Description, dates de Début/Fin et le fichier associé.

    
> 💡 **Capture à venir**  
> Le détail du formulaire de création d'un nouveau PDC (« + Nouveau PDC ») sera ajouté dès qu'une capture de cet écran sera disponible.

  

  

---

    
### [Module PDC] Éléments des Indicateurs

    
_Ce hub regroupe les trois outils permettant de définir, planifier et suivre les indicateurs de performance d'un PDC._

    
![Hub Éléments des Indicateurs](./images/shot-17.jpg)

    *📷 Trois modules accessibles : Gestion, Planification et Collecte de données.*

    
#### 1. Gestion des indicateurs

    
![Écran de gestion des indicateurs](./images/shot-18.jpg)

    *📷 Créer, modifier et supprimer les indicateurs de performance.*

    
1. Utiliser les filtres **Recherche, PDC, Activité, Statut, Type proxy, ODD, Cible ODD** pour retrouver un indicateur précis, puis cliquer sur **« Rechercher »**.
2. Cliquer sur **« + Nouvel Indicateur »** pour créer un indicateur.
3. Le tableau affiche : ID, PDC, Activité, Indicateur, Valeur de référence, Valeur cible, Date référence, Date cible, Statut.

    
#### 2. Planification des indicateurs

    
![Écran de planification des indicateurs](./images/shot-19.jpg)

    *📷 Définir les valeurs cibles annuelles pour chaque indicateur du PDC.*

    
1. Filtrer par **PDC, Activité, Indicateur, Année**, puis cliquer sur **« Rechercher »**.
2. Cliquer sur **« + Nouvelle Planification »** pour définir une nouvelle valeur cible annuelle.
3. Le tableau affiche : ID, Indicateur, Valeur cible, Année, Statut.

    
#### 3. Collecte de données

    
![Hub Collecte de données des indicateurs](./images/shot-20.jpg)

    *📷 Trois actions possibles : nouvelle collecte, données rejetées, validation.*

    
1. **Nouvelle collection** : saisir de nouvelles données d'indicateurs, avec statut soumettre/valider.
2. **Données rejetées** : gérer les données rejetées, avec possibilité de les soumettre à nouveau.
3. **Validation** : valider ou rejeter les données soumises par les collecteurs.

    
![Écran Collecte de Données](./images/shot-21.jpg)

    *📷 Écran « Collecte de Données » : filtrer par PDC, activité, indicateur, année, ou lancer une nouvelle collecte via « + Nouvelle Collection ».*

    
![Écran Données validées](./images/shot-22.jpg)

    *📷 « Données validées » : liste des collectes déjà validées, avec les mêmes filtres et un export possible.*

    
![Écran Données rejetées à corriger](./images/shot-23.jpg)

    *📷 « Données rejetées à corriger » : les collectes renvoyées pour correction avant nouvelle soumission.*

    
#### 4. Visualiser les indicateurs

    
![Écran de visualisation des indicateurs](./images/shot-24.jpg)

    *📷 Analyse graphique des indicateurs d'un PDC.*

    
1. Choisir un **PDC** dans la liste déroulante.
2. Filtrer éventuellement par **Année**.
3. La liste des indicateurs disponibles pour ce PDC s'affiche alors ; cliquer sur un indicateur pour voir son graphique d'évolution.

  

  

---

    
### [Module PDC] Objectifs de Développement Durable (ODD)

    
_Cette page présente les 17 Objectifs de Développement Durable des Nations Unies, utilisés pour classer les indicateurs et les projets de la commune._

    
![Liste des 17 Objectifs de Développement Durable](./images/shot-25.jpg)

    *📷 Les 17 ODD affichés sous forme de grille cliquable.*

    
1. Cliquer sur un **objectif (ODD)** pour voir le détail de ses cibles et de ses indicateurs proxy associés.
2. Le compteur en haut à droite (**« 17 objectifs »**) confirme que l'ensemble des ODD officiels est chargé.

  

  

---

    
### [Module PDC] Activités en retard

    
_Liste des activités du PTA qui n'ont eu aucune tâche exécutée sur la période d'évaluation en cours — accessible directement depuis le Tableau de bord Décideurs._

    
![Écran des activités en retard](./images/shot-26.jpg)

    *📷 Écran « Activités en Retard », avec filtres PDC / Année / PTA / recherche par nom ou code.*

    
1. Depuis le **Tableau de bord Décideurs**, cliquer sur la carte **« Activités en retard »**.
2. Utiliser les filtres **PDC, Année, PTA** ou la recherche par **nom ou code d'activité** pour cibler une activité précise.
3. Le tableau affiche : Code, Activité, PTA, Piste de la firme, Structures associées, Tâches totales, Tâches non exécutées.

  

  

---

    
### [Module PDC] Structure & Finance

    
_Ce groupe du menu latéral regroupe les référentiels utilisés dans tout le PDC : l'organigramme de la mairie, les partenaires impliqués et les sources de financement des projets._

    
#### 1. Structures municipales

    
![Écran Structures Municipales](./images/shot-27.jpg)

    *📷 Gérer les structures de la mairie (organigramme).*

    
1. Filtrer par **Statut** ou **Parent de structure** pour retrouver une structure dans la hiérarchie.
2. Cliquer sur **« + Nouvelle Structure »** pour ajouter une structure municipale.
3. Le tableau affiche : ID, Sigle, Structure, Parent de structure, Statut.

    
#### 2. Partenaires

    
![Écran Gestion des Partenaires](./images/shot-28.jpg)

    *📷 Gérer les partenaires du projet, avec indicateurs (total, actifs, types distincts).*

    
1. Filtrer par **Type** ou **Statut**, ou rechercher par **Nom ou sigle**.
2. Cliquer sur **« + Nouveau Partenaire »** pour ajouter un partenaire.
3. Le tableau affiche : ID, Date, Logo, Sigle, Partenaire, Type, Statut.

    
#### 3. Sources de financement

    
![Écran Sources de Financement](./images/shot-29.jpg)

    *📷 Gérer les sources de financement des projets.*

    
1. Filtrer par **Partenaire** ou **Statut**, ou rechercher une source.
2. Cliquer sur **« + Nouvelle Source »** pour ajouter une source de financement.
3. Le tableau affiche : ID, Date, Partenaire, Source, Statut.

  

  

---

    
### [Module PDC] Gestion des PTA, des PIT et des évaluations

    
_Le PTA (Plan de Travail Annuel) décline le PDC en actions annuelles ; le PIT (Plan Individuel de Travail) en assure le suivi individuel ; les évaluations mesurent enfin le niveau de réalisation de l'un et de l'autre._

    
#### 1. Gestion des PTA — créer un nouveau PTA

    
![Écran Gestion des PTA](./images/shot-30.jpg)

    *📷 Liste des Plans de Travail Annuels de l'institution.*

    
1. Filtrer par **PDC** ou rechercher un PTA, puis cliquer sur **« + Nouveau PTA »** pour en créer un.

    
![Formulaire Nouveau PTA - Planification](./images/shot-31.jpg)

    *📷 Étape « Planification » : PDC associé et année du PTA, puis période d'exécution.*

    
1. **Planification** : choisir le **PDC associé** et l'**Année du PTA**.
2. **Période d'exécution** : renseigner la **Date de début** et la **Date de fin**.

    
![Formulaire Nouveau PTA - Configuration et documents](./images/shot-32.jpg)

    *📷 Suite du formulaire : statut et documents joints.*

    
1. **Configuration** : définir le **Statut** du PTA (ex. « Activé »).
2. **Documents** : ajouter une **Observation** ou un commentaire, et joindre un fichier si besoin.
3. Cliquer sur **« Enregistrer »** pour valider la création du PTA.

    
#### 2. Révisions PTA

    
![Écran Révisions PTA](./images/shot-33.jpg)

    *📷 Gestion et suivi des révisions de Plans de Travail Annuels.*

    
1. Sélectionner un **PDC** et une **année** pour afficher les révisions disponibles.
2. Cliquer sur **« + Nouveau PTA »** si une révision nécessite la création d'un nouveau plan.

    
#### 3. Suivi des PIT

    
![Écran Suivi des plans individuels de travail](./images/shot-34.jpg)

    *📷 Gestion et consultation des évaluations PIT (Plan Individuel de Travail).*

    
1. Rechercher un PIT, ou filtrer par **PDC** et **Année**.
2. Le tableau affiche : ID, PTA, Année, Date début, Date de fin, Statut, Actions.

    
#### 4. Nouvelle évaluation

    
![Écran Liste des Évaluations](./images/shot-35.jpg)

    *📷 Liste des évaluations de Plans de Travail : choisir un PDC puis une année pour afficher les évaluations existantes.*

    
1. Sélectionner un **PDC**, puis une **année**, pour voir les évaluations disponibles.
2. Cliquer sur **« + Nouvelle Évaluation »** pour en créer une.

    
![Formulaire Nouvelle évaluation](./images/shot-36.jpg)

    *📷 Formulaire « Nouvelle évaluation » : PDC, PTA associé, période et statut.*

    
1. **Planification** : choisir le **PDC** puis le **PTA associé**.
2. **Période** : renseigner la **Date de début** et la **Date de fin** de l'évaluation.
3. **Configuration** : définir le **Statut**, puis cliquer sur **« Enregistrer »**.

    
#### 5. Rapports & Évaluations

    
![Hub Rapports PDC](./images/shot-37.jpg)

    *📷 Le hub « Rapports » regroupe 6 modules d'analyse du PDC.*

    
      
- Évaluation de PIT  : analyse du niveau de réalisation du Plan de Travail Individuel.
- Évaluation de PTA  : analyse du niveau de réalisation du Plan de Travail Annuel.
- Évaluation de PDC  : analyse du niveau de mise en œuvre et des résultats du Plan de Développement Communal.
- Projection financière  : estimation prévisionnelle des ressources financières par source de financement.
- Visualisation de PTA  : le Plan de Travail Annuel sous forme de tableau détaillé.
- Synthèse Évaluation  : vue d'ensemble consolidée des indicateurs d'évaluation (budget, TEP, activités en retard, dates clés).

    

    
![Écran Évaluation de PTA](./images/shot-38.jpg)

    *📷 Évaluation de PTA : tâches totales, terminées, en cours, en retard, avec filtres de recherche détaillés (PDC, année, PTA, trimestre, structure…).*

    
![Écran Évaluation de PIT](./images/shot-39.jpg)

    *📷 Évaluation de PIT : même principe que l'évaluation de PTA, au niveau individuel.*

    
![Écran Visualisation de PTA](./images/shot-40.jpg)

    *📷 Visualisation de PTA : liste détaillée des tâches du PTA avec taux d'exécution et suivi financier (TEF mandaté / engagé / décaissé).*

    
![Écran Synthèse Évaluation](./images/shot-41.jpg)

    *📷 Synthèse Évaluation : vue consolidée par niveau hiérarchique (Programme, Projet, Action, Activité) — TEP physique & TEF financier.*

    
1. Depuis chaque écran de rapport, définir les **filtres de recherche** souhaités puis cliquer sur **« Rechercher »**.
2. Utiliser le bouton **« Exportateur »** pour exporter les résultats lorsque disponible.

  

  

---

### [Module ODD] Accéder au module ODD

_Le module **Objectifs de Développement Durable (ODD)** de SIDSE IBDC offre aux collectivités un cadre méthodologique et opérationnel complet pour intégrer, suivre et évaluer l'alignement des politiques locales avec les 17 ODD des Nations Unies._

![Espace d'accueil et sélection du module ODD](./images/shot-62.jpg)

*📷 Espace de travail communal : carte du module « Objectif de Développement Durable (ODD) » avec badge « Disponible » et bouton d'accès direct.*

1. Depuis l'espace d'accueil de la plateforme (espace de travail), localiser la carte violette **« Objectif de Développement Durable (ODD) »**.
2. Vérifier le badge vert **« Disponible »**.
3. Cliquer sur le bouton **« Accéder au module → »** au bas de la carte.

Dès l'ouverture du module, l'interface s'ouvre par défaut sur l'écran **Liste des ODD** avec le menu de navigation complet à gauche :

![Interface principale du module ODD](./images/shot-82.png)

*📷 Interface principale du module ODD : menu de navigation latéral à gauche et écran d'accueil « Liste des ODD » au centre.*

> 💡 **Basculer d'un module à un autre**  
> Vous pouvez à tout moment changer de module sans repasser par la page d'accueil en cliquant sur le sélecteur situé en haut à droite de l'en-tête (affichant « ODD », « PDC », « PROJET », « PARAMÈTRE »…).

---

### [Module ODD] Liste des ODD

_L'écran **Liste des ODD** centralise l'ensemble des Objectifs de Développement Durable intégrés à la plateforme SIDSE IBDC pour la collectivité (ici illustrée avec les 9 ODD de la commune de Glazoué). Il permet de visualiser rapidement les priorités territoriales et d'accéder aux cibles et indicateurs associés._

1. **Filtrer via le menu déroulant :** cliquez sur **« FILTRER : Tous les ODD »** pour isoler un objectif particulier.

![Sélection déroulante pour filtrer les ODD](./images/shot-80.png)

*📷 Menu déroulant « FILTRER : Tous les ODD » — la flèche rouge indique l'outil de sélection pour cibler directement un ODD dans la liste.*

2. **Rechercher par mot-clé :** saisissez un terme dans la barre **« RECHERCHE »** pour filtrer instantanément les cartes.

![Barre de recherche textuelle des ODD](./images/shot-79.png)

*📷 Champ « RECHERCHE : Rechercher un ODD... » — la flèche rouge met en évidence la barre de recherche textuelle.*

3. **Consulter les cibles et indicateurs :** cliquez sur le lien **« Voir les cibles & indicateurs → »** au bas d'une carte d'ODD pour ouvrir sa fiche détaillée.

![Lien Voir les cibles et indicateurs](./images/shot-81.png)

*📷 Lien « Voir les cibles & indicateurs → » — la flèche rouge désigne l'accès direct aux cibles et indicateurs de l'ODD sélectionné.*

> 💡 **Que faire ensuite ?**  
> Pour découvrir comment analyser et ouvrir le détail des cibles rattachées à un ODD, consultez la section **Détail d'un ODD & cibles**.

---

### [Module ODD] Détail d'un ODD & cibles

_La fiche détaillée de l'ODD sélectionné récapitule l'ensemble des cibles souscrites pour cet objectif._

![Fiche descriptive Détail ODD](./images/shot-64.jpg)

*📷 Écran « Détail ODD » : fiche descriptive de l'objectif sélectionné, tableau des cibles souscrites et bouton d'action « ouvrir ».*

1. **Fil d'Ariane & Bouton Retour :** utilisez `Liste des ODD • Détail ODD` ou le bouton **« ← Retour »** pour revenir à la grille principale.
2. **Information ODD :** consultez le libellé officiel et le logo de l'ODD.
3. **Toutes les cibles de l'ODD :** consultez le tableau des cibles prioritaires souscrites avec possibilité de filtrer par cible.
4. Cliquez sur le bouton **« 👁 ouvrir »** dans la colonne *Action* pour examiner les indicateurs de suivi de la cible.

---

### [Module ODD] Détail d'une cible ODD

_L'écran Détail Cible présente les spécifications de la cible sélectionnée ainsi que le tableau des indicateurs opérationnels associés._

![Écran Détail Cible](./images/shot-65.jpg)

*📷 Écran « Détail Cible » : énoncé officiel de la cible et tableau des indicateurs de suivi associés.*

1. **Fil d'Ariane :** navigation fluide `Liste des ODD • Détail ODD • Détail Cible` avec bouton **« ← Retour »**.
2. **Information Cible :** lecture du libellé complet décrivant la finalité visée.
3. **Tous les indicateurs de la cible :** tableau listant le code et l'intitulé de chaque indicateur (ex. *5.5.3*, *5.5.6*) ainsi que sa **périodicité de collecte** (*trimestriel*).

---

### [Module ODD] Liste des indicateurs ODD

_Accessible via l'onglet **« Liste des indicateurs »** du menu latéral, cette page consolide l'ensemble des 16 indicateurs ODD souscrits par la collectivité._

![Catalogue des indicateurs ODD souscrits](./images/shot-66.jpg)

*📷 Écran « Liste des indicateurs » : catalogue des 16 indicateurs souscrits avec options d'analyse visuelle.*

1. **Compteur et filtres :** visualisez le badge *16 indicateurs* et filtrez via le menu déroulant **« Tous les indicateurs »**.
2. **Tableau des indicateurs :** identification claire de l'ODD parent, de la cible, de l'intitulé de l'indicateur et de la périodicité de collecte (trimestrielle).
3. **Visualisation :** accès direct aux outils d'analyse via les boutons **« Histogramme »** et **« Tableau »** dans la colonne *Visualisation*.

---

### [Module ODD] Visualisation graphique & tabulaire

_Deux modes d'exploration complémentaires sont proposés dans la colonne Visualisation pour analyser les résultats communaux._

1. **Bouton « 📊 Histogramme » :** génère un graphique chronologique en barres retraçant l'évolution des données collectées par trimestre et par année.
2. **Bouton « 📋 Tableau » :** affiche la table des séries statistiques chiffrées détaillées avec les périodes et les valeurs enregistrées.

> 💡 **Actualisation en temps réel**  
> Tout enregistrement d'une nouvelle collecte met à jour instantanément les graphiques d'histogramme et les tableaux sans rechargement nécessaire.

---

### [Module ODD] Collecte de données ODD

_Accessible via **« Faire une collecte »** dans le menu latéral, cet écran centralise l'historique complet des données terrain relevées pour renseigner les indicateurs._

![Tableau récapitulatif des collectes ODD](./images/shot-67.jpg)

*📷 Écran « Liste des collectes » : historique des 15 collectes enregistrées avec filtres multicritères et statut validé.*

1. **Bouton d'ajout :** bouton bleu **« + Nouvelle collecte »** en haut à droite pour consigner une nouvelle mesure.
2. **Filtres multicritères :** filtrage combinable par **ODD**, par **CIBLE** et par **INDICATEUR**.
3. **Historique des collectes :** tableau affichant la date, l'ODD, la cible, l'indicateur, la région/commune (*GLAZOUE*), l'année (*2022*), la période (*Octobre à Décembre*) et la valeur mesurée.
4. **Statut :** badge vert **« Valider »** confirmant la validation officielle de la donnée.

---

### [Module ODD] Créer une nouvelle collecte

_L'enregistrement d'une nouvelle mesure s'effectue via un formulaire modal rapide et guidé._

![Formulaire modal Nouvelle collecte](./images/shot-68.jpg)

*📷 Boîte de dialogue « Nouvelle collecte » : formulaire de saisie guidée avec sélection de l'indicateur, période et année.*

1. Depuis la liste des collectes, cliquer sur **« + Nouvelle collecte »**.
2. **Liste des indicateurs :** sélectionner l'indicateur concerné dans le menu déroulant.
3. **Période (« Period ») :** choisir la tranche temporelle (ex. *Octobre à Décembre*).
4. **Année :** saisir l'année de référence (ex. *2025* ou *2026*).
5. **Commune :** vérifier l'attribution à la collectivité (*GLAZOUE*).
6. Cliquer sur le bouton bleu **« Enregistrer »** pour consigner la donnée (ou **« Fermer »** pour annuler).

---

### [Module ODD] Paramètres ODD : Espace d'administration

_Accessible via l'entrée **« Paramètres ODD »** du menu latéral, ce hub d'administration permet de configurer et d'adapter le cadre ODD aux spécificités locales._

![Hub des paramètres ODD](./images/shot-69.jpg)

*📷 Espace « Paramètres ODD » : cartes d'accès à la reformulation des cibles et à la gestion des indicateurs.*

1. **Paramètres Cibles (REFORMULATION) :** adapter les libellés des cibles ODD internationales au contexte et aux compétences de la collectivité. Cliquer sur **« → Gérer »**.
2. **Paramètres Indicateurs (CRÉATION ET REFORMULATION) :** reformuler les indicateurs existants ou créer de nouveaux indicateurs personnalisés (*Indicateurs ODD Extra*). Cliquer sur **« → Gérer »**.

---

### [Module ODD] Paramètres des cibles (Reformulation)

_L'interface Paramètres cible permet d'adapter les énoncés des cibles souscrites sans rompre leur rattachement avec les cibles officielles de l'ONU._

![Écran Paramètres Cibles avec action Reformuler](./images/shot-70.jpg)

*📷 Écran « Paramètres ODD • Paramètres cible » : liste des cibles souscrites et déclenchement de l'action « ✎ Reformuler ».*

1. Parcourir le tableau des cibles souscrites (11 cibles) avec le filtre **« Toutes les cibles de... »**.
2. Dans la colonne *Action*, cliquer sur le menu à trois points verticaux **⋮**.
3. Sélectionner l'action **« ✎ Reformuler »** dans le menu contextuel.
4. Renseigner le libellé contextualisé et valider : la nouvelle formulation s'applique à l'ensemble des écrans et rapports de la plateforme.

---

### [Module ODD] Paramètres des indicateurs & Indicateurs ODD Extra

_Cet écran combine la personnalisation des indicateurs du socle ODD et la création libre de métriques communales spécifiques._

![Écran Paramètres Indicateurs et ODD Extra](./images/shot-71.jpg)

*📷 Écran « Paramètres ODD • Paramètres indicateurs » : reformulation des indicateurs standards et section « Mes indicateurs ODD Extra » avec bouton « + Ajouter ».*

1. **Les indicateurs des ODD :** tableau des 16 indicateurs standards souscrits avec action **« ✎ Reformuler »** via le menu contextuel **⋮**.
2. **Mes indicateurs ODD Extra :** section inférieure dédiée aux métriques locales créées sur mesure par la commune.
3. Cliquer sur le bouton bleu **« + Ajouter »** pour déclarer un nouvel indicateur Extra (cible de rattachement, intitulé communal, unité, périodicité).
4. Après enregistrement, l'indicateur Extra est immédiatement disponible dans le formulaire de collecte et les tableaux de bord.

---

### [Module Projets Phares] Accéder au module Projets Phares

_Le module **Projet Phare** centralise la planification, le suivi opérationnel et l'évaluation continue des investissements et chantiers stratégiques portés par la municipalité._

![Espace de travail communal et sélection de la carte Projet Phare](./images/shot-62.jpg)

*📷 Espace d'accueil communal : carte d'accès au module « Projet Phare » avec badge « Disponible ».*

1. Depuis le tableau de bord d'accueil de la collectivité, repérer la carte marron/orangée intitulée **« Projet Phare »**.
2. Vérifier la présence du badge vert **« ✔ Disponible »** attestant de l'activation du module pour votre commune.
3. Cliquer sur le bouton **« Accéder au module → »** au bas de la carte.

Dès l'ouverture du module, l'interface s'ouvre par défaut sur le **Dashboard (Visualisation d'indicateurs)** avec le menu de navigation complet à gauche :

![Interface principale du module Projet Phare](./images/shot-83.png)

*📷 Interface principale du module Projet Phare : menu de navigation latéral à gauche et écran d'accueil « Dashboard • Visualisation d'indicateurs » au centre.*

> 💡 **Basculer d'un module à un autre**  
> Vous pouvez à tout moment changer de module sans repasser par la page d'accueil en cliquant sur le sélecteur situé en haut à droite de l'en-tête (affichant « PROJET », « ODD », « PDC », « PARAMÈTRE »…).

---

### [Module Projets Phares] Dashboard & Indicateurs

_Le tableau de bord du module Projets Phares offre une vue consolidée et interactive des performances atteintes par chaque investissement communal selon les indicateurs et périodes retenus. Il permet de suivre l'évolution des métriques, de filtrer par projet stratégique et de rechercher rapidement un indicateur clé._

1. **Consulter le volume d'indicateurs :** repérez le badge compteur situé en haut à droite de la carte *« Visualisation des Indicateurs »* (ex. *0 indicateurs*).

![Badge compteur d'indicateurs](./images/shot-86.png)

*📷 Carte « Visualisation des Indicateurs » — la flèche rouge désigne le badge compteur qui affiche le nombre total d'indicateurs configurés pour la collectivité.*

2. **Filtrer par projet :** utilisez le menu déroulant **« FILTRER PAR PROJET »** pour isoler les indicateurs d'un chantier stratégique particulier.

![Filtrer par projet](./images/shot-84.png)

*📷 Menu déroulant « FILTRER PAR PROJET » — la flèche rouge indique l'outil de sélection permettant d'isoler les indicateurs rattachés à un projet précis.*

3. **Rechercher un indicateur par mot-clé :** tapez un intitulé dans le champ **« RECHERCHE »** pour filtrer instantanément la liste.

![Rechercher un indicateur](./images/shot-85.png)

*📷 Champ « RECHERCHE : Rechercher un indicateur... » — la flèche rouge met en valeur la barre de recherche textuelle instantanée.*

> 💡 **Que faire ensuite ?**  
> Pour consulter le répertoire complet des chantiers ou déclarer un nouveau projet phare communal, accédez à la section **Gestion des Projets Phares**.

---

### [Module Projets Phares] Gestion des Projets Phares

_Accessible depuis le menu latéral via l'onglet **« Projets »**, cette interface constitue le registre officiel de l'ensemble des projets prioritaires pilotés par la commune._

![Tableau de gestion des projets phares](./images/shot-73.jpg)

*📷 Écran « Gestion des projets » : répertoire centralisé des projets phares communaux et bouton « + Nouveau projet ».*

1. **Bouton d'action principal :** bouton bleu foncé **« + Nouveau projet »** en haut à droite pour déclarer une nouvelle initiative.
2. **Compteur d'activité :** badge indiquant le nombre de projets et d'indicateurs associés.
3. **Colonnes du tableau :** ID technique, LIBELLÉ du projet, DESCRIPTION du périmètre, nombre d'INDICATEURS rattachés et lien vers les DÉTAILS.

---

### [Module Projets Phares] Créer un nouveau projet phare

_L'enregistrement d'un projet prioritaire s'effectue au moyen d'un formulaire modal ergonomique permettant de renseigner les paramètres essentiels de l'opération._

![Formulaire modal Nouveau projet](./images/shot-74.jpg)

*📷 Boîte de dialogue « Nouveau projet » : saisie du libellé, description, calendrier et statut initial.*

1. Depuis l'écran Gestion des projets, cliquer sur **« + Nouveau projet »**.
2. **Libellé du projet :** saisir un titre explicite et représentatif du projet.
3. **Description :** décrire succinctement les finalités, la zone géographique et les livrables attendus.
4. **Date de début :** indiquer la date officielle de démarrage au format `jj/mm/aaaa` ou via le calendrier contextuel 📅.
5. **Statut :** sélectionner l'état d'avancement initial (ex. *En attente*, *En cours*, *Planifié*).
6. Cliquer sur **« Créer »** pour enregistrer et publier le projet (ou sur **« Annuler »** pour fermer sans sauvegarder).

---

### [Module Projets Phares] Secteurs d'activité

_Accessible via l'onglet **« Secteurs »** du menu latéral, cette page permet de configurer la typologie sectorielle communale afin de classer les projets par domaine d'intervention._

![Écran Secteurs d'activité](./images/shot-75.jpg)

*📷 Écran « Secteurs d'activité » : classification sectorielle des projets phares avec outils de recherche et bouton d'ajout.*

1. **Bouton d'ajout :** cliquer sur **« + Nouveau secteur »** pour créer une nouvelle catégorie thématique (ex. *Eau & Assainissement*, *Éducation*, *Santé*, *Infrastructures*).
2. **Recherche textuelle :** champ **« RECHERCHE : Rechercher un secteur... »** pour trouver un secteur existant.
3. **Filtre par statut :** menu déroulant **« STATUT : Tous »** (Actif, Inactif, Archivé).
4. **Tableau récapitulatif :** affichage des colonnes ID, SECTEUR et STATUT.

---

### [Module Projets Phares] Collecte de données Projets

_Accessible via l'onglet **« Collecte de données »** du menu latéral, cette interface sert de point de saisie terrain pour renseigner les valeurs réelles des indicateurs affectés aux projets phares._

![Écran Collecte de données Projets](./images/shot-76.jpg)

*📷 Écran « Collecte de données » : interface de sélection du projet et recherche de l'indicateur à renseigner.*

1. **Filtrer par projet :** ouvrir le menu déroulant **« FILTRER PAR PROJET »** et sélectionner le projet concerné.
2. **Rechercher l'indicateur :** taper le mot-clé dans la barre **« RECHERCHE : Rechercher un indicateur... »**.
3. **Sélectionner l'indicateur :** cliquer sur l'indicateur désiré dans la liste déployée.
4. **Saisir la mesure :** renseigner la valeur constatée sur le terrain, préciser la période de référence et valider pour soumission au contrôle qualité.

---

### [Module Projets Phares] Contrôle qualité des données

_Le volet **Contrôle qualité** constitue le filtre de gouvernance et de fiabilisation garantissant l'exactitude des informations avant leur diffusion officielle._

![Tableau de contrôle qualité](./images/shot-77.jpg)

*📷 Écran « Contrôle qualité » : tableau des vérifications en cours, statuts d'approbation et ajout d'observations d'audit.*

1. **Filtres combinés :** filtrage par **UTILISATEUR** (ex. *Agent terrain*, *Superviseur*, *Administrateur*), par **PROJET** (ex. *Projet Alpha*, *Projet Beta*, *Projet Gamma*) et par **INDICATEUR**. Bouton **« ⟳ Réinitialiser »** pour réinitialiser la vue.
2. **Badge d'audit :** indique le volume d'enregistrements en cours d'examen (ex. *4 entrées*).
3. **Tableau des vérifications :** colonnes ID (ex. *C-001*, *C-002*), INDICATEUR, VALEUR collectée, PÉRIODE (ex. *T2 2024*), PROJET, SAISI PAR, STATUT (*• En attente*, *• Validé*) et champ interactif OBSERVATION pour insérer un commentaire d'audit.

---

### [Module Projets Phares] Validation et rejet des données collectées

_Dans la colonne **ACTIONS** du tableau de contrôle qualité, les superviseurs et administrateurs disposent des boutons de décision formelle pour approuver ou rejeter les données soumises._

![Colonne Actions du contrôle qualité](./images/shot-78.jpg)

*📷 Focus sur la colonne « ACTIONS » : boutons décisionnels « ✔ Valider » et « ✖ Rejeter » pour certifier ou retourner une mesure.*

1. **Audit de conformité :** examiner la cohérence de la mesure par rapport aux justificatifs et à l'historique de l'indicateur.
2. **Saisie d'une observation :** formuler un avis ou une réserve dans le champ *« Ajouter une observation »*.
3. **Bouton « ✔ Valider » :** approuver la mesure. Le statut passe à **« Validé »** (badge vert) et la valeur est répercutée sur les graphiques du Dashboard.
4. **Bouton « ✖ Rejeter » :** rejeter la donnée en cas d'erreur ou d'incohérence. La soumission est renvoyée avec observation pour correction par l'agent de terrain.

> 💡 **Traçabilité des décisions**  
> L'ensemble des validations et rejets est consigné dans les journaux d'audit de SIDSE IBDC avec horodatage et identifiant du validateur.

---

### [Prochainement] Sections à venir

_Ce guide sera complété au fur et à mesure avec les captures d'écran des autres modules de la plateforme. Voici les sections prévues :_

- Gestion des Recommandations : saisie, désignation des responsables et suivi des plans d'action
- Calendriers de planification : calendrier budgétaire et calendrier officiel des évaluations
- Suppression d'un compte utilisateur

---
*Documentation SIDSE IBDC (Piè Baromètre)*