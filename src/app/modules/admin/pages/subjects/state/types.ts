import { FormControl } from '@angular/forms';

export interface ISubjectForm {
  sessions: FormControl<string>;
  subCode: FormControl<string>;
  subName: FormControl<string>;
}
