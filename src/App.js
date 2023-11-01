import logo from './logo.svg';
import './App.css';
import Telefono from "./assets/Telefonos.mp3";
import Disparos from "./assets/disparos.mp3";
import Besame from "./assets/BesameMucho.mp3";
import PuertayPasos from "./assets/PuertayPasos.mp3";
import Bomba from "./assets/bomba.mp3";
import Disparo from "./assets/Disparo2.mp3";
import Silvido from "./assets/Silbido.mp3";
import Campanita from "./assets/Campanitas.mp3";
import DisparosFX from "./assets/DisparosFX.mp3";
import puertaAbriendose from "./assets/puertaAbriendose.mp3";
import Pasos from "./assets/Pasos.mp3";
import Escena1 from "./assets/Escena1.mp3";
import Escena2 from "./assets/Escena2.mp3";
import Escena3 from "./assets/Escena3.mp3";
import Escena4 from "./assets/Escena4.mp3";
import Escena5 from "./assets/Escena5.mp3";
import Escena6 from "./assets/Escena5.mp3";
import Escena7 from "./assets/Escena7.mp3";
import Escena8 from "./assets/Escena7.mp3";
import ButtonSound2 from './components/ButtonSound2';
import ButtonSound from './components/ButtonSound'; 


function App() {
  return (
    
    <div className="flex flex-col mb-16">
        <div className="w-full text-center">
          <h2 className="font-semibold  text-xl mb-4">Musica entre escena 1 y 2</h2>
          <ButtonSound soundName={Escena1} />
          <h1 className="font-bold underline text-2xl mb-4">Escena 1</h1>
        </div>
        <h4 className="font-semibold text-xl m-4">Telefonos de oficina</h4>
        <ButtonSound2 soundName={Telefono} />
         <h4 className="font-semibold text-xl m-4">Disparos</h4>
        <ButtonSound soundName={Disparos} />
        <h4 className="font-semibold text-xl m-4">Besame Mucho</h4>
        <ButtonSound soundName={Besame} />
        {/* <h4 className="mx-4">Puerta y pasos</h4>
        <ButtonSound soundName={PuertayPasos} /> */}
        <h4 className="font-semibold text-xl m-4">Puerta abriendose</h4>
        <ButtonSound soundName={puertaAbriendose} />
        <h4 className="font-semibold text-xl m-4">Pasos</h4>
        <ButtonSound soundName={Pasos} />

        <div className="w-full text-center">
        <h2 className="font-semibold  text-xl my-4">Musica entre escena 2 y 3</h2>
          <ButtonSound soundName={Escena2} />
        </div>

        <div className="w-full text-center">
        <h2 className="font-semibold  text-xl my-4">Musica entre escena 3 y 4</h2>
          <ButtonSound soundName={Escena3} />
        </div>

        <div className="w-full text-center">
        <h2 className="font-semibold  text-xl my-4">Musica entre escena 4 y 5</h2>
          <ButtonSound soundName={Escena4} />
        </div>

        <div className="w-full text-center">
        <h2 className="font-semibold  text-xl my-4">Musica entre escena 5 y 6</h2>
          <ButtonSound soundName={Escena5} />
        </div>

        <div className="w-full text-center">
          <h1 className="font-bold underline text-2xl my-4">Escena 6</h1>
        </div>
        <h4 className="font-semibold text-xl m-4">Disparo accidental</h4>
        <ButtonSound soundName={Disparo} />

        <div className="w-full text-center">
        
        <h2 className="font-semibold  text-xl my-4">Musica entre escena 6 y 7</h2>
          <ButtonSound soundName={Escena6} />
        
          <h1 className="font-bold underline text-2xl my-4">Escena 7</h1>
        </div>
        <h4 className="font-semibold text-xl m-4">Telefonos de oficina</h4>
        <ButtonSound2 soundName={Telefono} />
        <h4 className="font-semibold text-xl m-4">Disparos</h4>
        <ButtonSound soundName={Disparos} />
        <h4 className="font-semibold text-xl m-4">Disparos Locos</h4>
        <ButtonSound soundName={DisparosFX} />
        <h4 className="font-semibold text-xl m-4">Besame Silbido</h4>
        <ButtonSound soundName={Silvido} />
        
        <div className="w-full text-center">
        <h2 className="font-semibold  text-xl my-4">Musica entre escena 7 y 8</h2>
          <ButtonSound soundName={Escena7} />
          <h1 className="font-bold underline text-2xl my-4">Escena 8</h1>
        </div>
        <h4 className="font-semibold text-xl m-4">Besame mucho con volumen</h4>
        <ButtonSound2 soundName={Besame} />
        <h4 className="font-semibold text-xl m-4">Campanita</h4>
        <ButtonSound soundName={Campanita} />
        <h4 className="font-semibold text-xl m-4">Bomba</h4>
        <ButtonSound soundName={Bomba} className='mb-16' />

        <h2 className="font-semibold  text-xl m-4">Musica FINAL</h2>
          <ButtonSound soundName={Escena8} />
      </div>
  );
}

export default App;
