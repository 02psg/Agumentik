import React, { useState } from 'react'
import "./MainComponent.css"
const MainComponent = () => {
    const [imageSrc, setImageSrc] = useState('https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA3L3JvYl9yYXdwaXhlbF9zdHVkaW9fcGhvdG9fb2ZfYV9mcmVuY2hfYnVsbGRvZ19sb29raW5nX2F0X3RoZV9jYV9mYzM1NTcxYS03NzRmLTQzOWYtYmFiYS0yNjZkMDFhM2ViMDAtNXgtaHEtc2NhbGUtNV8wMHgtam9iMTg5NF8xLnBuZw.png');
    function click2() {
        setIsClicked(true);
        setImageSrc("https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg");
    }
    function click1() {
        setIsClicked(true);
        setImageSrc("https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA3L3JvYl9yYXdwaXhlbF9zdHVkaW9fcGhvdG9fb2ZfYV9mcmVuY2hfYnVsbGRvZ19sb29raW5nX2F0X3RoZV9jYV9mYzM1NTcxYS03NzRmLTQzOWYtYmFiYS0yNjZkMDFhM2ViMDAtNXgtaHEtc2NhbGUtNV8wMHgtam9iMTg5NF8xLnBuZw.png");
    }
    function click3(){
        setIsClicked(true);
        setImageSrc("https://t4.ftcdn.net/jpg/03/13/26/93/360_F_313269335_lstj465YW0IfLzpPOUfkpwTACl87vTaW.jpg");
    }

    const [isClicked, setIsClicked] = useState(false);
    return (
        <>
        
        <div className='container card.clicked '>
        <div>
            <div className="card card.clicked " style={{ width: '18rem' }} onClick={click1}>
                
                <div className="card-body">
                    <h5 className="card-title">Boards</h5>
                    <p className="card-text">
                        {/* {isClicked?} */}
                        Trello boards keep tasks organized and work moving forward. In a glance, see everything from “things to do” to “aww yeah, we did it!”</p>
                    &nbsp;&nbsp;</div>
            </div>
            <div className="card" style={{ width: '18rem' }} onClick={click2}>
                <div className="card-body">
                    <h5 className="card-title">Lists</h5>
                    <p className="card-text">
                    The different stages of a task. Start as simple as To Do, Doing or Done—or build a workflow custom fit to your team’s needs. There’s no wrong way to Trello.</p>
                    &nbsp;&nbsp;</div>
            </div>
            <div className="card" style={{ width: '18rem' }} onClick={click3}>
                <div className="card-body">
                    <h5 className="card-title">Cards</h5>
                    <p className="card-text">
                    The different stages of a task. Start as simple as To Do, Doing or Done—or build a workflow custom fit to your team’s needs. There’s no wrong way to Trello.</p>
                    &nbsp;&nbsp;</div>
            </div>
        </div>
        <div>
        <img src={imageSrc}/>
        </div>
        </div>
        </>

    )
}

export default MainComponent