import { SortOrder } from "../../util/SortOrder";

export type ContactOrderByInput = {
  belongsTo?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  phoneNumber?: SortOrder;
  updatedAt?: SortOrder;
};
