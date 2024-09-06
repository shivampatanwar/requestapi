
// fetch all data from the server
function fetchAll() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://springbootmongodbrestapi.up.railway.app/api/v1/employees", true);
    xhr.onload = function() {
        if (xhr.status === 302) {
            var result = JSON.parse(xhr.responseText);
            console.log(result);
            console.log(result.data);
          
        } else {
            console.error("Error fetching data");
        }
    };
    xhr.onerror = function() {
        console.error("Request failed");
    };
    xhr.send();
}

// save data in the database
function saveData() {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://springbootmongodbrestapi.up.railway.app/api/v1/employees", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function() {
        console.log(xhr.status)
        if (xhr.status === 201) {
            var result = JSON.parse(xhr.responseText);
            console.log(result);
        } else {
            var result = JSON.parse(xhr.responseText);
            console.error(result.message, result.data);
        }
    };
    xhr.onerror = function() {
        console.error("Request failed");
    };
    var data = JSON.stringify({
        "name": "Vijyanand",
        "mobile": 89462584545,
        "salary": 50000
    });
   
    xhr.send(data);
}

function saveMultipleData() {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://springbootmongodbrestapi.up.railway.app/api/v1/employees/many", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function() {
        if (xhr.status === 201) {
            var result = JSON.parse(xhr.responseText);
            console.log(result);
        } else {
            console.error("Error saving multiple data");
            var result = JSON.parse(xhr.responseText);
            console.error(result.message, result.data);
        }
    };
    xhr.onerror = function() {
        console.error("Request failed");
    };
    var data = JSON.stringify([
        {
            "name": "abcd",
            "mobile": 98716312254,
            "salary": 525525
        },
        {
            "name": "pqrs",
            "mobile": 986256131265,
            "salary": 865132
        }
    ]);
    xhr.send(data);
}

function updateDataById() {
    var xhr = new XMLHttpRequest();
    xhr.open("PATCH", "https://springbootmongodbrestapi.up.railway.app/api/v1/employees/66db632b8706623ccd625c0a", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function() {
        console.log(xhr.status)
        if (xhr.status === 200) {
            var result = JSON.parse(xhr.responseText);
            console.log(result);
        } else {
            console.error("Error updating data");
        }
    };
    xhr.onerror = function() {
        console.error("Request failed");
    };
    var data = JSON.stringify({
        "name": "Vijyanand",
        "mobile": 46513265321,
        "salary": 7946412
    });
    xhr.send(data);
}

function updateData() {
    var xhr = new XMLHttpRequest();
    xhr.open("PUT", "https://springbootmongodbrestapi.up.railway.app/api/v1/employees", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function() {
        if (xhr.status === 200) {
            var result = JSON.parse(xhr.responseText);
            console.log(result);
        } else {
            console.error("Error updating data");
        }
    };
    xhr.onerror = function() {
        console.error("Request failed");
    };
    var data = JSON.stringify({
        "_id": "66db33746f77b902741062f3",
        "name": "Vijyanand",
        "mobile": 46513265321,
        "salary": 897465132
    });
    xhr.send(data);
}

function fetchDataByName() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://springbootmongodbrestapi.up.railway.app/api/v1/employees/name/pqrs", true);
    xhr.onload = function() {
        if (xhr.status === 302) {
            var result = JSON.parse(xhr.responseText);
            console.log(result);
         
        } else {
            var result = JSON.parse(xhr.responseText);
            console.error("Data Not Found");
            console.error(result);
        }
    };
    xhr.onerror = function() {
        console.error("Request failed");
    };
    xhr.send();
}

function fetchDataByMobile() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://springbootmongodbrestapi.up.railway.app/api/v1/employees/mobile/9644708454", true);
    xhr.onload = function() {
        if (xhr.status === 302) {
            var result = JSON.parse(xhr.responseText);
            console.log(result);
        } else {
            var result = JSON.parse(xhr.responseText);
            console.error("Data Not Found");
            console.error(result);
        }
    };
    xhr.onerror = function() {
        console.error("Request failed");
    };
    xhr.send();
}

function fetchDataBySalary() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://springbootmongodbrestapi.up.railway.app/api/v1/employees/salary/500000", true);
    xhr.onload = function() {
        if (xhr.status === 302) {
            var result = JSON.parse(xhr.responseText);
            console.log(result);
        } else {
            var result = JSON.parse(xhr.responseText);
            console.error("Data Not Found");
            console.error(result);
        }
    };
    xhr.onerror = function() {
        console.error("Request failed");
    };
    xhr.send();
}

function deleteDataById() {
    var xhr = new XMLHttpRequest();
    xhr.open("DELETE", "https://springbootmongodbrestapi.up.railway.app/api/v1/employees/66db632b8706623ccd625c0a", true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            var result = JSON.parse(xhr.responseText);
            console.log(result);
        } else {
            var result = JSON.parse(xhr.responseText);
            console.error("Data Not Found");
            console.error(result);
        }
    };
    xhr.onerror = function() {
        console.error("Request failed");
    };
    xhr.send();
}

// Uncomment the function calls to test
fetchAll();
// saveData();
// saveMultipleData();
// updateDataById();
// updateData();
// fetchDataByName();
// fetchDataByMobile();
// fetchDataBySalary();
// deleteDataById();
