import { RecepeBookPage } from './app.po';

describe('recepe-book App', function() {
  let page: RecepeBookPage;

  beforeEach(() => {
    page = new RecepeBookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('rb works!');
  });
});
