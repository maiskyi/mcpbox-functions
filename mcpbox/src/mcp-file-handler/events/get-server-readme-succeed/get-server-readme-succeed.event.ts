import { FileSchema } from '../../types';

interface GetServerReadmeSucceedEventType {
  data: FileSchema;
  documentId: string;
  readme: string;
}

export class GetServerReadmeSucceedEvent {
  public constructor(public readonly event: GetServerReadmeSucceedEventType) {}
}
