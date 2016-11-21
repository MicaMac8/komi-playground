// Meteor
import {Template} from 'meteor/templating';

// Mongo
import Recettes from '../../api/recettes.js';


// html
import './recetteForm.html';
import './recetteList.html';


// recetteList
Template.recetteList.helpers({
  recettes() {
    return Recettes.find({});
  }
});

var nbPers = 0;

Template.recetteList.events({
  'submit .new-name'(event) {
    event.preventDefault();
    Recettes.insert({
      recette: {
        nom: event.target.nom.value,
        quantite: event.target.pers.value
      }
    });



    //console tests
    nbPers = event.target.pers.value;
  //  console.log(nbPers);


    if (nbPers > 1) {
      console.log(event.target.nom.value + " pour " + event.target.pers.value + " personnes");
    } else if (nbPers = 1) {
      console.log(event.target.nom.value + " pour une personne");
    } else {
      console.log(event.target.nom.value);
    }
    // end console tests

  }

});







// recetteForm
//Template.recetteForm.helpers({
  // trouver les ingredients de la recette en cours
//});
