/**************
 *  Variables *
 **************/
const titre = document.getElementById('titre');
const affichageMelange = document.getElementById('affichage-melange');
const inputbase = document.getElementById('input_bases');
const background = document.getElementById('back');
const couleurs = document.getElementById('couleurs').addEventListener('change', ($event) => {
			if ($event.target.value == "blanc_noir") {				
				background.setAttribute("style", "background-color: black; color: white");
			} else if ($event.target.value == "noir_blanc") {				
				background.setAttribute("style", "background-color: white; color: black");
			} else if ($event.target.value == "jaune_noir") {				
				background.setAttribute("style", "background-color: black; color: yellow");
			} else if ($event.target.value == "violet_blanc") {				
				background.setAttribute("style", "background-color: white; color: purple");
			} else if ($event.target.value == "black_cyan") {				
				background.setAttribute("style", "background-color: cyan; color: black");
			} else if ($event.target.value == "black_yellow") {				
				background.setAttribute("style", "background-color: yellow; color: black");
			} else if ($event.target.value == "white_blue") {				
				background.setAttribute("style", "background-color: blue; color: white");
			} else if ($event.target.value == "black_thalo_yellow_green") {				
				background.setAttribute("style", "background-color: #99FF99; color: black");
			} else if ($event.target.value == "lime_black") {				
				background.setAttribute("style", "background-color: black; color: lime");
			}
		});

const lecon = document.getElementById('lecon');
const buttonLink = document.getElementById('buttonLink');

var sons = [];
var lesBases = [];
var mots = [];

var mots_en_o = ['mot', 'comme', 'alors', 'encore', 'homme', 'trop', 'comment', 'gros', 'soleil', 'porte', 'école', 
'chose', 'moment', 'votre', 'forêt', 'notre', 'ordre', 'fort', 'recopier', 'nos', 'bord', 'lorsque', 'dos', 'or', 
'possible', 'sol', 'forme', 'd\'abord', 'oreille', 'sortir', 'chose', 'numéro', 'grosse', 'pomme', 'chocolat', 'vélo', 
'colère', 'corps', 'objet', 'joli', 'énorme', 'propre', 'dormir', 'fromage', 'pot', 'robe', 'poche', 'docteur', 'sorcière', 
'force', 'tortue', 'note', 'objet', 'photo', 'sorte', 'voler', 'corde', 'transformer', 'dehors', 'problème', 'odeur', 
'crocodile', 'police', 'robot', 'modèle', 'proposer', 'os', 'rose', 'parole', 'sommeil', 'document', 'orage', 'poste', 
'poser', 'poème', 'désordre', 'sommet', 'coq', 'moto', 'moteur', 'colorier', 'nord', 'radio', 'apporter', 'promenade'];
var mots_en_au = ['au', 'aussi', 'autre', 'autour', 'aujourd\'hui', 'haut', 'pauvre', 'aussitôt', 'faux', 
'cause', 'jaune', 'gauche', 'haute', 'auteur', 'chaud', 'mauvais', 'autant', 'sauter', 'autrefois', 'aucun', 
'chaussure', 'sauf', 'automne', 'aucune', 'épaule', 'fauteuil', 'mauvaise', 'sauvage', 'hauteur', 'faute', 
'auto', 'auprès', 'chauffeur', 'sauver', 'autobus', 'là-haut', 'autruche', 'restaurant', 'aube', 'crapaud', 
'tuyau', 'taureau', 'chaussette', 'chauffer', 'défaut', 'applaudir', 'dauphin', 'sauce', 'automobile', 'autoroute', 
'taupe', 'fauve', 'auparavant', 'chauve-souris', 'noyau', 'auberge', 'paupière', 'chauffage', 'gaulois', 'cauchemar', 
'saucisse', 'sursaut', 'chaudron', 'aurore', 'esquimau', 'autocar', 'sauterelle', 'saucisson', 'miauler', 'chaussée', 
'cosmonaute', 'astronaute', 'naufrage', 'aubergiste'];
var mots_en_eau = ['eau', 'beaucoup', 'beau', 'oiseau', 'tableau', 'château', 'chapeau', 'peau', 'nouveau', 'gâteau', 
'morceau', 'cadeau', 'manteau', 'corbeau', 'bureau', 'museau', 'couteau', 'troupeau', 'ruisseau', 'ciseau', 'plateau', 
'chameau', 'marteau', 'agneau', 'niveau', 'rideau', 'seau', 'moineau', 'vaisseau', 'traîneau', 'pinceau', 'drapeau', 
'veau', 'beauté', 'taureau', 'râteau', 'anneau', 'radeau', 'berceau', 'chapiteau', 'panneau', 'carreau', 'poteau', 
'poireau', 'cerveau', 'tonneau', 'bouleau', 'jumeau', 'escabeau', 'rouleau', 'moineau', 'barreau', 'hameau', 'chevreau'];
var mots_en_oi = ['oignon'];
var sons_en_o = ['mots en o', 'mots en au', 'mots en eau', 'mot en oi'];
var lesBases_en_o = [mots_en_o, mots_en_au, mots_en_eau, mots_en_oi];

var mots_en_ou = ['jour', 'ours', 'loup', 'souris', 'coup', 'route', 'bonjour', 'tour', 'bout', 'course', 'couleur', 'journée', 'journal', 'sous', 
'trou', 'bouquet', 'poule', 'poupée', 'bouche', 'mouton', 'cour', 'cou', 'cours', 'retour', 'rouge', 'joue', 'soupe', 'poulet', 'boue', 'genou', 
'roue', 'mousse', 'chou', 'boule', 'ourson', 'tambour', 'four', 'moulin', 'blague', 'nouveau', 'hibou', 'couteau', 'pelouse', 'clou', 'poussin', 
'fourmi', 'sourire', 'pouce', 'coussin', 'moule', 'yaourt', 'boucher', 'bougie', 'course', 'bouton', 'bouchon', 'couloir', 'trousse', 'nourriture'];
var mots_en_oi = ['histoire', 'voiture', 'poisson', 'soir', 'bois', 'oiseau', 'roi', 'voix', 'voie', 'toit', 'joie', 'mois', 'noir', 
'soif', 'noix', 'miroir', 'étoile', 'endroit', 'froid', 'droite', 'toilette', 'bonsoir', 'voiture', 'moineau', 'voile', 'baignoire', 'arrosoir', 
'tiroir', 'couloir', 'poisson', 'poire', 'doigt', 'trottoir', 'voisin', 'boisson', 'oie', 'coiffeur', 'framboise', 'poivre', 'rasoir', 'toile'];
var mots_en_on = ['maison', 'poisson', 'monde', 'garçon', 'montagne', 'bonjour', 'pont', 'ballon', 'carton', 'citron', 'montre', 'champignon', 
'fond', 'menton', 'chanson', 'jambon', 'mouton', 'oncle', 'long', 'rond', 'bonbon', 'leçon', 'bâton', 'confiture', 'savon', 'salon', 'conte'];
var mots_en_om = ['nom', 'ombre', 'trompette', 'pompier', 'nombre', 'pompe', 'compère', 'comptine', 'prénom', 'compagnon', 'bombe', 'plomb', 'tombola', 
'colombe', 'nombril', 'lombric', 'pompon', 'compteur'];
var sons_en_ou_oi_on_om = ['ou', 'oi', 'on', 'om'];
var lesBases_en_ou_oi_on_om = [mots_en_ou, mots_en_oi, mots_en_on, mots_en_om];

var mots_en_e = ['père', 'mère', 'frère', 'rivière', 'grand-mère', 'pièce', 'lumière', 'grand-père', 'colère', 'manière', 'mètre', 'scène', 'sorcière', 
'chèvre', 'après-midi', 'élève', 'problème', 'modèle', 'lièvre', 'arrière', 'poème', 'planète', 'poussière', 'bibliothèque', 'règle', 'lèvre', 'mystère', 'espèce', 
'troisième', 'caractère', 'sirène', 'flèche', 'zèbre', 'hélicoptère', 'cuillère', 'manège', 'fièvre', 'siège', 'panthère', 'clairière', 'piège'];
var mots_en_ee = ['tête', 'forêt', 'fête', 'fenêtre', 'bête', 'pêche', 'vêtement', 'tempête', 'rêve', 'arrêt', 'enquête', 'chêne', 
'guêpe', 'crêpe', 'bêtise', 'arête', 'têtard', 'hêtre', 'conquête', 'casse-tête', 'crête', 'prêtre', 'trêve', 'alêne', 'entêté', 'rêveur', 
'bêlement', 'grêle', 'grêlon'];
var mots_en_ai = ['maison', 'air', 'lait', 'aide', 'aile', 'raison', 'contraire', 'chaise', 'caisse', 'anniversaire', 'saison', 'araignée', 
'paire', 'naissance', 'prairie', 'paix', 'maire', 'aigle', 'aiguille', 'fraise', 'quai', 'essai', 'haie', 'claire', 'chair', 'monnaie', 
'raisin', 'baignoire', 'liaison', 'vrai', 'laisse', 'retraite', 'librairie', 'craie', 'vinaigre', 'souhait', 'graisse', 'éclair'];
var mots_en_ei = ['neige', 'seigneur', 'peigne', 'seigle', 'beige', 'beignet', 'peignoir', 'enseignant', 'seiche', 'treize', 'seize', 'perce-neige', 'chasse-neige'];
var mots_en_es = ['question', 'reste', 'veste', 'geste', 'restaurant', 'orchestre', 'désespoir', 'majesté', 'sieste', 'respect', 'test', 'festival', 
'festin', 'vestiaire', 'destin', 'bestiole', 'manifestation', 'responsable', 'peste', 'digestion', 'rescapé', 'zeste', 'modeste', 'intestin', 'fresque'];
var mots_en_er = ['verbe', 'exercice', 'personne', 'herbe', 'recherche', 'ferme', 'serpent', 'mercredi', 'vert', 'service', 'dernier', 'couverture', 
'merci', 'cercle', 'merle', 'berger', 'perle', 'conversation', 'mer', 'berceau', 'réserve', 'énergie', 'perte', 'serviette', 'concert', 
'perdrix', 'cerf', 'auberge', 'concierge', 'cerveau', 'verglas', 'conserve', 'verger', 'servante', 'averse', 'lanterne', 'persil'];
var sons_en_e_ai_ei_es_er = ['è', 'ê', 'ai', 'ei', 'es', 'er'];
var lesBases_en_e_ai_ei_es_er = [mots_en_e, mots_en_ee, mots_en_ai, mots_en_ei, mots_en_es, mots_en_er];

var mots_en_c = ['avec', 'comme', 'encore', 'beaucoup', 'comment', 'coup', 'école', 'car', 'donc', 'côté', 'contre', 'recopier', 
'comment', 'couleur', 'combien', 'coeur', 'sac', 'vacance', 'cusine', 'raconter', 'course', 'dictionnaire', 'carte', 'lecture', 
'colère', 'corps', 'comprendre', 'coin', 'courir', 'cou', 'commencer', 'cour', 'cas', 'cause', 'conte', 'écouter', 'docteur', 
'cours', 'content', 'contraire', 'campagne', 'complément', 'cahier', 'café', 'escalier', 'bec', 'cadeau', 'secours', 'corde', 
'connaître', 'indicatif', 'camarade', 'cage', 'compte', 'canard', 'continuer', 'corbeau', 'lac', 'aucun', 'écureuil', 'document', 
'courage', 'couper', 'cabane', 'capitaine', 'courant', 'coq', 'carton', 'aucune', 'caisse', 'parc', 'cartable', 'construire'];
var mots_en_ch = ['orchestre', 'chrono', 'choeur', 'écho', 'technique', 'chronomètre', 'chorale', 'technicien', 'chronologie', 
'technologie', 'chlorophylle', 'auroch', 'chrysalide', 'chronique', 'chrysanthème', 'chrome', 'chorégraphie', 'psychologie', 
'chrétien', 'polychrome', 'lichen', 'psychiatre', 'archéologie', 'chaos', 'choléra', 'chronométrer', 'orchidée', 'almanach', 
'chlore', 'choriste', 'psychologue', 'varech', 'psychiatrie'];
var mots_en_cc =['accord', 'accorder', 'occuper', 'accompagner', 'accueil', 'accordéon', 'accomplir', 'accueillir', 'occupation', 
'accourir', 'accuser', 'occasion', 'préoccuper', 'succulent', 'accrocher', 'raccrocher', 'succomber', 'accumulation', 'accabler', 
'désaccord', 'accumuler', 'raccommoder', 'impeccable', 'saccager', 'accolade', 'accoster', 'accoudoir', 'accalmie', 'acclamer'];
var mots_en_k = ['képi', 'ski', 'okapi', 'karaté', 'koala', 'kilt', 'kayak', 'kangourou', 'kilomètre', 'kilo', 
'kaki', 'kimono', 'bikini', 'kiosque', 'parking', 'kermesse', 'anorak', 'week-end', 'skieur', 'basket', 'kilogramme', 
'klaxon', 'skier', 'kiwi', 'kiosque', 'polka', 'moka', 'fakir', 'kaléidoscope', 'drakkar', 'sketch', 'pékinois', 
'parka', 'kidnapper', 'karting', 'skateboard', 'yak'];
var mots_en_ck = ['bifteck', 'crack', 'frick', 'pack', 'rock', 'snack', 'ticket', 'rocket', 'hockey', 'jockey', 'haddock', 
'teckel', 'blockhaus', 'cockpit'];
var mots_en_q = ['coq', 'cinq', 'piqûre'];
var mots_en_qu = ['qui', 'que', 'quand', 'chaque', 'quel', 'quelle', 'pourquoi', 'quelque', 'question', 'jusqu\'à', 'quoi', 
'quatre', 'est-ce que', 'queue', 'lorsque', 'indiquer', 'parce que', 'presque', 'quelqu\'un', 'musique', 'laquelle', 'lequel', 
'explique', 'cirque', 'magique', 'puisque', 'magnifique', 'équipe', 'tranquille', 'lesquels', 'manquer', 'paquet', 'fabriquer', 
'brusquement', 'quartier', 'bibliothèque', 'époque', 'barque', 'tranquillement', 'quelquefois', 'quitter', 'marque', 'bouquet', 
'italique', 'quinze', 'perroquet', 'électrique', 'inquiet', 'qualité', 'disque', 'lesquelles', 'quart', 'quitte', 'remarque', 
'boutique', 'coquille', 'casquette', 'enquête', 'cinquante', 'équilibre', 'masque', 'remarque', 'quarante', 'quantité', 'quai', 'casque', 
'requin', 'auquel', 'plastique', 'équipage', 'unique', 'piquer', 'phoque'];
var sons_en_k = ['mots en c', 'mots en ch', 'mots en cc', 'mots en k', 'mots en ck', 'mots en q', 'mots en qu'];
var lesBases_en_k = [mots_en_c, mots_en_ch, mots_en_cc, mots_en_k, mots_en_ck, mots_en_q, mots_en_qu];

var mots_en_f = ['enfant', 'forêt', 'feu', 'fleur', 'fête', 'fille', 'fée', 'fenêtre', 'frère', 'oeuf', 'enfin', 
'fort', 'fraise', 'neuf', 'faim', 'farine', 'fin', 'fantôme', 'café', 'foule', 'fer', 'fond', 'facile', 'confiture', 
'four', 'girafe', 'boeuf', 'fourmi', 'femme', 'coffre', 'figure', 'fumée', 'froid', 'soif', 'flûte', 'ferme'];
var mots_en_ff = ['difficile', 'coffre', 'affreux', 'affiche', 'souffle', 'offre', 'chiffon', 'coiffeur', 'effet', 
'chauffeur', 'sifflet', 'affaire', 'chauffer', 'chiffre', 'différent', 'étoffe', 'buffet', 'couffin'];
var mots_en_ph = ['éléphant', 'téléphone', 'photo', 'phrase', 'phoque', 'phare', 'pharmacie', 'pharmacien', 'dauphin', 
'photographe', 'alphabet', 'téléphérique', 'catastrophe', 'nénuphar', 'saxophone', 'physique', 'strophe', 'géographie'];
var sons_en_f = ['mots en f', 'mots en ff', 'mots en ph'];
var lesBases_en_f = [mots_en_f, mots_en_ff, mots_en_ph];

var mots_en_s_son_s = ['histoire', 'ours', 'soleil', 'escalier', 'souris', 'sac', 'masque', 'sucre', 'salade', 'course', 'veste', 
'salle', 'sapin', 'piste', 'réponse', 'poste', 'chanson', 'triste'];
var mots_s_son_z = ['maison', 'oiseau', 'télévision', 'besoin', 'cuisine', 'musique', 'chose', 'chemise', 'rose', 
'poser', 'surprise', 'chaise', 'magasin', 'valise', 'visage', 'vase', 'pelouse', 'fusée'];
var mots_ss = ['aussi', 'poisson', 'passer', 'dessin', 'classe', 'grosse', 's\'asseoir', 'maîtresse', 'assez', 'pousser', 'glisser', 
'laisser', 'chaussure', 'hérisson', 'caisse', 'aussitôt', 'mousse', 'casser'];
var mots_z = ['zoo', 'zèbre', 'bizarre', 'onze', 'douze', 'zéro', 'lézard', 'gazon', 'quinze', 'bazar', 
'trapèze', 'seize', 'gaz', 'gazelle', 'zouave', 'zigzag', 'zébu', 'zone'];
var sons_en_s_z = ['mots en s [s]', 'mots en s [z]', 'mots en ss', 'mots en z'];
var lesBases_en_s_z = [mots_en_s_son_s, mots_s_son_z, mots_ss, mots_z];

var mots_en_br = ['bruit', 'arbre', 'bras', 'chambre', 'nombre', 'ombre', 'branche', 'abri', 'septembre', 'brouillard', 'décembre', 'octobre', 'novembre',
'équilibre', 'zèbre', 'brosse', 'membre', 'brise', 'brin', 'brume', 'timbre', 'broche', 'fabrication', 'brigand', 'brousse', 'librairie', 'sabre', 'cambrioleur', 
'brioche', 'brun', 'braise', 'rubrique', 'brique', 'brouette', 'abricot', 'brindille', 'bracelet', 'brouillon', 'brousaille', 'abracadabra', 'bretelles'];
var mots_en_cr = ['sucre', 'cri', 'crocodile', 'mercredi', 'crème', 'crayon', 'secret', 'écran', 'récréation', 'écriture', 'creux', 'croix', 'encre', 
'crapaud', 'crabe', 'crainte', 'croquis', 'crinière', 'description', 'crâne', 'cravate', 'crête', 'crevette', 'acrobate', 'écrivain', 'crêpe', 'craie', 
'micro', 'croc', 'craquement', 'croissant', 'microbe', 'cruche', 'crépuscule', 'créature', 'cristal', 'crochet', 'ancre', 'croûte', 'crime', 'cratère'];
var mots_en_dr = ['ordre', 'droite', 'poudre', 'dragon', 'adresse', 'drôle', 'vendredi', 'drap', 'cadre', 'drapeau', 'endroit', 'calendrier', 
'dromadaire', 'foudre', 'perdrix', 'chaudron', 'cendre', 'tendre', 'drame', 'édredon', 'cadran', 'maladroit', 'cylindre', 'cidre', 'cathédrale', 'dressage', 
'cèdre', 'dragée', 'goudron', 'druide', 'drakkar', 'scaphandre', 'aérodrome', 'sparadrap', 'draisienne', 'espadrille', 'quadrupède', 'vadrouille'];
var mots_en_fr = ['frère', 'fruit', 'fromage', 'froid', 'front', 'français', 'coffre', 'fraise', 'chiffre', 'frais', 'fraise', 'réfrigérateur', 'frein', 
'frayeur', 'chiffre', 'fraîcheur', 'refrain', 'framboise', 'frite', 'dentifrice', 'effroi', 'naufrage', 'frisson', 'coffret', 'frigo', 'friandise', 'affreux', 
'frousse', 'frange', 'gaufre', 'frégate', 'fraction', 'fracture', 'frelon', 'souffrance', 'frimousse', 'frontière', 'franchise', 'balafre', 'safran', 'frêne'];
var mots_en_gr = ['groupe', 'grand-mère', 'grand-père', 'grand', 'grenouille', 'orthographe', 'tigre', 'grille', 'graine', 'paragraphe', 'grotte', 'agriculteur', 
'grain', 'grenier', 'ogre', 'programme', 'gros', 'grammaire', 'griffe', 'chagrin', 'grange', 'gris', 'photographie', 'grimace', 'gruyère', 'grue', 'grappe', 
'grosse', 'grippe', 'géographie', 'vinaigre', 'grève', 'regret', 'grelot', 'grillage', 'grave', 'graisse', 'groin', 'groseille', 'gravier', 'grotte'];
var mots_en_pr = ['présent', 'prix', 'premier', 'prince', 'printemps', 'après-midi', 'surprise', 'problème', 'pré', 'promenade', 'proposition', 'produit', 
'prénom', 'esprit', 'impression', 'prairie', 'proie', 'propos', 'prison', 'épreuve', 'professeur', 'préparation', 'provision', 'propriétaire', 
'président', 'prise', 'problème', 'preuve', 'protection', 'presse', 'projet', 'préférence', 'profondeur', 'prisonnier', 'précision', 'imprimerie'];
var mots_en_tr = ['lettre', 'train', 'maître', 'travail', 'fenêtre', 'maîtresse', 'trou', 'titre', 'mètre', 'ventre', 'entrée', 'contraire', 'monstre', 
'théâtre', 'montre', 'kilomètre', 'centre', 'troupeau', 'trésor', 'intrus', 'chapitre', 'trottoir', 'trait', 'instrument', 'autruche', 'trompe', 'peintre', 
'orchestre', 'rencontre', 'trois', 'tronc', 'trace', 'patron', 'citron', 'construction', 'trompette', 'portrait', 'traîneau', 'métro', 'vitrine', 'feutre'];
var sons_en_br = ['br', 'cr', 'dr', 'fr', 'gr', 'pr', 'tr'];
var lesBases_en_br = [mots_en_br, mots_en_cr, mots_en_dr, mots_en_fr, mots_en_gr, mots_en_pr, mots_en_tr];

var mots_en_bl = ['table', 'bleu', 'cartable', 'tableau', 'blanc', 'blé', 'sable', 'bibliothèque', 'meuble', 'tablier', 'immeuble', 'semblant', 'étable',
'imperméable', 'blanche', 'république', 'impossible', 'publicité', 'ensemble', 'fable', 'public', 'blessure', 'blouson', 'problème', 'cible', 'doublure', 'oubli', 
'faible', 'blonde', 'tablette', 'bloc', 'diable', 'blessé', 'double', 'blaireau', 'blague', 'obligation'];
var mots_en_cl = ['classe', 'clown', 'clé', 'oncle', 'clou', 'cloche', 'spectacle', 'bicyclette', 'boucle', 'éclair', 'clair', 'article', 'club', 
'clinique', 'claque', 'miracle', 'classe', 'muscle', 'client', 'cycliste', 'clocher', 'cercle', 'clan', 'clef', 'clochard', 'cloison', 'tricycle', 
'clairière', 'clôture', 'éclaboussure', 'cloque', 'clic', 'couvercle', 'clarinette', 'clochette', 'obstacle'];
var mots_en_fl = ['fleur', 'flûte', 'flaque', 'flocon', 'fleuve', 'sifflet', 'trèfle', 'pantoufle', 'fleuriste', 'flamme', 'souffle', 'gifle', 
'flic', 'flacon', 'fluor', 'flèche', 'mufle', 'mouflon', 'reflet', 'éraflure', 'flotte', 'réflexe', 'fléchette'];
var mots_en_gl = ['glace', 'règle', 'église', 'ongle', 'épingle', 'gland', 'jongleur', 'glaçon', 'triangle', 'jungle', 'aigle', 'igloo', 'angle', 
'anglais', 'glisse', 'sanglier', 'troglodyte', 'globe', 'glissade', 'aveugle', 'glu', 'glacier', 'glaïeul', 'gloussement'];
var mots_en_pl = ['place', 'pluie', 'exemple', 'plume', 'parapluie', 'plat', 'placard', 'plateau', 'plante', 'planche', 'plaisir', 'planète', 
'plage', 'plan', 'plâtre', 'plaine', 'plafond', 'platane', 'plancher', 'plongeon', 'explication', 'plastique', 'simple', 'pli', 'plaque', 'plumage', 'panoplie', 
'plombier', 'exploit', 'couple', 'plomb', 'plein', 'plante', 'plongeoir', 'complet', 'application', 'emploi', 'plantation', 'compliment', 'plongée', 'plaisanterie'];
var sons_en_bl = ['bl', 'cl', 'fl', 'gl', 'pl'];
var lesBases_en_bl = [mots_en_bl, mots_en_cl, mots_en_fl, mots_en_gl, mots_en_pl];

var mots_en_eu1 = ['leur', 'peur', 'heure', 'seul', 'fleur', 'plusieurs', 'couleur', 'jeune', 'seule', 'seulement', 
'docteur', 'neuf', 'auteur', 'ailleurs', 'intérieur', 'odeur', 'pleurer', 'chasseur', 'fleuve', 'chaleur', 
'directeur', 'beurre', 'moteur', 'facteur', 'erreur', 'ordinateur', 'instituteur'];
var mots_en_eu2 = ['deux', 'peu', 'feu', 'vieux', 'jeu', 'peut-être', 'queue', 'milieu', 'lieu', 'cheveu', 'bleu',
 'déjeuner', 'dieu', 'jeudi'];
var mots_en_oeu1 = ['un oeuf', 'oeuvre', 'un boeuf', 'manoeuvre', 'coeur', 'choeur', 'soeur', 'chef-d\'oeuvre', 'hors-d\'oeuvre', 
'à contrecoeur', 'écoeuré', 'rancoeur', 'main-d\'oeuvre', 'désoeuvré'];
var mots_en_oeu2 = ['des oeufs', 'des boeufs', 'un noeud', 'voeu'];
var mots_en_eux = ['heureux', 'malheureux', 'sérieux', 'précieux', 'délicieux', 'affreux', 'curieux', 'furieux', 'dangereux', 'nombreux'];
var mots_en_euse = ['heureuse', 'malheureuse', 'sérieuse', 'précieuse', 'délicieuse', 'affreuse', 'curieuse', 'furieuse', 'dangereuse', 'nombreuse', 
'chanteuse', 'coiffeuse', 'voleuse'];
var mots_en_eusement = ['heureusement', 'malheureusement', 'sérieusement', 'précieusement', 'délicieusement', 'affreusement', 'curieusement', 
'furieusement', 'dangereusement'];
var sons_en_eu = ['mots en eu ', 'mots en eu', 'mots en oeu ', 'mots en oeu', 'mots en eux', 'mots en euse', 'mots en eusement'];
var lesBases_en_eu = [mots_en_eu1, mots_en_eu2, mots_en_oeu1, mots_en_oeu2, mots_en_eux, mots_en_euse, mots_en_eusement];

var mots_en_ian_j = ['viande', 'confiance', 'méfiance', 'mendiant', 'étudiant', 'ambiance', 'fiancé', 'alliance', 'variante', 'fortifiant', 'fiançailles', 
'insouciance', 'stupéfiant'];
var mots_en_ien = ['chien', 'gardien', 'bien', 'magicien', 'musicien', 'pharmacien', 'mécanicien', 'indien', 'lien', 'ancien', 'entretien', 'comédien', 
'rien', 'bienvenu', 'terrien', 'chirurgien', 'bohémien', 'technicien', 'quotidien', 'électricien', 'vaurien', 'soutien', 
'tien', 'mien', 'sien', 'collégien', 'mathématicien', 'acarien', 'historien', 'saurien'];
var mots_en_ieu =['milieu', 'lieu', 'dieu', 'vieux', 'mieux', 'curieux', 'adieu', 'sérieux', 'banlieue', 'silencieux', 'pieu', 'lieutenant', 'cieux', 'épieu', 
'essieu', 'ambitieux', 'religieux', 'envieux', 'anxieux'];
var mots_en_ion = ['question', 'lion', 'avion', 'télévision', 'expression', 'région', 'camion', 'occasion', 'impression', 'million', 'champion', 
'émission', 'avion', 'réunion', 'décision', 'mission', 'explosion', 'discussion', 'permission', 'révision', 'conclusion'];
var sons_en_ien = ['mots en ian', 'mots en ien', 'mots en ieu', 'mots en ion'];
var lesBases_en_ien = [mots_en_ian_j, mots_en_ien, mots_en_ieu, mots_en_ion];

var mots_en_tie = ['acrobatie', 'péripétie', 'idiotie', 'calvitie', 'démocratie', 'prophétie', 'diplomatie', 'minutie', 'balbutie'];
var mots_en_tien = ['dalmatien', 'égyptien', 'martien', 'tahitien', 'vénitien'];
var mots_en_tion = ['attention', 'direction', 'information', 'action', 'proposition', 'collection', 'ponctuation', 'situation', 'définition', 
'solution', 'opération', 'récréation', 'circulation', 'explication', 'construction', 'fonction', 'condition', 'station', 'imagination', 
'position', 'exclamation', 'interrogation', 'illustration', 'population', 'fabrication', 'addition', 'soustraction', 'éducation', 'habitation', 'protection', 
'signification', 'apparition', 'punition', 'présentation', 'intention', 'alimentation', 'respiration', 'répétition', 'production'];
var sons_en_tien = ['mots en tie', 'mots en tien', 'mots en tion'];
var lesBases_en_tien = [mots_en_tie, mots_en_tien, mots_en_tion];

var mots_en_ill = ['fille', 'famille', 'papillon', 'bille', 'brille', 'gentille', 'grille', 'vanille', 'bille', 'coquille', 'juillet', 'billet', 
'cuillère', 'fillette', 'quille', 'habiller', 'aiguille', 'grillon', 'brillant', 'coquillage', 'grillage', 'pastille', 'lentille', 
'gorille', 'cheville', 'chenille', 'carillon', 'bâiller', 'tourbillon', 'jonquille', 'tilleul', 'anguille', 'béquille'];
var mots_en_ay = ['pays', 'crayon', 'payer', 'rayon', 'rayures', 'paysage', 'essayer', 'paysan', 'balayer', 
'effrayer', 'bégayer', 'kayak', 'frayeur', 'paysanne', 'balayette', 'papaye'];
var mots_en_oy = ['voyage', 'joyeux', 'noyau', 'voyant', 'aboyer', 'royaume', 'envoyer', 'nettoyer', 
'moyen', 'noyer', 'voyelle', 'loyer', 'incroyable', 'citoyen', 'employer', 'tutoyer'];
var mots_en_uy = ['tuyau', 'gruyère', 'ennuyeux', 'bruyant', 'bruyère', 'ennuyé', 'bruyante', 'écuyère', 
'écuyer', 'appuyer', 'ennuyeuse', 'fuyant', 'fuyard', 'essuyage', 'tuyauterie'];
var sons_en_ill = ['mots en ill', 'mots en ay', 'mots en oy', 'mots en uy'];
var lesBases_en_ill = [mots_en_ill, mots_en_ay, mots_en_oy, mots_en_uy];

var mots_en_ail = ['travail', 'détail', 'portail', 'rail', 'éventail', 'gouvernail', 'ail', 'bétail', 'poitrail', 'corail', 'chandail', 
'émail', 'épouvantail', 'soupirail', 'vitrail', 'attirail', 'autorail'];
var mots_en_aill = ['taille', 'ailleurs', 'travailler', 'cailloux', 'bataille', 'maillot', 'jaillir', 'poulailler', 
'muraille', 'écaille', 'médaille', 'broussaille', 'taillis', 'ferraille', 'tailler', 'maille', 'volaille', 
'braille', 'gaillard', 'caille', 'paillette', 'paille', 'trouvaille', 'tenaille', 'taille-crayon', 'tailleur', 'pagaille', 
'entaille', 'paillasson', 'entraille', 'travailleur', 'faille', 'canaille', 'vaillant'];
var mots_en_eil =['soleil', 'appareil', 'sommeil', 'conseil', 'réveil', 'vieil', 'pareil', 'orteil', 'éveil', 
'vermeil'];
var mots_en_eill = ['bouteille', 'abeille', 'merveille', 'meilleur', 'vieillard', 'surveiller', 'veiller', 'réveiller', 
'oreiller', 'pareille', 'corbeille', 'vieillir', 'surveillant', 'groseille', 'oseille', 'vieillesse', 'réveillon', 'oreillons', 'veilleur', 
'conseiller', 'veillée', 'embouteillage', 'réveille-matin', 'corneille', 'perce-oreille'];
var mots_en_euil = ['écureuil', 'fauteuil', 'seuil', 'chevreuil', 'deuil', 'treuil', 'cerfeuil', 'bouvreuil'];
var mots_en_euillle = ['feuille', 'feuillage', 'portefeuille', 'feuilleton', 'chèvrefeuille', 'mille-feuille'];
var mots_en_ouill = ['grenouille', 'brouillard', 'citrouille', 'bouillon', 'brouillon', 'bouillie', 'rouille', 'patrouille', 'ratatouille', 'bouillonnement', 
'fouille', 'mouillage', 'bouillote', 'quenouille', 'trouille', 'dépouille', 'gribouille', 'souillon', 'brouille', 'andouillette', 'carabistouille', 'touille', 
'bouilloire', 'douille', 'bouillabaisse', 'nouille', 'barbouilleur', 'tambouille', 'cafouillage', 'vadrouille', 'embrouille', 'houille', 'fripouille'];
var sons_en_ail = ['mots en ail', 'mots en aill', 'mots en eil', 'mots en eill', 'mots en euil', 'mots en euill', 'mots en ouill'];
var lesBases_en_ail = [mots_en_ail, mots_en_aill, mots_en_eil, mots_en_eill, mots_en_euil, mots_en_euillle, mots_en_ouill];

var mots_en_ca = ['car', 'carte', 'cas', 'cahier', 'café', 'escalier', 'cadeau', 'camarade', 'cage', 'canard', 'cabane', 'cacher', 'capitaine',
'carton', 'cartable', 'camion', 'capable', 'cave', 'case', 'carnaval', 'casser', 'escargot', 'calme', 'carotte', 'casserole', 'placard', 
'canot', 'caractère', 'encadrer', 'bocal', 'canne', 'caverne', 'casque', 'chacal'];
var mots_en_ce = ['ce', 'cela', 'place', 'exercice', 'est-ce que', 'celui', 'vacance', 'parce que', 'France', 'pièce', 'glace', 'doucement', 
'silence', 'prince', 'force', 'grâce', 'chance', 'espace', 'face', 'police', 'service', 'surface', 'douce', 'avance', 'lance', 'distance', 
'annonce', 'ceci', 'naissance', 'recevoir', 'sorce', 'trace'];
var mots_en_ci = ['voici', 'exercice', 'ceci', 'ici', 'ciel', 'difficile', 'cirque', 'participe', 'cinéma', 'facile', 'décider', 'sorcière', 'récit', 
'accident', 'ciseau', 'merci', 'citron', 'circulation', 'racine', 'souci', 'électricité', 'acier', 'principal', 'cité', 'pharmacie', 'coccinelle', 'policier', 
'citrouille', 'cigogne', 'saucisse', 'imbécile', 'sorcier', 'domicile', 'précis'];
var mots_en_co = ['comme', 'encore', 'comment', 'école', 'recopier', 'chocolat', 'colère', 'corps', 'corde', 'connaître', 'cochon', 'crocodile', 
'corbeau', 'coq', 'colorier', 'colonne', 'copain', 'costume', 'collier', 'cocher', 'coffre', 'colle', 'corne', 'code', 'commun', 'col', 'score', 
'coton', 'haricot', 'coque'];
var mots_en_cu = ['chacune', 'masculin', 'document', 'cuisine', 'écureuil', 'cuire', 'occuper', 'curieux', 'circulation', 'minuscule', 'obscurité', 
'calcul', 'sécurité', 'véhicule', 'écurie', 'culotte', 'écume', 'majuscule', 'curiosité', 'particulier', 'ridicule', 'curé', 'discuter', 'vécu', 
'recule', 'cube', 'culture', 'circule'];
var mots_en_cai = ['caisse', 'caissière', 'caissier', 'américaine', 'africaine', 'calcaire', 'bancaire', 'bibliothécaire', 'précaire', 'caisson', 'urticaire'];
var mots_en_cam = ['campagne', 'camp', 'camping', 'camper', 'campement', 'cambrioleur', 'campanule', 'campeur', 'décamper', 'hippocampe'];
var mots_en_can = ['vacance', 'volcan', 'cantine', 'pélican', 'canton', 'candidat', 'fabricant', 'boucan', 'scandale', 'cancre', 'cantique', 'brocante', 'carcan', 'cancaner', 
'toucan'];
var mots_en_cau = ['cause', 'cauchemar', 'bocaux', 'amicaux', 'locaux', 'causer', 'tropicaux', 'médicaux', 'causons'];
var mots_en_coi = ['coiffeur', 'coiffure', 'coiffé'];
var mots_en_com = ['complète', 'combien', 'comprendre', 'compris', 'compte', 'compagnon', 'complet', 'compagnie', 'comte', 'combat', 'comptine', 'composé', 'compère', 'comptoir'];
var mots_en_con = ['contre', 'raconte', 'conte', 'content', 'contraire', 'continue', 'construire', 'rencontre', 'conduire', 'concours', 'conjugaison', 'flocon', 'consonne', 'contenu', 
'contraire', 'contrôle', 'balcon', 'flacon', 'conserve', 'consultation', 'consigne', 'confortable', 'conduite'];
var mots_en_cou = ['beaucoup', 'coup', 'couleur', 'course', 'courir', 'cou', 'secours', 'écouter', 'cours', 'couche', 'courage', 'couper', 
'courant', 'court', 'couverture', 'cousin', 'coussin', 'couteau', 'coule', 'coupe', 'couple', 'parcourir', 'coudre', 'couvrir', 'coureur', 'soucoupe', 'coude'];
var mots_en_cen = ['cent', 'descendre', 'centre', 'accent', 'centaine', 'centrale', 'centre', 'cendre', 'centimètre', 'incendie', 'ascenseur', 'innocent', 'récent', 
'centime', 'concentrer'];
var mots_en_cin = ['cinq', 'médecin', 'cinquante', 'scintille', 'vaccin', 'cintre', 'clavecin', 'larcin'];
var mots_en_cein = ['ceinture', 'ceinturon', 'enceinte'];
var mots_en_cain = ['africain', 'américain', 'marocain', 'républicain'];
var mots_en_coin = ['coin', 'coincé', 'recoin', 'coing', 'décoinça'];
var mots_en_ceu = ['ceux-ci', 'douceur', 'ceux-là', 'berceuse', 'perceuse', 'farceur', 'chanceux', 'lanceur', 'noirceur', 'effaceur'];
var mots_en_ça = ['ça', 'commença', 'avança', 'lança', 'enfonça', 'plaça', 'façade', 'fonça', 'balança', 'traça', 'grinça'];
var mots_en_çu = ['aperçu', 'reçu', 'déçu', 'conçu', 'inaperçu'];
var mots_en_çai = ['français', 'commençait', 'avançait', 'lançait', 'enfonçait', 'plaçait', 'fonçait', 'balançait', 'traçait', 'grinçait'];
var mots_en_çan = ['remplaçant', 'commençant', 'plaçant', 'menaçant', 'lançant', 'avançant', 'balançant', 'grinçant', 'perçant', 'déplaçant', 'agaçant', 'fronçant', 'prononçant', 'forçant', 
'traçant', 'pinçant', 'grimaçant', 'rinçant'];
var mots_en_çau = ['provençaux'];
var mots_en_çoi = ['aperçoit', 'reçoit', 'balançoire', 'perçoit', 'conçoit'];
var mots_en_çon = ['garçon', 'façon', 'leçon', 'maçon', 'hameçon', 'glaçon', 'caleçon', 'soupçon', 'tronçon', 'colimaçon', 'rançon', 'avançons', 'plaçons', 'charançon', 'limaçon', 'effaçons'];
var mots_en_cy = ['bicyclette', 'cycliste', 'cygne', 'cylindre', 'cycle', 'tricycle', 'cyclope', 'cyclone', 'encyclopédie', 'cyprès', 'cyclable'];
var mots_en_cym = ['cymbales'];
var mots_en_ceau = ['morceau', 'pinceau', 'berceau', 'cerceau', 'lionceau', 'souriceau', 'sceau', 'faisceau'];
var mots_en_cee = ['océan', 'célèbre', 'placé', 'lancé', 'rhinocéros', 'glacé', 'cérémonie', 'foncé', 'céréales', 'coincé', 'prononcé', 'lycée', 'tracé', 'céleri', 'cétacé', 'pincée', 'forcé', 'fiancée', 'célébrité'];
var sons_en_c = ['ca', 'ce', 'ci', 'co', 'cu', 'cai', 'cam', 'can', 'cau', 'coi', 'com', 'con', 'cou', 'cen', 'cin', 'cein', 
'cain', 'coin', 'ceu', 'ça', 'çu', 'çai', 'çan', 'çau', 'çoi', 'çon', 'cy', 'cym', 'ceau', 'cé'];
var lesBases_en_c = [mots_en_ca, mots_en_ce, mots_en_ci, mots_en_co, mots_en_cu, mots_en_cai, mots_en_cam, mots_en_can, 
mots_en_cau, mots_en_coi, mots_en_com, mots_en_con, mots_en_cou, mots_en_cen, mots_en_cin, mots_en_cein, mots_en_cain, 
mots_en_coin, mots_en_ceu, mots_en_ça, mots_en_çu, mots_en_çai, mots_en_çan, mots_en_çau, mots_en_çoi, mots_en_çon, 
mots_en_cy, mots_en_cym, mots_en_ceau, mots_en_cee];

var mots_en_er = ['vers', 'verbe', 'exercice', 'personne', 'cherche', 'vert', 'derrière', 'observe', 'herbe', 'perdu', 'personnage', 'certain',
'dernière', 'recherche', 'perdre', 'ferme', 'permet', 'verte', 'serpent', 'termine', 'mercredi', 'service', 'servir', 'aperçu', 'désert', 
'merveille', 'anniversaire', 'liberté', 'dessert', 'envers', 'couverture', 'merci', 'vertical', 'terminaison', 'ouvert', 'traverser', 'cerf-volant', 'cerf', 
'merle', 'super', 'caverne', 'divers', 'offert', 'perle', 'conversation', 'interdit', 'mer', 'persienne'];
var mots_en_es = ['question', 'est-ce que', 'presque', 'reste', 'escalier', 'espace', 'descendre', 'des', 'les', 'mes', 'tes', 'ses', 
'lesquels', 'esprit', 'espèce', 'correspondant', 'escargot', 'resta', 'veste', 'restaurant', 'geste', 'orchestre', 'estomac', 'ouest', 'respirer', 'espoir', 
'sieste', 'majesté', 'respecter', 'respect', 'description', 'test'];
var mots_en_ette = ['cette', 'lunette', 'jette', 'fillette', 'recette', 'assiette', 'bicyclette', 'toilette', 'baguette', 'casquette', 'chouette', 'trompette', 
'allumette', 'cachette', 'vignette', 'charette', 'galette', 'noisette', 'étiquette', 'fourchette', 'chaussette', 'devinette', 'roulette', 'muette', 'sonnette', 
'omelette', 'cassette', 'silhouette', 'serviette', 'violette', 'guette', 'crevette', 'raquette', 'mouette', 'alouette', 'navette', 'camionnette', 'belette', 
'brouette', 'regrette', 'maisonnette', 'banquette', 'girouette'];
var mots_en_elle = ['elle', 'quelle', 'belle', 'celle', 'nouvelle', 'laquelle', 'celle-ci', 'échelle', 'ficelle', 'nouvelle', 'hirondelle', 'lesquelles', 
'voyelle', 'vaisselle', 'femelle', 'pelle', 'selle', 'mademoiselle', 'poubelle', 'coccinelle', 'celle-là', 'dentelle', 'gazelle', 'tourterelle', 'naturelle', 
'sauterelle', 'chapelle', 'marelle', 'bretelle', 'jumelle', 'étincelle', 'semelle', 'maternelle', 'réelle', 'cervelle', 'ombrelle', 'rondelle', 'ruelle'];
var mots_en_erre = ['terre', 'pierre', 'verre', 'guerre', 'tonnerre', 'serre', 'lierre', 'paratonnerre', 'parterre', 'enterrement', 'serre-tête', 
'resserre', 'équerre', 'enserre', 'enterre', 'terre-plein'];
var mots_en_esse = ['maîtresse', 'vitesse', 'princesse', 'adresse', 'dessert', 'cesse', 'tristesse', 'presse', 'dresse', 'jeunesse', 'intéresse', 'caresse', 'presse', 
'sagesse', 'politesse', 'tendresse', 'promesse', 'paresse', 'redresse', 'richesse', 'kermesse', 'gentillesse', 'forteresse', 'hôtesse', 'détresse', 'faiblesse', 
'souplesse', 'justesse', 'maladresse', 'sécheresse', 'vieillesse', 'délicatesse', 'presse-papiers', 'comtesse', 'tresse', 'finesse', 'déesse', 'ogresse'];
var mots_en_enne = ['chienne', 'ennemi', 'ancienne', 'vienne', 'moyenne', 'antenne', 'mienne', 'sienne', 'prenne', 'devienne', 'renne', 'indienne', 'quotidienne', 
'revienne', 'musicienne', 'benne', 'aérienne', 'apprenne', 'magicienne', 'européenne', 'prenne', 'reprenne', 'comprenne', 'obtienne', 'persienne', 'convienne', 
'parvienne', 'végétarienne', 'alsacienne'];
var sons_en_ette = ['er', 'es', 'ette', 'elle', 'erre', 'esse', 'enne'];
var lesBases_en_ette = [mots_en_er, mots_en_es, mots_en_ette, mots_en_elle, mots_en_erre, mots_en_esse, mots_en_enne];

var mots_en_ga = ['gare', 'magasin', 'garage', 'gazon', 'bagage', 'gamin', 'gaz', 'gazelle', 'organise', 'galop', 'régale', 'également', 
'cigale', 'obligatoire', 'langage', 'dégage', 'nougat', 'galet', 'régal', 'galerie', 'magazine', 'gag', 'yoga', 'galopin', 'alligator', 
'bagarre', 'gage', 'égaré', 'égal', 'engagé', 'garde', 'gamelle', 'regarde'];
var mots_en_gai = ['conjugaison', 'gai', 'gaieté', 'vulgaire', 'gaine', 'gaieté', 'sagaie', 'pagaie', 'dégaine', 'rengaine', 'gaiement', 'portugais', 
'cargaison'];
var mots_en_gan = ['toboggan', 'gant', 'origan', 'slogan', 'brigand', 'élégant', 'ouragan', 'fatigant', 'arrogant', 'gigantesque'];
var mots_en_ge = ['rouge', 'neige', 'mange', 'fromage', 'village', 'voyage', 'cage', 'page', 'dangereux', 'garage', 'visage', 'bouge', 
'manège', 'singe', 'nuage', 'orange', 'genou', 'courage', 'orage', 'nage', 'passage', 'horloge', 'range', 'message', 'image', 'luge', 'dirige', 
'étrange', 'change', 'éponge', 'plage', 'ménage', 'protège', 'piège', 'arrosage', 'personnage', 'barrage', 'linge', 'tige', 'sage', 'virage', 
'plonge', 'mélange', 'emballage', 'allonge', 'âge', 'davantage', 'mensonge', 'étage', 'sauvage', 'plumage', 'dommage', 'coquillage'];
var mots_en_gea = ['orgeat', 'mangeable', 'dirigeable', 'orangeade', 'logeable', 'mangea', 'plongea', 'changea', 'dirigea', 'nagea', 'engagea', 
'bougea', 'interrogea', 'neigea'];
var mots_en_geai = ['geai', 'démangeaison', 'mangeait', 'dirigeait', 'bougeait', 'neigeait', 'rangeait', 'pataugeait', 'nageait', 'changeait', 'interrogeait', 
'dirigeait', 'obligeait'];
var mots_en_gean = ['changeant', 'dirigeant', 'nageant', 'mangeant', 'mélangeant', 'bougeant', 'rangeant', 'pataugeant', 'nageant', 'obligeant', 'interrogeant', 
'vengeance', 'assiégeant'];
var mots_en_gee = ['loger', 'géant', 'âgé', 'ronger', 'verger', 'ranger', 'génie', 'manger', 'gémir', 'génial', 'réfrigérateur', 'obliger', 'orangé', 'allonger', 'protéger', 
'décourager', 'soulager', 'rangée', 'dragée', 'mélanger', 'charger', 'plonger', 'gorgée', 'nager', 'général', 'diriger', 'changer', 'neiger'];
var mots_en_geee = ['bergère', 'fougère', 'étagère', 'légère', 'gêné', 'boulangère', 'mangèrent', 'gênant', 'légèrement', 'étrangère', 'oxygène', 'sans-gêne', 'rangèrent', 
'changèrent', 'dirrigèrent', 'interogèrent', 'nagèrent', 'obligèrent', 'mélangèrent', 'bougèrent'];
var mots_en_gen = ['les gens', 'gentil', 'sergent', 'argent', 'gigembre', 'agent', 'urgent', 'genre', 'légende', 'gencive', 'agent', 'gendarmes', 'intelligent', 
'indulgent', 'genre', 'gentille', 'agence', 'urgence', 'gendarmerie', 'légendaire'];
var mots_en_geo = ['bougeotte', 'rougeole', 'cageot', 'badigeonné', 'bourgeonné'];
var mots_en_geoi = ['villageois', 'plongeoir', 'villageoise', 'mangeoire', 'nageoire', 'bourgeois'];
var mots_en_geon = ['sauvageon', 'esturgeon', 'pigeon', 'bougeon', 'mangeons', 'plongeon', 'partageons', 'changeons', 'voyageons', 'mélangeons', 'corrigeons', 'chargeons', 
'changeons', 'nageons', 'rangeons', 'protégeons', 'bougeons', 'plongeons', 'dérangeons', 'dirigeons', 'allongeons', 'interrogeons', 'chargeons'];
 var mots_en_gi = ['aubergine', 'écologie', 'gilet', 'bougie', 'fragile', 'rugir', 'imaginé', 'magie', 'gitan', 'girafon', 'rigide', 'imagine', 'magique', 
'girafe', 'rougir', 'agiter', 'gigot', 'agir', 'gibier', 'origine', 'énergie', 'agile', 'régime', 'givre', 'original', 'logique', 'gifle', 'angine', 'giboulée', 
'girolle', 'chirurgie', 'mugir', 'gigoter', 'allergie', 'fugitif', 'frigidaire'];
var mots_en_gin = ['engin', 'gingembre', 'gindre', 'frangin', 'gingivite'];
var mots_en_go = ['escargot', 'gigot', 'gorille', 'gomme', 'gosse', 'rigolo', 'gorge', 'fagot', 'dingo', 'cigogne', 'rouge-gorge', 'gosier', 'golf', 'catégorie', 
'gobelet', 'frigo', 'cargo', 'goéland', 'égoïste', 'dégringoler', 'rigoler', 'indigo', 'angora', 'mongolfière', 'logo', 'gigoter', 'godasse', 'gober', 'ligoter', 
'argot', 'gommette'];
var mots_en_gon = ['estragon', 'gondole', 'dragon', 'wagon', 'gonfle', 'bougon', 'jargon', 'lagon', 'gong'];
var mots_en_gou = ['cagoule', 'gourde', 'goutte', 'engourdi', 'kangourou', 'gourmand', 'pingouin', 'gourmandise', 'gouffre', 'gouache', 'gouvernement', 'goujon', 
'gourdin', 'dégouline', 'gousse', 'bigoudi', 'langouste', 'goudron', 'égout', 'goupil', 'mangouste', 'engourdit', 'dégourdit'];
var mots_en_gu = ['singulier', 'figure', 'légume', 'virgule', 'déguster', 'lugubre', 'inauguration', 'figurine', 'triangulaire', 'lagune', 'exigu', 'coaguler', 'régulier', 
'ingurgiter', 'gutturale'];
var mots_en_gue = ['pirogue', 'gueule', 'algue', 'langue', 'longue', 'marguerite', 'vague', 'figue', 'bague', 'conjugue', 'dialogue', 'fatigue', 'catalogue', 'marguerite', 
'navigue', 'digue', 'orgue', 'seringue', 'meringue', 'collègue', 'fugue', 'mangue', 'dague', 'garrigue', 'tangue', 'dogue', 'blague', 'carlingue', 'dingue', 'voguer', 
'irriguer', 'élaguer', 'larguer'];
var mots_en_gui = ['guitare', 'guidon', 'guirlande', 'guide', 'guichet', 'gui', 'déguisement', 'aiguiser', 'déguiser', 'languir'];
var mots_en_gy = ['gym', 'gymnase', 'gymnastique', 'gymnaste', 'gyroscope', 'égyptien'];
var sons_en_g = ['ga', 'gai', 'gan', 'ge', 'gea', 'geai', 'gean', 'gé', 'gè', 'gen', 'geo', 'geoi', 'geon', 'gi', 'gin', 'go', 'gon', 'gou', 'gu', 'gue', 'gui', 'gy'];
var lesBases_en_g = [mots_en_ga, mots_en_gai, mots_en_gan, mots_en_ge, mots_en_gea, mots_en_geai, mots_en_gean, mots_en_gee, 
mots_en_geee, mots_en_gen, mots_en_geo, mots_en_geoi, mots_en_geon, mots_en_gi, mots_en_gin, mots_en_go, mots_en_gon, 
mots_en_gou, mots_en_gu, mots_en_gue, mots_en_gui, mots_en_gy];

var mots_en_ein = ['peinture', 'plein', 'ceinture', 'peindre', 'éteindre', 'frein', 'peintre', 'atteindre', 'sein', 'teint'];
var mots_en_ain = ['maintenant', 'main', 'train', 'pain', 'demain', 'lendemain', 'bain', 'soudain', 'ainsi',
  'copain', 'grain', 'nain', 'terrain', 'prochain', 'poulain', 'refrain', 'certain', 'vilain', 'maintenant', 'pain', 'crainte', 'saint', 'vainqueur', 
  'romain', 'souterrain', 'lointain', 'plaindre', 'forain', 'plainte', 'métropolitain', 'humain', 'levain', 'américain'];
var mots_en_ain_ein_aine_eine = ['vilain vilaine', 'un grain une graine', 'romain romaine', 'le frein il freine', 'plein pleine',
 'Lorrain Lorraine', 'prochain prochaine'];
var mots_en_in = ['jardin', 'matin', 'lapin', 'dessin', 'enfin', 'cinq', 'chemin', 'sapin', 'fin', 'magasin', 'prince', 'moulin', 'princesse', 
'printemps', 'poussin', 'singe', 'cousin', 'installe', 'voisin', 'coussin', 'pinceau', 'brin', 'raisin', 'invité', 'indien', 'patin', 'requin', 'index', 
'instant', 'dauphin', 'invente', 'vin', 'infirmière', 'quinze', 'pin', 'marin', 'engin', 'linge', 'médecin', 'vingt', 'pingouin', 'arlequin', 'pince', 'malin', 
'gamin', 'interdit', 'bassin', 'insecte', 'dinde', 'ravin', 'malin', 'pantin', 'chagrin', 'juin', 'romarin', 'lutin', 'dindon', 'tambourin', 'mince', 'cintre', 
'instituteur', 'tintamarre', 'indigo', 'pépin', 'inquiet', 'inscrire', 'câlin', 'taquin', 'instrument', 'sous-marin', 'brindille', 'invisible', 'satin', 'bulletin', 
'incroyable', 'gourdin', 'cinquante', 'invasion', 'pétrin', 'lin', 'vaccin', 'inconnu', 'latin', ];
var mots_en_im = ['grimpe', 'impossible', 'simple', 'imperméable', 'simplement', 'imprudent', 'important', 'impoli', 'imprimerie', 'chimpanzé', 'impasse', 
'simplet', 'imbuvable', 'imbattable', 'timbre'];
var mots_en_en_ien = ['bien', 'chien', 'rien', 'bientôt', 'gardien', 'combien', 'mien', 'pharmacien', 'indien', 'mécanicien', 'musicien', 'moyen', 'magicien', 'sien', 
'examen', 'ancien', 'électricien', 'bohémien', 'lycéen', 'terrien', 'comédien', 'italien', 'parisien', ];
var mots_en_oin = ['loin', 'point', 'coin', 'besoin', 'moins', 'soin', 'pointu', 'pointe', 'poing', 'foin', 'moindre', 'rejoindre', 'coincé', 'témoin', 
'lointain', 'groin'];
var sons_en_in = ['mots en in', 'mots en im', 'mots en ain', 'mots en ein', 'mots en oin', 'mots en ien en', 'mots en ain aine ein eine'];
var lesBases_en_in = [mots_en_in, mots_en_im, mots_en_ain, mots_en_ein, mots_en_oin, mots_en_en_ien, mots_en_ain_ein_aine_eine];

var mots_en_ks = ['texte', 'expression', 'taxi', 'explication', 'exposition', 'extrémité', 'exclamation', 'expérience', 'index', 'extrait', 'extérieur', 
'exploit', 'expédition', 'maximum', 'explosion', 'boxe', 'réflexion', 'oxygène', 'boxeur', 'axe', 'excuse', 'excursion', 'galaxie', 'silex', 'luxe', 
'prétexte', 'klaxon', 'saxophone', 'taxe', 'lynx', 'phénix', 'explosif', 'expert', 'élixir', 'extincteur', 'mixture', 'connexion', 'externe', 'larynx', 
'extra', 'thorax', 'expo', 'exclu', 'fixation', 'sphinx', 'inox', 'complexe'];
var mots_en_gz = ['exemple', 'exercice', 'examen', 'exil', 'hexagone', 'exact', 'exode', 'exécution', 'exagération', 'existence'];
var mots_en_s = ['dix', 'six', 'coccyx', 'soixante'];
var mots_en_z = ['dixième', 'sixième', 'deuxième', 'dix-huit'];
var sons_en_x = ['j\'entends [ks]', 'j\'entends [gz]', 'j\'entends [s]', 'j\'entends [z]'];
var lesBases_en_x = [mots_en_ks, mots_en_gz, mots_en_s, mots_en_z];

var mots_en_ch = ['chat', 'chien', 'chez', 'chaque', 'chocolat', 'chambre', 'chercher', 'chapeau', 'château', 'cheveu', 
'cheval', 'chemin', 'marche', 'cherche', 'chose', 'chante', 'vache', 'chemise', 'bouche', 'chèvre', 'pêche', 'cache', 
'poche', 'chaud', 'acheter', 'branche', 'chaise', 'chacun', 'chaussure', 'chanson', 'chaud', 'niche', 'blanche', 'machine', 
'dimanche', 'champignon', 'chou', 'échelle', 'gauche', 'cochon', 'peluche', 'cheminée', 'manche'];
var mots_en_ch_k = ['orchestre', 'chrono', 'choeur', 'écho', 'technique', 'chronomètre', 'chorale', 'technicien', 'chronologie', 
'technologie', 'chlorophylle', 'auroch', 'chrysalide', 'chronique', 'chrysanthème', 'chrome', 'chorégraphie', 'psychologie', 
'chrétien', 'polychrome', 'lichen', 'psychiatre', 'archéologie', 'chaos', 'choléra', 'chronométrer', 'orchidée', 'almanach', 
'chlore', 'choriste', 'psychologue', 'varech', 'psychiatrie'];
var sons_en_ch = ['mots en ch', 'mots en ch [k]'];
var lesBases_en_ch = [mots_en_ch, mots_en_ch_k];

var mots_en_gn = ['montagne', 'ligne', 'souligne', 'campagne', 'signe', 'gagne', 'magnifique', 'renseignement', 'champignon', 'araignée', 'agneau', 'signal',
'compagnon', 'soigner', 'seigneur', 'accompagne', 'poignée', 'vignette', 'baigner', 'peigne', 'rossignol', 'baignoire', 'cigogne', 'grogner', 'consigne', 
'vigne', 'digne', 'Bretagne', 'Allemagne', 'mignon', 'grignote', 'guignol', 'besogne', 'signature', 'oignon', 'châtaigne', 'cygne', 'cogner', 
'signer', 'gagnant', 'poignet', 'ignorer', 'grignoter', 'musaraigne', 'mignonne', 'grognon', 'champagne'];
var sons_en_gn = ['gn'];
var lesBases_en_gn = [mots_en_gn];

var mots_a_3_lettres_a = ['âge', 'ail', 'air', 'ami', 'âne', 'arc', 'art', 'axe'];
var mots_a_3_lettres_b = ['blé', 'boa', 'bol', 'bon', 'bus', 'but'];
var mots_a_3_lettres_c =['car', 'cas', 'cil', 'clé', 'col','coq', 'cou', 'cri', 'cru'];
var mots_a_3_lettres_d = ['dos', 'dur',];
var mots_a_3_lettres_e = ['eau', 'épi', 'été'];
var mots_a_3_lettres_f = ['fée', 'fer', 'feu', 'fil', 'fin', 'fou'];
var mots_a_3_lettres_g = ['gag', 'gaz', 'gel', 'glu', 'gui'];
var mots_a_3_lettres_i = ['île'];
var mots_a_3_lettres_j = ['jet', 'jeu', 'jus'];
var mots_a_3_lettres_l = ['lac', 'lin', 'lis', 'lit', 'loi', 'lot'];
var mots_a_3_lettres_m = ['mal', 'mât', 'mer', 'mie', 'mot', 'mou', 'mur'];
var mots_a_3_lettres_n = ['nez', 'nid', 'nom'];
var mots_a_3_lettres_o = ['oeil', 'oeuf', 'oie'];
var mots_a_3_lettres_p = ['pas', 'pic', 'pie', 'pin', 'pli', 'pot', 'pou', 'pré'];
var mots_a_3_lettres_r = ['rat', 'riz', 'roc', 'roi', 'rue'];
var mots_a_3_lettres_s = ['sac', 'sel', 'ski', 'sol', 'son', 'sou', 'sud'];
var mots_a_3_lettres_t = ['tas', 'thé', 'tir', 'toc', 'ton'];
var mots_a_3_lettres_v = ['vie', 'vin', 'vis', 'vol', 'vue'];
var mots_a_3_lettres_z = ['zoo'];
var mots_en_3_lettres = ['début en a', 'début en b', 'début en c', 'début en d', 'début en e', 'début en f', 
'début en g', 'début en i', 'début en j', 'début en l', 'début en m', 'début en n', 'début en o',
 'début en p', 'début en r', 'début en s', 'début en t', 'début en v', 'début en z'];
var lesBases_en_3_lettres = [mots_a_3_lettres_a, mots_a_3_lettres_b, mots_a_3_lettres_c, mots_a_3_lettres_d, 
mots_a_3_lettres_e, mots_a_3_lettres_f, mots_a_3_lettres_g, mots_a_3_lettres_i, mots_a_3_lettres_j, 
mots_a_3_lettres_l, mots_a_3_lettres_m, mots_a_3_lettres_n, mots_a_3_lettres_o, mots_a_3_lettres_p, 
mots_a_3_lettres_r, mots_a_3_lettres_s, mots_a_3_lettres_t, mots_a_3_lettres_v, mots_a_3_lettres_z];

var les_trois_petits_cochons = ['il y a', 'était', 'une', 'voilà', 'sur', 'et', 'c\'est', 'qui', 'aussi', 'vers', 'sa', 
'est', 'sous', 'vous', 'si', 'se', 'mais'];
var la_petit_chaperon_rouge = ['dans', 'avec', 'ne...pas', 'je', 'tu', 'où', 'qui', 'devant', 
'bientôt', 'que', 'pour', 'mieux', 'il', 'ils', 'elle', 'elles'];
var la_petite_poule_rousse =['toujours', 'souvent', 'rarement', 'alors', 'puis', 'bon', 'bien', 'tout', 'toute'];
var les_musiciens_de_la_ville_de_breme = ['pourquoi', 'parce que', 'trop', 'tard', 'tôt', 'encore', 'hier', 'aujourd\'hui', 
'lorsque', 'lorsqu\'il', 'quand', 'aussitôt'];
var le_petit_bonhomme_de_pain_d_epices = ['qui', 'jamais', 'sans', 'plus', 'de plus en plus'];
var les_lutins_et_le_cordonnier = ['longtemps', 'le lendemain', 'au matin', 'le matin', 'après', 'peu', 'même', 'malgré', 
'leur', 'chacun', 'comme', 'quel', 'quelle'];
var l_oie_d_or = ['un peu', 'puis', 'dès', 'volontiers', 'assez', 'quelques', 'ce', 'cette', 'ces', 'comme'];
var baba_yaga = ['avant', 'bien sûr', 'surtout', 'comme', 'maintenant', 'de nouveau', 'à nouveau'];
var mots_outils = ['Les trois petits cochons', 'Le petit chaperon rouge', 'La petite poule rousse', 'Les musiciens de la ville de Brême', 
'Le petit bonhomme de pain d\'épices', 'Les lutins et le cordonnier', 'L\'oie d\'or', 'Baba Yaga'];
var lesBases_mots_outils = [les_trois_petits_cochons, la_petit_chaperon_rouge, la_petite_poule_rousse, les_musiciens_de_la_ville_de_breme, 
le_petit_bonhomme_de_pain_d_epices, les_lutins_et_le_cordonnier, l_oie_d_or, baba_yaga];

/*****************************
 * Fonction de creation html *
 *****************************/
function createNewInput (base, bases, name, btns) {
	for (let i=0; i<base.length; i++) {
		var newDivSonsBases = document.createElement('div');
		newDivSonsBases.id = base[i];
		var newInput = document.createElement('input');
		newInput.type = 'checkbox';
		var newLabel = document.createElement('label');
		newLabel.htmlFor = base[i];
		newLabel.appendChild(document.createTextNode(base[i]));
		newDivSonsBases.appendChild(newInput);
		newDivSonsBases.appendChild(newLabel);
		var newButtonDiv = document.createElement('div');
		var newButton = document.createElement("BUTTON");
		newButton.innerHTML = "Voir la liste";
		newButton.onclick = 'afficher(base[i])';
		newButton.addEventListener ("click", function() {
			afficher(bases[i]);});
		newButtonDiv.appendChild(newButton);
		var newDivBox = document.createElement('div');
		newDivBox.id = 'box';
		newDivBox.appendChild(newDivSonsBases);
		newDivBox.appendChild(newButtonDiv);
		document.getElementById(name).appendChild(newDivBox);		
	}	
}

/**************************
 *  FONCTION DE SÉLECTION *
 **************************/
 
function selectSons (sons, lesBases, mots) {
	for (let i=0; i<sons.length; i++) {
		const x = document.getElementById(sons[i]).addEventListener('change', ($event) => {
			if ($event.target.checked) {
				for (j=0; j<lesBases[i].length; ++j) {
					mots.push(lesBases[i][j]);
					}
					melanger(mots);
			} else {
				for (j=0; j<lesBases[i].length; ++j) {
					const index = mots.indexOf(lesBases[i][j]);
					mots.splice(index, 1);				
				}
				melanger(mots);
			}
		});
	}
}

/*******************************************************
 *  FONCTION DE MELANGE ET DE MISE À ZÉRO *
 *******************************************************/

function melanger(donnees) {		
	affichageMelange.textContent = " ";
	if (donnees.length == 0) {
		}
		else {
			for (compteur=0; compteur < 20; compteur +=1) {
				var lettreAleatoire = Math.floor(Math.random() * donnees.length);
				affichageMelange.textContent += donnees[lettreAleatoire] + ", ";}
		}	
}

function afficher(donnees) {		
	affichageMelange.textContent = " ";
	for (compteur=0; compteur <donnees.length; compteur +=1) {
		affichageMelange.textContent += donnees[compteur] + ", ";}
	}

function aide() {
	affichageMelange.textContent = "Sélectionner une catégorie pour afficher les options. Cocher une liste pour l'ajouter au mélange. 20 mots au total sont mélangés à partir des listes cochées. Cliquez les boutons \"voir la liste\" pour afficher tous les mots contenus dans une liste.";
	}

function reset() {
	var clist = document.getElementsByTagName("input");
	for (var i = 0; i < clist.length; ++i) { clist[i].checked = false; }
	affichageMelange.textContent = " ";
	mots.splice(0, mots.length);
}

function All(sons, lesBases, mots) {
	var clist = document.getElementsByTagName("input");
	for (var i = 0; i < clist.length; ++i) { clist[i].checked = true; }
	affichageMelange.textContent = " ";
	
	for (let i=0; i<sons.length; i++) {
		for (j=0; j<lesBases[i].length; ++j) {
			mots.push(lesBases[i][j]);
			}
		}
		melanger(mots);
}

/*********************************
 *  FONCTION DE SÉLECTION DU SON *
 *********************************/

const familles_de_sons = document.getElementById('sons').addEventListener('change', ($event) => {
			switch ($event.target.value) {
				case 'rien':
					reset()
					inputbase.textContent = "";
					affichageMelange.textContent = " ";
					titre.textContent = "Lire des mots";
					lecon.removeAttribute("style", "border: 5px solid; color: red;");
					lecon.setAttribute("disabled", "true");
					break;				
				case 'o_au_eau':
					reset()
					inputbase.textContent = "";
					titre.textContent = "Mots en o au eau";
					sons = sons_en_o;
					lesBases = lesBases_en_o;
					createNewInput(sons, lesBases, 'input_bases', 'buttons');
					selectSons(sons, lesBases, mots);
					lecon.removeAttribute("style", "border: 5px solid; color: red;");
					lecon.setAttribute("disabled", "true");
					break;
				case 'ou_oi_on_om':
					reset()
					inputbase.textContent = "";
					titre.textContent = "Mots en ou oi on om";
					sons = sons_en_ou_oi_on_om;
					lesBases = lesBases_en_ou_oi_on_om;
					createNewInput(sons, lesBases, 'input_bases', 'buttons');
					selectSons(sons, lesBases, mots);
					lecon.removeAttribute("style", "border: 5px solid; color: red;");
					lecon.setAttribute("disabled", "true");
					break;
				case 'e_ai_ei_es_er':
					reset()
					inputbase.textContent = "";
					titre.textContent = "Mots en è ê ai ei es er";
					sons = sons_en_e_ai_ei_es_er;
					lesBases = lesBases_en_e_ai_ei_es_er;
					createNewInput(sons, lesBases, 'input_bases', 'buttons');
					selectSons(sons, lesBases, mots);
					lecon.removeAttribute("style", "border: 5px solid; color: red;");
					lecon.setAttribute("disabled", "true");
					break;
				case 'k':
					reset()
					inputbase.textContent = "";
					titre.textContent = "Mots en c ch cc k ck q qu";
					sons = sons_en_k;
					lesBases = lesBases_en_k;
					createNewInput(sons, lesBases, 'input_bases', 'buttons');
					selectSons(sons, lesBases, mots);
					lecon.removeAttribute("style", "border: 5px solid; color: red;");
					lecon.setAttribute("disabled", "true");
					break;
				case 'f':
					reset()
					inputbase.textContent = "";
					titre.textContent = "Mots en f ff ph";
					sons = sons_en_f;
					lesBases = lesBases_en_f;
					createNewInput(sons, lesBases, 'input_bases', 'buttons');
					selectSons(sons, lesBases, mots);
					lecon.removeAttribute("style", "border: 5px solid; color: red;");
					lecon.setAttribute("disabled", "true");
					break;
				case 's_z':
					reset()
					inputbase.textContent = "";
					titre.textContent = "Mots en s ss z";
					sons = sons_en_s_z;
					lesBases = lesBases_en_s_z;
					createNewInput(sons, lesBases, 'input_bases', 'buttons');
					selectSons(sons, lesBases, mots);
					buttonLink.setAttribute("href", "http://lire.au.cp.free.fr/francais/orthographe_lexicale/règle du s qui fait z.pdf");
					lecon.setAttribute("style", "border: 5px solid; color: red;");
					lecon.removeAttribute("disabled", "true");
					break;
				case 'br':
					reset()
					inputbase.textContent = "";
					titre.textContent = "Mots en br cr dr fr gr pr tr";
					sons = sons_en_br;
					lesBases = lesBases_en_br;
					createNewInput(sons, lesBases, 'input_bases', 'buttons');
					selectSons(sons, lesBases, mots);
					lecon.removeAttribute("style", "border: 5px solid; color: red;");
					lecon.setAttribute("disabled", "true");
					break;
				case 'bl':
					reset()
					inputbase.textContent = "";
					titre.textContent = "Mots en bl cl fl gl pl";
					sons = sons_en_bl;
					lesBases = lesBases_en_bl;
					createNewInput(sons, lesBases, 'input_bases', 'buttons');
					selectSons(sons, lesBases, mots);
					lecon.removeAttribute("style", "border: 5px solid; color: red;");
					lecon.setAttribute("disabled", "true");
					break;
				case 'eu':
					reset()
					inputbase.textContent = "";
					titre.textContent = "Mots en eu oeu eux eusement";
					sons = sons_en_eu;
					lesBases = lesBases_en_eu;
					createNewInput(sons, lesBases, 'input_bases', 'buttons');
					selectSons(sons, lesBases, mots);
					lecon.removeAttribute("style", "border: 5px solid; color: red;");
					lecon.setAttribute("disabled", "true");
					break;
				case 'ien':
					reset()
					inputbase.textContent = "";
					titre.textContent = "Mots en ian ien ieu ion";
					sons = sons_en_ien;
					lesBases = lesBases_en_ien;
					createNewInput(sons, lesBases, 'input_bases', 'buttons');
					selectSons(sons, lesBases, mots);
					lecon.removeAttribute("style", "border: 5px solid; color: red;");
					lecon.setAttribute("disabled", "true");
					break;
				case 'tien':
					reset()
					inputbase.textContent = "";
					titre.textContent = "Mots en tie tien tion";
					sons = sons_en_tien;
					lesBases = lesBases_en_tien;
					createNewInput(sons, lesBases, 'input_bases', 'buttons');
					selectSons(sons, lesBases, mots);
					buttonLink.setAttribute("href", "http://lire.au.cp.free.fr/francais/orthographe_lexicale/lecon_t_s.pdf");
					lecon.setAttribute("style", "border: 5px solid; color: red;");
					lecon.removeAttribute("disabled");
					break;
				case 'ill':
					reset()
					inputbase.textContent = "";
					titre.textContent = "Mots en ill ay oy uy";
					sons = sons_en_ill;
					lesBases = lesBases_en_ill;
					createNewInput(sons, lesBases, 'input_bases', 'buttons');
					selectSons(sons, lesBases, mots);
					lecon.removeAttribute("style", "border: 5px solid; color: red;");
					lecon.setAttribute("disabled", "true");
					break;
				case 'ail':
					reset()
					inputbase.textContent = "";
					titre.textContent = "Mots en ail eil euil ouill";
					sons = sons_en_ail;
					lesBases = lesBases_en_ail;
					createNewInput(sons, lesBases, 'input_bases', 'buttons');
					selectSons(sons, lesBases, mots);
					lecon.removeAttribute("disabled");
					buttonLink.setAttribute("href", "http://lire.au.cp.free.fr/francais/orthographe_lexicale/lecon_ill.pdf");
					lecon.setAttribute("style", "border: 5px solid; color: red;");
					break;
				case 'c':
					reset()
					inputbase.textContent = "";
					titre.textContent = "Mots en c ç";
					sons = sons_en_c;
					lesBases = lesBases_en_c;
					createNewInput(sons, lesBases, 'input_bases', 'buttons');
					selectSons(sons, lesBases, mots);
					lecon.removeAttribute("disabled");
					buttonLink.setAttribute("href", "http://lire.au.cp.free.fr/francais/orthographe_lexicale/règle du c et ç.pdf");
					lecon.setAttribute("style", "border: 5px solid; color: red;");
					break;
				case 'ette':
					reset()
					inputbase.textContent = "";
					titre.textContent = "Mots en er es ette elle erre esse enne";
					sons = sons_en_ette;
					lesBases = lesBases_en_ette;
					createNewInput(sons, lesBases, 'input_bases', 'buttons');
					selectSons(sons, lesBases, mots);
					lecon.removeAttribute("style", "border: 5px solid; color: red;");
					lecon.setAttribute("disabled", "true");
					break;
				case 'g':
					reset()
					inputbase.textContent = "";
					titre.textContent = "Mots en g ge gu";
					sons = sons_en_g;
					lesBases = lesBases_en_g;
					createNewInput(sons, lesBases, 'input_bases', 'buttons');
					selectSons(sons, lesBases, mots);
					lecon.removeAttribute("style", "border: 5px solid; color: red;");
					lecon.setAttribute("disabled", "true");
					break;
				case 'in':
					reset()
					inputbase.textContent = "";
					titre.textContent = "Mots en in im ain ein oin ien en aine eine";
					sons = sons_en_in;
					lesBases = lesBases_en_in;
					createNewInput(sons, lesBases, 'input_bases', 'buttons');
					selectSons(sons, lesBases, mots);
					lecon.removeAttribute("disabled");
					buttonLink.setAttribute("href", "http://lire.au.cp.free.fr/francais/orthographe_lexicale/lecon_ain_ein_ai_ei.pdf");
					lecon.setAttribute("style", "border: 5px solid; color: red;");
					break;
				case 'x':
					reset()
					inputbase.textContent = "";
					titre.textContent = "Mots en x";
					sons = sons_en_x;
					lesBases = lesBases_en_x;
					createNewInput(sons, lesBases, 'input_bases', 'buttons');
					selectSons(sons, lesBases, mots);
					lecon.removeAttribute("style", "border: 5px solid; color: red;");
					lecon.setAttribute("disabled", "true");
					break;
				case 'ch':
					reset()
					inputbase.textContent = "";
					titre.textContent = "Mots en ch";
					sons = sons_en_ch;
					lesBases = lesBases_en_ch;
					createNewInput(sons, lesBases, 'input_bases', 'buttons');
					selectSons(sons, lesBases, mots);
					lecon.removeAttribute("style", "border: 5px solid; color: red;");
					lecon.setAttribute("disabled", "true");
					break;
				case 'gn':
					reset()
					inputbase.textContent = "";
					titre.textContent = "Mots en gn";
					sons = sons_en_gn;
					lesBases = lesBases_en_gn;
					createNewInput(sons, lesBases, 'input_bases', 'buttons');
					selectSons(sons, lesBases, mots);
					lecon.removeAttribute("style", "border: 5px solid; color: red;");
					lecon.setAttribute("disabled", "true");
					break;							
				}
		});
		
const familles_de_lettres = document.getElementById('lettres').addEventListener('change', ($event) => {
			switch ($event.target.value) {
				case 'rien':
					reset()
					inputbase.textContent = "";
					affichageMelange.textContent = " ";
					titre.textContent = "Lire des mots";
					lecon.setAttribute("disabled", "true");
					break;
				case 'mots_outils':
					reset()
					inputbase.textContent = "";
					titre.textContent = "Mots outils";
					sons = mots_outils;
					lesBases = lesBases_mots_outils;
					createNewInput(sons, lesBases, 'input_bases', 'buttons');
					selectSons(sons, lesBases, mots);
					lecon.setAttribute("disabled", "true");
					break;
				case '3_lettres':
					reset()
					inputbase.textContent = "";
					titre.textContent = "Mots de trois lettres";
					sons = mots_en_3_lettres;
					lesBases = lesBases_en_3_lettres;
					createNewInput(sons, lesBases, 'input_bases', 'buttons');
					selectSons(sons, lesBases, mots);
					lecon.setAttribute("disabled", "true");
					break;
				}
		});
		
		
		
		
		
		
		
		
		
		
		
		
		
		

