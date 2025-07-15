import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react';
import UserCard from '../Component/UserCard.jsx';
import { Toaster, toast } from "react-hot-toast";
import { BeatLoader } from "react-spinners";
import EmptyState from '../Component/EmptyState.jsx';

function App() {
  const [isDark, setIsDark] = useState(false)
  const [username, setUsername] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [data, setData] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim()) {
      toast.error("Please enter a username");
      return;
    }

    try {
      setIsPending(true);
      const res = await fetch(`https://api.github.com/search/users?q=${username}`);

      if (!res.ok) {
        if (res.status === 403) {
          throw new Error("API rate limit exceeded. Try again later.");
        } else {
          throw new Error(`GitHub error: ${res.status}`);
        }
      }

      const data = await res.json();

      if (!data.items || data.items.length === 0) {
        setData(null);
        toast.error("No user found");
        return;
      }

      setData(data.items);
      toast.success("User(s) found");
    } catch (error) {
      if (error.name === "TypeError") {
        toast.error("Network error. Please check your connection.");
      } else {
        toast.error(error.message || "Something went wrong");
      }
    } finally {
      setIsPending(false);
    }
  };


  console.log(data);



  useEffect(() => {
    // Onload Match System Preference
    const preferDark = window.matchMedia('(prefer-color-scheme:dark)').matches
    setIsDark(preferDark)
    document.documentElement.classList.toggle('dark', preferDark)
  }, [])

  const toggleDark = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle('dark', newTheme);
  }
  return (
    <div className='  dark:bg-zinc-900  dark:text-white transition-all duration-300 px-5 py-2'>
      <Toaster />
      <div className=' h-full w-full flex justify-center items-center p-5 gap-10'>
        <h1 className='text-center text-4xl  text-yellow-500 font-bold h-full w-full '>Github Profile Finder🔥</h1>
        <button
          onClick={toggleDark}
          className="px-5 py-2 bg-black text-white dark:bg-white dark:text-black rounded-lg shadow-md"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
      <div>
        <div className="flex flex-row gap-3 justify-center items-center pt-24 w-full">
          <form
            onSubmit={onSubmit}
            className="w-full flex flex-row gap-3 justify-center items-center"
          >
            <input
              type="text"
              placeholder="Enter Your Github Username"
              className="px-4 py-4 rounded-md border border-zinc-500 bg-black/90 text-white max-w-3xl w-full"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <button
              disabled={isPending}
              type="submit"
              className="px-4 py-4 rounded-md  bg-indigo-400 hover:bg-indigo-500 font-semibold text-white"
            >
              {isPending ? "Searching..." : "Search"}
            </button>
          </form>
        </div>
      </div>
      {isPending && (
        <div className="flex flex-row gap-3 justify-center items-center py-24 w-full">
          <BeatLoader color="blue" size={10} />
        </div>
      )}

      {data === null ? (
        <EmptyState
          imageSrc={"/empty.svg"}
          title={"No User Found"}
          description={"Please enter a valid username"}
        />
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-3 m-10 '>
          {
            data.map((data, index) => (
              <UserCard
                key={index}
                imgUrl={data.avatar_url}
                name={data.name}
                loginid={data.login}
                bio={data.bio || "No bio Available"}
                followers={data.followers}
                following={data.following}
                repos={data.public_repos}
              />
            ))
          }
        </div>
      )}

    </div>

  )
}

export default App
