import '../bootcamps.scss';
import { useState } from 'react';

function Exercise3() {

    const [theme, setTheme] = useState('darktheme')

    return (
        <div>

        <div className='darktheme'>
            This is dark theme
        </div>

        <div>
        <button onClick={()=>setTheme('lighttheme')}>Change to Light Theme</button>
        </div>
        
        </div>
    )
}

export default Exercise3;