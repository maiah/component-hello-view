var personTmpl = require('./template');
var model = require('model');
var timestamps = require('model-timestamps');
var View = require('view');
var domify = require('domify');

var Person = model('Person')
  .attr('firstName')
  .attr('lastName')
  .use(timestamps);

var maiah = new Person({ "firstName": "Maiah", "lastName": "Macariola" });
var personView = new View(maiah, domify(personTmpl));

var p = document.querySelector('p');
p.appendChild(personView.el);

var changeName = function() {
  if (maiah.firstName() === 'Maiah') {
    maiah.firstName('James');
  } else {
    maiah.firstName('Maiah');
  }
};

var btn = domify('<button>Change Now</button>');
btn.addEventListener("click", changeName);

p.appendChild(btn);