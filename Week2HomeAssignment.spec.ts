import { test,defineConfig, chromium,webkit} from "@playwright/test";

test("To launch a browser", async () => {

const edgeBrowser = await chromium.launch({
    channel: 'msedge', // Uses installed Microsoft Edge
    headless: false
  });

const browserContext1 = await edgeBrowser.newContext();
const page1 = await browserContext1.newPage();
await page1.goto("https://www.redbus.in");
await page1.waitForTimeout(5000);
console.log("title of page 1"+page1.title());
console.log("URL of page 1"+page1.url());



const webkitbrowser = await webkit.launch({ headless: false});
const browserContext2 = await webkitbrowser.newContext();
const page2 = await browserContext2.newPage();
await page2.goto("https://www.flipkart.com");
await page2.waitForTimeout(5000);
console.log("title "+page2.title());
console.log("URL of page2 "+page2.url());



});