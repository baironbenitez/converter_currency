import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

export function validateEqual(key_1: string, key_2:string):ValidatorFn{
    return (formGroup: AbstractControl) => {
    const control_1 = formGroup.get(key_1)
    const control_2 = formGroup.get(key_2)

    if (control_1?.value === null && control_2?.value === null) {
       return null;
    }

    if (control_1?.value === control_2?.value) {
        return {
            equal: true
        }
    }
      return null;
    }
}