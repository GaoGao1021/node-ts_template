export class Rational {
    private numerator: number;
    private denominator: number;

    constructor(numerator: number, denominator: number) {
        if (denominator === 0) {
            throw new Error("Denominator cannot be zero.");
        }
        this.numerator = numerator;
        this.denominator = denominator;
        this.normalize();
    }

    normalize(): Rational {
        const gcd = this.greatestCommonDivisor(this.numerator, this.denominator);
        this.numerator /= gcd;
        this.denominator /= gcd;
        return this;
    }

    isWhole(): boolean {
        return this.denominator === 1;
    }

    isDecimal(): boolean {
        return this.denominator !== 1;
    }

    equals(other: Rational): boolean {
        return this.numerator === other.numerator && this.denominator === other.denominator;
    }

    toString(): string {
        return `${this.numerator}/${this.denominator}`;
    }

    static parseRational(rationalStr: string): Rational {
        const [numerator, denominator] = rationalStr.split('/').map(Number);
        return new Rational(numerator, denominator);
    }

    static _parseRational(numerators: string[], denominators: string[]): Rational {
        const num = numerators.reduce((sum, n) => sum + parseFloat(n), 0);
        const den = denominators.reduce((sum, d) => sum + parseFloat(d), 0);
        return new Rational(num, den);
    }

    private greatestCommonDivisor(a: number, b: number): number {
        return b === 0 ? a : this.greatestCommonDivisor(b, a % b);
    }
}
