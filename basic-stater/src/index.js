import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentSection from './CommentSection';


const App = (props) => {
    return(
        <div className="ui container">
            <CommentSection
                imgage = {faker.image.avatar()}
                name={faker.name.firstName()}
                description={faker.lorem.sentence()}
                date1={"2nd aug"}
                rating = {faker.random.number()}
            />
            <CommentSection 
                imgage = {faker.image.avatar()}
                name={faker.name.firstName()}
                description={faker.lorem.sentence()}
                date1="2nd aug"
                rating = {faker.random.number()}
            />
            <CommentSection 
                imgage = {faker.image.avatar()}
                name={faker.name.firstName()}
                description={faker.lorem.sentence()}
                date1="2nd aug"
                rating = {faker.random.number()}
            />
            <CommentSection 
                imgage = {faker.image.avatar()}
                name={faker.name.firstName()}
                description={faker.lorem.sentence()}
                date1="2nd aug"
                rating = {faker.random.number()}
            />
            
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);


