import './App.css';
import Container from './ItemsContainer/Container';
import Nav from './NavContainer/Nav';
import CardsContainer from './CardsContainer/CardsContainer';
import StoryContainer from './StoryContainer/StoryContainer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Container />
      <CardsContainer />
      <StoryContainer />
    </div>
  );
}

export default App;
