import { AddressDto } from './adressDto';
import { Audit } from './audit';

export interface EventDto {
  title: string;
  audit: Audit;
  image: string;
  description: string;
  address: AddressDto;
  fileContent: string;
  fromDate: Date;
  toDate: Date;
}
