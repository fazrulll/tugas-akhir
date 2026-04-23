document.querySelectorAll("a[href^='#']").forEach(function(link) {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        let targetId = this.getAttribute("href").substring(1);
        let tujuan = document.querySelector('#' + targetId);
        if (tujuan) {
            tujuan.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
