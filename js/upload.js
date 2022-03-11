function handleFiles(event) {
    var files = event.target.files;
    $("#src").attr("src", URL.createObjectURL(files[0]));
    document.getElementById("audio").load();
    for(var i=0; i<4; i++)  {
        allMusic.push({name: src[i], artist:src[i] ,src: src[i]})
         
}
}
window.addEventListener("change", handleFiles, false);

include('js\music-list.js')