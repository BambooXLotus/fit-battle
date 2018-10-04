import { Fighter } from './../fighter/fighter.model';

export interface Fit {
  id: string;
  fighter: Fighter;
  description: string;
  photo: string;
}
