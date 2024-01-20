let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
    
  ];
  
  function PrintDeveloperbyMap() {
    const developer = arr.filter((employee) =>{  return employee.profession ==="developer";
})
    developer.map((data) => {
        console.log(data)
    });

  }
  function PrintDeveloperbyForEach() {
    const forEach = arr.filter((employee) =>{
        if (employee.profession ==="developer"){
            console.log(employee);
        }

    });
  }
  function addData() {
    const Newdata ={id: 4, name: "susan", age: "20", profession: "intern"};
    arr.push(Newdata);
    console.log(Newdata);

  }
  function removeAdmin() {
    arr = arr.filter((employee)=> employee.profession !== "admin");
    console.log(arr);
  }
  function concatenateArray() {
  const  arr1 = [
        { id: 1, name: "john", age: "21", profession: "fashion designer" },
        { id: 2, name: "jack", age: "26", profession: "professor" },
        { id: 3, name: "karen", age: "28", profession: "developer" },
        
      ];
      const concatenatedArray = arr.concat(newArray);
      console.log(concatenatedArray);
  }