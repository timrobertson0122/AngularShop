exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['shoppingFeature.js'],
  capabilities: {
    'browserName': 'chrome'
  },
}