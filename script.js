// Change content in right frame when clicking menu
function loadPage(page) {
    parent.frames['right'].location.href = page;
}

// Update status bar text
function updateStatus(message) {
    parent.frames['status'].document.body.innerHTML =
        "<div class='status'>" + message + "</div>";
}

// Example: attach events after load
window.onload = function () {
    const links = document.querySelectorAll("a[data-page]");
    
    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            
            let page = this.getAttribute("data-page");
            loadPage(page);
            updateStatus("Loaded: " + page);
        });
    });
};