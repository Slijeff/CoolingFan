import Fan from './Components/fan'
import StopButton from './Components/buttonStop'
import SlowButton from './Components/buttonSlow'
import MediumButton from './Components/buttonMedium'
import FastButton from './Components/buttonFast'

function App() {
  
  return (
    <div App className="flex justify-center min-h-screen items-center flex-col space-x-3 space-y-3">
      <p className="font-mono text-4xl">Cooling Fan</p>
      <p className="font-mono text-gray-400">by Jeffrey Hui</p>
      <Fan></Fan>
      <div id="buttons" className="flex justify-between items-center flex-row space-x-3">
        <StopButton/>
        <SlowButton></SlowButton>
        <MediumButton></MediumButton>
        <FastButton></FastButton>
      </div>
      
    </div>
  );
}

export default App;
