import React from "react";
import background from '../media/bck.png';
class Front extends React.Component {
    render() {
        return (
            <div className={'front'}>
                <div className="card size align-items-center p-2 ml-3 mt-3">
                    <img src={background} className="card-image size"/>
                    <span className={'bi bi-grid-fill icon'}></span>
                </div>
            </div>
        );
    }
};

export default Front;