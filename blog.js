export function addToListDialog(){
    const addBtn = document.getElementById('addBtn');
    const addToListDialog = document.getElementById('addToListDialog');
    const addToListBtn = document.getElementById('addToList');
    
    addBtn.addEventListener('click', () => {
        addToListDialog.showModal();
    });
    
    addToListBtn.addEventListener('click', () => {
        const saveChanges = document.getElementById('saveChanges');
        const blogList = document.createElement("li");
        const deleteMovieDialog = document.getElementById('deleteMovieDialog');
        const deleteMovieBtn = document.getElementById('deleteMovie');
        let postTitle = document.getElementById('postTitle').value;
        let postDate = document.getElementById('postDate').value;
        let summary = document.getElementById('summary').value;
        var editButton = document.createElement("button");
        var deleteButton = document.createElement("button");
        editButton.innerHTML = "Edit";
        deleteButton.innerHTML = "Delete";
        const textNode = document.createTextNode(`Post Title: ${postTitle} || Date: ${postDate} || Summary: ${summary} `)
        blogList.appendChild(textNode);
        blogList.appendChild(editButton);
        blogList.appendChild(deleteButton);
        document.getElementById("blogList").appendChild(blogList);

        deleteButton.addEventListener('click', () => {
            deleteMovieDialog.showModal();
            deleteMovieBtn.addEventListener('click', () => {
                blogList.remove(blogList)
            })
        })
        

        editButton.addEventListener('click', () => {
            editListDialog.showModal();
            saveChanges.addEventListener('click', () => {
                const blogList = document.createElement("li");
                let postTitle = document.getElementById('postTitle').value;
                let postDate = document.getElementById('postDate').value;
                let summary = document.getElementById('summary').value;
                var editButton = document.createElement("button");
                var deleteButton = document.createElement("button");
                editButton.innerHTML = "Edit";
                deleteButton.innerHTML = "Delete";
                const textNode = document.createTextNode(`Post Title: ${postTitle} || Date: ${postDate} || Summary: ${summary} `)
            })
        })
    })
}