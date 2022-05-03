var s1 = function(s) {
  s.setup = function() {
    let cnv = s.createCanvas(s.windowWidth, s.windowHeight);
    cnv.parent("canvas");
    s.background(0);
  }
  s.draw = function() {
    s.fill(255);
    r = 10;
    for (var i = 0; i < 100; i++) {
      s.rect(s.random(s.width), s.random(s.height), r, r);
    }
  }
}