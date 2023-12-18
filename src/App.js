import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div className="App">
      <h1>Esercizio con react</h1>
      <div className="BtnContainer">
        <ButtonComponent id="Clicca qui" style={{backgroundColor: "lightBlue", border: "none", padding: "0.5em", margin: "0.5em"}}/>
        <ButtonComponent id="Click here" style={{backgroundColor: "violet", border: "none", padding: "0.5em", margin: "0.5em"}} />
      </div>
      <div className="ImgContainer">
      <ImageComponent
        src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
        alt="photo"
        style = {{width: "30em", height: "10em", objectFit: "cover", margin: "3em", borderRadius: "1em"}}
      />
      <ImageComponent
        src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
        alt="photo"
        style = {{width: "30em", height: "10em", objectFit: "cover", margin: "3em", borderRadius: "1em"}}
      />
      </div>
    </div>
  );
}

export default App;
