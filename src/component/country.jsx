/** @jsx React.DOM */

require('insert-css')(require('./country.styl'));

var React         = require('react'),
    Nav           = require('./nav.jsx'),
    Footer        = require('./footer.jsx'),
    SelectCountry = require('./select-country.jsx'),
    Tracks        = require('./tracks.jsx'),
    TracksMixin   = require('../tracks-mixin.jsx')
;

module.exports = React.createClass({
  mixins: [TracksMixin],
  fetchTopTracks(country) {
    this.tracks.fetchByCountry(country);
  },
  render() {
    return (
      <div className="country">
        <header className="page-header">
          <h1>Country Top Tracks <small>by Last.FM</small></h1>
        </header>
        <Nav current="country" />
        <article className="main-content">
          <SelectCountry onHandleSubmit={this.fetchTopTracks} countries={this.tracks.countries} />
          <Tracks tracks={this.state.tracks} />
        </article>
        <Footer />
      </div>
    );
  }
});
