export class ValidationException {
    validations: string[];

    constructor(validations: string[]) {
        this.validations = validations;
    }

    get message(): string {
        return this.validations.map((e) => '- ' + e).join('\n');
    }
}
