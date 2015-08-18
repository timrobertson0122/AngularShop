describe('Clothes Shopping Site', function() {
  it('has a title', function() {
    browser.get('http://localhost:4567');

    expect(browser.getTitle()).toEqual('Angular Shop');
  });
});