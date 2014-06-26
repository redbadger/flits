/** @jsx React.DOM */

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var MachineList = React.createClass({
  getInitialState: function() {
    return {
      machines: []
    }
  },

  loadMachines: function() {
    $.ajax({
      url: this.props.source,
      success: function(machines) {
        this.setState(machines);
      }.bind(this)
    });
  },

  componentDidMount: function() {
    this.loadMachines();
    setInterval(this.loadMachines, 1000);
  },

  render: function() {
    var machines = this.state.machines.map( function(machine) {
      return (<MachineItem machine={ machine } />);
    });

    return (
      <div className="machine-list row">
        <ReactCSSTransitionGroup transitionName="machine">
          { machines }
        </ReactCSSTransitionGroup>
      </div>
    );
  }
});
