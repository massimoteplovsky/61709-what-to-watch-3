import React, {PureComponent} from 'react';

const withLoading = (Component) => {
  class WithLoading extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        loading: true
      };

      this.handleLoadingStatus = this.handleLoadingStatus.bind(this);
    }

    handleLoadingStatus(status) {
      this.setState({loading: status});
    }

    render() {
      const {loading} = this.state;

      return (
        <Component
          {...this.props}
          loading={loading}
          onChangeLoadingStatus={this.handleLoadingStatus}
        />
      );
    }
  }

  return WithLoading;
};

export default withLoading;
