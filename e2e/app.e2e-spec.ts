import { QlikGamePage } from './app.po';

describe('qlik-game App', () => {
  let page: QlikGamePage;

  beforeEach(() => {
    page = new QlikGamePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
