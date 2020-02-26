import React, {PureComponent} from 'react';

const withActiveFilm = (Component) => {
  class WithActiveFilm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeFilm: null
      };

      this.handleActiveFilm = this.handleActiveFilm.bind(this);
    }

    handleActiveFilm(event, film) {
      event.preventDefault();
      this.setState({activeFilm: film});
    }

    render() {
      const {activeFilm} = this.state;

      return (
        <Component
          {...this.props}
          activeFilm={activeFilm}
          onChangeActiveFilm={this.handleActiveFilm}
        />
      );
    }
  }

  return WithActiveFilm;
};

export default withActiveFilm;
