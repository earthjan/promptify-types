import { DocumentBase } from '../../shared-types/document';

export interface User extends DocumentBase {
  firstName: string;
  middleName?: string;
  lastName?: string;
  suffix?: string;
}
