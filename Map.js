//Daniel Davis, Map, Map function that alphabetizes

load('storage.js'); // imports storage 'class'
var inventory = JSON.parse(storage); // nameList now understands storage code locically

print(JSON.stringify(inventory.map(function(array) { // starts print
  array.sort(); // will sort the array alphabetically
  return array; // returns the array sorted
}) ) ); // end of print 
