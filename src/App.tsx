import { AppProvider } from './provider/AppProvider';
import { AppRoutes } from './router/AppRoutes';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <AppRoutes />
      </div>
    </AppProvider>
  );
}
export default App;
