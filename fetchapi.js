


// fetch the data from the  server
function fetchAll() {

    fetch("https://springbootmongodbrestapi.up.railway.app/api/v1/employees", { method: "GET" })
        .then((response) => response.json())
        .then((result) => {
            result.data.map((d) => {
                console.log(d._id, d.name, d.mobile, d.salary);
            });
        })
        .catch((error) => console.error(error));
}



//save the data in the database
function saveData() {
    fetch("https://springbootmongodbrestapi.up.railway.app/api/v1/employees", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "name": "Vijyanand",
            "mobile": 46513265321,
            "salary": 50000
        })
    })
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
}


function saveMultipleData() {
    fetch("https://springbootmongodbrestapi.up.railway.app/api/v1/employees/many", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify([{
            "name": "abcd",
            "mobile": 9876531254,
            "salary": 525525
        },
        {
            "name": "pqrs",
            "mobile": 986513265,
            "salary": 865132
        }
        ])
    })
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
}

function updateDataById() {
    fetch("https://springbootmongodbrestapi.up.railway.app/api/v1/employees/66db33746f77b902741062f3", {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "name": "Vijyanand",
            "mobile": 46513265321,
            "salary": 7946412
        })
    })
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
}

function updateData() {
    fetch("https://springbootmongodbrestapi.up.railway.app/api/v1/employees", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "_id": "66db33746f77b902741062f3",
            "name": "Vijyanand",
            "mobile": 46513265321,
            "salary": 5784
        })
    }).then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
}

function fetchDataByName() {
    fetch("https://springbootmongodbrestapi.up.railway.app/api/v1/employees/name/Shivam%20Patanwar", {
        method: "GET"
    })
        .then((response) => response.json())
        .then((result) => {
            result.data.map((d) => {
                console.log(d._id, d.name, d.mobile, d.salary);
            });

        })
        .catch((error) => console.error(error));
}

function fetchDataByMobile() {
    fetch("https://springbootmongodbrestapi.up.railway.app/api/v1/employees/mobile/9644708454", {
        method: "GET"
    })
        .then((response) => response.json())
        .then((result) => {
            console.log(result.data._id, result.data.name, result.data.mobile, result.data.salary);


        })
        .catch((error) => console.error(error));
}

function fetchDataBySalary() {
    fetch("https://springbootmongodbrestapi.up.railway.app/api/v1/employees/salary/30000", {
        method: "GET"
    })
        .then((response) => response.json())
        .then((result) => {
            result.data.map((d) => {
                console.log(d._id, d.name, d.mobile, d.salary);
            });

        })
        .catch((error) => console.error(error));
}

function deleteDataById() {
    fetch("https://springbootmongodbrestapi.up.railway.app/api/v1/employees/66d95572d46a28772f35495e", {
        method: "DELETE"
    })
        .then((response) => response.json())
        .then((result) => {
            console.log(result.data._id, result.data.name, result.data.mobile, result.data.salary);
        })
        .catch((error) => console.error(error));
}




// fetchAll();
// saveData();
// saveMultipleData();
// updateDataById();
// updateData();
// fetchDataByName();
// fetchDataByMobile();
// fetchDataBySalary();
// deleteDataById();
