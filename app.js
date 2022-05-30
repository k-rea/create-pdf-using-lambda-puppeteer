const chromium = require('chrome-aws-lambda');

exports.lambdaHandler = async (event) => {
    consoleo.log(event)
    const browser = await chromium.puppeteer.launch({
        args: chromium.args,
        defaultViewport: chromium.defaultViewport,
        executablePath: await chromium.executablePath,
        headless: chromium.headless,
        // headless: true,
        ignoreHTTPSErrors: true,
    });
    const page = await browser.newPage();

    await page.goto("https://zenn.dev/",)


    const pdfBuffer = await page.pdf()
    const pdfBase64 = pdfBuffer.toString('base64');

    await page.close()
    await browser.close()

    return  {
        statusCode: 200,
        headers: {
            'Content-Length': Buffer.byteLength(pdfBase64),
            'Content-Type': 'application/pdf',
            'Content-disposition': 'attachment;filename=test.pdf'
        },
        isBase64Encoded: true,
        body: pdfBase64
    };
};
