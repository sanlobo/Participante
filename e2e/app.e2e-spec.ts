import { participantePage } from './app.po';

describe('participante App', function() {
  let page: participantePage;

  beforeEach(() => {
    page = new participantePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
