(function () {


    crossAlreadySelectedItemsOnLoad();

    //on page load, if item is already checked from the last load of the page, line through it
    function crossAlreadySelectedItemsOnLoad() {
        let itemsCont = $('.items-cont .form-check-input');
        for (const key in itemsCont) {
            if (Object.hasOwnProperty.call(itemsCont, key)) {
                const element = itemsCont[key];
                // console.log(element);

                // toggle the .selected class to apply style as per checkbox being ticked or unticked
                if ($(element).is(":checked")) {
                    $(element.nextElementSibling).addClass("selected");
                } else {
                    $(element.nextElementSibling).removeClass("checked");
                }
            }
        }
    }


    //handling add todo functionality
    function addToDo() {

        //attaching click event listener to the add todo button
        $('#add-task').click(e => {

            //e.preventDefault() is used to prevent form from being submitted by default click of the button
            e.preventDefault();

            //validations to see if the user has filled up the necessary fields
            if (!($('#todo-desc')[0].value) || !($('#dueDate')[0].valueAsDate)) {
                if (!($('#todo-desc')[0].value)) {
                    alert("Please fill todo description the fields");
                } else {
                    alert("Please fill the todo date");
                }
                return;
            } else {

                //organising the todo into a js object for sending it to backend in the POST request
                let todo = {
                    todoDesc: $('#todo-desc')[0].value,
                    //setting category as "uncategorized" if no category has been provided
                    todoCategory: $('#todo-category')[0].selectedOptions[0].value ? $('#todo-category')[0].selectedOptions[0].value : "uncategorized",
                    todoDate: $('#dueDate')[0].valueAsDate
                }

                //jquery ajax post reuqest to send the todo to be added
                $.ajax({
                    type: "POST",
                    url: '/create-todo',
                    data: todo,
                    success: function (response) {
                        //redirecting to main page from here.
                        window.location.replace(response.url);
                    },
                    error: function (jqXhr, textStatus, errorMessage) {
                        console.log("Post request Failed.");
                    }
                });

            }
        });
    }


    // handle deleting selected todos
    function deleteTodos() {

        //attaching click event listener to the add todo button
        $('#remove-task').click(e => {
            //e.preventDefault() is used to prevent form from being submitted by default click of the button
            e.preventDefault();

            //first iterating over the todos, storing only the ones that are checked into an array to send to the backend for deletion
            new Promise((resolve, reject) => {
                let itemsToDelete = [];
                let checkboxes = $('.todo-item input');
                for (const key in checkboxes) {
                    if (Object.hasOwnProperty.call(checkboxes, key)) {
                        const element = checkboxes[key];
                        if (element.checked) {
                            itemsToDelete.push(element.id);
                        }
                    }
                }
                resolve(itemsToDelete);
            }).then(itemsToDelete => {

                //items returned from the promise has the ids of the todos that are to be deleted
                $.ajax({
                    url: `/delete-todos`,
                    type: 'DELETE',
                    data: JSON.stringify(itemsToDelete),

                    //signifies that we are sending data in json format to the backend
                    contentType: 'application/json',
                    success: function (response) {
                        //redirecting to main page from here.
                        window.location.replace(response.url);
                    },
                    error: function (jqXhr, textStatus, errorMessage) {
                        console.log("Delete request Failed.");
                    }
                });
            });
        });
    }

    addToDo();

    deleteTodos();



    //apply line through style on item when associated checkbox is clicked
    $('.items-cont').click(e => {
        // console.log(e.target.tagName);
        if (e.target.className == 'form-check-input') {
            //toggling .selected class on the basis of the checkbox(s) being ticked or not
            if (e.target.checked) {
                $(e.target.nextElementSibling).addClass("selected");
            } else {
                $(e.target.nextElementSibling).removeClass("selected");
            }
        }
        //handle change todo category
        else if (e.target.tagName == 'SELECT') {
            // console.log(e.target);
            $(e.target).change((event) => {
                //get id of the selected todo
                // let todoToUpdateID = (e.target.id).split("-")[2];
                // console.log(todoToUpdate);
                //get the new category selected
                // let newCategory = event.target.selectedOptions[0].value;
                let dataToUpdate = {
                    todoToUpdateID: (e.target.id).split("-")[2],
                    newCategory: event.target.selectedOptions[0].value
                }

                // console.log(dataToUpdate);

                $.ajax({
                    type: 'PATCH',
                    url: `/update-todo-category?id=${dataToUpdate.todoToUpdateID}&newCategory=${dataToUpdate.newCategory}`,
                    success: function (response) {
                         //redirecting to main page from here.
                         window.location.replace(response.url);
                    },
                    error: function (result) {
                        console.log("Patch request Failed.");
                    }
                });

            });
        }

    });
})();

