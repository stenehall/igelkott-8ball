var assert = require('chai').assert,
Stream = require('stream'),

Igelkott = require('igelkott'),
M8ball = require('../igelkott-8ball.js').Plugin;

describe('8ball', function() {

  var igelkott,
  config,
  s,
  server;

  beforeEach(function () {
    s = new Stream.PassThrough({objectMode: true});

    config = {
      "server": {
        "nick": "igelkott",
      },
      plugins:['privmsg'],
      'adapter': s, 'connect': function() { this.server.emit('connect'); }
    };

    igelkott = new Igelkott(config);
  });


  it('Should respond with a random 8ball quote');
});
