https://www.youtube.com/playlist?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3

By Mentor: "You can skip 25-37, 58-92 and after 104"

Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. 

React is an open source javascript library for building user interfaces. NOT A FRAMEWORK. 
It has rich ecosystem which can help us create full fledged web applications easily.

React is a project created and maintained by Facebook.
React has more than a 100 thousand stars on GitHub and a huge community behind it.
React has become increasingly popular among developers and is also one of the most sought out skill-sets by companies right now.
It can help in getting frontend job easily.

React has a component based architecture. This lets you break down your application into small encapsulated parts which can then be composed to make more complex UI. 

React is declarative. Tell react what you want & react will build the actual UI.

React will make it painless for you to create complex UIs by abstracting away the difficult parts. 

React will handle efficiently updating and rendering just the right components in your application when your data changes. 
DOM updates which is one of the more expensive operations is handled gracefully in React.

We can integrate react into any of your applications. Be it portion of page/complete page/entire app.
We can then dive into react_native for mobile applications if needed.

We are using ES6 in this course.

-> To create a simple app, we use `npx create-react-app ProjectName` & then go to that new directory & type `npm start`.
- Note that we are creating single page web apps ( The view can change in the single page dynamically in browser itself ). 
  The html file that gets rendered in the end is the one present in `public/index.html`. 
  We wont change the code here much. may be we might edit header tag but not inside body tag. React will control the UI. At the run time, React will take over the div tag with id as "root" & is responsible for the UI.
- App.js represents the view that we see in the browser.

- When we type `npm start`, The flow goes like this: 
  `public/index.html` gets served in the browser. The index.html contains the root DOM node -> 
  Next the control goes to `index.js`  -> then the reactDOM renders the app component on to the root DOM node. ->
  the app component contains the HTML which is ultimately displayed in the browser.

- The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page. The Document Object Model (DOM) is a programming API for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.

### Components:
- There are 5 main components. Header, footer, sidenav, maincontent, root(app) component.
- Components are `.js` files. They represent different parts of the webpage. 
- root component contains other 4 components. 
- App.js is a class component.

#### Functional components:

#### Class components:
- A class component can maintain a private Internal state. That is it can store some info. that is private to that component & use that info. to describe the user interface.

`The below details are in pdf 1.`
- Diff between functional & class
- Hooks
- JSX 

- props are immutable.

Note:  
European Computer Manufacturers Association (ECMAScript) or (ES) is a standard for scripting languages like JavaScript, ActionScript and JScript. It was initially created to standardize JavaScript, which is the most popular implementation of ECMAScript.


Binding Event Handlers: The reason we do this is purely becoz of the way "this" keyword works in JS. It is not because of how
React works!

- VIP: First name must be capital for the component names. Otherwise it wont work!!

-  APIs are used for fetching data from the server and using AJAX and API we call data asynchronously and show it in our HTML. You can make API requests by using browser build in fetch function or third party libraries like Axios.
- An Ajax call is an asynchronous request initiated by the browser that does not directly result in a page transition. 


- Babel is a tool that helps you write code in the latest version of JavaScript. When your supported environments don't support certain features natively, Babel will help you compile those features down to a supported version.