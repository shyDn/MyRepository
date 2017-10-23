import { HelloShyPage } from './app.po';

describe('hello-shy App', function() {
  let page: HelloShyPage;

  beforeEach(() => {
    page = new HelloShyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
