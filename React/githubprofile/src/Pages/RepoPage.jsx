import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BeatLoader } from 'react-spinners';

function RepoPage() {
  const { username } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        const userData = await userRes.json();
        setUser(userData);

        const reposRes = await fetch(`https://api.github.com/users/${username}/repos`);
        const repoData = await reposRes.json();
        setRepos(repoData);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [username]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <BeatLoader color="blue" />
      </div>
    );
  }

  return (
    <div className="p-6 dark:bg-zinc-900 dark:text-white min-h-screen">
      {/* 🔙 Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
      >
        ← Back
      </button>

      <h1 className="text-3xl font-bold mb-2">{user.name || user.login}</h1>
      <p className="text-sm text-gray-400">@{user.login}</p>
      <p className="mt-2 mb-6">{user.bio}</p>

      <h2 className="text-2xl font-semibold mb-4">Public Repositories</h2>
      {repos.length === 0 ? (
        <p>This user has no public repositories.</p>
      ) : (
        <ul className="space-y-4">
          {repos.map((repo) => (
            <li key={repo.id} className="border p-4 rounded-md bg-white dark:bg-zinc-800">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-500"
              >
                {repo.name}
              </a>
              <p className="text-sm mt-1">{repo.description || 'No description'}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RepoPage;
