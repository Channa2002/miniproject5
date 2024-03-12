var arr = [
    {
        dp : "https://images.unsplash.com/photo-1593696954577-ab3d39317b97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
        story:"https://images.unsplash.com/photo-1578645635737-6a88e706e0f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D"
    },
    {
        dp : "https://images.unsplash.com/photo-1593696954577-ab3d39317b97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
        story:"https://images.unsplash.com/photo-1578645635737-6a88e706e0f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D"
    },
    {
        dp : "https://images.unsplash.com/photo-1593696954577-ab3d39317b97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
        story:"https://images.unsplash.com/photo-1578645635737-6a88e706e0f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D"
    },
    {
        dp : "https://images.unsplash.com/photo-1593696954577-ab3d39317b97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
        story:"https://images.unsplash.com/photo-1578645635737-6a88e706e0f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D"
    }

]

var clutter = "";
arr.forEach(function(elem,idx) {
    clutter += `<div class="story">
    <img src="${elem.dp}" alt="">
</div>`
});

document.querySelector("#stories").innerHTML = clutter;