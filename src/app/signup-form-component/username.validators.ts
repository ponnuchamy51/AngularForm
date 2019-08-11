import { AbstractControl, ValidationErrors } from "@angular/forms";
import { Observable } from "rxjs";


export class UsernameValidators {
	static cannotContainSpaces(control: AbstractControl): ValidationErrors | null {
		if ((control.value as string).indexOf(" ") >= 0)
			return { cannotContainSpaces: true };
		return null;
	}
	static uniqueNameValidation(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {

		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (control.value == "pons")
					resolve({ uniqueNameValidation: true });
				else
					resolve(null)
			}, 2000);
		})

	}

}