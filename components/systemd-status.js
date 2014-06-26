/** @jsx React.DOM */

var SystemdStatus = React.createClass({
  render: function() {
    return (
      <div className="systemd-status">
        <hr/>
        <h4>Systemd</h4>
        <p><strong>Load State:</strong> { this.props.systemd.loadState }</p>
        <p><strong>Sub State:</strong> { this.props.systemd.subState }</p>
      </div>
    );
  }
});
