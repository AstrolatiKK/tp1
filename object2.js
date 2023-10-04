var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
  };
  
  console.log("Object before deleting 'rollno' property:");
  console.log(student);
  
  // Deleting the 'rollno' property
  if (student.hasOwnProperty('rollno')) {
    delete student.rollno;
  }
  
  console.log("\nObject after deleting 'rollno' property:");
  console.log(student);
  