

// Styling
import { GlobalStyles } from "./components/styled/Global";
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './themes';

// Components
import CommentList from "./components/CommentList";


function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <>
      <GlobalStyles  />
        <h1>Comment Section</h1>

        <CommentList />
      </>
    </ThemeProvider>
  );
}

export default App;
