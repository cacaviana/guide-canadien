<script lang="ts">
  interface Question {
    q: string;
    options: string[];
    correct: number;
    explanation: string;
  }

  const allQuestions: Question[] = [
    { q: "Quelles sont les trois responsabilites liees a la citoyennete?", options: ["Respecter les lois, voter, faire partie d'un jury", "Payer ses impots, acheter canadien, recycler", "Apprendre les deux langues, s'enroler, voter", "Acheter une maison, travailler, voyager"], correct: 0, explanation: "Les 3 responsabilites sont: respecter les lois, repondre a ses besoins/famille, faire partie d'un jury. Voter est aussi un droit et une responsabilite." },
    { q: "Quelle est la signification du coquelicot le jour du Souvenir?", options: ["Celebrer la Confederation", "Honorer notre souveraine", "Honorer les sacrifices des Canadiens morts a la guerre", "Rendre hommage aux premiers ministres"], correct: 2, explanation: "Le coquelicot rouge symbolise le souvenir des sacrifices des Canadiens qui ont participe ou sont morts a la guerre." },
    { q: "Comment les deputes sont-ils choisis?", options: ["Nommes par le Senat", "Choisis par les premiers ministres provinciaux", "Elus par les citoyens de leur circonscription", "Nommes par le gouverneur general"], correct: 2, explanation: "Les deputes de la Chambre des communes sont elus par les citoyens de chacune des 308 circonscriptions." },
    { q: "Que signifie le mot 'Confederation'?", options: ["L'union des colonies britanniques", "La creation du Dominion du Canada en 1867", "L'annexion des Etats-Unis", "L'independance du Quebec"], correct: 1, explanation: "La Confederation fait reference a la creation du Dominion du Canada le 1er juillet 1867, unissant la Nouvelle-Ecosse, le Nouveau-Brunswick et la Province du Canada." },
    { q: "Qui etait le premier premier ministre du Canada?", options: ["Sir Wilfrid Laurier", "Sir George-Etienne Cartier", "Sir John A. Macdonald", "Sir Louis-Hippolyte La Fontaine"], correct: 2, explanation: "Sir John Alexander Macdonald, ne en Ecosse en 1815, est devenu le premier PM en 1867. Son portrait figure sur les billets de dix dollars." },
    { q: "Que veut-on dire par 'gouvernement responsable'?", options: ["Le gouvernement paye toutes les depenses", "Les ministres doivent avoir la confiance de l'assemblee elue et demissionner s'ils sont defaits", "Le PM est responsable de tout", "Le roi gouverne directement"], correct: 1, explanation: "Le gouvernement responsable signifie que les ministres du Cabinet sont responsables devant les representants elus et doivent demissionner s'ils perdent un vote de confiance." },
    { q: "Quels sont les trois pouvoirs du gouvernement?", options: ["Federal, provincial, municipal", "Executif, legislatif, judiciaire", "Senat, Chambre, Souverain", "Armee, police, justice"], correct: 1, explanation: "Les trois pouvoirs sont l'executif (PM et Cabinet), le legislatif (Parlement) et le judiciaire (tribunaux)." },
    { q: "Qui sont les Metis?", options: ["Des immigrants europeens", "Un peuple distinct ne de l'union d'Autochtones et d'Europeens", "Les habitants du Nord", "Les premiers colons francais"], correct: 1, explanation: "Les Metis sont un peuple distinct issu de l'union entre des personnes autochtones et d'origine europeenne. Ils vivent surtout dans les provinces des Prairies." },
    { q: "Quelle est la plus haute distinction que les Canadiens peuvent recevoir?", options: ["L'Ordre du Canada", "La Croix de Victoria", "La Medaille du Merite", "Le Prix du Gouverneur general"], correct: 1, explanation: "La Croix de Victoria est la plus haute distinction militaire pour les Canadiens, decernee pour bravoure face a l'ennemi depuis 1854." },
    { q: "Que symbolisait le Chemin de fer Canadien Pacifique?", options: ["La defense militaire", "L'unite nationale d'un ocean a l'autre", "Le commerce avec les Etats-Unis", "L'immigration europeenne"], correct: 1, explanation: "Le CFCP, acheve en 1885, etait un puissant symbole d'unite reliant la Colombie-Britannique au reste du Canada." },
    { q: "Quand le drapeau canadien actuel a-t-il ete hisse pour la premiere fois?", options: ["1867", "1921", "1965", "1982"], correct: 2, explanation: "Le nouveau drapeau canadien rouge-blanc-rouge a ete hisse pour la premiere fois en 1965. Le motif s'inspire du drapeau du College militaire de Kingston." },
    { q: "Quelle est la devise du Canada?", options: ["D'un ocean a l'autre (A Mari usque ad Mare)", "Liberte, egalite, fraternite", "In God We Trust", "Dieu et mon droit"], correct: 0, explanation: "La devise 'A Mari usque ad Mare' signifie 'd'un ocean a l'autre' en latin, inspiree du psaume 72 de la Bible." },
    { q: "Combien de provinces et de territoires le Canada compte-t-il?", options: ["10 provinces et 2 territoires", "10 provinces et 3 territoires", "12 provinces et 1 territoire", "8 provinces et 5 territoires"], correct: 1, explanation: "Le Canada compte 10 provinces et 3 territoires (Yukon, Territoires du Nord-Ouest et Nunavut)." },
    { q: "Qui peut voter aux elections federales canadiennes?", options: ["Tout resident du Canada", "Tout citoyen canadien de 18 ans ou plus", "Les residents permanents de 16 ans ou plus", "Tous les travailleurs au Canada"], correct: 1, explanation: "Pour voter il faut etre citoyen canadien, age de 18 ans ou plus et inscrit sur la liste electorale." },
    { q: "Quelle province est la seule officiellement bilingue?", options: ["Quebec", "Ontario", "Nouveau-Brunswick", "Manitoba"], correct: 2, explanation: "Le Nouveau-Brunswick est la seule province du Canada qui est officiellement bilingue (francais et anglais)." },
    { q: "Quelle est l'importance de la decouverte de l'insuline par Banting et Best?", options: ["Elle a revolutionne l'agriculture", "Elle a permis de traiter le diabete et sauver des millions de vies", "Elle a aide l'exploration spatiale", "Elle a ameliore les telecommunications"], correct: 1, explanation: "Sir Frederick Banting et Charles Best ont decouvert l'insuline a Toronto, une hormone permettant de traiter le diabete et de sauver ainsi des millions de personnes dans le monde." },
    { q: "Etes-vous tenu de dire a d'autres personnes pour qui vous avez vote?", options: ["Oui, c'est obligatoire", "Non, le vote est secret au Canada", "Seulement a votre employeur", "Seulement a votre famille"], correct: 1, explanation: "Le vote est secret au Canada. Personne ne peut vous regarder voter et personne, y compris votre employeur ou syndicat, n'a le droit de vous forcer a dire pour qui vous avez vote." },
    { q: "Quelles sont les deux langues officielles du Canada?", options: ["Anglais et autochtone", "Francais et espagnol", "Francais et anglais", "Anglais et chinois"], correct: 2, explanation: "Le francais et l'anglais sont les deux langues officielles du Canada. La Loi sur les langues officielles de 1969 garantit des services federaux dans les deux langues." },
    { q: "Qui est le chef d'Etat du Canada?", options: ["Le premier ministre", "Le gouverneur general", "Le souverain (roi ou reine)", "Le president du Senat"], correct: 2, explanation: "Le Canada est une monarchie constitutionnelle. Le chef d'Etat est le souverain hereditaire (roi ou reine), qui regne conformement a la Constitution." },
    { q: "Quelle bataille de la Premiere Guerre mondiale a renforce la fierte nationale canadienne?", options: ["Bataille de Dieppe", "Bataille de la Somme", "Bataille de la crete de Vimy (9 avril 1917)", "Bataille de Hong Kong"], correct: 2, explanation: "La bataille de la crete de Vimy en avril 1917 est devenue un symbole de fierte nationale. Le 9 avril est le Jour de Vimy au Canada." },
  ];

  let questions = $state<Question[]>([]);
  let answers = $state<(number | null)[]>([]);
  let submitted = $state(false);
  let score = $state(0);

  function startExam() {
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    questions = shuffled.slice(0, 20);
    answers = new Array(20).fill(null);
    submitted = false;
    score = 0;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function submitExam() {
    let s = 0;
    for (let i = 0; i < questions.length; i++) {
      if (answers[i] === questions[i].correct) s++;
    }
    score = s;
    submitted = true;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function selectAnswer(qi: number, oi: number) {
    if (submitted) return;
    const next = [...answers];
    next[qi] = oi;
    answers = next;
  }

  startExam();
</script>

<div class="hero">
  <div class="container">
    <h1>Simulado - Examen de Citoyennete</h1>
    <p>20 questions a choix multiples. Vous devez obtenir au moins 15/20 (75%) pour reussir.</p>
    {#if submitted}
      <div class="score-banner" class:pass={score >= 15} class:fail={score < 15}>
        <span class="score-number">{score}/20</span>
        <span class="score-label">{score >= 15 ? 'REUSSI !' : 'ECHEC - Reessayez'}</span>
      </div>
    {/if}
  </div>
</div>

<div class="container exam-container">
  {#each questions as question, qi}
    <div
      class="question-card"
      class:correct={submitted && answers[qi] === question.correct}
      class:wrong={submitted && answers[qi] !== null && answers[qi] !== question.correct}
      class:unanswered={submitted && answers[qi] === null}
    >
      <div class="q-number">{qi + 1}</div>
      <p class="q-text">{question.q}</p>

      <div class="options">
        {#each question.options as option, oi}
          <button
            class="option"
            class:selected={answers[qi] === oi}
            class:is-correct={submitted && oi === question.correct}
            class:is-wrong={submitted && answers[qi] === oi && oi !== question.correct}
            onclick={() => selectAnswer(qi, oi)}
            disabled={submitted}
          >
            <span class="option-letter">{String.fromCharCode(65 + oi)}</span>
            <span>{option}</span>
          </button>
        {/each}
      </div>

      {#if submitted}
        <div class="explanation">
          <strong>Explication:</strong> {question.explanation}
        </div>
      {/if}
    </div>
  {/each}

  <div class="exam-actions">
    {#if !submitted}
      <button class="btn btn-primary btn-lg" onclick={submitExam}>
        Soumettre l'examen
      </button>
    {:else}
      <button class="btn btn-primary btn-lg" onclick={startExam}>
        Recommencer un nouvel examen
      </button>
    {/if}
  </div>
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

  .score-banner {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    margin-top: 16px;
    padding: 12px 20px;
    border-radius: var(--radius);
    font-weight: 700;
  }
  .score-banner.pass { background: #2E7D32; }
  .score-banner.fail { background: #C62828; }
  .score-number { font-size: 1.6rem; }
  .score-label { font-size: 0.9rem; }

  .exam-container { padding: 16px 0 40px; max-width: 800px; }

  .question-card {
    background: white;
    border: 1px solid var(--gray-200);
    border-radius: var(--radius);
    padding: 16px 14px;
    margin-bottom: 16px;
    position: relative;
    transition: border-color 0.2s;
  }
  .question-card.correct { border-color: #2E7D32; border-left: 4px solid #2E7D32; }
  .question-card.wrong { border-color: var(--red); border-left: 4px solid var(--red); }
  .question-card.unanswered { border-color: #F57F17; border-left: 4px solid #F57F17; }

  .q-number {
    position: absolute;
    top: -10px;
    left: 14px;
    background: var(--red);
    color: white;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;
    font-weight: 700;
  }
  .q-text {
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: 12px;
    padding-top: 2px;
    line-height: 1.5;
  }

  .options { display: flex; flex-direction: column; gap: 6px; }

  .option {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 10px 12px;
    border: 2px solid var(--gray-200);
    border-radius: var(--radius-sm);
    background: white;
    font-size: 0.82rem;
    text-align: left;
    transition: all 0.15s;
    color: var(--gray-800);
    line-height: 1.4;
  }
  .option:not(:disabled):hover { border-color: var(--red); background: #FFF5F5; }
  .option.selected { border-color: var(--red); background: #FFEBEE; font-weight: 500; }
  .option.is-correct { border-color: #2E7D32 !important; background: #E8F5E9 !important; color: #1B5E20; }
  .option.is-wrong { border-color: var(--red) !important; background: #FFEBEE !important; color: var(--red-dark); text-decoration: line-through; }

  .option-letter {
    background: var(--gray-100);
    color: var(--gray-600);
    width: 26px;
    height: 26px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 0.8rem;
    flex-shrink: 0;
    margin-top: 1px;
  }
  .option.selected .option-letter { background: var(--red); color: white; }
  .option.is-correct .option-letter { background: #2E7D32; color: white; }

  .explanation {
    margin-top: 10px;
    padding: 10px 12px;
    background: #FFF8E1;
    border-radius: var(--radius-sm);
    font-size: 0.8rem;
    color: var(--gray-800);
    line-height: 1.5;
  }

  .exam-actions { text-align: center; padding: 16px 0 32px; }
  .btn-lg { padding: 14px 32px; font-size: 1rem; border-radius: var(--radius); width: 100%; max-width: 320px; }
  .btn-primary { background: var(--red); color: white; font-weight: 700; }
  .btn-primary:hover { background: var(--red-dark); }

  @media (min-width: 768px) {
    .hero { padding: 48px 0 40px; }
    .hero h1 { font-size: 2rem; }
    .hero p { font-size: 1rem; }
    .score-number { font-size: 2rem; }
    .score-label { font-size: 1.1rem; }
    .score-banner { padding: 16px 32px; gap: 16px; }
    .exam-container { padding: 32px 24px 60px; }
    .question-card { padding: 24px; margin-bottom: 20px; }
    .q-number { width: 28px; height: 28px; font-size: 0.8rem; top: -12px; left: 20px; }
    .q-text { font-size: 1rem; margin-bottom: 16px; }
    .options { gap: 8px; }
    .option { padding: 12px 16px; font-size: 0.9rem; gap: 12px; align-items: center; }
    .explanation { font-size: 0.85rem; padding: 12px 16px; }
    .btn-lg { width: auto; padding: 14px 40px; font-size: 1.1rem; }
  }
</style>
