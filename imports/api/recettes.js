import {Mongo} from 'meteor/mongo';

const Recettes = new Mongo.Collection('recettes');
export default Recettes;
