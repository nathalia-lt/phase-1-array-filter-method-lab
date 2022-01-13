const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

function findMatching (drivers, name){
    return drivers.filter(driver => { if (driver.toLowerCase() === name.toLowerCase())
        {return driver
    }})
}

function fuzzyMatch (drivers, letters){
    return drivers.filter(driver => { if (driver.indexOf(letters) ===0){
        return driver;
    }})
}

const driversObject = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function matchName (driversObject, name){
    return driversObject.filter( driver => driver.name === name)
}