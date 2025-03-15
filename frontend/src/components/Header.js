import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1>Sala do Programdor</h1>
      <nav>
        <a href="/">Home</a><br/>
        <a href="/cursos">Cursos</a><br/>
        <a href="/livros">Livros</a><br/>
        <a href="/notas">Bloco de Notas</a><br/>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    background: '#282c34',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
  },
};

export default Header;