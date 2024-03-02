let gameName = "GTA Vice City";

console.log(gameName[1]);

//know the value at particular index
console.log(gameName.charAt(4));
// length of string
console.log(gameName.length);

//String concatination
console.log(gameName.toUpperCase().concat(" - ", gameName.toUpperCase()));

//Upper case
console.log(gameName.toUpperCase());

//lower case
console.log(gameName.toLowerCase());

//check wheter the given string or word have or not
console.log(gameName.includes("GTA"));

// check string is endwith or not ,return true or false
console.log(gameName.endsWith("City"));

//index of return the index of searched element
console.log(gameName.indexOf("GTA"));
console.log(gameName.indexOf("City"));

// String reaches the given index
console.log(gameName.padEnd(50,"+"));

// The padStart() method of String values pads this string with another string (multiple times, if needed) until the resulting string reaches the given length.
console.log(gameName.padStart(21,"Rokstar "));

//replace the substring 
console.log(gameName.replace("Vice City","III"));

//slice---> divide in substring
console.log(gameName.slice(4));
console.log(gameName.slice(4,9));

// //split
let myarr = gameName.split('');
console.log(myarr);
 console.log(gameName.split());
 console.log(gameName.split(" "));


 //trim
 let trim="    You and she    "
 console.log(trim);
 console.log(trim.trim());