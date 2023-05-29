const { Post } = require('../models');

const postdata = [
  {
    title: 'Enlighten yourself',
    post_text: 'Calling somebody else fat won\'t make you any skinnier. Calling someone stupid doesn\'t make you any smarter. And ruining Regina George\'s life definitely didn\'t make me any happier. All you can do in life is try to solve the problem in front of you.',
    user_id: 1
  },
  {
    title: 'Sorry',
    post_text: 'Gretchen, I\'m sorry I laughed at you that time you got diarrhea at Barnes & Nobles.',
    user_id: 6
  },
  {
    title: 'Observation',
    post_text: 'You know who\'s looking fine tonight? Seth Mosakowski.',
    user_id: 6
  },
  {
    title: 'Sex ed',
    post_text: 'Don\'t have sex, because you will get pregnant and die! Don\'t have sex in the missionary position, don\'t have sex standing up, just don\'t do it, OK, promise? OK, now everybody take some rubbers.',
    user_id: 8
  },
  {
    title: 'Hi',
    post_text: 'I\'m new. I just moved here from Africa.',
    user_id: 1
  },
  {
    title: 'I wish',
    post_text: 'I wish we could all get along like we used to in middle school... I wish I could bake a cake filled with rainbows and smiles and everyone would eat and be happy...',
    user_id: 4
  },
  {
    title: 'Caesar',
    post_text: 'Why should Caesar just get to stomp around like a giant while the rest of us try not to get smushed under his big feet? Brutus is just as cute as Caesar, right? Brutus is just as smart as Caesar, people totally like Brutus just as much as they like Caesar, and when did it become okay for one person to be the boss of everybody because that\'s not what Rome is about! We should totally just STAB CAESAR!',
    user_id: 4
  },
  {
    title: 'Cliques',
    post_text: 'You got your freshmen, ROTC guys, preps, J.V. jocks, Asian nerds, Cool Asians, Varsity jocks Unfriendly black hotties, Girls who eat their feelings, Girls who don\'t eat anything, Desperate wannabes, Burnouts, Sexually active band geeks, the greatest people you will ever meet, and the worst. Beware of plastics.',
    user_id: 5
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
