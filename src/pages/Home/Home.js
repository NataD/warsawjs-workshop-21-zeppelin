import React from 'react';
import {reduxForm, Field, formValueSelector} from 'redux-form';
import {connect} from 'react-redux';
import {required, length} from 'redux-form-validators';

//import from components as it has index.js that already has exported componenets
import {Input, InputGroup, CheckInput} from '../../components';

import {login} from '../../actions/user';

let Home = ({handleSubmit, termsCheckbox, invalid, loginUser}) => {
    const handleLogin = values => {
       loginUser(values);
    };


    return (
        <div className='display-flex'>
        <img className='flex-2' src='https://placehold.it/200x300' alt='example'/>
        <form className='flex-1'  onSubmit={handleSubmit(handleLogin)}>
            <Field name='username' component={Input} label='Your name' type='text' validate={[required()]}/>
            <Field name='password' component={Input} label='Your password' type='password' validate={[required(), length({minimum: 5})]}/>
            <Field name='termsCheckbox' component={CheckInput} label='Your name' type='checkbox'>
                I agree to Terms & Conditions
            </Field>
            <button type='submit' disabled={!termsCheckbox || invalid}>Submit</button>
        </form>
    </div>
    );
};



Home = reduxForm({
    form: 'LoginForm'
})(Home);

// const mapStateToProps = state => {
//
// };
// const mapDispatchToProps = {
//
// };

Home = connect(state => ({
    termsCheckbox: formValueSelector('LoginForm')(state, 'termsCheckbox'),
    initialValues: {
        termsCheckbox: false,
        // username: 'Nataliia'
    }

}), {
    loginUser: login
})(Home);


// Home = connect(mapStateToProps, mapDispatchToProps)(Home);

export default Home;
