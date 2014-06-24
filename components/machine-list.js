/** @jsx React.DOM */

var MachineList = React.createClass({
  getInitialState: function() {
    return {
      machines: []
    }
  },

  loadMachines: function() {
    $.ajax({
      url: this.props.source,
      success: function(data) {
        machines = JSON.parse(data);
        this.setState(machines);
      }.bind(this)
    });
  },

  componentDidMount: function() {
    this.loadMachines();
    setInterval(this.loadMachines, 1000);
  },

  render: function() {
    return (
      <div className="machine-list row">
        {
          this.state.machines.map( function(machine) {
            return <MachineItem machine={ machine } />
          })
        }
      </div>
    );
  }
});
