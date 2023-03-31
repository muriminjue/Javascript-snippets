// Convert this to promises
function getData(callback) {
    setTimeout(function() {
      const data = { name: 'John', age: 30 };
      callback(data);
    }, 1000);
  }
  
  function processData(data, callback) {
    setTimeout(function() {
      const processedData = Object.assign({}, data, { city: 'New York' });
      callback(processedData);
    }, 1000);
  }
  
  function displayData(data) {
    setTimeout(function() {
      console.log(data);
    }, 1000);
  }
  
  getData(function(data) {
    processData(data, function(processedData) {
      displayData(processedData);
    });
  });
  

  // solution
  function getData() {
    return new Promise((resolve) => {
      setTimeout(function() {
        const data = { name: 'John', age: 30 };
        resolve(data);
      }, 1000);
    });
  }
  
  function processData(data) {
    return new Promise((resolve) => {
      setTimeout(function() {
        const processedData = Object.assign({}, data, { city: 'New York' });
        resolve(processedData);
      }, 1000);
    });
  }
  
  function displayData(data) {
    return new Promise((resolve) => {
      setTimeout(function() {
        console.log(data);
        resolve();
      }, 1000);
    });
  }
  
  getData()
    .then((data) => {
      return processData(data);
    })
    .then((processedData) => {
      return displayData(processedData);
    })
    .catch((error) => {
      console.error(error);
    });


  