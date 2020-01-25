import { expect } from "chai";
import { Builder, By } from "selenium-webdriver";
import chrome from "selenium-webdriver/chrome";

import "chromedriver";

const options = new chrome.Options();
const chromeOptions = process.env.GITHUB_ACTIONS ? options.headless() : options;

describe("Sandbox", () => {
  let browser;

  before(async () => {
    browser = await new Builder()
      .forBrowser("chrome")
      .setChromeOptions(chromeOptions)
      .build();
    browser.get("https://e2e-boilerplates.github.io/sandbox/");
  });

  after(() => {
    browser.quit();
  });

  it("should be on Sandbox", async () => {
    const title = await browser.getTitle();
    const header = await browser.findElement(By.css("h1"));

    expect(title).to.equal("Sandbox");
    expect(await header.getText()).to.equal("Sandbox");
  });
});
