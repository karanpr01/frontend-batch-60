import  { useEffect, useState } from 'react'
import Avatar from './module/Profile/Component/Avatar'
import Info from './module/Profile/Component/Info'

const App = () => {
    const [data,setData] = useState(null)

    useEffect(()=>{
        async function fetchUserDetails(username){
            const res = await fetch(`https://api.github.com/users/${username}`)
            const profilData = await res.json()
            setData(profilData)
        }

        fetchUserDetails("karanpr01")
    },[])
    console.log(data);
    
    return (
        <main className="flex flex-col justify-start items-center min-h-screen w-full  bg-zinc-900 py-24">
            <h1 className="text-5xl text-yellow-500 font-extrabold storke-2">Welcome to your Github Profile 🔥</h1>
            <Avatar imgUrl={data.avatar_url} Name={data.name}/>

            <div className='grid grid-cols-3 gap-4 w-full max-w-2xl'>
            <Info conut={data.following} title={"Followers"} />
            <Info conut={data.followers} title={"Following"} />
            <Info conut={data.public_repos} title={"Repos"} />
            </div>
        </main>
    )
}

export default App