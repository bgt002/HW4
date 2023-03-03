// local storage for data inputted
let blogData = [];

/*
 All CRUD functions are created in here. All of the main functions are stored in here
 and are imported in crud.html.
*/
export function addToListDialog(){
    const addBtn = document.getElementById('addBtn');
    const addToListDialog = document.getElementById('addToListDialog');
    const addToListBtn = document.getElementById('addToList');
    
    // creates button icon element
    const addBtnIcon = document.createElement("i");

    // sets attribute for element
    addBtnIcon.setAttribute("class", "fa fa-plus");

    //prepends icon to add button, repeats for several other buttons below
    addBtn.prepend(addBtnIcon);

    const addToListIcon = document.createElement("i");
    addToListIcon.setAttribute("class", "fa fa-plus");
    addToListBtn.prepend(addToListIcon);

    
    addBtn.addEventListener('click', () => {
        addToListDialog.showModal();
    });

    // Event listener for add to list button
    addToListBtn.addEventListener('click', () => {
        const saveChanges = document.getElementById('saveChanges');
        const blogList = document.createElement("li");
        const deleteMovieDialog = document.getElementById('deleteMovieDialog');
        const deleteMovieBtn = document.getElementById('deleteMovie');

        //stores all the values into the variables
        let postTitle = document.getElementById('postTitle').value;
        let postDate = document.getElementById('postDate').value;
        let summary = document.getElementById('summary').value;
        var editButton = document.createElement("button");
        var deleteButton = document.createElement("button");
        editButton.innerHTML = " Edit";
        deleteButton.innerHTML = " Delete";

        // button icon
        const deleteBtnIcon = document.createElement("i");
        deleteBtnIcon.setAttribute("class", "fa fa-trash")
        deleteButton.prepend(deleteBtnIcon)
        const editBtnIcon = document.createElement("i");
        editBtnIcon.setAttribute("class", "fa fa-pencil");
        editButton.prepend(editBtnIcon);

        // creates a node for for the list
        var textNode = document.createTextNode(`Post Title: ${postTitle} || Date: ${postDate} || Summary: ${summary} `)

        // appends the created node, a new edit and delete button node.
        blogList.appendChild(textNode);
        blogList.appendChild(editButton);
        blogList.appendChild(deleteButton);

        //appends bloglist node to the bloglist list.
        document.getElementById("blogList").appendChild(blogList);
        
        blogData.push({
            postTitle: postTitle.value,
            postDate: postDate.value,
            summary: summary.value
        })

        // Event listener for delete button
        deleteButton.addEventListener('click', () => {
            deleteMovieDialog.showModal();
            // event listener to delete data
            deleteMovieBtn.addEventListener('click', () => {
                // deletes the item from the list that is selected and removes the data from local storage
                blogList.remove(blogList)
                blogData.splice(blogList)
            })
        })
        

        editButton.addEventListener('click', () => {
            editListDialog.showModal();
            saveChanges.addEventListener('click', () => {
                
                //new post variables to replace the old data
                let newPostTitle = document.getElementById('newPostTitle').value;
                let newPostDate = document.getElementById('newPostDate').value;
                let newSummary = document.getElementById('newSummary').value;
                const newtextNode = document.createTextNode(`Post Title: ${newPostTitle} || Date: ${newPostDate} || Summary: ${newSummary} `)

                //new data to be stored locally
                let newContent = {
                    postTitle: newPostTitle.value,
                    postDate: newPostDate.value,
                    summary: newSummary.value
                }

                //replaces old data with new data
                blogData.splice(blogList, 1, newContent)

                //stores and deletes the selected item from list to delete
                let deletedNode = blogList.childNodes[0];
                blogList.removeChild(deletedNode);

                //deleted other item
                let deletedNode1 = blogList.childNodes[1];
                blogList.removeChild(deletedNode1);

                //appends new data to the list where the old data was.
                blogList.appendChild(newtextNode);
                blogList.appendChild(editButton);
                blogList.appendChild(deleteButton);
            }, {once: true})
        })
    })
}