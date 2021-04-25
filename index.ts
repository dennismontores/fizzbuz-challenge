export const fizbuzzApp = (numberToTest: number): string[] => {
    const isDivisible = (num: number, divisor: number) => num % divisor === 0;

    const formatNumber = (number: number): string => {
        if (isDivisible(number, 3) && isDivisible(number, 5)) {
            return 'FizzBuzz';
        }

        if (isDivisible(number, 3)) {
            return 'Fizz';
        }

        if (isDivisible(number, 5)) {
            return 'Buzz';
        }

        return number.toString();
    };

    return [...Array(numberToTest)].map((_, index) => formatNumber(index + 1));
};

const result = fizbuzzApp(9);
console.log(result);
