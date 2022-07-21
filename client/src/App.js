


import { GlobalStyles } from "./styled/Global";
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './themes';


function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <>
      <GlobalStyles  />
        <h1>Comment Section</h1>
      </>
    </ThemeProvider>
  );
}

export default App;
