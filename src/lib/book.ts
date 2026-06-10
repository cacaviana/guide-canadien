// Livre complet « Découvrir le Canada » — texte intégral FR + traduction PT-BR.
// Source : guide d'étude officiel du gouvernement du Canada (decouvrir.pdf).
// Audio narré chapitre par chapitre (voix Antoine FR-CA / Antônio PT-BR), généré
// via scripts/generate-book-audio.mjs et servi depuis /audio/book/.

export interface BookChapter {
  id: string;
  title: string;
  titleBr: string;
  icon: string;
  textFr: string;
  textBr: string;
  audioFr: string;
  audioBr: string;
}

export const bookChapters: BookChapter[] = [
  {
    id: '01-serment',
    title: 'Le serment et les droits et responsabilités',
    titleBr: 'O juramento e os direitos e responsabilidades',
    icon: '&#9995;',
    audioFr: '/audio/book/01-serment-fr.mp3',
    audioBr: '/audio/book/01-serment-br.mp3',
    textFr: `Le serment de citoyenneté

Je jure (ou j'affirme solennellement) que je serai fidèle et porterai sincère allégeance à Sa Majesté la reine Elizabeth Deux, reine du Canada, à ses héritiers et successeurs, que j'observerai fidèlement les lois du Canada, y compris la Constitution, qui reconnaît et confirme les droits ancestraux ou issus de traités des Premières Nations, des Inuits et des Métis, et que je remplirai loyalement mes obligations de citoyen canadien.

Les droits et responsabilités liés à la citoyenneté

Tous les citoyens canadiens ont des droits et des responsabilités, qui nous viennent de notre passé, qui sont garantis par le droit canadien et qui reflètent nos traditions, notre identité et nos valeurs communes. Les règles juridiques du Canada proviennent entre autres des lois adoptées par le Parlement du Canada et les assemblées législatives provinciales, de la common law, du code civil de la France et de la tradition constitutionnelle héritée de la Grande-Bretagne.

Ensemble, ces règles préservent pour les Canadiens une tradition de liberté ordonnée vieille de 800 ans, qui remonte à 1215, année de la signature de la Magna Carta (aussi appelée Grande Charte des libertés) en Angleterre, et qui comprend la liberté de conscience et de religion; la liberté de pensée, de croyance, d'opinion et d'expression, y compris la liberté de la presse; la liberté de réunion pacifique; et la liberté d'association.

L'habeas corpus, ou droit de contester une détention illégale par l'État, est emprunté à la common law britannique.

La Constitution du Canada a été modifiée en 1982 afin d'inclure la Charte canadienne des droits et libertés, dont le libellé commence ainsi : « Attendu que le Canada est fondé sur des principes qui reconnaissent la suprématie de Dieu et la primauté du droit ». Ces mots soulignent l'importance des traditions religieuses pour la société canadienne ainsi que la dignité et la valeur de l'être humain.

La Charte résume les libertés fondamentales tout en y ajoutant d'autres droits. Les plus importants sont : la liberté de circulation et d'établissement — les Canadiens peuvent vivre et travailler n'importe où au Canada, entrer au Canada et en sortir librement, et demander un passeport canadien; les droits des peuples autochtones — les droits garantis dans la Charte ne portent atteinte en aucun cas aux droits et libertés des peuples autochtones; les droits relatifs aux langues officielles et les droits à l'instruction dans la langue de la minorité — le français et l'anglais ont un statut égal au Parlement et dans l'ensemble du gouvernement; et le multiculturalisme — une caractéristique fondamentale de l'identité et du patrimoine canadiens.

Égalité entre les femmes et les hommes

Au Canada, les hommes et les femmes sont égaux devant la loi. L'ouverture et la générosité du Canada excluent les pratiques culturelles barbares qui tolèrent la violence conjugale, les « meurtres d'honneur », la mutilation sexuelle des femmes, les mariages forcés, la polygamie ou d'autres actes de violence fondée sur le sexe. Les personnes coupables de tels crimes sont sévèrement punies en vertu des lois pénales du Canada.

Responsabilités liées à la citoyenneté

Au Canada, les droits s'accompagnent de responsabilités. Voter aux élections — voter est non seulement un droit, mais aussi une responsabilité que vous exercez aux élections fédérales, provinciales ou territoriales, et locales. Respecter les lois — l'un des principes fondateurs du Canada est la primauté du droit; les individus et les gouvernements sont régis par des lois et non par des mesures arbitraires, et aucune personne ni aucun groupe n'est au-dessus des lois. Répondre à ses propres besoins et à ceux de sa famille — il est important pour les Canadiens d'avoir un emploi, de prendre soin de leur famille et de mettre leurs habiletés à contribution. Faire partie d'un jury — lorsqu'on vous le demande, la loi vous oblige à le faire, car la participation des citoyens à des jurys impartiaux est essentielle au bon fonctionnement du système judiciaire. Offrir de l'aide aux membres de la communauté — des millions de bénévoles donnent de leur temps aux autres sans être payés. Protéger notre patrimoine et notre environnement — tous les citoyens ont la responsabilité d'éviter le gaspillage et la pollution et de protéger le patrimoine naturel, culturel et architectural du pays pour les générations à venir.

Défendre le Canada

Le Canada n'impose pas le service militaire obligatoire. Toutefois, travailler dans les Forces canadiennes — la Marine, l'Armée de terre et la Force aérienne — est une noble façon d'apporter sa contribution au Canada et un excellent choix de carrière. Vous pouvez aussi travailler à temps partiel dans la Réserve navale ou aérienne ou dans la Milice de votre localité, vous engager dans les Cadets, ou faire partie de la Garde côtière ou des services d'urgence de votre communauté, comme le service de police ou les pompiers. En contribuant à la protection de votre communauté, vous suivez les traces des Canadiens qui ont fait des sacrifices pour notre pays.`,
    textBr: `O juramento de cidadania

Eu juro (ou afirmo solenemente) que serei fiel e prestarei sincera lealdade a Sua Majestade a rainha Elizabeth Segunda, rainha do Canadá, a seus herdeiros e sucessores, que observarei fielmente as leis do Canadá, incluindo a Constituição, que reconhece e confirma os direitos ancestrais ou decorrentes de tratados das Primeiras Nações, dos Inuítes e dos Métis, e que cumprirei lealmente minhas obrigações de cidadão canadense.

Os direitos e responsabilidades ligados à cidadania

Todos os cidadãos canadenses têm direitos e responsabilidades, que nos vêm de nosso passado, que são garantidos pelo direito canadense e que refletem nossas tradições, nossa identidade e nossos valores comuns. As regras jurídicas do Canadá provêm, entre outras fontes, das leis adotadas pelo Parlamento do Canadá e pelas assembleias legislativas provinciais, da common law, do código civil da França e da tradição constitucional herdada da Grã-Bretanha.

Em conjunto, essas regras preservam para os canadenses uma tradição de liberdade ordenada com 800 anos de idade, que remonta a 1215, ano da assinatura da Magna Carta (também chamada Grande Carta das liberdades) na Inglaterra, e que compreende a liberdade de consciência e de religião; a liberdade de pensamento, de crença, de opinião e de expressão, incluindo a liberdade de imprensa; a liberdade de reunião pacífica; e a liberdade de associação.

O habeas corpus, ou direito de contestar uma detenção ilegal por parte do Estado, foi tomado da common law britânica.

A Constituição do Canadá foi modificada em 1982 a fim de incluir a Carta canadense dos direitos e liberdades, cujo texto começa assim: « Considerando que o Canadá é fundado sobre princípios que reconhecem a supremacia de Deus e a primazia do direito ». Essas palavras destacam a importância das tradições religiosas para a sociedade canadense, assim como a dignidade e o valor do ser humano.

A Carta resume as liberdades fundamentais, acrescentando ainda outros direitos. Os mais importantes são: a liberdade de circulação e de estabelecimento — os canadenses podem viver e trabalhar em qualquer lugar do Canadá, entrar no Canadá e sair dele livremente, e solicitar um passaporte canadense; os direitos dos povos autóctones — os direitos garantidos na Carta não prejudicam de forma alguma os direitos e liberdades dos povos autóctones; os direitos relativos às línguas oficiais e os direitos à instrução na língua da minoria — o francês e o inglês têm um estatuto igual no Parlamento e em todo o governo; e o multiculturalismo — uma característica fundamental da identidade e do patrimônio canadenses.

Igualdade entre as mulheres e os homens

No Canadá, os homens e as mulheres são iguais perante a lei. A abertura e a generosidade do Canadá excluem as práticas culturais bárbaras que toleram a violência conjugal, os « assassinatos de honra », a mutilação sexual das mulheres, os casamentos forçados, a poligamia ou outros atos de violência baseada no sexo. As pessoas culpadas de tais crimes são severamente punidas em virtude das leis penais do Canadá.

Responsabilidades ligadas à cidadania

No Canadá, os direitos vêm acompanhados de responsabilidades. Votar nas eleições — votar não é apenas um direito, mas também uma responsabilidade que você exerce nas eleições federais, provinciais ou territoriais, e locais. Respeitar as leis — um dos princípios fundadores do Canadá é a primazia do direito; os indivíduos e os governos são regidos por leis e não por medidas arbitrárias, e nenhuma pessoa nem nenhum grupo está acima das leis. Prover suas próprias necessidades e as de sua família — é importante para os canadenses ter um emprego, cuidar de sua família e colocar suas habilidades em contribuição. Fazer parte de um júri — quando solicitado, a lei o obriga a fazê-lo, pois a participação dos cidadãos em júris imparciais é essencial para o bom funcionamento do sistema judiciário. Oferecer ajuda aos membros da comunidade — milhões de voluntários doam seu tempo aos outros sem serem pagos. Proteger nosso patrimônio e nosso meio ambiente — todos os cidadãos têm a responsabilidade de evitar o desperdício e a poluição e de proteger o patrimônio natural, cultural e arquitetônico do país para as gerações futuras.

Defender o Canadá

O Canadá não impõe o serviço militar obrigatório. Contudo, trabalhar nas Forças canadenses — a Marinha, o Exército de terra e a Força aérea — é uma nobre maneira de dar sua contribuição ao Canadá e uma excelente escolha de carreira. Você também pode trabalhar em tempo parcial na Reserva naval ou aérea ou na Milícia de sua localidade, engajar-se nos Cadetes, ou fazer parte da Guarda costeira ou dos serviços de emergência de sua comunidade, como o serviço de polícia ou os bombeiros. Ao contribuir para a proteção de sua comunidade, você segue os passos dos canadenses que fizeram sacrifícios por nosso país.`
  },
  {
    id: '02-qui',
    title: 'Qui sommes-nous?',
    titleBr: 'Quem somos nós?',
    icon: '&#129309;',
    audioFr: '/audio/book/02-qui-fr.mp3',
    audioBr: '/audio/book/02-qui-br.mp3',
    textFr: `Le Canada est reconnu partout dans le monde comme un pays fort et libre. Les Canadiens sont fiers de leur identité propre. Nous avons hérité de la plus ancienne tradition constitutionnelle continue du monde. Nous sommes la seule monarchie constitutionnelle d'Amérique du Nord. Nos institutions préservent un engagement envers les valeurs de la paix, de l'ordre et de bon gouvernement, énoncées en 1867 dans le premier document constitutionnel du Canada, l'Acte de l'Amérique du Nord britannique. Les poètes et les chansonniers ont salué le Canada comme étant le « Great Dominion », qui signifie « grand dominion » ou « grande puissance ».

Pour comprendre ce que signifie être Canadien, il faut connaître nos trois peuples fondateurs : les Autochtones, les Français et les Britanniques.

Les peuples autochtones

On croit que les ancêtres des peuples autochtones sont venus d'Asie il y a plusieurs milliers d'années. Ils étaient établis ici bien avant l'arrivée des premiers explorateurs européens en Amérique du Nord. Les droits autochtones et les droits découlant de traités sont énoncés dans la Constitution canadienne. Les droits territoriaux ont été garantis pour la première fois par la Proclamation royale de 1763, du roi George III, qui établissait les bases de la négociation des traités avec les nouveaux arrivants — traités qui n'ont pas toujours été respectés.

Aujourd'hui, le terme peuples autochtones désigne trois groupes distincts. Le mot indien désigne tous les peuples autochtones sauf les Inuits et les Métis; depuis les années 1970, on les appelle aussi les Premières Nations. Près de la moitié des membres des Premières Nations vivent dans environ 600 communautés au sein de réserves, et l'autre moitié habite hors des réserves, surtout dans les centres urbains. Les Inuits, terme signifiant « le peuple » en langue inuktitute, vivent dans de petites communautés réparties dans l'Arctique. Les Métis sont un peuple distinct composé de personnes nées de l'union d'Autochtones et d'Européens; la plupart vivent dans les provinces des Prairies et parlent leur propre dialecte, le michif. Environ 65 pour 100 des peuples autochtones sont des Premières Nations, 30 pour 100 des Métis et 4 pour 100, des Inuits.

Des années 1800 jusqu'aux années 1980, le gouvernement fédéral a placé de nombreux enfants autochtones dans des pensionnats afin de les assimiler à la culture canadienne dominante. Ces écoles étaient mal financées et les langues et pratiques culturelles autochtones y étaient pour la plupart interdites. En 2008, Ottawa a présenté des excuses officielles à tous les anciens élèves des pensionnats indiens.

Les français et les anglais

La société canadienne moderne est issue en grande partie des civilisations chrétiennes francophone et anglophone, amenées d'Europe par les colons. Le français et l'anglais sont les deux langues officielles du Canada, et le gouvernement fédéral est tenu par la loi de fournir des services dans les deux langues partout au Canada. Le Canada compte aujourd'hui 18 millions d'anglophones et 7 millions de francophones. Bien que la plupart des francophones vivent au Québec, un million de francophones vivent en Ontario, au Nouveau-Brunswick et au Manitoba. Le Nouveau-Brunswick est la seule province officiellement bilingue.

Les Acadiens sont les descendants de colons français établis dès 1604 dans ce qu'on appelle aujourd'hui les Maritimes. De 1755 à 1763, pendant la guerre entre la Grande-Bretagne et la France, plus des deux tiers des Acadiens ont été déportés hors de leur patrie. En dépit de cette épreuve, appelée le « Grand Dérangement », les Acadiens ont survécu et maintenu leur identité propre.

L'unité dans la diversité

Les Québécois sont les habitants du Québec, en grande majorité francophones. La plupart sont les descendants de 8 500 immigrants français arrivés au cours des dix-septième et dix-huitième siècles. En 2006, la Chambre des communes a reconnu que les Québécois forment une nation au sein d'un Canada uni. Un million d'Anglo-Québécois ont des origines remontant à 250 ans et forment un élément dynamique du tissu social québécois. Le mode de vie dans les régions anglophones a été largement défini par des centaines de milliers de colons et d'immigrants anglais, gallois, écossais et irlandais.

La grande majorité des Canadiens se disent chrétiens; le groupe religieux le plus nombreux est celui des catholiques, suivi des Églises issues de la réforme protestante. Le nombre de musulmans, de juifs, d'hindous, de sikhs et de personnes sans religion ne cesse d'augmenter. La diversité du Canada s'étend aux Canadiens gais et lesbiennes, qui bénéficient de l'entière protection de la loi, y compris de l'accès au mariage civil.

La diversité au Canada

Depuis les années 1800, la majorité des Canadiens sont nés au Canada. Toutefois, le Canada est souvent appelé une terre d'immigration. De nombreux groupes ethniques et religieux vivent et travaillent côte à côte pacifiquement : les Anglais, les Français, les Écossais, les Irlandais, les Allemands, les Italiens, les Chinois, les Autochtones, les Ukrainiens, les Hollandais, les Sud-Asiatiques et les Scandinaves. Depuis les années 1970, la plupart des immigrants viennent des pays asiatiques. On s'attend à ce que les nouveaux arrivants adoptent les principes démocratiques lorsqu'ils deviennent des citoyens canadiens, notamment la primauté du droit.`,
    textBr: `O Canadá é reconhecido em todo o mundo como um país forte e livre. Os canadenses têm orgulho de sua própria identidade. Herdamos a mais antiga tradição constitucional contínua do mundo. Somos a única monarquia constitucional da América do Norte. Nossas instituições preservam um compromisso com os valores da paz, da ordem e do bom governo, enunciados em 1867 no primeiro documento constitucional do Canadá, o Ato da América do Norte Britânica. Os poetas e cancionistas saudaram o Canadá como o « Great Dominion », que significa « grande domínio » ou « grande potência ».

Para compreender o que significa ser canadense, é preciso conhecer nossos três povos fundadores: os Indígenas, os Franceses e os Britânicos.

Os povos indígenas

Acredita-se que os ancestrais dos povos indígenas vieram da Ásia há vários milhares de anos. Eles já estavam estabelecidos aqui muito antes da chegada dos primeiros exploradores europeus à América do Norte. Os direitos indígenas e os direitos decorrentes de tratados estão enunciados na Constituição canadense. Os direitos territoriais foram garantidos pela primeira vez pela Proclamação Real de 1763, do rei George III, que estabelecia as bases da negociação dos tratados com os recém-chegados — tratados que nem sempre foram respeitados.

Atualmente, o termo povos indígenas designa três grupos distintos. A palavra índio designa todos os povos indígenas, exceto os Inuítes e os Métis; desde os anos 1970, eles também são chamados de Primeiras Nações. Cerca de metade dos membros das Primeiras Nações vivem em aproximadamente 600 comunidades dentro de reservas, e a outra metade habita fora das reservas, sobretudo nos centros urbanos. Os Inuítes, termo que significa « o povo » na língua inuktitut, vivem em pequenas comunidades espalhadas pelo Ártico. Os Métis são um povo distinto, composto de pessoas nascidas da união de Indígenas e Europeus; a maioria vive nas províncias das Pradarias e fala seu próprio dialeto, o michif. Cerca de 65 por 100 dos povos indígenas são das Primeiras Nações, 30 por 100 são Métis e 4 por 100 são Inuítes.

Dos anos 1800 até os anos 1980, o governo federal colocou muitas crianças indígenas em internatos a fim de assimilá-las à cultura canadense dominante. Essas escolas eram mal financiadas e as línguas e práticas culturais indígenas eram em sua maioria proibidas. Em 2008, Ottawa apresentou desculpas oficiais a todos os antigos alunos dos internatos indígenas.

Os franceses e os ingleses

A sociedade canadense moderna originou-se em grande parte das civilizações cristãs francófona e anglófona, trazidas da Europa pelos colonos. O francês e o inglês são as duas línguas oficiais do Canadá, e o governo federal é obrigado por lei a fornecer serviços nas duas línguas em todo o Canadá. O Canadá conta hoje com 18 milhões de anglófonos e 7 milhões de francófonos. Embora a maioria dos francófonos viva no Québec, um milhão de francófonos vive em Ontario, no Nouveau-Brunswick e em Manitoba. O Nouveau-Brunswick é a única província oficialmente bilíngue.

Os Acadianos são os descendentes de colonos franceses estabelecidos já em 1604 no que hoje se chama Maritimes. De 1755 a 1763, durante a guerra entre a Grã-Bretanha e a França, mais de dois terços dos Acadianos foram deportados para fora de sua pátria. Apesar dessa provação, chamada de « Grande Deslocamento », os Acadianos sobreviveram e mantiveram sua identidade própria.

A unidade na diversidade

Os Quebequenses são os habitantes do Québec, em grande maioria francófonos. A maioria é descendente de 8 500 imigrantes franceses chegados ao longo dos séculos dezessete e dezoito. Em 2006, a Câmara dos Comuns reconheceu que os Quebequenses formam uma nação dentro de um Canadá unido. Um milhão de Anglo-Quebequenses têm origens que remontam a 250 anos e formam um elemento dinâmico do tecido social quebequense. O modo de vida nas regiões anglófonas foi em grande parte definido por centenas de milhares de colonos e imigrantes ingleses, galeses, escoceses e irlandeses.

A grande maioria dos canadenses se declara cristã; o grupo religioso mais numeroso é o dos católicos, seguido pelas Igrejas oriundas da reforma protestante. O número de muçulmanos, judeus, hindus, sikhs e de pessoas sem religião não cessa de aumentar. A diversidade do Canadá estende-se aos canadenses gays e lésbicas, que gozam de plena proteção da lei, inclusive do acesso ao casamento civil.

A diversidade no Canadá

Desde os anos 1800, a maioria dos canadenses nasceu no Canadá. Todavia, o Canadá é frequentemente chamado de terra de imigração. Numerosos grupos étnicos e religiosos vivem e trabalham lado a lado pacificamente: os Ingleses, os Franceses, os Escoceses, os Irlandeses, os Alemães, os Italianos, os Chineses, os Indígenas, os Ucranianos, os Holandeses, os Sul-Asiáticos e os Escandinavos. Desde os anos 1970, a maioria dos imigrantes vem dos países asiáticos. Espera-se que os recém-chegados adotem os princípios democráticos quando se tornam cidadãos canadenses, em especial a primazia do direito.`
  },
  {
    id: '03-histoire',
    title: "L'histoire du Canada",
    titleBr: 'A história do Canadá',
    icon: '&#128214;',
    audioFr: '/audio/book/03-histoire-fr.mp3',
    audioBr: '/audio/book/03-histoire-br.mp3',
    textFr: `Les peuples autochtones

Lorsque les Européens arrivent au Canada, ils constatent que toutes les régions sont habitées par des peuples autochtones, qu'ils appellent « Indiens », car les premiers explorateurs croyaient avoir atteint les Indes orientales. Ces peuples vivent de la terre, certains de la chasse et de la cueillette, d'autres, de l'agriculture. L'arrivée des négociants en fourrures, des missionnaires, des soldats et des colons européens modifie à jamais le mode de vie autochtone. Un grand nombre d'Autochtones meurent de maladies transmises par les Européens. Malgré tout, durant les 200 premières années de leur coexistence, Autochtones et Européens forment des liens économiques, religieux et militaires solides qui jettent les bases du Canada.

Les premiers Européens

Les Vikings d'Islande, qui ont colonisé le Groenland il y a 1 000 ans, ont aussi atteint le Labrador et l'île de Terre-Neuve; les vestiges de leur établissement, l'Anse aux Meadows, sont un site du patrimoine mondial. L'exploration européenne commence véritablement en 1497, avec l'expédition de Jean Cabot, Italien ayant immigré en Angleterre, le premier à dessiner une carte de la côte Est du Canada. Il débarque à Terre-Neuve ou à l'île du Cap-Breton en 1497 et prend possession de cette nouvelle terre au nom de l'Angleterre.

Un fleuve est exploré, le Canada trouve son nom

De 1534 à 1542, Jacques Cartier traverse trois fois l'Atlantique, revendiquant des terres pour le roi de France, François Ier. Cartier entend deux guides qu'il a capturés prononcer le mot iroquois kanata, qui signifie « village ». Dès les années 1550, on voit apparaître le nom Canada sur les cartes. Jacques Cartier est le premier Européen à explorer le fleuve Saint-Laurent.

La Nouvelle-France royale

En 1604, les explorateurs français Pierre de Monts et Samuel de Champlain fondent le premier établissement européen au nord de la Floride, d'abord à l'île Sainte-Croix puis à Port-Royal, en Acadie. En 1608, Champlain bâtit une forteresse sur l'emplacement actuel de la ville de Québec. Les colons se sont alliés aux Algonquins, aux Montagnais et aux Hurons, ennemis historiques des Iroquois; ces derniers ont formé une confédération de cinq, puis de six Premières Nations, qui s'est battue contre les Français pendant un siècle. Les Français et les Iroquois ont conclu la paix en 1701. Des dirigeants exceptionnels, comme Jean Talon, Monseigneur de Laval et le comte de Frontenac, bâtissent un empire français qui s'étend de la baie d'Hudson au golfe du Mexique.

La lutte pour un continent

En 1670, le roi Charles II d'Angleterre accorde à la Compagnie de la Baie d'Hudson l'exclusivité du commerce dans le bassin hydrographique se déversant dans la baie d'Hudson. Les colonies anglaises de la côte atlantique finissent par devenir plus riches et plus peuplées que la Nouvelle-France. Au dix-huitième siècle, la France et la Grande-Bretagne se font la guerre pour devenir maîtres de l'Amérique du Nord. En 1759, les Britanniques gagnent la bataille des plaines d'Abraham à Québec, marquant la fin de l'Empire français en Amérique. Les commandants des deux armées, le brigadier James Wolfe et le marquis de Montcalm, sont tués au combat.

Une tradition d'accommodement

Afin de mieux administrer la majorité catholique francophone, le Parlement britannique adopte l'Acte de Québec en 1774. L'un des fondements constitutionnels du Canada, il accorde la liberté religieuse aux catholiques et leur permet d'exercer des fonctions officielles. Il prévoit que les règles juridiques françaises seront appliquées pour les affaires civiles, et les règles anglaises pour les affaires criminelles. Après la guerre, la Grande-Bretagne donne à la colonie le nom de « Province de Québec ».

Les loyalistes de l'empire-uni

En 1776, les treize colonies britanniques au sud du Québec proclament leur indépendance et forment les États-Unis. Plus de 40 000 personnes fidèles à la Couronne, les « loyalistes », fuient l'oppression de la Révolution américaine afin de s'établir en Nouvelle-Écosse et au Québec. Joseph Brant conduit des milliers d'Indiens mohawks loyalistes au Canada. Quelque 3 000 loyalistes noirs viennent vers le nord à la recherche d'une vie meilleure.

Abolition de l'esclavage

En 1793, le Haut-Canada, dirigé par le lieutenant-gouverneur John Graves Simcoe, est la première province de l'Empire à prendre le virage de l'abolition. En 1807, le Parlement britannique interdit la vente et l'achat d'esclaves et abolit ensuite l'esclavage dans tout l'Empire en 1833. Des milliers d'esclaves fuient les États-Unis; ils suivent « l'étoile du Nord » et s'établissent au Canada grâce au « chemin de fer clandestin », un réseau chrétien antiesclavagiste.

La guerre de 1812 : la lutte pour le Canada

Convaincus qu'il sera facile de s'emparer du Canada, les États-Unis lancent une invasion en juin 1812. Mais les Américains se trompent. Des volontaires canadiens et des membres des Premières Nations, dont des Shawnees dirigés par le chef Tecumseh, aident les soldats britanniques à défendre le Canada. En juillet, le major-général sir Isaac Brock s'empare de Detroit, mais il est tué à Queenston Heights. En 1813, le lieutenant-colonel Charles de Salaberry et 460 soldats, pour la plupart des Canadiens français, refoulent 4 000 envahisseurs américains à Châteauguay. La même année, Laura Secord, pionnière et mère de cinq enfants, entreprend une marche dangereuse de 30 kilomètres afin d'avertir le lieutenant James FitzGibbon d'une attaque planifiée; sa bravoure contribue à la victoire de Beaver Dams. En 1814, la tentative de conquête du Canada par les Américains est un échec complet, et la frontière canado-américaine actuelle a en partie été tracée à la suite de cette guerre.

Naissance de la démocratie

La première assemblée de représentants est élue à Halifax, en Nouvelle-Écosse, en 1758. Suivent l'Île-du-Prince-Édouard en 1773 et le Nouveau-Brunswick en 1785. L'Acte constitutionnel de 1791 divise la Province de Québec en deux entités : le Haut-Canada (aujourd'hui l'Ontario), essentiellement loyaliste, protestant et anglophone, et le Bas-Canada (aujourd'hui le Québec), surtout catholique et francophone. Le nom Canada devient alors officiel.

Les rébellions de 1837 et 1838

Durant les années 1830, des réformateurs estiment que les progrès vers la démocratie sont trop lents. Des rébellions armées se produisent en 1837 et 1838 aux environs de Montréal et à Toronto, mais les rebelles sont défaits. Lord Durham, dépêché pour faire rapport, recommande de fusionner le Haut-Canada et le Bas-Canada et de les doter d'un gouvernement responsable, ce qui signifie que les ministres de la Couronne doivent obtenir le soutien de la majorité des représentants élus pour gouverner.

Le gouvernement responsable

La première colonie de l'Amérique du Nord britannique à se doter d'un gouvernement pleinement responsable est la Nouvelle-Écosse, en 1847-1848. En 1840, le Haut-Canada et le Bas-Canada sont réunis pour former la Province du Canada. Des réformateurs comme sir Louis-Hippolyte La Fontaine et Robert Baldwin collaborent à l'établissement d'un gouvernement responsable. La Fontaine, défenseur des droits des francophones, devient en 1849 le premier chef d'un gouvernement responsable au Canada.

La Confédération

De 1864 à 1867, les représentants de la Nouvelle-Écosse, du Nouveau-Brunswick et de la Province du Canada travaillent ensemble pour créer un nouveau pays. On appelle ces hommes les Pères de la Confédération. Ils instaurent deux ordres de gouvernement, le fédéral et le provincial. L'ancienne Province du Canada est séparée en deux nouvelles provinces, l'Ontario et le Québec, qui, avec le Nouveau-Brunswick et la Nouvelle-Écosse, forment le nouveau pays appelé le Dominion du Canada. L'Acte de l'Amérique du Nord britannique est adopté en 1867, et le Dominion du Canada est officiellement créé le 1er juillet 1867. C'est sir Leonard Tilley qui suggère le terme Dominion du Canada, inspiré du psaume 72 de la Bible : « Qu'il domine d'une mer à l'autre. »

Le premier premier ministre du Canada

En 1867, sir John Alexander Macdonald, un des Pères de la Confédération, devient le premier premier ministre du Canada. Né le 11 janvier 1815 en Écosse, il arrive dans le Haut-Canada pendant son enfance et pratique comme avocat à Kingston, en Ontario. Le Parlement a fait du 11 janvier la Journée sir John A. Macdonald; son portrait figure sur les billets de dix dollars. Sir George-Étienne Cartier est le principal architecte de la Confédération issu du Québec; il fait entrer le Québec dans la Confédération et aide à négocier l'entrée des Territoires du Nord-Ouest, du Manitoba et de la Colombie-Britannique.

L'élargissement du Dominion : en 1867, l'Ontario, le Québec, la Nouvelle-Écosse et le Nouveau-Brunswick; en 1870, le Manitoba et les Territoires du Nord-Ouest; en 1871, la Colombie-Britannique; en 1873, l'Île-du-Prince-Édouard; en 1898, le Territoire du Yukon; en 1905, l'Alberta et la Saskatchewan; en 1949, Terre-Neuve-et-Labrador; et en 1999, le Nunavut.

Contestation dans l'Ouest

Quand, en 1869, le Canada prend possession des vastes régions du Nord-Ouest, les 12 000 Métis de la rivière Rouge ne sont pas consultés. En réaction, Louis Riel mène une révolte armée et s'empare de Fort Garry. En 1870, Ottawa envoie des soldats et le Canada crée une nouvelle province, le Manitoba. En 1885, une deuxième révolte dans l'actuelle Saskatchewan mène au procès de Riel et à son exécution pour haute trahison. Beaucoup voient en Riel un héros, un défenseur des droits des Métis et le père du Manitoba. En 1873, le premier ministre Macdonald crée la Police à cheval du Nord-Ouest, ancêtre de la Gendarmerie royale du Canada, l'un des symboles les plus connus de notre pays.

Un chemin de fer d'un océan à l'autre

La Colombie-Britannique intègre le Canada en 1871 après avoir reçu la promesse d'un chemin de fer jusqu'à la côte Ouest. Le 7 novembre 1885, ce puissant symbole d'unité est achevé lorsque Donald Smith (lord Strathcona) pose le dernier crampon du Chemin de fer Canadien Pacifique. Le projet est construit par des travailleurs européens et chinois; plus tard, les Chinois seront victimes de discrimination, et en 2006 le gouvernement du Canada a présenté ses excuses pour cette politique.

La migration vers l'Ouest

L'économie du Canada se développe et s'industrialise durant le boom des années 1890. Sir Wilfrid Laurier est le premier Canadien français à devenir premier ministre depuis la Confédération et il encourage l'immigration vers l'Ouest; son portrait figure sur les billets de cinq dollars. Grâce au chemin de fer, 170 000 Ukrainiens, 115 000 Polonais et des dizaines de milliers d'autres immigrants s'établissent dans l'Ouest avant 1914.

Les femmes obtiennent le droit de vote

La fondatrice du « mouvement des suffragettes » au Canada est la Dre Emily Stowe, première femme canadienne à pratiquer la médecine au pays. En 1916, le Manitoba devient la première province à accorder le droit de vote aux femmes. En 1917, le gouvernement fédéral de sir Robert Borden l'accorde aux élections fédérales, et en 1918, la plupart des citoyennes d'au moins 21 ans peuvent voter. En 1921, Agnes Macphail devient la première députée. Le Québec a accordé le droit de vote aux femmes en 1940, grâce notamment à Thérèse Casgrain.

La Première Guerre mondiale

Quand l'Allemagne attaque la Belgique et la France en 1914 et que la Grande-Bretagne déclare la guerre, plus de 600 000 Canadiens participent au conflit — la plupart volontairement — sur une population totale de huit millions. Le Corps canadien s'empare de la crête de Vimy en avril 1917, au prix de 10 000 morts et blessés; le 9 avril est le Jour de la bataille de Vimy. En 1918, sous le commandement du général sir Arthur Currie, le Corps canadien progresse durant les cent derniers jours du conflit. La guerre prend fin à l'Armistice, le 11 novembre 1918. Au total, 60 000 Canadiens ont été tués et 170 000, blessés.

L'entre-deux-guerres

Après la guerre, l'Empire britannique se transforme en une association libre d'États, le Commonwealth. On appelle « Années folles » les années 1920, une période de prospérité qui se termine par le krach boursier de 1929 et laisse place à la Grande Dépression, durant laquelle le chômage atteint 27 pour 100 en 1933. La Banque du Canada est créée en 1934.

La Seconde Guerre mondiale

La Seconde Guerre mondiale débute en 1939, quand Adolf Hitler envahit la Pologne. Plus d'un million de Canadiens et de Terre-Neuviens participent au conflit sur une population de 11,5 millions; 44 000 sont tués. Les Canadiens combattent à Hong Kong (1941) et à Dieppe (1942). L'Aviation royale du Canada participe à la bataille d'Angleterre, et plus de 130 000 membres d'équipage alliés sont formés au Canada. À la fin de la guerre, le Canada dispose de la troisième marine en importance au monde. Le 6 juin 1944, le « jour J », 15 000 soldats canadiens prennent d'assaut la plage Juno en Normandie. L'Armée canadienne libère les Pays-Bas en 1944-1945; l'Allemagne se rend le 8 mai 1945 et le Japon capitule le 14 août 1945. En 1988, le gouvernement du Canada a présenté ses excuses aux Canadiens d'origine japonaise déplacés durant la guerre.

Chaque année, le 11 novembre, jour du Souvenir, les Canadiens portent le coquelicot rouge et observent un moment de silence à la 11e heure du 11e jour du 11e mois, pour honorer les sacrifices de plus d'un million de braves qui ont servi le Canada et des 110 000 qui ont donné leur vie. Le lieutenant-colonel John McCrae a composé en 1915 le poème « In Flanders Fields » (« Au champ d'honneur »).`,
    textBr: `Os povos indígenas

Quando os europeus chegam ao Canadá, constatam que todas as regiões são habitadas por povos indígenas, que eles chamam de « índios », pois os primeiros exploradores acreditavam ter chegado às Índias Orientais. Esses povos vivem da terra, alguns da caça e da coleta, outros, da agricultura. A chegada dos comerciantes de peles, dos missionários, dos soldados e dos colonos europeus altera para sempre o modo de vida indígena. Um grande número de indígenas morre de doenças transmitidas pelos europeus. Apesar disso, durante os 200 primeiros anos de sua coexistência, indígenas e europeus formam laços econômicos, religiosos e militares sólidos que lançam as bases do Canadá.

Os primeiros europeus

Os Vikings da Islândia, que colonizaram a Groenlândia há 1 000 anos, também chegaram ao Labrador e à ilha da Terra Nova; os vestígios de seu assentamento, l'Anse aux Meadows, são um sítio do patrimônio mundial. A exploração europeia começa verdadeiramente em 1497, com a expedição de Jean Cabot, italiano que imigrou para a Inglaterra, o primeiro a desenhar um mapa da costa Leste do Canadá. Ele desembarca na Terra Nova ou na ilha do Cabo Bretão em 1497 e toma posse dessa nova terra em nome da Inglaterra.

Um rio é explorado, o Canadá encontra seu nome

De 1534 a 1542, Jacques Cartier atravessa três vezes o Atlântico, reivindicando terras para o rei da França, François Ier. Cartier ouve dois guias que havia capturado pronunciar a palavra iroquesa kanata, que significa « aldeia ». Já a partir dos anos 1550, vê-se aparecer o nome Canada nos mapas. Jacques Cartier é o primeiro europeu a explorar o rio São Lourenço.

A Nova França real

Em 1604, os exploradores franceses Pierre de Monts e Samuel de Champlain fundam o primeiro estabelecimento europeu ao norte da Flórida, primeiro na ilha Sainte-Croix e depois em Port-Royal, na Acádia. Em 1608, Champlain constrói uma fortaleza no local atual da cidade de Québec. Os colonos aliaram-se aos Algonquinos, aos Montagnais e aos Hurons, inimigos históricos dos Iroqueses; estes formaram uma confederação de cinco e, depois, de seis Primeiras Nações, que combateu contra os franceses durante um século. Os franceses e os Iroqueses firmaram a paz em 1701. Líderes excepcionais, como Jean Talon, Monsenhor de Laval e o conde de Frontenac, constroem um império francês que se estende da baía de Hudson ao golfo do México.

A luta por um continente

Em 1670, o rei Charles II da Inglaterra concede à Companhia da Baía de Hudson a exclusividade do comércio na bacia hidrográfica que deságua na baía de Hudson. As colônias inglesas da costa atlântica acabam por se tornar mais ricas e mais povoadas do que a Nova França. No século dezoito, a França e a Grã-Bretanha fazem guerra para se tornarem senhoras da América do Norte. Em 1759, os britânicos vencem a batalha das planícies de Abraham em Québec, marcando o fim do Império francês na América. Os comandantes dos dois exércitos, o brigadeiro James Wolfe e o marquês de Montcalm, são mortos em combate.

Uma tradição de acomodação

A fim de melhor administrar a maioria católica francófona, o Parlamento britânico adota o Ato de Québec em 1774. Um dos fundamentos constitucionais do Canadá, ele concede a liberdade religiosa aos católicos e lhes permite exercer funções oficiais. Prevê que as regras jurídicas francesas serão aplicadas para os assuntos civis, e as regras inglesas para os assuntos criminais. Após a guerra, a Grã-Bretanha dá à colônia o nome de « Província de Québec ».

Os legalistas do império unido

Em 1776, as treze colônias britânicas ao sul de Québec proclamam sua independência e formam os Estados Unidos. Mais de 40 000 pessoas fiéis à Coroa, os « legalistas », fogem da opressão da Revolução Americana a fim de se estabelecerem na Nova Escócia e em Québec. Joseph Brant conduz milhares de índios mohawks legalistas ao Canadá. Cerca de 3 000 legalistas negros vêm para o norte em busca de uma vida melhor.

Abolição da escravidão

Em 1793, o Alto Canadá, dirigido pelo vice-governador John Graves Simcoe, é a primeira província do Império a tomar o rumo da abolição. Em 1807, o Parlamento britânico proíbe a venda e a compra de escravos e abole, em seguida, a escravidão em todo o Império em 1833. Milhares de escravos fogem dos Estados Unidos; eles seguem « a estrela do Norte » e se estabelecem no Canadá graças à « ferrovia clandestina », uma rede cristã antiescravagista.

A guerra de 1812: a luta pelo Canadá

Convencidos de que será fácil apoderar-se do Canadá, os Estados Unidos lançam uma invasão em junho de 1812. Mas os americanos se enganam. Voluntários canadenses e membros das Primeiras Nações, entre os quais Shawnees dirigidos pelo chefe Tecumseh, ajudam os soldados britânicos a defender o Canadá. Em julho, o major-general sir Isaac Brock apodera-se de Detroit, mas é morto em Queenston Heights. Em 1813, o tenente-coronel Charles de Salaberry e 460 soldados, em sua maioria canadenses franceses, repelem 4 000 invasores americanos em Châteauguay. No mesmo ano, Laura Secord, pioneira e mãe de cinco filhos, empreende uma marcha perigosa de 30 quilômetros a fim de avisar o tenente James FitzGibbon de um ataque planejado; sua bravura contribui para a vitória de Beaver Dams. Em 1814, a tentativa de conquista do Canadá pelos americanos é um fracasso completo, e a fronteira canado-americana atual foi em parte traçada na sequência dessa guerra.

O nascimento da democracia

A primeira assembleia de representantes é eleita em Halifax, na Nova Escócia, em 1758. Seguem-se a Ilha do Príncipe Eduardo em 1773 e o Novo Brunswick em 1785. O Ato Constitucional de 1791 divide a Província de Québec em duas entidades: o Alto Canadá (atualmente Ontário), essencialmente legalista, protestante e anglófono, e o Baixo Canadá (atualmente Québec), sobretudo católico e francófono. O nome Canada torna-se então oficial.

As rebeliões de 1837 e 1838

Durante os anos 1830, alguns reformadores consideram que os progressos rumo à democracia são lentos demais. Rebeliões armadas ocorrem em 1837 e 1838 nos arredores de Montréal e em Toronto, mas os rebeldes são derrotados. Lord Durham, enviado para apresentar um relatório, recomenda fundir o Alto Canadá e o Baixo Canadá e dotá-los de um governo responsável, o que significa que os ministros da Coroa devem obter o apoio da maioria dos representantes eleitos para governar.

O governo responsável

A primeira colônia da América do Norte britânica a dotar-se de um governo plenamente responsável é a Nova Escócia, em 1847-1848. Em 1840, o Alto Canadá e o Baixo Canadá são reunidos para formar a Província do Canadá. Reformadores como sir Louis-Hippolyte La Fontaine e Robert Baldwin colaboram no estabelecimento de um governo responsável. La Fontaine, defensor dos direitos dos francófonos, torna-se em 1849 o primeiro chefe de um governo responsável no Canadá.

A Confederação

De 1864 a 1867, os representantes da Nova Escócia, do Novo Brunswick e da Província do Canadá trabalham juntos para criar um novo país. Esses homens são chamados de Pais da Confederação. Eles instauram dois níveis de governo, o federal e o provincial. A antiga Província do Canadá é separada em duas novas províncias, Ontário e Québec, que, com o Novo Brunswick e a Nova Escócia, formam o novo país chamado Dominion do Canadá. O Ato da América do Norte britânica é adotado em 1867, e o Dominion do Canadá é oficialmente criado em 1º de julho de 1867. Foi sir Leonard Tilley quem sugeriu o termo Dominion do Canadá, inspirado no salmo 72 da Bíblia: « Que ele domine de um mar a outro. »

O primeiro primeiro-ministro do Canadá

Em 1867, sir John Alexander Macdonald, um dos Pais da Confederação, torna-se o primeiro primeiro-ministro do Canadá. Nascido em 11 de janeiro de 1815 na Escócia, ele chega ao Alto Canadá durante sua infância e exerce como advogado em Kingston, Ontário. O Parlamento fez do dia 11 de janeiro a Jornada sir John A. Macdonald; seu retrato figura nas cédulas de dez dólares. Sir George-Étienne Cartier é o principal arquiteto da Confederação oriundo de Québec; ele faz Québec entrar na Confederação e ajuda a negociar a entrada dos Territórios do Noroeste, de Manitoba e da Colúmbia Britânica.

A ampliação do Dominion: em 1867, Ontário, Québec, Nova Escócia e Novo Brunswick; em 1870, Manitoba e os Territórios do Noroeste; em 1871, a Colúmbia Britânica; em 1873, a Ilha do Príncipe Eduardo; em 1898, o Território do Yukon; em 1905, Alberta e Saskatchewan; em 1949, Terra Nova e Labrador; e em 1999, o Nunavut.

Contestação no Oeste

Quando, em 1869, o Canadá toma posse das vastas regiões do Noroeste, os 12 000 Métis do rio Vermelho não são consultados. Em reação, Louis Riel lidera uma revolta armada e se apodera de Fort Garry. Em 1870, Ottawa envia soldados e o Canadá cria uma nova província, Manitoba. Em 1885, uma segunda revolta na atual Saskatchewan leva ao julgamento de Riel e à sua execução por alta traição. Muitos veem em Riel um herói, um defensor dos direitos dos Métis e o pai de Manitoba. Em 1873, o primeiro-ministro Macdonald cria a Polícia Montada do Noroeste, ancestral da Real Polícia Montada do Canadá, um dos símbolos mais conhecidos de nosso país.

Uma ferrovia de um oceano a outro

A Colúmbia Britânica integra o Canadá em 1871 após ter recebido a promessa de uma ferrovia até a costa Oeste. Em 7 de novembro de 1885, esse poderoso símbolo de unidade é concluído quando Donald Smith (lord Strathcona) finca o último grampo da Ferrovia Canadian Pacific. O projeto é construído por trabalhadores europeus e chineses; mais tarde, os chineses serão vítimas de discriminação, e em 2006 o governo do Canadá apresentou suas desculpas por essa política.

A migração rumo ao Oeste

A economia do Canadá desenvolve-se e se industrializa durante o boom dos anos 1890. Sir Wilfrid Laurier é o primeiro canadense francês a tornar-se primeiro-ministro desde a Confederação e ele incentiva a imigração rumo ao Oeste; seu retrato figura nas cédulas de cinco dólares. Graças à ferrovia, 170 000 ucranianos, 115 000 poloneses e dezenas de milhares de outros imigrantes se estabelecem no Oeste antes de 1914.

As mulheres obtêm o direito de voto

A fundadora do « movimento das sufragistas » no Canadá é a Dra. Emily Stowe, primeira mulher canadense a exercer a medicina no país. Em 1916, Manitoba torna-se a primeira província a conceder o direito de voto às mulheres. Em 1917, o governo federal de sir Robert Borden o concede nas eleições federais, e em 1918, a maioria das cidadãs com pelo menos 21 anos pode votar. Em 1921, Agnes Macphail torna-se a primeira deputada. O Québec concedeu o direito de voto às mulheres em 1940, graças notadamente a Thérèse Casgrain.

A Primeira Guerra Mundial

Quando a Alemanha ataca a Bélgica e a França em 1914 e a Grã-Bretanha declara guerra, mais de 600 000 canadenses participam do conflito — em sua maioria voluntariamente — sobre uma população total de oito milhões. O Corpo Canadense apodera-se da crista de Vimy em abril de 1917, ao custo de 10 000 mortos e feridos; o 9 de abril é o Dia da batalha de Vimy. Em 1918, sob o comando do general sir Arthur Currie, o Corpo Canadense avança durante os cem últimos dias do conflito. A guerra termina no Armistício, em 11 de novembro de 1918. No total, 60 000 canadenses foram mortos e 170 000, feridos.

O entreguerras

Após a guerra, o Império britânico transforma-se em uma associação livre de Estados, o Commonwealth. Chamam-se « Anos Loucos » os anos 1920, um período de prosperidade que termina com o crash da bolsa de 1929 e dá lugar à Grande Depressão, durante a qual o desemprego atinge 27 por 100 em 1933. O Banco do Canadá é criado em 1934.

A Segunda Guerra Mundial

A Segunda Guerra Mundial começa em 1939, quando Adolf Hitler invade a Polônia. Mais de um milhão de canadenses e terra-novenses participam do conflito sobre uma população de 11,5 milhões; 44 000 são mortos. Os canadenses combatem em Hong Kong (1941) e em Dieppe (1942). A Aviação Real do Canadá participa da batalha da Inglaterra, e mais de 130 000 membros de tripulação aliados são formados no Canadá. Ao fim da guerra, o Canadá dispõe da terceira maior marinha do mundo. Em 6 de junho de 1944, o « Dia D », 15 000 soldados canadenses tomam de assalto a praia Juno na Normandia. O Exército canadense liberta os Países Baixos em 1944-1945; a Alemanha se rende em 8 de maio de 1945 e o Japão capitula em 14 de agosto de 1945. Em 1988, o governo do Canadá apresentou suas desculpas aos canadenses de origem japonesa deslocados durante a guerra.

Todos os anos, em 11 de novembro, dia da Lembrança, os canadenses usam a papoula vermelha e observam um momento de silêncio na 11ª hora do 11º dia do 11º mês, para honrar os sacrifícios de mais de um milhão de bravos que serviram o Canadá e dos 110 000 que deram a vida. O tenente-coronel John McCrae compôs em 1915 o poema « In Flanders Fields » (« No campo de honra »).`
  },
  {
    id: '04-moderne',
    title: 'Le Canada moderne',
    titleBr: 'O Canadá moderno',
    icon: '&#127961;',
    audioFr: '/audio/book/04-moderne-fr.mp3',
    audioBr: '/audio/book/04-moderne-br.mp3',
    textFr: `Comme l'Australie, la Nouvelle-Zélande et d'autres pays, le Canada devient progressivement de plus en plus autonome et est maintenant en mesure de faire des contributions considérables à l'échelle internationale.

Engagement international

La Guerre froide débute quand plusieurs pays libérés d'Europe de l'Est deviennent membres d'un bloc communiste contrôlé par l'Union soviétique sous la dictature de Joseph Staline. Le Canada s'unit à d'autres pays démocratiques de l'Occident pour former l'Organisation du traité de l'Atlantique Nord (OTAN), une alliance militaire, et aux États-Unis pour créer le Commandement de la défense aérospatiale de l'Amérique du Nord (NORAD). Le Canada devient membre de l'Organisation des Nations Unies (ONU) et participe à la défense de la Corée du Sud durant la guerre de Corée (1950-1953), avec un bilan de 500 morts et de 1 000 blessés. Il prend aussi part à de nombreuses missions de maintien de la paix de l'ONU, en Égypte, à Chypre, en Haïti, en ex-Yougoslavie et en Afghanistan.

Le Canada et le Québec

Durant les années qui suivent la guerre, les Canadiens français s'épanouissent. Les années 1960 sont au Québec une époque de changements rapides appelée la « Révolution tranquille ». En 1963, le Parlement établit la Commission royale d'enquête sur le bilinguisme et le biculturalisme, qui aboutit à l'adoption de la Loi sur les langues officielles en 1969, garantissant des services en français et en anglais partout au Canada. En 1970, le Canada participe à la création de la Francophonie. Le mouvement pour la souveraineté du Québec prend de l'ampleur, mais il est défait lors d'un référendum en 1980. En 1982, la Constitution est modifiée sans l'accord du Québec. Le mouvement est défait une fois de plus lors d'un second référendum en 1995.

Les Canadiens d'origine japonaise obtiennent le droit de vote en 1948, et les Autochtones, en 1960. Aujourd'hui, tous les citoyens âgés d'au moins 18 ans peuvent voter. Le Canada accueille des milliers de réfugiés, dont environ 37 000 Hongrois en 1956 et plus de 50 000 Vietnamiens après 1975. Dès les années 1960, le tiers des Canadiens ont une origine autre que britannique ou française, et l'idée du multiculturalisme prend un nouvel élan.

Commerce et croissance économique

Le Canada d'après-guerre connaît une prospérité record. La découverte de gisements de pétrole en Alberta en 1947 lance l'industrie énergétique moderne du Canada. Entre 1945 et 1970, l'économie canadienne devient l'une des plus florissantes parmi les nations industrialisées. On adopte la Loi canadienne sur la santé; le gouvernement fédéral crée en 1940 l'assurance-chômage (maintenant l'assurance-emploi); le Programme de la sécurité de la vieillesse remonte à 1927; le Régime de pensions du Canada et le Régime des rentes du Québec existent depuis 1965.

Les arts et la culture au Canada

Les artistes canadiens reflètent et définissent notre culture. Parmi les hommes et les femmes de lettres, citons Stephen Leacock, Louis Hémon, Pauline Johnson, Émile Nelligan, Margaret Laurence et Mordecai Richler. Dans les arts visuels, le Canada est connu pour le Groupe des sept, fondé en 1920, ainsi que pour Emily Carr, les Automatistes du Québec comme Jean-Paul Riopelle, et Kenojuak Ashevak, qui jette les fondations de l'art inuit moderne. Les films de Denys Arcand connaissent du succès international. Marshall McLuhan et Harold Innis sont des penseurs avant-gardistes. Depuis 1989, l'Agence spatiale canadienne et les astronautes canadiens participent à l'exploration spatiale. Des scientifiques canadiens comme Gerhard Herzberg, John Polanyi, Sidney Altman, Richard E. Taylor, Michael Smith et Bertram Brockhouse remportent le prix Nobel.

Dans les sports, le Canadien James Naismith invente le basket-ball en 1891. Donovan Bailey obtient deux médailles d'or en course de vitesse aux Jeux olympiques de 1996, et Chantal Petitclerc devient championne paralympique. Wayne Gretzky, l'un des plus grands joueurs de hockey de tous les temps, joue pour les Oilers d'Edmonton de 1979 à 1988. En 1980, Terry Fox, qui a perdu sa jambe droite à cause d'un cancer, entreprend le « marathon de l'espoir » afin d'amasser des fonds pour la recherche, devenant un héros pour les Canadiens. En 1985, Rick Hansen fait le tour du globe en fauteuil roulant pour la recherche sur la moelle épinière.

Grandes découvertes et inventions canadiennes

Beaucoup de Canadiens ont fait de grandes découvertes et inventions. Alexander Graham Bell a l'idée du téléphone dans sa maison d'été au Canada. Joseph-Armand Bombardier invente la motoneige. Sir Sandford Fleming invente le système mondial des fuseaux horaires. Mathew Evans et Henry Woodward inventent la première ampoule électrique et vendent le brevet à Thomas Edison. Le Dr Wilder Penfield, neurochirurgien d'avant-garde à l'Université McGill, était appelé « le plus grand Canadien vivant ». Le Dr John A. Hopps invente le premier stimulateur cardiaque. SPAR Aérospatiale et le Conseil national de recherches inventent le Canadarm, un bras robotique utilisé dans l'espace. Mike Lazaridis et Jim Balsillie, de Research In Motion, créent le BlackBerry. Reginald Fessenden contribue à l'invention de la radio en envoyant le premier message vocal sans fil. Enfin, sir Frederick Banting, de Toronto, et Charles Best découvrent l'insuline, une hormone permettant de traiter le diabète, sauvant ainsi 16 millions de personnes dans le monde.`,
    textBr: `Como a Austrália, a Nova Zelândia e outros países, o Canadá torna-se progressivamente cada vez mais autônomo e está agora em condições de fazer contribuições consideráveis em escala internacional.

Engajamento internacional

A Guerra Fria começa quando vários países libertados da Europa Oriental tornam-se membros de um bloco comunista controlado pela União Soviética sob a ditadura de Joseph Staline. O Canadá une-se a outros países democráticos do Ocidente para formar a Organização do Tratado do Atlântico Norte (OTAN), uma aliança militar, e aos Estados Unidos para criar o Comando de Defesa Aeroespacial da América do Norte (NORAD). O Canadá torna-se membro da Organização das Nações Unidas (ONU) e participa da defesa da Coreia do Sul durante a guerra da Coreia (1950-1953), com um saldo de 500 mortos e 1 000 feridos. Toma parte também em numerosas missões de manutenção da paz da ONU, no Egito, em Chipre, no Haiti, na ex-Iugoslávia e no Afeganistão.

O Canadá e o Quebec

Durante os anos que se seguem à guerra, os canadenses franceses prosperam. Os anos 1960 são, no Quebec, uma época de mudanças rápidas chamada de « Revolução Tranquila ». Em 1963, o Parlamento institui a Comissão Real de Inquérito sobre o bilinguismo e o biculturalismo, que culmina na adoção da Lei sobre as línguas oficiais em 1969, garantindo serviços em francês e em inglês em todo o Canadá. Em 1970, o Canadá participa da criação da Francofonia. O movimento pela soberania do Quebec ganha força, mas é derrotado em um referendo em 1980. Em 1982, a Constituição é modificada sem o acordo do Quebec. O movimento é derrotado mais uma vez em um segundo referendo em 1995.

Os canadenses de origem japonesa obtêm o direito de voto em 1948, e os Indígenas, em 1960. Hoje, todos os cidadãos com no mínimo 18 anos podem votar. O Canadá acolhe milhares de refugiados, dentre os quais cerca de 37 000 húngaros em 1956 e mais de 50 000 vietnamitas após 1975. Já a partir dos anos 1960, um terço dos canadenses tem origem diferente da britânica ou francesa, e a ideia do multiculturalismo ganha novo impulso.

Comércio e crescimento econômico

O Canadá do pós-guerra conhece uma prosperidade recorde. A descoberta de jazidas de petróleo em Alberta em 1947 lança a indústria energética moderna do Canadá. Entre 1945 e 1970, a economia canadense torna-se uma das mais florescentes entre as nações industrializadas. Adota-se a Lei Canadense sobre a Saúde; o governo federal cria em 1940 o seguro-desemprego (atualmente o seguro-emprego); o Programa de Segurança da Velhice remonta a 1927; o Regime de Pensões do Canadá e o Regime de Rendas do Quebec existem desde 1965.

As artes e a cultura no Canadá

Os artistas canadenses refletem e definem nossa cultura. Entre os homens e as mulheres de letras, citemos Stephen Leacock, Louis Hémon, Pauline Johnson, Émile Nelligan, Margaret Laurence e Mordecai Richler. Nas artes visuais, o Canadá é conhecido pelo Grupo dos Sete, fundado em 1920, bem como por Emily Carr, pelos Automatistas do Quebec como Jean-Paul Riopelle, e por Kenojuak Ashevak, que lança os fundamentos da arte inuíte moderna. Os filmes de Denys Arcand alcançam sucesso internacional. Marshall McLuhan e Harold Innis são pensadores vanguardistas. Desde 1989, a Agência Espacial Canadense e os astronautas canadenses participam da exploração espacial. Cientistas canadenses como Gerhard Herzberg, John Polanyi, Sidney Altman, Richard E. Taylor, Michael Smith e Bertram Brockhouse conquistam o prêmio Nobel.

Nos esportes, o canadense James Naismith inventa o basquetebol em 1891. Donovan Bailey obtém duas medalhas de ouro na corrida de velocidade nos Jogos Olímpicos de 1996, e Chantal Petitclerc torna-se campeã paralímpica. Wayne Gretzky, um dos maiores jogadores de hóquei de todos os tempos, joga pelos Oilers de Edmonton de 1979 a 1988. Em 1980, Terry Fox, que perdeu a perna direita por causa de um câncer, empreende o « maratona da esperança » a fim de arrecadar fundos para a pesquisa, tornando-se um herói para os canadenses. Em 1985, Rick Hansen dá a volta ao globo em cadeira de rodas pela pesquisa sobre a medula espinhal.

Grandes descobertas e invenções canadenses

Muitos canadenses fizeram grandes descobertas e invenções. Alexander Graham Bell teve a ideia do telefone em sua casa de verão no Canadá. Joseph-Armand Bombardier inventa a motoneve. Sir Sandford Fleming inventa o sistema mundial de fusos horários. Mathew Evans e Henry Woodward inventam a primeira lâmpada elétrica e vendem a patente para Thomas Edison. O Dr. Wilder Penfield, neurocirurgião vanguardista na Universidade McGill, era chamado de « o maior canadense vivo ». O Dr. John A. Hopps inventa o primeiro marca-passo cardíaco. A SPAR Aérospatiale e o Conselho Nacional de Pesquisas inventam o Canadarm, um braço robótico utilizado no espaço. Mike Lazaridis e Jim Balsillie, da Research In Motion, criam o BlackBerry. Reginald Fessenden contribui para a invenção do rádio ao enviar a primeira mensagem de voz sem fio. Por fim, sir Frederick Banting, de Toronto, e Charles Best descobrem a insulina, um hormônio que permite tratar o diabetes, salvando assim 16 milhões de pessoas no mundo.`
  },
  {
    id: '05-gouvernement',
    title: 'Le système de gouvernement',
    titleBr: 'O sistema de governo',
    icon: '&#127963;',
    audioFr: '/audio/book/05-gouvernement-fr.mp3',
    audioBr: '/audio/book/05-gouvernement-br.mp3',
    textFr: `Trois faits principaux caractérisent le système de gouvernement du Canada : notre pays est un État fédéral, une démocratie parlementaire et une monarchie constitutionnelle.

Il y a un gouvernement fédéral, des gouvernements provinciaux et territoriaux et des administrations municipales au Canada. Les responsabilités du gouvernement fédéral et des gouvernements provinciaux ont été définies en 1867 dans l'Acte de l'Amérique du Nord britannique, maintenant connu sous le nom de Loi constitutionnelle de 1867.

Dans la démocratie parlementaire du Canada, la population élit les députés de la Chambre des communes à Ottawa ainsi que des assemblées législatives provinciales et territoriales. Ces représentants adoptent les lois, approuvent et surveillent les dépenses et veillent à ce que le gouvernement soit responsable. Les ministres du Cabinet doivent conserver la « confiance de la Chambre » et démissionner s'ils sont défaits à l'issue d'un vote de censure.

Dans notre État fédéral, le gouvernement fédéral assume la responsabilité des affaires de portée nationale et internationale : la défense, la politique étrangère, le commerce entre les provinces, la monnaie, la navigation, le droit criminel et la citoyenneté. Les provinces sont responsables des municipalités, de l'éducation, de la santé, des ressources naturelles, de la propriété et des droits civils ainsi que des autoroutes. Le gouvernement fédéral et les provinces se partagent la responsabilité de l'agriculture et de l'immigration. Chaque province a sa propre assemblée législative élue. Les trois territoires du Nord, qui ont de petites populations, n'ont pas le statut de province, mais leurs gouvernements exécutent bon nombre des mêmes fonctions.

Le Parlement comprend trois parties : le souverain (la reine ou le roi), le Sénat et la Chambre des communes. La Chambre des communes est la chambre des représentants, composée de députés élus par la population, traditionnellement tous les quatre ans. Les sénateurs sont nommés par le gouverneur général sur recommandation du premier ministre et restent en poste jusqu'à l'âge de 75 ans. Aucun projet de loi ne peut devenir une loi au Canada avant d'avoir été adopté par les deux Chambres et d'avoir obtenu la sanction royale, accordée par le gouverneur général au nom du souverain.

Le Canada étant une monarchie constitutionnelle, son chef d'État est un souverain héréditaire qui règne conformément à la Constitution. Le souverain est le symbole de la souveraineté canadienne, la gardienne des libertés constitutionnelles et le reflet de notre histoire. Comme chef du Commonwealth, le souverain lie le Canada à 53 autres nations. Il existe une nette distinction au Canada entre le chef d'État — le souverain — et le chef du gouvernement — le premier ministre, qui dirige réellement le pays.

Le souverain est représenté au Canada par le gouverneur général, nommé sur recommandation du premier ministre, habituellement pour cinq ans. Dans chacune des dix provinces, le souverain est représenté par le lieutenant-gouverneur. Dans les trois territoires, le commissaire représente le gouvernement fédéral et joue un rôle cérémonial.

L'interaction entre les trois pouvoirs du gouvernement — l'exécutif, le législatif et le judiciaire — aide à protéger les droits et les libertés des Canadiens. Le pouvoir exécutif est formé du premier ministre et du Cabinet. Le pouvoir législatif comprend le Sénat et la Chambre des communes. L'appareil judiciaire comprend la Cour suprême du Canada, composée de neuf juges nommés par le gouverneur général, la Cour fédérale du Canada et les cours provinciales.

Comment un projet de loi devient une loi

Le processus législatif comporte sept étapes. Étape un : première lecture — le projet de loi est lu une première fois et imprimé. Étape deux : deuxième lecture — les députés débattent du principe du projet de loi. Étape trois : étude en comité — les membres du comité examinent le projet de loi, article par article. Étape quatre : étape du rapport — les députés peuvent ajouter d'autres amendements. Étape cinq : troisième lecture — les députés débattent du projet de loi et votent. Étape six : le Sénat — le projet de loi suit un processus similaire. Étape sept : sanction royale — accepté par les deux Chambres, le projet de loi reçoit alors la sanction royale.

Vivant dans une démocratie, les citoyens canadiens ont le droit et la responsabilité de participer à la prise des décisions qui les touchent. Il est important pour les Canadiens âgés de 18 ans ou plus de participer à leur démocratie en votant aux élections fédérales, provinciales ou territoriales, et municipales.`,
    textBr: `Três fatos principais caracterizam o sistema de governo do Canadá: nosso país é um Estado federal, uma democracia parlamentar e uma monarquia constitucional.

Há um governo federal, governos provinciais e territoriais e administrações municipais no Canadá. As responsabilidades do governo federal e dos governos provinciais foram definidas em 1867 no Ato da América do Norte Britânica, atualmente conhecido como Lei Constitucional de 1867.

Na democracia parlamentar do Canadá, a população elege os deputados da Câmara dos Comuns em Ottawa, bem como das assembleias legislativas provinciais e territoriais. Esses representantes aprovam as leis, aprovam e fiscalizam as despesas e zelam para que o governo seja responsável. Os ministros do Gabinete devem conservar a « confiança da Câmara » e renunciar caso sejam derrotados em um voto de censura.

Em nosso Estado federal, o governo federal assume a responsabilidade pelos assuntos de alcance nacional e internacional: a defesa, a política externa, o comércio entre as províncias, a moeda, a navegação, o direito penal e a cidadania. As províncias são responsáveis pelos municípios, pela educação, pela saúde, pelos recursos naturais, pela propriedade e pelos direitos civis, bem como pelas rodovias. O governo federal e as províncias compartilham a responsabilidade pela agricultura e pela imigração. Cada província tem sua própria assembleia legislativa eleita. Os três territórios do Norte, que têm pequenas populações, não têm o status de província, mas seus governos desempenham muitas das mesmas funções.

O Parlamento compreende três partes: o soberano (a rainha ou o rei), o Senado e a Câmara dos Comuns. A Câmara dos Comuns é a câmara dos representantes, composta por deputados eleitos pela população, tradicionalmente a cada quatro anos. Os senadores são nomeados pelo governador-geral por recomendação do primeiro-ministro e permanecem no cargo até a idade de 75 anos. Nenhum projeto de lei pode tornar-se lei no Canadá antes de ter sido aprovado pelas duas Câmaras e de ter obtido a sanção real, concedida pelo governador-geral em nome do soberano.

Sendo o Canadá uma monarquia constitucional, seu chefe de Estado é um soberano hereditário que reina em conformidade com a Constituição. O soberano é o símbolo da soberania canadense, a guardiã das liberdades constitucionais e o reflexo de nossa história. Como chefe do Commonwealth, o soberano vincula o Canadá a 53 outras nações. Existe uma nítida distinção no Canadá entre o chefe de Estado — o soberano — e o chefe de governo — o primeiro-ministro, que realmente dirige o país.

O soberano é representado no Canadá pelo governador-geral, nomeado por recomendação do primeiro-ministro, habitualmente por cinco anos. Em cada uma das dez províncias, o soberano é representado pelo vice-governador. Nos três territórios, o comissário representa o governo federal e desempenha um papel cerimonial.

A interação entre os três poderes do governo — o executivo, o legislativo e o judiciário — ajuda a proteger os direitos e as liberdades dos canadenses. O poder executivo é formado pelo primeiro-ministro e pelo Gabinete. O poder legislativo compreende o Senado e a Câmara dos Comuns. O aparelho judiciário compreende a Corte Suprema do Canadá, composta por nove juízes nomeados pelo governador-geral, a Corte Federal do Canadá e as cortes provinciais.

Como um projeto de lei se torna lei

O processo legislativo tem sete etapas. Etapa um: primeira leitura — o projeto de lei é lido uma primeira vez e impresso. Etapa dois: segunda leitura — os deputados debatem o princípio do projeto de lei. Etapa três: estudo em comissão — os membros da comissão examinam o projeto de lei, artigo por artigo. Etapa quatro: etapa do relatório — os deputados podem acrescentar outras emendas. Etapa cinco: terceira leitura — os deputados debatem o projeto de lei e votam. Etapa seis: o Senado — o projeto de lei segue um processo semelhante. Etapa sete: sanção real — aceito pelas duas Câmaras, o projeto de lei recebe então a sanção real.

Vivendo em uma democracia, os cidadãos canadenses têm o direito e a responsabilidade de participar da tomada das decisões que os afetam. É importante para os canadenses com 18 anos ou mais participar de sua democracia votando nas eleições federais, provinciais ou territoriais, e municipais.`
  },
  {
    id: '06-elections',
    title: 'Les élections fédérales',
    titleBr: 'As eleições federais',
    icon: '&#128499;',
    audioFr: '/audio/book/06-elections-fr.mp3',
    audioBr: '/audio/book/06-elections-br.mp3',
    textFr: `Les Canadiens votent aux élections pour les personnes qu'ils veulent comme représentants à la Chambre des communes. Les membres de la Chambre des communes sont aussi appelés membres du Parlement ou députés. Le Canada est divisé en 308 zones électorales, appelées circonscriptions. Les citoyens de chaque circonscription élisent un député qui siège à la Chambre des communes. Dans chaque circonscription, le candidat qui obtient le plus grand nombre de votes devient le député.

D'après une loi adoptée par le Parlement, des élections fédérales doivent avoir lieu le troisième lundi d'octobre tous les quatre ans après les dernières élections générales. Le premier ministre peut toutefois demander au gouverneur général de déclencher une élection plus tôt. Les citoyens canadiens âgés de 18 ans ou plus peuvent se présenter à une élection fédérale comme candidats.

Voter

Un des privilèges de la citoyenneté canadienne est le droit de vote. Pour voter lors d'une élection fédérale ou d'un référendum fédéral, il faut être citoyen canadien, être âgé d'au moins 18 ans le jour du vote, et être inscrit sur la liste électorale. Les listes électorales sont produites à partir du Registre national des électeurs par un organisme neutre du Parlement appelé Élections Canada. Quand une élection est déclenchée, Élections Canada envoie une carte d'information de l'électeur à chaque personne inscrite. Même si vous ne recevez pas de carte, vous pouvez faire ajouter votre nom à la liste électorale en tout temps, même le jour de l'élection.

Vote secret

La loi canadienne prévoit le droit à un vote secret. Cela veut dire que personne ne peut vous regarder voter et que personne, y compris les membres de votre famille, votre employeur ou votre représentant syndical, n'a le droit d'insister pour que vous lui disiez pour qui vous avez voté. Immédiatement après la fermeture des bureaux de vote, le personnel électoral compte les votes et les résultats sont annoncés à la radio, à la télévision et dans les journaux.

Après une élection

Habituellement, après une élection, le chef du parti politique qui a le plus grand nombre de sièges à la Chambre des communes est invité par le gouverneur général à former le gouvernement et devient le premier ministre. Si le parti au pouvoir détient au moins la moitié des sièges, il s'agit d'un gouvernement majoritaire; s'il en détient moins de la moitié, il forme un gouvernement minoritaire.

Le premier ministre et le parti au pouvoir forment le gouvernement aussi longtemps qu'ils ont la confiance de la majorité des députés. Quand la Chambre des communes vote sur un enjeu important comme le budget, on considère qu'il s'agit d'une question de confiance; si le parti au pouvoir est défait, le premier ministre demande habituellement au gouverneur général de déclencher une élection.

Le premier ministre choisit les ministres de la Couronne, la plupart parmi les députés de la Chambre des communes. Le premier ministre et les ministres du Cabinet forment le Cabinet, préparent le budget et proposent la plupart des nouvelles lois. Les autres partis qui ne sont pas au pouvoir sont appelés les partis d'opposition. Le parti d'opposition qui a le plus grand nombre de députés est l'opposition officielle, ou La loyale Opposition de Sa Majesté. Il y a actuellement trois grands partis politiques représentés à la Chambre des communes : le Parti conservateur, le Nouveau Parti démocratique et le Parti libéral.

La procédure de vote en période électorale

Les électeurs inscrits reçoivent une carte d'information de l'électeur, qui confirme que leur nom est sur la liste et indique quand et où voter. Si vous ne pouvez pas voter le jour de l'élection, vous pouvez voter par anticipation ou par bulletin de vote spécial. Le jour de l'élection, rendez-vous à votre bureau de vote avec votre carte et une preuve de votre identité et de votre adresse. Pour voter, inscrivez un « X » dans le cercle à côté du nom du candidat de votre choix. Votre vote est secret : on vous invite à vous rendre derrière l'isoloir, puis vous pliez le bulletin et le déposez dans l'urne. Quand les bureaux de vote ferment, chaque bulletin est compté et les résultats sont rendus publics.

Les autres ordres de gouvernement au Canada

L'administration municipale ou locale joue un rôle important dans la vie des citoyens. Elle a habituellement un conseil composé d'un maire et de conseillers municipaux, qui adopte des lois appelées « règlements » touchant la communauté locale. Les municipalités sont responsables de la planification urbaine, des rues et des routes, de l'assainissement, du déneigement, de la lutte contre les incendies, des services d'urgence, du transport en commun et de certains services sociaux et de santé locaux.

Les élections provinciales, territoriales et municipales se tiennent par vote secret, mais ne suivent pas les mêmes règles que les élections fédérales. Les Premières Nations ont des chefs de bande et des conseillers, qui ont de grandes responsabilités dans les réserves, notamment au sujet du logement et des écoles.`,
    textBr: `Os canadenses votam nas eleições para escolher as pessoas que desejam como representantes na Câmara dos Comuns. Os membros da Câmara dos Comuns também são chamados de membros do Parlamento ou deputados. O Canadá está dividido em 308 zonas eleitorais, chamadas circunscrições. Os cidadãos de cada circunscrição elegem um deputado que ocupa assento na Câmara dos Comuns. Em cada circunscrição, o candidato que obtém o maior número de votos torna-se o deputado.

De acordo com uma lei adotada pelo Parlamento, as eleições federais devem realizar-se na terceira segunda-feira de outubro a cada quatro anos após as últimas eleições gerais. O primeiro-ministro pode, no entanto, pedir ao governador-geral que convoque uma eleição antecipada. Os cidadãos canadenses com 18 anos ou mais podem candidatar-se a uma eleição federal como candidatos.

Votar

Um dos privilégios da cidadania canadense é o direito de voto. Para votar em uma eleição federal ou em um referendo federal, é preciso ser cidadão canadense, ter pelo menos 18 anos no dia da votação, e estar inscrito na lista eleitoral. As listas eleitorais são produzidas a partir do Registro Nacional de Eleitores por um órgão neutro do Parlamento chamado Élections Canada. Quando uma eleição é convocada, a Élections Canada envia um cartão de informação do eleitor a cada pessoa inscrita. Mesmo que você não receba o cartão, pode acrescentar seu nome à lista eleitoral a qualquer momento, inclusive no dia da eleição.

Voto secreto

A lei canadense prevê o direito a um voto secreto. Isso significa que ninguém pode observar você votando e que ninguém, incluindo os membros de sua família, seu empregador ou seu representante sindical, tem o direito de insistir para que você diga em quem votou. Imediatamente após o encerramento dos locais de votação, a equipe eleitoral conta os votos e os resultados são anunciados no rádio, na televisão e nos jornais.

Após uma eleição

Normalmente, após uma eleição, o líder do partido político que tem o maior número de assentos na Câmara dos Comuns é convidado pelo governador-geral a formar o governo e torna-se o primeiro-ministro. Se o partido no poder detém ao menos a metade dos assentos, trata-se de um governo majoritário; se detém menos da metade, forma um governo minoritário.

O primeiro-ministro e o partido no poder formam o governo enquanto tiverem a confiança da maioria dos deputados. Quando a Câmara dos Comuns vota sobre uma questão importante, como o orçamento, considera-se uma questão de confiança; se o partido no poder é derrotado, o primeiro-ministro normalmente pede ao governador-geral que convoque uma eleição.

O primeiro-ministro escolhe os ministros da Coroa, a maioria entre os deputados da Câmara dos Comuns. O primeiro-ministro e os ministros do Gabinete formam o Gabinete, preparam o orçamento e propõem a maioria das novas leis. Os demais partidos que não estão no poder são chamados de partidos de oposição. O partido de oposição que tem o maior número de deputados é a oposição oficial, ou A Leal Oposição de Sua Majestade. Atualmente há três grandes partidos políticos representados na Câmara dos Comuns: o Partido Conservador, o Novo Partido Democrático e o Partido Liberal.

O procedimento de votação no período eleitoral

Os eleitores inscritos recebem um cartão de informação do eleitor, que confirma que seu nome está na lista e indica quando e onde votar. Se você não puder votar no dia da eleição, poderá votar de forma antecipada ou por cédula de votação especial. No dia da eleição, dirija-se ao seu local de votação com seu cartão e um comprovante de sua identidade e de seu endereço. Para votar, marque um « X » no círculo ao lado do nome do candidato de sua escolha. Seu voto é secreto: você é convidado a dirigir-se atrás da cabine de votação, depois dobra a cédula e a deposita na urna. Quando os locais de votação fecham, cada cédula é contada e os resultados são tornados públicos.

As outras esferas de governo no Canadá

A administração municipal ou local desempenha um papel importante na vida dos cidadãos. Ela costuma ter um conselho composto por um prefeito e por vereadores municipais, que adota leis chamadas « regulamentos » que afetam a comunidade local. Os municípios são responsáveis pelo planejamento urbano, pelas ruas e estradas, pelo saneamento, pela remoção de neve, pelo combate a incêndios, pelos serviços de emergência, pelo transporte público e por certos serviços sociais e de saúde locais.

As eleições provinciais, territoriais e municipais realizam-se por voto secreto, mas não seguem as mesmas regras que as eleições federais. As Primeiras Nações têm chefes de banda e conselheiros, que possuem grandes responsabilidades nas reservas, especialmente no que diz respeito à habitação e às escolas.`
  },
  {
    id: '07-justice',
    title: 'Le système de justice',
    titleBr: 'O sistema de justiça',
    icon: '&#9878;',
    audioFr: '/audio/book/07-justice-fr.mp3',
    audioBr: '/audio/book/07-justice-br.mp3',
    textFr: `Le système de justice du Canada garantit à chacun l'application régulière de la loi. Notre système judiciaire est fondé sur la présomption d'innocence dans les affaires criminelles, ce qui veut dire que chacun est innocent jusqu'à preuve du contraire.

Le système juridique du Canada se fonde sur un héritage qui comprend la primauté du droit, la liberté prévue par la loi, les principes démocratiques et l'application régulière de la loi. L'application régulière de la loi est le principe selon lequel le gouvernement doit respecter toutes les garanties juridiques auxquelles a droit une personne en vertu de la loi.

Le Canada est régi par un système organisé de lois. Ces lois sont des règles écrites, rédigées par des représentants élus, ayant pour but de guider les individus dans notre société. Les tribunaux règlent les conflits et la police fait respecter les lois. Au Canada, la loi s'applique à tous, y compris aux juges, aux politiciens et à la police. Nos lois ont pour objectifs de maintenir l'ordre dans la société, de fournir un moyen pacifique de régler les conflits et d'exprimer les valeurs et les croyances des Canadiens.

Les tribunaux

La Cour suprême du Canada est le plus haut tribunal de notre pays. La Cour fédérale du Canada s'occupe des questions concernant le gouvernement fédéral. Dans la plupart des provinces, il y a une cour d'appel et une cour de première instance, qu'on appelle parfois Cour du Banc de la Reine ou Cour suprême. Il y a aussi des tribunaux provinciaux pour des infractions de moindre importance, comme les tribunaux de la famille, les cours des infractions routières et les tribunaux des petites créances pour les affaires civiles concernant de petites sommes d'argent.

La police

Le rôle de la police est de veiller à la sécurité des gens et à l'application de la loi. Vous pouvez demander l'aide de la police dans toutes sortes de situations : s'il y a eu un accident, si quelqu'un vous a volé quelque chose, si vous êtes victime d'une agression, si vous êtes témoin d'un crime ou si quelqu'un que vous connaissez a disparu.

Il y a différents genres de police au Canada. Il y a des services de police provinciaux en Ontario et au Québec et des services de police municipaux dans toutes les provinces. La Gendarmerie royale du Canada (GRC) applique les lois fédérales dans l'ensemble du Canada et sert de police provinciale dans toutes les provinces et tous les territoires, sauf l'Ontario et le Québec, ainsi que dans certaines municipalités. Vous pouvez poser des questions aux agents de police au sujet de leurs services ou de leur conduite : presque tous les services de police ont un processus grâce auquel vous pouvez faire part de vos préoccupations.

Obtenir une aide juridique

Des avocats peuvent vous aider à résoudre des problèmes juridiques et vous représenter en cour. Si vous ne pouvez pas payer les services d'un avocat, la plupart des communautés offrent des services d'aide juridique gratuitement ou à un faible coût.`,
    textBr: `O sistema de justiça do Canadá garante a todos a aplicação regular da lei. Nosso sistema judiciário fundamenta-se na presunção de inocência nos casos criminais, o que significa que cada pessoa é inocente até que se prove o contrário.

O sistema jurídico do Canadá baseia-se em uma herança que compreende a primazia do direito, a liberdade prevista pela lei, os princípios democráticos e a aplicação regular da lei. A aplicação regular da lei é o princípio segundo o qual o governo deve respeitar todas as garantias jurídicas a que uma pessoa tem direito em virtude da lei.

O Canadá é regido por um sistema organizado de leis. Essas leis são regras escritas, redigidas por representantes eleitos, que têm por objetivo orientar os indivíduos em nossa sociedade. Os tribunais resolvem os conflitos e a polícia faz cumprir as leis. No Canadá, a lei se aplica a todos, inclusive aos juízes, aos políticos e à polícia. Nossas leis têm por objetivos manter a ordem na sociedade, oferecer um meio pacífico de resolver os conflitos e expressar os valores e as crenças dos canadenses.

Os tribunais

A Corte Suprema do Canadá é o mais alto tribunal de nosso país. A Corte Federal do Canadá ocupa-se das questões relativas ao governo federal. Na maioria das províncias, há uma corte de apelação e uma corte de primeira instância, que às vezes é chamada de Cour du Banc de la Reine ou Corte Suprema. Há também tribunais provinciais para infrações de menor importância, como os tribunais de família, as cortes de infrações de trânsito e os tribunais de pequenas causas para os processos cíveis que envolvem pequenas quantias de dinheiro.

A polícia

O papel da polícia é zelar pela segurança das pessoas e pela aplicação da lei. Você pode solicitar a ajuda da polícia em todo tipo de situação: se houve um acidente, se alguém lhe roubou alguma coisa, se você é vítima de uma agressão, se você é testemunha de um crime ou se alguém que você conhece desapareceu.

Há diferentes tipos de polícia no Canadá. Há serviços de polícia provinciais em Ontario e no Québec e serviços de polícia municipais em todas as províncias. A Real Polícia Montada do Canadá (GRC) aplica as leis federais em todo o Canadá e atua como polícia provincial em todas as províncias e todos os territórios, exceto Ontario e Québec, bem como em certos municípios. Você pode fazer perguntas aos agentes de polícia sobre seus serviços ou sua conduta: quase todos os serviços de polícia têm um processo por meio do qual você pode comunicar suas preocupações.

Obter ajuda jurídica

Advogados podem ajudá-lo a resolver problemas jurídicos e representá-lo em juízo. Se você não puder pagar os serviços de um advogado, a maioria das comunidades oferece serviços de assistência jurídica gratuitamente ou a baixo custo.`
  },
  {
    id: '08-symboles',
    title: 'Les symboles canadiens',
    titleBr: 'Os símbolos canadenses',
    icon: '&#127809;',
    audioFr: '/audio/book/08-symboles-fr.mp3',
    audioBr: '/audio/book/08-symboles-br.mp3',
    textFr: `Le Canada a beaucoup de symboles importants — des objets, des événements et des personnes — qui aident à expliquer ce que signifie être Canadien et à façonner notre identité nationale.

La Couronne

La Couronne est un symbole de l'État au Canada depuis 400 ans. Le Canada est une monarchie constitutionnelle à part entière depuis la Confédération en 1867, pendant le règne de la reine Victoria. La reine Elizabeth II est devenue la reine du Canada en 1952. La Couronne est un symbole du gouvernement, y compris du Parlement, des assemblées législatives, des tribunaux, des services de police et des forces canadiennes.

La fleur de lys

On prétend que la fleur de lys a été adoptée par le roi français en 496. Elle a été le symbole de la royauté française pendant plus de 1 000 ans et celui de la colonie de la Nouvelle-France. En 1948, le Québec adopte son propre drapeau conçu à partir de la croix et de la fleur de lys.

Les drapeaux au Canada

Un nouveau drapeau canadien a été hissé pour la première fois en 1965. Le motif rouge-blanc-rouge s'inspire du drapeau du Collège militaire royal de Kingston, fondé en 1876. Le rouge et le blanc sont les couleurs de la France et de l'Angleterre depuis le Moyen Âge et les couleurs nationales du Canada depuis 1921. Le Red Ensign canadien a été le drapeau du Canada pendant environ 100 ans.

La feuille d'érable

La feuille d'érable est le symbole du Canada le plus connu. Les feuilles d'érable ont été adoptées comme symbole par les Canadiens français au dix-huitième siècle; elles figurent sur les uniformes et les insignes militaires canadiens depuis les années 1850.

Les armoiries et la devise

Pour exprimer sa fierté nationale après la Première Guerre mondiale, le Canada a adopté des armoiries officielles et une devise nationale, A Mari usque ad Mare, ce qui en latin signifie « d'un océan à l'autre ». Les armoiries contiennent les symboles de l'Angleterre, de la France, de l'Écosse et de l'Irlande ainsi que des feuilles d'érable rouges.

Le castor

Le castor a été choisi comme symbole de la Compagnie de la Baie d'Hudson il y a plusieurs siècles. Il devient en 1834 l'emblème de la Société Saint-Jean-Baptiste. On voit ce rongeur infatigable sur les pièces de cinq cents ainsi que sur les armoiries de la Saskatchewan et de l'Alberta.

Les édifices du Parlement

Les édifices du Parlement, de style néogothique, ont été terminés dans les années 1860. L'édifice du Centre a été détruit par un incendie accidentel en 1916 et reconstruit en 1922; la Bibliothèque est l'unique partie épargnée par les flammes. La Tour de la Paix a été terminée en 1927 en souvenir de la Première Guerre mondiale. À l'intérieur, la Chapelle du Souvenir contient les Livres du Souvenir, où sont écrits les noms des soldats, des marins et des aviateurs qui sont morts au service du Canada.

Les sports populaires

Le hockey est considéré comme le sport d'hiver national; il a vu le jour au Canada au dix-neuvième siècle. Les équipes de la Ligue nationale de hockey se disputent la Coupe Stanley, donnée en 1892 par lord Stanley, gouverneur général du Canada. Le football canadien est le deuxième sport le plus populaire. Le curling, introduit par les pionniers écossais, est également populaire. La crosse, sport ancien joué à l'origine par les Autochtones, est le sport officiel de l'été. Le soccer compte plus de joueurs inscrits que toute autre activité sportive.

Les langues officielles du Canada

Le français et l'anglais sont les deux langues officielles et constituent d'importants symboles d'identité. Vous devez posséder une connaissance suffisante du français ou de l'anglais pour obtenir la citoyenneté canadienne; cette exigence ne s'applique pas aux candidats âgés de 55 ans ou plus. Adoptée par le Parlement en 1969, la Loi sur les langues officielles vise à établir l'égalité entre le français et l'anglais, à maintenir les communautés de langue officielle en situation minoritaire et à promouvoir l'égalité des deux langues dans la société.

L'hymne national

Le « Ô Canada » a été proclamé hymne national en 1980, un siècle après avoir été chanté pour la première fois dans la ville de Québec, en 1880. L'hymne royal du Canada, « Dieu protège la Reine (ou le Roi) », peut être joué à toute occasion où les Canadiens veulent honorer le souverain.

La Croix de Victoria

La Croix de Victoria est la plus haute distinction que peuvent recevoir les Canadiens; elle reconnaît des actes de bravoure remarquables face à l'ennemi. Elle a été décernée à 96 Canadiens depuis 1854. Alexander Roberts Dunn fut le premier Canadien à la recevoir, lors de la guerre de Crimée en 1854. Le capitaine Billy Bishop, as de l'aviation, l'a reçue durant la Première Guerre mondiale. Le matelot William Hall fut le premier Noir à la mériter. Le caporal Filip Konowal, né en Ukraine, fut le premier membre du Corps canadien non né dans l'Empire britannique à la recevoir. Le lieutenant Robert Hampton Gray est le dernier Canadien à ce jour à l'avoir reçue, en août 1945.

L'Ordre du Canada

Après avoir utilisé les titres et décorations britanniques pendant de nombreuses années, le Canada a mis en place son propre système de distinctions honorifiques en créant l'Ordre du Canada en 1967, année marquant le centenaire de la Confédération.

Jours fériés et dates importantes

Parmi les jours fériés nationaux et les dates importantes, on compte : le jour de l'An le 1er janvier; la Journée sir John A. Macdonald le 11 janvier; le Jour de Vimy le 9 avril; la Fête de Victoria le lundi précédant le 25 mai; la Fête nationale du Québec, la Saint-Jean-Baptiste, le 24 juin; la Fête du Canada le 1er juillet; la Fête du Travail le premier lundi de septembre; l'Action de grâces le deuxième lundi d'octobre; le Jour du Souvenir le 11 novembre; la Journée sir Wilfrid Laurier le 20 novembre; et Noël le 25 décembre.`,
    textBr: `O Canadá tem muitos símbolos importantes — objetos, eventos e pessoas — que ajudam a explicar o que significa ser canadense e a moldar nossa identidade nacional.

A Coroa

A Coroa é um símbolo do Estado no Canadá há 400 anos. O Canadá é uma monarquia constitucional plena desde a Confederação, em 1867, durante o reinado da rainha Victoria. A rainha Elizabeth II tornou-se rainha do Canadá em 1952. A Coroa é um símbolo do governo, incluindo o Parlamento, as assembleias legislativas, os tribunais, os serviços de polícia e as forças canadenses.

A flor-de-lis

Afirma-se que a flor-de-lis foi adotada pelo rei francês em 496. Ela foi o símbolo da realeza francesa por mais de 1 000 anos e o símbolo da colônia da Nova França. Em 1948, o Quebec adota sua própria bandeira, concebida a partir da cruz e da flor-de-lis.

As bandeiras no Canadá

Uma nova bandeira canadense foi hasteada pela primeira vez em 1965. O padrão vermelho-branco-vermelho inspira-se na bandeira do Colégio Militar Real de Kingston, fundado em 1876. O vermelho e o branco são as cores da França e da Inglaterra desde a Idade Média e as cores nacionais do Canadá desde 1921. O Red Ensign canadense foi a bandeira do Canadá por cerca de 100 anos.

A folha de bordo

A folha de bordo é o símbolo mais conhecido do Canadá. As folhas de bordo foram adotadas como símbolo pelos canadenses franceses no século dezoito; elas figuram nos uniformes e nas insígnias militares canadenses desde a década de 1850.

O brasão e o lema

Para expressar seu orgulho nacional após a Primeira Guerra Mundial, o Canadá adotou um brasão oficial e um lema nacional, A Mari usque ad Mare, o que em latim significa « de um oceano a outro ». O brasão contém os símbolos da Inglaterra, da França, da Escócia e da Irlanda, bem como folhas de bordo vermelhas.

O castor

O castor foi escolhido como símbolo da Companhia da Baía de Hudson há vários séculos. Ele torna-se, em 1834, o emblema da Sociedade Saint-Jean-Baptiste. Vê-se esse roedor incansável nas moedas de cinco centavos, bem como nos brasões da Saskatchewan e da Alberta.

Os edifícios do Parlamento

Os edifícios do Parlamento, de estilo neogótico, foram concluídos na década de 1860. O Edifício Central foi destruído por um incêndio acidental em 1916 e reconstruído em 1922; a Biblioteca é a única parte poupada pelas chamas. A Torre da Paz foi concluída em 1927 em memória da Primeira Guerra Mundial. No interior, a Capela da Lembrança contém os Livros da Lembrança, onde estão escritos os nomes dos soldados, marinheiros e aviadores que morreram a serviço do Canadá.

Os esportes populares

O hóquei é considerado o esporte nacional de inverno; surgiu no Canadá no século dezenove. As equipes da Liga Nacional de Hóquei disputam a Copa Stanley, doada em 1892 por lorde Stanley, governador-geral do Canadá. O futebol canadense é o segundo esporte mais popular. O curling, introduzido pelos pioneiros escoceses, também é popular. O lacrosse, esporte antigo jogado originalmente pelos indígenas, é o esporte oficial do verão. O soccer tem mais jogadores inscritos do que qualquer outra atividade esportiva.

As línguas oficiais do Canadá

O francês e o inglês são as duas línguas oficiais e constituem importantes símbolos de identidade. Você deve possuir um conhecimento suficiente do francês ou do inglês para obter a cidadania canadense; essa exigência não se aplica aos candidatos com 55 anos ou mais. Adotada pelo Parlamento em 1969, a Lei sobre as Línguas Oficiais visa estabelecer a igualdade entre o francês e o inglês, manter as comunidades de língua oficial em situação minoritária e promover a igualdade das duas línguas na sociedade.

O hino nacional

O « Ô Canada » foi proclamado hino nacional em 1980, um século depois de ter sido cantado pela primeira vez na cidade de Quebec, em 1880. O hino real do Canadá, « Deus salve a Rainha (ou o Rei) », pode ser tocado em qualquer ocasião em que os canadenses desejem honrar o soberano.

A Cruz de Victoria

A Cruz de Victoria é a mais alta distinção que os canadenses podem receber; ela reconhece atos de bravura notáveis diante do inimigo. Foi concedida a 96 canadenses desde 1854. Alexander Roberts Dunn foi o primeiro canadense a recebê-la, durante a Guerra da Crimeia em 1854. O capitão Billy Bishop, ás da aviação, recebeu-a durante a Primeira Guerra Mundial. O marinheiro William Hall foi o primeiro negro a merecê-la. O cabo Filip Konowal, nascido na Ucrânia, foi o primeiro membro do Corpo Canadense não nascido no Império Britânico a recebê-la. O tenente Robert Hampton Gray é o último canadense até hoje a tê-la recebido, em agosto de 1945.

A Ordem do Canadá

Após ter utilizado os títulos e as condecorações britânicas durante muitos anos, o Canadá implementou seu próprio sistema de condecorações honoríficas ao criar a Ordem do Canadá em 1967, ano que marca o centenário da Confederação.

Feriados e datas importantes

Entre os feriados nacionais e as datas importantes, contam-se: o dia de Ano-Novo em 1º de janeiro; a Jornada sir John A. Macdonald em 11 de janeiro; o Dia de Vimy em 9 de abril; o Dia de Victoria na segunda-feira anterior a 25 de maio; a Festa Nacional do Quebec, a São João Batista, em 24 de junho; a Festa do Canadá em 1º de julho; o Dia do Trabalho na primeira segunda-feira de setembro; a Ação de Graças na segunda segunda-feira de outubro; o Dia da Lembrança em 11 de novembro; a Jornada sir Wilfrid Laurier em 20 de novembro; e o Natal em 25 de dezembro.`
  },
  {
    id: '09-economie',
    title: "L'économie canadienne",
    titleBr: 'A economia canadense',
    icon: '&#128176;',
    audioFr: '/audio/book/09-economie-fr.mp3',
    audioBr: '/audio/book/09-economie-br.mp3',
    textFr: `Une nation commerçante

Le Canada est depuis toujours une nation commerçante et le commerce reste le moteur de sa croissance économique. Comme Canadiens, nous ne pourrions maintenir notre niveau de vie sans commercer avec les autres pays.

En 1988, le Canada a négocié un accord de libre-échange avec les États-Unis. Le Mexique est devenu notre partenaire en 1994, dans le cadre de l'Accord de libre-échange nord-américain (ALENA), qui englobe 444 millions de personnes. Aujourd'hui, le Canada compte parmi les dix économies les plus importantes de la planète et fait partie du G8, le groupe des huit principaux pays industrialisés, avec les États-Unis, l'Allemagne, le Royaume-Uni, l'Italie, la France, le Japon et la Russie.

Le Canada entretient des liens étroits avec les États-Unis, et chacun des deux pays est le plus important partenaire commercial de l'autre. Plus des trois quarts des exportations canadiennes sont destinées aux États-Unis. Nos deux pays entretiennent la plus importante relation commerciale bilatérale du monde. Des millions de Canadiens et d'Américains traversent chaque année en toute sécurité ce qu'on appelle couramment « la plus longue frontière non défendue du monde ». À Blaine, dans l'État de Washington, l'Arche de la paix symbolise nos liens étroits et nos intérêts communs.

Les trois secteurs de l'économie

L'économie canadienne comprend trois grands secteurs industriels. Le secteur des services fournit des milliers d'emplois dans des domaines tels que le transport, l'éducation, les soins de santé, la construction, les opérations bancaires, les communications, la vente au détail, le tourisme et l'administration gouvernementale; plus de 75 pour 100 des travailleurs canadiens occupent maintenant un emploi dans le secteur des services. Le secteur manufacturier produit des biens vendus au Canada et partout dans le monde, comme le papier, le matériel de haute technologie, la technologie aérospatiale, les automobiles, l'équipement, les aliments et les vêtements. Le secteur de l'exploitation des ressources naturelles comprend la foresterie, la pêche, l'agriculture, l'exploitation minière et l'énergie; ces industries ont joué un rôle important dans l'histoire et le développement du Canada et représentent encore un pourcentage élevé des exportations du pays.`,
    textBr: `Uma nação comerciante

O Canadá sempre foi uma nação comerciante e o comércio continua sendo o motor de seu crescimento econômico. Como canadenses, não poderíamos manter nosso padrão de vida sem comerciar com os outros países.

Em 1988, o Canadá negociou um acordo de livre-comércio com os Estados Unidos. O México tornou-se nosso parceiro em 1994, no âmbito do Acordo de Livre-Comércio da América do Norte (ALENA/NAFTA), que abrange 444 milhões de pessoas. Atualmente, o Canadá figura entre as dez economias mais importantes do planeta e faz parte do G8, o grupo dos oito principais países industrializados, junto com os Estados Unidos, a Alemanha, o Reino Unido, a Itália, a França, o Japão e a Rússia.

O Canadá mantém laços estreitos com os Estados Unidos, e cada um dos dois países é o mais importante parceiro comercial do outro. Mais de três quartos das exportações canadenses destinam-se aos Estados Unidos. Nossos dois países mantêm a mais importante relação comercial bilateral do mundo. Milhões de canadenses e americanos atravessam todos os anos, com total segurança, aquilo que comumente se chama « a mais longa fronteira não defendida do mundo ». Em Blaine, no Estado de Washington, o Arco da Paz simboliza nossos laços estreitos e nossos interesses comuns.

Os três setores da economia

A economia canadense compreende três grandes setores industriais. O setor de serviços oferece milhares de empregos em áreas como transporte, educação, cuidados de saúde, construção, operações bancárias, comunicações, varejo, turismo e administração governamental; mais de 75 por 100 dos trabalhadores canadenses ocupam atualmente um emprego no setor de serviços. O setor manufatureiro produz bens vendidos no Canadá e em todo o mundo, como o papel, os equipamentos de alta tecnologia, a tecnologia aeroespacial, os automóveis, os equipamentos, os alimentos e o vestuário. O setor de exploração dos recursos naturais compreende a silvicultura, a pesca, a agricultura, a mineração e a energia; essas indústrias desempenharam um papel importante na história e no desenvolvimento do Canadá e representam ainda um percentual elevado das exportações do país.`
  },
  {
    id: '10-regions',
    title: 'Les régions du Canada',
    titleBr: 'As regiões do Canadá',
    icon: '&#127758;',
    audioFr: '/audio/book/10-regions-fr.mp3',
    audioBr: '/audio/book/10-regions-br.mp3',
    textFr: `Le Canada est le deuxième pays du monde en étendue et son territoire couvre près de 10 millions de kilomètres carrés. Trois océans bordent les frontières du Canada : l'océan Pacifique à l'ouest, l'océan Atlantique à l'est et l'océan Arctique au nord. À l'extrémité sud s'étend la frontière entre le Canada et les États-Unis.

Le Canada compte cinq régions distinctes : les provinces de l'Atlantique, le centre du Canada, les provinces des Prairies, la côte Ouest et les territoires du Nord. La ville d'Ottawa, située sur la rivière des Outaouais, a été choisie comme capitale du Canada en 1857 par la reine Victoria. Le Canada compte environ 34 millions d'habitants.

Le Canada compte dix provinces et trois territoires, chacun ayant sa capitale. Les provinces de l'Atlantique sont Terre-Neuve-et-Labrador, dont la capitale est St. John's; l'Île-du-Prince-Édouard, dont la capitale est Charlottetown; la Nouvelle-Écosse, dont la capitale est Halifax; et le Nouveau-Brunswick, dont la capitale est Fredericton. Le centre du Canada comprend le Québec, dont la capitale est la ville de Québec, et l'Ontario, dont la capitale est Toronto. Les provinces des Prairies sont le Manitoba, capitale Winnipeg; la Saskatchewan, capitale Regina; et l'Alberta, capitale Edmonton. La côte Ouest est formée de la Colombie-Britannique, dont la capitale est Victoria. Les territoires du Nord sont le Nunavut, capitale Iqaluit; les Territoires du Nord-Ouest, capitale Yellowknife; et le Yukon, capitale Whitehorse.

Les provinces de l'Atlantique

Grâce à leurs côtes et à leurs richesses naturelles, les provinces de l'Atlantique jouent un rôle important dans l'histoire du Canada. Terre-Neuve-et-Labrador, à l'extrême est de l'Amérique du Nord, occupe son propre fuseau horaire; Terre-Neuve est la plus ancienne colonie de l'Empire britannique. L'Île-du-Prince-Édouard, la plus petite des provinces, est reconnue pour ses plages, sa terre rouge et sa production de pommes de terre; berceau de la Confédération, elle est reliée à la terre ferme par le pont de la Confédération. C'est là que Lucy Maud Montgomery a situé son roman Anne… la maison aux pignons verts. La Nouvelle-Écosse a la plus grande population des provinces de l'Atlantique; sa capitale, Halifax, est le plus grand port de la côte Est et abrite la plus importante base navale du Canada. Le Nouveau-Brunswick, fondé par les loyalistes, est la seule province officiellement bilingue, et environ le tiers de sa population vit et travaille en français; sa capitale historique est Fredericton.

Le centre du Canada

L'Ontario et le Québec forment le centre du Canada. Plus de la moitié de la population du pays vit dans le sud de ces deux provinces, près des Grands Lacs et du fleuve Saint-Laurent. Ensemble, l'Ontario et le Québec produisent plus des trois quarts de tous les biens fabriqués au pays. Le Québec compte près de huit millions d'habitants, dont plus des trois quarts ont le français comme langue maternelle; il est le plus grand producteur d'hydroélectricité du pays. Montréal est la deuxième ville la plus populeuse du Canada et la deuxième plus grande ville francophone du monde après Paris. Avec plus de 12 millions d'habitants, l'Ontario compte plus d'un tiers de la population canadienne; Toronto est la plus importante ville du Canada et le principal centre financier du pays. Les cinq Grands Lacs — Ontario, Érié, Huron, Michigan (aux États-Unis) et Supérieur, le plus grand lac d'eau douce au monde — se situent entre l'Ontario et les États-Unis.

Les provinces des Prairies

Le Manitoba, la Saskatchewan et l'Alberta possèdent d'immenses ressources énergétiques et des terres agricoles parmi les plus fertiles du monde. L'économie du Manitoba s'appuie sur l'agriculture, l'exploitation minière et l'hydroélectricité; Winnipeg est la ville la plus peuplée, et son quartier francophone, Saint-Boniface, est la plus grande communauté francophone de l'Ouest. La Saskatchewan, autrefois surnommée « le grenier du monde », possède 40 pour 100 des terres arables du Canada et les plus abondants gisements d'uranium et de potasse du monde; c'est à Regina que se trouve l'école de la Gendarmerie royale du Canada. L'Alberta est la province la plus peuplée des Prairies, nommée en l'honneur de la princesse Louise Caroline Alberta, fille de la reine Victoria; elle compte cinq parcs nationaux, dont le parc national Banff, fondé en 1885, et elle est la première productrice de pétrole et de gaz du Canada.

La côte Ouest

La Colombie-Britannique, sur la côte du Pacifique, est la province canadienne située le plus à l'ouest; sa population est de quatre millions d'habitants. Le port de Vancouver est le plus grand et le plus fréquenté du Canada et nous ouvre la voie vers l'Asie-Pacifique. Environ la moitié des biens produits dans la province proviennent de la foresterie, l'industrie forestière la plus importante du Canada. La Colombie-Britannique possède environ 600 parcs provinciaux. Sa capitale est Victoria.

Les territoires du Nord

Les Territoires du Nord-Ouest, le Nunavut et le Yukon occupent le tiers de la masse terrestre du Canada, mais leur population n'est que de 100 000 habitants. Le Nord est souvent appelé « la terre du soleil de minuit ». Le Yukon détient le record de la température la plus froide jamais enregistrée au Canada, soit moins 63 degrés Celsius; le mont Logan, situé au Yukon, est la plus haute montagne du Canada. La capitale des Territoires du Nord-Ouest, Yellowknife, est surnommée « capitale nord-américaine du diamant », et le fleuve Mackenzie y est le plus long du Canada. Le Nunavut, mot signifiant « notre terre » en inuktitut, a été créé en 1999; sa capitale est Iqaluit et sa population est composée à environ 85 pour 100 d'Inuits. Les Rangers canadiens, qui font partie de la Réserve des Forces canadiennes, assurent une présence dans l'Arctique canadien.`,
    textBr: `O Canadá é o segundo maior país do mundo em extensão, e seu território cobre cerca de 10 milhões de quilômetros quadrados. Três oceanos delimitam as fronteiras do Canadá: o oceano Pacífico a oeste, o oceano Atlântico a leste e o oceano Ártico ao norte. Na extremidade sul estende-se a fronteira entre o Canadá e os Estados Unidos.

O Canadá possui cinco regiões distintas: as províncias do Atlântico, o centro do Canadá, as províncias das Pradarias, a costa Oeste e os territórios do Norte. A cidade de Ottawa, situada às margens do rio Ottawa, foi escolhida como capital do Canadá em 1857 pela rainha Victoria. O Canadá possui cerca de 34 milhões de habitantes.

O Canadá conta com dez províncias e três territórios, cada um com sua capital. As províncias do Atlântico são Terra Nova e Labrador, cuja capital é St. John's; a Ilha do Príncipe Eduardo, cuja capital é Charlottetown; a Nova Escócia, cuja capital é Halifax; e o Nouveau-Brunswick, cuja capital é Fredericton. O centro do Canadá compreende o Québec, cuja capital é a cidade de Québec, e Ontario, cuja capital é Toronto. As províncias das Pradarias são Manitoba, capital Winnipeg; Saskatchewan, capital Regina; e Alberta, capital Edmonton. A costa Oeste é formada pela Colúmbia Britânica, cuja capital é Victoria. Os territórios do Norte são o Nunavut, capital Iqaluit; os Territórios do Noroeste, capital Yellowknife; e o Yukon, capital Whitehorse.

As províncias do Atlântico

Graças a seus litorais e a suas riquezas naturais, as províncias do Atlântico desempenham um papel importante na história do Canadá. Terra Nova e Labrador, no extremo leste da América do Norte, possui seu próprio fuso horário; a Terra Nova é a mais antiga colônia do Império Britânico. A Ilha do Príncipe Eduardo, a menor das províncias, é reconhecida por suas praias, sua terra vermelha e sua produção de batatas; berço da Confederação, está ligada ao continente pela ponte da Confederação. Foi ali que Lucy Maud Montgomery ambientou seu romance Anne… a casa dos telhados verdes. A Nova Escócia tem a maior população das províncias do Atlântico; sua capital, Halifax, é o maior porto da costa Leste e abriga a mais importante base naval do Canadá. O Nouveau-Brunswick, fundado pelos legalistas, é a única província oficialmente bilíngue, e cerca de um terço de sua população vive e trabalha em francês; sua capital histórica é Fredericton.

O centro do Canadá

Ontario e Québec formam o centro do Canadá. Mais da metade da população do país vive no sul dessas duas províncias, próximo aos Grandes Lagos e ao rio São Lourenço. Juntos, Ontario e Québec produzem mais de três quartos de todos os bens fabricados no país. O Québec possui cerca de oito milhões de habitantes, dos quais mais de três quartos têm o francês como língua materna; é o maior produtor de hidreletricidade do país. Montreal é a segunda cidade mais populosa do Canadá e a segunda maior cidade francófona do mundo, depois de Paris. Com mais de 12 milhões de habitantes, Ontario abriga mais de um terço da população canadense; Toronto é a maior cidade do Canadá e o principal centro financeiro do país. Os cinco Grandes Lagos — Ontario, Érié, Huron, Michigan (nos Estados Unidos) e Superior, o maior lago de água doce do mundo — situam-se entre Ontario e os Estados Unidos.

As províncias das Pradarias

Manitoba, Saskatchewan e Alberta possuem imensos recursos energéticos e terras agrícolas entre as mais férteis do mundo. A economia de Manitoba apoia-se na agricultura, na mineração e na hidreletricidade; Winnipeg é a cidade mais populosa, e seu bairro francófono, Saint-Boniface, é a maior comunidade francófona do Oeste. A Saskatchewan, outrora apelidada de « o celeiro do mundo », possui 40 por 100 das terras aráveis do Canadá e os mais abundantes jazimentos de urânio e de potássio do mundo; é em Regina que se localiza a escola da Real Polícia Montada do Canadá. A Alberta é a província mais populosa das Pradarias, batizada em homenagem à princesa Louise Caroline Alberta, filha da rainha Victoria; possui cinco parques nacionais, entre os quais o parque nacional Banff, fundado em 1885, e é a maior produtora de petróleo e gás do Canadá.

A costa Oeste

A Colúmbia Britânica, na costa do Pacífico, é a província canadense situada mais a oeste; sua população é de quatro milhões de habitantes. O porto de Vancouver é o maior e mais movimentado do Canadá e abre o caminho para a Ásia-Pacífico. Cerca de metade dos bens produzidos na província provém da silvicultura, a mais importante indústria florestal do Canadá. A Colúmbia Britânica possui cerca de 600 parques provinciais. Sua capital é Victoria.

Os territórios do Norte

Os Territórios do Noroeste, o Nunavut e o Yukon ocupam um terço da massa terrestre do Canadá, mas sua população é de apenas 100 000 habitantes. O Norte é frequentemente chamado de « a terra do sol da meia-noite ». O Yukon detém o recorde da temperatura mais fria já registrada no Canadá, ou seja, menos 63 graus Celsius; o monte Logan, situado no Yukon, é a mais alta montanha do Canadá. A capital dos Territórios do Noroeste, Yellowknife, é apelidada de « capital norte-americana do diamante », e o rio Mackenzie é ali o mais longo do Canadá. O Nunavut, palavra que significa « nossa terra » em inuktitut, foi criado em 1999; sua capital é Iqaluit e sua população é composta por cerca de 85 por 100 de Inuítes. Os Rangers canadenses, que fazem parte da Reserva das Forças Canadenses, asseguram uma presença no Ártico canadense.`
  }
];
