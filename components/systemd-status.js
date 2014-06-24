/** @jsx React.DOM */

var SystemdStatus = React.createClass({
  render: function() {
    return (
      <div className="systemd-status">
        <p>{ this.props.systemd.loadState }</p>
        <p>{ this.props.systemd.subState }</p>
      </div>
    );
  }
});
