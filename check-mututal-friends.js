const bobsFollowers = ['James', 'Kathy', 'George', 'Nico', 'David', 'Alex'];
const tinasFollowers = ['James', 'Kathy', 'Paul', 'Alex', 'David', 'Robert'];
const mutualFollowers = [];
for (let i = 0; i < bobsFollowers.length; i++){
  for (let j = 0; j < tinasFollowers.length; j++){
    if (bobsFollowers[i] === tinasFollowers[j]){
      mutualFollowers.push(tinasFollowers[j]);
    };
  };
};

console.log('Mutual Followers: ' + mutualFollowers.join(', '));