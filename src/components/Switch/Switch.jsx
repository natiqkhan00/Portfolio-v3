import React from 'react'
import DarkModeToggle from 'react-dark-mode-toggle';

const Switch = ({ darkMode, setDarkMode }) => {

    return (
        <DarkModeToggle
            onChange={setDarkMode}
            checked={darkMode}
            size={40}
        />
    )
}

export default Switch
