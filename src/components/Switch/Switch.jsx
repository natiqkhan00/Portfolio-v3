import React, { useState } from 'react'
import DarkModeToggle from 'react-dark-mode-toggle';

const Switch = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <DarkModeToggle
            onChange={setIsDarkMode}
            checked={isDarkMode}
            size={40}
        />
    )
}

export default Switch