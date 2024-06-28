export type BulkMessage = {
  content: string | null;
  createdAt: Date;
  id: string;
  sender: string | null;
  timestamp: Date | null;
  updatedAt: Date;
};
