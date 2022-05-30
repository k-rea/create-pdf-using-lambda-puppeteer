import chromium from "chrome-aws-lambda"

import {ValidatedEventAPIGatewayProxyEvent} from "@/libs/api-gateway";
import schema from "@/schema";
// import {middyfy} from "@/libs/lambda";


const _lambdaHandler: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  await chromium.font(
    "https://raw.githack.com/minoryorg/Noto-Sans-CJK-JP/master/fonts/NotoSansCJKjp-Regular.ttf"
  );
  const browser = await chromium.puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath,
    headless: chromium.headless,
    // headless: true,
    ignoreHTTPSErrors: true,
  });
  const page = await browser.newPage();

  // await page.goto("https://zenn.dev/",)
  await page.setContent(`
        <html lang="ja">
          <head>
            <title>Test</title>
          </head>
          <body>
             <h1>Testing.日本語のテスト</h1>
             名前を入れないとerrorになる?
             ${JSON.stringify(event)}
           </body>
         </html>
       `);


  const pdfBuffer = await page.pdf()
  const pdfBase64 = pdfBuffer.toString('base64');

  await page.close()
  await browser.close()

  return {
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

export const lambdaHandler = _lambdaHandler
