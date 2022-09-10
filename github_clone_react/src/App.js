import "./App.css";
import RepoCard from "./components/RepoCard";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [reposData, setReposData] = useState([]);

  useEffect(() => {
    console.log("Call the Api ");
    axios("https://api.github.com/users/ayush8010720467/repos").then((resp) => {
      setReposData(resp.data);
    });
  }, []);

  // useEffect(() => {
  //   console.log("Call the Api ");
  //   // call api
  // });
  // useEffect(() => {
  //   console.log("Call the Api ");
  //   // call api
  // }, [age]);

  return (
    <div className="App">
      <ul>
        {reposData.map((repoData) => {
          return (
            <RepoCard
              name={repoData.name}
              language={repoData.language}
              description={repoData.description}
              updated_at={repoData.updated_at}
              svn_url={repoData.svn_url}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
