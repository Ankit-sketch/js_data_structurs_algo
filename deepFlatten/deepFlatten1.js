const obj = {
    a: 1,
    b: [2, 3],
    c: {
        d: 4,
        e: [5, 6],
        f: {
            g: 7
        }
    }
};
const flattened = deepFlattenToObject(obj);
function solve(obj, key, customKey, answer) {
    let nestedKey = obj[key];
    if (Array.isArray(nestedKey)) {
        for (let i = 0; i < nestedKey.length; i++) {
            let newKey = `${customKey}${key}_${i}`;
            answer[newKey] = nestedKey[i];
        }
        return;
    }
    else if (!Array.isArray(nestedKey) && Object.keys(nestedKey).length == 0) {
        let newKey = `${customKey}${key}`;
        answer[newKey] = obj[key];
        return;
    }
    else {
        for (let key2 in nestedKey) {
            let newKey = `${customKey}${key}_`;
            solve(nestedKey, key2, newKey, answer);
        }
    };
};
function deepFlattenToObject(obj) {
    let answer = {};
    for (let key in obj) {
        let customKey = "";
        solve(obj, key, customKey, answer);
    }
    return answer;
};
console.log(flattened); 