
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';


// Styling
import { GlobalStyles } from "./components/styled/Global";
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './themes';

// Components
import CommentList from "./components/CommentList";
import NewCommentForm from "./components/NewCommentForm";

// Apollo client setup
const errorLink = onError(({graphqlErrors, networkError}) => {
  if(graphqlErrors) {
    graphqlErrors.map(({message, location, path}) => {
      alert(`Graphql error ${message}`);
      return message;
    })
  }
});

const link = from([
  errorLink,
  new HttpLink({uri: "http://localhost:8000/graphql"}),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});





function App() {


  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={defaultTheme}>
        
        <>
          <GlobalStyles  />
            <h1>Comment Section</h1>

            <CommentList />

            <NewCommentForm />

        </>
        
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
