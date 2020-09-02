import React from 'react';

let ValueArray = ({change, val}) => {
    return <input type="text"  onChange={change} value={val?val:''}/>
}

export default ValueArray