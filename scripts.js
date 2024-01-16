// Exercise 1
/**
 * Check whether input array is an arithmetic progression
 * @param {Array<Number>} numbers 
 * @returns boolean
 */
function isArithmeticProgression(numbers) {
    if (!Array.isArray(numbers)) {
        throw Error('Invalid input: input arguments must be an array');
    } else if (numbers.filter((el) => typeof el !== 'number').length > 0) {
        throw Error('Invalid input: input array must consist of numbers');
    };

    const diff = numbers[1] - numbers[0];
    for (let index = 1; index < numbers.length; index++) {
        if (numbers[index] - numbers[index - 1] !== diff) {
            return false;
        };
    };
    return true;
};

// Exercise 2
/**
 * Check whether input string has letter `a` and `b` whose distance is three char.
 * @param {String} text 
 * @returns boolean
 */
function threeStepsAB(text) {
    if (typeof text !== 'string') {
        throw Error('Invalid input: input argument must be a string')
    }

    const arrayOfText = text.toLowerCase().split("");
    const idxOfAList = arrayOfText
        .map((el, idx) => el === 'a' ? idx : null)
        .filter((el) => el !== null);
    const idxOfBList = arrayOfText
        .map((el, idx) => el === 'b' ? idx : null)
        .filter((el) => el !== null);

    for (const idxOfA of idxOfAList) {
        for (const idxOfB of idxOfBList) {
            if (idxOfB - idxOfA === 4 || idxOfB - idxOfA === -4) {
                return true;
            };
        };
    };

    return false;
};

// Exercise 3
/**
 * Return array of two whose sum equals to 'total'.
 * @param {Array<Number>} arr 
 * @param {<Number>} total 
 * @returns Array
 */
function sumArray(arr, total) {
    // Validate arr
    if (!Array.isArray(arr)) {
        throw Error('Invalid input: input arguments must be an array');
    } else if (arr.filter((el) => typeof el !== 'number').length > 0) {
        throw Error('Invalid input: input array must be a number');
    };

    // Validate sum
    if (typeof total !== 'number') {
        throw Error('Invalid input: input param must consist of numbers');
    }

    const result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] > arr[i] && arr[i] + arr[j] === total) {
                result.push([arr[i], arr[j]])
            };
        };
    };

    return result;
}

// Exercise 4
/**
 * Return the contiguous subarray within an `arr` with the largest sum. 
 * @param {Array<Number>} arr 
 * @returns Array
 */
function arrSum(arr) {
    if (!Array.isArray(arr)) {
        throw Error('Invalid input: input arguments must be an array');
    } else if (arr.filter((el) => typeof el !== 'number').length > 0) {
        throw Error('Invalid input: input array must be a number');
    };
    
    let startIdx = 0;
    let lastIdx = 0;
    let finalSum = -Math.max(...arr);
    let currentSum = 0;
    let tempStartIdx = 0;
    
    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i];

        if (currentSum > finalSum) {
            lastIdx = i;
            startIdx = tempStartIdx;
            finalSum = currentSum;
        };
        if (currentSum < 0) {
            tempStartIdx = i + 1;
            currentSum = 0;
        };
    };
    return [arr.slice(startIdx, lastIdx + 1), finalSum];
};