/** @jsx React.DOM */

var MachineItem = React.createClass({
  render: function() {
    return (
      <div className="machine-item col-md-4">
        <h3>{ this.props.machine.primaryIP }</h3>
        <p>{ this.props.machine.id }</p>
      </div>
    );
  }
});
