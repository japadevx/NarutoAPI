document.addEventListener('DOMContentLoaded', ()=>{
    const baseURL = "https://dattebayo-api.onrender.com/characters"

    async function getAPI (){
        try {
            const response = await fetch(baseURL);
            const data = response.json();
            console.log(data)

        } catch (err){                     
            throw new Error('Error encontrado: ', err)
        }
    }
    return getAPI();

})