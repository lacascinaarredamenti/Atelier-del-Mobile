import React, { useState, forwardRef } from 'react';
import ProductModal from './ProductModal';

const products = [
  {
  image: '/images/lampada-da-terra-pallucco.webp',
  name: 'Lampada da terra design industriale Pallucco',
  description: 'Lampada da terra scenografica di grande impatto estetico, caratterizzata da una struttura su treppiede in metallo e da un ampio diffusore circolare orientabile, ispirato ai fari teatrali e fotografici. La luce diretta e potente crea atmosfere suggestive e valorizza ambienti contemporanei, loft, spazi open space e interni di carattere. Un elemento d’arredo iconico che unisce funzionalità, design e forte personalità. Produzione Pallucco.',
  category: 'Lampade',
  price: '€ 3.000,00',
  gallery: [
    '/images/lampada-da-terra-pallucco.webp'
  ],
  specifications: {
    marchio: 'Pallucco'
  }
},
  {
    image: '/images/armadio-classico-francese.webp',
    name: 'Armadio Classico Francese',
    description: 'Armadio in legno massello, dallo stile classico con eleganti pannellature sagomate e dettagli intagliati. La finitura calda mette in risalto le venature naturali del legno, rendendolo un complemento d\'arredo raffinato e senza tempo, perfetto per camera da letto o ingresso.',
    category: 'Armadi',
    price: '€ 2.500,00',
    gallery: [
      '/images/armadio-classico-francese.webp',
      '/images/armadio-classico-francese-1.webp',
      '/images/armadio-classico-francese-2.webp',
      '/images/armadio-classico-francese-3.webp',
      '/images/armadio-classico-francese-4.webp'],
    specifications: {
      altezza: '207 cm',
      larghezza: '156 cm',
      profondita: '64 cm',
      materiale: 'Ciliegio',
      colore: 'Tinta ciliegio'
    }
  },
  {
  image: '/images/lampada-da-tavolo-cenacchi-ottone-e-legno.webp',
  name: 'Lampada da tavolo classica in ottone',
  description: 'Lampada da tavolo in stile classico con struttura in ottone lucido e base in legno scuro, abbinata a paralume cilindrico in tessuto chiaro che diffonde una luce calda e morbida. Le proporzioni equilibrate e le finiture eleganti la rendono ideale per camere da letto, studi, salotti e ambienti tradizionali. Un complemento d’arredo sobrio e raffinato, perfetto per valorizzare mobili in legno e interni dal gusto classico. Produzione firmata Cenacchi.',
  category: 'Lampade',
  price: '€ 80,00',
  gallery: [
    '/images/lampada-da-tavolo-cenacchi-ottone-e-legno.webp'
  ],
  specifications: {
    marchio: 'Cenacchi'
  }
},
  {
  image: '/images/coppia-lampade-cenacchi-pavoni.webp',
  name: 'Coppia lampade scultura bianche',
  description: 'Elegante coppia di lampade da tavolo con basi scultoree in ceramica smaltata bianca, caratterizzate da una forma decorativa a ventaglio che richiama un soggetto ornamentale di forte impatto visivo. I paralumi in tessuto chiaro diffondono una luce morbida e uniforme, ideale per creare un’atmosfera raffinata in soggiorno, camera da letto o ambienti di rappresentanza. Un complemento d’arredo di grande personalità, firmato Cenacchi, pensato per valorizzare spazi sia classici che contemporanei. Vendita esclusivamente in coppia, non separabili.',
  category: 'Lampade',
  price: '€ 1.000,00',
  gallery: [
    '/images/coppia-lampade-cenacchi-pavoni.webp'
  ],
  specifications: {
    marchio: 'Cenacchi'
  }
},
  {
  image: '/images/lampada-floreale-banci.webp',
  name: 'Lampada da tavolo floreale in vetro Banci',
  description: 'Raffinata lampada da tavolo decorativa firmata Banci, caratterizzata da una composizione scultorea di fiori luminosi in vetro lavorato, ispirati alla forma del tulipano. Le tonalità calde del vetro diffondono una luce morbida e avvolgente, mentre le foglie decorative e la base in vetro trasparente con piedistallo in metallo conferiscono eleganza e solidità all’insieme. Un elemento di grande impatto estetico, ideale per valorizzare salotti, ingressi, ambienti classici o spazi di rappresentanza con un tocco artistico e luminoso.',
  category: 'Lampade',
  price: 'Prezzo su richiesta',
  gallery: [
    '/images/lampada-floreale-banci.webp'
  ],
  specifications: {
    marchio: 'Banci'
  }
},
  {
    image: '/images/armadio-classico-1.webp',
    name: 'Armadio/scansia Classico 1',
    description: 'Questo straordinario armadio antico in legno massello è un pezzo di grande pregio, caratterizzato da un design imponente e armonioso tipico della tradizione artigianale italiana. La struttura presenta una splendida lavorazione a cornici sagomate, con pannelli centrali in legno più scuro che creano un elegante contrasto visivo. Le due ante principali, affiancate da comodi cassetti centrali, offrono ampio spazio contenitivo e grande funzionalità.',
    category: 'Armadi',
    price: '€ 1.550,00',
    gallery: [
      '/images/armadio-classico-1.webp',
      '/images/armadio-classico-1-1.webp',
      '/images/armadio-classico-1-2.webp',
      '/images/armadio-classico-1-3.webp'],
    specifications: {
      altezza: '185 cm',
      larghezza: '160 cm',
      profondita: '45 cm',
      materiale: 'Noce',
      colore: 'Noce scuro'
    }
  },
  {
  image: '/images/lampada-ceramica-bordeaux.webp',
  name: 'Lampada in ceramica bordeaux',
  description: 'Lampada da tavolo in ceramica smaltata color bordeaux, impreziosita da finiture dorate che ne valorizzano le forme classiche e l’equilibrio delle proporzioni. Il corpo centrale lucido dona profondità cromatica e carattere all’insieme, mentre la base solida garantisce stabilità e presenza scenica. Il paralume in tessuto chiaro diffonde una luce morbida e uniforme, ideale per creare un’atmosfera accogliente in soggiorno, camera da letto, studio o ingresso. Un complemento d’arredo elegante, capace di integrarsi armoniosamente in ambienti classici e contemporanei.',
  category: 'Lampade',
  price: '€ 150,00',
  gallery: [
    '/images/lampada-ceramica-bordeaux.webp'
  ],
  specifications: {
    marchio: 'Marioni'
  }
},
  {
    image: '/images/armadio-classico-2.webp',
    name: 'Armadio Classico 2',
    description: 'Questo elegante armadio è realizzato in legno massello di noce, con splendide venature naturali e una finitura calda e profonda. Le ante sagomate e le decorazioni intagliate a stella valorizzano il carattere artigianale del pezzo, rendendolo un mobile di grande pregio e fascino classico.',
    category: 'Armadi',
    price: '€ 1.700,00',
    gallery: ['/images/armadio-classico-2.webp'],
    specifications: {
      altezza: '215 cm',
      larghezza: '160 cm',
      profondita: '52 cm',
      materiale: 'Noce',
      colore: 'Noce scuro'
    }
  },
  {
  image: '/images/lampade-ceramica-verde-coppia.webp',
  name: 'Coppia lampade in ceramica verde', 
  description: 'Elegante coppia di lampade da tavolo in ceramica smaltata verde con raffinata lavorazione a rilievo e paralumi in tessuto color ambra che diffondono una luce calda e avvolgente. Le forme morbide e le finiture curate conferiscono grande personalità all’insieme, rendendo queste lampade ideali per valorizzare soggiorni, camere da letto o ambienti di rappresentanza. La coppia garantisce equilibrio estetico e forte impatto scenico, perfetta per chi cerca un complemento d’arredo distintivo e di qualità artigianale. Vendita esclusivamente in coppia, non separabili.',
  category: 'Lampade',
  price: '€ 1.400,00',
  gallery: [
    '/images/lampade-ceramica-verde-coppia.webp'
  ],
  specifications: {
    marchio: 'Cenacchi'
  }
},
  {
    image: '/images/coppia-di-divani-rossi.webp',
    name: 'Coppia di Divani Rossi',
    description: 'Elegante coppia di divani rossi completamente sfoderabili con autentica lavorazione artigianale, caratterizzati da una seduta solida con cinghie e molle, ricca imbottitura in piume d\'oca e finiture tradizionali che conferiscono comfort e fascino senza tempo.',
    category: 'Divani',
    price: '€ 1.750,00',
    gallery: [
      '/images/coppia-di-divani-rossi.webp',
      '/images/coppia-di-divani-rossi-1.webp',
      '/images/coppia-di-divani-rossi-2.webp',
      '/images/coppia-di-divani-rossi-3.webp',
      '/images/coppia-di-divani-rossi-4.webp'],
    specifications: {
      altezza: '80 cm',
      larghezza: '180 cm',
      profondita: '90 cm',
      materiale: 'Tessuto',
      colore: 'Rosso'
    }
  },
  {
  image: '/images/lampada-leucos-bianca.webp',
  name: 'Lampada da tavolo Leucos',
  description: 'Elegante lampada da tavolo firmata Leucos, caratterizzata da una base circolare in metallo dorato e stelo slanciato che sostiene un paralume chiaro dalla forma conica. La luce è calda, diffusa e confortevole, ideale per illuminare ambienti living, studi o camere da letto con uno stile pulito, moderno e raffinato.',
  category: 'Lampade',
  price: '€ 400,00',
  gallery: [
    '/images/lampada-leucos-bianca.webp'
  ],
  specifications: {
    marchio: 'Leucos'
  }
},
  {
    image: '/images/consolle-riviera-venduto.webp',
    name: 'Consolle Riviera',
    description: 'Elegante consolle in legno con raffinati dettagli intarsiati sui cassetti e linee slanciate che la rendono adatta a ingressi, corridoi o soggiorni. Dotata di tre cassetti superiori e di un comodo ripiano inferiore, unisce praticità ed estetica in un mobile di grande equilibrio e stile, ideale per valorizzare l’ambiente con calore e carattere.',
    category: 'Consolle',
    price: '€ 900,00',
    gallery: [
      '/images/consolle-riviera.webp',
      '/images/consolle-riviera-1.webp',
      '/images/consolle-riviera-2.webp',
      '/images/consolle-riviera-3.webp'],
    specifications: {
      altezza: '90 cm',
      larghezza: '150 cm',
      profondita: '41 cm',
      materiale: 'legno di noce',
      colore: 'noce naturale'
    }
  },
  {
    image: '/images/divano-queen.webp',
    name: 'Divano Queen',
    description: 'Elegante divano imbottito con autentica lavorazione artigianale, NON sfoderabile, caratterizzati da una seduta solida con cinghie e molle, ricca imbottitura in piume d\'oca e finiture tradizionali che conferiscono comfort e fascino.',
    category: 'Divani',
    price: '€ 1.000,00',
    gallery: [
      '/images/divano-queen.webp',
      '/images/divano-queen-1.webp',
      '/images/divano-queen-2.webp',
      '/images/divano-queen-3.webp',
      '/images/divano-queen-4.webp'],
    specifications: {
      altezza: '90 cm',
      larghezza: '190 cm',
      profondita: '102 cm',
      materiale: 'Struttura in legno massello, imbottitura in piuma',
      colore: 'Beige, bordo in pelle'
    }
  },
  {
    image: '/images/credenza-2-ante-in-noce.webp',
    name: 'Credenza 2 Ante in Noce',
    description: 'Credenza in legno massello, dal design elegante e arricchita da una raffinata lavorazione geometrica sul frontale. Dotata di due cassetti superiori e ampie ante inferiori, offre un\'ottima capacità di contenimento per la zona giorno o la sala da pranzo. La finitura calda e le linee classiche la rendono un complemento d\'arredo versatile e di grande pregio.',
    category: 'Credenze',
    price: '€ 1.600,00',
    gallery: [
      '/images/credenza-2-ante-in-noce.webp',
      '/images/credenza-2-ante-in-noce-1.webp',
      '/images/credenza-2-ante-in-noce-2.webp',
      '/images/credenza-2-ante-in-noce-3.webp',
      '/images/credenza-2-ante-in-noce-4.webp'],
    specifications: {
      altezza: '110 cm',
      larghezza: '214 cm',
      profondita: '58 cm',
      materiale: 'Legno di noce massello',
      colore: 'Noce scuro'
    }
  },
  {
  image: '/images/lampada-da-tavolo-ildc-classica-120.webp',
  name: 'Lampada da tavolo classica in vetro e ottone – I.L.D.C. (con difetto)',
  description: 'Lampada da tavolo in stile classico con base in vetro lavorato e struttura in metallo color ottone, abbinata a paralume sagomato color avorio con profili decorativi. La luce è calda e diffusa, ideale per ambienti eleganti come soggiorni, camere da letto o ingressi. Il prodotto presenta un piccolo difetto estetico, visibile da vicino, che non compromette il funzionamento e si riflette nel prezzo vantaggioso.',
  category: 'Lampade',
  price: '€ 120,00',
  gallery: [
    '/images/lampada-da-tavolo-ildc-classica-120.webp'
  ],
  specifications: {
    marchio: 'I.L.D.C.',
    note: 'Presente piccolo difetto estetico'
  }
},
  {
  image: '/images/coppia-lampade-i-lumi-di-cristina-classiche.webp',
  name: 'Coppia lampade classiche in vetro',
  description: 'Raffinata coppia di lampade da tavolo con basi in vetro lavorato e finiture metalliche, impreziosite da eleganti paralumi sagomati in tessuto chiaro che diffondono una luce calda e avvolgente. Le proporzioni equilibrate e il design classico rendono queste lampade ideali per valorizzare soggiorni, camere da letto o ambienti di rappresentanza. Un complemento d’arredo elegante e decorativo, firmato I Lumi di Cristina, perfetto per creare atmosfere accoglienti e ricercate. Vendita in coppia.',
  category: 'Lampade',
  price: '€ 400,00',
  gallery: [
    '/images/coppia-lampade-i-lumi-di-cristina-classiche.webp'
  ],
  specifications: {
    marchio: 'I Lumi di Cristina'
  }
},
  {
  image: '/images/coppia-lampade-marioni-classiche.webp',
  name: 'Coppia lampade classiche dorate',
  description: 'Raffinata coppia di lampade da tavolo in stile classico con struttura dorata e dettagli decorativi eleganti, impreziosite da paralumi in tessuto chiaro che diffondono una luce calda e uniforme. Le basi smaltate con tonalità bordeaux donano carattere e profondità visiva, rendendo queste lampade ideali per valorizzare ambienti classici, camere da letto, salotti o ingressi di rappresentanza. Un complemento d’arredo di grande equilibrio estetico, firmato Marioni, pensato per chi cerca qualità artigianale e forte presenza scenica. Vendita esclusivamente in coppia, non separabili.',
  category: 'Lampade',
  price: '€ 200,00',
  gallery: [
    '/images/coppia-lampade-marioni-classiche.webp'
  ],
  specifications: {
    marchio: 'Marioni'
  }
},
  {
    image: '/images/credenza-a-tre-ante.webp',
    name: 'Credenza a Tre Ante',
    description: 'Credenza in legno massello dallo stile classico ed elegante, caratterizzata da tre ante inferiori con ampio spazio contenitivo e tre cassetti superiori ideali per posate o piccoli oggetti. Le cornici lavorate e la finitura calda esaltano la qualità del legno, rendendola un pezzo prestigioso per soggiorno, sala da pranzo o ingresso. Solida, capiente e di grande presenza scenica.',
    category: 'Credenze',
    price: '€ 1.500,00',
    gallery: [
      '/images/credenza-a-tre-ante.webp',
      '/images/credenza-a-tre-ante-1.webp',
      '/images/credenza-a-tre-ante-2.webp',
      '/images/credenza-a-tre-ante-3.webp',
      '/images/credenza-a-tre-ante-4.webp'
    ],
    specifications: {
      altezza: '112 cm',
      larghezza: '205 cm',
      profondita: '50 cm',
      materiale: 'Legno di noce massello',
      colore: 'Noce medio',
    }
  },
  {
  image: '/images/lampada-marioni-ceramica-azzurra.webp',
  name: 'Lampada Marioni in ceramica decorata',
  description: 'Raffinata lampada da tavolo firmata Marioni, realizzata in ceramica con eleganti decorazioni floreali nei toni dell’azzurro. La base armoniosa è impreziosita da dettagli classici e completata da un paralume chiaro che diffonde una luce calda e avvolgente. Ideale per ambienti classici, salotti eleganti, camere da letto o ingressi di rappresentanza.',
  category: 'Lampade',
  price: '€ 250,00',
  gallery: [
    '/images/lampada-marioni-ceramica-azzurra.webp'
  ],
  specifications: {
    marchio: 'Marioni'
  }
},
  {
    image: '/images/libreria-a-2-vani.webp',
    name: 'Libreria a 2 Vani',
    description: 'Libreria in legno massello, caratterizzata da un design classico ed elegante. Dotata di ampie mensole regolabili e di due scomparti con serratura, offre grande capacità di contenimento per libri, oggetti decorativi o collezioni. La finitura calda valorizza le venature naturali del legno, rendendola un complemento d\'arredo raffinato e ideale per studio, soggiorno o ufficio.',
    category: 'Librerie',
    price: '€ 1.800,00',
    gallery: [
      '/images/libreria-a-2-vani.webp',
      '/images/libreria-a-2-vani-1.webp',
      '/images/libreria-a-2-vani-2.webp',
      '/images/libreria-a-2-vani-3.webp',
      '/images/libreria-a-2-vani-4.webp',
    ],
    specifications: {
      altezza: '210 cm',
      larghezza: '180 cm',
      profondita: '40 cm',
      materiale: 'Legno di ciliegio massello',
      colore: 'Ciliegio naturale'
    }
  },
  {
  image: '/images/lampada-fontana-arte-piantana-blu.webp',
  name: 'Lampada da terra Fontana Arte in metallo blu',
  description: 'Elegante lampada da terra firmata Fontana Arte, caratterizzata da una struttura slanciata in metallo laccato blu e diffusore superiore opalino che diffonde una luce morbida e uniforme. Il design essenziale e contemporaneo la rende perfetta per ambienti moderni, zone living, studi o spazi contract, aggiungendo un tocco di colore e personalità all’ambiente.',
  category: 'Lampade',
  price: '€ 150,00',
  gallery: [
    '/images/lampada-fontana-arte-piantana-blu.webp'
  ],
  specifications: {
    marchio: 'Fontana Arte'
  }
},
  {
    image: '/images/credenza-nera-venduto.webp',
    name: 'Credenza Luigi Vittorio',
    description: 'Elegante credenza in stile classico realizzata in legno, rifinita in nero satinato, ideale per arredare con carattere soggiorni, sale da pranzo o ingressi importanti. La struttura è solida e ben proporzionata, con quattro ante capienti e due cassetti centrali. La maniglieria e le bocchette con chiave in ottone donano un tocco raffinato che valorizza l’estetica del mobile, mentre il piano superiore ampio permette di esporre lampade, specchi o oggetti decorativi. Un arredo di grande presenza, pensato per chi cerca funzionalità e stile classico elegante in un unico elemento..',
    category: 'Credenze',
    price: '€ 1200,00',
    gallery: [
      '/images/credenza-nera.webp',
      '/images/credenza-nera-1.webp',
      '/images/credenza-nera-2.webp',
      '/images/credenza-nera-3.webp',
      '/images/credenza-nera-4.webp',
    ],
    specifications: {
      altezza: '100 cm',
      larghezza: '210 cm',
      profondita: '50 cm',
      materiale: 'Legno di ciliegio',
      colore: 'nero'
    }
  },
  {
  image: '/images/lampada-da-terra-marioni-grande.webp',
  name: 'Lampada da terra Marioni',
  description: 'Lampada da terra di grandi dimensioni firmata Marioni, caratterizzata da una base importante in ceramica smaltata dalle linee morbide e scultoree. Il paralume cilindrico in tessuto chiaro diffonde una luce calda e uniforme, creando un’atmosfera elegante e accogliente. Perfetta come punto luce scenografico in soggiorno, ingresso o in un angolo lettura, ideale per ambienti classici e contemporanei dove si cerca un complemento d’arredo di forte presenza. Impianto elettrico funzionante.',
  category: 'Lampade',
  price: '€ 600,00',
  gallery: [
    '/images/lampada-da-terra-marioni-grande.webp'
  ],
  specifications: {
    marchio: 'Marioni'
  }
},
  {
    image: '/images/tavolo-consolle-allungabile.webp',
    name: 'Tavolo Consolle Allungabile',
    description: 'Tavolo consolle in legno massello, dal design classico ed elegante. Dotato di struttura solida con gambe affusolate e piano ampio, è perfetto come punto d\'appoggio in ingresso, soggiorno o sala da pranzo. La finitura in legno scuro valorizza le venature naturali, rendendolo un pezzo raffinato e senza tempo.',
    category: 'Tavoli',
    price: '€ 900,00',
    gallery: [
      '/images/tavolo-consolle-allungabile.webp',
      '/images/tavolo-consolle-allungabile-1.webp',
      '/images/tavolo-consolle-allungabile-2.webp'
    ],
    specifications: {
      altezza: '78 cm',
      larghezza: '140 cm',
      profondita: '45 cm',
      materiale: 'Legno di ciliegio',
      colore: 'Tinta ciliegio'
    }
  },
  {
  image: '/images/lampada-terra-florance.webp',
  name: 'Lampada da terra Florance',
  description: 'Elegante lampada da terra firmata Florance, caratterizzata da una struttura slanciata in metallo con base stabile e diffusore superiore in vetro opalino che proietta una luce morbida e avvolgente verso l’alto. Ideale per soggiorni, salotti o angoli lettura, aggiunge un tocco raffinato e discreto a qualsiasi ambiente.',
  category: 'Lampade',
  price: '€ 290,00',
  gallery: [
    '/images/lampada-terra-florance.webp'
  ],
  specifications: {
    marchio: 'Florance'
  }
},
  {
    image: '/images/tavolino-da-salotto.webp',
    name: 'Tavolino da Salotto',
    description: 'Tavolino da soggiorno in legno massello di ciliegio, caratterizzato da un design classico con bordi sagomati e piano in legno rifinito. Dotato di un pratico cassetto centrale passante, è ideale come tavolino da salotto o complemento d\'arredo. Struttura solida, gambe tornite e finitura calda che si adatta a diversi stili d\'arredo. Perfetto per chi cerca un pezzo elegante e funzionale.',
    category: 'Tavoli',
    price: '€ 750,00',
    gallery: [
      '/images/tavolino-da-salotto.webp',
      '/images/tavolino-da-salotto-1.webp',
      '/images/tavolino-da-salotto-2.webp'
    ],
    specifications: {
      altezza: '39 cm',
      larghezza: '140 cm',
      profondita: '80 cm',
      materiale: 'Legno di ciliegio',
      colore: 'Ciliegio massello'
    }
  },
  {
  image: '/images/lampada-da-terra-leucos.webp',
  name: 'Lampada da terra in vetro Leucos',
  description: 'Lampada da terra dal design elegante e leggero, caratterizzata da una struttura slanciata in metallo con base circolare e diffusore in vetro lavorato che diffonde una luce calda e avvolgente. Le proporzioni verticali valorizzano lo spazio e rendono questo elemento ideale per salotti, zone lettura, camere da letto o ambienti contemporanei ed eleganti. Un complemento d’arredo raffinato che unisce funzionalità, qualità artigianale e stile senza tempo. Produzione Leucos.',
  category: 'Lampade',
  price: '€ 450,00',
  gallery: [
    '/images/lampada-da-terra-leucos.webp'
  ],
  specifications: {
    marchio: 'Leucos'
  }
},
  {
  image: '/images/coppia-lampade-marioni-sfera-avorio-dorata.webp',
  name: 'Coppia lampade sferiche avorio e oro',
  description: 'Elegante coppia di lampade da tavolo con base sferica in ceramica color avorio, impreziosita da una raffinata cornice di elementi dorati che conferiscono luminosità e carattere decorativo. Il paralume cilindrico in tessuto chiaro diffonde una luce morbida e uniforme, ideale per creare atmosfere accoglienti in soggiorno, camera da letto o ambienti di rappresentanza. Un complemento d’arredo di forte impatto estetico, perfetto per interni classici e contemporanei. Produzione firmata Marioni. Vendita in coppia.',
  category: 'Lampade',
  price: '€ 400,00',
  gallery: [
    '/images/coppia-lampade-marioni-sfera-avorio-dorata.webp'
  ],
  specifications: {
    marchio: 'Marioni'
  }
},
  {
    image: '/images/coppia-poltroncine-pelle-blu-scamosciata.webp',
    name: 'Coppia Poltroncine Pelle Blu Scamosciata',
    description: 'Coppia di poltroncine in legno, dal design classico ed elegante. Presentano seduta e schienale imbottiti rivestiti in tessuto vellutato color blu/grigio, rifiniti con borchie decorative. La struttura in legno massello mostra intagli e lavorazioni artigianali, come visibile nel dettaglio dei braccioli e delle giunzioni. Solide e raffinate, sono perfette per soggiorno, studio o come sedute di rappresentanza.',
    category: 'Poltrone',
    price: '€ 700,00 cad.',
    gallery: [
      '/images/coppia-poltroncine-pelle-plu-scamosciata.webp',
      '/images/coppia-poltroncine-pelle-plu-scamosciata-1.webp'
    ],
    specifications: {
      altezza: '97 cm',
      larghezza: '59 cm',
      profondita: '50 cm',
      materiale: 'Noce / Pelle scamosciata',
      colore: 'Noce scuro / Blu'
    }
  },
  {
  image: '/images/lampada-tavolo-fontana-arte.webp',
  name: 'Lampada da tavolo Fontana Arte',
  description: 'Elegante lampada da tavolo firmata Fontana Arte, caratterizzata da un diffusore curvo in materiale opalino che crea un raffinato gioco di luce morbida e avvolgente. La struttura in metallo satinato dona stabilità e un’estetica contemporanea, rendendola ideale per comodini, scrivanie, zone living o ambienti contract. Un oggetto di design italiano che unisce funzionalità, qualità costruttiva e stile senza tempo.',
  category: 'Lampade',
  price:'€ 150,00',
  gallery: [
    '/images/lampada-tavolo-fontana-arte.webp'
  ],
  specifications: {
    marchio: 'Fontana Arte'
  }
},
  {
    image: '/images/consolle-provenzale.webp',
    name: 'Consolle Provenzale',
    description: 'Consolle in legno massello dallo stile elegante e classico. Il fronte è impreziosito da ricchi intagli floreali e una conchiglia centrale, eseguiti artigianalmente. Le gambe curve conferiscono leggerezza e raffinatezza alla struttura. Perfetta per ingresso, soggiorno o come complemento decorativo in ambienti tradizionali e di pregio.',
    category: 'Consolle',
    price: '€ 800,00',
    gallery: [
      '/images/consolle-provenzale.webp',
      '/images/consolle-provenzale-1.webp',
      '/images/consolle-provenzale-2.webp',
      '/images/consolle-provenzale-3.webp'
    ],
    specifications: {
      altezza: '77 cm',
      larghezza: '180 cm',
      profondita: '42 cm',
      materiale: 'Legno rovere massello',
      colore: 'Rovere chiaro'
    }
  },
  {
  image: '/images/lampada-alliotti-pelle.webp',
  name: 'Lampada da tavolo Alliotti con base rivestita in pelle',
  description: 'Elegante lampada da tavolo firmata Alliotti, caratterizzata da una base slanciata rivestita in pelle con dettagli in metallo e paralume plissettato che diffonde una luce calda e accogliente. Un complemento raffinato, ideale per ambienti classici, studi o zone living dove si desidera un tocco di eleganza e qualità artigianale.',
  category: 'Lampade',
  price: '€ 260,00',
  gallery: [
    '/images/lampada-alliotti-pelle.webp'
  ],
  specifications: {
    marchio: 'Alliotti'
  }
},
  {
  image: '/images/lampada-da-tavolo-grande-arredo-100.webp',
  name: 'Lampada in ottone con 2 paralumi – Grande Arredo',
  description: 'Elegante lampada da tavolo a due luci con struttura in ottone e raffinati paralumi in tessuto effetto pergamena, che diffondono una luce calda e avvolgente. Il fusto centrale slanciato con dettagli classici e il piattino decorativo integrato alla base donano equilibrio e carattere all’insieme. Ideale per valorizzare consolle, credenze e tavolini in ambienti classici o tradizionali.',
  category: 'Lampade',
  price: '€ 100,00',
  gallery: [
    '/images/lampada-da-tavolo-grande-arredo-100.webp'
  ],
  specifications: {
    marchio: 'Grande Arredo'
  }
},
  {
    image: '/images/secretaire-neoclassico.webp',
    name: 'Secretaire Neoclassico',
    description: 'Mobile scrittoio in legno massello, elegante e compatto. Dotato di ribalta superiore con serratura e vano contenitivo, ideale come piccolo angolo studio o postazione per scrivere. La parte inferiore offre ulteriore spazio grazie all\'anta con serratura. Le linee classiche e la finitura calda valorizzano le venature del legno, rendendolo un pezzo raffinato per soggiorno, studio o ingresso.',
    category: 'Scrittoio',
    price: '€ 1.100,00',
    gallery: [
      '/images/secretaire-neoclassico.webp',
      '/images/secretaire-neoclassico-1.webp'
    ],
    specifications: {
      altezza: '130 cm',
      larghezza: '74 cm',
      profondita: '37 cm',
      materiale: 'Legno massello',
      colore: 'Noce'
    }
  },
  {
  image: '/images/lampada-da-tavolo-ildc-moderna-360.webp',
  name: 'Lampada moderna con paralume grafico – I.L.D.C. (dimensione grande)',
  description: 'Lampada da tavolo dal design contemporaneo caratterizzata da un elegante paralume cilindrico con motivo grafico a linee intrecciate in contrasto bianco e nero. La struttura in metallo cromato con base circolare dona stabilità e un’estetica pulita e raffinata. Ideale per ambienti moderni, studi, soggiorni o camere da letto, dove diventa un elemento decorativo di forte impatto visivo.',
  category: 'Lampade',
  price: '€ 360,00',
  gallery: [
    '/images/lampada-da-tavolo-ildc-moderna-360.webp'
  ],
  specifications: {
    marchio: 'I.L.D.C.',
    dimensione: 'Grande'
  }
},
  {
  image: '/images/lampada-da-tavolo-ildc-moderna-250.webp',
  name: 'Lampada da tavolo moderna con paralume grafico – I.L.D.C. (dimensione media)',
  description: 'Lampada da tavolo dal design contemporaneo con paralume cilindrico decorato da un elegante motivo grafico a linee intrecciate in contrasto chiaro e scuro. La struttura in metallo cromato con inserti decorativi lucidi dona equilibrio visivo e raffinatezza. Ideale per illuminare comodini, consolle o angoli living moderni, aggiungendo carattere e stile all’ambiente.',
  category: 'Lampade',
  price: '€ 250,00',
  gallery: [
    '/images/lampada-da-tavolo-ildc-moderna-250.webp'
  ],
  specifications: {
    marchio: 'I.L.D.C.',
    dimensione: 'Media'
  }
},
  {
  image: '/images/lampada-da-terra-baga-classica-dorata.webp',
  name: 'Lampada da terra classica dorata',
  description: 'Elegante lampada da terra in stile classico con struttura slanciata scanalata e finiture dorate, abbinata a paralume plissettato in tessuto chiaro che diffonde una luce morbida e accogliente. Il design sobrio e raffinato la rende ideale per salotti, angoli lettura, studi e ambienti eleganti, offrendo un perfetto equilibrio tra funzionalità e valore decorativo. Un complemento d’arredo versatile e senza tempo, firmato Baga.',
  category: 'Lampade',
  price: '€ 200,00',
  gallery: [
    '/images/lampada-da-terra-baga-classica-dorata.webp'
  ],
  specifications: {
    marchio: 'Baga'
  }
},
  {
  image: '/images/lampada-da-tavolo-grande-arredo-210.webp',
  name: 'Lampada da tavolo in vetro di murano verde  – Grande Arredo (dimensione media)',
  description: 'Raffinata lampada da tavolo con corpo in vetro verde sagomato e base in metallo finitura ottone. Il paralume chiaro rifinito con bordo decorativo diffonde una luce morbida ed elegante, valorizzando ambienti classici e contemporanei. Le proporzioni compatte la rendono ideale per consolle, comò e tavolini, mantenendo un forte impatto estetico e un’elevata qualità decorativa.',
  category: 'Lampade',
  price: '€ 210,00',
  gallery: [
    '/images/lampada-da-tavolo-grande-arredo-210.webp'
  ],
  specifications: {
    marchio: 'Grande Arredo',
    dimensione: 'Piccola'
  }
},
  {
    image: '/images/consolle-TV.webp',
    name: 'Consolle TV',
    description: 'Consolle in legno massello, elegante e ricca di dettagli. Dotata di tre cassetti frontali con maniglie decorative in metallo e di un ripiano inferiore per appoggio aggiuntivo. Le gambe mosse e le applicazioni intagliate donano un carattere classico e raffinato. Perfetta per ingressi, soggiorni o ambienti dallo stile tradizionale.',
    category: 'Consolle',
    price: '€ 700,00',
    gallery: [
      '/images/consolle-tv.webp',
      '/images/consolle-tv-1.webp',
      '/images/consolle-tv-2.webp',
      '/images/consolle-tv-3.webp',
      '/images/consolle-tv-4.webp',
      '/images/consolle-tv-5.webp'
    ],
    specifications: {
      altezza: '78 cm',
      larghezza: '160 cm',
      profondita: '45 cm',
      materiale: 'Legno di ciliegio',
      colore: 'Ciliegio scuro'
    }
  },
  {
  image: '/images/lampada-leucos-piantana.webp',
  name: 'Lampada da terra Leucos con stelo sagomato ',
  description: 'Lampada da terra firmata Leucos, caratterizzata da uno stelo slanciato con elegante andamento ondulato e diffusore in vetro opalino che diffonde una luce morbida e uniforme. La base stabile e il design essenziale la rendono ideale per ambienti moderni, zone living, studi o spazi contract, con un perfetto equilibrio tra funzionalità e stile contemporaneo.',
  category: 'Lampade',
  price: '€ 350,00',
  gallery: [
    '/images/lampada-leucos-piantana.webp'
  ],
  specifications: {
    marchio: 'Leucos'
  }
},
  {
    image: '/images/como-a-ribalta.webp',
    name: 'Comò a Ribalta',
    description: 'Comò a ribalta in legno massello, caratterizzato da una finitura anticata e da ricchi dettagli decorativi in metallo in stile classico. Dotato di ribalta superiore con serratura e di quattro cassetti capienti, offre un pratico spazio per riporre documenti e oggetti personali. Le scanalature verticali e gli intagli frontali ne arricchiscono l\'estetica, rendendolo un complemento d\'arredo elegante, ideale per studio, soggiorno o ingresso.',
    category: 'Comò',
    price: '€ 1.900,00',
    gallery: [
      '/images/como-a-ribalta.webp',
      '/images/como-a-ribalta-1.webp',
      '/images/como-a-ribalta-2.webp'
    ],
    specifications: {
      altezza: '104 cm',
      larghezza: '126 cm',
      profondita: '50 cm',
      materiale: 'Legno di ciliegio massello',
      colore: 'Ciliegio chiaro'
    }
  },
  {
    image: '/images/como-a-due-cassetti.webp',
    name: 'Comò a Due Cassetti',
    description: 'Comò decorativo in legno, dal design artistico e ricercato. Caratterizzato da una struttura bombata con motivi intagliati e laccati in rosso su fondo nero lucido, è un pezzo di forte impatto visivo. Dotato di 2 cassetti capienti, unisce funzionalità ed estetica contemporanea. Perfetto come elemento protagonista in soggiorno, ingresso o camera da letto.',
    category: 'Comò',
    price: '€ 900,00',
    gallery: [
      '/images/como-a-due-cassetti.webp',
      '/images/como-a-due-cassetti-1.webp',
      '/images/como-a-due-cassetti-2.webp'
    ],
    specifications: {
      altezza: '85 cm',
      larghezza: '114 cm',
      profondita: '51 cm',
      materiale: 'Legno laccato',
      colore: 'Rosso/Nero'
    }
  },
  {
  image: '/images/lampada-da-terra-banci-candelabro-verde.webp',
  name: 'Lampada da terra candelabro verde',
  description: 'Importante lampada da terra scenografica a più bracci, caratterizzata da una struttura slanciata con elementi decorativi verdi ispirati a motivi vegetali e finiture metalliche dorate. I punti luce con paralumi chiari diffondono un’illuminazione calda e uniforme, ideale per valorizzare saloni, ingressi di rappresentanza o ambienti classici di grande impatto. Un vero elemento d’arredo scultoreo, capace di unire eleganza decorativa e forte presenza estetica. Produzione firmata Banci.',
  category: 'Lampade',
  price: '€ 900,00',
  gallery: [
    '/images/lampada-da-terra-banci-candelabro-verde.webp'
  ],
  specifications: {
    marchio: 'Banci'
  }
},
  {
    image: '/images/vetrinetta-in-ciliegio.webp',
    name: 'Vetrinetta in Ciliegio',
    description: 'Vetrina in legno massello, dallo stile classico ed elegante. Dotata di un cassetto a scomparsa nella parte superiore, due ante in vetro e mensole interne, offre ampio spazio espositivo per oggetti, ceramiche, cristalli o libri. La finitura calda evidenzia le venature naturali del legno, mentre le linee pulite e armoniose la rendono un complemento raffinato per soggiorno, sala da pranzo o studio.',
    category: 'Vetrinette',
    price: '€ 900,00',
    gallery: [
      '/images/vetrinetta-in-ciliegio.webp',
      '/images/vetrinetta-in-ciliegio-1.webp',
      '/images/vetrinetta-in-ciliegio-2.webp',
      '/images/vetrinetta-in-ciliegio-3.webp',
      '/images/vetrinetta-in-ciliegio-4.webp',
      '/images/vetrinetta-in-ciliegio-5.webp'
    ],
    specifications: {
      altezza: '142 cm',
      larghezza: '115 cm',
      profondita: '36 cm',
      materiale: 'Legno di ciliegio massello',
      colore: 'Ciliegio scuro'
    }
  },
  {
    image: '/images/tavolo-a-spicchi-apribile-1.webp',
    name: 'Tavolo a Spicchi Apribile',
    description: 'Tavolo in legno allungabile, con piano chiaro effetto decapato e struttura in legno scuro. Dotato di prolunghe integrate che permettono di estenderne facilmente la superficie, è ideale per cucina o sala da pranzo.',
    category: 'Tavoli',
    price: '€ 400,00',
    gallery: [
      '/images/tavolo-a-spicchi-apribile-1.webp',
      '/images/tavolo-a-spicchi-apribile-2.webp',
      '/images/tavolo-a-spicchi-apribile-3.webp'
    ],
    specifications: {
      altezza: '78 cm',
      larghezza: '100/140 cm',
      profondita: '100/140 cm',
      materiale: 'Legno di faggio',
      colore: 'Struttura faggio scuro, piano bianco'
    }
  },
 {
  image: '/images/lampada-marioni-giallo-ocra.webp',
  name: 'Lampada da tavolo Marioni in ceramica giallo ocra',
  description: 'Lampada da tavolo firmata Marioni con base in ceramica smaltata color giallo ocra e paralume cilindrico chiaro che diffonde una luce calda e avvolgente. Le proporzioni equilibrate e la finitura luminosa la rendono ideale per ambienti classici, living eleganti o camere da letto, aggiungendo carattere e raffinatezza all’arredo.',
  category: 'Lampade',
  price: '€ 350,00',
  gallery: [
    '/images/lampada-marioni-giallo-ocra.webp'
  ],
  specifications: {
    marchio: 'Marioni'
  }
},
  {
  image: '/images/coppia-lampade-ceramica-orientale-cenacchi.webp',
  name: 'Coppia lampade orientali in ceramica',
  description: 'Importante coppia di lampade da tavolo in ceramica smaltata con raffinata scultura orientale raffigurante figura seduta con elefante, eseguita con grande cura dei dettagli e finitura luminosa. I grandi paralumi in tessuto diffondono una luce calda e avvolgente, creando un’atmosfera elegante e suggestiva. Ideali per ambienti classici, salotti di rappresentanza o spazi dal gusto ricercato, queste lampade uniscono valore decorativo e forte impatto scenografico. Produzione firmata Cenacchi. Vendita esclusivamente in coppia.',
  category: 'Lampade',
  price: '€ 1.000,00',
  gallery: [
    '/images/coppia-lampade-ceramica-orientale-cenacchi.webp'
  ],
  specifications: {
    marchio: 'Cenacchi'
  }
},
  {
    image: '/images/sedia-in-rovere.webp',
    name: 'Sedia in Rovere',
    description: 'Sedie in legno, con finitura chiara decapata e seduta in paglia intrecciata. Il design semplice e rustico richiama lo stile country/shabby chic, rendendole perfette per cucina, taverna o ambienti dallo stile tradizionale. Solide, comode e versatili, si adattano facilmente a diversi tipi di arredamento.',
    category: 'Sedie',
    price: '€ 590,00 (gruppo)',
    gallery: ['/images/sedia-in-rovere.webp'],
    specifications: {
      quantita: '6 sedie',
      materiale: 'Rovere decapato',
      colore: 'Grigio sporco'
    }
  },
  {
  image: '/images/lampada-ildc-sfere-cromata.webp',
  name: 'Lampada da tavolo I.L.D.C',
  description: 'Elegante lampada da tavolo firmata I.L.D.C, caratterizzata da una struttura in metallo cromato con elementi sferici decorativi in vetro nero e trasparente. Il paralume plissettato diffonde una luce morbida e raffinata, ideale per arredare con stile salotti, camere da letto, ingressi o ambienti professionali.',
  category: 'Lampade',
  price: '€ 180,00',
  gallery: [
    '/images/lampada-ildc-sfere-cromata.webp'
  ],
  specifications: {
    marchio: 'I.L.D.C'
  }
},
  {
    image: '/images/sedie-in-teak.webp',
    name: 'Sedie in Teak',
    description: 'Sedia moderna con rivestimento intrecciato, caratterizzata da seduta e schienale a intreccio ed eleganti gambe in legno scuro. Il design pulito e contemporaneo la rende ideale per cucina, sala da pranzo o ambienti dallo stile naturale e minimal. Leggera, resistente e facile da abbinare.',
    category: 'Sedie',
    price: '€ 900,00 (gruppo)',
    gallery: ['/images/sedie-in-teak.webp'],
    specifications: {
      quantita: '6 sedie',
      materiale: 'Fibra naturale e legno',
      colore: 'Beige/Marrone scuro'
    }
  },
  {
  image: '/images/lampadaa-bianca-300.webp',
  name: 'Lampada da tavolo in ceramica Marioni',
  description: 'Elegante lampada da tavolo in ceramica smaltata color avorio, caratterizzata da una forma slanciata con maniglie laterali decorative. Il paralume plissettato diffonde una luce calda e avvolgente, ideale per valorizzare ingressi, soggiorni e ambienti classici o raffinati. Un complemento d’arredo di grande equilibrio estetico e qualità artigianale.',
  category: 'Lampade',
  price: '€ 300,00',
  gallery: [
    '/images/lampadaa-bianca-300.webp'
  ],
  specifications: {
    marchio: 'Marioni'
  }
},
  {
    image: '/images/credenza-doppio-corpo-in-noce.webp',
    name: 'Credenza Doppio Corpo in Noce',
    description: 'Credenza in legno massello, dallo stile classico ed elegante. La parte superiore presenta due ante in vetro con ripiani interni, ideale per esporre servizi, libri o oggetti decorativi. Al centro è presente un pratico ripiano con 3 cassetti, mentre la parte inferiore offre ulteriore spazio grazie a due ante capienti. Le cornici lavorate e la finitura calda valorizzano la qualità del legno, rendendola un mobile raffinato e funzionale per soggiorno, studio o sala da pranzo.',
    category: 'Credenze',
    price: '€ 1.800,00',
    gallery: [
      '/images/credenza-doppio-corpo-in-noce.webp',
      '/images/credenza-doppio-corpo-in-noce-1.webp',
      '/images/credenza-doppio-corpo-in-noce-2.webp',
      '/images/credenza-doppio-corpo-in-noce-3.webp',
      '/images/credenza-doppio-corpo-in-noce-4.webp'
    ],
    specifications: {
      altezza: '224 cm',
      larghezza: '123 cm',
      profondita: '58 cm',
      materiale: 'Noce',
      colore: 'Noce scuro'
    }
  },
  {
  image: '/images/lampada-florance-doppia-ottone.webp',
  name: 'Lampada da tavolo doppia Florance in ottone',
  description: 'Elegante lampada da tavolo a due luci firmata Florance, realizzata in metallo finitura ottone con struttura slanciata e paralumi plissettati che diffondono una luce calda e armoniosa. Il design classico ed equilibrato la rende ideale per ambienti raffinati, salotti, ingressi o camere da letto, aggiungendo un tocco decorativo di grande presenza scenica.',
  category: 'Lampade',
  price: '€ 250,00',
  gallery: [
    '/images/lampada-florance-doppia-ottone.webp'
  ],
  specifications: {
    marchio: 'Florance'
  }
},
  {
    image: '/images/tavolo-in-ferro-con-piano-in-teak.webp',
    name: 'Tavolo in Ferro con Piano in Teak',
    description: 'Tavolo rotondo con piano in legno e base in ferro battuto, dal carattere elegante e artigianale. Il piano presenta una lavorazione decorativa, mentre la struttura in ferro sagomato offre stabilità e un tocco classico-rustico. Perfetto per cucina, veranda, taverna o ambienti dallo stile country, industrial o tradizionale.',
    category: 'Tavoli',
    price: '€ 750,00',
    gallery: ['/images/tavolo-in-ferro-con-piano-in-teak.webp'],
    specifications: {
      altezza: '76 cm',
      diametro: '120 cm',
      materiale: 'Legno/Ferro',
      colore: 'Nero/Marrone'
    }
  },
  {
  image: '/images/lampada-mangani-capitello.webp',
  name: 'Lampada Mangani a capitello classico',
  description: 'Raffinata lampada da tavolo firmata Mangani, caratterizzata da una scenografica base a forma di capitello classico in materiale materico lavorato, abbinata a struttura in metallo verniciato e paralume con profilo verde. Un pezzo decorativo di forte personalità, ideale per ambienti eleganti, studi, ingressi o spazi dal gusto artistico.',
  category: 'Lampade',
  price: '€ 400,00',
  gallery: [
    '/images/lampada-mangani-capitello.webp'
  ],
  specifications: {
    marchio: 'Mangani'
  }
},
   {
    image: '/images/credenza-vittorio-venduto.webp',
    name: 'Credenza Vittorio',
    description: 'Credenza in legno in stile classico, caratterizzata da due ante laterali e da un pratico vano centrale con ripiano, ideale per contenere libri o oggetti decorativi. Il cassetto superiore aggiunge ulteriore spazio contenitivo, mentre le linee semplici e proporzionate la rendono adatta a soggiorni, sale da pranzo o ingressi. La finitura calda del legno valorizza l’ambiente e conferisce al mobile un aspetto elegante e accogliente, perfetto per chi cerca funzionalità e stile in un unico arredo.',
    category: 'Credenze',
    price: '€ 1.300,00',
    gallery: [
      '/images/credenza-vittorio.webp',
      '/images/credenza-vittorio-1.webp',
      '/images/credenza-vittorio-2.webp',
      '/images/credenza-vittorio-3.webp'
    ],
    specifications: {
      altezza: '130 cm',
      larghezza: '217 cm',
      profondita: '47 cm',
      materiale: 'noce',
      colore: 'noce medio'
    }
  },
  {
  image: '/images/lampada-mangani-fiore.webp',
  name: 'Lampada Mangani a fiore',
  description: 'Elegante lampada da tavolo firmata Mangani, caratterizzata da una struttura in metallo cromato con andamento sinuoso e diffusore in vetro soffiato a forma di fiore, che diffonde una luce calda e decorativa. La base in ceramica smaltata dona stabilità e raffinatezza. Ideale per comodini, consolle o ambienti ricercati.',
  category: 'Lampade',
  price: '€ 160,00',
  gallery: [
    '/images/lampada-mangani-fiore.webp'
  ],
  specifications: {
    marchio: 'Mangani'
  }
},
  {
    image: '/images/credenza-impero-in-ciliegio.webp',
    name: 'Credenza Impero in Ciliegio',
    description: 'Elegante credenza in stile Impero italiano, realizzata in ciliegio massello con finitura lucidata che valorizza la venatura calda e profonda del legno. Il mobile si distingue per le sue linee pulite e simmetriche, tipiche dell\'Ottocento, arricchite da lesene laterali, piedini a dado e ferramenta originale in ottone. La struttura comprende tre grandi ante con pannelli riquadrati e tre cassetti superiori, ideali per riporre stoviglie, tessuti o oggetti di pregio. Capiente e solida, questa credenza unisce funzionalità e estetica classica, perfetta sia per ambienti tradizionali che per spazi moderni che vogliono un tocco di eleganza.',
    category: 'Credenze',
    price: '€ 1.500,00',
    gallery: [
      '/images/credenza-impero-in-ciliegio.webp',
      '/images/credenza-impero-in-ciliegio-1.webp',
      '/images/credenza-impero-in-ciliegio-2.webp',
      '/images/credenza-impero-in-ciliegio-3.webp'
    ],
    specifications: {
      altezza: '106 cm',
      larghezza: '227 cm',
      profondita: '55 cm',
      materiale: 'Ciliegio',
      colore: 'Ciliegio scuro'
    }
  },
  {
  image: '/images/lampada-banci-candelabro-floreale.webp',
  name: 'Lampada da tavolo Banci a candelabro con elementi floreali',
  description: 'Scenografica lampada da tavolo firmata Banci, caratterizzata da una struttura in metallo dorato con raffinati elementi decorativi ispirati al mondo vegetale. I sei punti luce con paralumi diffondono una luce calda e avvolgente, creando un forte impatto estetico e un’atmosfera elegante. Ideale come pezzo centrale per ambienti di rappresentanza, salotti di pregio o spazi classici di grande charme.',
  category: 'Lampade',
  price: '€ 500,00',
  gallery: [
    '/images/lampada-banci-candelabro-floreale.webp'
  ],
  specifications: {
    marchio: 'Banci'
  }
},
  {
    image: '/images/credenza-piattaia-shabby-chic.webp',
    name: 'Credenza Piattaia Shabby Chic',
    description: 'Splendida credenza realizzata in legno massello e rifinita con vernice bianco anticato che dona un look vissuto e romantico, perfetto per cucine rustiche, case di campagna, ambienti provenzali o arredi country chic. La parte superiore è dotata di due ante con griglia traforata, ideali per mantenere arieggiati piatti e stoviglie. Sotto di esse si trovano ampie mensole con reggipiatti, molto funzionali per esporre piatti, ceramiche e oggetti decorativi.',
    category: 'Credenze',
    price: '€ 1.300,00',
    gallery: [
      '/images/credenza-piattaia-shabby-chic.webp',
      '/images/credenza-piattaia-shabby-chic-1.webp',
      '/images/credenza-piattaia-shabby-chic-2.webp',
      '/images/credenza-piattaia-shabby-chic-3.webp'
    ],
    specifications: {
      altezza: '194 cm',
      larghezza: '143 cm',
      profondita: '43 cm',
      materiale: 'Massello',
      colore: 'Bianco antico'
    }
  },
  {
  image: '/images/lampada-da-tavolo-bianca-idealux.webp',
  name: 'Lampada da tavolo moderna bianca',
  description: 'Lampada da tavolo dal design moderno e pulito, caratterizzata da struttura interamente bianca con base slanciata e paralume cilindrico in tessuto chiaro, ideale per diffondere una luce morbida e uniforme. Perfetta per comodini, scrivanie, ambienti contemporanei e spazi minimal. Linee essenziali e grande versatilità la rendono facilmente abbinabile a qualsiasi arredo. Produzione Idealux. Disponibili 2 pezzi, vendibili separatamente.',
  category: 'Lampade',
  price: '€ 60,00',
  gallery: [
    '/images/lampada-da-tavolo-bianca-idealux.webp'
  ],
  specifications: {
    marchio: 'Idealux'
  }
},
  {
    image: '/images/Libreria-Classica-in-Bordeaux.webp',
    name: 'Libreria Classica in Bordeaux',
    description: 'Elegante libreria in legno massello finemente rifinita, caratterizzata da una struttura solida e da un design classico con delicate influenze francesi. Il mobile presenta una splendida combinazione di noce caldo e profili rosso bordeaux, che donano carattere e unicità al pezzo. La libreria è composta da ampie mensole regolabili, ideali per libri, oggetti decorativi o collezioni, e da un pratico cassetto centrale tripartito con maniglie in metallo lavorato.',
    category: 'Librerie',
    price: '€ 1.200,00',
    gallery: [
      '/images/libreria-classica-in-bordeaux.webp',
      '/images/libreria-classica-in-bordeaux-1.webp',
      '/images/libreria-classica-in-bordeaux-2.webp',
      '/images/libreria-classica-in-bordeaux-3.webp'
    ],
    specifications: {
      altezza: '200 cm',
      larghezza: '134 cm',
      profondita: '35 cm',
      materiale: 'Ciliegio',
      colore: 'Ciliegio scuro/Bordeaux'
    }
  },
  {
    image: '/images/consolle-in-legno-massello-e-ripiano-in-vetro.jpg',
    name: 'Consolle in Legno Massello e Ripiano in Vetro',
    description: 'Elegante consolle in legno massello, arricchita da una raffinata fascia frontale in ferro battuto con motivo a ricciolo e un intarsio centrale decorativo. La linea slanciata delle gambe affusolate richiama lo stile classico–neoclassico, mentre il ripiano inferiore in vetro dona leggerezza e luminosità alla struttura. Solida, armoniosa e di grande pregio artigianale, questa consolle è perfetta per valorizzare ingressi, soggiorni o corridoi con un tocco di eleganza senza tempo.',
    category: 'Consolle',
    price: '€ 600,00',
    gallery: [
      '/images/consolle-in-legno-massello-e-ripiano-in-vetro.jpg',
      '/images/consolle-in-legno-massello-e-ripiano-in-vetro-1.jpg',
      '/images/consolle-in-legno-massello-e-ripiano-in-vetro-2.jpg',
      '/images/consolle-in-legno-massello-e-ripiano-in-vetro-3.jpg'
    ],
    specifications: {
      altezza: '80 cm',
      larghezza: '100 cm',
      profondita: '40 cm',
      materiale: 'Legno di ciliegio',
      colore: 'Ciliegio scuro'
    }
  },
  {
    image: '/images/tavolino-rotondo.webp',
    name: 'Tavolino Rotondo',
    description: 'Tavolino elegante in legno massello, caratterizzato da una linea classica e slanciata con piano rotondo e gambe sottili a sezione quadrata. La base triangolare con rotelle integrate lo rende pratico e facilmente spostabile, mentre la calda finitura naturale esalta la venatura del legno. Un complemento raffinato e versatile, ideale per arricchire soggiorni, ingressi o angoli lettura.',
    category: 'Tavolini',
    price: '€ 450,00',
    gallery: [
      '/images/tavolino-rotondo.webp',
      '/images/tavolino-rotondo-1.webp'
    ],
    specifications: {
      altezza: '78 cm',
      larghezza: '70 cm',
      materiale: 'Noce massello',
      colore: 'Noce chiaro'
    }
  },
  {
  image: '/images/lampada-a-sospensione-ego-luce.webp',
  name: 'Lampada a sospensione moderna Ego Luce',
  description: 'Lampada dal design contemporaneo con struttura minimale e linea verticale sospesa dal soffitto, dotata di doppio punto luce orientato per creare un’illuminazione scenografica e funzionale. Ideale per ambienti moderni, living, zone relax e spazi contract, valorizza pareti e volumi con un elegante gioco di luce indiretta. Produzione Ego Luce. Venduta esclusivamente in coppia, non separabile.',
  category: 'Lampade',
  price: '€ 600,00',
  gallery: [
    '/images/lampada-a-sospensione-ego-luce.webp'
  ],
  specifications: {
    marchio: 'Ego Luce'
  }
},
  {
  image: '/images/lampada-da-terra-rami-idealux.webp',
  name: 'Lampada da terra scultorea Ideal Lux',
  description: 'Lampada da terra dal forte impatto scenografico, caratterizzata da una struttura composta da elementi intrecciati che richiamano rami naturali, creando un effetto scultoreo elegante e contemporaneo. Il grande paralume in tessuto diffonde una luce calda e avvolgente, ideale per valorizzare ambienti living, showroom, hotel e spazi di rappresentanza. Un complemento d’arredo di design che unisce illuminazione e decorazione con grande personalità. Produzione Ideal Lux.',
  category: 'Lampade',
  price: '€ 650,00',
  gallery: [
    '/images/lampada-da-terra-rami-idealux.webp'
  ],
  specifications: {
    marchio: 'Ideal Lux'
  }
},
  {
    image: '/images/como-a-3-cassetti-nero.webp',
    name: 'Comò a 3 Cassetti Nero',
    description: 'Comò in legno laccato nero, dal design moderno con dettagli decorativi in stile stellato. Dotato di tre ampi cassetti, presenta frontali arricchiti da motivi geometrici e maniglie metalliche a forma di stella. Un pezzo originale e di grande impatto visivo, ideale per camere da letto, ingressi o spazi dal carattere contemporaneo.',
    category: 'Cassettiere',
    price: '€ 800,00',
    gallery: [
      '/images/como-a-3-cassetti-nero.webp',
      '/images/como-a-3-cassetti-nero-1.webp',
      '/images/como-a-3-cassetti-nero-2.webp',
      '/images/como-a-3-cassetti-nero-3.webp'
    ],
    specifications: {
      altezza: '82 cm',
      larghezza: '84 cm',
      profondita: '40 cm',
      materiale: 'Legno massello',
      colore: 'Nero/Argento'
    }
  },
  {
    image: '/images/libreria-in-ciliegio.webp',
    name: 'Libreria in Ciliegio',
    description: 'Libreria in legno massello, dal design classico e raffinato. Dotata di ampie mensole per libri o oggetti decorativi e di un cassetto centrale con serratura, perfetta per mantenere ordine e funzionalità. Le venature naturali del legno e le cornici lavorate le conferiscono un\'eleganza senza tempo, ideale per studio, soggiorno o ufficio.',
    category: 'Librerie',
    price: '€ 1.100,00',
    gallery: [
      '/images/libreria-in-ciliegio.webp',
      '/images/libreria-in-ciliegio-1.webp',
      '/images/libreria-in-ciliegio-2.webp',
      '/images/libreria-in-ciliegio-3.webp',
      '/images/libreria-in-ciliegio-4.webp'
    ],
    specifications: {
      altezza: '210 cm',
      larghezza: '100 cm',
      profondita: '45 cm',
      materiale: 'Legno di ciliegio',
      colore: 'Ciliegio medio'
    }
  },
  {
    image: '/images/tavolo-gioco-apribile.webp',
    name: 'Tavolo Gioco Apribile',
    description: 'Tavolo da gioco in legno massello, caratterizzato da linee eleganti e gambe sagomate in stile classico. Dotato di cassetto centrale, è perfetto come tavolino da ingresso, soggiorno o come complemento decorativo. La finitura calda mette in risalto le venature naturali del legno, rendendolo un pezzo raffinato e senza tempo.',
    category: 'Tavoli',
    price: '€ 700,00',
    gallery: [
      '/images/tavolo-gioco-apribile.webp',
      '/images/tavolo-gioco-apribile-1.webp',
      '/images/tavolo-gioco-apribile-2.webp',
      '/images/tavolo-gioco-apribile-3.webp'
    
    ],
    specifications: {
      altezza: '76 cm',
      larghezza: '80 cm',
      profondita: '40/80 cm',
      materiale: 'Noce',
      colore: 'Noce chiaro'
    }
  },
  {
  image: '/images/lampada-da-tavolo-leucos.webp',
  name: 'Lampada da tavolo in vetro Leucos',
  description: 'Lampada da tavolo dal design elegante e raffinato, caratterizzata da un diffusore in vetro lavorato che crea una texture delicata e un’illuminazione morbida e avvolgente. La struttura in metallo con finitura dorata dona slancio e leggerezza alla forma, rendendola ideale per ambienti living, camere da letto, studi e spazi di rappresentanza. Un complemento d’arredo luminoso che unisce artigianalità e stile contemporaneo. Produzione Leucos.',
  category: 'Lampade',
  price: '€ 290,00',
  gallery: [
    '/images/lampada-da-tavolo-leucos.webp'
  ],
  specifications: {
    marchio: 'Leucos'
  }
},
  {
    image: '/images/tavolo-da-gioco.webp',
    name: 'Tavolo da Gioco',
    description: 'Tavolino da gioco in legno, dal design classico con eleganti gambe sagomate. Il piano è rivestito in panno verde, ideale per carte o altri giochi da tavolo, e presenta quattro incavi porta-bicchieri negli angoli. La fascia sottopiano è arricchita da dettagli intagliati. Perfetto per salotti, sale hobby o ambienti dallo stile tradizionale.',
    category: 'Tavoli',
    price: '€ 900,00',
    gallery: [
      '/images/tavolo-da-gioco.webp',
      '/images/tavolo-da-gioco-1.webp',
      '/images/tavolo-da-gioco-2.webp',
      '/images/tavolo-da-gioco-3.webp'
    ],
    specifications: {
      altezza: '80 cm',
      larghezza: '80 cm',
      profondita: '40 cm',
      materiale: 'Noce',
      colore: 'Noce chiaro'
    }
  },
  {
    image: '/images/consolle-bacheca.webp',
    name: 'Consolle Bacheca',
    description: 'Consolle espositiva in legno massello, dotata di due vetrinette laterali con apertura verso il basso, ideali per esporre piccoli oggetti, collezioni o articoli decorativi. Al centro è presente un pratico cassetto. Le linee eleganti, le gambe affusolate e la finitura classica rendono questo mobile raffinato e versatile, perfetto per ingresso, soggiorno o studio.',
    category: 'Consolle',
    price: '€ 750,00',
    gallery: [
      '/images/consolle-bacheca.webp',
      '/images/consolle-bacheca-1.webp',
      '/images/consolle-bacheca-2.webp',
      '/images/consolle-bacheca-3.webp'
    ],
    specifications: {
      altezza: '78 cm',
      larghezza: '120 cm',
      profondita: '40 cm',
      materiale: 'Noce',
      colore: 'Noce medio'
    }
  },
  {
    image: '/images/credenza-2-Porte-Finti-Cassetti.webp',
    name: 'Credenza 2 Porte Finti Cassetti',
    description: 'Mobile schedario in legno massello, ispirato ai classici arredi da archivio. Dotato di una grande quantità di cassetti con portanome e di due capienti ante centrali, permette di organizzare e catalogare facilmente documenti, collezioni o piccoli oggetti. La finitura calda e le cornici lavorate gli conferiscono un fascino vintage-industriale elegante. Ideale per studi, librerie, negozi o ambienti arredati con carattere.',
    category: 'Credenze',
    price: '€ 1.500,00',
    gallery: [
      '/images/credenza-2-porte-finti-cassetti.webp',
      '/images/credenza-2-porte-finti-cassetti-1.webp',
      '/images/credenza-2-porte-finti-cassetti-2.webp'
    ],
    specifications: {
      altezza: '100 cm',
      larghezza: '180 cm',
      profondita: '54 cm',
      materiale: 'Legno rovere',
      colore: 'Rovere chiaro'
    }
  },
  {
  image: '/images/lampada-marioni-vetro-oro.webp',
  name: 'Lampada da tavolo Marioni in vetro e metallo dorato',
  description: 'Elegante lampada da tavolo firmata Marioni, con struttura in metallo dorato e elementi in vetro trasparente che donano luminosità e leggerezza alla composizione. Il paralume plissettato diffonde una luce calda e avvolgente, valorizzando ambienti classici e raffinati come salotti, ingressi o camere da letto. Un complemento d’arredo decorativo di alta qualità, capace di unire funzionalità ed estetica.',
  category: 'Lampade',
  price:'€ 200,00',
  gallery: [
    '/images/lampada-marioni-vetro-oro.webp'
  ],
  specifications: {
    marchio: 'Marioni'
  }
},
  {
    image: '/images/credenza-rustica.webp',
    name: 'Credenza Rustica',
    description: 'Affascinante credenza in legno massello dal carattere rustico, realizzata con pannelli lavorati e decorazioni geometriche intagliate a mano. La finitura naturale mette in risalto le venature autentiche del legno, conferendo un aspetto caldo e genuino. Dotata di due ante capienti, è perfetta per arredare ambienti di montagna, case di campagna o spazi dallo stile tradizionale e accogliente.',
    category: 'Credenze',
    price: '€ 600,00',
    gallery: [
      '/images/credenza-rustica.webp',
      '/images/credenza-rustica-1.webp',
      '/images/credenza-rustica-2.webp'
    ],
    specifications: {
      altezza: '110 cm',
      larghezza: '115 cm',
      profondita: '42 cm',
      materiale: 'Rovere',
      colore: 'Rovere medio'
    }
  },
  {
    image: '/images/cassapanca-rustica.webp',
    name: 'Cassapanca Rustica',
    description: 'Cassapanca in legno massello dallo stile rustico, caratterizzata da linee semplici e da una calda finitura naturale che valorizza le venature originali del legno. Robusta e capiente, è ideale come contenitore per biancheria, cuscini o accessori, perfetta per ingressi, camere o ambienti in stile country e di montagna. Un pezzo autentico che unisce funzionalità e fascino tradizionale.',
    category: 'Cassapanche',
    price: '€ 400,00',
    gallery: ['/images/cassapanca-rustica.webp'],
    specifications: {
      altezza: '64 cm',
      larghezza: '160 cm',
      profondita: '50 cm',
      materiale: 'Rovere',
      colore: 'Rovere chiaro'
    }
  },
  {
    image: '/images/set-como-comodini.webp',
    name: 'Set Comò/Comodini',
    description: 'Elegante trittico composto da comò e due comodini in legno massello finemente lavorato. Le superfici presentano una ricca intagliatura artigianale che valorizza il design classico e dona un carattere prestigioso all\'arredo. Dotati di ampi cassetti con pomelli in metallo decorato, offrono grande capienza e praticità. Perfetti per una camera da letto dallo stile tradizionale e raffinato.',
    category: 'Comò',
    price: '€ 900,00',
    gallery: ['/images/set-como-comodini.webp'],
    specifications: {
      altezza: '95/77 cm',
      larghezza: '123/55 cm',
      profondita: '52/34 cm',
      materiale: 'Castagno',
      colore: 'Castagno scuro'
    }
  },
  {
    image: '/images/tavolino-salotto.webp',
    name: 'Tavolino Salotto',
    description: 'Tavolino angolo divano in legno. La struttura è solida, con gambe tornite e ripiano inferiore in paglia intrecciata, che aggiunge un tocco artigianale. Perfetto per ingressi, salotti o ambienti arredati in stile classico.',
    category: 'Tavoli',
    price: '€ 550,00',
    gallery: [
      '/images/tavolino-salotto.webp',
      '/images/tavolino-salotto-1.webp',
      '/images/tavolino-salotto-2.webp',
      '/images/tavolino-salotto-3.webp',
      '/images/tavolino-salotto-4.webp'
    ],
    specifications: {
      altezza: '62 cm',
      larghezza: '67 cm',
      profondita: '67 cm',
      materiale: 'Ciliegio',
      colore: 'Ciliegio scuro'
    }
  },
  {
    image: '/images/tavolo-con-base-in-ferro-battuto.webp',
    name: 'Tavolo con Base in Ferro Battuto',
    description: 'Elegante tavolo con piano in legno di rovere massello e struttura in ferro battuto, caratterizzato da un raffinato motivo a doghe sottili che conferisce leggerezza e stile alla superficie. Le gambe in ferro forgiato a mano presentano linee sinuose e un incrocio centrale che assicura solidità e un tocco artigianale. I due lati ribaltabili rendono il tavolo estremamente pratico e versatile, ideale per ambienti rustici, classici o industrial chic. Un pezzo unico che unisce robustezza, funzionalità ed estetica ricercata.',
    category: 'Tavoli',
    gallery: [
      '/images/tavolo-con-base-in-ferro-battuto.webp',
      '/images/tavolo-con-base-in-ferro-battuto-1.webp'
    ],
    specifications: {
      altezza: '96 cm',
      larghezza: '136 cm',
      profondita: '45 cm',
      materiale: 'Rovere',
      colore: 'Rovere chiaro / Nero'
    }
  },
  {
  image: '/images/lampada-authentic-models-treppiede.webp',
  name: 'Lampada da terra treppiede Authentic Models',
  description: 'Lampada da terra scenografica in stile industriale ispirata ai fari nautici e cinematografici, realizzata con struttura in metallo e treppiede regolabile. Il grande diffusore orientabile crea un’illuminazione direzionale intensa e suggestiva, ideale per ambienti moderni, loft, studi creativi o spazi di carattere. Un elemento d’arredo di forte impatto estetico che unisce design, funzionalità e qualità costruttiva.',
  category: 'Lampade',
  price: '€ 500,00',
  gallery: [
    '/images/lampada-authentic-models-treppiede.webp'
  ],
  specifications: {
    marchio: 'Authentic Models',
    note: 'Struttura in metallo, diffusore orientabile'
  }
},
  {
  image: '/images/lampada-da-tavolo-cenacchi-80.webp',
  name: 'Lampada base in ottone e paralume decorato – Cenacchi',
  description: 'Elegante lampada da tavolo firmata Cenacchi, con base in metallo e ottone brunito e raffinato paralume in tessuto con decoro geometrico. La luce calda crea un’atmosfera accogliente e valorizza ambienti classici, studi, salotti e camere da letto, unendo qualità artigianale e gusto senza tempo.',
  category: 'Lampade',
  price: '€ 80,00',
  gallery: [
    '/images/lampada-da-tavolo-cenacchi-80.webp'
  ],
  specifications: {
    marchio: 'Cenacchi'
  }
},
  {
    image: '/images/sedie-in-paglia.webp',
    name: 'Sedie in Paglia',
    description: 'Sedie classiche in legno massello, caratterizzate dallo schienale con elegante motivo a incrocio (X) e seduta in paglia intrecciata artigianale. Le linee mosse delle gambe e la finitura calda le rendono ideali per cucine rustiche, taverne, ambienti country o arredamenti tradizionali. Robustezza, comodità ed estetica senza tempo.',
    category: 'Sedie',
    price: '€ 1.200,00',
    gallery: ['/images/sedie-in-paglia.webp'],
    specifications: {
      quantita: '6 pezzi',
      materiale: 'Legno/Paglia',
      colore: 'Ciliegio antiquariato'
    }
  },
  {
  image: '/images/lampada-da-tavolo-ildc-100.webp',
  name: 'Lampada da tavolo – I.L.D.C.',
  description: 'Raffinata lampada da tavolo firmata I.L.D.C., caratterizzata da una base in metallo con colonna in vetro ambrato e dettagli in ottone, abbinata a un paralume in tessuto chiaro che diffonde una luce calda e accogliente. Ideale per comodini, consolle o angoli lettura, aggiunge eleganza classica e atmosfera agli ambienti.',
  category: 'Lampade',
  price: '€ 100,00',
  gallery: [
    '/images/lampada-da-tavolo-ildc-100.webp'
  ],
  specifications: {
    marchio: 'I.L.D.C.'
  }
},
  {
    image: '/images/sedie-in-ciliegio-laccato-nero.webp',
    name: 'Sedie in Ciliegio Laccato Nero',
    description: 'Caratterizzate da uno schienale con tre listelli orizzontali e gambe leggermente ricurve che donano eleganza e stabilità. La seduta è imbottita e rivestita in pelle rossa, comoda e facile da pulire. Ideali per cucina, sala da pranzo, locali o ambienti dallo stile retrò.',
    category: 'Sedie',
    price: '€ 1.500,00 (gruppo)',
    gallery: ['/images/sedie-in-ciliegio-laccato-nero.webp'],
    specifications: {
      quantita: '6 pezzi',
      materiale: 'Ciliegio',
      colore: 'Nero/Rosso'
    }
  },
  {
  image: '/images/lampada-bonaldo-piantana-diffusore-rigato.webp',
  name: 'Lampada da terra design contemporaneo Bonaldo',
  description: 'Elegante lampada da terra firmata Bonaldo, caratterizzata da una silhouette slanciata e da un diffusore in materiale opalino rigato che diffonde una luce morbida e uniforme. Il design minimale e scultoreo la rende ideale per ambienti moderni, living raffinati, zone lounge o spazi contract, dove diventa un vero elemento decorativo oltre che funzionale.',
  category: 'Lampade',
  price: '€ 350,00',
  gallery: [
    '/images/lampada-bonaldo-piantana-diffusore-rigato.webp'
  ],
  specifications: {
    marchio: 'Bonaldo'
  }
},
  {
    image: '/images/sedia-a-righe.webp',
    name: 'Sedia a Righe',
    description: 'Sedia classica in legno massello, con schienale sagomato impreziosito da un elegante intaglio centrale. La seduta è imbottita e rivestita con un vivace tessuto a righe multicolore, che aggiunge un tocco di originalità mantenendo uno stile raffinato. Le gambe leggermente ricurve donano slancio e stabilità. Ideale per sala da pranzo, camere o ambienti dallo stile tradizionale con una nota decorativa.',
    category: 'Sedie',
    price: '€ 300,00',
    gallery: ['/images/sedia-a-righe.webp'],
    specifications: {
      quantita: '6 pezzi',
      materiale: 'Legno/Tessuto',
      colore: 'Ciliegio chiaro'
    }
  },
  {
  image: '/images/lampada-da-terra-mangani-vetro-rosa-190.webp',
  name: 'Lampada da terra in vetro rosa – Mangani',
  description: 'Elegante lampada da terra firmata Mangani, caratterizzata da una slanciata struttura in metallo nero con linee sinuose e base in marmo, abbinata a un raffinato diffusore in vetro rosato che diffonde una luce calda e avvolgente. Ideale per valorizzare soggiorni, angoli lettura o ambienti di rappresentanza, unisce design decorativo e funzionalità in un equilibrio armonioso.',
  category: 'Lampade',
  price: '€ 190,00',
  gallery: [
    '/images/lampada-da-terra-mangani-vetro-rosa-190.webp'
  ],
  specifications: {
    marchio: 'Mangani'
  }
},
  {
    image: '/images/consolle-mezza-luna-fiore.webp',
    name: 'Consolle 1/2 Luna Fiore',
    description: 'Raffinata consolle mezzaluna in legno massello, caratterizzata da un design classico ed estremamente armonioso. Il top semicircolare, sostenuto da tre gambe slanciate in stile Luigi XV, conferisce leggerezza e pregio all\'arredo. Le piccole volute scolpite sotto il piano aggiungono un tocco decorativo ricercato. Perfetta come punto d\'ingresso, angolo decorativo o complemento elegante in qualsiasi ambiente della casa. Un pezzo senza tempo, capace di impreziosire ogni spazio.',
    category: 'Consolle',
    price: '€ 400,00',
    gallery:[
      '/images/consolle-mezza-luna-fiore.webp',
      '/images/consolle-mezza-luna-fiore-1.webp',
      '/images/consolle-mezza-luna-fiore-2.webp'
    ],
    specifications: {
      altezza: '90 cm',
      larghezza: '110 cm',
      profondita: '44 cm',
      materiale: 'Noce',
      colore: 'Noce scuro'
    }
  },
  {
  image: '/images/lampada-leucos-verde.webp',
  name: 'Lampada da tavolo in vetro verde Leucos',
  description: 'Raffinata lampada da tavolo firmata Leucos, caratterizzata da una base in vetro verde lucido dalla forma morbida ed elegante, abbinata a un paralume chiaro che diffonde una luce calda e uniforme. Ideale per valorizzare comodini, tavolini, studi o ambienti living, aggiungendo un tocco di colore e design italiano contemporaneo.',
  category: 'Lampade',
  price: '€ 150,00',
  gallery: [
    '/images/lampada-leucos-verde.webp'
  ],
  specifications: {
    marchio: 'Leucos'
  }
},
  {
  image: '/images/lampada-marioni-ottone-paralume-200.webp',
  name: 'Lampada da tavolo in ottone– Marioni',
  description: 'Raffinata lampada da tavolo firmata Marioni, caratterizzata da una solida struttura in ottone con base circolare e da un elegante paralume scuro che crea un’illuminazione calda e concentrata. Il design sobrio ma ricercato la rende ideale per credenze, consolle, ingressi o ambienti classici ed eleganti, aggiungendo un tocco di prestigio e atmosfera.',
  category: 'Lampade',
  price: '€ 200,00',
  gallery: [
    '/images/lampada-marioni-ottone-paralume-200.webp'
  ],
  specifications: {
    marchio: 'Marioni'
  }
},
  {
    image: '/images/tavolo-direttorio.webp',
    name: 'Tavolo Direttorio',
    description: 'Elegante tavolo da pranzo in legno massello di ciliegio, caratterizzato da un piano ampio con raffinata lavorazione a spina di pesce, che mette in risalto le venature naturali del legno. Le gambe dritte e rastremate donano al tavolo una linea classica e senza tempo, facile da inserire in ambienti sia tradizionali che contemporanei. Solido, stabile e finemente rifinito, è ideale per chi cerca un complemento d\'arredo di qualità, capace di unire estetica e funzionalità. Perfetto come tavolo da soggiorno o sala da pranzo.',
    category: 'Tavoli',
    price: '€ 1.200,00',
    gallery: ['/images/tavolo-direttorio.webp'],
    specifications: {
      altezza: '78 cm',
      larghezza: '180 cm',
      profondita: '90 cm',
      materiale: 'Ciliegio',
      colore: 'Ciliegio scuro'
    }
  },
  {
  image: '/images/lampada-terra-ottone-vetro-80.webp',
  name: 'Lampada in ottone con diffusore in vetro opalino',
  description: 'Elegante lampada da terra caratterizzata da una struttura slanciata in ottone e da un diffusore superiore in vetro opalino che diffonde una luce morbida e uniforme verso l’ambiente. Il design essenziale e raffinato la rende ideale per soggiorni, salotti, angoli lettura o ambienti contract, integrandosi facilmente sia in contesti classici che contemporanei. Un complemento luminoso funzionale e decorativo, perfetto per creare atmosfera.',
  category: 'Lampade',
  price: '€ 80,00',
  gallery: [
    '/images/lampada-terra-ottone-vetro-80.webp'
  ],
  specifications: {
    marchio: '—'
  }
},
  {
    image: '/images/cassapanca-in-noce.webp',
    name: 'Cassapanca in Noce',
    description: 'Elegante cassapanca in legno massello di noce, caratterizzata da linee classiche e da una splendida patina calda e uniforme. Il fronte presenta due pannelli incorniciati con lavorazioni artigianali, mentre il bordo superiore è arricchito da un raffinato intaglio decorativo. Robusta e capiente, è perfetta come contenitore per biancheria, coperte o oggetti da tenere in ordine, oltre a essere un ottimo complemento d\'arredo per ingresso, camera o zona giorno. Un pezzo solido, autentico e di grande fascino.',
    category: 'Cassapanche',
    price: '€ 400,00',
    gallery: [
      '/images/cassapanca-in-noce.webp',
      '/images/cassapanca-in-noce-1.webp',
      '/images/cassapanca-in-noce-2.webp',
      '/images/cassapanca-in-noce-3.webp'
    ],
    specifications: {
      altezza: '60 cm',
      larghezza: '120 cm',
      profondita: '55 cm',
      materiale: 'Noce',
      colore: 'Noce chiaro'
    }
  },
  {
  image: '/images/lampada-cubo-vibrazioni.webp',
  name: 'Lampada cubo artistica luminosa Vibrazioni',
  description: 'Originale lampada cubo firmata Vibrazioni, caratterizzata da una struttura decorata con grafiche artistiche e più punti luce integrati sui lati e sulla parte superiore. Un oggetto scenografico e creativo che unisce arte, design e illuminazione, ideale per ambienti contemporanei, loft, spazi espositivi o interni dal forte carattere estetico.',
  category: 'Lampade',
  price: '€ 800,00',
  gallery: [
    '/images/lampada-cubo-vibrazioni.webp'
  ],
  specifications: {
    marchio: 'Vibrazioni'
  }
},
  {
  image: '/images/lampada-terra-mangani-190.webp',
  name: 'Lampada in ottone– Mangani',
  description: 'Raffinata lampada da terra firmata Mangani, caratterizzata da una struttura slanciata in metallo finitura ottone e da un elegante paralume plissettato che diffonde una luce calda e avvolgente. Il design essenziale ma ricercato la rende ideale per soggiorni, zone lettura, camere o ambienti classici e contemporanei. Un complemento d’arredo di grande eleganza che unisce qualità artigianale, solidità e stile senza tempo.',
  category: 'Lampade',
  price: '€ 190,00',
  gallery: [
    '/images/lampada-terra-mangani-190.webp'
  ],
  specifications: {
    marchio: 'Mangani'
  }
},
  {
    image: '/images/tavolo-rotondo-bianco-e-azzurro.webp',
    name: 'Tavolo Rotondo Bianco e Azzurro',
    description: 'Elegante set da pranzo in stile classico, composto da tavolo rotondo allungabile e sei sedie coordinate, due delle quali con braccioli. L\'intero gruppo è realizzato in legno massello e rifinito con una laccatura bianca anticata, arricchita da delicati profili azzurri che conferiscono un tocco raffinato e luminoso all\'ambiente. Le sedute presentano un\'imbottitura comoda con rivestimento a righe blu e bianche, perfettamente abbinato allo stile fresco e marinaro del set. Le spalliere sono impreziosite da una lavorazione intagliata di grande pregio artigianale. Ideale per cucine, sale da pranzo o case al mare, questo set unisce charme, funzionalità e qualità costruttiva, rendendo ogni ambiente accogliente e ricercato.',
    category: 'Set Tavoli/Sedie',
    price: '€ 1.980,00',
    gallery: ['/images/tavolo-rotondo-bianco-e-azzurro.webp'],
    specifications: {
      altezza: '75 cm',
      larghezza: '120 cm',
      allunghi: '45 cm cad.',
      quantita_sedie: '6',
      materiale: 'Massello verniciato',
      colore: 'Bianco antico'
    }
  },
  {
  image: '/images/lampada-alliotti-doppia-340.webp',
  name: 'Lampada a due luci in ottone– Alliotti',
  description: 'Elegante lampada da tavolo a due luci firmata Alliotti, caratterizzata da una struttura in metallo finitura ottone con bracci curvati e base conica. I due paralumi in tessuto diffondono una luce calda e armoniosa, ideale per illuminare soggiorni, ingressi, camere o ambienti classici e raffinati. Un complemento d’arredo di grande equilibrio estetico che unisce qualità artigianale, solidità costruttiva e stile senza tempo.',
  category: 'Lampade',
  price: '€ 340,00',
  gallery: [
    '/images/lampada-alliotti-doppia-340.webp'
  ],
  specifications: {
    marchio: 'Alliotti'
  }
},
  {
    image: '/images/tavolo-con-sedute-gialle.webp',
    name: 'Tavolo con Sedute Gialle',
    description: 'Elegante sala da pranzo in stile classico, composta da tavolo rettangolare allungabile e sei sedie coordinate, due delle quali con braccioli. Realizzato in legno massello con una splendida finitura ciliegio, il tavolo presenta linee pulite e proporzioni armoniose, ideali per ambienti raffinati e senza tempo. Le 6 sedie, anch\'esse in legno massello, sono caratterizzate da schienali intagliati e da sedute imbottite rivestite in tessuto color panna, comodo e facilmente abbinabile a qualsiasi arredo.',
    category: 'Set Tavoli/Sedie',
    price: '€ 1.850,00',
    gallery: ['/images/tavolo-con-sedute-gialle.webp'],
    specifications: {
      altezza: '78 cm',
      larghezza: '180 cm',
      profondita: '90 cm',
      materiale: 'Ciliegio',
      colore: 'Ciliegio scuro/Panna'
    }
  },
  {
  image: '/images/lampada-marioni-pois.webp',
  name: 'Lampada da tavolo in ceramica decorata Marioni',
  description: 'Elegante lampada da tavolo firmata Marioni, caratterizzata da una base in ceramica smaltata con raffinata decorazione a pois e paralume chiaro bordato che diffonde una luce morbida e accogliente. Un complemento d’arredo classico e ricercato, ideale per soggiorni, camere da letto o ambienti di rappresentanza.',
  category: 'Lampade',
  price: '€ 150,00',
  gallery: [
    '/images/lampada-marioni-pois.webp'
  ],
  specifications: {
    marchio: 'Marioni'
  }
},
  {
  image: '/images/lampada-terra-san-patrignano-500.webp',
  name: 'Lampada Barrique San Patrignano in legno e metallo con luce LED',
  description: 'Lampada da terra artigianale realizzata da San Patrignano, caratterizzata da una struttura slanciata in legno curvato con inserto luminoso a LED che crea un suggestivo effetto scenografico. La base in metallo garantisce stabilità ed eleganza, mentre la luce calda valorizza ambienti moderni, spazi di design e zone living contemporanee. Un pezzo unico che unisce artigianalità italiana, ricerca estetica e funzionalità.',
  category: 'Lampade',
  price: '€ 1500,00',
  gallery: [
    '/images/lampada-terra-san-patrignano-500.webp'
  ],
  specifications: {
    marchio: 'San Patrignano'
  }
},
  {
    image: '/images/tavolo-provenzale.webp',
    name: 'Tavolo Provenzale',
    description: 'Elegante sala da pranzo in stile classico, composta da un tavolo rettangolare e sei sedie coordinate. La struttura in legno chiaro presenta finiture morbide e linee sinuose, mentre le 6 sedie, di cui 2 con i braccioli sono impreziosite da schienali in paglia di Vienna e sedute rivestite in tessuto rigato. Un insieme raffinato e luminoso, perfetto per ambienti tradizionali o country chic.',
    category: 'Set Tavoli/Sedie',
    price: '€ 3.400,00',
    gallery: ['/images/tavolo-provenzale.webp'],
    specifications: {
      altezza: '77 cm',
      larghezza: '160 cm',
      profondita: '110 cm',
      materiale: 'Rovere/Paglia',
      colore: 'Rovere chiaro/Rosso'
    }
  },
  {
  image: '/images/lampada-terra-grande-arredo-90.webp',
  name: 'Lampada Grande Arredo vetro ambrato',
  description: 'Lampada da terra firmata Grande Arredo, caratterizzata da una struttura slanciata con base quadrata in metallo, stelo decorato e elemento centrale in vetro ambrato. Il paralume plissettato diffonde una luce calda e avvolgente, rendendola ideale per ambienti classici, soggiorni eleganti o zone lettura. Un complemento d’arredo raffinato che unisce funzionalità e presenza scenica.',
  category: 'Lampade',
  price: '€ 90,00',
  gallery: [
    '/images/lampada-terra-grande-arredo-90.webp'
  ],
  specifications: {
    marchio: 'Grande Arredo'
  }
},
  {
    image: '/images/tavolo-classico-bordeaux.webp',
    name: 'Tavolo Classico Bordeaux',
    description: 'Tavolo da pranzo in legno massello, caratterizzato da una solida struttura e da un piano spesso con finitura calda e naturale. Il basamento laccato rosso aggiunge un tocco distintivo e moderno, creando un elegante contrasto con il top in essenza scura. Perfetto per cucine e sale da pranzo, offre ampia superficie e grande stabilità. Un pezzo robusto, di qualità e dal design unico.',
    category: 'Tavoli',
    price: '€ 1.100,00',
    gallery: ['/images/tavolo-classico-bordeaux.webp'],
    specifications: {
      altezza: '79 cm',
      larghezza: '180 cm',
      profondita: '85 cm',
      materiale: 'Ciliegio',
      colore: 'Ciliegio scuro/Bordeaux'
    }
  },
  {
  image: '/images/lampada-vetro-blu-ildc.webp',
  name: 'Lampada da tavolo in vetro blu i.l.d.c.',
  description: 'Raffinata lampada da tavolo firmata i.l.d.c., caratterizzata da una base in vetro blu decorato con eleganti manici laterali in vetro e paralume plissettato con bordo rifinito. La luce è calda e diffusa, ideale per creare un’atmosfera accogliente in salotti, camere da letto o ambienti classici e ricercati.',
  category: 'Lampade',
  price: '€ 270,00',
  gallery: [
    '/images/lampada-vetro-blu-ildc.webp'
  ],
  specifications: {
    marchio: 'i.l.d.c.'
  }
},
  {
  image: '/images/lampada-terra-fontana-arte-130.webp',
  name: 'Lampada Fontana Arte in metallo nero',
  description: 'Lampada da terra firmata Fontana Arte, caratterizzata da una struttura slanciata in metallo nero con base circolare stabile e diffusore superiore in vetro opalino. La luce morbida e diffusa crea un’atmosfera elegante e funzionale, ideale per ambienti moderni, soggiorni, studi o spazi contract. Un complemento d’arredo dal design essenziale, capace di integrarsi con facilità in diversi contesti di interior design.',
  category: 'Lampade',
  price: '€ 130,00',
  gallery: [
    '/images/lampada-terra-fontana-arte-130.webp'
  ],
  specifications: {
    marchio: 'Fontana Arte'
  }
},
  {
    image: '/images/tavolo-ovale-allungabile.webp',
    name: 'Tavolo Ovale Allungabile',
    description: 'Elegante sala da pranzo composta da tavolo ovale e 4 sedie coordinate, realizzati in legno massello con finitura calda e naturale. Il tavolo presenta un raffinato bordo sagomato e robuste gambe tornite, mentre le sedie sono caratterizzate da schienale curvo e seduta in paglia di Vienna che aggiunge leggerezza e comfort. Un insieme armonioso, ideale per ambienti classici o contemporanei dal gusto ricercato.',
    category: 'Set Tavoli/Sedie',
    price: '€ 1.600,00',
    gallery: [
       '/images/tavolo-ovale-allungabile.webp',
       '/images/tavolo-ovale-allungabile-1.webp'
    ],
    specifications: {
      altezza: '76 cm',
      larghezza: '145 cm',
      profondita: '100 cm',
      materiale: 'Noce',
      colore: 'Noce scuro'
    }
  },
  {
  image: '/images/lampadario-cristallo-cenacchi.webp',
  name: 'Lampadario classico in cristallo Cenacchi',
  description: 'Elegante lampadario a sospensione in stile classico firmato Cenacchi, impreziosito da una ricca struttura in metallo e da numerosi pendenti in cristallo che riflettono la luce creando suggestivi giochi di brillantezza. Le braccia multiple con portalampade a candela donano un forte impatto scenografico, rendendolo ideale per saloni, sale da pranzo, ingressi importanti o ambienti di rappresentanza. Un complemento d’arredo raffinato, capace di valorizzare interni classici ed eleganti con luce calda e atmosfera prestigiosa.',
  category: 'Lampade',
  price: '€ 500,00',
  gallery: [
    '/images/lampadario-cristallo-cenacchi.webp'
  ],
  specifications: {
    marchio: 'Cenacchi'
  }
},
  {
  image: '/images/lampadario-ingo-maurer.webp',
  name: 'Lampadario artistico a sospensione Ingo Maurer',
  description: 'Lampada a sospensione di grande impatto scenografico firmata Ingo Maurer, caratterizzata da una struttura dinamica con molteplici punti luce e fogli sospesi che creano un suggestivo gioco di ombre e riflessi sulle pareti e sul soffitto. Il design concettuale e leggero trasforma l’illuminazione in un vero elemento artistico, ideale per ambienti contemporanei, loft, spazi creativi o zone living di rappresentanza. Un pezzo iconico che unisce funzionalità, ricerca estetica e forte personalità.',
  category: 'Lampade',
  price: '€ 800,00',
  gallery: [
    '/images/lampadario-ingo-maurer.webp'
  ],
  specifications: {
    marchio: 'Ingo Maurer'
  }
},
  {
    image: '/images/scrivania-classica-laccata-con-ripiano-in-vetro.webp',
    name: 'Scrivania Classica Laccata con Ripiano in Vetro',
    description: 'Elegante scrivania in stile classico, realizzata in legno massello con finitura avorio anticata. Il piano sagomato con vetro protettivo richiama le linee morbide e raffinate della struttura, ricca di dettagli intagliati a mano. Dotata di due comodi cassetti laterali, è perfetta per arredare studi, salotti o ambienti ricercati, aggiungendo un tocco di pregio e artigianalità.',
    category: 'Scrittoio',
    price: '€ 800,00',
    gallery: [
      '/images/scrivania-classica-laccata-con-ripiano-in-vetro.webp',
      '/images/scrivania-classica-laccata-con-ripiano-in-vetro-1.webp',
      '/images/scrivania-classica-laccata-con-ripiano-in-vetro-2.webp',
      '/images/scrivania-classica-laccata-con-ripiano-in-vetro-3.webp',
      '/images/scrivania-classica-laccata-con-ripiano-in-vetro-4.webp'
    ],
    specifications: {
      altezza: '82 cm',
      larghezza: '145 cm',
      profondita: '75 cm',
      materiale: 'Legno laccato/Vetro',
      colore: 'Bianco'
    }
  },
  {
  image: '/images/lampada-terra-fontana-arte-700.webp',
  name: 'Lampada da terra Fontana Arte in vetro opalino',
  description: 'Elegante lampada da terra firmata Fontana Arte, caratterizzata da una struttura slanciata in metallo con diffusore in vetro opalino che diffonde una luce morbida e uniforme. Il design essenziale e raffinato la rende ideale per ambienti moderni, living, studi o spazi contract, offrendo un’illuminazione decorativa di grande equilibrio estetico e qualità costruttiva.',
  category: 'Lampade',
  price: '€ 700,00',
  gallery: [
    '/images/lampada-terra-fontana-arte-700.webp'
  ],
  specifications: {
    marchio: 'Fontana Arte'
  }
}, 
  {
  image: '/images/lampada-ceramica-cenacchi-bianca-dorata.webp',
  name: 'Lampada in ceramica bianca e oro',
  description: 'Elegante lampada da tavolo in ceramica smaltata bianca con raffinate decorazioni dorate e base classica, completata da paralume sagomato in tessuto chiaro che diffonde una luce calda e armoniosa. Il design equilibrato e le finiture pregiate la rendono ideale per soggiorni, camere da letto e ambienti eleganti. Disponibili n. 4 lampade identiche, vendibili anche singolarmente. Il prezzo indicato si riferisce al singolo pezzo. Produzione firmata Cenacchi.',
  category: 'Lampade',
  price: '€ 100,00',
  gallery: [
    '/images/lampada-ceramica-cenacchi-bianca-dorata.webp'
  ],
  specifications: {
    marchio: 'Cenacchi'
  }
},
  {
    image: '/images/consolle-marina.webp',
    name: 'Consolle Marina',
    description: 'Elegante credenza in stile classico con gambe sinuose e linee morbide, proposta in una vivace finitura turchese spazzolata. Dotata di doppia anta con maniglie in metallo lavorato, offre uno spazio contenitivo pratico e raffinato. Un pezzo unico che dona carattere e colore a ingressi, soggiorni o ambienti moderni con richiami vintage.',
    category: 'Consolle',
    price: '€ 600,00',
    gallery: [
      '/images/consolle-marina.webp',
      '/images/consolle-marina-1.webp',
      '/images/consolle-marina-2.webp',
      '/images/consolle-marina-3.webp'
    ],
    specifications: {
      altezza: '85 cm',
      larghezza: '100 cm',
      profondita: '40 cm',
      materiale: 'Legno massello',
      colore: 'Azzurro'
    }
  },
  {
    image: '/images/bergere-blu.webp',
    name: 'Bergere Blu',
    description: 'Elegante poltrona in stile classico con struttura in legno massello finemente curvato e imbottitura confortevole. Il rivestimento blu a quadri dona un tocco raffinato e senza tempo, ideale per salotti, studi o camere da lettura. Un complemento d\'arredo che unisce comodità e stile, perfetto per ambienti tradizionali e ricercati.',
    category: 'Poltrone',
    price: '€ 600,00',
    gallery: [
      '/images/bergere-blu.webp',
      '/images/bergere-blu-1.webp',
      '/images/bergere-blu-2.webp',
      '/images/bergere-blu-3.webp'
    ],
    specifications: {
      altezza: '112 cm',
      larghezza: '62 cm',
      profondita: '80 cm',
      materiale: 'Tessuto/Legno',
      colore: 'Blu/Legno'
    }
  },
  {
  image: '/images/lampada-sospensione-ildc-cristallo-doppia.webp',
  name: 'Lampadario a sospensione I.L.D.C.',
  description: 'Scenografica lampada a sospensione firmata I.L.D.C., caratterizzata da una struttura in metallo cromato con doppio corpo illuminante e raffinata cascata di elementi in cristallo. La luce viene diffusa in modo brillante e decorativo, creando suggestivi riflessi nell’ambiente. Ideale per valorizzare sale da pranzo, living, ingressi importanti o ambienti di rappresentanza, unendo eleganza, qualità costruttiva e forte impatto estetico.',
  category: 'Lampade',
  price: '€ 500,00',
  gallery: [
    '/images/lampada-sospensione-ildc-cristallo-doppia.webp'
  ],
  specifications: {
    marchio: 'I.L.D.C.'
  }
},
  {
    image: '/images/scrittoio-in-noce.webp',
    name: 'Scrittoio in Noce',
    description: 'Elegante scrittoio in stile classico realizzato in legno massello, arricchito da pannelli frontali laccati in rosso e maniglie in metallo dorato. Dotato di ampio piano di lavoro, due cassetti superiori e tre cassetti frontali, offre spazio funzionale per studi, ingressi o camere. Un mobile raffinato che unisce praticità e carattere, ideale per ambienti tradizionali e di pregio.',
    category: 'Scrittoio',
    price: '€ 750,00',
    gallery: [
      '/images/scrittoio-in-noce.webp',
      '/images/scrittoio-in-noce-1.webp',
      '/images/scrittoio-in-noce-2.webp',
      '/images/scrittoio-in-noce-3.webp'
    ],
    specifications: {
      altezza: '95 cm',
      larghezza: '122 cm',
      profondita: '70 cm',
      materiale: 'Noce',
      colore: 'Noce scuro'
    }
  },
  {
  image: '/images/lampada-ilcd-vetro-blu-paralume-bianco.webp',
  name: 'Lampada I.L.C.D. in vetro blu',
  description: 'Elegante lampada da tavolo firmata I.L.C.D., caratterizzata da un raffinato fusto in vetro blu lavorato e struttura in metallo con finitura ottone. Il paralume chiaro dalla linea classica diffonde una luce morbida e avvolgente, ideale per valorizzare ambienti tradizionali, ingressi, salotti e camere da letto. Un complemento decorativo di grande equilibrio tra artigianalità, materiali pregiati e presenza scenografica.',
  category: 'Lampade',
  price: '€ 290,00',
  gallery: [
    '/images/lampada-ilcd-vetro-blu-paralume-bianco.webp'
  ],
  specifications: {
    marchio: 'I.L.C.D.'
  }
},
  {
    image: '/images/vetrinetta-laccata-grigia.webp',
    name: 'Vetrinetta Laccata Grigia',
    description: 'Elegante vetrina da esposizione in stile vintage, realizzata in legno con finitura anticata e ampie superfici in vetro. Dotata di due ripiani interni e ante scorrevoli, è perfetta per mostrare collezioni, oggetti preziosi o articoli da negozio. Le linee semplici e il carattere retrò la rendono un complemento ideale per ambienti classici, boutique o studi dal gusto raffinato.',
    category: 'Vetrinette',
    price: '€ 950,00',
    gallery: [
      '/images/vetrinetta-laccata-grigia.webp',
      '/images/vetrinetta-laccata-grigia-1.webp',
      '/images/vetrinetta-laccata-grigia-2.webp',
      '/images/vetrinetta-laccata-grigia-3.webp'
    ],
    specifications: {
      altezza: '75 cm',
      larghezza: '130 cm',
      profondita: '42 cm',
      materiale: 'Massello laccato',
      colore: 'Grigio'
    }
  },
  {
  image: '/images/lampada-mangani-ceramica-decorata.webp',
  name: 'Lampada da tavolo in ceramica decorata Mangani',
  description: 'Raffinata lampada da tavolo firmata Mangani, realizzata in ceramica smaltata con eleganti decori floreali nei toni del blu e dettagli dorati. Il paralume chiaro diffonde una luce calda e uniforme, valorizzando la lavorazione artigianale del corpo. Ideale per ambienti classici, salotti eleganti, ingressi o camere da letto di pregio.',
  category: 'Lampade',
  price: '€ 250,00',
  gallery: [
    '/images/lampada-mangani-ceramica-decorata.webp'
  ],
  specifications: {
    marchio: 'Mangani'
  }
},
  {
  image: '/images/lampada-baga-doppia-luce-ottone.webp',
  name: 'Lampada Baga a doppia luce',
  description: 'Raffinata lampada da tavolo Baga caratterizzata da una struttura in ottone con doppio braccio simmetrico e base decorata. I due paralumi chiari diffondono una luce calda e uniforme, valorizzando ambienti classici ed eleganti come soggiorni, ingressi e studi. Un complemento di grande equilibrio estetico che unisce qualità costruttiva, finiture pregiate e forte presenza scenografica.',
  category: 'Lampade',
  price: '€ 190,00',
  gallery: [
    '/images/lampada-baga-doppia-luce-ottone.webp'
  ],
  specifications: {
    marchio: 'Baga'
  }
},
  {
    image: '/images/puff-con-ruote.webp',
    name: 'Puff con Ruote',
    description: 'Elegante panchetta in stile classico con solide gambe in legno tornito e rivestimento in tessuto rosso. Il cuscino superiore, decorato con motivi geometrici nei toni del rosso e del grigio, dona un tocco distintivo e raffinato. Perfetta per ingressi, camere da letto o zone living, unisce praticità e stile con un carattere unico.',
    category: 'Poltrone',
    price: '€ 300,00',
    gallery: [
      '/images/puff-con-ruote.webp',
      '/images/puff-con-ruote-1.webp',
      '/images/puff-con-ruote-2.webp'
    ],
    specifications: {
      altezza: '46 cm',
      larghezza: '85 cm',
      profondita: '42 cm',
      materiale: 'Tessuto',
      colore: 'Rosso'
    }
  },
  {
  image: '/images/lampada-marioni-azzurra-oro-floreale.webp',
  name: 'Lampada Marioni in ceramica azzurra',
  description: 'Elegante lampada da tavolo firmata Marioni caratterizzata da un corpo in ceramica smaltata color azzurro con raffinati decori floreali, abbinata a una base in legno tornito e dettagli in ottone. Il paralume chiaro diffonde una luce calda e accogliente, ideale per valorizzare soggiorni, camere da letto o ambienti classici e di pregio. Un complemento d’arredo decorativo che unisce artigianalità, qualità dei materiali e forte impatto estetico.',
  category: 'Lampade',
  price: '€ 300,00',
  gallery: [
    '/images/lampada-marioni-azzurra-oro-floreale.webp'
  ],
  specifications: {
    marchio: 'Marioni'
  }
},
  {
    image: '/images/coppia-di-divani-boston.webp',
    name: 'Coppia di Divani Boston',
    description: 'Elegante coppia di divani a due posti con struttura solida e rivestimento in tessuto beige di alta qualità. I braccioli presentano una raffinata lavorazione capitonné moderna, mentre le cuciture a contrasto aggiungono carattere e ricercatezza. Morbido e confortevole, è perfetto per salotti, studi o ambienti dallo stile classico e contemporaneo.',
    category: 'Divani',
    price: '€ 2.000,00',
    gallery: [
      '/images/coppia-di-divani-boston.webp',
      '/images/coppia-di-divani-boston-1.webp',
      '/images/coppia-di-divani-boston-2.webp',
      '/images/coppia-di-divani-boston-3.webp'
    ],
    specifications: {
      altezza: '85 cm',
      larghezza: '190 cm',
      profondita: '90 cm',
      materiale: 'Tessuto',
      colore: 'Bianco/Beige'
    }
  },
  {
  image: '/images/lampada-bonaldo-piantana-bianca.webp',
  name: 'Lampada Bonaldo in vetro bianco',
  description: 'Lampada da terra firmata Bonaldo caratterizzata da una base in vetro bianco satinato e da un elegante paralume conico in tessuto chiaro, che diffonde una luce morbida e uniforme. Il design slanciato e minimale la rende ideale per zone living, angoli lettura o ambienti moderni, offrendo un’illuminazione decorativa e funzionale con uno stile pulito e contemporaneo.',
  category: 'Lampade',
  price: '€ 100,00',
  gallery: [
    '/images/lampada-bonaldo-piantana-bianca.webp'
  ],
  specifications: {
    marchio: 'Bonaldo'
  }
},
  {
  image: '/images/lampada-da-tavolo-cenacchi-160.webp',
  name: 'Lampada classica paralume in tessuto – Cenacchi',
  description: 'Raffinata lampada da tavolo firmata Cenacchi, caratterizzata da una base scolpita con finitura effetto marmo e dettagli dorati, abbinata a un elegante paralume in tessuto con fascia centrale decorata a motivi floreali. La luce calda valorizza ambienti classici e di pregio, perfetta per soggiorni, ingressi e camere da letto.',
  category: 'Lampade',
  price: '€ 160,00',
  gallery: [
    '/images/lampada-da-tavolo-cenacchi-160.webp'
  ],
  specifications: {
    marchio: 'Cenacchi'
  }
},
  {
    image: '/images/consolle-in-rovere.webp',
    name: 'Consolle in Rovere',
    description: 'Elegante consolle in legno massello con finitura calda e venature naturali. Il fregio frontale intagliato e le linee sottili delle gambe donano un carattere raffinato e senza tempo. Dotata di un pratico ripiano inferiore, è perfetta per ingressi, salotti o corridoi, ideale per esporre decorazioni o per aggiungere un tocco di stile classico all\'ambiente.',
    category: 'Tavolini',
    price: '€ 650,00',
    gallery: ['/images/consolle-in-rovere.webp'],
    specifications: {
      altezza: '80 cm',
      larghezza: '80 cm',
      profondita: '40 cm',
      materiale: 'Rovere',
      colore: 'Rovere medio'
    }
  },
  {
  image: '/images/lampada-leucos-rossa.webp',
  name: 'Lampada Leucos in vetro rosso',
  description: 'Elegante lampada da tavolo firmata Leucos, caratterizzata da una base in vetro rosso lucido dalle linee morbide e armoniose. Il paralume chiaro diffonde una luce calda e avvolgente, ideale per valorizzare soggiorni, camere da letto o ambienti di rappresentanza. Un complemento d’arredo raffinato che unisce design contemporaneo e qualità artigianale italiana.',
  category: 'Lampade',
  price: '€ 250,00',
  gallery: [
    '/images/lampada-leucos-rossa.webp'
  ],
  specifications: {
    marchio: 'Leucos'
  }
},
  {
    image: '/images/tavolo-in-rovere-bicolore.webp',
    name: 'Tavolo in Rovere Bicolore',
    description: 'Elegante tavolino da salotto in stile classico, caratterizzato da gambe sagomate e struttura color avorio con finitura anticata. Il piano in legno bicolore, rifinito con cornice chiara, aggiunge un tocco raffinato e armonioso. Dotato di pratico cassetto frontale, è ideale per completare soggiorni o ambienti dallo stile tradizionale con un elemento funzionale e di grande charme.',
    category: 'Tavoli',
    price: '€ 600,00',
    gallery: [
      '/images/tavolo-in-rovere-bicolore.webp',
      '/images/tavolo-in-rovere-bicolore-1.webp',
      '/images/tavolo-in-rovere-bicolore-2.webp',
      '/images/tavolo-in-rovere-bicolore-3.webp'],
    specifications: {
      altezza: '38 cm',
      larghezza: '132 cm',
      profondita: '70 cm',
      materiale: 'Ciliegio',
      colore: 'Marrone/Beige'
    }
  },
  {
  image: '/images/lampada-marioni-coppa-cromata.webp',
  name: 'Lampada  Marioni a coppa',
  description: 'Raffinata lampada da tavolo firmata Marioni, caratterizzata da una base a coppa in metallo cromato con linee pulite ed eleganti. Il paralume cilindrico in tessuto chiaro diffonde una luce morbida e uniforme, ideale per valorizzare soggiorni, camere da letto, ingressi o ambienti di rappresentanza. Un complemento d’arredo dal gusto contemporaneo e sofisticato, perfetto per chi cerca un oggetto decorativo di qualità e forte presenza scenica.',
  category: 'Lampade',
  price: '€ 390,00',
  gallery: [
    '/images/lampada-marioni-coppa-cromata.webp'
  ],
  specifications: {
    marchio: 'Marioni'
  }
},
  {
    image: '/images/coppia-poltrone-dona-wenge-rivestimento-animalier.webp',
    name: 'Coppia Poltrone Dona Wenge Rivestimento Animalier',
    description: 'Poltrone di pregio in stile classico, caratterizzata da una struttura in legno laccato nero e seduta rivestita in tessuto animalier effetto zebra. Lo schienale rotondo con borchie decorative aggiunge un tocco sofisticato e ricercato. Ideale per salotti, studi o ambienti dal carattere deciso, è un pezzo distintivo che unisce comfort e forte personalità.',
    category: 'Poltrone',
    price: '€ 1.500,00',
    gallery: [
      '/images/coppia-poltrone-dona-wenge-rivestimento-animalier.webp',
      '/images/coppia-poltrone-dona-wenge-rivestimento-animalier-1.webp',
      '/images/coppia-poltrone-dona-wenge-rivestimento-animalier-2.webp'
    ],
    specifications: {
      altezza: '65 cm',
      larghezza: '70 cm',
      profondita: '70 cm',
      materiale: 'Legno/Tessuto',
      colore: 'Nero/Marrone/Beige'
    }
  },
  {
  image: '/images/lampada-marioni-blu-oro.webp',
  name: 'Lampada da tavolo Marioni in ceramica blu e base dorata',
  description: 'Elegante lampada da tavolo firmata Marioni, caratterizzata da una base in ceramica smaltata blu con finitura lucida e piede in metallo dorato. Il paralume in tessuto chiaro con bordatura decorativa diffonde una luce calda e avvolgente, rendendola ideale per ambienti classici, soggiorni, camere da letto o studi raffinati. Un complemento d’arredo di forte impatto estetico, capace di valorizzare qualsiasi spazio con eleganza e personalità.',
  category: 'Lampade',
  price: '€ 400,00',
  gallery: [
    '/images/lampada-marioni-blu-oro.webp'
  ],
  specifications: {
    marchio: 'Marioni'
  }
},
  {
    image: '/images/consolle-in-legno.webp',
    name: 'Consolle in Legno',
    description: 'Elegante consolle in legno massello con finitura calda e naturale, dotata di un pratico cassetto frontale con maniglie in metallo decorato. La linea sottile delle gambe e il ripiano inferiore la rendono ideale per ingressi, corridoi o zone living. Un complemento d\'arredo raffinato, funzionale e dal fascino senza tempo.',
    category: 'Consolle',
    price: '€ 450,00',
    gallery: ['/images/consolle-in-legno.webp'],
    specifications: {
      altezza: '76 cm',
      larghezza: '70 cm',
      profondita: '35 cm',
      materiale: 'Ciliegio e Noce',
      colore: 'Ciliegio e Noce Chiaro'
    }
  },
  {
  image: '/images/lampada-marioni-coppia-ottone.webp',
  name: 'Coppia di lampade da tavolo Marioni in ottone (non separabile)',
  description: 'Raffinata coppia di lampade da tavolo firmata Marioni, realizzata in metallo con finitura ottone e paralumi in tessuto che diffondono una luce calda e avvolgente. Il design classico con bracci sagomati e base decorativa le rende ideali per ambienti eleganti, salotti, camere da letto o ingressi di rappresentanza. La vendita è intesa esclusivamente in coppia e non sono separabili.',
  category: 'Lampade',
  price: '€ 300,00',
  gallery: [
    '/images/lampada-marioni-coppia-ottone.webp'
  ],
  specifications: {
    marchio: 'Marioni'
  }
},
  {
    image: '/images/tavolo-sellaro-1987.webp',
    name: 'Tavolo Sellaro 1987',
    description: 'Collezione "Le piazze" Tavolo rettangolare a bordo rastremato del designer Luca Scacchetti. Tavolo dal design moderno ed essenziale, caratterizzato da un ampio piano in legno massello e due solide basi geometriche incrociate. La struttura robusta e la finitura calda lo rendono ideale per sale da pranzo, uffici o ambienti contemporanei. Un complemento elegante e raffinato che unisce stile e funzionalità.',
    category: 'Tavoli',
    price: '€ 1.800,00',
    gallery: [
      '/images/tavolo-sellaro-1987.webp',
      '/images/tavolo-sellaro-1987-1.webp',
      '/images/tavolo-sellaro-1987-2.webp'
    ],
    specifications: {
      altezza: '72 cm',
      larghezza: '210 cm',
      profondita: '90 cm',
      materiale: 'Massello',
      colore: 'Noce Chiaro'
    }
  },
  {
  image: '/images/lampada-da-tavolo-florence-140.webp',
  name: 'Lampada ottone con paralume plissettato – Florence',
  description: 'Elegante lampada da tavolo in stile classico con struttura in ottone e base circolare stabile. Il paralume plissettato con profili decorativi diffonde una luce calda e avvolgente, ideale per valorizzare ambienti raffinati come salotti, camere da letto e studi. Un complemento d’arredo sobrio e senza tempo, perfetto per contesti classici e tradizionali. VENDITA IN COPPIA',
  category: 'Lampade',
  price: '€ 250,00',
  gallery: [
    '/images/lampada-da-tavolo-florence-140.webp'
  ],
  specifications: {
    marchio: 'Florence'
  }
},
  {
    image: '/images/credenza-sellaro.webp',
    name: 'Credenza Sellaro',
    description: 'Credenza Classica in Legno di Luca Scacchetti. Maestosa credenza in stile classico realizzata in legno massello, caratterizzata da tre pannelli frontali con lavorazione geometrica e venature evidenti. La finitura calda e lucida valorizza le linee tradizionali e conferisce grande pregio al mobile. Ideale per soggiorni, sale da pranzo o studi, offre un\'eleganza senza tempo e una presenza scenica raffinata.',
    category: 'Credenze',
    price: '€ 2.200,00',
    gallery: [
      '/images/credenza-sellaro.webp',
      '/images/credenza-sellaro-1.webp',
      '/images/credenza-sellaro-2.webp'
    ],
    specifications: {
      altezza: '78 cm',
      larghezza: '187 cm',
      profondita: '78 cm',
      materiale: 'Massello',
      colore: 'Ciliegio'
    }
  }
];

interface ProductsProps {
  selectedCategory: string;
}

const Products = forwardRef<HTMLDivElement, ProductsProps>(({ selectedCategory }, ref) => {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  const filteredProducts = selectedCategory === 'Tutti'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <>
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    <section id="collezione" ref={ref} className="py-24 bg-stone-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-amber-100 mb-4 px-4">
            {selectedCategory === 'Tutti'
              ? 'Scopri la Nostra Collezione di Mobili Artigianali'
              : selectedCategory}
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-stone-300 font-light max-w-2xl mx-auto leading-relaxed px-4">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'prodotto disponibile' : 'prodotti disponibili'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-screen-xl mx-auto px-4">


          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="relative overflow-hidden bg-stone-900 aspect-square mb-4 border border-stone-800">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 cursor-zoom-in"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1">
                <h3 className="text-lg sm:text-xl font-serif text-amber-100 group-hover:text-amber-400 duration-300 text-center sm:text-left">
                  {product.name}
                </h3>
                {product.price && (
                  <div className="text-base sm:text-lg font-semibold text-amber-600">
                    {product.price}
                  </div>
                )}
              </div>
              <p className="text-sm sm:text-base text-stone-400 font-light leading-relaxed line-clamp-3">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
});

Products.displayName = 'Products';

export default Products;
