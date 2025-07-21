import { basename, extname } from 'path';

import { Injectable, Logger } from '@nestjs/common';
import axios from 'axios';

import { Upload } from '../../__generated__/api/Upload';
import { HttpClientService } from '../http-client';

import { GetFileNameParams, UploadCreateByUrlParams } from './upload.types';

@Injectable()
export class UploadService extends Upload {
  private readonly logger = new Logger(UploadService.name, {
    timestamp: true,
  });

  private getFileName({ url, fileName }: GetFileNameParams) {
    console.log(fileName);
    const pathname = new URL(url).pathname;

    const baseName = basename(pathname);

    const extension = extname(pathname);

    return fileName ? `${fileName}${extension}` : baseName;
  }

  public constructor(client: HttpClientService) {
    super(client);
  }

  public async uploadCreateByUrl({ url, fileName }: UploadCreateByUrlParams) {
    try {
      const baseName = basename(url);

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

      console.log(data);

      console.log({
        file,
        baseName,
        buffer,
      });
    } catch (error) {
      this.logger.error(error);
      throw error;
    }

    // const [{ id }] = await this.uploadCreate({
    //   files: [],
    // });
  }
}
