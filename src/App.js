import React, { Component } from 'react';
import { MfxLoadingScreen } from './components/MfxLoadingScreen';
import { MfxMovieList } from './components/MfxMovieList';
import { notification } from './lib/notification';
import { omdb } from './lib/omdb';
import './App.css';

class App extends Component {
  state = {
    isLoaded: false
  };

  async componentWillMount() {
    setTimeout(() => {
      this.setState({ isLoaded: true });
    }, 2000);

    try {
      const movies = await omdb.search('star');
      this.setState({ movies });
    } catch (error) {
      notification.error(error, 'There was an error loading movies.');
    }
  }
  render() {
    if (!this.state.isLoaded) {
      return <MfxLoadingScreen />;
    }

    return (
      <div className="App">
        <MfxMovieList movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
