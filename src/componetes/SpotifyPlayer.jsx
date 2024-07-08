export const SpotifyPlaver = (prop) =>{
    const urlSong = "https://open.spotify.com/embed/album/" + prop.url;
    const favorito = prop.favorito;
    

    if (favorito) {
        return (
            <div className="d-flex my-5" width="1000px">
                <iframe src={urlSong} width="100%" height="80" allow="autoplay; clipboard-write; 
                encrypted-media; fullscreen; picture-in-picture"></iframe>
                <button className="btn">
                    <i className="bi bi-start-fill"></i>
                </button>
            </div>
        )
    }

    else{
        return(
            <div className="d-flex my-5" width="1000px">
                <iframe src={urlSong} width="100%" height="80" allow="autoplay; clipboard-write; 
                encrypted-media; fullscreen; picture-in-picture"></iframe>
                <button className="btn">
                    <i className="bi bi-star"></i>
                </button>
            </div>
        )
    }
}