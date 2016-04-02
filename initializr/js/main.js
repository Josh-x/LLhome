$(function(){
  var girls = new Array();

  girls[0] = new Image();
  girls[0].src = '../img/eli.png';
  girls[1] = new Image();
  girls[1].src = '../img/honoka.png';
  girls[2] = new Image();
  girls[2].src = '../img/kotori.png';
  girls[3] = new Image();
  girls[3].src = '../img/maki.png';
  girls[4] = new Image();
  girls[4].src = '../img/nico.png';
  girls[5] = new Image();
  girls[5].src = '../img/nozomi.png';
  girls[6] = new Image();
  girls[6].src = '../img/rin.png';
  girls[7] = new Image();
  girls[7].src = '../img/umi.png';

  var girl = girls[Math.floor(Math.random() * girls.length)];

  $('#theWaifu').prop('src', girls[girl]);
});
