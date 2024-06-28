import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BulkMessageServiceBase } from "./base/bulkMessage.service.base";

@Injectable()
export class BulkMessageService extends BulkMessageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
