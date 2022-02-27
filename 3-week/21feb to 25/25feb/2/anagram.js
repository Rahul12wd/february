function input(a, b) {
    if (a.length !== b.length) {
        return false;
    }
    var str1 = a.split('').sort().join('');
    var str2 = b.split('').sort().join('');

    var result = (str1 === str2);
    return result;

}
var a = prompt("Enter the first Name");
var b = prompt("Enter  the second Name");
document.write(input(a, b));