/** @jsx React.DOM */

var UnitItem = React.createClass({
  render: function() {
    return (
      <div className="col-md-4">
        <div className="unit-item panel panel-danger">
          <div className="panel-heading">
            <h3 className="panel-title">{ this.props.unit.name }</h3>
          </div>
          <div className="panel-body">
            <p><strong>Current State:</strong> { this.props.unit.currentState }</p>
            { (this.props.unit.systemd) ? <SystemdStatus systemd={ this.props.unit.systemd } /> : null }
          </div>
        </div>
      </div>
    );
  }
});
