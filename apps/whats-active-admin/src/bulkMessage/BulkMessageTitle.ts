import { BulkMessage as TBulkMessage } from "../api/bulkMessage/BulkMessage";

export const BULKMESSAGE_TITLE_FIELD = "sender";

export const BulkMessageTitle = (record: TBulkMessage): string => {
  return record.sender?.toString() || String(record.id);
};
