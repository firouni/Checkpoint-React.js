import logo from './logo.svg';
import './App.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';

function PrefixesExample() {
  return (
    <>
      {/* Hint: inspect the markup to see how the classes differ */}
      <ThemeProvider prefixes={{ btn: 'my-btn' }}>
        <Button variant="primary">My Button</Button>
      </ThemeProvider>{' '}
      <Button bsPrefix="super-btn" variant="primary">
        Super button
      </Button>
    </>
  );
}

function App() {
  return (
    <Alert variant="success">
      <Alert.Heading>Hey, nice to see you</Alert.Heading>
      <p>
        Aww yeah, you successfully read this important alert message. This
        example text is going to run a bit longer so that you can see how
        spacing within an alert works with this kind of content.
      </p>
      <hr />
      <p className="mb-0">
        Whenever you need to, be sure to use margin utilities to keep things
        nice and tidy.
      </p>
    </Alert>
  );
}

<link
rel="stylesheet"
href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
crossorigin="anonymous"
/>
export default App;
