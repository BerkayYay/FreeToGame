const gameObject = {
  'archery-mission-lvl': {
    fails: 9,
    gameId: 'archery-world-tour',
    playTime: 5291.706,
    wins: 8,
  },
  'archery-world-mission-1': {
    fails: 9,
    gameId: 'archery-world-tour',
    playTime: 981,
    wins: 6,
  },
  'bubble-woods-mission-1': {
    fails: 19,
    gameId: 'bubble-woods',
    playTime: 1206,
    wins: 9,
  },
  'bubble-woods-mission-lvl': {
    fails: 1,
    gameId: 'bubble-woods',
    playTime: 100,
    wins: 2,
  },
  'candy-bubble-mission-lvl': {
    fails: 6,
    gameId: 'candy-bubble',
    playTime: 1558,
    wins: 6,
  },
};

const combineGameObjects = gameObjects => {
  const result = [];

  for (const key in gameObjects) {
    const obj = gameObjects[key];

    let existingObj = result.find(item => item.gameId === obj.gameId);

    if (existingObj) {
      existingObj.wins += obj.wins;
      existingObj.fails += obj.fails;
      existingObj.totalPlayTime += obj.playTime;
    } else {
      const newObj = {
        gameId: obj.gameId,
        wins: obj.wins,
        fails: obj.fails,
        totalPlayTime: obj.playTime,
      };
      result.push(newObj);
    }
  }

  return result;
};

const resultArray = combineGameObjects(gameObject);

resultArray.map(item => {
  console.log('====================================');
  console.log(`
      Fails: ${item.fails}
      Game Id: ${item.gameId}
      playTime: ${item.totalPlayTime}
      Wins: ${item.wins}
    `);
  console.log('====================================');
});

// CODE EXPLANATION
//  1. We have an object called gameObject. This object contains game objects.
//     Each game object has a unique key and a value.
//     The value is an object that contains the game id, wins, fails and play time of the game.
//  2. We have a function called combineGameObjects. This function takes an object as a parameter.
//     This object is the gameObject object.
//  3. We have a variable called result. This variable is an empty array.
//     We will push the combined game objects into this array.
//  4. We have a for loop. This for loop iterates over the gameObject object.
//     In each iteration, we have an object called obj.This object is the value of the gameObject object.
//     In each iteration, we check if the result array contains an object with the same game id.
//     If it does, we add the wins, fails and play time of the obj object to the existing object.
//     If it doesn't, we create a new object and push it to the result array.
//  5. We return the result array.
//  6. We have a variable called resultArray. This variable is the result of the combineGameObjects function.
//     We log the resultArray to the console.
//  7. We have a for loop. This for loop iterates over the resultArray.
//     In each iteration, we log the game id, wins, fails and play time of the game to the console.

// CONSOLE OUTPUT
//   ====================================
//  LOG
//       Fails: 18
//       Game Id: archery-world-tour
//       playTime: 6272.706
//       Wins: 14
//  LOG  ====================================
//  LOG  ====================================
//  LOG
//       Fails: 20
//       Game Id: bubble-woods
//       playTime: 1306
//       Wins: 11
//  LOG  ====================================
//  LOG  ====================================
//  LOG
//       Fails: 6
//       Game Id: candy-bubble
//       playTime: 1558
//       Wins: 6
//  LOG  ====================================
