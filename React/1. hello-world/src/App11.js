import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import List from './components/List';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';

function App() {
  return (
    <div className="App">
    <LifeCycleA></LifeCycleA> 

    
    <Form></Form>  
    <h1 className='error'>Error</h1>
    <h1 className= {styles.success}>Success</h1>

    <Inline></Inline>
    <Stylesheet primary={true}></Stylesheet>
    <List></List>  

    <UserGreeting></UserGreeting>
    
    <ParentComponent></ParentComponent>
   <EventBind></EventBind>
    <FunctionClick></FunctionClick>
    <ClassClick></ClassClick>

    <Counter></Counter> 
    <Message></Message>

      {/* Including the Greet component inside the App component. */}
      {/* In short this can be written as <Greet /> */}
      

      {/* 
      So, if we know what to send, we can use properties like name, heroname.
      If we want to send dynamic content, send between the component tags & use props.children inside the component definition
      to render to screen.
      */}
      <Greet name="Sanjay" heroname="super man"> <p> This is children props</p>  </Greet> 
      <Greet name="Swetha" heroname="wonder woman"> <button>Action</button> </Greet>    

      {/* Using props with class components */}
      <Welcome name="Sanjay" heroname="super man">  <p> This is children props</p> </Welcome>
      <Welcome name="Swetha" heroname="wonder woman"> <button>Action</button>  </Welcome>
  

      <Hello></Hello>

    </div>
  );
}

export default App;


{/* 
  
  Code given by default in the app created:

  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
      <h2>Hello World!!</h2>
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header> 

*/}



























