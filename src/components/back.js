import React from "react";

class Back extends React.Component {
    render() {
        return (
           <div className={'back'}>
               <div className="card size align-items-center p-2 ml-3 mt-3">
                   <h1 className={'text-prymary'}>ALARM</h1>
                   <span className={'bi bi-alarm icon'}></span>
               </div>
           </div>
        );
    }
};

export default Back;