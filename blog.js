export function addToListDialog(){
    const addBtn = document.getElementById('addBtn');
    const addToListDialog = document.getElementById('addToListDialog');
    const addToListBtn = document.getElementById('addToList')
    addBtn.addEventListener('click', () => {
        addToListDialog.showModal();
    });
    addToListBtn.addEventListener('click', () => {
        
    })
}