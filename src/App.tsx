import React from 'react';
import Header from './components/Header';
import Card from './components/Card';
import GlobalStyle from './styles/global';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { light, dark } from './styles/themes';
import usePersistedState from './utils/usePersistedState';
import { shade } from 'polished';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const handleThemeSwitching = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>

      <div className='App'>
        <GlobalStyle />
        <Header toggleTheme={handleThemeSwitching} />

        <div style={{
          boxSizing: 'border-box',
          overflow: 'auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          padding: '2%',
        }}>
          <h1 style={{
            color: theme.colors.color,
            margin: '12% 3% 2%'
          }}>
            Hi there.
          </h1>
          <p style={{
            color: shade(0.15, theme.colors.color),
            margin: '0 3% 10%',
            fontSize: '1.1rem'
          }}>
            I'm a theme switcher example, using ContextAPI
            <code style={{ color: theme.colors.secundary, margin: "0 5px 0 10px" }}>
              useContext()
            </code>and Styled Components.
          </p>

        </div>

        <div style={{
          boxSizing: 'border-box',
          overflow: 'auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '2%',
        }}>
          <Card />
        </div>

      </div>

    </ThemeProvider >
  );
}

export default App;
