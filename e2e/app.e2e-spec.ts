import { UIframeworkNg2Page } from './app.po';

describe('uiframework-ng2 App', function() {
  let page: UIframeworkNg2Page;

  beforeEach(() => {
    page = new UIframeworkNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
