import type { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function ConfirmEqualValidator(
  mainFieldName: string,
  confirmFieldName: string
): ValidatorFn {
  return (ctrl: AbstractControl): null | ValidationErrors => {
    const mainValue = ctrl.get(mainFieldName)?.value;
    const confirmValue = ctrl.get(confirmFieldName)?.value;
    return mainValue !== confirmValue
      ? {
          confirmValue: {
            main: mainValue,
            confirm: confirmValue,
          },
        }
      : null;
  };
}
