export let ranNum = Math.floor(Math.random() * 999);

const generateNum = () => {
  ranNum = Math.floor(Math.random() * 999);

  if (ranNum < 10) {
    ranNum = "00000" + ranNum;
  } else if (ranNum < 100) {
    ranNum = "0000" + ranNum;
  } else {
    ranNum = "000" + ranNum;
  }

  console.log("ranNum", ranNum);
};

export default generateNum;