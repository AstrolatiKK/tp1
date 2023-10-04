var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
  };
  
  // Function to list the properties of an object
  function listProperties(obj) {
    var propertyList = [];
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        propertyList.push(key);
      }
    }
    return propertyList.join(',');
  }
  
  var result = listProperties(student);
  console.log(result); // Output: name,sclass,rollno
  