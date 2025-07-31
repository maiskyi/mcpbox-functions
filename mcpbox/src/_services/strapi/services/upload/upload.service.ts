import { basename, extname } from 'path';

import { Injectable, Logger } from '@nestjs/common';
import axios from 'axios';
import { kebabCase } from 'lodash';

import { Upload } from '../../__generated__/api/Upload';
import { UploadCreateData } from '../../__generated__/api/data-contracts';
import { HttpClientService } from '../http-client';

import {
  GetFileNameParams,
  UploadCreateByUrlParams,
  GetImgArrayBufferParams,
} from './upload.types';

@Injectable()
export class UploadService extends Upload {
  private readonly logger = new Logger(UploadService.name, {
    timestamp: true,
  });

  private async getImgArrayBuffer({ url }: GetImgArrayBufferParams) {
    try {
      const { data: arraybuffer, headers } = await axios.get(url, {
        responseType: 'arraybuffer',
      });
      return {
        arraybuffer,
        headers,
      };
    } catch {
      const err = new Error('Failed to get image array buffer');
      this.logger.error(err);
      throw err;
    }
  }

  private getFileName({ url, fileName }: GetFileNameParams) {
    const pathname = new URL(url).pathname;

    const baseName = basename(pathname);

    const extension = extname(pathname);

    return fileName ? `${kebabCase(fileName)}${extension}` : baseName;
  }

  public constructor(client: HttpClientService) {
    super(client);
  }

  public async uploadCreateByUrl({
    url,
    fileName,
  }: UploadCreateByUrlParams): Promise<{ data: UploadCreateData }> {
    try {
      const { data: arraybuffer, headers } = await axios.get(url, {
        responseType: 'arraybuffer',
      });

      const name = this.getFileName({
        url,
        fileName,
      });

      const buffer = Buffer.from(arraybuffer);

      const file = new File([buffer], name, {
        type: headers['content-type'],
      });

      const data = await this.uploadCreate({
        files: [file],
      });

      return { data };
    } catch (error) {
      this.logger.error(error.response?.data);
      throw error;
    }
  }
}
