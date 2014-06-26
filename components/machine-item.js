/** @jsx React.DOM */

var MachineItem = React.createClass({
  render: function() {
    return (
      <div className="col-md-4">
        <div className="machine-item panel panel-default">
          <div className="panel-body">
            { this.props.machine.primaryIP }
          </div>
          <div className="panel-footer">{ this.props.machine.id }</div>
        </div>
      </div>
    );
  }
});
