import '../bootcamps.scss';
import { useState } from 'react';

function Exercise3() {

    const [theme, setTheme] = useState('darktheme')

    return (
        <div>

        <div className={theme} id='text'>
            This is dark theme
        </div>

        <div>
        <button onClick={()=>
            {if(theme==='darktheme') {
                setTheme('lighttheme');
                var elem = document.getElementById('text');
                elem.innerHTML = "This is light theme";
            }
            else{
                setTheme('darktheme')
                elem = document.getElementById('text');
                elem.innerHTML = "This is dark theme";

            }}}>
            Change Themes</button>
        </div>
        
        </div>
    )
}

export default Exercise3;