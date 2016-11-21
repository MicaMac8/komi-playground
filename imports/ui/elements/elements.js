import {Template} from 'meteor/templating';

import './recetteForm.html';
import './recetteList.html';

Template.recetteList.helpers({
  hello: "hi everyone !"
});
