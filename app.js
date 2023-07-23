function dutyFree(normPrice, discount, hol){
//Use a math formula to get the number
  return Math.floor((hol / (normPrice * discount) * 100));
}