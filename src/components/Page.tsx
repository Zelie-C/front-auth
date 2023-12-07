import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

interface IPageProps {
    protectedPage: boolean;
    Content: React.FC;
}

const Page = ({protectedPage, Content}: IPageProps) => {

    const navigate = useNavigate()

    useEffect(() => {
        const getUserInfo = async() => {
            const token = localStorage.getItem('token')
            if(protectedPage) {
                const response = await fetch('http://localhost:3333/api/users/me/', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                const data = await response.json()
                if(!data) {
                    navigate('/connexion')
                }
            }
        }
        getUserInfo()
    }, [protectedPage])

    return (
        <div className=""></div>
    )
}

export default Page