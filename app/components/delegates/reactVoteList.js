var VotesHeaderRow = React.createClass({displayName: 'VotesHeaderRow',
	render: function() {
		var props = this.props;
		var headers = this.props.headers;
		var sortIndex = this.props.sortIndex;
		var inverse = this.props.inverse;

		var clickHandler = function(ev) {
			props.onSortClick(					
				ev.target.cellIndex	
				);
		};

		return (
			React.createElement("tr", {onClick: clickHandler}, 
			React.createElement("th", {className: "bold sortable"}, headers['blocks.blockNum']), 
			React.createElement("th", {className: "bold sortable"}, headers['delegate.votes.net'])
			)
			);
	}
});

var VoteRow = React.createClass({displayName: 'VoteRow',
	render: function() {
		var vote =this.props.data;
		var tdLatency, tdActiveFeeds, tdUpdateFeeds, tdReliability;

		return (
			React.createElement("tr", null, 
			React.createElement("td", null, React.createElement("a", {href: 'blocks/block?id='+vote.block}, vote.block)), 
			React.createElement("td", null, vote.vote+' BTS')
			)
			);
	}
});

var VotesTable = React.createClass({
	getInitialState: function() {
		return {
			sortIndex: 0,
			inverse: true,
			filterName: ''
		};
	},
	handleSortClick: function(index) {
		this.setState({
			sortIndex: index,
			inverse: !this.state.inverse
		});
	},
	onFilterChange: function(filterName) {
		this.setState({
			filterName: filterName
		});
	},
	displayName: 'VotesTable',
	render: function() {
		var headers = this.props.headers;
		var filterFields = ['block','vote'];
		var inverse = this.state.inverse;
		
		if (headers && this.props.data) {			
			var data = JSON.parse(this.props.data);
			var sortIndex = this.state.sortIndex;
			var sortField = filterFields[sortIndex];
			var filterName = this.state.filterName;

			var bodyRows = data
			.sort(function(a,b) {
				if (sortField==='vote') {
					var atemp=parseInt(a[sortField].replace(/,/g,''),10);
					var btemp=parseInt(b[sortField].replace(/,/g,''),10);
					if (inverse===false) {
						if (atemp > btemp) {
							return 1;
						}
						if (atemp < btemp) {
							return -1;
						}
						return 0;	
					}
					else {
						if (atemp > btemp) {
							return -1;
						}
						if (atemp < btemp) {
							return 1;
						}
						return 0;	
					}
				}
				else {
					if (inverse===false) {
						if (a[sortField] > b[sortField]) {
							return 1;
						}
						if (a[sortField] < b[sortField]) {
							return -1;
						}
						return 0;	
					}
					else {
						if (a[sortField] > b[sortField]) {
							return -1;
						}
						if (a[sortField] < b[sortField]) {
							return 1;
						}
						return 0;	
					}
				}


			})
			.map(function(vote) {
				return (
					React.createElement(VoteRow, {key: vote.block, data: vote})
					);

			});

			var styleLeft = {
				'marginLeft':'0px',
				'marginRight':'0px'
			};

			return (
				React.createElement("div", null, 
				React.createElement("table", {className: "table table-condensed"}, 
				React.createElement("thead", null, 
				React.createElement(VotesHeaderRow, {onSortClick: this.handleSortClick, headers: headers, sortIndex: sortIndex, inverse: inverse})
				), 
				React.createElement("tbody", null, 
				bodyRows
				)
				)
				)
				);
		}
		else {
			return React.createElement("div", null);
		}
	}
});

app.value('VotesTable',VotesTable);
