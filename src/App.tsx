// - - - - - - - - - Local Files
// *** Cake View Component
import CakeView from "./features/cake/CakeView";
// *** Icecream View Component
import IcecreamView from "./features/icecream/IcecreamView";
// *** User View Component
import UserView from "./features/user/UserView";

// - - - - - - - - - App Compoennt
function App() {
  return (
    <div className="custom-container flex flex-col gap-10">
      <CakeView />
      <IcecreamView />
      <UserView />
    </div>
  );
}

export default App;
