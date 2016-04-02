// $(document).ready(function(){
//   var girls = new Array();
//
//   girls[0] = new Image();
//   girls[0].src = '../homeidontknowyet/img/eli.png';
//   girls[1] = new Image();
//   girls[1].src = '../homeidontknowyet/img/honoka.png';
//   girls[2] = new Image();
//   girls[2].src = '../homeidontknowyet/img/kotori.png';
//   girls[3] = new Image();
//   girls[3].src = '../homeidontknowyet/img/maki.png';
//   girls[4] = new Image();
//   girls[4].src = '../homeidontknowyet/img/nico.png';
//   girls[5] = new Image();
//   girls[5].src = '../homeidontknowyet/img/nozomi.png';
//   girls[6] = new Image();
//   girls[6].src = '../homeidontknowyet/img/rin.png';
//   girls[7] = new Image();
//   girls[7].src = '../homeidontknowyet/img/umi.png';
//
//   var girl = girls[Math.floor(Math.random() * girls.length)];
//   console.log(girl);
//   console.log(girls[girl]);
//   $('#theWaifu').prop('src', girl);
// });

var girls = [
  "../homeidontknowyet/img/eli.png",
  "../homeidontknowyet/img/honoka.png",
  "../homeidontknowyet/img/kotori.png",
  "../homeidontknowyet/img/maki.png",
  "../homeidontknowyet/img/nico.png",
  "../homeidontknowyet/img/nozomi.png",
  "../homeidontknowyet/img/rin.png",
  "../homeidontknowyet/img/umi.png",
];

function randImg() {
  var size = girls.length;
  var x = Math.floor(size * Math.random());
  document.getElementById("theWaifu").src = girls[x];
}

randImg();
// girls[0] = new Image();
// girls[0].src = '../homeidontknowyet/img/eli.png';
// girls[1] = new Image();
// girls[1].src = '../homeidontknowyet/img/honoka.png';
// girls[2] = new Image();
// girls[2].src = '../homeidontknowyet/img/kotori.png';
// girls[3] = new Image();
// girls[3].src = '../homeidontknowyet/img/maki.png';
// girls[4] = new Image();
// girls[4].src = '../homeidontknowyet/img/nico.png';
// girls[5] = new Image();
// girls[5].src = '../homeidontknowyet/img/nozomi.png';
// girls[6] = new Image();
// girls[6].src = '../homeidontknowyet/img/rin.png';
// girls[7] = new Image();
// girls[7].src = '../homeidontknowyet/img/umi.png';
