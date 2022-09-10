/**************
 *  Variables *
 **************/

const affichageMelange = document.getElementById('affichage-melange');

var mots = [];

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


var sons = ['Les trois petits cochons', 'Le petit chaperon rouge', 'La petite poule rousse', 'Les musiciens de la ville de Brême', 
'Le petit bonhomme de pain d\'épices', 'Les lutins et le cordonnier', 'L\'oie d\'or', 'Baba Yaga'];
var lesBases = [les_trois_petits_cochons, la_petit_chaperon_rouge, la_petite_poule_rousse, les_musiciens_de_la_ville_de_breme, 
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

createNewInput(sons, lesBases, 'input_bases', 'buttons');

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

selectSons(sons, lesBases, mots);

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
	affichageMelange.textContent = "Cocher une liste pour l'ajouter au mélange. 20 mots au total sont mélangés à partir des listes cochées. Cliquez les boutons \"voir la liste\" pour afficher tous les mots contenus dans une liste.";
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



