import React, { useState } from 'react'

const ClickCounter = () => {
    let [] = useState(0);
  return (
    <div>
        <button type='button'>Clicked X Times</button>
    </div>
  )
}

export default ClickCounter