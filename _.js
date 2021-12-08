const _ = {
    clamp(number, lower, upper) {
        let lowerClampedValue = Math.max(number, lower);
        let clampedValue = Math.min(lowerClampedValue, upper);
        return clampedValue;
    },
    inRange(number, start, end) {
        if (end === undefined) {
            end = start
            start = 0
        } if (start > end) {
            var temp = end;
            end = start;
            start = temp;
        } 
        var isInRange = start <= number && number < end
        return isInRange;
    },
    words(string){
        var words = string.split(' ');
        return words;
    }

};



// Do not write or modify code below this line.
module.exports = _;