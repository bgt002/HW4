export function alertDialog(){
    const alertBtn = document.getElementById('alertBtn');
    const alDialog = document.getElementById('alertDialog');
    alertBtn.addEventListener('click', () => {
        alDialog.showModal();
    });
}