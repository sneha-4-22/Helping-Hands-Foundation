document.addEventListener('DOMContentLoaded', () => {
    const mess = e => {
        e.preventDefault();
        alert('Thank you for your donation!');
    };

    document.querySelector('.donation-form form').addEventListener('submit', mess);
});
window.confirm("Would like to donate ?")
