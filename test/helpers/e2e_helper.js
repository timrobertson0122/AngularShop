module.exports.scrollElemFinderIntoView = function(elemFinder) {
  var promise = browser.executeScript('arguments[0].scrollIntoView(false)', elemFinder.getWebElement());
  return promise;
};