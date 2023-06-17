import React from 'react';
import './Header.css';
import { useState } from 'react';


const Header: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
      <header className="header">
        <h1>Header Component</h1>
        {isLoggedIn ? (
            <button onClick={() => setIsLoggedIn(false)}>ログアウト</button>
        ) : (
            <>
            <button>登録</button>
            <button>ログイン</button>
            </>
        )}
      </header>
    );
};

export default Header;
