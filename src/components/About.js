import React from "react";
import {WEEK_1_2, WEEK_3_4} from '../data/course_content';
import mail from '../lambda/send-mail';

const About = () => {

    let weekList_1 = WEEK_1_2.map((item, index) => {
            return  <li key={`item_${index}`}>{item}</li>
    })

    let weekList_2 = WEEK_3_4.map((item, index) => {
        return  <li key={`item_${index}`}>{item}</li>
    })

    console.log('FROM_EMAIL_ADDRESS About: ', process.env.REACT_APP_FROM_EMAIL_ADDRESS)
    console.log('FROM_EMAIL_ADDRESS About2: ', process.env)
    console.log('FROM_EMAIL_ADDRESS About3: ', process)

    return (
        <main>
            <h1>Welcome to Web Development Course!</h1>
            <section className='week_container'>
            <h2>1st and 2nd week</h2>
            <ul>
                {weekList_1}
            </ul>
            </section>
            <section className='week_container'>
            <h2>3rd and 4-th week</h2>
            <ul>
                {weekList_2}
            </ul>
            </section>
            <button onClick={() => {mail.handler({message: 'my super message!'}).then(r => (console.log('red: ', r)))}}>Send mail</button>
        </main>
    );
};

export default About;
