import React, {PureComponent} from 'react';

const withActiveFilm = (Component) => {

  class WithActiveFilm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        filmID: -1
      };

      this.handleActiveFilmChange = this.handleActiveFilmChange.bind(this);
    }

    handleActiveFilmChange(event, filmID) {
      event.preventDefault();
      this.setState({filmID});
    }

    render() {
      const {filmID} = this.state;

      return (
        <Component
          {...this.props}
          filmID={filmID}
          onChangeActiveFilm={this.handleActiveFilmChange}
        />
      );
    }
  }

  return WithActiveFilm;
};

export default withActiveFilm;
