var personTmpl = require('./template');
var model = require('model');
var timestamps = require('model-timestamps');
var View = require('view');
var domify = require('domify');

var Person = model('Person')
  .attr('firstName')
  .attr('lastName')
  .use(timestamps);

var changeName = function() {
  if (maiah.firstName() === 'Maiah') {
	  maiah.firstName('James');
	} else {
	  maiah.firstName('Maiah');
	}
};

var maiah = new Person({ "firstName": "Maiah", "lastName": "Macariola" });

var PersonView = function(person) {
	View.call(this, person, domify(personTmpl));
	this.bind('click .changeBtn', 'changeName');
};

PersonView.prototype.__proto__ = View.prototype;

PersonView.prototype.changeName = function() {
  if (maiah.firstName() === 'Maiah') {
	  maiah.firstName('James');
	} else {
	  maiah.firstName('Maiah');
	}
};

var personView = new PersonView(maiah);
var p = document.querySelector('p');
p.appendChild(personView.el);