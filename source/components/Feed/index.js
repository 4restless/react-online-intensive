//Core
import React, { Component } from 'react';

//Components
import StatusBar from 'components/StatusBar';
import Composer from 'components/Composer';
import Post from 'components/Post';
import Spinner from 'components/Spinner';

//Instruments
import Styles from './styles.m.css';

export default class Feed extends Component {
    state = {
        posts: [
            { id: '1', comment: 'Hi all!', created: 1521521521521 },
            { id: '2', comment: 'I am here!', created: 1521521521522 },
        ],
        isSpinning: false,
    };

    render() {
        const { posts, isSpinning} = this.state;

        const postsJSX = posts.map((post) => {
            return (
                < Post
                    key = { post.id }
                    { ...post }
                />
            );
        });

        return (
            <section className = { Styles.feed }>
                <Spinner isSpinning = { isSpinning } />
                <StatusBar />
                <Composer />
                { postsJSX }
            </section>
        );
    }
}
