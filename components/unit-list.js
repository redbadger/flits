/** @jsx React.DOM */

var UnitList = React.createClass({
  getInitialState: function() {
    return {
      units: []
    }
  },

  loadUnits: function() {
    $.ajax({
      url: this.props.source,
      success: function(data) {
        var units = this.getInitialState();
        parsed = JSON.parse(data);
        if (parsed.units) {
          this.setState(parsed);
        } else {
          this.setState(this.getInitialState()); 
        }
      }.bind(this)
    });
  },

  componentDidMount: function() {
    this.loadUnits();
    setInterval(this.loadUnits, 1000);
  },

  render: function() {
    return (
      <div className="unit-list row">
        {
          this.state.units.map( function(unit) {
            return <UnitItem unit={ unit } />
          })
        }
      </div>
    );
  }
});
