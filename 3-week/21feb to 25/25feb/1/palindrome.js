function reverse_String(s) {
    s = s + "";
    rev_str = s.split("").reverse().join("");
    return rev_str;
}
function input(string) {
    var rev_string = reverse_String(string);

    if (rev_string == string) {
        return 1;
    } else {
        return 0;
    }
}
var word = prompt("Enter a string")
if (input(word) == 1) {
    document.write("" + word + " is a palindrome")
}
else if (input(word) == 0) {
    document.write("" + word + " is not a  palindrome")
}