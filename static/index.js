// Handle form submission


let form = document.getElementById("file-form")
form.addEventListener("submit", function(e) {
    e.preventDefault();
    console.log("form submit");
    let file = document.querySelector('input[type="file"]');
    let data = new FormData();
    data.append("file", file.files[0]);
    fetch("/upload", {
        method: "POST",
        body:data
    })
    .then(response => function(r) {
        console.log(r);
    });
});
