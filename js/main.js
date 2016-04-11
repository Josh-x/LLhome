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
