

var mainContainer = document.getElementById("main");
      var input = document.querySelector(".todo_input");
      var addButton = document.querySelector(".add-item");

      addButton.addEventListener("click", function (e) {
        if (input.value.trim()) {
          var ulTag = document.createElement("ul");
          ulTag.classList.add("list-container");

          var todoList = document.createElement("div");
          todoList.classList.add("todo-list");

          var liTag = document.createElement("li");
          liTag.innerHTML = input.value;
          liTag.classList.add("todo-item");

          var buttonDiv = document.createElement("div");
          buttonDiv.classList.add("button");

          var editButton = document.createElement("button");
          editButton.classList.add("editBtn");
          editButton.innerHTML = "Edit";
          editButton.onclick = function () {
            editWorking(liTag);
          };

          var deleteButton = document.createElement("button");
          deleteButton.classList.add("deleteBtn");
          deleteButton.innerHTML = "Delete";

          ulTag.appendChild(todoList);
          todoList.appendChild(liTag);
          todoList.appendChild(buttonDiv);
          buttonDiv.appendChild(editButton);
          buttonDiv.appendChild(deleteButton);

          mainContainer.appendChild(ulTag);
          todoList.addEventListener("click", function (e) {
            var items = e.target;
            if (items.classList[0] === "deleteBtn") {
              var todo = items.parentElement;
              var todo2 = todo.parentElement;
              var todo3 = todo2.parentElement;
              todo3.classList.add("fall");
              todo3.addEventListener("transitionend", function () {
                todo3.remove();
              });
            }
          });
          input.value = "";
         
        } else if (input.value === "") {
          alert("please fill the input field");
        }
      });

      function editWorking(e) {
        var editValue = prompt("Edit the select Text", e.firstChild.nodeValue);
        e.firstChild.nodeValue = editValue;
      }