var M8ball = function M8ball() {
  this.listeners = {'trigger:8ball': this.m8ball};

  this.name = '8ball';
  this.help = {
    "default": "Ask the magic 8 ball a question. Use !8ball <question>",
  };

  this.answers = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful"];

};


M8ball.prototype.m8ball = function m8ball(message) {
  var answer = this.answers[Math.floor(Math.random()*(this.answers.length-1))];

  var obj = {
    command: 'PRIVMSG',
    parameters: [message.parameters[0], message.prefix.nick+': '+answer]
  };
  this.igelkott.push(obj);
};

exports.Plugin = M8ball;
