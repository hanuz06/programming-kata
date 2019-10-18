let talkingCalendar = function(myDate) {
  let date = new Date(myDate);
  // let options = { dateStyle: "long", year: 'numeric', month: 'long', day: 'numeric' };
  // return date.toLocaleDateString('en-US',options);

  let endings = ["st, ", "nd, ", "rd, ", "th, ", "th, ", "th, ", "th, ", "th, ", "th, ", "th, ", "th, ", "th, ", "th, ", "th, ", "th, ", "th, ", "th, ", "th, ", "th, ", "th, ", "st, ", "nd, ", "rd, ", "th, ", "th, ", "th, ", "th, ", "th, ", "th, ", "th, ", "st, "];

  let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  let day = date.getDate();
  let year = date.getFullYear();
  let month = date.getMonth();
  
  return `${months[month]} ${day}${endings[day]} ${year}`;
  //return months[month] + ' ' + day + endings[day] + year;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));

// December 2nd, 2017
// November 11th, 2007
// August 24th, 1987