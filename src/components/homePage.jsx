import React from 'react';
import title from '../media/title.png'
import {Link} from'react-router-dom'



export default class homePage extends React.Component {

    render() {
        return (
            <div className={'home-background d-flex justify-content-center vw-100 vh-100 flex-wrap'}>
                <div className={'vw-100 d-flex justify-content-center animate__animated animate__bounceInDown'}>
                    <img src={title} className={'image-transition'}/>
                </div>
                <Link to={'/gamePage'} className={'btn home-button'}>Comenzar</Link>
            </div>
        );

    }
}