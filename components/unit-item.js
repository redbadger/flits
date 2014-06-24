/** @jsx React.DOM */

var UnitItem = React.createClass({
  render: function() {
    return (
      <div className="unit-item col-md-4">
        <h3>{ this.props.unit.name }</h3>
        <p>{ this.props.unit.currentState }</p>
        { (this.props.unit.systemd) ? <SystemdStatus systemd={ this.props.unit.systemd } /> : null }
      </div>
    );
  }
});
