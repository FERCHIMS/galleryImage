
export default async function getPhotos() {
    try {
        const res = await fetch("https://greftom4.github.io/apiEstaticaProds/modelos.json");
        const data = res.json();
        return data
    }catch(error) {
        console.log("esto es un error", error);
    }
}