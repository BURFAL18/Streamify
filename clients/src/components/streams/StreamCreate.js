import React from "react";
import {Field , reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {createStream} from'../../actions';

class StreamCreate extends React.Component
{
    renderError({error, touched})
    {
        if(touched && error)
        {
            return (
             <div className="ui error message">{error}
             {touched}
             </div>
            );
        }
    }
    renderInput=({input, label,meta}) =>
    {
        const className= `field $(meta.error && meta.touched? 'error': '' )`
     return (
         <div className={className}>
         <label>{label}</label>
         <input {...input} autoComplete="off" />
         {this.renderError(meta)}
         </div> 


         );
    }
onSubmit=(formValues) =>
{
    this.props.createStream(formValues);
}

   render()
   {
       
    return (
    <form onSubmit={this.props.handleSubmit(this.onSubmit)} 
      className="ui form error">

        <Field name="title" 
            component={this.renderInput}
             label="Enter Title"/>

        <Field name="description" 
              component={this.renderInput}
               label ="Enter description"
        />
        <button className="ui button primary"> Submit</button>
     </form>
     );
   }
}
const validate =formValues =>
{
    const errors  ={};

    if(!formValues.title)
    {
        errors.title =" Please enter a Title ";
    }
    if(!formValues.description)
    {
        errors.title ="Please enter a Description ";
    }
    return errors;
}

const formWrapped = reduxForm({
    form:'StreamCreate',
    validate
})(StreamCreate);


export default connect(null,{createStream})(formWrapped);