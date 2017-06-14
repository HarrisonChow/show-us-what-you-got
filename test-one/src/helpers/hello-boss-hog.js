const helloBossHog = function(index){
  if (index % 3 === 0 && index % 5 === 0) {
    return "BossHog";
  } else if (index % 5 === 0 ) {
    return "Hog";
  } else if (index % 3 === 0) {
    return "Boss";
  } else {
    return index;
  }
};

export default helloBossHog;
