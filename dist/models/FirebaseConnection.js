/**
 * @module FirebaseConnection.js
 * @author Joe Groseclose <@benderTheCrime>
 * @date 8/23/2015
 */

// import BaseDBConnection from './BaseDBConnection';
// import $LogProvider from 'angie-log/src/services/$LogProvider';
// import app from '../Angular';

// const Firebase =        require('firebase');
// FirebaseTokenGenerator = require("firebase-token-generator.js");
// mysql =           require('mysql'),
// mkdirp =          require('mkdirp'),
// fs =              require('fs');

// const p = process;

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FirebaseConnection = function FirebaseConnection() {
  _classCallCheck(this, FirebaseConnection);
};

exports["default"] = FirebaseConnection;

// export default class FirebaseConnection extends BaseDBConnection {
//     constructor(database = 'default') {
//         super();
//         if (checkConfig(this.config.databases[database])) {
//             throw new Error();
//         } else {
//             //this.db = new Firebase(this.config.databases[database].url);
//         }
//
//     }
//     read(model) {
//         this.db.child(model.name).on('value', function(data) {
//             return data;
//         });
//     }
//     create() {
//         // model
//         // let data = this.read(model);
//
//         // TODO can you set a specific instance of a model?
//
//         //data[data.length] = {};
//         //this.db.set(data[data.length], {})
//     }
//     syncdb() {
//         super.syncdb();
//
//         // You do not have to do much to syncdb here
//         // TODO add empty fields fore records added
//     }
// }
//
// function checkConfig(db) {
//     return !db.url;
// }

// TODO security around this connection

// Firebase is a little different
// The data is basically just kvps
// We need to create one big list per model
module.exports = exports["default"];