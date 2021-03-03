import React, {Component} from 'react';
import MyName from './MyName';
import Counter from './Counter';
import PhoneForm from './components/PhoneForm';

class App extends Component {
  handleCreate = (data) => {
    console.log(data);
  }
  render() {
    return (
      // <MyName name="리액트" />
      // <Counter />
      <PhoneForm onCreate={this.handleCreate}/>
    );
  }
}

export default App;
