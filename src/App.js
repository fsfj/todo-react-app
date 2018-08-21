import React, { Component } from 'react';
import './App.css';
import Todos from './components/todos/Todo';

import axios from 'axios';

import { Layout } from 'antd';
import { BrowserRouter } from 'react-router-dom'
const { Header, Footer, Content } = Layout;

axios.defaults.baseURL = "http://localhost:4000";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout style={{ minHeight: '100vh' }}>
          <Header>
            <h1 style={{ color: 'white', padding: 12, margin: 0 }}>Todos</h1>
          </Header>
          <Content style={{ padding: 24, margin: 0, minHeight: 280 }}>
            <Todos/>
          </Content>
          <Footer></Footer>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
