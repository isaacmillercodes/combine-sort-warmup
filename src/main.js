(function() {

  var animals1 = ['cat', 'dog', 'fish', 'zebra'];
  var animals2 = ['lion', 'aardvark', 'gorilla'];

  function combineAndSort(arr1, arr2) {
    return arr1.concat(arr2).sort();
  }

  var allAnimals = combineAndSort(animals1, animals2);
  console.log(allAnimals);
  console.log(animals1);
  console.log(animals2);

}());
