import React, { Component } from 'react';
import { MfxLoadingScreen } from './components/MfxLoadingScreen';
import { MfxMovieList } from './components/MfxMovieList';
import { MfxTopNav } from './components/MfxTopNav';
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

    // Load some initial results (the screen looks a lot better with results)
    this.onSearch('star wars');
  }

  async onSearch(searchText) {
    try {
      const movies = await omdb.search(searchText);
      this.setState({ movies });
    } catch (error) {
      this.setState({ movies: [] });
      notification.error(error, 'There was an error loading movies.');
    }
  }

  render() {
    if (!this.state.isLoaded) {
      return <MfxLoadingScreen />;
    }

    return (
      <div className="App">
        <MfxTopNav onSearch={this.onSearch.bind(this)} />
        <MfxMovieList movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
