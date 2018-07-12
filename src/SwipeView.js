import React from 'react';
import SwipeableViews from 'react-swipeable-views';

const styles = {
    slide: {
        padding: 15,
        minHeight: 100,
        color: '#fff',
    },
    slide1: {
        background: 'blue',
    },
    slide2: {
        background: '#B3DC4A',
    },
    slide3: {
        background: '#6AC0FF',
    },
};

const SwipeView = () => (
    <SwipeableViews enableMouseEvents={true}>
        <div style={Object.assign({}, styles.slide, styles.slide1)}>
            <h1>This here is a blue swipeable slider window (hopefully)</h1>
        </div>
        <div style={Object.assign({}, styles.slide, styles.slide2)}>
            <h1>Phew, you made it to the next page! (Let's try again)</h1>
        </div>
        <div style={Object.assign({}, styles.slide, styles.slide3)}>
            <h1>Finally got this blasted thing to work!</h1>
        </div>
    </SwipeableViews>
);

export default SwipeView;