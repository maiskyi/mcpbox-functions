import { Injectable } from '@nestjs/common';
import { Storage } from 'firebase-admin/storage';

@Injectable()
export class StorageService extends Storage {}
