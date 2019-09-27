import React from 'react';
import logo from './logo.svg';
import './App.css';


// class App extends React.Component
// {
//   state={
//   title:'loding',
//   completed:'loading'
//   }
// componentDidMount(){
// fetch("https://jsonplaceholder.typicode.com/todos")
// .then(res=>res.json()).then(res1=>this.setState({  title:res1[0].title,
//   completed:res1[0].Completed}));
// }
//   render(){  return (
//       <div className="App">
//            <h1>Hello ReactJS from CBC</h1>
//             <h2>Status:{this.state.title}  Completed:{this.state.title}</h2>
//       </div>
//            );
//  }
// }

// const Emp=(props)=>{
// return(
//      <div>
//        <h1>Name:{props.name}</h1>
//        <h1>Designation:{props.desig}</h1>
//      </div>
//    )
//    }

// class Emp extends React.Component
// {
//   render(){
//   return(
//        <div>
//          <h1>Name:{this.props.name}</h1>
//          <h1>Designation:{this.props.desig}</h1>
//          <h1>Company:{this.props.children}</h1>
//
//        </div>
//      )
//      }
// }
class App extends React.Component
{
  state={
    name:'Ram',designation:'Developer'
      }
  changeState(n,d){
      this.setState({name:n,designation:d})
              }
  render()
  {
    return (
      <div className="App">
           <h2>{this.state.name}:{this.state.designation}</h2>
           <button onClick={()=>this.changeState('Nitin','CTT')}>Change State</button>
      </div>
           );
 }
}
// function App() {
// var random=Math.random()
//   return (
//     <div className="App">
//          <h1>Hello ReactJS</h1>
//          <h2>{random}</h2>
//     </div>
//   );
// }




export default App;
