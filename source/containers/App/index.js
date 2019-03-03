// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Redirect, Switch, Route } from 'react-router-dom';

//Components
import Feed from 'components/Feed';
import Profile from 'components/Profile';
import { Provider } from 'components/HOC/withProfile';
import StatusBar from 'components/StatusBar';

//Instruments
import avatar from 'theme/assets/lisa';
import Catcher from '../../components/Catcher';

const options = {
    avatar,
    currentUserFirstName: 'Игорь',
    currentUserLastName:  'Жорник',
};

@hot(module)
export default class App extends Component {
    render() {
        return (
            <Catcher>
                <Provider value = { options }>
                    <StatusBar />
                    <Switch>
                    <Route component = { Feed } path = '/feed' />
                    <Route component = { Profile } path = '/profile' />
                    </Switch>
                    <Redirect to = '/feed'/>
                </Provider>
            </Catcher>
        );
    }
}
