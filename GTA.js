document.getElementById("addButton").addEventListener("click", addNewCode);

fetch('http://localhost:3000/api/data')
.then(response => response.json())
.then(data => {
  // 'data' now contains the content of the JSON file as a JavaScript object
  currentData = data;
  document.getElementById("cheatNames").innerHTML = data["names"];
  document.getElementById("cheatCodes").innerHTML = data["codes"];
})
.catch(error => console.error('Error fetching data:', error));

function addNewCode() {
    let cheatName = document.getElementById("nombreclave").value;
    let cheatCode = document.getElementById("codigoclave").value;
    if (cheatName == "" || cheatCode == ""){
        alert("one of the filds is empty");        
    }
    else{
      updateJsonOnServer(`<span>${cheatName}</span>`, `<span>${cheatCode}</span>`);
    }
}

function updateJsonOnServer(cheatName, CheatCode) {
  fetch(`http://localhost:3000/updateJson?cheatName=${cheatName}&CheatCode=${CheatCode}`)
  .then ((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.text();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  })
}
