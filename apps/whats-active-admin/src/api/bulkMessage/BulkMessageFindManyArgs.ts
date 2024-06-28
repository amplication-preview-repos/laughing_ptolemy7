import { BulkMessageWhereInput } from "./BulkMessageWhereInput";
import { BulkMessageOrderByInput } from "./BulkMessageOrderByInput";

export type BulkMessageFindManyArgs = {
  where?: BulkMessageWhereInput;
  orderBy?: Array<BulkMessageOrderByInput>;
  skip?: number;
  take?: number;
};
