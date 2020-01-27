import { AngularSrcNewPage } from './app.po';

describe('angular-src-new App', function() {
  let page: AngularSrcNewPage;

  beforeEach(() => {
    page = new AngularSrcNewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
