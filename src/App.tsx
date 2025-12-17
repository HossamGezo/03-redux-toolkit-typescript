// - - - - - - - - - Local Files
// *** Cake View Component
import CakeView from "./features/cake/cakeView";
// *** Icecream View Component
import IcecreamView from "./features/icecream/icecreamView";

// - - - - - - - - - App Compoennt
function App() {
  return (
    <div className="custom-container flex flex-col gap-10">
      <CakeView />
      <IcecreamView />
    </div>
  );
}

export default App;
