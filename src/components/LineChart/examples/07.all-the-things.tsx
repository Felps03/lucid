import React from 'react';
import createClass from 'create-react-class';
import { LineChart, chartConstants } from '../../../index';

const data = [
	{
		date: new Date('2015-01-01T00:00:00-08:00'),
		blueberries: 2000,
		oranges: 3000,
	},
	{
		date: new Date('2015-01-02T00:00:00-08:00'),
		blueberries: 2000,
		oranges: 5000,
	},
	{
		date: new Date('2015-01-03T00:00:00-08:00'),
		blueberries: 3000,
		oranges: 2000,
	},
	{ date: new Date('2015-01-04T00:00:00-08:00'), blueberries: 5000 },
	{
		date: new Date('2015-01-05T00:00:00-08:00'),
		blueberries: 2500,
		oranges: 6300,
	},
	{
		date: new Date('2015-01-06T00:00:00-08:00'),
		blueberries: 1500,
		oranges: 6100,
	},
];
const yFormatter = (d: number) => `${d / 1000}k`;
const xFormatter = (d: Date) => `${d.getMonth() + 1}-${d.getDate()}`;

const style = {
	paddingTop: '5rem',
};

export default createClass({
	render() {
		return (
			<div style={style}>
				<LineChart
					margin={{
						right: 80,
					}}
					width={800}
					data={data}
					colorMap={{
						blueberries: chartConstants.COLOR_0,
						oranges: chartConstants.COLOR_1,
					}}
					xAxisField='date'
					xAxisFormatter={xFormatter}
					xAxisMin={new Date('2014-12-31T00:00-08:00')}
					xAxisMax={new Date('2015-01-07T00:00-08:00')}
					xAxisTickCount={5}
					xAxisTitle='Date'
					yAxisFields={['blueberries']}
					yAxisFormatter={yFormatter}
					yAxisTickCount={5}
					yAxisTitle='Number of Blueberries'
					yAxisTitleColor={chartConstants.COLOR_0}
					y2AxisFields={['oranges']}
					y2AxisFormatter={yFormatter}
					y2AxisTickCount={5}
					y2AxisTitle='Number of Oranges'
					y2AxisHasPoints={false}
					y2AxisTitleColor={chartConstants.COLOR_1}
				/>
			</div>
		);
	},
});
