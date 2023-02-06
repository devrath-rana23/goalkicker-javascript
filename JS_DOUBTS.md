##DOUBTS

Q1.
IF
console.log(Number("")); //0
console.log(Number("0")); //0
console.log(Number(false)); //0

WHY
console.log("0" == ""); //false

ANS
//Both the operands are strings ( "" and "0" ), hence there will be no type conversion and
// since "" and "0" are not the same value, "" == "0" is false as expected.

Q2.
CAN'T GET IT THROUGH
// Going custom
// If Date.prototype.toLocaleDateString() isn't ﬂexible enough to fulﬁll whatever need you may have, you might
// want to consider creating a custom Date object that looks like this:
let DateObject = (function () {
  let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let date = function (str) {
    this.set(str);
  };
  date.prototype = {
    set: function (str) {
      let dateDef = str ? new Date(str) : new Date();
      this.day = dateDef.getDate();
      this.dayPadded = this.day < 10 ? "0" + this.day : "" + this.day;
      this.month = dateDef.getMonth() + 1;
      this.monthPadded = this.month < 10 ? "0" + this.month : "" + this.month;
      this.monthName = monthNames[this.month - 1];
      this.year = dateDef.getFullYear();
    },
    get: function (properties, separator) {
      separator = separator ? separator : "-";
      let ret = [];
      for (let i in properties) {
        ret.push(this[properties[i]]);
      }
      return ret.join(separator);
    },
  };
  return date;
})();

console.log(JSON.stringify(new DateObject())); //{"day":19,"dayPadded":"19","month":1,"monthPadded":"01","monthName":"January","year":2023}

// To get a formatted string, you could do something like this:
console.log(new DateObject().get(["dayPadded", "monthPadded", "year"])); //19-01-2023
