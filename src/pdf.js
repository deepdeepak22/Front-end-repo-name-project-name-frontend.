import React from 'react'
import Pdf from 'react-to-pdf'
const ref = React.createRef()
function PDF (props){
    return(
        <>
        <div className="post" ref={ref}>hi</div>
        <Pdf targetRef = {ref} filename ="post.pdf">
            {({toPdf}) => <button onClick={toPdf}>capture as PDF</button>}
        </Pdf>
        </>
        

    )
}

export default PDF;
