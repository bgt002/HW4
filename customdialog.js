export function alertDialog(){
    const alertBtn = document.getElementById('alertBtn');
    const alertDialog = document.getElementById('alertDialog');
    alertBtn.addEventListener('click', () => {
        alertDialog.showModal();
    });
}

export function confirmDialog(){
    const confirmBtn = document.getElementById('confirmBtn');
    const confirmDialog = document.getElementById('confirmDialog');
    confirmBtn.addEventListener('click', () => {
        confirmDialog.showModal();
    });
}

export function promptDialog(){
    const promptBtn = document.getElementById('promptBtn');
    const promptDialog = document.getElementById('promptDialog');
    promptBtn.addEventListener('click', () => {
        promptDialog.showModal();
    });
}