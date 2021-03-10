
exports.min = function min (array) {
    let min = 0;
    if(array === 0|| array === undefined){
        return min = 0
    }else {
        for(let i = 0; i < array.length; i++){
            if(array[i]<min){
                min = array[i];
            }else{
                min
            }
    }

    }

    return min;
}

exports.max = function max (array) {
    let max = 0;
    if(array === 0 || array === undefined){
        return max = 0
    }else {
        for (let i = 0; i < array.length; i++) {
            if (array[i] > max) {
                max = array[i];
            } else {
                max
            }
        }
    }
    return max;
}

exports.avg = function avg (array) {
        let avg = 0;
    if(array === [] || array === undefined || array.length === 0){
        return 0;
    }else {
        for (let i = 0; i < array.length; i++) {
            avg += array[i];
        }
        return avg/array.length;
    }
}


