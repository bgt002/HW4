export function alertDialog(){
    const alDialog = document.getElementById('alertDialog');
    showButton.addEventListener('click', () => {
        favDialog.showModal();
    });
}