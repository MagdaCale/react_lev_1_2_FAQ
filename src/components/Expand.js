import { useState } from "react"

const Expand = () => {
    const [expand, setExpand] = useState(false)
    const [expand2, setExpand2] = useState(false)

    const btn = document.getElementsByTagName('button')

    const goBig = () => {
        setExpand(!expand)
        setExpand2(false)

        if(!expand){
            btn[0].innerHTML = '-'
        }else{
            btn[0].innerHTML = '+'
        }
        
        btn[1].innerHTML = '+'
    }

    const expandAgian = () => {
        setExpand2(!expand2)
        if(!expand2){
            btn[1].innerHTML = '-'
        }else{
            btn[1].innerHTML = '+'
        }
    }

    return(

        <section>
                <div className="frageDiv">
                    <p>Why is React great?</p>
                    <button onClick={goBig}>+</button>
                </div>

                <div className="antwortDiv" style={!expand ? {display: 'none'}:null} > 
                    <p>Fast Learning Curve</p>
                    <button onClick={expandAgian}>+</button>
                </div>
                <div className="textDiv" style={!expand2 ? {display: 'none'}:null} >
                    <p>React is very a simple and lightweight library that only deals with the view layer. It is not a beast like other MV* frameworks such as Angular or Ember. Any Javascript developer can understand the basics and start developing an awesome web application after only a couple of days reading tutorial.
                    As the React guide says 'Thinking in React' may be a little different than you used to since it brings a new approach to the table, but it will become much easier and natural as you gain experience with it.</p>
                </div>
        </section>
    )
}

export default Expand