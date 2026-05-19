/* eslint-disable @typescript-eslint/naming-convention */
import {Directive, HostListener} from '@angular/core';
import {NgControl} from '@angular/forms';

@Directive({
    selector: '[appConvertPersianDigits]',
})
export class BmnConvertPersianDigitsDirective {
    constructor(private readonly ngControl: NgControl) {}

    @HostListener('input', ['$event'])
    protected onInput(event: any): void {
        const input = event.target.value;
        const converted = this.convertPersianToEnglishDigits(input);

        this.ngControl.control?.setValue(converted, {emitEvent: false});
    }

    private convertPersianToEnglishDigits(input: string): string {
        const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
        const englishDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        let result = input;

        // "۰۹۱۲۹۴۹۷۱۳۹"
        persianDigits.forEach((digit, index) => {
            const regex = new RegExp(digit, 'g');

            result = result.replace(regex, englishDigits[index]);
        });

        return result;
    }
}
