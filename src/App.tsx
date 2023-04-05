import './App.css';
import Mapgl from './modules/map/Mapgl';
import { MapglContextProvider } from './modules/map/MapglContext';
import Sidebar from './modules/sidebar/Sidebar';
import ButtonOpenSidebar from './modules/sidebar/ButtonOpenSidebar';
import { Provider } from 'react-redux';
import { store } from './store';
import ModalWindow from './modules/sidebar/ModalWindow';

function App() {
  return (
    <Provider store={store}>
      <MapglContextProvider>
        <div>
          <div className='App-buttons'>
            <div className='App-button-item'>
              <ButtonOpenSidebar />
            </div>
          </div>

          <div className='App-map-container'>
            <Mapgl />
            <Sidebar />
            <ModalWindow />
          </div>
        </div>
      </MapglContextProvider>
    </Provider>
  );
}

export default App;
