import React, {PureComponent} from "react";

const withSigninForm = (Component) => {
  class WithSigninForm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        formError: false,
        formMessage: ``,
        errorField: ``
      };

      this.handleFormMessageChange = this.handleFormMessageChange.bind(this);
    }

    handleFormMessageChange(msg, fieldName) {
      this.setState({
        formError: true,
        formMessage: msg,
        errorField: fieldName
      });
    }

    render() {
      const {
        formError,
        formMessage,
        errorField
      } = this.state;

      return (
        <Component
          {...this.props}
          formError={formError}
          formMessage={formMessage}
          errorField={errorField}
          onChangeFormMessage={this.handleFormMessageChange}
        />
      );
    }
  }

  return WithSigninForm;
};

export default withSigninForm;
