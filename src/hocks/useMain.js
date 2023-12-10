import React, { useState } from 'react';

function useMain() {
    const [auth, setAuth] = useState(false);
    const [token, setToken] = useState('');
    const [user, setUser] = useState();
    return {
        auth,
        token,
        user,
        setUser,
        setAuth,
        setToken
    }
}

export default useMain;