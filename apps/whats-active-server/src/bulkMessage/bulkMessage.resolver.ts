import * as graphql from "@nestjs/graphql";
import { BulkMessageResolverBase } from "./base/bulkMessage.resolver.base";
import { BulkMessage } from "./base/BulkMessage";
import { BulkMessageService } from "./bulkMessage.service";

@graphql.Resolver(() => BulkMessage)
export class BulkMessageResolver extends BulkMessageResolverBase {
  constructor(protected readonly service: BulkMessageService) {
    super(service);
  }
}
