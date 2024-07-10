import { SpotifyPlaver } from "./SpotifyPlayer"
import { useRef, useState } from "react";
import { v4 as uuid } from "uuid";


export const Myplaylist = () => {
    const [playlist, setplaylist] = useState( [{ id: uuid(), url: '33qkK1brpt6t8unIpeM2Oy', favorite: true }, 
        {id: uuid(), url: '0H6TddUF2M63ZSHGvhk5yy', favorite: true }, 
        {id: uuid(), url: '3fn4HfVz5dhmE0PG24rh6h', favorite: true }, 
        {id: uuid(), url: '0DQyTVcDhK9wm0f6RaErWO', favorite: true }]);
        
    const urlRef = useRef();
    const favoriteRef = useRef();
    const addSong = () => {
        const url = urlRef.current.value;
        const favorite = favoriteRef.current.checked;

        const newSong = {
            id: uuid(),
            url: url,
            favorite: favorite
        }

        playlist.push(newSong)
        console.log(playlist);
    }
    return(
        <div>
            <h1 className='title text-center mt-5'>My favorite songs</h1>
            <div className='d-flex align-items-center'>
                <input ref={urlRef} type='text' className='form-control' placeHolder='Ingrese el codigo 
                del album aqui...'></input >
                <div className='form-check ms-2'>
                    <input ref={favoriteRef} className='form-check-input' type='checkbox' />
                    <label className='form-check-label'>favorito</label>
                </div>
                <button className='btn btn-success ms-2'><i class="bi bi-plus-circlefill"></i>YES</button>
                <button className='btn btn-danger ms-2'><i class="bi bitrash"></i>NOt</button>
            </div>
            <div>
                <SpotifyPlaver url="" favorite={true}/>
            </div>
            <div>
                {
                    playlist.map (song => <SpotifyPlaver url={song.url} favorite={song.favorite} key= {song.id} />)
                }
            </div>
           
        </div>

    )
}