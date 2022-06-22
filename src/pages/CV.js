import React from 'react';
import Lettre from './component/Lettre';
import TextCV from './component/TextCV';
export default function CV() {
  return (<div className='cv'>
 {/*   <div className='premier'> <Lettre /></div> */}
  <div className='deuxieme'> <TextCV />
  </div><Lettre/>
    </div>
  )
}
