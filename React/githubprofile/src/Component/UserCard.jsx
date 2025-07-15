import React from 'react'
import { useNavigate } from 'react-router-dom';

const UserCard = ({ imgUrl, name, loginid, bio, followers, following, repos }) => {
    const navigate = useNavigate();
    
  const handleViewRepos = () => {
    navigate(`/repos/${loginid}`);
  };
    return (
        <div className="flex flex-col justify-center items-center border rounded-md shadow-md  bg-white dark:bg-zinc-800 text-black dark:text-white p-6 transition-all">
            <div className='flex justify-center items-center gap-4 flex-wrap m-5'>
                <img src={imgUrl} alt="profile-img" width={140} className='rounded-full' />
                <div>
                    <h2 className='text-xl font-bold sm:text-2xl'>{name}</h2>
                    <p>@{loginid}</p>
                    <p>{bio}</p>
                </div>

            </div>
            <div className='flex justify-center items-center gap-2 flex-wrap m-5' >
                <div className='flex flex-col justify-center items-center'>
                    <span>{followers}</span>
                    <span>Followers</span>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <span>{following}</span>
                    <span>Following</span>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <span>{repos}</span>
                    <span>Public Repos</span>
                </div>
            </div>
            <div className='flex justify-center items-center m-10 flex-warp'>
                <button
                    onClick={handleViewRepos}
                    className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-4 py-2 mt-4">
                    ViewRepos
                </button>
            </div>

        </div>

    )
}

export default UserCard

// avatar_url,
// name
// login

// public_repos
// following
// :
// followers
// bio