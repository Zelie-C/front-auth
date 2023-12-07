import { useEffect, useState } from "react"

interface IFreeGames {
    createdAt: string,
    description: string,
    id: number,
    name: string,
    updatedAt: string,
    urlimage: string
}

interface IOfficialGames {
    id: number,
    name: string,
    description: string,
    urlimage: string
    price: number,
    createdAt: string,
    updatedAt: string,
}

const Home = () => {

    const [freegames, setFreegames] = useState<IFreeGames[]>([])
    const [officialgames, setOfficialgames] = useState<IOfficialGames[]>([])

    useEffect(
        () => {
            const allFreeGames = async() => {
                try {
                    const response = await fetch('http://localhost:3333/api/free-games/')
                    const data = await response.json();
                    console.log(data)
                    if (Array.isArray(data)) {
                        setFreegames(data)
                      } else {
                        console.error('La réponse de l\'API ne correspond pas au format attendu.');
                      }
                } catch (error) {
                    console.log('erreur récupération jeux gratuits', error)
                }
            }
            allFreeGames()
        }, [])

        useEffect(
            () => {
                const allOfficialGames = async() => {
                    const token = localStorage.getItem('token')
                    console.log(token)
                    try {
                        const response = await fetch('http://localhost:3333/api/official-games/', {
                            headers: {
                                Authorization: `Bearer ${token}`
                            }
                        })
                        const data = await response.json()
                        setOfficialgames(data)
                        console.log(data)
                    } catch(error) {
                        console.log(error)
                    }
                }
                allOfficialGames()
            }, [])

    return (
        <>
            <div className="home-container">
                <h1>Accueil</h1>
                <div className="freegames-container">
                    <div className="freegames-title-container">
                        <h2>Jeux Gratuits</h2>
                    </div>
                    <div className="card-container">
                    {freegames.map(
                        (freegame) => (
                            <div key={freegame.id} className="card">
                                <img className="img" src={freegame.urlimage} alt={`image ${freegame.name}`} />
                                <h3>{freegame.name}</h3>
                                <p>{freegame.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="officialgames-container">
                    <div className="officialgames-title-container">
                        <h2>Jeux Payants</h2>
                    </div>
                    <div className="card-container">
                        {officialgames.map(
                            (officialgame) => (
                                <div key={officialgame.id} className="card">
                                    <img className="img" src={officialgame.urlimage} alt={`image ${officialgame.name}`} />
                                    <h3>{officialgame.name}</h3>
                                    <h4>{officialgame.price}</h4>
                                    <p>{officialgame.description}</p>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home