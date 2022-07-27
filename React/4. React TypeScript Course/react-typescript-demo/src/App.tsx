import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import {Person} from './components/Person';
import { PersonList } from './components/PersonList';
import { Counter } from './components/state/Counter';
import { LoggedIn } from './components/state/LoggedIn';
import { User, User1 } from './components/state/User';
import { Status } from './components/Status';

function App() {

  const personName = {
    first : 'Sanjay!', 
    last : 'Marreddi'
  }

  const nameList = [
    { first: 'Sanjay', last: 'Marreddi'},
    { first: 'Rishabh', last: 'Tripathi'},
    { first: 'Nishant', last: 'Kumar'},
  ]

  return (
    <div className="App">
    {/* The advantage of using typescript is quite obvious here. If we are typing value of name which has diff type than string, It shows error.
    Also, when using props.__ Intellisense gives autocompletion. */}

      <Greet name="Sanjay" messageCount={20} isLoggedIn={true}></Greet>
      <Person name = {personName}></Person>
      <PersonList names = {nameList}></PersonList>
      <Status status='error'></Status>
      <Greet name="Nishant" isLoggedIn={true}></Greet>

      {/* Instead of passing as props inside the <>, Now we are passing data from App via children prop. */}
      <Heading>Placeholder text</Heading>

       {/* We are passing react components as children prop here. */}
      <Oscar> <Heading>
              Oscar goes to Leonardo Dicpario! 
             </Heading>
      </Oscar>

      <Button handleClick={(event, id) => {
        console.log("Button Clicked", event, id)
      }}></Button>

      {/* We are not caring about value here */}
      <Input value='' handleChange={event => console.log(event)}></Input>

      <Container styles = {{border: '1px solid black', padding: '1rem'}}></Container>

      <LoggedIn></LoggedIn>
      <User></User>
      <User1></User1>
      <Counter></Counter>
    </div>
  );

}

export default App;
