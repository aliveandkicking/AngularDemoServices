import { AngularDemoServicesPage } from './app.po';

describe('angular-demo-services App', () => {
  let page: AngularDemoServicesPage;

  beforeEach(() => {
    page = new AngularDemoServicesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
