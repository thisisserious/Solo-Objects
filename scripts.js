/** Christopher Guest is an English-American actor most well-known for his breakout role as Nigel Tufnel in 'This Is Spinal Tap' (1984). 'Waiting for Guffman' (1997) was Guest's next big movie in which he introduced actors (Catherine O'Hara, Fred Willard, Parker Posey, and Bob Balaban to name a few) who would go on to make several more mockumentaries with him over the next 15 years. The next film to be released by almost the entire Guest team will be 'Mascots' (Netflix original, 2016) in which Guest reprises a 'Guffman' character. So dust off your dance belt and tube of chapstick 'cause Corky St. Clair is back!*/

function Guest(lastName, movie1, movie1Year, movie2, movie2Year, actors, years, movie3, movie3Year, bestCharEver) {
  this.lastName = lastName;
  this.movie1 = movie1;
  this.movie1Year = movie1Year;
  this.movie2 = movie2;
  this.movie2Year = movie2Year;
  this.actors = actors;
  this.years = years;
  this.movie3 = movie3;
  this.movie3Year = movie3Year;
  this.bestCharEver = bestCharEver;
}

var myTeam = new Guest('Guest', 'This Is Spinal Tap', '1984', 'Waiting for Guffman', '1997', ['Catherine O\'Hara', 'Fred Willard', 'Parker Posey', 'Bob Balaban'], 15, 'Mascots', '2016', 'Corky St. Clair');

var goTeamGo = function () {
  var quote = 'Corky we love you, we want you to live!';
  if (quote === 'Eleven. Exactly. One louder.') {
    console.log(myTeam.movie1);
  }  else {
    console.log('Christopher ' + myTeam.lastName + ' is an English-American actor most well-known for his breakout role as Nigel Tufnel in \'' + myTeam.movie1 + '\' (' + myTeam.movie1Year + '). \'' + myTeam.movie2 + '\' (' + myTeam.movie2Year + ') was Guest\'s next big movie in which he introduced actors (' + myTeam.actors[0] + ', ' + myTeam.actors[1] + ', ' + myTeam.actors[2] + ', and ' + myTeam.actors[3] + ' to name a few) who would go on to make several more mockumentaries with him over the next ' + myTeam.years + ' years. The next film to be released by almost the entire ' + myTeam.lastName + ' team will be \'' + myTeam.movie3 + '\' (Netflix original, ' + myTeam.movie3Year + ') in which ' + myTeam.lastName + ' reprises a \'Guffman\' character. So dust off your dance belt and tube of chapstick \'cause ' + myTeam.bestCharEver + ' is back!');
  }
};

goTeamGo();
