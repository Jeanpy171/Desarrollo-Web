

const obtenerGift = async() => {
    try{
        let gifSearch = document.getElementById('gifInput').value;
        console.log(gifSearch)
        const gifURL = `https://api.giphy.com/v1/gifs/random?api_key=JFxM4euCNTAHbogxeVRFErjY7WPPjv4r&tag=${gifSearch}`

        let response = await fetch(gifURL)

        if(!response.ok){
            throw new Error('Ha ocurrido un error al realizar la peticion')
        }

        let data = await response.json();
        console.log(data.data.images.downsized.url)

        let contenedorGif = document.getElementById('gif-container');
        contenedorGif.getElementsByTagName('img')[0].setAttribute("src", data.data.images.downsized.url)
    }
    catch(error){
        console.log('Error')
    }
}



function actualizarGif(){
    obtenerGift();
}