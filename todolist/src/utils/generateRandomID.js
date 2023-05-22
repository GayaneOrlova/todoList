//function of generation random number for id

const generateRandomID = (min = 1, max = 1000) => {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

export default generateRandomID