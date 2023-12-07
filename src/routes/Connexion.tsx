import React, { useCallback, useState } from "react"
import { useNavigate } from "react-router-dom"


const Connexion = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")


    const handleEmailChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value)
        }, [])

    const handlePasswordChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(e.target.value)
        }, [])

    const handleConnexionClick = useCallback(
        async() => {
            try {
                const response = await fetch ('http://localhost:3333/api/auth/local/', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        "email": email,
                        "password": password
                    })
                });
                const data = await response.json();
                if(data.token){
                    console.log(data)
                    localStorage.setItem('token', data.token);
                    navigate('/home')
                }
                else {
                    console.log('bad identification infos');
                }
            } catch (error) {
                console.log('Erreur lors de la connexion', error)
            }
        }, [email, password])

        const handleLinkClick = useCallback(
            () => {
                navigate('/inscription')
            }, [navigate])

    return (
        <>
            <div className="connexion-container">
                <h1>Connexion</h1>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" onChange={handleEmailChange}/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" onChange={handlePasswordChange}/>
                <button onClick={handleConnexionClick}>Connexion</button>
                <div className="link" onClick={handleLinkClick}>S'inscrire</div>
            </div>
        </>
    )
}

export default Connexion