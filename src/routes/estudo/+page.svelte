<script lang="ts">
  let activeChapter = $state(0);

  interface Chapter {
    title: string;
    icon: string;
    keyFacts: string[];
    mustKnow: string[];
  }

  const chapters: Chapter[] = [
    {
      title: "Serment et droits/responsabilites",
      icon: "&#9995;",
      keyFacts: [
        "Le serment jure fidelite au souverain (reine ou roi), pas a un document ou territoire",
        "La Constitution du Canada a ete modifiee en 1982 pour inclure la Charte canadienne des droits et libertes",
        "La Magna Carta (1215) est a l'origine de la tradition de liberte ordonnee",
        "Le Canada n'impose pas le service militaire obligatoire",
        "Les droits des peuples autochtones ne portent aucune atteinte aux droits de la Charte",
        "L'egalite entre hommes et femmes est un principe fondamental"
      ],
      mustKnow: [
        "4 libertes fondamentales: conscience/religion, pensee/expression, reunion pacifique, association",
        "Habeas corpus: droit de contester une detention illegale",
        "Responsabilites: respecter les lois, repondre a ses besoins, jury, voter, benevolat, proteger l'environnement",
        "La Charte garantit le multiculturalisme, les droits linguistiques et les droits autochtones"
      ]
    },
    {
      title: "Qui sommes-nous?",
      icon: "&#129309;",
      keyFacts: [
        "3 peuples autochtones: Premieres Nations (65%), Metis (30%), Inuits (4%)",
        "'Indien' designe tous les Autochtones sauf Inuits et Metis",
        "Inuit signifie 'le peuple' en inuktitut",
        "Les Metis sont nes de l'union d'Autochtones et d'Europeens, surtout dans les Prairies",
        "En 2008, Ottawa a presente des excuses officielles pour les pensionnats indiens",
        "18 millions d'anglophones, 7 millions de francophones",
        "Nouveau-Brunswick = seule province bilingue officielle"
      ],
      mustKnow: [
        "3 peuples fondateurs: Autochtones, Francais, Britanniques",
        "Les Acadiens sont des colons francais etablis des 1604 (Grand Derangement 1755-1763)",
        "Les Quebecois sont les habitants du Quebec, en majorite francophones",
        "Depuis 1970, la plupart des immigrants viennent des pays asiatiques",
        "La grande majorite des Canadiens se disent chretiens (catholiques en tete)"
      ]
    },
    {
      title: "L'histoire du Canada",
      icon: "&#128214;",
      keyFacts: [
        "Vikings a L'Anse aux Meadows il y a ~1000 ans",
        "Jean Cabot (1497) trace la carte de la cote Est",
        "Jacques Cartier (1534-1542): mot 'kanata' (village) → Canada",
        "Champlain fonde Quebec en 1608",
        "Compagnie de la Baie d'Hudson: 1670",
        "Bataille des plaines d'Abraham (1759): fin de la Nouvelle-France",
        "Acte de Quebec (1774): liberte religieuse pour les catholiques",
        "Loyalistes: 40 000+ refugies de la Revolution americaine",
        "Guerre de 1812: Isaac Brock, Tecumseh, Laura Secord, de Salaberry",
        "Abolition de l'esclavage: Haut-Canada en 1793 (1ere dans l'Empire)"
      ],
      mustKnow: [
        "Confederation: 1er juillet 1867 - Acte de l'Amerique du Nord britannique",
        "Sir John A. Macdonald = 1er premier ministre",
        "Sir George-Etienne Cartier = architecte de la Confederation (Quebec)",
        "Louis Riel: defenseur des Metis, pere du Manitoba",
        "CFCP acheve le 7 novembre 1885 (Donald Smith/Lord Strathcona)",
        "Wilfrid Laurier: 1er PM francais depuis la Confederation",
        "Vimy: 9 avril 1917 (60 000 morts canadiens en WWI au total)",
        "Jour J: 6 juin 1944, plage Juno (44 000 morts canadiens en WWII)",
        "11 novembre = Jour du Souvenir (coquelicot)"
      ]
    },
    {
      title: "Le Canada moderne",
      icon: "&#127961;",
      keyFacts: [
        "Annees folles (1920s) → Grande Depression (chomage 27% en 1933)",
        "Banque du Canada creee en 1934",
        "Loi canadienne sur la sante",
        "Canada rejoint l'OTAN et NORAD (defense avec les USA)",
        "Revolution tranquille au Quebec (annees 1960)",
        "Loi sur les langues officielles (1969)",
        "Referendums Quebec: 1980 et 1995 (Non les deux fois)",
        "Constitution rapatriee en 1982 avec la Charte des droits"
      ],
      mustKnow: [
        "Le multiculturalisme est une consequence de l'immigration des 19e-20e siecles",
        "Les Autochtones obtiennent le droit de vote en 1948 (provincial varies)",
        "Tous les citoyens de 18+ ans peuvent voter (depuis les annees 1960-70)",
        "Grandes inventions: telephone (Bell), motoneige (Bombardier), insuline (Banting/Best), Canadarm"
      ]
    },
    {
      title: "Systeme de gouvernement",
      icon: "&#127963;",
      keyFacts: [
        "3 faits: Etat federal + democratie parlementaire + monarchie constitutionnelle",
        "Chef d'Etat = Souverain (roi/reine) ≠ Chef du gouvernement = Premier ministre",
        "Gouverneur general represente le souverain au federal (nomme ~5 ans)",
        "Lieutenant-gouverneur represente le souverain dans chaque province",
        "Commissaire = dans les 3 territoires",
        "Parlement = Souverain + Senat + Chambre des communes"
      ],
      mustKnow: [
        "Senat: membres nommes, en poste jusqu'a 75 ans",
        "Chambre des communes: 308 deputes elus (4 ans)",
        "7 etapes pour adopter une loi (3 lectures + comite + rapport + Senat + sanction royale)",
        "Gouvernement federal: defense, monnaie, droit criminel, citoyennete, affaires etrangeres",
        "Provincial: education, sante, ressources naturelles, autoroutes",
        "Municipal: deneigement, recyclage, transport, urgences",
        "Si le gouvernement perd un vote de confiance → demission/election"
      ]
    },
    {
      title: "Les elections federales",
      icon: "&#128499;",
      keyFacts: [
        "308 circonscriptions au Canada",
        "Pour voter: citoyen canadien + 18 ans + inscrit",
        "Vote secret (personne ne peut vous forcer a reveler votre vote)",
        "Elections: 3e lundi d'octobre, tous les 4 ans",
        "Le PM peut declencher une election plus tot"
      ],
      mustKnow: [
        "Candidat avec le plus de votes dans une circonscription = depute",
        "Gouvernement majoritaire vs minoritaire",
        "3 grands partis: Conservateur, NPD (Nouveau Parti democratique), Liberal",
        "L'opposition officielle = le parti avec le 2e plus grand nombre de sieges",
        "Le PM choisit les ministres du Cabinet (parmi les deputes)"
      ]
    },
    {
      title: "Symboles canadiens",
      icon: "&#127809;",
      keyFacts: [
        "Feuille d'erable: symbole le plus connu, depuis le 18e siecle",
        "Drapeau rouge-blanc-rouge hisse en 1965",
        "Couronne = symbole de l'Etat depuis 400 ans",
        "Fleur de lys: royaute francaise, symbole de la Nouvelle-France",
        "Castor: symbole de la Compagnie de la Baie d'Hudson",
        "O Canada: proclame hymne national en 1980 (chante depuis 1880)",
        "Devise: A Mari usque ad Mare (d'un ocean a l'autre)"
      ],
      mustKnow: [
        "Croix de Victoria: plus haute distinction militaire",
        "Ordre du Canada: cree en 1967 (centenaire de la Confederation)",
        "Hockey = sport d'hiver national, Lacrosse = sport d'ete officiel",
        "Coupe Stanley depuis 1892; Coupe Grey = football canadien",
        "Fete du Canada = 1er juillet; Jour du Souvenir = 11 novembre; Jour de Vimy = 9 avril"
      ]
    },
    {
      title: "Economie et regions",
      icon: "&#127758;",
      keyFacts: [
        "3 secteurs: services (75%+), ressources naturelles, manufacturier",
        "Plus grand partenaire commercial: Etats-Unis (3/4 des exportations)",
        "ALENA (libre-echange avec USA et Mexique, 1994)",
        "Canada = membre du G8",
        "10 provinces + 3 territoires",
        "Capitale nationale: Ottawa (choisie en 1857 par la reine Victoria)"
      ],
      mustKnow: [
        "Atlantique: TNL (St. John's), IPE (Charlottetown), NE (Halifax), NB (Fredericton)",
        "Centre: Quebec (Quebec), Ontario (Toronto)",
        "Prairies: Manitoba (Winnipeg), Saskatchewan (Regina), Alberta (Edmonton)",
        "Cote Ouest: Colombie-Britannique (Victoria)",
        "Nord: Yukon (Whitehorse), TNO (Yellowknife), Nunavut (Iqaluit)",
        "Ontario = 1/3 de la population, Toronto = plus grande ville, Montreal = 2e",
        "Saskatchewan = 'grenier du monde', Alberta = petrole, CB = foresterie/port de Vancouver"
      ]
    }
  ];
</script>

<div class="hero">
  <div class="container">
    <h1>Etude par chapitre</h1>
    <p>Resume des points essentiels de chaque chapitre du guide "Decouvrir le Canada"</p>
  </div>
</div>

<div class="container study-layout">
  <aside class="chapter-nav">
    {#each chapters as chapter, i}
      <button
        class="chapter-btn"
        class:active={activeChapter === i}
        onclick={() => activeChapter = i}
      >
        <span class="chapter-icon">{@html chapter.icon}</span>
        <span class="chapter-title">{chapter.title}</span>
      </button>
    {/each}
  </aside>

  <section class="chapter-content">
    <h2>{@html chapters[activeChapter].icon} {chapters[activeChapter].title}</h2>

    <div class="section-block must-know">
      <h3>A retenir absolument</h3>
      <ul>
        {#each chapters[activeChapter].mustKnow as item}
          <li>{item}</li>
        {/each}
      </ul>
    </div>

    <div class="section-block key-facts">
      <h3>Faits importants</h3>
      <ul>
        {#each chapters[activeChapter].keyFacts as item}
          <li>{item}</li>
        {/each}
      </ul>
    </div>
  </section>
</div>

<style>
  .hero {
    background: linear-gradient(135deg, var(--red) 0%, var(--red-dark) 100%);
    color: white;
    padding: 32px 0 28px;
    text-align: center;
  }
  .hero h1 { font-size: 1.4rem; font-weight: 800; margin-bottom: 6px; }
  .hero p { font-size: 0.85rem; opacity: 0.9; padding: 0 12px; }

  .study-layout {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px 0 40px;
  }

  .chapter-nav {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 6px;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    padding-bottom: 4px;
  }
  .chapter-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 12px;
    background: white;
    border: 1px solid var(--gray-200);
    border-radius: var(--radius-sm);
    font-size: 0.8rem;
    font-weight: 500;
    color: var(--gray-700);
    text-align: left;
    transition: all 0.15s;
    white-space: nowrap;
    flex-shrink: 0;
  }
  .chapter-btn:hover { border-color: var(--red); color: var(--red); }
  .chapter-btn.active { background: var(--red); color: white; border-color: var(--red); font-weight: 600; }
  .chapter-icon { font-size: 1.3em; }
  .chapter-title { display: none; }

  .chapter-content h2 {
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 16px;
    color: var(--gray-900);
    border-bottom: 3px solid var(--red);
    padding-bottom: 10px;
  }

  .section-block {
    background: white;
    border: 1px solid var(--gray-200);
    border-radius: var(--radius);
    padding: 16px 14px;
    margin-bottom: 14px;
  }
  .section-block h3 {
    font-size: 0.9rem;
    font-weight: 700;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .must-know { border-left: 4px solid var(--red); }
  .must-know h3 { color: var(--red); }
  .must-know h3::before { content: '!!'; background: var(--red); color: white; padding: 2px 6px; border-radius: 4px; font-size: 0.65rem; }

  .key-facts { border-left: 4px solid #1976D2; }
  .key-facts h3 { color: #1976D2; }
  .key-facts h3::before { content: 'i'; background: #1976D2; color: white; padding: 2px 8px; border-radius: 4px; font-size: 0.7rem; font-style: italic; }

  .section-block ul { list-style: none; display: flex; flex-direction: column; gap: 6px; }
  .section-block li {
    padding: 4px 0 4px 16px;
    position: relative;
    font-size: 0.82rem;
    line-height: 1.5;
    color: var(--gray-800);
  }
  .must-know li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 11px;
    width: 7px;
    height: 7px;
    background: var(--red);
    border-radius: 50%;
  }
  .key-facts li::before {
    content: '';
    position: absolute;
    left: 1px;
    top: 12px;
    width: 5px;
    height: 5px;
    background: #1976D2;
    border-radius: 50%;
  }

  @media (min-width: 768px) {
    .hero { padding: 48px 0 40px; }
    .hero h1 { font-size: 2rem; }
    .hero p { font-size: 1rem; }
    .study-layout {
      display: grid;
      grid-template-columns: 260px 1fr;
      gap: 32px;
      padding: 32px 0 60px;
    }
    .chapter-nav {
      flex-direction: column;
      flex-wrap: nowrap;
      gap: 4px;
      position: sticky;
      top: 80px;
      overflow-x: visible;
    }
    .chapter-btn { padding: 12px 16px; font-size: 0.9rem; gap: 10px; }
    .chapter-title { display: inline; }
    .chapter-content h2 { font-size: 1.5rem; margin-bottom: 24px; }
    .section-block { padding: 24px; margin-bottom: 20px; }
    .section-block h3 { font-size: 1rem; margin-bottom: 16px; }
    .section-block li { font-size: 0.9rem; padding-left: 20px; }
  }
</style>
