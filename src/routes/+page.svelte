<script lang="ts">
  let expandedNodes = $state<Set<string>>(new Set(['root']));

  function toggle(id: string) {
    const next = new Set(expandedNodes);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    expandedNodes = next;
  }

  function expandAll() {
    const all = new Set<string>();
    function collect(nodes: MindNode[]) {
      for (const n of nodes) {
        all.add(n.id);
        if (n.children) collect(n.children);
      }
    }
    collect(mindMap);
    expandedNodes = all;
  }

  function collapseAll() {
    expandedNodes = new Set(['root']);
  }

  interface MindNode {
    id: string;
    label: string;
    icon?: string;
    children?: MindNode[];
    details?: string[];
  }

  const mindMap: MindNode[] = [
    {
      id: 'root', label: 'Decouvrir le Canada', icon: '&#127464;&#127462;',
      children: [
        {
          id: 'serment', label: 'Serment de citoyennete', icon: '&#9995;',
          details: [
            'Jurer fidelite a Sa Majeste la Reine',
            'Observer fidelement les lois du Canada',
            'Y compris la Constitution',
            'Reconnait les droits des Premieres Nations, Inuits et Metis'
          ]
        },
        {
          id: 'droits', label: 'Droits et responsabilites', icon: '&#9878;',
          children: [
            {
              id: 'droits-fond', label: 'Droits fondamentaux',
              details: [
                'Liberte de conscience et de religion',
                'Liberte de pensee, croyance, opinion, expression',
                'Liberte de reunion pacifique',
                'Liberte d\'association',
                'Habeas corpus (common law britannique)',
                'Egalite entre les femmes et les hommes'
              ]
            },
            {
              id: 'charte', label: 'Charte des droits et libertes (1982)',
              details: [
                'Liberte de circulation et d\'etablissement',
                'Droits des peuples autochtones',
                'Droits aux langues officielles',
                'Multiculturalisme'
              ]
            },
            {
              id: 'responsabilites', label: 'Responsabilites',
              details: [
                'Respecter les lois',
                'Repondre a ses propres besoins et sa famille',
                'Faire partie d\'un jury',
                'Voter aux elections',
                'Offrir de l\'aide a la communaute (benevolat)',
                'Proteger le patrimoine et l\'environnement'
              ]
            }
          ]
        },
        {
          id: 'qui', label: 'Qui sommes-nous, les Canadiens?', icon: '&#129309;',
          children: [
            {
              id: 'autochtones', label: 'Peuples autochtones',
              details: [
                '3 groupes: Premieres Nations, Inuits, Metis',
                '65% Premieres Nations, 30% Metis, 4% Inuits (env.)',
                '~600 communautes de Premieres Nations',
                'Droits garantis par la Proclamation royale de 1763',
                'Pensionnats indiens: excuses officielles en 2008'
              ]
            },
            {
              id: 'francais-anglais', label: 'Francais et Anglais',
              details: [
                '18 millions d\'anglophones, 7 millions de francophones',
                'Nouveau-Brunswick: seule province officiellement bilingue',
                'Acadiens: colons francais des 1604',
                'Grand Derangement: 1755-1763',
                'Quebecois: majorite francophone'
              ]
            },
            {
              id: 'diversite', label: 'La diversite au Canada',
              details: [
                'Terre d\'immigration depuis les annees 1800',
                'Principaux groupes: Anglais, Francais, Ecossais, Irlandais, Allemands, Italiens, Chinois, Ukrainiens',
                'Majorite des Canadiens se disent chretiens (catholiques en tete)',
                'Protection des droits des gais et lesbiennes',
                'Mariage civil'
              ]
            }
          ]
        },
        {
          id: 'histoire', label: 'L\'histoire du Canada', icon: '&#128214;',
          children: [
            {
              id: 'hist-debut', label: 'Debut et exploration',
              details: [
                'Vikings en 1000 ap. J.-C. (L\'Anse aux Meadows)',
                'Jean Cabot 1497 (Terre-Neuve)',
                'Jacques Cartier 1534-1542 (mot "kanata")',
                'Samuel de Champlain 1604 (Nouvelle-France)',
                'Traite des fourrures: alliance francais-autochtones'
              ]
            },
            {
              id: 'hist-colonial', label: 'Periode coloniale',
              details: [
                'Compagnie de la Baie d\'Hudson 1670',
                'Bataille des plaines d\'Abraham 1759',
                'Acte de Quebec 1774 (liberte religieuse)',
                'Loyalistes: 40 000+ refugies de la Revolution americaine',
                'Acte constitutionnel 1791 (Haut/Bas-Canada)'
              ]
            },
            {
              id: 'hist-1812', label: 'Guerre de 1812',
              details: [
                'Invasion americaine repoussee',
                'Isaac Brock et Tecumseh',
                'Laura Secord: heroine',
                'Lt-col de Salaberry: Chateauguay',
                'Frontiere canado-americaine tracee'
              ]
            },
            {
              id: 'hist-confed', label: 'La Confederation (1867)',
              details: [
                'Peres de la Confederation',
                'Acte de l\'Amerique du Nord britannique',
                'Dominion du Canada: 1er juillet 1867',
                'Sir John A. Macdonald: 1er premier ministre',
                'Sir George-Etienne Cartier: architecte du Quebec',
                'Fete du Canada = 1er juillet'
              ]
            },
            {
              id: 'hist-expansion', label: 'Expansion vers l\'Ouest',
              details: [
                'Louis Riel et les Metis de la riviere Rouge (1869-1870)',
                'Chemin de fer Canadien Pacifique (1885)',
                'Police a cheval du Nord-Ouest (PCNO) → GRC',
                'Immigration massive: 1M Britanniques, 1M Americains',
                'Wilfrid Laurier: 1er PM francais depuis la Confederation'
              ]
            },
            {
              id: 'hist-guerres', label: 'Guerres mondiales',
              details: [
                'WWI: 600 000 Canadiens, bataille de Vimy (9 avril 1917)',
                '60 000 morts, 170 000 blesses en WWI',
                'WWII: 1M+ Canadiens participent',
                'Jour J - 6 juin 1944: plage Juno',
                '44 000 morts canadiens en WWII',
                'Jour du Souvenir: 11 novembre (coquelicot)'
              ]
            },
            {
              id: 'hist-moderne', label: 'Canada moderne',
              details: [
                'Annees folles (1920s) puis Grande Depression',
                'Banque du Canada creee en 1934',
                'Loi canadienne sur la sante',
                'Revolution tranquille au Quebec (annees 1960)',
                'Loi sur les langues officielles (1969)',
                'Referendums Quebec: 1980 (Non), 1995 (Non)',
                'Rapatriement de la Constitution (1982)',
                'Charte canadienne des droits et libertes'
              ]
            }
          ]
        },
        {
          id: 'gouvernement', label: 'Systeme de gouvernement', icon: '&#127963;',
          children: [
            {
              id: 'gouv-type', label: 'Type de gouvernement',
              details: [
                'Etat federal',
                'Democratie parlementaire',
                'Monarchie constitutionnelle',
                'Chef d\'Etat: le souverain (roi/reine)',
                'Chef du gouvernement: le premier ministre',
                'Gouverneur general represente le souverain'
              ]
            },
            {
              id: 'gouv-parlement', label: 'Le Parlement',
              details: [
                '3 parties: Souverain, Senat, Chambre des communes',
                'Senat: nomme par le gouverneur general sur recommandation du PM',
                'Senateurs: jusqu\'a 75 ans',
                'Chambre des communes: 308 deputes elus',
                '7 etapes pour adopter une loi',
                'Sanction royale necessaire'
              ]
            },
            {
              id: 'gouv-niveaux', label: 'Trois ordres de gouvernement',
              details: [
                'Federal: defense, politique etrangere, monnaie, droit criminel, citoyennete',
                'Provincial: education, sante, ressources naturelles, autoroutes',
                'Municipal: deneigement, recyclage, transport, services d\'urgence'
              ]
            }
          ]
        },
        {
          id: 'elections', label: 'Les elections federales', icon: '&#128499;',
          details: [
            '308 circonscriptions',
            'Vote secret',
            'Citoyen canadien + 18 ans + inscrit',
            'Elections tous les 4 ans (3e lundi d\'octobre)',
            'Gouvernement majoritaire vs minoritaire',
            '3 grands partis: Conservateur, NPD, Liberal',
            'Opposition officielle = 2e plus grand parti'
          ]
        },
        {
          id: 'justice', label: 'Systeme de justice', icon: '&#9878;',
          details: [
            'Presomption d\'innocence',
            'Primaute du droit',
            'La loi s\'applique a tous (y compris juges et politiciens)',
            'Cour supreme = plus haut tribunal',
            'GRC = police federale (sauf Ontario et Quebec)',
            'Tribunaux provinciaux et federaux'
          ]
        },
        {
          id: 'symboles', label: 'Symboles canadiens', icon: '&#127809;',
          children: [
            {
              id: 'symb-nationaux', label: 'Symboles nationaux',
              details: [
                'Feuille d\'erable: symbole le plus connu',
                'Drapeau rouge-blanc-rouge (1965)',
                'Couronne: symbole de l\'Etat depuis 400 ans',
                'Fleur de lys: royaute francaise',
                'Castor: symbole de la Compagnie de la Baie d\'Hudson',
                'Devise: A Mari usque ad Mare (d\'un ocean a l\'autre)',
                'Armoiries: symboles d\'Angleterre, France, Ecosse, Irlande'
              ]
            },
            {
              id: 'symb-hymnes', label: 'Hymnes',
              details: [
                'O Canada: hymne national (1880, proclame en 1980)',
                'God Save the Queen: hymne royal'
              ]
            },
            {
              id: 'symb-dates', label: 'Jours feries importants',
              details: [
                '1er janvier: Jour de l\'An',
                '11 janvier: Journee sir John A. Macdonald',
                '9 avril: Jour de Vimy',
                '24 juin: Fete nationale du Quebec',
                '1er juillet: Fete du Canada',
                '1er lundi septembre: Fete du Travail',
                '11 novembre: Jour du Souvenir',
                '25 decembre: Noel'
              ]
            },
            {
              id: 'symb-sports', label: 'Sports populaires',
              details: [
                'Hockey sur glace: sport d\'hiver national',
                'Coupe Stanley: depuis 1892',
                'Lacrosse: sport d\'ete officiel',
                'Football canadien (LCF) et Coupe Grey',
                'Basketball invente par James Naismith (1891)',
                'Curling: d\'origine ecossaise'
              ]
            }
          ]
        },
        {
          id: 'economie', label: 'L\'economie canadienne', icon: '&#128176;',
          details: [
            '3 secteurs: services (75%+), ressources naturelles, manufacturier',
            'ALENA (libre-echange avec USA et Mexique)',
            'G8: une des 10 plus grandes economies',
            'Plus grand partenaire commercial: Etats-Unis',
            '3/4 des exportations vers les USA',
            'Plus longue frontiere non defendue du monde'
          ]
        },
        {
          id: 'regions', label: 'Les regions du Canada', icon: '&#127758;',
          children: [
            {
              id: 'reg-atlantique', label: 'Provinces de l\'Atlantique',
              details: [
                'Terre-Neuve-et-Labrador (cap. St. John\'s)',
                'Ile-du-Prince-Edouard (cap. Charlottetown) - Berceau de la Confederation',
                'Nouvelle-Ecosse (cap. Halifax) - Baie de Fundy',
                'Nouveau-Brunswick (cap. Fredericton) - Seule province bilingue'
              ]
            },
            {
              id: 'reg-centre', label: 'Centre du Canada',
              details: [
                'Quebec (cap. Quebec) - 8M hab., 3/4 francophones, hydroelectricite',
                'Ontario (cap. Toronto) - 12M+ hab., 1/3 population canadienne',
                '5 Grands Lacs: Ontario, Erie, Huron, Michigan, Superieur'
              ]
            },
            {
              id: 'reg-prairies', label: 'Provinces des Prairies',
              details: [
                'Manitoba (cap. Winnipeg) - agriculture, hydroelectricite',
                'Saskatchewan (cap. Regina) - "grenier du monde", potasse, uranium',
                'Alberta (cap. Edmonton) - petrole, lac Louise, parc Banff'
              ]
            },
            {
              id: 'reg-ouest', label: 'Cote Ouest',
              details: [
                'Colombie-Britannique (cap. Victoria) - 4M hab.',
                'Port de Vancouver: le plus grand du Canada',
                'Foresterie, peche, mines, vignobles',
                '600 parcs provinciaux'
              ]
            },
            {
              id: 'reg-nord', label: 'Territoires du Nord',
              details: [
                'Yukon (cap. Whitehorse) - ruee vers l\'or, mont Logan',
                'Territoires du Nord-Ouest (cap. Yellowknife) - "capitale du diamant"',
                'Nunavut (cap. Iqaluit) - cree en 1999, 85% Inuits',
                'Terre du soleil de minuit',
                'Rangers canadiens: protection de l\'Arctique'
              ]
            }
          ]
        },
        {
          id: 'inventions', label: 'Grandes decouvertes canadiennes', icon: '&#128161;',
          details: [
            'Alexander Graham Bell: idee du telephone',
            'Joseph-Armand Bombardier: motoneige',
            'Sir Sandford Fleming: fuseaux horaires',
            'Mathew Evans & Henry Woodward: ampoule electrique',
            'Reginald Fessenden: radio (message vocal sans fil)',
            'Frederick Banting & Charles Best: insuline',
            'Dr. John A. Hopps: stimulateur cardiaque',
            'Dr. Wilder Penfield: neurochirurgien ("plus grand Canadien vivant")',
            'SPAR / CNR: Canadarm (bras robotique spatial)',
            'Mike Lazaridis / Jim Balsillie (RIM): BlackBerry'
          ]
        }
      ]
    }
  ];
</script>

<div class="hero">
  <div class="container">
    <h1>Mapa Mental - Citoyennete Canadienne</h1>
    <p>Tout le contenu du guide "Decouvrir le Canada" organise visuellement pour vos etudes</p>
    <div class="hero-actions">
      <button class="btn btn-primary" onclick={expandAll}>Tout ouvrir</button>
      <button class="btn btn-outline" onclick={collapseAll}>Tout fermer</button>
    </div>
  </div>
</div>

<div class="container mind-map-container">
  {#each mindMap as node}
    {@render treeNode(node, 0)}
  {/each}
</div>

{#snippet treeNode(node: MindNode, depth: number)}
  <div class="node depth-{Math.min(depth, 3)}" class:expanded={expandedNodes.has(node.id)}>
    <button
      class="node-header"
      onclick={() => toggle(node.id)}
      class:has-children={!!node.children || !!node.details}
    >
      <span class="node-toggle">
        {#if node.children || node.details}
          <svg viewBox="0 0 24 24" width="18" height="18" class="chevron" class:rotated={expandedNodes.has(node.id)}>
            <path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/>
          </svg>
        {/if}
      </span>
      {#if node.icon}
        <span class="node-icon">{@html node.icon}</span>
      {/if}
      <span class="node-label">{node.label}</span>
      {#if node.children}
        <span class="node-count">{node.children.length}</span>
      {/if}
    </button>

    {#if expandedNodes.has(node.id)}
      <div class="node-body">
        {#if node.details}
          <ul class="details-list">
            {#each node.details as detail}
              <li>{detail}</li>
            {/each}
          </ul>
        {/if}
        {#if node.children}
          <div class="children">
            {#each node.children as child}
              {@render treeNode(child, depth + 1)}
            {/each}
          </div>
        {/if}
      </div>
    {/if}
  </div>
{/snippet}

<style>
  /* Mobile-first styles */
  .hero {
    background: linear-gradient(135deg, var(--red) 0%, var(--red-dark) 100%);
    color: white;
    padding: 36px 0 32px;
    text-align: center;
  }
  .hero h1 { font-size: 1.5rem; font-weight: 800; margin-bottom: 8px; }
  .hero p { font-size: 0.9rem; opacity: 0.9; max-width: 600px; margin: 0 auto 20px; padding: 0 8px; }
  .hero-actions { display: flex; gap: 10px; justify-content: center; }
  .btn {
    padding: 10px 20px;
    border-radius: var(--radius-sm);
    font-weight: 600;
    font-size: 0.85rem;
    transition: all 0.2s;
  }
  .btn-primary { background: white; color: var(--red); }
  .btn-primary:hover { background: var(--gray-100); }
  .btn-outline { background: transparent; color: white; border: 2px solid rgba(255,255,255,0.5); }
  .btn-outline:hover { border-color: white; }

  .mind-map-container { padding: 16px 0 40px; }

  .node { margin-bottom: 3px; }
  .node-header {
    display: flex;
    align-items: center;
    gap: 6px;
    width: 100%;
    padding: 10px 12px;
    background: var(--white);
    border-radius: var(--radius-sm);
    font-size: 0.88rem;
    font-weight: 500;
    color: var(--gray-900);
    transition: all 0.15s;
    text-align: left;
    border: 1px solid var(--gray-200);
  }
  .node-header:hover { background: var(--gray-100); border-color: var(--gray-300); }
  .node-header.has-children { cursor: pointer; }

  .depth-0 > .node-header {
    font-size: 1.05rem;
    font-weight: 700;
    padding: 14px 16px;
    background: var(--red);
    color: white;
    border-color: var(--red);
    border-radius: var(--radius);
  }
  .depth-0 > .node-header:hover { background: var(--red-dark); }
  .depth-1 > .node-header { font-size: 0.95rem; font-weight: 600; border-left: 4px solid var(--red); }
  .depth-2 > .node-header { border-left: 3px solid var(--gray-300); font-weight: 500; }
  .depth-3 > .node-header { border-left: 2px solid var(--gray-200); font-weight: 400; font-size: 0.85rem; }

  .node-toggle { display: flex; align-items: center; width: 18px; flex-shrink: 0; }
  .chevron { transition: transform 0.2s; color: var(--gray-400); }
  .chevron.rotated { transform: rotate(90deg); }
  .depth-0 .chevron { color: rgba(255,255,255,0.7); }

  .node-icon { font-size: 1.1em; }
  .node-label { flex: 1; min-width: 0; }
  .node-count {
    background: var(--gray-200);
    color: var(--gray-600);
    font-size: 0.7rem;
    padding: 2px 7px;
    border-radius: 99px;
    font-weight: 600;
    flex-shrink: 0;
  }
  .depth-0 .node-count { background: rgba(255,255,255,0.2); color: white; }

  .node-body { padding-left: 14px; margin-top: 2px; }

  .details-list {
    list-style: none;
    padding: 8px 10px 10px;
    background: var(--gray-50);
    border-radius: var(--radius-sm);
    border: 1px solid var(--gray-200);
    margin-bottom: 3px;
  }
  .details-list li {
    padding: 3px 0 3px 14px;
    font-size: 0.82rem;
    color: var(--gray-700);
    position: relative;
    line-height: 1.5;
  }
  .details-list li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 10px;
    width: 5px;
    height: 5px;
    background: var(--red);
    border-radius: 50%;
  }

  .children { display: flex; flex-direction: column; gap: 2px; }

  @media (min-width: 768px) {
    .hero { padding: 60px 0 48px; }
    .hero h1 { font-size: 2.2rem; }
    .hero p { font-size: 1.1rem; }
    .btn { padding: 10px 24px; font-size: 0.95rem; }
    .mind-map-container { padding: 32px 0 60px; }
    .node-header { padding: 10px 14px; font-size: 0.95rem; gap: 8px; }
    .depth-0 > .node-header { font-size: 1.2rem; padding: 16px 20px; }
    .depth-1 > .node-header { font-size: 1.05rem; }
    .node-body { padding-left: 28px; }
    .details-list { padding: 8px 14px 12px; }
    .details-list li { font-size: 0.9rem; padding-left: 16px; }
    .node-icon { font-size: 1.2em; }
  }
</style>
