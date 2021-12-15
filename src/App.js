import './App.css';

import { ThemeProvider } from './context/theme';
import Website from './components/AppContainer';

function App() {
  return (
    <ThemeProvider>
      <Website />
    </ThemeProvider>
  );
}

export default App;
