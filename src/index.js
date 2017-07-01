//  sum

function sum() {
    var allSum = 0;
    var index;
    for (index = 0; index < arguments.length; index += 1) {
        if (typeof (arguments[index]) != 'number') continue;
        allSum = allSum + arguments[index];
    }
    return allSum;
}




// min

function min(array) {
    var minimal;
    var index;

    if (array === undefined) {
        return;
    } else {
        for (index = 0; index < array.length; index += 1) {
            if (typeof (array[index]) == 'number') {
                if (minimal === undefined) {
                    minimal = array[index];
                    continue;
                }
                if (minimal >= array[index]) {
                    minimal = array[index];
                }
            }
        }
        return minimal;

    }
}

// max

function max(array) {
    var maximal;
    var index;

    if (array === undefined) {
        return;
    } else {
        maximal = array[0];

        for (index = 0; index < array.length; index += 1) {
            if (array[index] >= maximal) {
                maximal = array[index];
            }

        }
        return maximal;
    }
}
