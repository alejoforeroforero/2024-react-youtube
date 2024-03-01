import YoutubePlayer from "./Components/YoutubePlayer";

import './App.css'
import { useEffect, useState } from "react";

function App() {

  const [video2, setVideo2] = useState(false);
  const [video3, setVideo3] = useState(false);

  useEffect(()=>{

    setTimeout(()=>{
      setVideo2(true)
    }, 5000)

    setTimeout(()=>{
      setVideo3(true)
    }, 10000)

  }, [])

  return (
    <>
      <div className="portada">
        <p>Scroll para llegar a los videos</p>
      </div>
      <YoutubePlayer youtubeVideoId={'Ke_53rCjS_U'} loop={false} />
      {video2 && <YoutubePlayer youtubeVideoId={'lJpvHXDkdDI'} loop={false} />}
      {video3 && <YoutubePlayer youtubeVideoId={'vuX_yqv-oAM'} loop={false}  />}
    </>
  )
}

export default App
