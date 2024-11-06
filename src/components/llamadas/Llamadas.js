
export default async function getPhotos() {
    try {
        const res = await fetch("https://greftom4.github.io/apiEstaticaProds/modelos.json",{cache: "force-cache"} );
        const data = res.json();
        return data
    }catch(error) {
        console.log("esto es un error", error);
    }
}