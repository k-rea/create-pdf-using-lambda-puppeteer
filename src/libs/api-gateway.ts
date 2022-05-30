import type { APIGatewayProxyEvent, APIGatewayProxyResult, Handler } from "aws-lambda"
import type { FromSchema } from "json-schema-to-ts";

type ValidatedAPIGatewayProxyEvent<S> = Omit<APIGatewayProxyEvent, 'body'> & { body: FromSchema<S> }
export type ValidatedEventAPIGatewayProxyEvent<S> = Handler<ValidatedAPIGatewayProxyEvent<S>, APIGatewayProxyResult>

export const formatJSONResponse = (response: Record<string, unknown>) => {
  return {
    statusCode: 200,
    body: JSON.stringify(response)
  }
}

export const formatPDFResponse = (response: string) => {
  return {
    statusCode: 200,
    headers: {
      'Content-Length': Buffer.byteLength(response),
      'Content-Type': 'application/pdf',
      // 'Content-disposition': 'attachment;filename=test.pdf'
    },
    isBase64Encoded: true,
    body: JSON.stringify(response)
  }
}
