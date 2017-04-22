import { GdiaaPage } from './app.po';

describe('gdiaa App', () => {
  let page: GdiaaPage;

  beforeEach(() => {
    page = new GdiaaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
