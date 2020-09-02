import React from 'react';
import { Field, reduxForm } from 'redux-form';
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

class StreamForm extends React.Component{

    renderError(meta){
        if(meta.touched && meta.error){
            return {error:true,helperText:meta.error};
        }
        else{
            return {error:false,helperText: ""}
        }
    }

    renderInput = ({input,label,meta}) => {

        const err = this.renderError(meta);

        return (<TextField {...input}
                           {...err}
                           label={label}
                           required
                           style={{margin:'5px'}}
                           variant={"outlined"}
                           autoComplete="off"
        />);
    }


    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }

    render(){
        const classes={
            form:{
                margin:'10px',
            }
        };
        return(

            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Typography variant={"h4"}> {this.props.title} </Typography>
                <FormControl style={classes.form}>
                    <Field value={this.props.initialValues.title} name={"title"} component={this.renderInput} label="Title"/>
                    <Field value={this.props.initialValues.description} name={"description"} component={this.renderInput} label="Description"/>
                    <Button color={"primary"} type="submit" variant={"contained"}>Submit</Button>
                </FormControl>

            </form>

        );
    }
}

const validate = (formValues) => {
    const errors={};
    if(formValues.title === "CSS"){
        errors.title="Only programming languages pls";
    }
    return errors;
}

export default reduxForm({
    form: 'streamForm',
    validate
})(StreamForm);
