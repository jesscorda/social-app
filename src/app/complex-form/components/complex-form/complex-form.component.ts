import type { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import type {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup} from '@angular/forms';
import {
  Validators,
} from '@angular/forms';
import type { Observable} from 'rxjs';
import { map, merge, startWith, tap } from 'rxjs';
import { ErrorMessages } from '../../enums/error-messages';
import { ConfirmEqualValidator } from '../../validators/confirm-equal.validator';

@Component({
  selector: 'app-complex-form',
  templateUrl: './complex-form.component.html',
  styleUrls: ['./complex-form.component.scss'],
})
export class ComplexFormComponent implements OnInit {
  mainForm!: FormGroup;

  personalInfoForm!: FormGroup;

  contactPreferenceCtrl!: FormControl;

  phoneCtrl!: FormControl;

  emailCtrl!: FormControl;

  confirmEmailCtrl!: FormControl;

  emailForm!: FormGroup;

  passwordCtrl!: FormControl;

  confirmPasswordCtrl!: FormControl;

  loginInfoForm!: FormGroup;

  errorMessages = ErrorMessages;

  disableEmailOrPhoneCtrl$!: Observable<string>;

  showErrorIfUneqEmail$!: Observable<boolean>;

  showErrorIfUneqPassword$!:Observable<boolean>

  vm$!: Observable<unknown>;

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.initFormControls();
    this.initMainForm();
    this.initializeFormUpdateObs();
    this.vm$ = merge(this.disableEmailOrPhoneCtrl$);
  }

  private initMainForm(): void {
    this.mainForm = this._fb.group({
      personalInfo: this.personalInfoForm,
      contactPreference: this.contactPreferenceCtrl,
      email: this.emailForm,
      phone: this.phoneCtrl,
      loginInfo: this.loginInfoForm,
    });
  }

  private initFormControls() {
    this.personalInfoForm = this._fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    });
    this.contactPreferenceCtrl = this._fb.control('email');
    this.phoneCtrl = this._fb.control('');
    this.phoneCtrl.addValidators([
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
    ]);
    this.emailCtrl = this._fb.control('');
    this.confirmEmailCtrl = this._fb.control('');
    this.emailForm = this._fb.group(
      {
        email: this.emailCtrl,
        confirm: this.confirmEmailCtrl,
      },
      {
        validators: [
          ConfirmEqualValidator('email', 'confirm'),
          Validators.required,
          Validators.email,
        ],
        updateOn: 'blur',
      }
    );
    this.passwordCtrl = this._fb.control('', Validators.required);
    this.confirmPasswordCtrl = this._fb.control('', Validators.required);
    this.loginInfoForm = this._fb.group(
      {
        username: ['', Validators.required],
        password: this.passwordCtrl,
        confirmPassword: this.confirmPasswordCtrl,
      },
      {
        validators: [
          ConfirmEqualValidator('password', 'confirmPassword'),
          Validators.required,
          Validators.email,
        ],
        updateOn: 'blur',
      }
    );
  }

  initializeFormUpdateObs() {
    this.disableEmailOrPhoneCtrl$ =
      this.contactPreferenceCtrl.valueChanges.pipe(
        startWith(this.contactPreferenceCtrl.value),
        tap((preference: string) => {
          if (preference === 'email') this.phoneCtrl.reset();
          if (preference === 'phone') this.emailForm.reset();
          this.phoneCtrl[preference === 'email' ? 'disable' : 'enable']();
          this.emailForm[preference === 'phone' ? 'disable' : 'enable']();
        })
      );
    this.showErrorIfUneqEmail$ = this.emailForm.statusChanges.pipe(
      map(
        (status) =>
          status === 'INVALID' &&
          this.emailCtrl.value &&
          this.confirmEmailCtrl.value
      )
    );
    this.showErrorIfUneqPassword$ = this.loginInfoForm.statusChanges.pipe(
      map(
        (status) =>
          status === 'INVALID' &&
          this.passwordCtrl.value &&
          this.confirmPasswordCtrl.value
      )
    );
  }

  onSubmitForm(): void {
    console.log(this.mainForm.value);
    this.mainForm.reset({ contactPreference: 'email' });
  }

  getErrorMessage(ctrl: AbstractControl | null): string {
    if (!ctrl) return '';
    if (ctrl.hasError('required')) {
      return ErrorMessages.Required;
    } else if (ctrl.hasError('email')) {
      return ErrorMessages.Email;
    } else {
      return ErrorMessages.Other;
    }
  }
}
