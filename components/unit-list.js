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
        if (data.units) {
          this.setState(data);
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
    var units = this.state.units.map( function(unit) {
      return <UnitItem unit={ unit } />
    });

    return (
      <div className="unit-list row">
        <ReactCSSTransitionGroup transitionName="unit">
          { units }
        </ReactCSSTransitionGroup>
      </div>
    );
  }
});
