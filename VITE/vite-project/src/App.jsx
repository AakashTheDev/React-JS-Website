import './App.css';
import logo1 from './assets/logo192.png'

function Header() {
  return (
  <div className='body'>
   <div className='Head'>
    <header className='Header'>
    <img src={logo1} className='Logo' alt='React Logo' />
    <a href="https://reactjs.org/"><h2 className='React'>Learn React</h2></a>
    <ul className='list'>
      <li>Home</li>
      <li>About</li>
      <li>Products</li>
      <li>Contact Us</li>
    </ul>
    <hr/>
    </header>
   </div>
  <div className='Content'>
    <h3>Introduction:</h3>
    <p className='para'>
         React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library
    for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) 
    and a community of individual developers and companies.[4][5][6] React can be used as a base in 
    the development of single-page, mobile, or server-rendered applications with frameworks like Next.js. 
    However, React is only concerned with state management and rendering that state to the DOM, so creating 
    React applications usually requires the use of additional libraries for routing, 
    as well as certain client-side functionality.
    </p>
    <img src={logo1} className='image' alt='React Logo' />
    <h3>React Development:</h3>
    <p className='demo'>To support React's concept of unidirectional data flow (which might be contrasted with AngularJS's bidirectional flow), the Flux architecture was developed as an alternative to the popular model–view–controller architecture. Flux features actions which are sent through a central dispatcher to a store, and changes to the store are propagated back to the view.[26] When used with React, this propagation is accomplished through component properties. Since its conception, Flux has been superseded by libraries such as Redux and MobX.[27]

Flux can be considered a variant of the observer pattern.[28]

A React component under the Flux architecture should not directly modify any props passed to it, but should be passed callback functions that create actions which are sent by the dispatcher to modify the store. The action is an object whose responsibility is to describe what has taken place: for example, an action describing one user "following" another might contain a user id, a target user id, and the type USER_FOLLOWED_ANOTHER_USER.[29] The stores, which can be thought of as models, can alter themselves in response to actions received from the dispatcher.

This pattern is sometimes expressed as "properties flow down, actions flow up". Many implementations of Flux have been created since its inception, perhaps the most well-known being Redux, which features a single store, often called a single source of truth.[30]</p><br/>
  </div>


  <div className='Footer'>
    <hr/>
    <h4>Our Services</h4>
    <ul>
      <li>REACT</li>
      <li>HTML</li>
      <li>CSS</li>
      <li>JAVASCRIPT</li>
    </ul>
  </div>
  
</div>
  );
}

/*\function Footer(){
  <div className='Footer'>
  <hr/>

  </div>
}*/
export default Header;
