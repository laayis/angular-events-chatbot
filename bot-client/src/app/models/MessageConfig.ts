import { Location } from './Location';

export interface MessageConfig {
  text: string;
  selectList?: any[];
  locationsList?: Location[];
  bot: boolean;
}