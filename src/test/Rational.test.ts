import { Rational } from '../class/Rational';

describe('Rational Class Tests', () => {
    test('should create a Rational object correctly', () => {
        const rational = new Rational(6, 4);
        expect(rational.toString()).toBe("3/2"); // Should be normalized
    });

    test('normalize method should return a normalized Rational object', () => {
        const rational = new Rational(6, 4);
        const normalized = rational.normalize();
        expect(normalized.toString()).toBe("3/2");
    });

    test('isWhole method should return true for whole numbers', () => {
        const rational = new Rational(12, 4);
        expect(rational.isWhole()).toBe(true);
    });

    test('isDecimal method should return true for decimal numbers', () => {
        const rational = new Rational(6, 4);
        expect(rational.isDecimal()).toBe(true);
    });

    test('equals method should return true for equal Rational objects', () => {
        const rational1 = new Rational(6, 4);
        const rational2 = new Rational(3, 2);
        expect(rational1.equals(rational2)).toBe(true);
    });
});
