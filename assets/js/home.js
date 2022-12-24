(function () {

    crossAlreadySelectedItemsOnLoad();



    //on page load, if item is already checked from the last load of the page, line through it
    function crossAlreadySelectedItemsOnLoad() {
        let itemsCont = $('.items-cont .form-check-input');
        for (const key in itemsCont) {
            if (Object.hasOwnProperty.call(itemsCont, key)) {
                const element = itemsCont[key];
                // console.log(element);
                if ($(element).is(":checked")) {
                    $(element.nextElementSibling).addClass("selected");
                } else {
                    $(element.nextElementSibling).removeClass("checked");
                }
            }
        }
    }



    function addToDo() {

        $('#add-task').click(e => {

            e.preventDefault();

            if (!($('#todo-desc')[0].value) || !($('#dueDate')[0].valueAsDate)) {
                alert("Please fill all the fields");
                return;
            } else {
                let todo = {
                    todoDesc: $('#todo-desc')[0].value,
                    todoCategory: $('#todo-category')[0].selectedOptions[0].value,
                    todoDate: $('#dueDate')[0].valueAsDate ? $('#dueDate')[0].valueAsDate : "uncategorized"
                }

                $.ajax({
                    type: "POST",
                    url: '/create-todo',
                    data: todo,
                    success: function (response) {
                        //redirecting to main page from here.
                        // window.location.replace(response.url);
                    },
                    error: function (jqXhr, textStatus, errorMessage) {
                        console.log("Delete request Failed.");
                    }
                });

            }





        })

    }

    addToDo();



    //apply line through style on item when associated checkbox is clicked
    $('.items-cont').click(e => {
        // console.log(e.target.tagName);
        if (e.target.className == 'form-check-input') {

            if (e.target.checked) {
                $(e.target.nextElementSibling).addClass("selected");
            } else {
                $(e.target.nextElementSibling).removeClass("selected");
            }
        }
    });
})();

