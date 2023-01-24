// Chapter 8: Date

//Parameter -
// Details

// value-
// The number of milliseconds since 1 January 1970 00:00:00.000 UTC (Unix epoch)

// dateAsString-
// A date formatted as a string (see examples for more information)

// year-
// The year value of the date. Note that month must also be provided, or the value will be interpreted
// as a number of milliseconds. Also note that values between 0 and 99 have special meaning. See the
// examples.

// month-
// The month, in the range 0-11 . Note that using values outside the speciﬁed range for this and the
// following parameters will not result in an error, but rather cause the resulting date to "roll over" to
// the next value. See the examples.

// day-
// Optional: The date, in the range 1-31 .

// hour-
// Optional: The hour, in the range 0-23 .

// minute-
// Optional: The minute, in the range 0-59 .

// second-
// Optional: The second, in the range 0-59 .

// millisecond-
// Optional: The millisecond, in the range 0-999 .

// Section 8.1: Create a new Date object
// To create a new Date object use the Date() constructor:

// with no arguments
// Date() creates a Date instance containing the current time (up to milliseconds) and date.

// with one integer argument
// Date(m) creates a Date instance containing the time and date corresponding to the Epoch time (1 January,
//     1970 UTC) plus m milliseconds. Example: new Date(749019369738) gives the date Sun, 26 Sep 1993 04:56:09
//     GMT.

// with a string argument
// Date(dateString) returns the Date object that results after parsing dateString with Date.parse .

// with two or more integer arguments
// Date(i1, i2, i3, i4, i5, i6) reads the arguments as year, month, day, hours, minutes, seconds,
// milliseconds and instantiates the corresponding Date object. Note that the month is 0-indexed in JavaScript,
// so 0 means January and 11 means December. Example: new Date(2017, 5, 1) gives June 1st, 2017.

// Exploring dates
// Note that these examples were generated on a browser in the Central Time Zone of the US, during Daylight Time,
// as evidenced by the code. Where comparison with UTC was instructive, Date.prototype.toISOString() was used to show the date and time in UTC (the Z in the formatted string denotes UTC).

let now = new Date();
console.log(now); //Wed Jan 11 2023 02:21:25 GMT+0530 (India Standard Time)
console.log(now === "Wed Jan 11 2023 02:21:25 GMT+0530 (India Standard Time)"); //false
console.log(now.toString()); //Wed Jan 11 2023 02:21:25 GMT+0530 (India Standard Time)
console.log(
  now.toString() === "Wed Jan 11 2023 02:21:25 GMT+0530 (India Standard Time)"
); //true

// Creates a Date object at the Unix Epoch (i.e., '1970-01-01T00:00:00.000Z')
let epoch = new Date(0);
console.log(epoch.toISOString() === "1970-01-01T00:00:00.000Z"); //true

// Creates a Date object with the date and time 2,012 milliseconds
// after the Unix Epoch (i.e., '1970-01-01T00:00:02.012Z').
let ms = new Date(2012);
console.log(ms.toISOString() === "1970-01-01T00:00:02.012Z"); //true

// Creates a Date object with the first day of February of the year 2012
// in the local timezone.
let one = new Date(2012, 1);
console.log(
  one.toString() === "Wed Feb 01 2012 00:00:00 GMT+0530 (India Standard Time)"
); //true

// Creates a Date object with the first day of the year 2012 in the local
// timezone.
// (Months are zero-based)
let zero = new Date(2012, 0);
console.log(
  zero.toString() === "Sun Jan 01 2012 00:00:00 GMT+0530 (India Standard Time)"
); //true

// Creates a Date object with the first day of the year 2012, in UTC.
let utc = new Date(Date.UTC(2012, 0));
console.log(
  utc.toString() === "Sun Jan 01 2012 05:30:00 GMT+0530 (India Standard Time)"
); //true
console.log(utc.toISOString() === "2012-01-01T00:00:00.000Z"); //true

// Parses a string into a Date object (ISO 8601 format added in ECMAScript 5.1)
// Implementations should assumed UTC because of ISO 8601 format and Z designation
let iso = new Date("2012-01-01T00:00:00.000Z");
console.log(iso.toISOString() === "2012-01-01T00:00:00.000Z"); //true

// Special dates for years in the range 0-99
let special1 = new Date(12, 0);
console.log(
  special1.toString() ===
    "Mon Jan 01 1912 00:00:00 GMT+0530 (India Standard Time)"
);

// If you actually wanted to set the year to the year 12 CE, you'd need to use the
// setFullYear() method:
special1.setFullYear(12);
console.log(
  special1.toString() ===
    "Sun Jan 01 0012 00:00:00 GMT+0553 (India Standard Time)"
);

// Section 8.2: Convert to a string format

// Convert to String
let date1 = new Date();
console.log(date1.toString()); //"Thu Jan 12 2023 23:18:33 GMT+0530 (India Standard Time)";

// Convert to Time String
console.log(date1.toTimeString()); //23:20:15 GMT+0530 (India Standard Time)

//Convert to Date String
console.log(date1.toDateString()); //Thu Jan 12 2023

// Convert to UTC String
console.log(date1.toUTCString()); //Thu, 12 Jan 2023 17:52:11 GMT

// Convert to ISO String
console.log(date1.toISOString()); //2023-01-12T17:57:25.050Z

// Convert to GMT String
// This function has been marked as deprecated so some browsers may not support it in the future. It is suggested to
// use toUTCString() instead.
console.log(date1.toGMTString()); //Thu, 12 Jan 2023 17:59:09 GMT

// Convert to Locale Date String
console.log(date1.toLocaleDateString()); //12/01/2023

// This function returns a locale sensitive date string based upon the user's location by default.
// date1.toLocaleDateString([locales [,options]])
console.log(date1.toLocaleDateString(["zh", "en-US"])); //2023/1/12

// would attempt to print the string in the Chinese locale using United States English as a fallback. The options
// parameter can be used to provide speciﬁc formatting. For example:
let options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
console.log(date1.toLocaleDateString([], options)); //Thursday, 12 January 2023

// Section 8.3: Creating a Date from UTC

// By default, a Date object is created as local time. This is not always desirable, for example when communicating a
// date between a server and a client that do not reside in the same timezone. In this scenario, one doesn't want to
// worry about timezones at all until the date needs to be displayed in local time, if that is even required at all.

// The problem
// In this problem we want to communicate a speciﬁc date (day, month, year) with someone in a diﬀerent timezone.
// The ﬁrst implementation naively uses local times, which results in wrong results. The second implementation uses
// UTC dates to avoid timezones where they are not needed.

function formatDate(dayOfWeek, day, month, year) {
  let daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return daysOfWeek[dayOfWeek] + " " + months[month] + " " + day + " " + year;
}

// Naive approach with WRONG results
let date = new Date(2000, 0, 1);
console.log(
  formatDate(date.getDay(), date.getDate(), date.getMonth(), date.getFullYear())
); //Sat Jan 1 2000

//Foo lives in a country with timezone GMT + 1
// Sample output:
// Foo was born on: Sat Jan 1 2000

//Meanwhile somewhere else...
//Bar lives in a country with timezone GMT - 1
// Sample output:
// Foo was born on: Fri Dec 31 1999
// And thus, Bar would always believe Foo was born on the last day of 1999.

// Correct approach
console.log(
  formatDate(
    date.getUTCDay(),
    date.getUTCDate(),
    date.getUTCMonth(),
    date.getUTCFullYear()
  )
); //Fri Dec 31 1999

//Creating a Date from UTC
// If one wants to create a Date object based on UTC or GMT, the Date.UTC(...) method can be used. It uses the
// same arguments as the longest Date constructor. This method will return a number representing the time that has
// passed since January 1, 1970, 00:00:00 UTC.

console.log(Date.UTC(2000, 0, 31, 12)); //949320000000

let utcDate = new Date(Date.UTC(2000, 0, 31, 12));
console.log(utcDate); //Mon Jan 31 2000 17:30:00 GMT+0530 (India Standard Time)

// Unsurprisingly, the diﬀerence between UTC time and local time is, in fact, the timezone oﬀset converted to
// milliseconds.

utcDate = new Date(Date.UTC(2000, 0, 31, 12));
let localDate = new Date(2000, 0, 31, 12);
console.log(localDate - utcDate === utcDate.getTimezoneOffset() * 60 * 1000); //true

// Changing a Date object
// All Date object modiﬁers, such as setDate(...) and setFullYear(...) have an equivalent takes an argument in
// UTC time rather than in local time.

date = new Date();
date.setUTCFullYear(2000, 0, 31);
date.setUTCHours(12, 0, 0, 0);
console.log(date); //Mon Jan 31 2000 17:30:00 GMT+0530 (India Standard Time)

// The other UTC-speciﬁc modiﬁers are .setUTCMonth() , .setUTCDate() (for the day of the month),
// .setUTCMinutes() , .setUTCSeconds() and .setUTCMilliseconds() .

// Avoiding ambiguity with getTime() and setTime()
// Where the methods above are required to diﬀerentiate between ambiguity in dates, it is usually easier to
// communicate a date as the amount of time that has passed since January 1, 1970, 00:00:00 UTC. This single number
// represents a single point in time, and can be converted to local time whenever necessary.

date = new Date(Date.UTC(2000, 0, 31, 12));
let timestamp = date.getTime();
//Alternatively
let timestamp2 = Date.UTC(2000, 0, 31, 12);
console.log(timestamp === timestamp2); //true

//And when constructing a date from it elsewhere...
let otherDate = new Date(timestamp);

//Represented as a universal date
console.log(otherDate.toUTCString()); //Mon, 31 Jan 2000 12:00:00 GMT

//Represented as a local date
console.log(otherDate); //Mon Jan 31 2000 17:30:00 GMT+0530 (India Standard Time)

// Section 8.4: Formatting a JavaScript date
// Formatting a JavaScript date in modern browsers

// In modern browsers (*), Date.prototype.toLocaleDateString() allows you to deﬁne the formatting of a Date in a
// convenient manner.
// It requires the following format :

// dateObj.toLocaleDateString([locales [, options]])
// The locales parameter should be a string with a BCP 47 language tag, or an array of such strings.

// The options parameter should be an object with some or all of the following properties:

// localeMatcher : possible values are "lookup" and "best fit" ; the default is "best fit"
// timeZone : the only value implementations must recognize is "UTC" ; the default is the runtime's default time zone
// hour12 :possible values are true and false ; the default is locale dependent
// formatMatcher : possible values are "basic" and "best fit" ; the default is "best fit"
// weekday : possible values are "narrow" , "short" & "long"
// era : possible values are "narrow" , "short" & "long"
// year : possible values are "numeric" & "2-digit"
// month : possible values are "numeric" , "2-digit" , "narrow" , "short" & "long"
// day : possible values are "numeric" & "2-digit"
// hour : possible values are "numeric" & "2-digit"
// minute : possible values are "numeric" & "2-digit"
// second : possible values are "numeric" & "2-digit"
// timeZoneName : possible values are "short" & "long"

// How to use

console.log(
  new Date().toLocaleDateString("en-GB", {
    month: "short",
    year: "numeric",
    day: "numeric",
  })
); //19 Jan 2023

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

// Section 8.5: Get the number of milliseconds elapsed since 1
// January 1970 00:00:00 UTC

// The static method Date.now returns the number of milliseconds that have elapsed since 1 January 1970 00:00:00
// UTC. To get the number of milliseconds that have elapsed since that time using an instance of a Date object, use its
// getTime method.
// get milliseconds using static method now of Date
console.log(Date.now()); //1674070563568
// get milliseconds using method getTime of Date instance
console.log(new Date().getTime()); //1674070563568

// Section 8.6: Get the current time and date

// Use new Date() to generate a new Date object containing the current date and time.

// Note that Date() called without arguments is equivalent to new Date(Date.now()) .

// Once you have a date object, you can apply any of the several available methods to extract its properties (e.g.
//   getFullYear() to get the 4-digits year).

// Below are some common date methods.

// Get the current year
let year = new Date().getFullYear();
console.log(year);
// Sample output: 2023

// Get the current month
let month = new Date().getMonth();
console.log(month);
// Sample output: 0 Please note that 0 = January. This is because months range from 0 to 11, so it is often desirable to add +1 to the
// index.

// Get the current day
let day = new Date().getDate();
console.log(day);
// Sample output: 31

// Get the current hour
let hours = new Date().getHours();
console.log(hours);
// Sample output: 10

// Get the current minutes
let minutes = new Date().getMinutes();
console.log(minutes);
// Sample output: 39

// Get the current seconds
let seconds = new Date().getSeconds();
console.log(seconds);
// Sample output: 48

// Get the current milliseconds
// To get the milliseconds (ranging from 0 to 999) of an instance of a Date object, use its getMilliseconds method.
let milliseconds = new Date().getMilliseconds();
console.log(milliseconds);
// Output: milliseconds right now

// Convert the current time and date to a human-readable string
now = new Date();

// convert date to a string in UTC timezone format:
console.log(now.toUTCString());
// Output: Wed, 21 Jun 2017 09:13:01 GMT

// The static method Date.now() returns the number of milliseconds that have elapsed since 1 January 1970 00:00:00
// UTC. To get the number of milliseconds that have elapsed since that time using an instance of a Date object, use its
// getTime method.

// get milliseconds using static method now of Date
console.log(Date.now());

// get milliseconds using method getTime of Date instance
console.log(new Date().getTime());

// Section 8.7: Increment a Date Object
// To increment date objects in JavaScript, we can usually do this:
let checkoutDate = new Date();
// Thu Jul 21 2016 10:05:13 GMT-0400 (EDT)
checkoutDate.setDate(checkoutDate.getDate() + 1);

console.log(checkoutDate); // Fri Jul 22 2016 10:05:13 GMT-0400 (EDT)
// It is possible to use setDate to change the date to a day in the following month by using a value larger than the
// number of days in the current month -

checkoutDate = new Date();
// Thu Jul 21 2016 10:05:13 GMT-0400 (EDT)
checkoutDate.setDate(checkoutDate.getDate() + 12);
console.log(checkoutDate); // Tue Aug 02 2016 10:05:13 GMT-0400 (EDT)
// The same applies to other methods such as getHours(), getMonth(),etc.

// Adding Work Days
// If you wish to add work days (in this case I am assuming Monday - Friday) you can use the setDate function
// although you need a little extra logic to account for the weekends (obviously this will not take account of national
// holidays) -

function addWorkDays(startDate, days) {
  // Get the day of the week as a number (0 = Sunday, 1 = Monday, .... 6 = Saturday)
  let dow = startDate.getDay();
  let daysToAdd = days;
  // If the current day is Sunday add one day
  if (dow == 0) daysToAdd++;
  // If the start date plus the additional days falls on or after the closest Saturday calculate weekends;
  if (dow + daysToAdd >= 6) {
    //Subtract days in current working week from work days
    let remainingWorkDays = daysToAdd - (5 - dow);
    //Add current working week's weekend
    daysToAdd += 2;
    if (remainingWorkDays > 5) {
      //Add two days for each working week by calculating how many weeks are included
      daysToAdd += 2 * Math.floor(remainingWorkDays / 5);
      //Exclude final weekend if remainingWorkDays resolves to an exact number of weeks
      if (remainingWorkDays % 5 == 0) daysToAdd -= 2;
    }
  }
  startDate.setDate(startDate.getDate() + daysToAdd);
  return startDate;
}

// Section 8.8: Convert to JSON
date1 = new Date();
console.log(date1.toJSON()); //2023-01-24T17:48:43.303Z

// Chapter 9: Date Comparison
// Section 9.1: Comparing Date values

// To check the equality of Date values:
date1 = new Date();
let date2 = new Date(date1.valueOf() + 10);
console.log(date1.valueOf() === date2.valueOf()); //false
