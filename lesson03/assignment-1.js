// creat array with at least 5 strings
let sashimi = ['maguro', 'sake', 'amaiebi', 'saba', 'tako', 'hotate'];

// add element to end of the array
sashimi.push('hamachi');
  console.log(sashimi);

// remove the third element
sashimi.splice(2, 1);
  console.log(sashimi);

// creat string of elements seperated by commas
let sashimiList = sashimi.join(', ');
  console.log(sashimiList);
