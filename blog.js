let blogData = [];

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
        var textNode = document.createTextNode(`Post Title: ${postTitle} || Date: ${postDate} || Summary: ${summary} `)
        blogList.appendChild(textNode);
        blogList.appendChild(editButton);
        blogList.appendChild(deleteButton);
        document.getElementById("blogList").appendChild(blogList);
        blogData.push({
            postTitle: postTitle.value,
            postDate: postDate.value,
            summary: summary.value
        })

        deleteButton.addEventListener('click', () => {
            deleteMovieDialog.showModal();
            deleteMovieBtn.addEventListener('click', () => {
                blogList.remove(blogList)
            })
        })
        

        editButton.addEventListener('click', () => {
            editListDialog.showModal();
            saveChanges.addEventListener('click', () => {
                let newPostTitle = document.getElementById('newPostTitle').value;
                let newPostDate = document.getElementById('newPostDate').value;
                let newSummary = document.getElementById('newSummary').value;
                const newtextNode = document.createTextNode(`Post Title: ${newPostTitle} || Date: ${newPostDate} || Summary: ${newSummary} `)
                console.log("This is the textNode" + textNode);
                blogData.splice(textNode, 1, newtextNode)
                // let deletedNode = blogList.childNode[0];
                // let deletedNode = textNode;
                blogList.replaceChild(newtextNode, textNode);
                // blogList.removeChild(deletedNode);
                // blogList.appendChild(newtextNode);
                // textNode = newtextNode;
            }, {once: true})
        })
    })
}