/** @jsx React.DOM */

var Dashboard = React.createClass({
  render: function() {
    return (
      <div className="dashboard">
        <h2>Machines</h2>
        <MachineList source="/api/machines" />
        <h2>Units</h2>
        <UnitList source="/api/units" />
      </div>
    );
  }
});
