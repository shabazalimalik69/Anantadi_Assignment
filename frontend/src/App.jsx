import axios from "axios";
import { useEffect, useState } from "react";
import GetVideos from "./Components/GetVideos";
import UploadVideo from "./Components/UploadVideos";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = () => {
    axios
      .get(`http://localhost:7600/getVideo`)
      .then((res) => {
        setVideos(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div>
        <UploadVideo getVideos={getVideos} />

        <GetVideos videos={videos} />
      </div>
    </>
  );
}

export default App;
