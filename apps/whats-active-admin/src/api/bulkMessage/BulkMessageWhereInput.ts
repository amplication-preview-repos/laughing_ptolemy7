import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type BulkMessageWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  sender?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
};
