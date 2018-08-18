import React, { Component } from 'react';
import './App.css';
import Todos from './components/todos/Todo';

import { Layout } from 'antd';
import Counter from './components/Counter';

const { Header, Footer, Content } = Layout;


class App extends Component {
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Header>
          <h1 style={{ color: 'white' }}>Todos</h1>
        </Header>
        <Content>
          <Todos/>
          <Counter/>
        </Content>
        <Footer></Footer>
      </Layout>
    );
  }
}

export default App;
