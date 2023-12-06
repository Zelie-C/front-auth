import { useCallback, useState } from "react"
import { useNavigate } from "react-router-dom"

const Inscription = () => {
    
    const navigate = useNavigate()
    const [username, setUsername] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const handleUsernameChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setUsername(e.target.value)
        }, [])

    const handleEmailChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value)
        }, [])

    const handlePasswordChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(e.target.value)
        }, [])

    const handleInscriptionClick = useCallback(
        async() => {
            try {
                const response = await fetch ('http://localhost:3333/users/register/', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        "username": username,
                        "email": email,
                        "password": password
                    })
                });
                const data = await response.json()
                console.log(data)
            } catch (error) {
                console.log('Erreur lors de la connexion', error)
            }
        }, [])

    const handleLinkClick = useCallback(
        () => {
            navigate('/connexion')
        }, [navigate])
    
    return (
        <>
        <div className="inscription-container">
            <h1>Inscription</h1>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" onChange={handleUsernameChange} />
            <label htmlFor="email">Email</label>
            <input type="text" name="email" onChange={handleEmailChange} />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" onChange={handlePasswordChange} />
            <button onClick={handleInscriptionClick}>S'inscrire</button>
            <div className="link" onClick={handleLinkClick}>Se connecter</div>
        </div>
        </>
    )
}

export default Inscription