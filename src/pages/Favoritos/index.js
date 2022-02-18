// Packages
import React, { useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

// Styles
import './index.css'

function Favoritos() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
    const myList = localStorage.getItem('filmes')

    setMovies(JSON.parse(myList) || [])
    },[])

    function handleDelete(id){
        const movieFilter = movies.filter((movie) => (movie.id !== id ))

        setMovies(movieFilter)

        localStorage.setItem('filmes', JSON.stringify(movieFilter))
        toast.success('Filme excluido com sucesso!')
    }

    const handleDeleteOnclick = (id) => () => handleDelete(id)

    return(
        <div id='meus-filmes'>
            <h1>Meus Filmes</h1>

            {movies.length ? (
                <ul>
                    {movies.map((movie) =>  (
                            <li key={movie.id}>
                                <span>{movie.nome}</span>

                                <div>
                                    <Link to={`/filmes/${movie.id}`}>Ver detalhes</Link>
                                    <button onClick={handleDeleteOnclick(movie.id)}>Excluir</button>
                                </div>
                            </li>
                        )
                    )}
                </ul>
            ) : (
                <span>Você não possui nenhum filme salvo!</span>
            )}
        </div>
    )
}

export default Favoritos
