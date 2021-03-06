/** @jsx React.DOM */

var React   = require('react/addons');

module.exports = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  propTypes: {
    onHandleSubmit: React.PropTypes.func.isRequired
  },
  getInitialState() {
    return {
      inputArtist: 'radiohead'
    };
  },
  handleSubmit(e) {
    e.preventDefault();
    var artist = this.state.inputArtist;
    if (artist) {
      this.props.onHandleSubmit(artist);
    }
  },
  render() {
    return (
      <form className="form-horizontal" role="form" onSubmit={this.handleSubmit} >
        <div className="form-group">
          <label htmlFor="js-input-location" className="col-sm-1 control-label">Artist</label>
          <div className="col-sm-11">
            <input type="text" className="form-control" placeholder="Input Atrist Name" valueLink={this.linkState('inputArtist')} required />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-1 col-sm-11">
            <button type="submit" className="btn btn-primary"><span className="glyphicon glyphicon-search">search</span></button>
          </div>
        </div>
      </form>
    );
  }
});

