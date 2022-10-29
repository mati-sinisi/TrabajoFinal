const searcHandler = ()=>{
    const input = document.getElementById('searchApi');
    const divi= $("imgapi");
    divi.empty()
    $.get( `https://dog.ceo/api/breed/${input.value}/images`,(res)=>{
            if(input.value == res.message[0].split("/")[4]){
               const img= document.getElementById('imgapi');
               let newimg = document.createElement("img");
               newimg.setAttribute("src", `${res.message[0]}`)
               img.appendChild(newimg)
            }
    })
}

$('#botonsito').click(searcHandler);