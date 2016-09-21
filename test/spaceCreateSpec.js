process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
var expect = chai.expect;
var app = require('../app.js');
var http = require('http');
var Browser = require('zombie');

describe ('User creates a new space', function() {

  before(function(done){
    this.server = http.createServer(app).listen(3458);
    this.browser = new Browser({site: 'http://localhost:3458' });
    this.browser.visit('/new', done);
    // this.browser
    //   .fill('title', 'Arctic Tree House')
    //   .fill('description', 'Elsa meets the Jungle Book')
    //   .fill('price', 10)
    //   .fill('availability', 'never')
    //   .pressButton('List your space!', done);
  });

  it('should be able to create a new space', function(){
    this.browser.assert.success();
  });

  it('should take you to the space page', function(){
    browser.assert.text('h1', 'Spaces');
  });
});