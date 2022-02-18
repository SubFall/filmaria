import './style.css'
import { useEffect, useState} from "react";
import { useParams, useNavigate} from 'react-router-dom'
import api from "../../services/api";
import { toast } from 'react-toastify'

function Filme() {
    const { id } = useParams()
    const history = useNavigate()

    const [filme, setFilme] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect( () => {

        async function loadFilme() {
            const response = await api.get(`r-api/?api=filmes/${id}`)
            
            if(response.data.length === 0) {
                //tentou acessar com um ID que não existe, navego ele para Home
                history('/')
                return
            }

            //console.log(response.data)
            setFilme(response.data)
            setLoading(false)
        }

        loadFilme()

        return () => {
            console.log('Componente desmontado')
        }
        
    },[])

    function salvaFilmes() {
        const minhaLista = localStorage.getItem('filmes')
        let filmesSalvos = JSON.parse(minhaLista) || []

        //se tiver algum filme salvo com esse mesmo id precisa igonar
        
        let hasFilme = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === filme.id )

        if(hasFilme){
            toast.error('Você já possui esse filme salvo')
            return
            //parar a execução
        }

        filmesSalvos.push(filme)
        localStorage.setItem('filmes',JSON.stringify(filmesSalvos))
        toast.success('Filme salvo com sucesso!')
    }

    if(loading === true) {
        return(
        <div className="filme-info">
            <h1>Carregando o Filme ...</h1>
        </div>
        )
    }
    return(
        <div className="filme-info">
         <h1>{filme.nome}</h1>
         <img src={filme.foto}/>

         <h3>Sinopse</h3>
         <p>{filme.sinopse}</p>

         <div>
             <button onClick={salvaFilmes}>Salvar</button>
             <button>
                 <a target='blank' href={`https://www.youtube.com/results?search_query=${filme.nome} Trailer`}>
                     Trailer
                 </a>
             </button>
         </div>
        </div>
    )
}

export default Filme