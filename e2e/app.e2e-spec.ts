import { Projectw051016Page } from './app.po';

describe('projectw051016 App', function() {
  let page: Projectw051016Page;

  beforeEach(() => {
    page = new Projectw051016Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
