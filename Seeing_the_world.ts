
//store the locations in a arry.make the array is not in alphabetical order.
let places :string[] = ['italy', 'germany', 'agra', 'eifel tower', 'times square',];

//print your array in its original order.
console.log('original ' + places);

//print your array in alphabetical order without modifing the actual list.
console.log([...places].sort());

//show that your array is still in its original order by printing it.
console.log('original ' + places);

//print your array in alphabetical order without modifing the actual list.
console.log('copy ' + [...places].sort().reverse());

//show that your array is still in its original order by printing it again.
console.log('original ' + places);

//Reverse the order of your list.print the array to show that its order has changed.
console.log('original ' + places.reverse());

//Reverse the order of your list again.print the list to show its's back to its original order.
console.log('original ' + places.reverse());

//sort your so it's stored in alphabetical order.print the array to show that its order has been changed.
console.log('original ' + places.sort());

//sort to change your array so it's stored in reverse alphabetical order.print the list to show that its order has changed.
console.log('original ' + places.sort().reverse());
