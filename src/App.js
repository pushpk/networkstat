import logo from './logo.svg';
import './App.css';
import FixedMenuLayout from "./FixedMenuLayout/FixedMenuLayout";

import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
} from 'semantic-ui-react'

function App() {
  return (
    <div className="App">
     <FixedMenuLayout />
    </div>
  );
}

export default App;
