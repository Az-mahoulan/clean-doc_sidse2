export type NavItem = { href: string; title: string; sub: boolean };
export type NavGroup = { label: string; items: NavItem[] };

export const navGroups: NavGroup[] = [
  {
    "label": "Prise en main",
    "items": [
      {
        "href": "intro",
        "title": "Présentation",
        "sub": false
      },
      {
        "href": "profils",
        "title": "Profils utilisateurs",
        "sub": false
      }
    ]
  },
  {
    "label": "Administration",
    "items": [
      {
        "href": "permissions",
        "title": "Permissions d'interface",
        "sub": false
      },
      {
        "href": "permissions-par-profil",
        "title": "Permissions par profil",
        "sub": true
      },
      {
        "href": "gestion-utilisateurs",
        "title": "Gestion des utilisateurs",
        "sub": false
      },
      {
        "href": "voir-liste",
        "title": "Voir la liste des utilisateurs",
        "sub": true
      },
      {
        "href": "rechercher",
        "title": "Rechercher / filtrer",
        "sub": true
      },
      {
        "href": "creer",
        "title": "Créer un utilisateur",
        "sub": true
      },
      {
        "href": "changer-profil",
        "title": "Changer le profil",
        "sub": true
      },
      {
        "href": "modifier-permissions",
        "title": "Modifier les permissions",
        "sub": true
      }
    ]
  },
  {
    "label": "Module PDC",
    "items": [
      {
        "href": "pdc-acces",
        "title": "Accéder aux modules",
        "sub": false
      },
      {
        "href": "pdc-tableau-bord",
        "title": "Tableau de bord PDC",
        "sub": false
      },
      {
        "href": "pdc-tableau-decideur",
        "title": "Tableau de bord Décideurs",
        "sub": false
      },
      {
        "href": "pdc-gestion",
        "title": "Gestion des PDC",
        "sub": false
      },
      {
        "href": "pdc-indicateurs",
        "title": "Éléments des Indicateurs",
        "sub": false
      },
      {
        "href": "pdc-indicateurs-gestion",
        "title": "Gestion des indicateurs",
        "sub": true
      },
      {
        "href": "pdc-indicateurs-planification",
        "title": "Planification",
        "sub": true
      },
      {
        "href": "pdc-indicateurs-collecte",
        "title": "Collecte de données",
        "sub": true
      },
      {
        "href": "pdc-indicateurs-visualiser",
        "title": "Visualiser les indicateurs",
        "sub": true
      },
      {
        "href": "pdc-odd",
        "title": "Objectifs de Développement Durable",
        "sub": false
      },
      {
        "href": "pdc-retard",
        "title": "Activités en retard",
        "sub": false
      },
      {
        "href": "pdc-structure-finance",
        "title": "Structure & Finance",
        "sub": false
      },
      {
        "href": "sf-structures",
        "title": "Structures municipales",
        "sub": true
      },
      {
        "href": "sf-partenaires",
        "title": "Partenaires",
        "sub": true
      },
      {
        "href": "sf-sources",
        "title": "Sources de financement",
        "sub": true
      },
      {
        "href": "pdc-pta-pit",
        "title": "PTA, PIT & Évaluations",
        "sub": false
      },
      {
        "href": "pta-gestion",
        "title": "Gestion des PTA",
        "sub": true
      },
      {
        "href": "pta-revision",
        "title": "Révisions PTA",
        "sub": true
      },
      {
        "href": "pit-suivi",
        "title": "Suivi des PIT",
        "sub": true
      },
      {
        "href": "eval-nouvelle",
        "title": "Nouvelle évaluation",
        "sub": true
      },
      {
        "href": "pdc-rapports",
        "title": "Rapports & Évaluations",
        "sub": true
      }
    ]
  },
  {
    "label": "La suite",
    "items": [
      {
        "href": "a-venir",
        "title": "Sections à venir",
        "sub": false
      }
    ]
  }
];

export const guideHtml = `<div class="doc-header" id="intro">
    <span class="eyebrow">Guide d'utilisation</span>
    <h1 class="doctitle">Bienvenue dans la documentation de SIDSE IBDC</h1>
    <p class="doc-lede">
      <b>SIDSE IBDC</b> est la plateforme de gestion intelligente des Plans de Développement Communal pour un suivi efficace et transparent.
    </p>
    <p class="lede" style="margin-top: 0.85rem;">
      Le présent guide explique, étape par étape, comment utiliser la plateforme SIDSE IBDC.
    </p>
  </div>

  <section class="block" style="border-bottom: 0; padding-top: 1.75rem;">
    <div class="section-kicker">Accès rapide</div>
    <h2>Raccourcis essentiels</h2>
    <p class="lede">
      Accédez directement aux actions clés et aux fonctionnalités les plus recherchées de la plateforme :
    </p>

    <div class="quick-links-grid">
      <a href="#creer" class="quick-link-card">
        <div class="ql-icon ql-icon-user"></div>
        <div class="ql-body">
          <div class="ql-tag">Administration</div>
          <div class="ql-title">Créer un utilisateur</div>
          <div class="ql-desc">Vérification de l'email, saisie de l'identité, mot de passe et attribution du profil.</div>
        </div>
        <div class="ql-arrow">›</div>
      </a>

      <a href="#profils" class="quick-link-card">
        <div class="ql-icon ql-icon-shield"></div>
        <div class="ql-body">
          <div class="ql-tag">Comptes &amp; Accès</div>
          <div class="ql-title">Gérer et savoir ce que peut voir et faire un utilisateur</div>
          <div class="ql-desc">Découvrir les 11 profils disponibles, les permissions d'interface et le socle commun.</div>
        </div>
        <div class="ql-arrow">›</div>
      </a>

      <a href="#eval-nouvelle" class="quick-link-card">
        <div class="ql-icon ql-icon-eval"></div>
        <div class="ql-body">
          <div class="ql-tag">Module PDC</div>
          <div class="ql-title">Faire une évaluation de PTA</div>
          <div class="ql-desc">Enregistrer une évaluation trimestrielle ou annuelle d'un Plan de Travail Annuel.</div>
        </div>
        <div class="ql-arrow">›</div>
      </a>

      <a href="#pdc-rapports" class="quick-link-card">
        <div class="ql-icon ql-icon-chart"></div>
        <div class="ql-body">
          <div class="ql-tag">Module PDC</div>
          <div class="ql-title">Voir une synthèse Évaluation</div>
          <div class="ql-desc">Consulter les rapports consolidés, bilans financiers et synthèses d'exécution.</div>
        </div>
        <div class="ql-arrow">›</div>
      </a>
    </div>

    <div class="callout" style="margin-top: 2rem;">
      <b>Comment naviguer dans ce guide</b>
      Utilisez le sommaire à gauche pour parcourir les modules ou cliquez sur le bouton <b>Suivant</b> au bas de chaque page pour suivre le guide pas à pas.
    </div>
  </section>

  <section class="block" id="profils">
    <div class="section-kicker">Comptes &amp; accès</div>
    <h2>Les profils utilisateurs</h2>
    <p class="lede">
      Chaque compte créé sur la plateforme se voit attribuer un profil parmi la liste ci-dessous. Le profil détermine les permissions accordées par défaut (voir la section « Permissions d'interface »), qui peuvent ensuite être ajustées individuellement pour chaque utilisateur.
    </p>

    <div class="shot">
      <img src="/shot-01.jpg" alt="Liste des profils disponibles sur SIDSE IBDC">
    </div>
    <p class="shot-caption">Liste des profils proposés lors de la création ou de la modification d'un compte utilisateur.</p>

    <div class="role-grid">
      <div class="role-chip"><span class="dot" style="background:#6c4fd6"></span><div><div class="role-name">Super Administrateur</div><div class="role-desc">Accès complet, y compris la gestion des utilisateurs.</div></div></div>
      <div class="role-chip"><span class="dot" style="background:#6c4fd6"></span><div><div class="role-name">Administrateur</div><div class="role-desc">Accès complet aux modules métier, sans la gestion des utilisateurs.</div></div></div>
      <div class="role-chip"><span class="dot" style="background:#1f6fb2"></span><div><div class="role-name">Administration-Finance</div><div class="role-desc">Socle commun + Suivi des PIT + Suivi financier.</div></div></div>
      <div class="role-chip"><span class="dot" style="background:#1f6fb2"></span><div><div class="role-name">Personnel</div><div class="role-desc">Socle commun + Suivi des PIT.</div></div></div>
      <div class="role-chip"><span class="dot" style="background:#0d7377"></span><div><div class="role-name">Partenaire</div><div class="role-desc">Socle commun (tableau de bord décideur, PDC, indicateurs, rapports…).</div></div></div>
      <div class="role-chip"><span class="dot" style="background:#0d7377"></span><div><div class="role-name">Partenaire / ONG</div><div class="role-desc">Organisation non gouvernementale associée à la commune. <i>(permissions à confirmer)</i></div></div></div>
      <div class="role-chip"><span class="dot" style="background:#0d7377"></span><div><div class="role-name">Bailleur / Donateur</div><div class="role-desc">Socle commun — accès en consultation aux projets soutenus.</div></div></div>
      <div class="role-chip"><span class="dot" style="background:#c98b1f"></span><div><div class="role-name">Agent-Collecteur</div><div class="role-desc">Socle commun — chargé de la collecte de données sur le terrain.</div></div></div>
      <div class="role-chip"><span class="dot" style="background:#c98b1f"></span><div><div class="role-name">Arrondissement de Chefs</div><div class="role-desc">Socle commun — représentant au niveau de l'arrondissement.</div></div></div>
      <div class="role-chip"><span class="dot" style="background:#c98b1f"></span><div><div class="role-name">VUD</div><div class="role-desc">Socle commun — profil lié au suivi urbain / développement.</div></div></div>
      <div class="role-chip"><span class="dot" style="background:#c98b1f"></span><div><div class="role-name">Ministère / Préfecture</div><div class="role-desc">Socle commun — instance de tutelle départementale ou nationale.</div></div></div>
    </div>
    <div class="callout">
      <b>Le détail complet</b>
      Le détail module par module de chaque profil (« socle commun » et permissions supplémentaires) est expliqué et illustré dans la section <a href="#permissions-par-profil" style="color:inherit;">Permissions par défaut selon le profil</a>.
    </div>
  </section>

  <section class="block" id="permissions">
    <div class="section-kicker">Administration</div>
    <h2>Comprendre les permissions d'interface</h2>
    <p class="lede">
      En plus du profil général, chaque utilisateur peut avoir ses permissions ajustées individuellement, module par module. C'est ce que montre l'écran <b>« Permissions d'interface »</b>, accessible depuis la gestion des utilisateurs.
    </p>

    <div class="shot">
      <img src="/shot-02.jpg" alt="Écran des permissions d'interface pour un profil Super Administrateur">
    </div>
    <p class="shot-caption">Exemple : permissions du profil <b>Super Administrateur</b> — tous les modules sont activés.</p>

    <h3 class="subhead"><span class="num">i</span>Comment lire cet écran</h3>
    <table class="perm-table">
      <tr><th>Bloc de permissions</th><th>Contenu</th></tr>
      <tr>
        <td><span class="badge">Gestion du PDC</span></td>
        <td>Tableau de bord, Tableau de bord décideur, Gestion de PDC, Éléments des indicateurs, Visualiser les indicateurs, Rapports, Nouveau PTA, Révision PTA, Suivi des PIT, Nouvelle évaluation, Recommandations, Suivi des recommandations, Calendrier budgétaire, Calendrier des évaluations, Structures municipales, Partenaires, Source de financement, Suivi financier, Statistiques.</td>
      </tr>
      <tr>
        <td><span class="badge">ODD &amp; Indicateurs</span></td>
        <td>Liste des ODD, Liste des indicateurs, Faire une collecte, Paramètres ODD.</td>
      </tr>
      <tr>
        <td><span class="badge">Projets Phares</span></td>
        <td>Projets de tableau de bord, Projets, Secteurs, Collecte de données, Contrôle qualité.</td>
      </tr>
      <tr>
        <td><span class="badge">Paramètres</span></td>
        <td>Gestion des utilisateurs.</td>
      </tr>
    </table>

    <ol class="steps">
      <li><b>Chaque interrupteur (toggle)</b> correspond à un écran ou une fonctionnalité précise de la plateforme.
        <span class="hint">Un interrupteur activé (violet) donne accès à cette fonctionnalité pour l'utilisateur concerné.</span>
      </li>
      <li><b>L'étiquette « Par défaut »</b> sous chaque permission indique qu'elle correspond au réglage standard du profil de l'utilisateur.
        <span class="hint">Une permission modifiée manuellement n'affiche plus cette étiquette.</span>
      </li>
      <li><b>Le compteur en haut à droite de chaque bloc</b> (ex. « 19/19 ») indique le nombre de permissions activées sur le total du bloc.</li>
      <li><b>Bouton « Réinitialiser »</b> : ramène toutes les permissions du bloc aux réglages par défaut du profil.</li>
      <li><b>Bouton « Sauvegarder »</b> : enregistre les modifications apportées aux permissions de l'utilisateur.</li>
    </ol>

    <h3 class="subhead" id="permissions-par-profil"><span class="num">i</span>Permissions par défaut selon le profil</h3>
    <p class="lede" style="margin-top:4px;">
      En observant les réglages « Par défaut » de plusieurs comptes, on retrouve un <b>socle commun</b> de permissions accordé à la majorité des profils, auquel s'ajoutent des permissions spécifiques pour certains d'entre eux.
    </p>

    <div class="callout">
      <b>Le socle commun (« base »)</b>
      Tableau de bord décideur, Gestion de PDC, Visualiser les Indicateurs, Rapports (bloc Gestion du PDC) · Liste des indicateurs (bloc ODD &amp; Indicateurs) · Projets de tableau de bord (bloc Projets Phares).
    </div>

    <table class="perm-table">
      <tr><th>Profil</th><th>Gestion du PDC</th><th>ODD &amp; Indicateurs</th><th>Projets Phares</th><th>Gestion des utilisateurs</th></tr>
      <tr><td><b>Super Administrateur</b></td><td>19/19 — tout</td><td>4/4 — tout</td><td>5/5 — tout</td><td>✅ Oui</td></tr>
      <tr><td><b>Administrateur</b></td><td>19/19 — tout</td><td>4/4 — tout</td><td>5/5 — tout</td><td>❌ Non</td></tr>
      <tr><td><b>Administration‑Finance</b></td><td>6/19 — socle + Suivi des PIT + Suivi financier</td><td>1/4 — socle</td><td>1/5 — socle</td><td>❌ Non</td></tr>
      <tr><td><b>Personnel</b></td><td>5/19 — socle + Suivi des PIT</td><td>1/4 — socle</td><td>1/5 — socle</td><td>❌ Non</td></tr>
      <tr><td><b>Partenaire</b></td><td>4/19 — socle</td><td>1/4 — socle</td><td>1/5 — socle</td><td>❌ Non</td></tr>
      <tr><td><b>Bailleur / Donateur</b></td><td>4/19 — socle</td><td>1/4 — socle</td><td>1/5 — socle</td><td>❌ Non</td></tr>
      <tr><td><b>Ministère / Préfecture</b></td><td>4/19 — socle</td><td>1/4 — socle</td><td>1/5 — socle</td><td>❌ Non</td></tr>
      <tr><td><b>VUD</b></td><td>4/19 — socle</td><td>1/4 — socle</td><td>1/5 — socle</td><td>❌ Non</td></tr>
      <tr><td><b>Agent‑Collecteur</b></td><td>4/19 — socle</td><td>1/4 — socle</td><td>1/5 — socle</td><td>❌ Non</td></tr>
      <tr><td><b>Arrondissement de Chefs</b></td><td>4/19 — socle</td><td>1/4 — socle</td><td>1/5 — socle</td><td>❌ Non</td></tr>
    </table>
    <div class="callout todo">
      <b>À confirmer</b>
      Le profil « Partenaire / ONG » n'a pas encore de capture d'écran dédiée — il sera ajouté dès que possible. Rappel : quel que soit le profil, l'administrateur peut toujours accorder ou retirer une permission individuellement (voir étape 5 ci-dessous).
    </div>

    <div class="shot">
      <img src="/shot-03.jpg" alt="Permissions du profil Administrateur">
    </div>
    <p class="shot-caption">Profil <b>Administrateur</b> : accès à tous les modules métier, sauf « Gestion des utilisateurs ».</p>

    <div class="shot">
      <img src="/shot-04.jpg" alt="Permissions du profil Administration-Finance">
    </div>
    <p class="shot-caption">Profil <b>Administration‑Finance</b> : le socle commun, complété par « Suivi des PIT » et « Suivi financier ».</p>

    <div class="shot">
      <img src="/shot-05.jpg" alt="Permissions du profil Personnel">
    </div>
    <p class="shot-caption">Profil <b>Personnel</b> : le socle commun, complété par « Suivi des PIT ».</p>

    <div class="shot">
      <img src="/shot-06.jpg" alt="Exemple du socle commun de permissions, profil Partenaire">
    </div>
    <p class="shot-caption">Exemple du <b>socle commun</b> partagé par plusieurs profils (ici « Partenaire ») : Tableau de bord décideur, Gestion de PDC, Visualiser les Indicateurs, Rapports, Liste des indicateurs, Projets de tableau de bord.</p>
  </section>

  <section class="block" id="gestion-utilisateurs">
    <div class="section-kicker">Administration</div>
    <h2>Gestion des utilisateurs</h2>
    <p class="lede">
      C'est depuis cet écran que l'administrateur consulte, crée, modifie et gère les comptes de la plateforme.
    </p>

    <h3 class="subhead" id="voir-liste"><span class="num">1</span>Voir la liste des utilisateurs</h3>
    <div class="shot">
      <img src="/shot-07.jpg" alt="Liste des utilisateurs de la plateforme SIDSE IBDC">
    </div>
    <p class="shot-caption">Écran « Gestion des utilisateurs » : liste de tous les comptes de la commune.</p>
    <div class="card">
      <ul class="plain">
        <li><b>ID, Nom, Prénoms, Contact, Email</b> : identité du compte.</li>
        <li><b>Profil</b> : rôle attribué à l'utilisateur (voir section « Profils utilisateurs »).</li>
        <li><b>Institution</b> : structure de rattachement (ex. la commune).</li>
        <li><b>Statut</b> : indique si le compte est <span class="badge" style="background:#e9f8ee;color:#1f9d55;">Activé</span> ou désactivé.</li>
        <li><b>Action</b> : icônes permettant de gérer le compte.
          <div class="action-icons">
            <span>🛡 Permissions</span><span>⇄ Changer le profil</span><span>✎ Modifier</span><span>🗑 Supprimer</span>
          </div>
        </li>
      </ul>
    </div>

    <h3 class="subhead" id="rechercher"><span class="num">2</span>Rechercher ou filtrer un utilisateur</h3>
    <ol class="steps">
      <li>Utiliser le champ <b>« Nom, prénom ou email… »</b> pour rechercher un utilisateur précis.</li>
      <li>Utiliser le menu déroulant <b>« Tous les profils »</b> pour n'afficher que les comptes d'un profil donné (ex. uniquement les « Personnel »).</li>
    </ol>

    <h3 class="subhead" id="creer"><span class="num">3</span>Créer un utilisateur</h3>
    <p class="lede" style="margin-top:4px;">
      La création d'un compte se fait en deux temps : la plateforme vérifie d'abord si l'adresse email existe déjà, puis propose soit de créer un nouveau compte, soit d'associer un compte existant à l'institution.
    </p>

    <ol class="steps">
      <li><b>Cliquer sur « + Créer un utilisateur »</b> en haut à droite de l'écran « Gestion des utilisateurs ».</li>
      <li><b>Étape 1 — Vérification :</b> saisir l'adresse email de la personne, puis cliquer sur <b>« Vérifier »</b>.
        <span class="hint">La plateforme recherche si un compte existe déjà avec cet email.</span>
      </li>
    </ol>
    <div class="shot">
      <img src="/shot-08.jpg" alt="Fenêtre de vérification de l'email avant création d'un utilisateur">
    </div>
    <p class="shot-caption">Étape 1 : saisie de l'email et vérification de l'existence du compte.</p>

    <div class="callout">
      <b>Deux cas de figure possibles</b>
      Selon le résultat de la vérification, la fenêtre propose soit de créer un nouveau compte (aucun compte trouvé), soit d'associer un compte existant à l'institution (un compte existe déjà). Les deux cas sont détaillés ci-dessous.
    </div>

    <h3 class="subhead" style="margin-top:20px;"><span class="num">3a</span>Cas 1 — Aucun compte trouvé : créer un nouveau compte</h3>
    <div class="shot">
      <img src="/shot-09.jpg" alt="Formulaire d'identité pour créer un nouvel utilisateur">
    </div>
    <p class="shot-caption">Aucun compte trouvé pour cet email : la plateforme invite à renseigner les informations du nouvel utilisateur.</p>
    <ol class="steps">
      <li><b>Identité</b> : renseigner le <b>Nom</b> et les <b>Prénoms</b> de la personne.</li>
      <li><b>Contact</b> : renseigner le <b>Téléphone</b> (l'email saisi à l'étape précédente est déjà pré-rempli).</li>
    </ol>

    <div class="shot">
      <img src="/shot-10.jpg" alt="Formulaire compte et accès pour créer un nouvel utilisateur">
    </div>
    <p class="shot-caption">Suite du formulaire : profil, langue, mot de passe et photo de profil.</p>
    <ol class="steps">
      <li><b>Compte &amp; Accès</b> : choisir le <b>Profil</b> de l'utilisateur (ex. Personnel, Administrateur…) et la <b>Langue</b> de l'interface.</li>
      <li>Définir un <b>Mot de passe</b> et le confirmer dans le champ <b>« Confirmer le mot de passe »</b>.</li>
      <li>Ajouter éventuellement une <b>Photo de profil</b> (facultatif).</li>
      <li>Cliquer sur <b>« Créer l'utilisateur »</b> pour valider, ou sur <b>« Annuler »</b> pour abandonner.</li>
    </ol>

    <h3 class="subhead" style="margin-top:20px;"><span class="num">3b</span>Cas 2 — Un compte existe déjà : associer l'utilisateur</h3>
    <div class="shot">
      <img src="/shot-11.jpg" alt="Fenêtre indiquant qu'un utilisateur existe déjà pour cet email">
    </div>
    <p class="shot-caption">Un compte existe déjà pour cet email : la plateforme affiche l'identité trouvée (« Utilisateur trouvé »).</p>
    <ol class="steps">
      <li>La fenêtre affiche le nom et l'email du compte déjà existant, avec l'indicateur d'étape passé à <b>« 2 Association »</b>.</li>
      <li>Si le message <b>« Cet utilisateur est déjà associé à une institution »</b> apparaît, cela signifie que ce compte appartient déjà à une autre institution ; l'association à une nouvelle institution n'est alors pas proposée depuis cet écran.</li>
      <li>Cliquer sur <b>« Annuler »</b> pour fermer la fenêtre dans ce cas.</li>
    </ol>

    <h3 class="subhead" id="changer-profil"><span class="num">4</span>Changer le profil d'un utilisateur</h3>
    <div class="shot">
      <img src="/shot-12.jpg" alt="Fenêtre de changement de profil d'un utilisateur">
    </div>
    <p class="shot-caption">Fenêtre « Changer le profil », ouverte depuis la ligne d'un utilisateur.</p>
    <ol class="steps">
      <li>Dans la liste des utilisateurs, cliquer sur l'icône <b>⇄ (changer le profil)</b> sur la ligne de l'utilisateur concerné.</li>
      <li>La fenêtre <b>« Changer le profil »</b> s'ouvre et affiche le nom et l'email du compte sélectionné.</li>
      <li>Dans le champ <b>« Nouveau profil »</b>, choisir le profil souhaité dans la liste déroulante (Super Administrateur, Administrateur, Partenaire, Personnel, Arrondissement de chefs, Agent-collecteur, VUD, Ministère / Préfecture, Bailleur / Donateur, Partenaire / ONG, Administration-Finance).</li>
      <li>Cliquer sur <b>« Enregistrer »</b> pour appliquer le nouveau profil, ou sur <b>« Annuler »</b> pour ne rien changer.</li>
    </ol>

    <h3 class="subhead" id="modifier-permissions"><span class="num">5</span>Modifier les permissions d'un utilisateur</h3>
    <ol class="steps">
      <li>Dans la liste des utilisateurs, cliquer sur l'icône <b>🛡 (permissions)</b> sur la ligne de l'utilisateur concerné.</li>
      <li>La page <b>« Permissions d'interface »</b> s'ouvre pour ce compte (voir la section dédiée ci-dessus pour le détail des blocs).</li>
      <li>Activer ou désactiver les permissions souhaitées, puis cliquer sur <b>« Sauvegarder »</b>.</li>
    </ol>
  </section>

  <section class="block" id="pdc-acces">
    <div class="section-kicker">Module PDC</div>
    <h2>Accéder aux modules de la plateforme</h2>
    <p class="lede">
      Après connexion, la page d'accueil de l'institution (ici la commune de Glazoué) présente les <b>modules</b> disponibles : PDC, ODD, Projet Phare, et Gestion des paramètres de comptes. C'est le point de départ pour accéder au module de gestion du Plan de Développement Communal.
    </p>
    <div class="shot">
      <img src="/shot-13.jpg" alt="Écran de sélection des modules de la plateforme">
    </div>
    <p class="shot-caption">Espace de travail : choix du module à ouvrir (PDC, ODD, Projet Phare, Paramètres).</p>
    <ol class="steps">
      <li>Cliquer sur <b>« Accéder au module »</b> sous la carte <b>« Plan de Développement Communal (PDC) »</b> pour entrer dans le module PDC.</li>
      <li>Le menu latéral de gauche s'affiche alors avec toutes les sections du module : Tableau de bord, Tableau de bord décideur, Gestion de PDC, Éléments des Indicateurs, Visualiser les Indicateurs, Rapports, ainsi que la Gestion de PTA et de PIT.</li>
    </ol>
  </section>

  <section class="block" id="pdc-tableau-bord">
    <div class="section-kicker">Module PDC</div>
    <h2>Tableau de bord PDC</h2>
    <p class="lede">
      Vue d'ensemble de l'avancement du Plan de Développement Communal : projets actifs, taux d'exécution, budget consommé, partenaires actifs, ainsi que le suivi du PTA (Plan de Travail Annuel) en cours.
    </p>
    <div class="shot">
      <img src="/shot-14.jpg" alt="Tableau de bord PDC">
    </div>
    <p class="shot-caption">Tableau de bord PDC : indicateurs clés, informations PTA, projets en cours et activités récentes.</p>
    <div class="card">
      <ul class="plain">
        <li><b>Cartes du haut</b> : Projets PDC actifs, Taux d'exécution, Budget consommé, Partenaires actifs.</li>
        <li><b>Portée temporelle</b> et <b>Vision</b> : rappellent la période couverte par le PDC et sa vision stratégique.</li>
        <li><b>Filtres Année / Trimestre</b> : permettent d'affiner les chiffres affichés sur une période précise (bouton « Réinitialiser » pour revenir à la vue globale).</li>
        <li><b>Informations PTA</b> : montant du PTA, montant exécuté, date de dernière révision, prochaine évaluation, et nombre d'activités en retard.</li>
        <li><b>Niveau de mise en œuvre</b> : compare la prévision, la réalisation et le taux à date.</li>
        <li><b>Projets en cours</b> et <b>Activités récentes</b> : suivi visuel de l'avancement de chaque projet et journal des dernières actions.</li>
      </ul>
    </div>
  </section>

  <section class="block" id="pdc-tableau-decideur">
    <div class="section-kicker">Module PDC</div>
    <h2>Tableau de bord Décideurs</h2>
    <p class="lede">
      Vue simplifiée destinée aux décideurs, avec des filtres de recherche pour cibler un PDC, une année ou un PTA précis, et des raccourcis vers les documents stratégiques.
    </p>
    <div class="shot">
      <img src="/shot-15.jpg" alt="Tableau de bord Décideurs">
    </div>
    <p class="shot-caption">Tableau de bord Décideurs : filtres de recherche, informations PTA et accès rapide.</p>
    <ol class="steps">
      <li><b>Filtres de recherche</b> : choisir un PDC, une année, un PTA et une date de référence, puis cliquer sur <b>« Rechercher »</b>.</li>
      <li><b>Informations PTA</b> : montant, montant exécuté, dernière révision, prochaine évaluation (affiche « N/A » tant qu'aucun PDC/PTA n'est sélectionné).</li>
      <li><b>Activités en retard</b> : cliquer sur cette carte pour voir le détail (voir section « Activités en retard » ci-dessous).</li>
      <li><b>Accès rapide</b> : liens directs vers le <b>Document de Plan TBS</b> (Tableau de Bord Stratégique) et le module <b>ODD</b>.</li>
    </ol>
  </section>

  <section class="block" id="pdc-gestion">
    <div class="section-kicker">Module PDC</div>
    <h2>Gestion des PDC</h2>
    <p class="lede">
      Écran de gestion des Plans de Développement Communaux eux-mêmes : création, recherche et export de la liste des PDC de l'institution.
    </p>
    <div class="shot">
      <img src="/shot-16.jpg" alt="Écran de gestion des PDC">
    </div>
    <p class="shot-caption">Liste des PDC de l'institution, avec recherche par code ou libellé.</p>
    <ol class="steps">
      <li>Utiliser le champ <b>« Rechercher par code ou libellé… »</b> pour retrouver un PDC existant.</li>
      <li>Cliquer sur <b>« + Nouveau PDC »</b> pour créer un nouveau plan de développement communal.</li>
      <li>Cliquer sur <b>« Exportateur »</b> pour exporter la liste affichée.</li>
      <li>Le tableau affiche pour chaque PDC : ID, Code, Libellé, Description, dates de Début/Fin et le fichier associé.</li>
    </ol>
    <div class="callout todo">
      <b>Capture à venir</b>
      Le détail du formulaire de création d'un nouveau PDC (« + Nouveau PDC ») sera ajouté dès qu'une capture de cet écran sera disponible.
    </div>
  </section>

  <section class="block" id="pdc-indicateurs">
    <div class="section-kicker">Module PDC</div>
    <h2>Éléments des Indicateurs</h2>
    <p class="lede">
      Ce hub regroupe les trois outils permettant de définir, planifier et suivre les indicateurs de performance d'un PDC.
    </p>
    <div class="shot">
      <img src="/shot-17.jpg" alt="Hub Éléments des Indicateurs">
    </div>
    <p class="shot-caption">Trois modules accessibles : Gestion, Planification et Collecte de données.</p>

    <h3 class="subhead" id="pdc-indicateurs-gestion"><span class="num">1</span>Gestion des indicateurs</h3>
    <div class="shot">
      <img src="/shot-18.jpg" alt="Écran de gestion des indicateurs">
    </div>
    <p class="shot-caption">Créer, modifier et supprimer les indicateurs de performance.</p>
    <ol class="steps">
      <li>Utiliser les filtres <b>Recherche, PDC, Activité, Statut, Type proxy, ODD, Cible ODD</b> pour retrouver un indicateur précis, puis cliquer sur <b>« Rechercher »</b>.</li>
      <li>Cliquer sur <b>« + Nouvel Indicateur »</b> pour créer un indicateur.</li>
      <li>Le tableau affiche : ID, PDC, Activité, Indicateur, Valeur de référence, Valeur cible, Date référence, Date cible, Statut.</li>
    </ol>

    <h3 class="subhead" id="pdc-indicateurs-planification"><span class="num">2</span>Planification des indicateurs</h3>
    <div class="shot">
      <img src="/shot-19.jpg" alt="Écran de planification des indicateurs">
    </div>
    <p class="shot-caption">Définir les valeurs cibles annuelles pour chaque indicateur du PDC.</p>
    <ol class="steps">
      <li>Filtrer par <b>PDC, Activité, Indicateur, Année</b>, puis cliquer sur <b>« Rechercher »</b>.</li>
      <li>Cliquer sur <b>« + Nouvelle Planification »</b> pour définir une nouvelle valeur cible annuelle.</li>
      <li>Le tableau affiche : ID, Indicateur, Valeur cible, Année, Statut.</li>
    </ol>

    <h3 class="subhead" id="pdc-indicateurs-collecte"><span class="num">3</span>Collecte de données</h3>
    <div class="shot">
      <img src="/shot-20.jpg" alt="Hub Collecte de données des indicateurs">
    </div>
    <p class="shot-caption">Trois actions possibles : nouvelle collecte, données rejetées, validation.</p>
    <ol class="steps">
      <li><b>Nouvelle collection</b> : saisir de nouvelles données d'indicateurs, avec statut soumettre/valider.</li>
      <li><b>Données rejetées</b> : gérer les données rejetées, avec possibilité de les soumettre à nouveau.</li>
      <li><b>Validation</b> : valider ou rejeter les données soumises par les collecteurs.</li>
    </ol>

    <div class="shot">
      <img src="/shot-21.jpg" alt="Écran Collecte de Données">
    </div>
    <p class="shot-caption">Écran « Collecte de Données » : filtrer par PDC, activité, indicateur, année, ou lancer une nouvelle collecte via « + Nouvelle Collection ».</p>

    <div class="shot">
      <img src="/shot-22.jpg" alt="Écran Données validées">
    </div>
    <p class="shot-caption">« Données validées » : liste des collectes déjà validées, avec les mêmes filtres et un export possible.</p>

    <div class="shot">
      <img src="/shot-23.jpg" alt="Écran Données rejetées à corriger">
    </div>
    <p class="shot-caption">« Données rejetées à corriger » : les collectes renvoyées pour correction avant nouvelle soumission.</p>

    <h3 class="subhead" id="pdc-indicateurs-visualiser"><span class="num">4</span>Visualiser les indicateurs</h3>
    <div class="shot">
      <img src="/shot-24.jpg" alt="Écran de visualisation des indicateurs">
    </div>
    <p class="shot-caption">Analyse graphique des indicateurs d'un PDC.</p>
    <ol class="steps">
      <li>Choisir un <b>PDC</b> dans la liste déroulante.</li>
      <li>Filtrer éventuellement par <b>Année</b>.</li>
      <li>La liste des indicateurs disponibles pour ce PDC s'affiche alors ; cliquer sur un indicateur pour voir son graphique d'évolution.</li>
    </ol>
  </section>

  <section class="block" id="pdc-odd">
    <div class="section-kicker">Module PDC</div>
    <h2>Objectifs de Développement Durable (ODD)</h2>
    <p class="lede">
      Cette page présente les 17 Objectifs de Développement Durable des Nations Unies, utilisés pour classer les indicateurs et les projets de la commune.
    </p>
    <div class="shot">
      <img src="/shot-25.jpg" alt="Liste des 17 Objectifs de Développement Durable">
    </div>
    <p class="shot-caption">Les 17 ODD affichés sous forme de grille cliquable.</p>
    <ol class="steps">
      <li>Cliquer sur un <b>objectif (ODD)</b> pour voir le détail de ses cibles et de ses indicateurs proxy associés.</li>
      <li>Le compteur en haut à droite (<b>« 17 objectifs »</b>) confirme que l'ensemble des ODD officiels est chargé.</li>
    </ol>
  </section>

  <section class="block" id="pdc-retard">
    <div class="section-kicker">Module PDC</div>
    <h2>Activités en retard</h2>
    <p class="lede">
      Liste des activités du PTA qui n'ont eu aucune tâche exécutée sur la période d'évaluation en cours — accessible directement depuis le Tableau de bord Décideurs.
    </p>
    <div class="shot">
      <img src="/shot-26.jpg" alt="Écran des activités en retard">
    </div>
    <p class="shot-caption">Écran « Activités en Retard », avec filtres PDC / Année / PTA / recherche par nom ou code.</p>
    <ol class="steps">
      <li>Depuis le <b>Tableau de bord Décideurs</b>, cliquer sur la carte <b>« Activités en retard »</b>.</li>
      <li>Utiliser les filtres <b>PDC, Année, PTA</b> ou la recherche par <b>nom ou code d'activité</b> pour cibler une activité précise.</li>
      <li>Le tableau affiche : Code, Activité, PTA, Piste de la firme, Structures associées, Tâches totales, Tâches non exécutées.</li>
    </ol>
  </section>

  <section class="block" id="pdc-structure-finance">
    <div class="section-kicker">Module PDC</div>
    <h2>Structure &amp; Finance</h2>
    <p class="lede">
      Ce groupe du menu latéral regroupe les référentiels utilisés dans tout le PDC : l'organigramme de la mairie, les partenaires impliqués et les sources de financement des projets.
    </p>

    <h3 class="subhead" id="sf-structures"><span class="num">1</span>Structures municipales</h3>
    <div class="shot">
      <img src="/shot-27.jpg" alt="Écran Structures Municipales">
    </div>
    <p class="shot-caption">Gérer les structures de la mairie (organigramme).</p>
    <ol class="steps">
      <li>Filtrer par <b>Statut</b> ou <b>Parent de structure</b> pour retrouver une structure dans la hiérarchie.</li>
      <li>Cliquer sur <b>« + Nouvelle Structure »</b> pour ajouter une structure municipale.</li>
      <li>Le tableau affiche : ID, Sigle, Structure, Parent de structure, Statut.</li>
    </ol>

    <h3 class="subhead" id="sf-partenaires"><span class="num">2</span>Partenaires</h3>
    <div class="shot">
      <img src="/shot-28.jpg" alt="Écran Gestion des Partenaires">
    </div>
    <p class="shot-caption">Gérer les partenaires du projet, avec indicateurs (total, actifs, types distincts).</p>
    <ol class="steps">
      <li>Filtrer par <b>Type</b> ou <b>Statut</b>, ou rechercher par <b>Nom ou sigle</b>.</li>
      <li>Cliquer sur <b>« + Nouveau Partenaire »</b> pour ajouter un partenaire.</li>
      <li>Le tableau affiche : ID, Date, Logo, Sigle, Partenaire, Type, Statut.</li>
    </ol>

    <h3 class="subhead" id="sf-sources"><span class="num">3</span>Sources de financement</h3>
    <div class="shot">
      <img src="/shot-29.jpg" alt="Écran Sources de Financement">
    </div>
    <p class="shot-caption">Gérer les sources de financement des projets.</p>
    <ol class="steps">
      <li>Filtrer par <b>Partenaire</b> ou <b>Statut</b>, ou rechercher une source.</li>
      <li>Cliquer sur <b>« + Nouvelle Source »</b> pour ajouter une source de financement.</li>
      <li>Le tableau affiche : ID, Date, Partenaire, Source, Statut.</li>
    </ol>
  </section>

  <section class="block" id="pdc-pta-pit">
    <div class="section-kicker">Module PDC</div>
    <h2>Gestion des PTA, des PIT et des évaluations</h2>
    <p class="lede">
      Le PTA (Plan de Travail Annuel) décline le PDC en actions annuelles ; le PIT (Plan Individuel de Travail) en assure le suivi individuel ; les évaluations mesurent enfin le niveau de réalisation de l'un et de l'autre.
    </p>

    <h3 class="subhead" id="pta-gestion"><span class="num">1</span>Gestion des PTA — créer un nouveau PTA</h3>
    <div class="shot">
      <img src="/shot-30.jpg" alt="Écran Gestion des PTA">
    </div>
    <p class="shot-caption">Liste des Plans de Travail Annuels de l'institution.</p>
    <ol class="steps">
      <li>Filtrer par <b>PDC</b> ou rechercher un PTA, puis cliquer sur <b>« + Nouveau PTA »</b> pour en créer un.</li>
    </ol>
    <div class="shot">
      <img src="/shot-31.jpg" alt="Formulaire Nouveau PTA - Planification">
    </div>
    <p class="shot-caption">Étape « Planification » : PDC associé et année du PTA, puis période d'exécution.</p>
    <ol class="steps">
      <li><b>Planification</b> : choisir le <b>PDC associé</b> et l'<b>Année du PTA</b>.</li>
      <li><b>Période d'exécution</b> : renseigner la <b>Date de début</b> et la <b>Date de fin</b>.</li>
    </ol>
    <div class="shot">
      <img src="/shot-32.jpg" alt="Formulaire Nouveau PTA - Configuration et documents">
    </div>
    <p class="shot-caption">Suite du formulaire : statut et documents joints.</p>
    <ol class="steps">
      <li><b>Configuration</b> : définir le <b>Statut</b> du PTA (ex. « Activé »).</li>
      <li><b>Documents</b> : ajouter une <b>Observation</b> ou un commentaire, et joindre un fichier si besoin.</li>
      <li>Cliquer sur <b>« Enregistrer »</b> pour valider la création du PTA.</li>
    </ol>

    <h3 class="subhead" id="pta-revision"><span class="num">2</span>Révisions PTA</h3>
    <div class="shot">
      <img src="/shot-33.jpg" alt="Écran Révisions PTA">
    </div>
    <p class="shot-caption">Gestion et suivi des révisions de Plans de Travail Annuels.</p>
    <ol class="steps">
      <li>Sélectionner un <b>PDC</b> et une <b>année</b> pour afficher les révisions disponibles.</li>
      <li>Cliquer sur <b>« + Nouveau PTA »</b> si une révision nécessite la création d'un nouveau plan.</li>
    </ol>

    <h3 class="subhead" id="pit-suivi"><span class="num">3</span>Suivi des PIT</h3>
    <div class="shot">
      <img src="/shot-34.jpg" alt="Écran Suivi des plans individuels de travail">
    </div>
    <p class="shot-caption">Gestion et consultation des évaluations PIT (Plan Individuel de Travail).</p>
    <ol class="steps">
      <li>Rechercher un PIT, ou filtrer par <b>PDC</b> et <b>Année</b>.</li>
      <li>Le tableau affiche : ID, PTA, Année, Date début, Date de fin, Statut, Actions.</li>
    </ol>

    <h3 class="subhead" id="eval-nouvelle"><span class="num">4</span>Nouvelle évaluation</h3>
    <div class="shot">
      <img src="/shot-35.jpg" alt="Écran Liste des Évaluations">
    </div>
    <p class="shot-caption">Liste des évaluations de Plans de Travail : choisir un PDC puis une année pour afficher les évaluations existantes.</p>
    <ol class="steps">
      <li>Sélectionner un <b>PDC</b>, puis une <b>année</b>, pour voir les évaluations disponibles.</li>
      <li>Cliquer sur <b>« + Nouvelle Évaluation »</b> pour en créer une.</li>
    </ol>
    <div class="shot">
      <img src="/shot-36.jpg" alt="Formulaire Nouvelle évaluation">
    </div>
    <p class="shot-caption">Formulaire « Nouvelle évaluation » : PDC, PTA associé, période et statut.</p>
    <ol class="steps">
      <li><b>Planification</b> : choisir le <b>PDC</b> puis le <b>PTA associé</b>.</li>
      <li><b>Période</b> : renseigner la <b>Date de début</b> et la <b>Date de fin</b> de l'évaluation.</li>
      <li><b>Configuration</b> : définir le <b>Statut</b>, puis cliquer sur <b>« Enregistrer »</b>.</li>
    </ol>

    <h3 class="subhead" id="pdc-rapports"><span class="num">5</span>Rapports &amp; Évaluations</h3>
    <div class="shot">
      <img src="/shot-37.jpg" alt="Hub Rapports PDC">
    </div>
    <p class="shot-caption">Le hub « Rapports » regroupe 6 modules d'analyse du PDC.</p>
    <div class="card">
      <ul class="plain">
        <li><b>Évaluation de PIT</b> : analyse du niveau de réalisation du Plan de Travail Individuel.</li>
        <li><b>Évaluation de PTA</b> : analyse du niveau de réalisation du Plan de Travail Annuel.</li>
        <li><b>Évaluation de PDC</b> : analyse du niveau de mise en œuvre et des résultats du Plan de Développement Communal.</li>
        <li><b>Projection financière</b> : estimation prévisionnelle des ressources financières par source de financement.</li>
        <li><b>Visualisation de PTA</b> : le Plan de Travail Annuel sous forme de tableau détaillé.</li>
        <li><b>Synthèse Évaluation</b> : vue d'ensemble consolidée des indicateurs d'évaluation (budget, TEP, activités en retard, dates clés).</li>
      </ul>
    </div>

    <div class="shot">
      <img src="/shot-38.jpg" alt="Écran Évaluation de PTA">
    </div>
    <p class="shot-caption">Évaluation de PTA : tâches totales, terminées, en cours, en retard, avec filtres de recherche détaillés (PDC, année, PTA, trimestre, structure…).</p>

    <div class="shot">
      <img src="/shot-39.jpg" alt="Écran Évaluation de PIT">
    </div>
    <p class="shot-caption">Évaluation de PIT : même principe que l'évaluation de PTA, au niveau individuel.</p>

    <div class="shot">
      <img src="/shot-40.jpg" alt="Écran Visualisation de PTA">
    </div>
    <p class="shot-caption">Visualisation de PTA : liste détaillée des tâches du PTA avec taux d'exécution et suivi financier (TEF mandaté / engagé / décaissé).</p>

    <div class="shot">
      <img src="/shot-41.jpg" alt="Écran Synthèse Évaluation">
    </div>
    <p class="shot-caption">Synthèse Évaluation : vue consolidée par niveau hiérarchique (Programme, Projet, Action, Activité) — TEP physique &amp; TEF financier.</p>
    <ol class="steps">
      <li>Depuis chaque écran de rapport, définir les <b>filtres de recherche</b> souhaités puis cliquer sur <b>« Rechercher »</b>.</li>
      <li>Utiliser le bouton <b>« Exportateur »</b> pour exporter les résultats lorsque disponible.</li>
    </ol>
  </section>

  <section class="block" id="a-venir">
    <div class="section-kicker">Prochainement</div>
    <h2>Sections à venir</h2>
    <p class="lede">
      Ce guide sera complété au fur et à mesure avec les captures d'écran des autres modules de la plateforme. Voici les sections prévues :
    </p>
    <ul class="todo-list">
      <li>ODD & Indicateurs : collecte détaillée, paramètres ODD</li>
      <li>Projets phares : projets, secteurs, collecte de données, contrôle qualité</li>
      <li>Calendrier budgétaire et calendrier des évaluations</li>
      <li>Suppression d'un compte utilisateur</li>
    </ul>
  </section>

  <footer class="doc-footer">
    Guide d'utilisation SIDSE IBDC (Piè Baromètre) — document évolutif, mis à jour au fil des captures d'écran fournies.
  </footer>`;
