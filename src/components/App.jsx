import { Component } from 'react';
import { getImages } from '../services/pixabayAppi';

import { SearchBar } from './SearchBar/SearchBar';

export class App extends Component {
  state = {
    query: '',
    images: [],
    largeImgUrl: '',
    page: 1,
    per_page: 12,
    error: '',
    showBtn: false,
    isEmpty: false,
    isLoading: false,
  };

  onFormSubmit = query => {
    this.setState({
      query,
      images: [],
      largeImgUrl: '',
      page: 1,
      error: '',
      showBtn: false,
      isEmpty: false,
      isLoading: false,
    });
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <SearchBar onSubmit={this.onFormSubmit} />
      </div>
    );
  }
}
