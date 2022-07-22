

// Styling
import { GlobalStyles } from "./components/styled/Global";
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './themes';

// Components
import CommentList from "./components/CommentList";
import NewCommentForm from "./components/NewCommentForm";


function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <>
      <GlobalStyles  />
        <h1>Comment Section</h1>

        <CommentList />

        <NewCommentForm />

      </>
    </ThemeProvider>
  );
}

export default App;
