import { useEffect } from "react";

// Here is your key: b1639244

const API_URL = "http://www.omdbapi.com?apikey=b1639244";

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  };

  useEffect(() => {
      searchMovies("batman")
  }, []);

  return (
    <>
      <h1>App</h1>
    </>
  );
};

export default App;
