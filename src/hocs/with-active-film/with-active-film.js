import React, {PureComponent} from 'react';

const withActiveFilm = (Component) => {

  class WithActiveFilm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeFilm: null
      };

      this.handleActiveFilmChange = this.handleActiveFilmChange.bind(this);
    }

    handleActiveFilmChange(event, film) {
      event.preventDefault();
      this.setState({activeFilm: film});
    }

    render() {
      const {activeFilm} = this.state;

      return (
        <Component
          {...this.props}
          activeFilm={activeFilm}
          onChangeActiveFilm={this.handleActiveFilmChange}
        />
      );
    }
  }

  return WithActiveFilm;
};

export default withActiveFilm;
