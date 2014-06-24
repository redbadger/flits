/** @jsx React.DOM */

var Dashboard = React.createClass({
  render: function() {
    return (
      <div className="dashboard">
        <h2>Machines</h2>
        <MachineList source="http://localhost:8080/fleet/api/machines" />
        <h2>Units</h2>
        <UnitList source="http://localhost:8080/fleet/api/units" />
      </div>
    );
  }
});
