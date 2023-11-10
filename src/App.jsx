import { CSVLink } from "react-csv";
import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [disabled, setDisabled] = useState(false);
  const [data, setData] = useState([{}]);
  const [loading, setLoading] = useState(false);

  const fetchData = async (event, done) => {
    if (!loading) {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://moviesdatabase.p.rapidapi.com/titles/x/upcoming",
          {
            headers: {
              "X-RapidAPI-Key": process.env.X_RapidAPI_Key,
              "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
            },
          }
        );
        setData(response.data.results);
        setLoading(false);
        done(true);
      } catch (error) {
        console.error(error);
        done(false);
      }
    }
  };
  const dataFromListOfUsersState = () => {
    return data;
  };

  return (
    <>
      <CSVLink
        data={dataFromListOfUsersState()}
        asyncOnClick={true}
        onClick={fetchData}
      >
        {loading ? "Loading csv..." : "Download me"}
      </CSVLink>
    </>
  );
}

export default App;
