import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BulkMessageService } from "./bulkMessage.service";
import { BulkMessageControllerBase } from "./base/bulkMessage.controller.base";

@swagger.ApiTags("bulkMessages")
@common.Controller("bulkMessages")
export class BulkMessageController extends BulkMessageControllerBase {
  constructor(protected readonly service: BulkMessageService) {
    super(service);
  }
}
