import { DanceNetworkPage } from './app.po';

describe('dance-network App', () => {
  let page: DanceNetworkPage;

  beforeEach(() => {
    page = new DanceNetworkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
