import { SpotifyPlaver } from "./SpotifyPlayer"

export const Myplaylist = () => {
    return(
        <div>
            <h1 className='title text-center mt-5'>My favorite songs</h1>
            <div className='d-flex align-items-center'>
                <input type='text' className='form-control' placeHolder='Ingrese el codigo 
                del album aqui...'></input >
                <div className='form-check ms-2'>
                    <input className='form-check-input' type='checkbox' />
                    <label className='form-check-label'>favorito</label>
                </div>
                <button className='btn btn-success ms-2'><i class="bi bi-plus-circlefill"></i>YES</button>
                <button className='btn btn-danger ms-2'><i class="bi bitrash"></i>NOt</button>
            </div>
            <div>
                <SpotifyPlaver url="" favorite={true}/>
            </div>
        </div>
    )
}