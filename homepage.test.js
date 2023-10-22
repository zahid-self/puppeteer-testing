const puppeteer = require("puppeteer");

test('Confirm text on page', async() => { 
    const browser = await puppeteer.launch({
        headless: 'new'
    });

    try {
        const page = await browser.newPage();
        await page.goto('http://localhost:8080');
        let pageHeader = await page.$('#pageTitle');
        let pageHeaderValue = await pageHeader.evaluate((el) => el.textContent);

        expect(pageHeaderValue).toContain("Welcome to the demo Web Page");

        let pageParagraph = await page.$('#pageParagraph');
        let pageParagraphnValue = await pageParagraph.evaluate((el) => el.textContent);
        expect(pageParagraphnValue).toContain('This is a sample text in a paragraph on the page');
    } finally{
        await browser.close()
    }
 },120000)

 test('Confirm text on page', async() => { 
    const browser = await puppeteer.launch({
        headless: 'new'
    });

    try {
        const page = await browser.newPage();
        await page.goto('http://localhost:8080');
        await page.type("#userEmail","test@company.com");
        await page.click('#submitButton')

        let emailContainer = await page.$('#infoDisplay');
        let value = await emailContainer.evaluate((el) => el.textContent);
        expect(value).toContain('test@company.com')
    } finally{
        await browser.close()
    }
 },120000)

