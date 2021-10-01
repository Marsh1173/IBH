export class MathExtra {
    /**
     * Finds the lowest positive remainder of the dividend divided by the divisor.
     * @param dividend
     * @param divisor
     * @returns The lowest positive remainder of the dividend divided by the divisor.
     */
    public static absValueModulo(dividend: number, divisor: number): number {
        return ((dividend % divisor) + divisor) % divisor;
    }
}
