import React from 'react';
import HeaderComponent from './components/Header/HeaderComponent';
import MainComponent from './components/Main/MainComponent';

// import {connect} from 'react-redux';

const App = () => {
  return (
    <div>
      <HeaderComponent />
      <MainComponent />
    </div>
  );
}

export default App;


//  class App extends React.Component {

//   render() {
//     console.log(this.props.message);
//     return (
//       <div>
//         Hello
//       </div>
//     );
//   }
// }


// const mapStateToProps = (state) => {
//   return {
//       message: state.message
//   };
// };

// export default connect(mapStateToProps)(App);
