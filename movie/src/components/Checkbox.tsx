import React, { useState } from 'react';


const Checkbox:React.FC = () => {
    const [isChecked, setIsChecked] = useState(true);

    return (
        <div>
        <label htmlFor="check">
        </label>
        <input
            type="checkbox"
            id="check"
            checked={isChecked}
            onChange={() => setIsChecked(prevState => !prevState)}
        />
        </div>
    );
};

export default Checkbox;
