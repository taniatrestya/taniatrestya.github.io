function getSmile() {
    fetch("https://api.giphy.com/v1/gifs/random?api_key=MavCmlpNDgYIrXMpW8kSYKy3DL28dytj&tag=smile")
        .then(function (response) {
            return response.json();
        })
        .then(function (insertGif) {
            console.log(insertGif.data.image_url)
            let img = document.createElement('img')
            img.setAttribute("src", insertGif.data.image_url)
            let box = document.getElementById("smiledisplay")
            box.innerHTML = ""
            box.append(img)
        });
}
function getJokes() {
    fetch("https://api.chucknorris.io/jokes/random")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data.value)
            let container = document.getElementById("quotedisplay")
            container.innerHTML = ""
            container.append(data.value)

        })

}

