// import React from 'react';
// import './App.css';
// import CardList from './components/CardList/CardList';
// import card from './components/Card/Card';
// import SearchBox from './components/SearchBox/SearchBox';

// class App extends React.Component {
//   constructor(){
//     super();
// this.state = {
//   monsters:[],
//   searchField: ''
// }
//   }

// componentDidMount(){
//   fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json())
//   .then(users = this.setState({
//     monsters:users
//   }));
// }



//   render(){
//     const {monsters, searchField} = this.state;
//     const filteredMonsters = monsters.filter(monster => 
//       monster.name.toLowerCase().includes(searchField.toLowerCase())
//       );
      
//   return (
//     <div className="App">
//   <SearchBox 
//   handleChange={e => this.setState({searchField:e.target.value})}
//   placeholder='search for bliss'
//   />
//       <CardList monsters={filteredMonsters} />
//       </div>
//   );
// }
// }

// export default App;
