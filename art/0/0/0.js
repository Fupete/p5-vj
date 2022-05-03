var s1 = function(s) {
  s.setup = function() {
    let cnv = s.createCanvas(s.windowWidth, s.windowHeight);
    cnv.parent("canvas");
    s.background(255);
  }
  s.draw = function() {
    s.fill(0);
    s.stroke(255);
    r = 50;
    for (var i = 0; i < 100; i++) {
      s.ellipse(s.random(s.width), s.random(s.height), r, r);
    }
  }
}