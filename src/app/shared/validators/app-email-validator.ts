import { ValidatorFn } from "@angular/forms";

export function appEmailValidator(domains:string[]):ValidatorFn {

    const domainStrings = domains.join("|");
    const regExp = new RegExp(`[^@]{5,}@(gmail|abv)\.(${domainStrings})$`)
    
    return (control)=>{
        return control.value === '' || regExp.test(control.value)
        ? null 
        : {appEmailValidator:true}
    }
}