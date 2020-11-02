import React from "react";
import {Field , reduxForm} from 'redux-form';
class StreamCreate extends React.Component
{
    renderInput()
    {
     return <div>Tittle , Name </div>;
    }
   render()
   {
       
    return (
    <form className= "ui table form">        
        <Field name="title" component={this.renderInput}/>
        <Field name="description" component={this.renderInput}/>
     </form>
     );
   }
}

export default reduxForm({
    form:'StreamCreate'
})(StreamCreate);