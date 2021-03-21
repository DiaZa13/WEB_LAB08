import React from "react";
import background from '../../media/bck.png';
class Front extends React.Component {
    render() {
        return (
               <div className={'front'}>
                   <div className="card">
                       <img src={background} className="w-100 h-100"/>
                       <span className={'bi bi-grid-fill icon'}></span>
                   </div>
               </div>
        );
    }
};

export default Front;