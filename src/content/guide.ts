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
        "href": "connexion",
        "title": "Connexion à la plateforme",
        "sub": false
      },
      {
        "href": "profils",
        "title": "Profils utilisateurs",
        "sub": false
      },
      {
        "href": "voir-profil",
        "title": "Accéder au profil utilisateur",
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
        "href": "acceder-permissions",
        "title": "Accéder aux permissions",
        "sub": true
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
        "href": "acces-gestion-utilisateurs",
        "title": "Accéder à l'interface",
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
        "href": "rechercher",
        "title": "Rechercher / filtrer",
        "sub": true
      },
      {
        "href": "modifier-utilisateur",
        "title": "Modifier un utilisateur",
        "sub": true
      },
      {
        "href": "supprimer-utilisateur",
        "title": "Supprimer un utilisateur",
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
    <h1 class="doctitle">Bienvenue sur SIDSE IBDC</h1>
    <p class="doc-lede">
      SIDSE IBDC est la plateforme de Gestion intelligente des Plans de Développement Communale pour un suivi efficace et transparent.
    </p>
    <p class="lede" style="margin-top: 0.75rem;">
      Le présent guide explique, étape par étape, comment utiliser la plateforme SIDSE IBDC.
    </p>
  </div>

  <section class="block" style="border-bottom: 0; padding-top: 2rem;">
    <div class="section-kicker" style="background:#eff6ff; color:#2563eb;">ACCÈS RAPIDES</div>
    <h2>Les actions clés du guide</h2>
    <p class="lede">
      Retrouvez directement les parcours d'utilisation les plus importants de la plateforme.
    </p>

    <div class="actions-grid">
      <a href="#creer" class="action-card">
        <div class="action-num num-blue">01</div>
        <div class="action-body">
          <div class="action-title">Créer un utilisateur</div>
          <div class="action-desc">Ajouter un compte et lui attribuer un profil.</div>
        </div>
        <div class="action-arrow">↗</div>
      </a>

      <a href="#profils" class="action-card">
        <div class="action-num num-purple">02</div>
        <div class="action-body">
          <div class="action-title">Gérer les accès d'un utilisateur</div>
          <div class="action-desc">Savoir ce qu'il peut voir et faire sur la plateforme.</div>
        </div>
        <div class="action-arrow">↗</div>
      </a>

      <a href="#eval-nouvelle" class="action-card">
        <div class="action-num num-green">03</div>
        <div class="action-body">
          <div class="action-title">Faire une évaluation de PTA</div>
          <div class="action-desc">Créer une nouvelle évaluation du Plan de Travail Annuel.</div>
        </div>
        <div class="action-arrow">↗</div>
      </a>

      <a href="#pdc-rapports" class="action-card">
        <div class="action-num num-orange">04</div>
        <div class="action-body">
          <div class="action-title">Voir une synthèse Évaluation</div>
          <div class="action-desc">Consulter une vue consolidée des résultats et indicateurs.</div>
        </div>
        <div class="action-arrow">↗</div>
      </a>
    </div>
  </section>

  <section class="block" id="connexion">
    <div class="section-kicker">Prise en main</div>
    <h2>Connexion à la plateforme</h2>
    <p class="lede">
      L'accès à l'espace de gestion SIDSE IBDC s'effectue en deux étapes : la saisie de vos identifiants sur la page de connexion, puis la sélection de votre compte institutionnel.
    </p>

    <!-- Étape 1 : Formulaire de connexion -->
    <h3 class="subhead"><span class="num">1</span>Saisir ses identifiants de connexion</h3>
    <p>
      Rendez-vous sur la page de connexion de la plateforme nationale <b>SIDSE IBDC</b>.
    </p>
    <ol class="steps">
      <li>
        Dans le champ <b>« Adresse e-mail »</b>, saisissez votre adresse email professionnelle (ex. <i>votre@email.com</i>).
      </li>
      <li>
        Dans le champ <b>« Mot de passe »</b>, saisissez votre mot de passe secret.
        <span class="hint">Vous pouvez cliquer sur l'icône en forme d'œil à droite du champ pour afficher ou masquer vos caractères.</span>
      </li>
      <li>
        Cochez la case obligatoire <b>« J'ai lu et j'accepte la politique de confidentialité et les conditions d'utilisation »</b>.
      </li>
      <li>
        Cliquez sur le bouton <b>« Se connecter »</b> pour valider l'authentification.
      </li>
    </ol>

    <div class="shot">
      <img src="/shot-57.png" alt="Page de connexion de la plateforme SIDSE IBDC">
    </div>
    <p class="shot-caption">Page de connexion de la plateforme <b>SIDSE IBDC</b> : saisie de l'email, du mot de passe et acceptation des conditions d'utilisation.</p>

    <div class="callout">
      <b>Mot de passe oublié ?</b>
      Si vous ne vous souvenez plus de votre mot de passe, cliquez sur le lien <i>« Mot de passe oublié ? »</i> situé juste sous le champ mot de passe pour recevoir un lien de réinitialisation par email.
    </div>

    <!-- Étape 2 : Sélection du compte -->
    <h3 class="subhead"><span class="num">2</span>Choisir son compte et son institution</h3>
    <p>
      Après validation de vos identifiants, la plateforme affiche l'écran <b>« Choisir un compte »</b> pour vous permettre de confirmer votre institution de rattachement et votre profil.
    </p>
    <ol class="steps">
      <li>
        Vérifiez le nom de l'institution affichée (ex. la commune de <b>GLAZOUE</b>) ainsi que le rôle associé (ex. <b>ADMINISTRATEUR</b>).
      </li>
      <li>
        Cliquez directement sur la carte de votre institution pour ouvrir votre espace de travail.
      </li>
      <li>
        Si vous souhaitez vous connecter avec un autre compte, cliquez sur le lien <b>« ← Se connecter avec un autre compte »</b>.
      </li>
    </ol>

    <div class="shot">
      <img src="/shot-58.jpeg" alt="Écran Choisir un compte de la plateforme SIDSE IBDC">
    </div>
    <p class="shot-caption">Écran <b>« Choisir un compte »</b> : sélection de l'institution (ex. GLAZOUE) et confirmation du profil attribué.</p>

    <div class="callout">
      <b>Accéder aux fonctionnalités après connexion</b>
      Une fois votre compte sélectionné, vous atterrissez sur l'espace de travail. Pour découvrir comment naviguer dans les différents modules, consultez la section <a href="#pdc-acces" style="color:inherit;font-weight:600;">Accéder aux modules de la plateforme →</a>
    </div>
  </section>

  <section class="block" id="profils">
    <div class="section-kicker">Comptes &amp; accès</div>
    <h2>Les profils utilisateurs</h2>
    <p class="lede">
      Chaque compte créé sur la plateforme se voit attribuer un profil parmi la liste ci-dessous. Le profil détermine les permissions accordées par défaut, qui peuvent ensuite être ajustées individuellement pour chaque utilisateur.
    </p>

    <table>
      <thead>
        <tr>
          <th>Profil</th>
          <th>Niveau</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr style="background:#f5f3ff;">
          <td><b>Super Administrateur</b></td>
          <td><span class="badge" style="background:#ede9fe;color:#5b21b6;">Admin</span></td>
          <td>Il dispose d'un accès complet à l'ensemble des modules de la plateforme : Gestion du PDC, ODD &amp; Indicateurs, Projets Phares, ainsi qu'à la <b>gestion des utilisateurs</b>. Seul ce profil peut créer et gérer des comptes.</td>
        </tr>
        <tr style="background:#ede9fe;">
          <td><b>Administrateur</b></td>
          <td><span class="badge" style="background:#ede9fe;color:#5b21b6;">Admin</span></td>
          <td>Il a accès à tous les modules métier (Gestion du PDC, ODD &amp; Indicateurs, Projets Phares) avec les mêmes droits que le Super Administrateur, <b>sans</b> pouvoir gérer les comptes utilisateurs.</td>
        </tr>
        <tr style="background:#eff6ff;">
          <td><b>Administration‑Finance</b></td>
          <td><span class="badge" style="background:#dbeafe;color:#1d4ed8;">Interne</span></td>
          <td>Il a accès aux tableaux de bord, aux rapports et aux modules de <b>Suivi financier</b> et de <b>Statistiques</b>. Son accès est orienté vers le pilotage budgétaire et l'analyse financière de la commune.</td>
        </tr>
        <tr style="background:#dbeafe;">
          <td><b>Staff</b></td>
          <td><span class="badge" style="background:#dbeafe;color:#1d4ed8;">Interne</span></td>
          <td>Il a accès aux tableaux de bord, à l'onglet <b>Gestion de PDC</b>, aux rapports et au <b>Suivi des PIT</b>. Il s'agit d'un agent interne de la commune disposant des fonctions essentielles de suivi.</td>
        </tr>
        <tr style="background:#e8f9f0;">
          <td><b>Partenaire</b></td>
          <td><span class="badge" style="background:#d1fae5;color:#065f46;">Externe</span></td>
          <td>Il a accès au <b>Tableau de bord décideur</b>, à l'onglet <b>Gestion de PDC</b>, à la visualisation des indicateurs et aux rapports. C'est un partenaire institutionnel de la commune, avec une vue orientée décision.</td>
        </tr>
        <tr style="background:#f0fdf4;">
          <td><b>Partenaire / ONG</b></td>
          <td><span class="badge" style="background:#d1fae5;color:#065f46;">Externe</span></td>
          <td>Il a accès aux tableaux de bord, à l'onglet <b>Gestion de PDC</b>, à la visualisation des indicateurs et aux rapports. C'est une organisation non gouvernementale associée à la commune.</td>
        </tr>
        <tr style="background:#dcfce7;">
          <td><b>Bailleur / Donateur</b></td>
          <td><span class="badge" style="background:#d1fae5;color:#065f46;">Externe</span></td>
          <td>Il a accès aux tableaux de bord et aux rapports en consultation uniquement. Son rôle est de suivre les projets qu'il finance sans intervenir dans la gestion.</td>
        </tr>
        <tr style="background:#fffbeb;">
          <td><b>Agent‑Collecteur</b></td>
          <td><span class="badge" style="background:#fef3c7;color:#92400e;">Terrain</span></td>
          <td>Il a accès aux tableaux de bord, à l'onglet <b>Gestion de PDC</b> et aux rapports. Son rôle principal est la <b>collecte de données</b> sur le terrain pour alimenter la plateforme.</td>
        </tr>
        <tr style="background:#fef9c3;">
          <td><b>Arrondissement de Chefs</b></td>
          <td><span class="badge" style="background:#fef3c7;color:#92400e;">Terrain</span></td>
          <td>Il a accès aux tableaux de bord, à l'onglet <b>Gestion de PDC</b>, aux rapports et au <b>Suivi des PIT</b>. Il représente la commune au niveau de l'arrondissement.</td>
        </tr>
        <tr style="background:#fefce8;">
          <td><b>VUD</b></td>
          <td><span class="badge" style="background:#fef3c7;color:#92400e;">Terrain</span></td>
          <td>Il a accès aux tableaux de bord, à l'onglet <b>Gestion de PDC</b> et aux rapports. Ce profil est dédié au suivi du développement urbain de la commune.</td>
        </tr>
        <tr style="background:#fdf2f8;">
          <td><b>Ministère / Préfecture</b></td>
          <td><span class="badge" style="background:#fce7f3;color:#9d174d;">Tutelle</span></td>
          <td>Il a accès aux tableaux de bord, à l'onglet <b>Gestion de PDC</b>, aux rapports et au <b>Suivi des PIT</b>. Il s'agit d'une instance de tutelle (préfecture ou ministère) qui supervise la commune.</td>
        </tr>
      </tbody>
    </table>

    <p>En résumé, la plateforme SIDSE IBDC compte <b>11 profils utilisateurs</b> répartis en 4 niveaux d'accès. Chaque compte créé se voit attribuer l'un de ces profils, qui détermine ses permissions par défaut.</p>
    <p>Les profils <b>Admin</b> (<i>Super Administrateur</i> et <i>Administrateur</i>) bénéficient d'un accès complet à l'ensemble des modules de la plateforme. <b>Seuls ces deux profils peuvent lancer une nouvelle évaluation de PTA.</b> Le Super Administrateur se distingue en ayant accès en plus à la <b>gestion des comptes utilisateurs</b>.</p>
    <p>Les profils <b>Internes</b> (<i>Administration-Finance</i> et <i>Staff</i>) disposent d'un accès opérationnel centré sur le suivi : tableaux de bord, gestion de PDC et rapports. Le profil <i>Administration-Finance</i> a en plus accès au <b>Suivi financier</b> et aux <b>Statistiques</b>, tandis que le profil <i>Staff</i> et les profils <i>Arrondissement de Chefs</i>, <i>Ministère/Préfecture</i> accèdent en plus au <b>Suivi des PIT</b>.</p>
    <p>Les profils <b>Externes</b> (<i>Partenaire</i>, <i>Partenaire/ONG</i>, <i>Bailleur/Donateur</i>) et <b>Terrain</b> (<i>Agent-Collecteur</i>, <i>Arrondissement de Chefs</i>, <i>VUD</i>) ainsi que le profil <b>Tutelle</b> (<i>Ministère/Préfecture</i>) accèdent aux tableaux de bord décideur, à la gestion de PDC, aux indicateurs et aux rapports en consultation, sans accès aux fonctions de configuration ni d'évaluation.</p>
    <div class="card">
      <b>Important</b><br>
      Quel que soit le profil attribué, un administrateur peut toujours <b>modifier individuellement les permissions de chaque utilisateur</b>, module par module, depuis l'écran « Permissions d'interface » accessible via la gestion des utilisateurs.
    </div>

    <div class="callout">
      <b>Le détail complet</b>
      Le détail module par module de chaque profil (« socle commun » et permissions supplémentaires) est expliqué et illustré dans la section <a href="#permissions-par-profil" style="color:inherit;">Permissions par défaut selon le profil</a>.
    </div>
  </section>

  <section class="block" id="voir-profil">
    <div class="section-kicker">Comptes &amp; accès</div>
    <h2>Voir le profil d'un utilisateur</h2>
    <p class="lede">
      Le profil attribué à chaque compte est directement visible depuis la plateforme, sans avoir à ouvrir la fiche de l'utilisateur.
    </p>

    <ol class="steps">
      <li>
        Accédez à la page <b>« Gestion des utilisateurs »</b> sur la plateforme SIDSE IBDC.
        <span class="hint">Vous ne savez pas comment y accéder ? <a href="#acces-gestion-utilisateurs" style="color:inherit;font-weight:600;">Consultez la section Accéder à l'interface →</a></span>
      </li>
      <li>
        Dans le tableau de liste des utilisateurs, repérez la colonne <b>Profil</b>.
        <span class="hint">Cette colonne affiche, pour chaque compte, le profil qui lui a été attribué (ex. Administrateur, Staff, Partenaire…).</span>
      </li>
    </ol>

    <div class="shot">
      <img src="/shot-01.jpg" alt="Liste des utilisateurs avec la colonne Profil visible">
    </div>
    <p class="shot-caption">La colonne <b>Profil</b> dans le tableau « Gestion des utilisateurs » indique le rôle attribué à chaque compte.</p>

    <div class="callout">
      <b>Modifier le profil</b>
      Pour changer le profil d'un utilisateur existant, utilisez l'icône <b>⇄ Changer le profil</b> dans la colonne Action du tableau. La procédure complète est détaillée dans la section <a href="#changer-profil" style="color:inherit;">Changer le profil d'un utilisateur →</a>
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
    <p>Les permissions sont regroupées en <b>quatre blocs</b>, à savoir : <span class="badge">Gestion du PDC</span> &nbsp;·&nbsp; <span class="badge">ODD &amp; Indicateurs</span> &nbsp;·&nbsp; <span class="badge">Projets Phares</span> &nbsp;·&nbsp; <span class="badge">Paramètres</span>. Chaque bloc regroupe les fonctionnalités d'un module de la plateforme. Le tableau ci-dessous détaille le contenu de chacun.</p>
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
  </section>

  <section class="block" id="acceder-permissions">
    <div class="section-kicker">Permissions</div>
    <h2>Accéder aux permissions d'un utilisateur</h2>
    <p class="lede">
      L'accès aux permissions de chaque utilisateur se fait directement depuis la liste des utilisateurs, en un seul clic, sans avoir à ouvrir la fiche complète du compte.
    </p>
    <ol class="steps">
      <li>
        Accédez à la page <b>« Gestion des utilisateurs »</b> sur la plateforme SIDSE IBDC.
        <span class="hint">Vous ne savez pas comment y accéder ? <a href="#acces-gestion-utilisateurs" style="color:inherit;font-weight:600;">Consultez la section Accéder à l'interface →</a></span>
      </li>
      <li>
        Dans le tableau, repérez la colonne <b>Action</b> sur la ligne de l'utilisateur concerné.
        <span class="hint">La colonne Action contient plusieurs icônes : le <b>bouclier 🛡</b> (premier icône) donne accès aux permissions, suivi des icônes de changement de profil, modification et suppression.</span>
      </li>
      <li>
        Cliquez sur l'icône <b>🛡 Bouclier</b> (premier icône de la colonne Action) pour ouvrir l'écran des permissions de cet utilisateur.
      </li>
    </ol>

    <div class="shot">
      <img src="/shot-43.png" alt="Colonne Action dans la liste des utilisateurs, icône Bouclier pour accéder aux permissions">
    </div>
    <p class="shot-caption">La colonne <b>Action</b> dans le tableau « Gestion des utilisateurs » — l'icône <b>bouclier</b> (premier icône) ouvre directement l'écran des permissions de l'utilisateur.</p>

    <p>
      Une fois l'icône bouclier cliqué, l'écran <b>« Permissions d'interface »</b> de l'utilisateur s'ouvre et affiche l'ensemble de ses droits d'accès, organisés par bloc de fonctionnalités.
    </p>

    <div class="shot">
      <img src="/shot-44.png" alt="Écran des permissions d'interface d'un utilisateur">
    </div>
    <p class="shot-caption">L'écran <b>Permissions d'interface</b> de l'utilisateur sélectionné : les permissions sont regroupées par bloc et peuvent être activées ou désactivées individuellement.</p>

    <div class="callout">
      <b>Que faire ensuite ?</b>
      Pour modifier ou personnaliser les permissions affichées, consultez la section <a href="#modifier-permissions" style="color:inherit;">Modifier les permissions d'un utilisateur →</a>
    </div>
  </section>

  <section class="block" id="permissions-par-profil">
    <div class="section-kicker">Permissions</div>
    <h2>Permissions par défaut selon le profil</h2>
    <p class="lede">
      Sur la plateforme <b>SIDSE IBDC</b>, chacun des <b>11 profils utilisateurs</b> dispose par défaut d'un ensemble prédéfini de permissions d'accès adaptées à son rôle. L'administrateur conserve néanmoins la possibilité d'ajuster ou de personnaliser individuellement ces autorisations pour chaque compte. Le tableau ci-dessous détaille les <b>droits d'accès par défaut</b> associés à chaque profil :
    </p>

    <table>
      <thead>
        <tr>
          <th>Profil</th>
          <th>Gestion du PDC</th>
          <th>ODD &amp; Indicateurs</th>
          <th>Projets Phares</th>
          <th>Paramètres</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><b>Super Administrateur</b></td>
          <td>Tableau de bord, TB décideur, Gestion de PDC, Éléments des Indicateurs, Visualiser les Indicateurs, Rapports, Nouveau PTA, Révision PTA, Suivi des PIT, Nouvelle Évaluation, Recommandations, Suivi des recommandations, Calendrier Budgétaire, Calendrier des Évaluations, Structures Municipales, Partenaires, Source de financement, Suivi financier, Statistiques <span class="badge" style="background:#ede9fe;color:#5b21b6;">19/19</span></td>
          <td>Liste des ODD, Liste des indicateurs, Faire une collecte, Paramètres ODD <span class="badge" style="background:#ede9fe;color:#5b21b6;">4/4</span></td>
          <td>Dashboard Projets, Projets, Secteurs, Collecte de données, Contrôle qualité <span class="badge" style="background:#ede9fe;color:#5b21b6;">5/5</span></td>
          <td><span class="badge" style="background:#d1fae5;color:#065f46;">Gestion des utilisateurs</span></td>
        </tr>
        <tr>
          <td><b>Administrateur</b></td>
          <td>Identique au Super Administrateur — 19/19 permissions <span class="badge" style="background:#ede9fe;color:#5b21b6;">19/19</span></td>
          <td>Identique au Super Administrateur <span class="badge" style="background:#ede9fe;color:#5b21b6;">4/4</span></td>
          <td>Identique au Super Administrateur <span class="badge" style="background:#ede9fe;color:#5b21b6;">5/5</span></td>
          <td><i>Limité — sans Gestion des utilisateurs</i></td>
        </tr>
        <tr>
          <td><b>Partenaire</b></td>
          <td>TB décideur, Gestion de PDC, Visualiser les Indicateurs, Rapports <span class="badge" style="background:#dbeafe;color:#1d4ed8;">4/19</span></td>
          <td>Liste des indicateurs <span class="badge" style="background:#dbeafe;color:#1d4ed8;">1/4</span></td>
          <td>Dashboard Projets <span class="badge" style="background:#dbeafe;color:#1d4ed8;">1/5</span></td>
          <td>Aucun accès</td>
        </tr>
        <tr>
          <td><b>Partenaire / ONG</b></td>
          <td>Tableau de bord, TB décideur, Gestion de PDC, Visualiser les Indicateurs, Rapports <span class="badge" style="background:#dbeafe;color:#1d4ed8;">5/19</span></td>
          <td>Liste des indicateurs <span class="badge" style="background:#dbeafe;color:#1d4ed8;">1/4</span></td>
          <td>Dashboard Projets <span class="badge" style="background:#dbeafe;color:#1d4ed8;">1/5</span></td>
          <td>Aucun accès</td>
        </tr>
        <tr>
          <td><b>Agent‑Collecteur</b></td>
          <td>Tableau de bord, TB décideur, Gestion de PDC, Visualiser les Indicateurs, Rapports <span class="badge" style="background:#dbeafe;color:#1d4ed8;">5/19</span></td>
          <td>Liste des indicateurs <span class="badge" style="background:#dbeafe;color:#1d4ed8;">1/4</span></td>
          <td>Dashboard Projets <span class="badge" style="background:#dbeafe;color:#1d4ed8;">1/5</span></td>
          <td>Aucun accès</td>
        </tr>
        <tr>
          <td><b>VUD</b></td>
          <td>Tableau de bord, TB décideur, Gestion de PDC, Visualiser les Indicateurs, Rapports <span class="badge" style="background:#dbeafe;color:#1d4ed8;">5/19</span></td>
          <td>Liste des indicateurs <span class="badge" style="background:#dbeafe;color:#1d4ed8;">1/4</span></td>
          <td>Dashboard Projets <span class="badge" style="background:#dbeafe;color:#1d4ed8;">1/5</span></td>
          <td>Aucun accès</td>
        </tr>
        <tr>
          <td><b>Ministère / Préfecture</b></td>
          <td>Tableau de bord, TB décideur, Gestion de PDC, Visualiser les Indicateurs, Rapports, Suivi des PIT <span class="badge" style="background:#dbeafe;color:#1d4ed8;">6/19</span></td>
          <td>Liste des indicateurs <span class="badge" style="background:#dbeafe;color:#1d4ed8;">1/4</span></td>
          <td>Dashboard Projets <span class="badge" style="background:#dbeafe;color:#1d4ed8;">1/5</span></td>
          <td>Aucun accès</td>
        </tr>
        <tr>
          <td><b>Staff</b></td>
          <td>Tableau de bord, TB décideur, Gestion de PDC, Visualiser les Indicateurs, Rapports, Suivi des PIT <span class="badge" style="background:#dbeafe;color:#1d4ed8;">6/19</span></td>
          <td>Liste des indicateurs <span class="badge" style="background:#dbeafe;color:#1d4ed8;">1/4</span></td>
          <td>Dashboard Projets <span class="badge" style="background:#dbeafe;color:#1d4ed8;">1/5</span></td>
          <td>Aucun accès</td>
        </tr>
        <tr>
          <td><b>Arrondissement de Chefs</b></td>
          <td>Tableau de bord, TB décideur, Gestion de PDC, Visualiser les Indicateurs, Rapports, Suivi des PIT <span class="badge" style="background:#dbeafe;color:#1d4ed8;">6/19</span></td>
          <td>Liste des indicateurs <span class="badge" style="background:#dbeafe;color:#1d4ed8;">1/4</span></td>
          <td>Dashboard Projets <span class="badge" style="background:#dbeafe;color:#1d4ed8;">1/5</span></td>
          <td>Aucun accès</td>
        </tr>
        <tr>
          <td><b>Bailleur / Donateur</b></td>
          <td>Tableau de bord, TB décideur, Gestion de PDC, Visualiser les Indicateurs, Rapports <span class="badge" style="background:#dbeafe;color:#1d4ed8;">5/19</span></td>
          <td>Liste des indicateurs <span class="badge" style="background:#dbeafe;color:#1d4ed8;">1/4</span></td>
          <td>Dashboard Projets <span class="badge" style="background:#dbeafe;color:#1d4ed8;">1/5</span></td>
          <td>Aucun accès</td>
        </tr>
        <tr>
          <td><b>Administration‑Finance</b></td>
          <td>Tableau de bord, TB décideur, Gestion de PDC, Visualiser les Indicateurs, Rapports, Suivi financier, Statistiques <span class="badge" style="background:#dbeafe;color:#1d4ed8;">7/19</span></td>
          <td>Liste des indicateurs <span class="badge" style="background:#dbeafe;color:#1d4ed8;">1/4</span></td>
          <td>Dashboard Projets <span class="badge" style="background:#dbeafe;color:#1d4ed8;">1/5</span></td>
          <td>Aucun accès</td>
        </tr>
      </tbody>
    </table>

    <p style="margin-top:16px;">
      En observant les réglages « Par défaut » de plusieurs comptes, on retrouve un <b>socle commun</b> de permissions accordé à la majorité des profils, auquel s'ajoutent des permissions spécifiques pour certains d'entre eux :
    </p>

    <div class="callout">
      <b>Le socle commun (partagé par la plupart des profils)</b>
      <b>Gestion du PDC :</b> Tableau de bord, Tableau de bord décideur, Gestion de PDC, Visualiser les Indicateurs, Rapports &nbsp;·&nbsp; <b>ODD &amp; Indicateurs :</b> Liste des indicateurs &nbsp;·&nbsp; <b>Projets Phares :</b> Dashboard Projets.
    </div>
  </section>

  <section class="block" id="gestion-utilisateurs">
    <div class="section-kicker">Administration</div>
    <h2>Gestion des utilisateurs</h2>
    <p class="lede">
      C'est depuis cet écran que l'administrateur consulte, crée, modifie et gère les comptes de la plateforme.
    </p>

    <div class="shot">
      <img src="/shot-46.png" alt="Interface de Gestion des utilisateurs de la plateforme SIDSE IBDC">
    </div>
    <p class="shot-caption">L'interface <b>Gestion des utilisateurs</b> : tableau listant tous les comptes de la plateforme avec leurs informations et les actions disponibles.</p>

    <div class="callout">
      <b>Fonctionnalités de la gestion des utilisateurs</b>
      Depuis cet espace, vous pouvez :
      <ul style="margin-top:8px;padding-left:20px;">
        <li><a href="#acces-gestion-utilisateurs" style="color:inherit;font-weight:600;">Accéder à l'interface →</a> : ouvrir la gestion des utilisateurs depuis le menu des modules.</li>
        <li><a href="#rechercher" style="color:inherit;font-weight:600;">Rechercher et filtrer →</a> : retrouver un compte par nom, email ou profil.</li>
        <li><a href="#creer" style="color:inherit;font-weight:600;">Créer un utilisateur →</a> : ajouter un nouveau compte après vérification de l'email.</li>
        <li><a href="#changer-profil" style="color:inherit;font-weight:600;">Changer le profil →</a> : modifier le rôle attribué à un compte.</li>
        <li><a href="#modifier-utilisateur" style="color:inherit;font-weight:600;">Modifier un utilisateur →</a> : éditer les coordonnées et paramètres d'un compte.</li>
        <li><a href="#supprimer-utilisateur" style="color:inherit;font-weight:600;">Supprimer un utilisateur →</a> : retirer définitivement un compte de la plateforme.</li>
      </ul>
    </div>
  </section>

  <section class="block" id="acces-gestion-utilisateurs">
    <div class="section-kicker">Gestion des utilisateurs</div>
    <h2>Accéder à l'interface de Gestion des utilisateurs</h2>
    <p class="lede">
      L'interface de gestion des utilisateurs est accessible depuis l'interface principale de la plateforme SIDSE IBDC, en passant par le menu de sélection des modules.
      <span class="hint">Vous voulez en savoir plus sur l'interface principale ? <a href="#pdc-acces" style="color:inherit;font-weight:600;">Consulter la section Accéder aux modules de la plateforme →</a></span>
    </p>
    <ol class="steps">
      <li>
        Depuis l'interface principale de la plateforme, repérez le <b>champ de sélection du module</b> en haut à droite de la page (affichant par défaut « PDC »).
      </li>
      <li>
        Cliquez sur ce champ pour ouvrir le <b>menu déroulant</b> des modules disponibles.
        <span class="hint">Le menu affiche les modules : PDC, ODD, PROJET, PARAMÈTRE, RECOMMANDATION.</span>
      </li>
      <li>
        Sélectionnez <b>« PARAMÈTRE »</b> dans la liste.
      </li>
    </ol>

    <div class="shot">
      <img src="/shot-45.png" alt="Menu déroulant de sélection du module avec l'option PARAMÈTRE">
    </div>
    <p class="shot-caption">Cliquer sur le champ <b>PDC</b> en haut à droite ouvre le menu des modules — sélectionnez <b>PARAMÈTRE</b> pour accéder à la gestion des utilisateurs.</p>

    <p>
      Vous arrivez alors sur l'interface <b>Gestion des utilisateurs</b>, depuis laquelle vous pouvez créer, modifier, supprimer et gérer l'ensemble des comptes utilisateurs de la plateforme SIDSE IBDC.
    </p>

    <div class="shot">
      <img src="/shot-46.png" alt="Interface de Gestion des utilisateurs de la plateforme SIDSE IBDC">
    </div>
    <p class="shot-caption">L'interface <b>Gestion des utilisateurs</b> : tableau listant tous les comptes de la plateforme avec leurs informations et les actions disponibles.</p>

    <div class="callout">
      <b>Ce que vous pouvez faire depuis cet écran</b>
      Consulter la liste des comptes, rechercher ou filtrer les utilisateurs, créer un nouveau compte, changer le profil d'un utilisateur ou modifier ses permissions individuellement.
    </div>
  </section>



  <section class="block" id="rechercher">
    <div class="section-kicker">Gestion des utilisateurs</div>
    <h2>Rechercher ou filtrer un utilisateur</h2>
    <p class="lede">
      Pour retrouver rapidement un compte parmi la liste des utilisateurs, vous disposez de deux outils complémentaires situés juste au-dessus du tableau : la recherche textuelle et le filtre par profil.
    </p>

    <!-- 1. Recherche textuelle -->
    <h3 class="subhead"><span class="num">1</span>Rechercher par nom, prénom ou adresse email</h3>
    <p>
      Le champ de recherche textuelle permet d'effectuer une recherche instantanée et en direct sur l'identité des comptes.
    </p>
    <ol class="steps">
      <li>
        Accédez à la page <b>« Gestion des utilisateurs »</b> sur la plateforme SIDSE IBDC.
        <span class="hint">Vous ne savez pas comment y accéder ? <a href="#acces-gestion-utilisateurs" style="color:inherit;font-weight:600;">Consultez la section Accéder à l'interface →</a></span>
      </li>
      <li>
        Repérez la barre de saisie <b>« Recherche : Nom, prénom ou email… »</b> située en haut à gauche du tableau.
      </li>
      <li>
        Tapez directement le nom, le prénom ou l'email de l'utilisateur recherché. Le tableau filtre automatiquement les résultats en temps réel à mesure que vous écrivez.
      </li>
    </ol>

    <div class="shot">
      <img src="/shot-50.png" alt="Barre de recherche textuelle par nom, prénom ou email">
    </div>
    <p class="shot-caption">Le champ <b>Recherche</b> permet de retrouver instantanément un compte en saisissant son nom, prénom ou adresse email.</p>

    <!-- 2. Filtre par profil -->
    <h3 class="subhead"><span class="num">2</span>Filtrer la liste par profil d'utilisateur</h3>
    <p>
      Le menu déroulant des profils permet d'isoler en un clic l'ensemble des utilisateurs partageant un même rôle (ex. afficher uniquement les comptes <i>Staff</i>, <i>Administrateur</i>, <i>Partenaire</i>, etc.).
    </p>
    <ol class="steps">
      <li>
        À droite de la barre de recherche, repérez le champ <b>« Profil »</b> (affichant par défaut <i>« Tous les profils »</i>).
      </li>
      <li>
        Cliquez sur le champ pour ouvrir la <b>liste déroulante</b> des profils disponibles (Super Administrateur, Administrateur, Staff, Partenaire, Agent-collecteur…).
      </li>
      <li>
        Sélectionnez le profil souhaité (par exemple <b>« STAFF »</b>).
      </li>
      <li>
        Le tableau n'affiche alors plus que les utilisateurs ayant ce rôle, et le compteur à droite indique le nombre exact de comptes trouvés (ex. <i>4 utilisateurs</i>).
      </li>
      <li>
        Pour réinitialiser le filtre et réafficher tous les profils, cliquez sur la petite croix <b>✖</b> dans le champ ou choisissez à nouveau <i>« Tous les profils »</i>.
      </li>
    </ol>

    <div class="shot">
      <img src="/shot-51.png" alt="Filtrage des utilisateurs par profil dans la liste déroulante">
    </div>
    <p class="shot-caption">Menu déroulant <b>Profil</b> : sélection d'un rôle (ici <b>STAFF</b>) pour afficher uniquement les utilisateurs correspondants.</p>

    <div class="callout">
      <b>Astuce : Combiner recherche et filtre</b>
      Vous pouvez utiliser simultanément la recherche par nom et le filtre par profil pour affiner votre sélection (par exemple : rechercher un nom spécifique au sein du groupe <i>Staff</i>).
    </div>
  </section>

  <section class="block" id="creer">
    <div class="section-kicker">Gestion des utilisateurs</div>
    <h2>Créer un utilisateur</h2>
    <p class="lede">
      La création d'un compte sur la plateforme suit un processus structuré en 3 étapes : ouverture de la fenêtre, vérification de l'adresse email, puis saisie des informations selon le résultat obtenu.
    </p>

    <!-- ÉTAPE 1 -->
    <h3 class="subhead"><span class="num">1</span>Ouvrir la fenêtre de création</h3>
    <ol class="steps">
      <li>
        Rendez-vous sur la page <b>« Gestion des utilisateurs »</b>.
        <span class="hint">Vous ne savez pas comment y accéder ? <a href="#acces-gestion-utilisateurs" style="color:inherit;font-weight:600;">Consultez la section Accéder à l'interface →</a></span>
      </li>
      <li>Cliquez sur le bouton <b>« + Créer un utilisateur »</b> situé en haut à droite au-dessus du tableau.</li>
    </ol>
    <div class="shot">
      <img src="/shot-47.png" alt="Bouton Créer un utilisateur en haut à droite de l'écran Gestion des utilisateurs">
    </div>
    <p class="shot-caption">Emplacement du bouton <b>« + Créer un utilisateur »</b> en haut à droite du tableau de gestion.</p>

    <!-- ÉTAPE 2 -->
    <h3 class="subhead"><span class="num">2</span>Vérifier l'adresse email</h3>
    <ol class="steps">
      <li>Dans la fenêtre qui s'affiche, saisissez l'<b>adresse email</b> de la personne.</li>
      <li>Cliquez sur le bouton <b>« Vérifier »</b> pour lancer la recherche d'antériorité.</li>
    </ol>
    <div class="shot">
      <img src="/shot-08.jpg" alt="Fenêtre de vérification de l'email avant création d'un utilisateur">
    </div>
    <p class="shot-caption">Fenêtre de vérification : saisie de l'adresse email et validation par le bouton « Vérifier ».</p>

    <div class="callout">
      <b>Résultat de la vérification préalable</b>
      La plateforme vérifie instantanément si cette adresse email existe déjà :
      <ul style="margin-top:6px;padding-left:18px;">
        <li><b>Cas 1 (Email disponible) :</b> le formulaire de création s'ouvre pour configurer le compte.</li>
        <li><b>Cas 2 (Email déjà utilisé) :</b> un message indique que l'utilisateur est déjà associé à une institution.</li>
      </ul>
    </div>

    <!-- ÉTAPE 3 -->
    <h3 class="subhead"><span class="num">3</span>Finaliser selon le résultat de la vérification</h3>

    <!-- CAS 1 -->
    <div class="card" style="margin-top:1.25rem;background:transparent;">
      <h4 style="font-family:var(--font-display);font-size:1.02rem;font-weight:700;margin:0 0 0.6rem;color:var(--color-foreground);">
        <span class="badge" style="background:#ede9fe;color:#5b21b6;margin-right:6px;">Cas 1</span> Aucun compte trouvé : Renseigner les informations du compte
      </h4>
      <p style="font-size:0.92rem;color:var(--color-muted-foreground);margin-bottom:1.1rem;">
        L'adresse email est disponible. Vous pouvez renseigner les informations du nouvel utilisateur en deux volets :
      </p>

      <p style="font-weight:600;font-size:0.95rem;margin-bottom:0.4rem;">Partie 1 — Identité et Coordonnées</p>
      <ol class="steps">
        <li>Renseignez le <b>Nom</b> et les <b>Prénoms</b> de la personne.</li>
        <li>Renseignez son numéro de <b>Téléphone</b> (l'adresse email est déjà automatiquement renseignée).</li>
      </ol>
      <div class="shot">
        <img src="/shot-09.jpg" alt="Formulaire d'identité pour créer un nouvel utilisateur">
      </div>
      <p class="shot-caption">Volet 1 du formulaire : saisie du nom, prénoms et numéro de téléphone.</p>

      <p style="font-weight:600;font-size:0.95rem;margin-top:1.5rem;margin-bottom:0.4rem;">Partie 2 — Compte, Accès et Mot de passe</p>
      <ol class="steps">
        <li>
          Sélectionnez le <b>Profil</b> de l'utilisateur (ex. Administrateur, Staff, Partenaire…) et la <b>Langue</b> de l'interface.
          <span class="hint">Pour en savoir plus sur les rôles et permissions, <a href="#profils" style="color:inherit;font-weight:600;">consultez la section Profils utilisateurs →</a></span>
        </li>
        <li>Définissez un <b>Mot de passe</b> sécurisé et confirmez-le dans le champ dédié.</li>
        <li>Ajoutez éventuellement une <b>Photo de profil</b> (facultatif).</li>
        <li>Cliquez sur le bouton <b>« Créer l'utilisateur »</b> pour finaliser l'inscription (ou sur <b>« Annuler »</b> pour abandonner).</li>
      </ol>
      <div class="shot">
        <img src="/shot-10.jpg" alt="Formulaire compte et accès pour créer un nouvel utilisateur">
      </div>
      <p class="shot-caption">Volet 2 du formulaire : choix du profil, mot de passe et confirmation de la création.</p>
    </div>

    <!-- CAS 2 -->
    <div class="card" style="margin-top:1.5rem;background:transparent;">
      <h4 style="font-family:var(--font-display);font-size:1.02rem;font-weight:700;margin:0 0 0.6rem;color:var(--color-foreground);">
        <span class="badge" style="background:#fef3c7;color:#92400e;margin-right:6px;">Cas 2</span> Compte déjà existant : Utilisateur déjà associé
      </h4>
      <p style="font-size:0.92rem;color:var(--color-muted-foreground);margin-bottom:1.1rem;">
        Si l'adresse email appartient déjà à un compte sur la plateforme :
      </p>
      <ol class="steps">
        <li>La fenêtre affiche le message d'avertissement <b>« Cet utilisateur est déjà associé à une institution »</b> avec les informations du compte trouvé.</li>
        <li>Aucune nouvelle inscription n'est autorisée pour cette adresse email.</li>
        <li>Cliquez sur le bouton <b>« Annuler »</b> pour fermer la fenêtre.</li>
      </ol>
      <div class="shot">
        <img src="/shot-11.jpg" alt="Fenêtre indiquant qu'un utilisateur existe déjà pour cet email">
      </div>
      <p class="shot-caption">Message d'alerte : l'utilisateur existe déjà, la création ne peut pas aboutir.</p>
    </div>
  </section>

  <section class="block" id="changer-profil">
    <div class="section-kicker">Gestion des utilisateurs</div>
    <h2>Changer le profil d'un utilisateur</h2>
    <p class="lede">
      Le rôle attribué à un compte peut être modifié à tout moment par l'administrateur directement depuis la liste des utilisateurs, sans avoir à recréer le compte.
    </p>

    <ol class="steps">
      <li>
        Accédez à la page <b>« Gestion des utilisateurs »</b> sur la plateforme SIDSE IBDC.
        <span class="hint">Vous ne savez pas comment y accéder ? <a href="#acces-gestion-utilisateurs" style="color:inherit;font-weight:600;">Consultez la section Accéder à l'interface →</a></span>
      </li>
      <li>
        Dans le tableau, repérez la colonne <b>Action</b> sur la ligne de l'utilisateur dont vous souhaitez modifier le rôle.
        <span class="hint">La colonne Action propose plusieurs boutons : repérez le <b>deuxième icône</b> (en forme de silhouette / personne) dédié au changement de profil.</span>
      </li>
      <li>
        Cliquez sur le <b>deuxième icône</b> de la colonne Action pour ouvrir la boîte de dialogue de modification du profil.
      </li>
    </ol>

    <div class="shot">
      <img src="/shot-48.png" alt="Colonne Action avec le bouton de changement de profil (deuxième icône)">
    </div>
    <p class="shot-caption">La colonne <b>Action</b> dans le tableau « Gestion des utilisateurs » — le <b>deuxième bouton</b> (icône silhouette) permet d'ouvrir la fenêtre de changement de profil.</p>

    <p>
      Une fois le bouton cliqué, la fenêtre <b>« Changer le profil »</b> s'affiche à l'écran avec l'identité du compte sélectionné (nom, prénoms et adresse email).
    </p>

    <div class="shot">
      <img src="/shot-49.png" alt="Fenêtre de sélection du nouveau profil pour l'utilisateur">
    </div>
    <p class="shot-caption">Fenêtre <b>« Changer le profil »</b> : choix du nouveau rôle à attribuer dans le menu déroulant.</p>

    <ol class="steps" start="4">
      <li>
        Dans le champ <b>« Nouveau profil »</b>, cliquez pour dérouler la liste et sélectionnez le profil souhaité (ex. <i>Administrateur</i>, <i>Staff</i>, <i>Partenaire</i>, <i>Agent-collecteur</i>…).
      </li>
      <li>
        Cliquez sur <b>« Enregistrer »</b> pour valider et appliquer immédiatement le nouveau rôle, ou sur <b>« Annuler »</b> pour refermer la fenêtre sans modifier le profil.
      </li>
    </ol>

    <div class="callout">
      <b>Impact sur les permissions</b>
      Le changement de profil attribue automatiquement au compte les permissions par défaut associées à son nouveau profil. Vous pouvez ensuite personnaliser individuellement ses autorisations si nécessaire (voir <a href="#acceder-permissions" style="color:inherit;font-weight:600;">Accéder aux permissions →</a>).
    </div>
  </section>

  <section class="block" id="modifier-utilisateur">
    <div class="section-kicker">Gestion des utilisateurs</div>
    <h2>Modifier les informations d'un utilisateur</h2>
    <p class="lede">
      L'administrateur peut à tout moment modifier les coordonnées, le mot de passe ou les paramètres d'un compte utilisateur directement depuis la liste des utilisateurs.
    </p>

    <ol class="steps">
      <li>
        Accédez à la page <b>« Gestion des utilisateurs »</b> sur la plateforme SIDSE IBDC.
        <span class="hint">Vous ne savez pas comment y accéder ? <a href="#acces-gestion-utilisateurs" style="color:inherit;font-weight:600;">Consultez la section Accéder à l'interface →</a></span>
      </li>
      <li>
        Dans le tableau, repérez la colonne <b>Action</b> sur la ligne de l'utilisateur à modifier.
        <span class="hint">Le bouton de modification est le <b>troisième icône</b> (en forme de crayon vert ✎).</span>
      </li>
      <li>
        Cliquez sur le <b>troisième icône</b> de la colonne Action (icône crayon) pour ouvrir la fenêtre de modification.
      </li>
    </ol>

    <div class="shot">
      <img src="/shot-54.png" alt="Colonne Action avec le bouton de modification (troisième icône, crayon)">
    </div>
    <p class="shot-caption">La colonne <b>Action</b> dans le tableau « Gestion des utilisateurs » — le <b>troisième bouton</b> (crayon ✎) permet d'ouvrir le formulaire de modification du compte.</p>

    <p>
      La fenêtre <b>« Modifier l'utilisateur »</b> s'ouvre, pré-remplie avec l'ensemble des données actuelles du compte.
    </p>

    <div class="shot">
      <img src="/shot-55.png" alt="Fenêtre Modifier l'utilisateur avec tous les champs pré-remplis">
    </div>
    <p class="shot-caption">Fenêtre <b>« Modifier l'utilisateur »</b> : formulaire complet permettant d'ajuster l'identité, le contact, le rôle, la langue et le mot de passe.</p>

    <ol class="steps" start="4">
      <li>
        Modifiez les champs souhaités selon vos besoins :
        <ul style="margin-top:6px;padding-left:18px;">
          <li><b>Identité :</b> Nom et Prénoms de l'utilisateur.</li>
          <li><b>Contact :</b> Numéro de Téléphone (l'adresse email est également modifiable).</li>
          <li><b>Compte &amp; Accès :</b> Profil attribué, Langue de l'interface, nouveau Mot de passe ou Photo de profil.</li>
        </ul>
      </li>
      <li>
        Cliquez sur le bouton <b>« Enregistrer les modifications »</b> pour valider et enregistrer les changements, ou sur <b>« Annuler »</b> pour fermer sans modifier.
      </li>
    </ol>

    <div class="callout">
      <b>Mot de passe &amp; sécurité</b>
      Si vous ne souhaitez pas modifier le mot de passe de l'utilisateur, laissez simplement les champs <i>Mot de passe</i> et <i>Confirmer le mot de passe</i> vides ou inchangés.
    </div>
  </section>

  <section class="block" id="supprimer-utilisateur">
    <div class="section-kicker">Gestion des utilisateurs</div>
    <h2>Supprimer un utilisateur</h2>
    <p class="lede">
      La suppression d'un compte utilisateur retire définitivement l'accès du compte à la plateforme SIDSE IBDC et efface ses données associées.
    </p>

    <ol class="steps">
      <li>
        Accédez à la page <b>« Gestion des utilisateurs »</b> sur la plateforme SIDSE IBDC.
        <span class="hint">Vous ne savez pas comment y accéder ? <a href="#acces-gestion-utilisateurs" style="color:inherit;font-weight:600;">Consultez la section Accéder à l'interface →</a></span>
      </li>
      <li>
        Dans le tableau, repérez la colonne <b>Action</b> sur la ligne de l'utilisateur à supprimer.
        <span class="hint">Le bouton de suppression est le <b>quatrième icône</b> (en forme de corbeille rouge 🗑).</span>
      </li>
      <li>
        Cliquez sur le <b>quatrième icône</b> de la colonne Action (icône corbeille rouge) pour initier la suppression.
      </li>
    </ol>

    <div class="shot">
      <img src="/shot-52.PNG" alt="Colonne Action avec le bouton de suppression (quatrième icône, corbeille rouge)">
    </div>
    <p class="shot-caption">La colonne <b>Action</b> dans le tableau « Gestion des utilisateurs » — le <b>quatrième bouton</b> (corbeille rouge 🗑) permet de déclencher la suppression du compte.</p>

    <p>
      Une fenêtre de confirmation sécurisée s'affiche à l'écran, vous rappelant l'identité de l'utilisateur concerné et le caractère définitif de l'opération.
    </p>

    <div class="shot">
      <img src="/shot-53.png" alt="Fenêtre de confirmation de suppression d'un utilisateur">
    </div>
    <p class="shot-caption">Fenêtre de confirmation : rappel de l'identité du compte et avertissement rouge sur le caractère irréversible de l'action.</p>

    <ol class="steps" start="4">
      <li>
        Vérifiez attentivement le nom et l'adresse email affichés pour vous assurer qu'il s'agit bien du compte que vous souhaitez supprimer.
      </li>
      <li>
        Cliquez sur le bouton rouge <b>« Supprimer »</b> pour confirmer la suppression définitive, ou sur <b>« Annuler »</b> pour abandonner l'opération en toute sécurité.
      </li>
    </ol>

    <div class="callout todo">
      <b>Attention — Action irréversible</b>
      La suppression d'un compte utilisateur est immédiate et définitive. Assurez-vous qu'aucun traitement ou processus en cours ne nécessite les accès de ce compte avant de valider la suppression.
    </div>
  </section>

  <section class="block" id="pdc-acces">
    <div class="section-kicker">Module PDC</div>
    <h2>Accéder aux modules de la plateforme</h2>
    <p class="lede">
      Après vous être authentifié sur la plateforme, la page d'accueil de l'institution (ici la commune de Glazoué) présente l'ensemble des <b>modules</b> disponibles : PDC, ODD, Projet Phare et Gestion des paramètres. C'est le point d'entrée pour ouvrir et piloter le module du Plan de Développement Communal.
      <span class="hint">Vous n'êtes pas encore connecté ? <a href="#connexion" style="color:inherit;font-weight:600;">Consultez la section Connexion à la plateforme →</a></span>
    </p>

    <!-- Étape 1 : Sélection du module -->
    <h3 class="subhead"><span class="num">1</span>Sélectionner le module PDC</h3>
    <ol class="steps">
      <li>Depuis l'espace d'accueil de la plateforme, repérez la carte <b>« Plan de Développement Communal (PDC) »</b>.</li>
      <li>Cliquez sur le bouton <b>« Accéder au module »</b> sous la carte (ou sélectionnez <b>« PDC »</b> dans le sélecteur en haut à droite).</li>
    </ol>

    <div class="shot">
      <img src="/shot-13.jpg" alt="Écran de sélection des modules de la plateforme">
    </div>
    <p class="shot-caption">Espace d'accueil : choix du module à ouvrir (PDC, ODD, Projet Phare, Paramètres).</p>

    <!-- Étape 2 : Interface principale du module PDC -->
    <h3 class="subhead"><span class="num">2</span>L'interface de travail et le menu du module PDC</h3>
    <p>
      Dès que vous accédez au module PDC, l'interface principale s'ouvre par défaut sur l'écran <b>Gestion des PDC</b>, et le menu latéral de gauche se déploie avec l'ensemble des outils de pilotage :
    </p>

    <div class="shot">
      <img src="/shot-56.jpeg" alt="Interface principale du module PDC avec menu latéral et écran de gestion des PDC">
    </div>
    <p class="shot-caption">Interface principale du module <b>PDC</b> : menu de navigation latéral à gauche et tableau de bord de gestion des PDC au centre.</p>

    <div class="callout">
      <b>Basculer d'un module à un autre</b>
      Vous pouvez à tout moment changer de module sans repasser par la page d'accueil en cliquant sur le <b>sélecteur de module</b> situé en haut à droite de l'en-tête (affichant « PDC », « PARAMÈTRE », « ODD »…).
    </div>
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
      Ce hub regroupe les outils permettant de définir, planifier et suivre les indicateurs de performance d'un PDC.
    </p>
    <div class="shot">
      <img src="/shot-17.jpg" alt="Hub Éléments des Indicateurs">
    </div>
    <p class="shot-caption">Trois modules accessibles : Gestion, Planification et Collecte de données.</p>

    <div class="callout">
      <b>Modules disponibles dans cette rubrique</b>
      <ul style="margin-top:8px;padding-left:20px;">
        <li><a href="#pdc-indicateurs-gestion" style="color:inherit;font-weight:600;">Gestion des indicateurs →</a> : créer, modifier et supprimer les indicateurs de performance.</li>
        <li><a href="#pdc-indicateurs-planification" style="color:inherit;font-weight:600;">Planification des indicateurs →</a> : définir les valeurs cibles annuelles.</li>
        <li><a href="#pdc-indicateurs-collecte" style="color:inherit;font-weight:600;">Collecte de données →</a> : saisir, corriger et valider les données terrain.</li>
        <li><a href="#pdc-indicateurs-visualiser" style="color:inherit;font-weight:600;">Visualiser les indicateurs →</a> : analyse graphique et évolution des indicateurs.</li>
      </ul>
    </div>
  </section>

  <section class="block" id="pdc-indicateurs-gestion">
    <div class="section-kicker">Éléments des Indicateurs</div>
    <h2>Gestion des indicateurs</h2>
    <p class="lede">
      Créez, modifiez et configurez l'ensemble des indicateurs de performance rattachés aux activités du PDC et aux Objectifs de Développement Durable (ODD).
    </p>
    <div class="shot">
      <img src="/shot-18.jpg" alt="Écran de gestion des indicateurs">
    </div>
    <p class="shot-caption">Écran de gestion des indicateurs : liste, filtres de recherche et création.</p>
    <ol class="steps">
      <li>Utilisez les filtres <b>Recherche, PDC, Activité, Statut, Type proxy, ODD, Cible ODD</b> pour retrouver un indicateur précis, puis cliquez sur <b>« Rechercher »</b>.</li>
      <li>Cliquez sur <b>« + Nouvel Indicateur »</b> pour créer un nouvel indicateur.</li>
      <li>Le tableau affiche : ID, PDC, Activité, Indicateur, Valeur de référence, Valeur cible, Date référence, Date cible, Statut.</li>
    </ol>
  </section>

  <section class="block" id="pdc-indicateurs-planification">
    <div class="section-kicker">Éléments des Indicateurs</div>
    <h2>Planification des indicateurs</h2>
    <p class="lede">
      Définissez les valeurs cibles annuelles pour chaque indicateur du PDC afin de mesurer les écarts lors des évaluations périodiques.
    </p>
    <div class="shot">
      <img src="/shot-19.jpg" alt="Écran de planification des indicateurs">
    </div>
    <p class="shot-caption">Écran de planification : saisie des valeurs cibles annuelles par indicateur.</p>
    <ol class="steps">
      <li>Filtrez par <b>PDC, Activité, Indicateur, Année</b>, puis cliquez sur <b>« Rechercher »</b>.</li>
      <li>Cliquez sur <b>« + Nouvelle Planification »</b> pour définir une nouvelle valeur cible annuelle.</li>
      <li>Le tableau affiche : ID, Indicateur, Valeur cible, Année, Statut.</li>
    </ol>
  </section>

  <section class="block" id="pdc-indicateurs-collecte">
    <div class="section-kicker">Éléments des Indicateurs</div>
    <h2>Collecte de données des indicateurs</h2>
    <p class="lede">
      Gérez le cycle complet de collecte des données terrain : saisie de nouvelles valeurs, traitement des données rejetées et validation par les superviseurs.
    </p>
    <div class="shot">
      <img src="/shot-20.jpg" alt="Hub Collecte de données des indicateurs">
    </div>
    <p class="shot-caption">Hub Collecte de données : accès à la nouvelle collecte, aux données rejetées et à la validation.</p>

    <ol class="steps">
      <li><b>Nouvelle collection :</b> saisir de nouvelles données d'indicateurs, avec statut soumettre/valider.</li>
      <li><b>Données rejetées :</b> gérer les données rejetées, avec possibilité de les corriger et de les soumettre à nouveau.</li>
      <li><b>Validation :</b> valider ou rejeter les données soumises par les agents collecteurs.</li>
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
  </section>

  <section class="block" id="pdc-indicateurs-visualiser">
    <div class="section-kicker">Éléments des Indicateurs</div>
    <h2>Visualiser les indicateurs</h2>
    <p class="lede">
      Consultez l'analyse graphique et le niveau d'atteinte des cibles pour chaque indicateur de performance de la commune.
    </p>
    <div class="shot">
      <img src="/shot-24.jpg" alt="Écran de visualisation des indicateurs">
    </div>
    <p class="shot-caption">Analyse graphique des indicateurs d'un PDC.</p>
    <ol class="steps">
      <li>Choisissez un <b>PDC</b> dans la liste déroulante.</li>
      <li>Filtrez éventuellement par <b>Année</b>.</li>
      <li>La liste des indicateurs disponibles pour ce PDC s'affiche ; cliquez sur un indicateur pour afficher sa courbe et son graphique d'évolution.</li>
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

    <div class="callout">
      <b>Rubriques de gestion Structure &amp; Finance</b>
      <ul style="margin-top:8px;padding-left:20px;">
        <li><a href="#sf-structures" style="color:inherit;font-weight:600;">Structures municipales →</a> : gérer les directions et services de la mairie.</li>
        <li><a href="#sf-partenaires" style="color:inherit;font-weight:600;">Partenaires →</a> : répertorier les ONG, bailleurs et partenaires institutionnels.</li>
        <li><a href="#sf-sources" style="color:inherit;font-weight:600;">Sources de financement →</a> : configurer les origines des fonds alloués aux projets.</li>
      </ul>
    </div>
  </section>

  <section class="block" id="sf-structures">
    <div class="section-kicker">Structure &amp; Finance</div>
    <h2>Structures municipales</h2>
    <p class="lede">
      Gérez l'organigramme et les structures de la mairie (directions, services, unités) intervenant dans l'exécution des projets et activités du PDC.
    </p>
    <div class="shot">
      <img src="/shot-27.jpg" alt="Écran Structures Municipales">
    </div>
    <p class="shot-caption">Écran « Structures Municipales » : gestion de la hiérarchie et de l'organigramme municipal.</p>
    <ol class="steps">
      <li>Filtrez par <b>Statut</b> ou <b>Parent de structure</b> pour retrouver une structure dans la hiérarchie.</li>
      <li>Cliquez sur <b>« + Nouvelle Structure »</b> pour ajouter une nouvelle entité municipale.</li>
      <li>Le tableau affiche : ID, Sigle, Structure, Parent de structure, Statut.</li>
    </ol>
  </section>

  <section class="block" id="sf-partenaires">
    <div class="section-kicker">Structure &amp; Finance</div>
    <h2>Gestion des partenaires</h2>
    <p class="lede">
      Répertoriez et gérez l'ensemble des partenaires techniques et financiers (ONG, bailleurs, agences) appuyant les projets communaux.
    </p>
    <div class="shot">
      <img src="/shot-28.jpg" alt="Écran Gestion des Partenaires">
    </div>
    <p class="shot-caption">Écran « Gestion des Partenaires », avec indicateurs synthétiques (total, actifs, types distincts).</p>
    <ol class="steps">
      <li>Filtrez par <b>Type</b> ou <b>Statut</b>, ou recherchez par <b>Nom ou sigle</b>.</li>
      <li>Cliquez sur <b>« + Nouveau Partenaire »</b> pour ajouter un partenaire.</li>
      <li>Le tableau affiche : ID, Date, Logo, Sigle, Partenaire, Type, Statut.</li>
    </ol>
  </section>

  <section class="block" id="sf-sources">
    <div class="section-kicker">Structure &amp; Finance</div>
    <h2>Sources de financement</h2>
    <p class="lede">
      Définissez les différentes origines de financement des projets communaux (fonds propres, subventions de l'État, appuis extérieurs).
    </p>
    <div class="shot">
      <img src="/shot-29.jpg" alt="Écran Sources de Financement">
    </div>
    <p class="shot-caption">Écran « Sources de Financement » : liste et configuration des sources budgétaires.</p>
    <ol class="steps">
      <li>Filtrez par <b>Partenaire</b> ou <b>Statut</b>, ou recherchez une source spécifique.</li>
      <li>Cliquez sur <b>« + Nouvelle Source »</b> pour ajouter une source de financement.</li>
      <li>Le tableau affiche : ID, Date, Partenaire, Source, Statut.</li>
    </ol>
  </section>

  <section class="block" id="pdc-pta-pit">
    <div class="section-kicker">Module PDC</div>
    <h2>PTA, PIT &amp; Évaluations</h2>
    <p class="lede">
      Le PTA (Plan de Travail Annuel) décline le PDC en actions annuelles ; le PIT (Plan Individuel de Travail) en assure le suivi opérationnel individuel ; les évaluations mesurent le niveau de réalisation physique et financier.
    </p>

    <div class="callout">
      <b>Rubriques de gestion PTA, PIT &amp; Évaluations</b>
      <ul style="margin-top:8px;padding-left:20px;">
        <li><a href="#pta-gestion" style="color:inherit;font-weight:600;">Gestion des PTA →</a> : créer et planifier les Plans de Travail Annuels.</li>
        <li><a href="#pta-revision" style="color:inherit;font-weight:600;">Révisions PTA →</a> : ajuster et suivre les versions successives d'un PTA.</li>
        <li><a href="#pit-suivi" style="color:inherit;font-weight:600;">Suivi des PIT →</a> : consulter le suivi des plans individuels de travail.</li>
        <li><a href="#eval-nouvelle" style="color:inherit;font-weight:600;">Nouvelle évaluation →</a> : lancer une évaluation périodique de PTA.</li>
        <li><a href="#pdc-rapports" style="color:inherit;font-weight:600;">Rapports &amp; Évaluations →</a> : consulter les synthèses et rapports d'exécution.</li>
      </ul>
    </div>
  </section>

  <section class="block" id="pta-gestion">
    <div class="section-kicker">PTA, PIT &amp; Évaluations</div>
    <h2>Gestion des PTA — Créer un nouveau PTA</h2>
    <p class="lede">
      Élaborez et configurez les Plans de Travail Annuels (PTA) rattachés à un PDC pour une année budgétaire donnée.
    </p>
    <div class="shot">
      <img src="/shot-30.jpg" alt="Écran Gestion des PTA">
    </div>
    <p class="shot-caption">Écran « Gestion des PTA » : liste des plans de travail annuels de l'institution.</p>
    <ol class="steps">
      <li>Filtrez par <b>PDC</b> ou recherchez un PTA existant, puis cliquez sur <b>« + Nouveau PTA »</b> pour en créer un.</li>
    </ol>
    <div class="shot">
      <img src="/shot-31.jpg" alt="Formulaire Nouveau PTA - Planification">
    </div>
    <p class="shot-caption">Étape 1 du formulaire : choix du PDC associé, de l'année et de la période d'exécution.</p>
    <ol class="steps">
      <li><b>Planification :</b> choisir le <b>PDC associé</b> et l'<b>Année du PTA</b>.</li>
      <li><b>Période d'exécution :</b> renseigner la <b>Date de début</b> et la <b>Date de fin</b>.</li>
    </ol>
    <div class="shot">
      <img src="/shot-32.jpg" alt="Formulaire Nouveau PTA - Configuration et documents">
    </div>
    <p class="shot-caption">Étape 2 du formulaire : statut et documents joints.</p>
    <ol class="steps">
      <li><b>Configuration :</b> définir le <b>Statut</b> du PTA (ex. « Activé »).</li>
      <li><b>Documents :</b> ajouter une <b>Observation</b> ou un commentaire, et joindre un fichier si besoin.</li>
      <li>Cliquez sur <b>« Enregistrer »</b> pour valider la création du PTA.</li>
    </ol>
  </section>

  <section class="block" id="pta-revision">
    <div class="section-kicker">PTA, PIT &amp; Évaluations</div>
    <h2>Révisions PTA</h2>
    <p class="lede">
      Suivez et gérez l'historique des révisions apportées aux Plans de Travail Annuels en cours d'exercice budgétaire.
    </p>
    <div class="shot">
      <img src="/shot-33.jpg" alt="Écran Révisions PTA">
    </div>
    <p class="shot-caption">Écran « Révisions PTA » : gestion et suivi des versions de PTA.</p>
    <ol class="steps">
      <li>Sélectionnez un <b>PDC</b> et une <b>année</b> pour afficher les révisions disponibles.</li>
      <li>Cliquez sur <b>« + Nouveau PTA »</b> si une révision nécessite la création d'un nouveau plan d'ajustement.</li>
    </ol>
  </section>

  <section class="block" id="pit-suivi">
    <div class="section-kicker">PTA, PIT &amp; Évaluations</div>
    <h2>Suivi des PIT (Plans Individuels de Travail)</h2>
    <p class="lede">
      Consultez et suivez l'état d'exécution des Plans Individuels de Travail assignés aux agents et responsables opérationnels.
    </p>
    <div class="shot">
      <img src="/shot-34.jpg" alt="Écran Suivi des plans individuels de travail">
    </div>
    <p class="shot-caption">Écran « Suivi des PIT » : consultation des plans individuels de travail.</p>
    <ol class="steps">
      <li>Recherchez un PIT par mot-clé, ou filtrez par <b>PDC</b> et <b>Année</b>.</li>
      <li>Le tableau affiche : ID, PTA, Année, Date début, Date de fin, Statut, Actions.</li>
    </ol>
  </section>

  <section class="block" id="eval-nouvelle">
    <div class="section-kicker">PTA, PIT &amp; Évaluations</div>
    <h2>Nouvelle évaluation de PTA</h2>
    <p class="lede">
      Lancez une évaluation périodique (trimestrielle ou annuelle) pour mesurer l'état d'avancement des tâches et l'exécution budgétaire d'un PTA.
    </p>
    <div class="shot">
      <img src="/shot-35.jpg" alt="Écran Liste des Évaluations">
    </div>
    <p class="shot-caption">Écran Liste des Évaluations : historique des évaluations et bouton de création.</p>
    <ol class="steps">
      <li>Sélectionnez un <b>PDC</b>, puis une <b>année</b>, pour voir les évaluations existantes.</li>
      <li>Cliquez sur le bouton <b>« + Nouvelle Évaluation »</b> pour ouvrir le formulaire.</li>
    </ol>
    <div class="shot">
      <img src="/shot-36.jpg" alt="Formulaire Nouvelle évaluation">
    </div>
    <p class="shot-caption">Formulaire « Nouvelle évaluation » : choix du PDC, du PTA, de la période et du statut.</p>
    <ol class="steps">
      <li><b>Planification :</b> choisir le <b>PDC</b> puis le <b>PTA associé</b>.</li>
      <li><b>Période :</b> renseigner la <b>Date de début</b> et la <b>Date de fin</b> de la période évaluée.</li>
      <li><b>Configuration :</b> définir le <b>Statut</b>, puis cliquer sur <b>« Enregistrer »</b> pour lancer l'évaluation.</li>
    </ol>
  </section>

  <section class="block" id="pdc-rapports">
    <div class="section-kicker">PTA, PIT &amp; Évaluations</div>
    <h2>Rapports &amp; Évaluations</h2>
    <p class="lede">
      Le hub « Rapports » regroupe l'ensemble des modules d'analyse et de reporting pour évaluer l'exécution physique et financière des plans communaux.
    </p>
    <div class="shot">
      <img src="/shot-37.jpg" alt="Hub Rapports PDC">
    </div>
    <p class="shot-caption">Le hub « Rapports » regroupe 6 modules d'analyse du PDC.</p>
    <div class="card">
      <ul class="plain">
        <li><b>Évaluation de PIT :</b> analyse du niveau de réalisation du Plan de Travail Individuel.</li>
        <li><b>Évaluation de PTA :</b> analyse du niveau de réalisation du Plan de Travail Annuel.</li>
        <li><b>Évaluation de PDC :</b> analyse du niveau de mise en œuvre et des résultats du Plan de Développement Communal.</li>
        <li><b>Projection financière :</b> estimation prévisionnelle des ressources financières par source de financement.</li>
        <li><b>Visualisation de PTA :</b> le Plan de Travail Annuel sous forme de tableau détaillé.</li>
        <li><b>Synthèse Évaluation :</b> vue d'ensemble consolidée des indicateurs d'évaluation (budget, TEP, activités en retard, dates clés).</li>
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
      <li>Depuis chaque écran de rapport, définissez les <b>filtres de recherche</b> souhaités puis cliquez sur <b>« Rechercher »</b>.</li>
      <li>Utilisez le bouton <b>« Exportateur »</b> pour exporter les résultats lorsque disponible.</li>
    </ol>
  </section>

  <section class="block" id="a-venir">
    <div class="section-kicker">Prochainement</div>
    <h2>Sections à venir</h2>
    <p class="lede">
      Le guide d'utilisation de SIDSE IBDC s'enrichit en continu au fur et à mesure du déploiement des fonctionnalités et des modules complémentaires de la plateforme.
    </p>

    <div class="card">
      <h3 style="font-family:var(--font-display);font-size:1.05rem;font-weight:700;margin:0 0 0.9rem;color:var(--color-foreground);">
        Modules et fonctionnalités en cours d'intégration
      </h3>
      <ul class="plain">
        <li style="margin-bottom:0.85rem;">
          <b> Module Projets Phares :</b>
          <span style="color:var(--color-muted-foreground);display:block;margin-top:0.2rem;">
            Dashboard des projets communaux, gestion des secteurs, formulaires de collecte de données projets et outils de contrôle qualité.
          </span>
        </li>
        <li style="margin-bottom:0.85rem;">
          <b> Module ODD étendu :</b>
          <span style="color:var(--color-muted-foreground);display:block;margin-top:0.2rem;">
            Paramétrage avancé des cibles ODD, configuration des indicateurs proxy et consolidation des métriques de développement durable.
          </span>
        </li>
        <li style="margin-bottom:0.85rem;">
          <b> Gestion des Recommandations :</b>
          <span style="color:var(--color-muted-foreground);display:block;margin-top:0.2rem;">
            Saisie des recommandations d'évaluation, désignation des responsables et suivi périodique des plans d'action correctifs.
          </span>
        </li>
        <li style="margin-bottom:0.85rem;">
          <b> Calendriers de planification :</b>
          <span style="color:var(--color-muted-foreground);display:block;margin-top:0.2rem;">
            Calendrier budgétaire communal et calendrier officiel des évaluations trimestrielles et annuelles de PTA.
          </span>
        </li>
        <li>
          <b> Formulaire détaillé « Nouveau PDC » :</b>
          <span style="color:var(--color-muted-foreground);display:block;margin-top:0.2rem;">
            Guide pas à pas de la configuration initiale d'un plan communal (piliers stratégiques, orientations, axes et programmes).
          </span>
        </li>
      </ul>
    </div>

    <div class="callout">
      <b>Mises à jour régulières</b>
      De nouvelles rubriques, tutoriels pas à pas et captures d'écran annotées viendront compléter la documentation au fil des prochaines versions.
    </div>
  </section>

  <footer class="doc-footer">
    Guide d'utilisation SIDSE IBDC (Le Baromètre) — document évolutif, mis à jour au fil de l'évolution de la plateforme.
  </footer>`;
