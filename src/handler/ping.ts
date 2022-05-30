import {formatJSONResponse, ValidatedEventAPIGatewayProxyEvent} from "@/libs/api-gateway";
import {middyfy} from "@/libs/lambda";


const _ping: ValidatedEventAPIGatewayProxyEvent<{}> = async (event) => {

  return formatJSONResponse({
    ping: "pong!",
    event: JSON.stringify(event)
  }) ;
};

export const ping = middyfy(_ping)
