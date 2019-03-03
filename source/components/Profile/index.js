import React, { Component } from 'react';

//Components
import { withProfile } from '../HOC/withProfile';

//Instruments
import Styles from './styles.m.css';


export class Profile extends Component {
    render() {
        const {currentUserFirstName, currentUserLastName, avatar} = this.props;

        return (
            <section className = { Styles.profile }>
                <h1>Welcome, {currentUserFirstName} {currentUserLastName}</h1>
                <img
                    alt = ''
                    src = { avatar }
                />
            </section>
        );
    }
}

export default withProfile(Profile);
