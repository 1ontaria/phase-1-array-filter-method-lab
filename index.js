const drivers = [
  {
    name: "Bobby",
    hometown: "Pittsburgh",
  },
  {
    name: "Sammy",
    hometown: "New York",
  },
  {
    name: "Sally",
    hometown: "Cleveland",
  },
  {
    name: "Annette",
    hometown: "Los Angeles",
  },
  {
    name: "Bobby",
    hometown: "Tampa Bay",
  },
];
function findMatching(array, string) {
  let names = array.filter(
    (item) => item == string || item === string.toLowerCase()
  );
  return names;
}

function fuzzyMatch(drivers, string) {
  let abbr = drivers.filter((item) => item.startsWith(string));
  return abbr;
}

function matchName(drivers, string) {
  let homeSweetHome = drivers.filter((item) => item.name === string);
  return homeSweetHome;
}
