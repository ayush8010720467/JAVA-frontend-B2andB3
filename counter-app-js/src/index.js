function sub() {
  let [counterValue, initValue] = getElemAndInnerValue("counterValue");
  initValue--;
  counterValue.innerHTML = initValue;
}
function add() {
  let [counterValue, initValue] = getElemAndInnerValue("counterValue");
  initValue++;
  counterValue.innerHTML = initValue;
}
function getElemAndInnerValue(className) {
  let counterValue = document.getElementsByClassName("counterValue")[0];
  let initValue = +counterValue.innerHTML;
  return [counterValue, initValue];
}