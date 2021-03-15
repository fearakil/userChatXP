import React from 'react'
import ChatBox from './components/ChatBox';
import NavBar from './components/NavBar';
import ThemeContextProvider from './contexts/ThemeContext';

function App() {
  return (
      <div className='App'>
        <ThemeContextProvider>
         <NavBar />
          
          <ChatBox />
        </ThemeContextProvider>
      </div>

  );
}

export default App;
