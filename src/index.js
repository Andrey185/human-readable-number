module.exports = function toReadable (number) {
    let arr = [];
    const array = number.toString().split("");
    switch (parseFloat(array[array.length - 1])) {
        case 1:
            arr.push("one");
            break;
        case 2:
            arr.push("two");
            break;
        case 3:
            arr.push("three");
            break;
        case 4:
            arr.push("four");
            break;
        case 5:
            arr.push("five");
            break;
        case 6:
            arr.push("six");
            break;
        case 7:
            arr.push("seven");
            break;
        case 8:
            arr.push("eight");
            break;
        case 9:
            arr.push("nine");
            break;
        case 0:
            if (array.length == 1) {
                arr.push("zero");
            }
            break;
    }
    switch (parseFloat(array[array.length - 2])) {
        case 1:
            if (array[array.length - 1] == 0) {
                arr.push("ten");
            }
            if (array[array.length - 1] == 1) {
                arr.push("eleven");
                arr.shift();
            }
            if (array[array.length - 1] == 2) {
                arr.push("twelve");
                arr.shift();
            }
            if (array[array.length - 1] == 3) {
                arr.push("thirteen");
                arr.shift();
            }
            if (array[array.length - 1] == 4) {
                arr.push("fourteen");
                arr.shift();
            }
            if (array[array.length - 1] == 5) {
                arr.push("fifteen");
                arr.shift();
            }
            if (array[array.length - 1] == 6) {
                arr.push("sixteen");
                arr.shift();
            }
            if (array[array.length - 1] == 7) {
                arr.push("seventeen");
                arr.shift();
            }
            if (array[array.length - 1] == 8) {
                arr.push("eighteen");
                arr.shift();
            }
            if (array[array.length - 1] == 9) {
                arr.push("nineteen");
                arr.shift();
            }
            break;
        case 2:
            arr.push("twenty");
            break;
        case 3:
            arr.push("thirty");
            break;
        case 4:
            arr.push("forty");
            break;
        case 5:
            arr.push("fifty");
            break;
        case 6:
            arr.push("sixty");
            break;
        case 7:
            arr.push("seventy");
            break;
        case 8:
            arr.push("eighty");
            break;
        case 9:
            arr.push("ninety");
            break;
        // case 0: arr.push('and');break
    }
    switch (parseFloat(array[array.length - 3])) {
        case 1:
            arr.push("one hundred");
            break;
        case 2:
            arr.push("two hundred");
            break;
        case 3:
            arr.push("three hundred");
            break;
        case 4:
            arr.push("four hundred");
            break;
        case 5:
            arr.push("five hundred");
            break;
        case 6:
            arr.push("six hundred");
            break;
        case 7:
            arr.push("seven hundred");
            break;
        case 8:
            arr.push("eight hundred");
            break;
        case 9:
            arr.push("nine hundred");
            break;
    }
    return arr.reverse().join(" ").trim();
}
