const organizeInstructors = function(instructors) {
  let newList = {};
  for (let i = 0; i < instructors.length; i++) {
    if (!(instructors[i].course in newList)) {
      // Object.defineProperty(newList, instructors[i].course, {
      //   value: [],
      //   writable: true,
      //   enumerable: true,
      //   configurable: true
      // });
      newList[instructors[i].course] = [];
    }
    newList[instructors[i].course].push(instructors[i].name);
  }
  return newList;
};


console.log(organizeInstructors([{
  name: "Samuel",
  course: "iOS"
},
{
  name: "Victoria",
  course: "Web"
},
{
  name: "Karim",
  course: "Web"
},
{
  name: "Donald",
  course: "Web"
}
]));
console.log(organizeInstructors([{
  name: "Brendan",
  course: "Blockchain"
},
{
  name: "David",
  course: "Web"
},
{
  name: "Martha",
  course: "iOS"
},
{
  name: "Carlos",
  course: "Web"
}
]));