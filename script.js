function getJokes() {
    fetch("https://api.chucknorris.io/jokes/random")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data.value)
            // document.getElementById("quotedisplay").innerHTML = (data.value);
        })

}


function getSmile() {
    fetch("https://api.giphy.com/v1/gifs/random?api_key=MavCmlpNDgYIrXMpW8kSYKy3DL28dytj&tag=smile")
        .then(function (response) {
            return response.json();
        })
        .then(function (smiley) {
            console.log(smiley.data.image_url)

            // document.getElementById("smiledisplay").innerHTML = (smiley.data.image_url)
        });
}

$(document).ready(function () {
    $("#smiledisplay").click(function () {
        let imgSrc;
        let imgId;
        $.ajax({
            url: "//api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=dog",
            type: "GET",
            dataType: "json",
            success: function (response) {
                imgSrc = response.data.image_url;
                imgId = response.data.id;
                console.log(response);
                $("#giphy-embed").attr("src", "https://giphy.com/embed/" + imgSrc);
                $("#tweetButton").attr("href", "https://giphy.com/gifs/" + imgId + "/tweet")
                return false;
            },
            error: function (e) {
                console.log("uh oh");
            }
        });
    });
});


