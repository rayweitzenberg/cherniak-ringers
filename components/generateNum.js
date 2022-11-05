export let ranNum = 999

const generateNum = async () => {
  ranNum = Math.floor(Math.random() * 999);

  if (ranNum < 10) {
    ranNum = "00000" + ranNum;
  } else if (ranNum < 100) {
    ranNum = "0000" + ranNum;
  } else {
    ranNum = "000" + ranNum;
  }

  // console.log("ranNum", ranNum);

  return ranNum
};

export default generateNum;