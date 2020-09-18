import React, { useState } from 'react';
import Header from './components/Header';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import { light, dark } from './styles/themes';

function App() {
  const [theme, setTheme] = useState(light);

  const handleThemeSwitching = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Header toggleTheme={handleThemeSwitching} />
      </div>
    </ThemeProvider>
  );
}

export default App;
