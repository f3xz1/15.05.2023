let task1 = {
  facturer: "ya",
  model: "good",
  year: 3000,
  avarage_speed: 3,

  toString: function () {
    console.log(
      `facturer: ${facturer}\nmodel: ${model}\nyear: ${year}\navarage speed: ${this.avarage_speed}  `
    );
  },

  distance: function (distance) {
    let res = distance / this.avarage_speed;
    let pauses = res / 4;
    return res + pauses;
  },
};

let fraction = {
  numerator: 1,
  denomerator: 2,
  a: 0,

  add: function (other) {
    other.simplify();
    this.simplify();

    if (this.denomerator != other.denomerator) {
      other.denomerator *= this.denomerator;
      other.numerator *= other.denomerator;
      this.denomerator *= other.denomerator;
      this.numerator *= other.denomerator;
    }
    this.numerator += other.numerator;
  },
  subtract: function (other) {
    other.simplify();
    this.simplify();

    if (this.denomerator != other.denomerator) {
      other.denomerator *= this.denomerator;
      other.numerator *= other.denomerator;
      this.denomerator *= other.denomerator;
      this.numerator *= other.denomerator;
    }
    this.numerator -= other.numerator;
  },
  multily: function (other) {
    let res;
    this.nonRight();

    if (this) other.numerator += other.a * other.denomerator;
    other.a = 0;

    res.numerator = this.numerator * other.numerator;
    res.denomerator = this.denomerator * other.denomerator;
    return res;
  },
  devide: function (other) {
    let res;
    num += a * this.denomerator;
    a = 0;
    res.numerator = this.denomerator * other.denomerator;
    res.denomerator = this.numerator * other.numerator;
    return res;
  },

  simplify: function () {
    if (this.denomerator % this.numerator == 0) {
      return;
    } else {
      this.a = this.denomerator % this.numerator;
      this.numerator = this.denomerator / this.numerator;
    }
  },
  nonRight: function () {
    if (this.a != 0) {
      this.numerator += a * this.denomerator;
      this.a = 0;
    }
  },
};

let time = {
  years: 0,
  months: 0,
  days: 0,
  hours: 0,
  minuts: 0,
  seconds: 0,

  addhours: function (h) {
    if (this.hours + h >= 24) {
      this.day += (this.hours + h) / 24;
    }
    this.hours += (this.hours + h) % 24;
  },

  addminuts: function (m) {
    if (this.minuts + m >= 60) {
      this.hours += (this.minuts + m) / 60;
    }
    this.minuts += (this.minuts + m) % 60;
  },

  addsecunds: function (s) {
    if (this.seconds + s >= 60) {
      this.minuts += (this.seconds + s) / 60;
    }
    this.seconds += (this.seconds + s) % 60;
  },
};
