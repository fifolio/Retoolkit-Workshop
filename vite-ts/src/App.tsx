import "./App.css";
import { CakeView } from "./features/cake/CakeView";
import { IceCreamView } from "./features/icecream/IceCreamView";
import { UsersView } from "./features/user/UsersView";

function App() {
  return (
    <div className="App">
      <CakeView />
      <IceCreamView />
      <UsersView />
    </div>
  );
}

export default App;
