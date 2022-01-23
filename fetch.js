const getBtn = document.getElementById("get-btn");
const clearBtn = document.getElementById("clear-btn");

const getData = () => {
  const output = document.getElementById("output");

  output.innerHTML = "";

  fetch("https://jsonplaceholder.typicode.com/posts/", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      if (output.innerHTML == "") {
        let i = parseInt(document.getElementById("selector").value) - 1;
        if (i >= data.length) {
          let error = document.createElement("p");
          let errorText = document.createTextNode(
            "That entry does not exist. Total entries " + data.length
          );
          error.appendChild(errorText);
          output.appendChild(errorText);
        } else {
            let artTitle = document.createElement("h3");
            let title = document.createTextNode(data[i].title);
            artTitle.appendChild(title);
            output.appendChild(artTitle);
            let artContent = document.createElement("p");
            let content = document.createTextNode(data[i].body);
            artContent.appendChild(content);
            output.appendChild(artContent);
        }
      }
    })
    .catch((data) => {
      let error = document.createElement("p");
      let errorText = document.createTextNode("No data received");
      error.appendChild(errorText);
      output.appendChild(errorText);
    });
};

const clearData = () => {
  output.innerHTML = "";
};

getBtn.addEventListener("click", getData);
clearBtn.addEventListener("click", clearData);
