import { Module } from "@nestjs/common";
import { BulkMessageModuleBase } from "./base/bulkMessage.module.base";
import { BulkMessageService } from "./bulkMessage.service";
import { BulkMessageController } from "./bulkMessage.controller";
import { BulkMessageResolver } from "./bulkMessage.resolver";

@Module({
  imports: [BulkMessageModuleBase],
  controllers: [BulkMessageController],
  providers: [BulkMessageService, BulkMessageResolver],
  exports: [BulkMessageService],
})
export class BulkMessageModule {}
