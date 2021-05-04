const delay = function (elem, callback) {
  var timeout = null;
  elem.onmouseover = function() {
    // Set timeout to be a timer which will invoke callback after 1s
    timeout = setTimeout(callback, 2000);
  }

  elem.onmouseout = function() {
      // Clear any timers set to timeout
      clearTimeout(timeout);
}
}
export default delay;
