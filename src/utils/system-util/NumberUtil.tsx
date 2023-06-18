export function isEven(num: number) {
    return num % 2 === 0;
}

export function isOdd(num: number) {
    return num % 2 !== 0;
}

export function isPrime(num: number) {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

export function formatNumberToTwoDecimalPlaces(num: number) {
    if (typeof num !== 'number') {
        throw new Error('Invalid input. Expected a number.');
    }

    return num.toFixed(2);
}

export function factorial(num: number) {
    if (num < 0) {
        throw new Error('Input must be a non-negative integer.');
    }

    if (num === 0 || num === 1) {
        return 1;
    }

    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

export function sqrt(num: number) {
    if (num < 0) {
        throw new Error('Input must be a non-negative number.');
    }

    return Math.sqrt(num);
}

export function divisor(a: number, b: number) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Inputs must be numbers.');
    }

    a = Math.abs(a);
    b = Math.abs(b);

    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }

    return a;
}

export function multiple(a: number, b: number) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Inputs must be numbers.');
    }

    return (a * b) / divisor(a, b);
}

export function getBinaryStr(num: number) {
    if (typeof num !== 'number') {
        throw new Error('Input must be a number.');
    }

    if (num === 0) {
        return '0';
    }

    let binaryStr = '';
    while (num > 0) {
        binaryStr = (num % 2) + binaryStr;
        num = Math.floor(num / 2);
    }

    return binaryStr;
}

export function binaryToInt(binaryStr: string) {
    if (typeof binaryStr !== 'string') {
        throw new Error('Input must be a string.');
    }

    return parseInt(binaryStr, 2);
}

export function binaryToLong(binaryStr: number) {
    if (typeof binaryStr !== 'string') {
        throw new Error('Input must be a string.');
    }

    return BigInt(`0b${binaryStr}`);
}

export function compare(a: number, b: number) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Inputs must be numbers.');
    }

    if (a === b) {
        return 0;
    } else if (a < b) {
        return -1;
    } else {
        return 1;
    }
}

export function toStr(num: number) {
    if (typeof num !== 'number') {
        throw new Error('Input must be a number.');
    }

    return num.toString();
}
