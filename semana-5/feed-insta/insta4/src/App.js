import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'AnaRaio'}
          fotoUsuario={'https://picsum.photos/200/151'}
          fotoPost={'https://picsum.photos/50/52'}
        />
        <Post
          nomeUsuario={'ZéTrovão'}
          fotoUsuario={'https://picsum.photos/50/52'}
          fotoPost={'https://picsum.photos/50/52'}
        />
      </div>
    );
  }
}

export default App;


