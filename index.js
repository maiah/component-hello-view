var personTmpl = require('./template');
var model = require('model');
var timestamps = require('model-timestamps');
var View = require('view');
var domify = require('domify');

/*
 * The model declaration.
 */
var Person = model('Person')
  .attr('firstName')
  .attr('lastName')
  .use(timestamps);

/*
 * The view declaration.
 */
var PersonView = function(person) {
  var el = domify(personTmpl);
  View.call(this, person, el[0]);
  this.bind('click .changeBtn', 'changeName');
};

/*
 * Inherit from View prototype.
 */
PersonView.prototype.__proto__ = View.prototype;

/*
 * The view function declaration.
 */
PersonView.prototype.changeName = function() {
  if (maiah.firstName() === 'Maiah') {
    maiah.firstName('James');
  } else {
    maiah.firstName('Maiah');
  }
};

/*
 * Create person and view object and bind them together.
 */
var maiah = new Person({ "firstName": "Maiah", "lastName": "Macariola" });
var personView = new PersonView(maiah);

/*
 * Attach the view to the "p" element in the body.
 */
var p = document.querySelector('p');
p.appendChild(personView.el);