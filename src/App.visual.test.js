const puppeteer = require('puppeteer');
const { toMatchImageSnapshot } = require('jest-image-snapshot');

expect.extend({ toMatchImageSnapshot });

describe('Visual Regression Testing', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test('App snapshot', async () => {
    await page.goto('http://localhost:3000');
    const image = await page.screenshot();

    expect(image).toMatchImageSnapshot();
  });
});
