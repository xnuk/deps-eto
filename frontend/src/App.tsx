import { Route, Routes } from 'react-router';

import { ModalProvider } from './components/modal/ModalProvider.tsx';
import Mainpage from './pages/mainpage/Mainpage.tsx';

function App() {
  return (
    <ModalProvider>
      <Routes>
        <Route path='/' element={<Mainpage />}>
          <Route path='/signup' />
          <Route path='/signin' />
        </Route>
      </Routes>
    </ModalProvider>
  );
}

export default App;
