import React from 'react';
import Post from "./components/Post";
import PostComments from './components/PostComments';

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://cdn.pixabay.com/photo/2022/11/29/11/30/lake-7624330_1280.jpg" alt="Imagem do Pixabay">
      Comente aqui sua experiencia nessa viagem
      </Post>
    </div>
  );
}

export default App;
