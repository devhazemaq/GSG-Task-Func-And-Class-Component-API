import MainLayout from './components/MainLayout';
import Router from './router';


function App() {
  return (
    <div className="App">
      <MainLayout>
        <Router />
      </MainLayout>
    </div>
  );
}

export default App;
