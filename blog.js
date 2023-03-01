export function addToListDialog(){
    const addBtn = document.getElementById('addBtn');
    const addToListDialog = document.getElementById('addToListDialog');
    addBtn.addEventListener('click', () => {
        addToListDialog.showModal();
    });
}