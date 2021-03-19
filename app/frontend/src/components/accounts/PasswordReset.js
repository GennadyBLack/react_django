import React, { Component } from "react";
import { reduxForm, Field, propTypes } from "redux-form";
import { renderField, renderError } from "../../utils/render_utils";
import { resetPassword } from '../../actions/auth'

class PasswordReset extends Component {

    static propTypes = {
        ...propTypes
    };

    render() {
        const { handleSubmit, error } = this.props;

        return (
            <div className="row justify-content-center">

                <form
                    className="col col-sm-4 card mt-5 p-2"
                    onSubmit={handleSubmit}
                >
                    <h4 className="text-md-center">Reset Your Password</h4>
                    <hr />

                    <fieldset className="form-group">
                        <Field name="email" label="Please enter your email" component={renderField}
                            type="text"
                        />
                    </fieldset>

                    <fieldset className="form-group">
                        {renderError(error)}
                        <button action="submit" className="btn btn-primary">Submit</button>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default reduxForm({
    form: "password_reset",
    onSubmit: resetPassword
})(PasswordReset);