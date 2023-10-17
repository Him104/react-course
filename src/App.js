import './App.css';
import ClassComponent from './classComponent';
import FunctionalComponent from './functionalComponent';
import ParentComponent from './parentComponent';
import UseState from './useState';
import  ParentClassComponent from './parentClassComponent';

function App() {
  return (
    <div ClassName="App">
      <ClassComponent/>
      <FunctionalComponent/>
      <ParentComponent/>
      <UseState/>
      <ParentClassComponent/>
    </div>
  );
}

export default App;
