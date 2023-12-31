import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';

import { AuthService } from '../../store/service';
import { email } from 'src/app/utils/validators';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
})
export class RoleComponent {}
