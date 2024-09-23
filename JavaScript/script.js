function ageToAbilities(age) {
    if (age < 16) {
        return "You can't drive";
    } else if (age >= 16 && age < 18) {
        return "You can drive but note vote."
    } else if (age >= 18 && age <= 24) {
        return "You can vote but not rent a car."
    } else {
        return "You can do pretty much anything"
    }
};


function oddIndicies(arr) {
    return arr.filter((item, index) => index % 2 !== 0);
};

function numOddValues(arr){
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 !== 0){
            count++;
        }
    }
    return count;
}

function averageStringLength(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i].length;
    }
    return sum / arr.length;
};

function firstPunctuationIndex(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '.' || str[i] === '?' || str[i] === '!') {
            return i;
        }
    }
    return -1;
};


function getPlace(sorted, score) {
    let place = sorted.length + 1;
    for (let i = 0; i < sorted.length; i++) {
        if (score > sorted[i]) {
            place = i + 1;
            break;
        }
    }
    switch (place) {
        case 1: return '1st place';
        case 2: return '2nd place';
        case 3: return '3rd place';
        default: return `${place}th place`;
    }
};

function addToObj(obj, key, value) {
    if (typeof key !== "string") {
        return 'Function must be called with a valid key.';
    }
    obj[key] = value;
}


let obj = {
    user: 'teacher',
    birthday: 'January 1st',
    favoriteColor: 'yellow'
};

function duplicateElements(arr) {
    const counter = {}; 
    const result = []; 

    
    arr.forEach(num => {
        counter[num] = (counter[num] || 0) + 1;
    });

    
    for (const num in counter) {
        if (counter[num] > 1) {
            result.push(Number(num));
        }
    }

    return result;
};