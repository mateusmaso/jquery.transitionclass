var chai = require("chai");
var jsdom = require('jsdom');

global.window = jsdom.jsdom().createWindow();
global.document = window.document;
global.$ = global.jQuery = require('jquery');

require('../src/jquery.transitionclass');

describe("jquery.transitionclass", function() {
  it("should add class after 1 second", function(done) {
    var div = $("<div>");
    div.transitionClass("foo", 1000);
    setTimeout(function() {
      chai.expect(div.hasClass("foo")).to.equal(true);
      done();
    }, 1000);
  });
});
