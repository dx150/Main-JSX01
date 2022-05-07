import img from './image/img.jpg';
import video from './video/video.mp4';
import './App.css';
import './style.css';

function App() {
  return (
    <div className="App">
      <div style ={{border:"solid 1px black", width:'100vw'}}>
          <img src={"/img.jpeg"} className = "my-profile" alt="my profile"/>
            <br/>
              <h1 className="title red">Dhafer Chrayti</h1>
            <br/>
            <div className="img-Container">
              <img src={img} className= "cover-photo" alt= "cover"/>     
            </div>
            
            <video className="Video-container"width={320} height={240} controls autostart autoplay>
              <source  type={"video/mp4"} src={video}/> 
            </video>
      </div>
    </div>
  );
}

export default App;
