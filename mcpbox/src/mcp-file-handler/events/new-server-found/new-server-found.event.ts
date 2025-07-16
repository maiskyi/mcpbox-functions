import { FileSchema } from '../../types';

interface NewServerFoundEventType {
  data: FileSchema;
}

export class NewServerFoundEvent {
  public constructor(public readonly event: NewServerFoundEventType) {}
}
