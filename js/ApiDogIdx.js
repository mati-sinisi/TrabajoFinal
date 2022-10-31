const searcHandler = ()=>{
    let input = document.getElementById('searchApi');
    let inputmin= input.value.toLowerCase()
    const divi= $("#imgapi");
    divi.empty()
    $.get( `https://dog.ceo/api/breed/${inputmin}/images`,(res)=>{
            if(inputmin == res.message[0].split("/")[4]){
               const img= document.getElementById('imgapi');
               let newimg = document.createElement("img");
               newimg.setAttribute("src", `${res.message[0]}`)
               img.appendChild(newimg)
            }
    })
}

$('#botonsito').click(searcHandler);

