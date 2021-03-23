import React, { useState } from 'react';

function functionCong() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [count, setCount ] = useState(0);
    return (
        <div>
            {count}
            <button onClick={() => setCount(count + 1)}>Cộng</button>
        </div>
    );
}

export default functionCong;