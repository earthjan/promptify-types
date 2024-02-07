export type DocumentId = string;

export interface DocumentBase {
  id: DocumentId;
  createdAt: Date;
  updatedAt: Date;
}
