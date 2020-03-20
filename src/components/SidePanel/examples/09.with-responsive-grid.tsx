import React from 'react';
import { SidePanel } from '../../../index';
import { Panel } from '../../../index';
import { ResponsiveGrid } from '../../../index';

export default class extends React.Component {
	//@ts-ignore
	constructor(...args) {
		//@ts-ignore
		super(...(args as any[]));
		this.state = { isExpanded: true };
		this.handleToggle = this.handleToggle.bind(this);
	}

	handleToggle() {
		this.setState({
			//@ts-ignore
			isExpanded: !this.state.isExpanded,
		});
	}

	render() {
		return (
			<section>
				<p>
					modal can be disabled in the underlying Overlay component to allow
					interaction with the background
				</p>
				<button onClick={this.handleToggle}>Toggle SidePanel</button>

				<SidePanel
					isModal={false}
					//@ts-ignore
					isExpanded={this.state.isExpanded}
					onCollapse={this.handleToggle}
					Header='Stumptown keytar schlitz'
				>
					<div>
						<Panel hasMargin={false} style={{ marginBottom: '12px' }}>
							Stumptown keytar schlitz, vinyl vexillologist humblebrag sartorial
							crucifix cornhole. Four dollar toast 8-bit taiyaki asymmetrical
							helvetica kitsch farm-to-table thundercats. Occupy hammock
							waistcoat pabst ethical. Sartorial umami cardigan, farm-to-table
							bespoke 90's schlitz cray drinking vinegar actually freegan
							bushwick wolf. Shabby chic tofu celiac shaman, twee af squid blue
							bottle street art. Lumbersexual lo-fi stumptown, iceland locavore
							tacos chillwave portland beard celiac polaroid.
						</Panel>
						<ResponsiveGrid breakPoints={[480, 960]}>
							<ResponsiveGrid.Cell>
								<Panel hasMargin={false}>
									<Panel.Header>1</Panel.Header>
									Stumptown keytar schlitz, vinyl vexillologist humblebrag
									sartorial crucifix cornhole. Four dollar toast 8-bit taiyaki
									asymmetrical helvetica kitsch farm-to-table thundercats.
									Occupy hammock waistcoat pabst ethical. Sartorial umami
									cardigan, farm-to-table bespoke 90's schlitz cray drinking
									vinegar actually freegan bushwick wolf. Shabby chic tofu
									celiac shaman, twee af squid blue bottle street art.
									Lumbersexual lo-fi stumptown, iceland locavore tacos chillwave
									portland beard celiac polaroid Keffiyeh kinfolk lumbersexual,
									austin ennui sustainable mlkshk four loko selfies ramps pop-up
									coloring book before they sold out yuccie biodiesel. Yuccie
									taxidermy beard, +1 church-key umami echo park synth. Fanny
									pack farm-to-table pok pok, next level trust fund live-edge
									asymmetrical art party intelligentsia listicle sriracha. Tote
									bag ugh meggings, selfies vegan blog locavore messenger bag
									chambray etsy heirloom cronut enamel pin hammock umami.
									Bushwick venmo activated charcoal, mumblecore skateboard
									hashtag literally brooklyn etsy ennui 3 wolf moon. Before they
									sold out blog iPhone subway tile, truffaut dreamcatcher
									organic raclette portland whatever brooklyn succulents
									flexitarian gentrify cray. Kogi subway tile gochujang
									dreamcatcher.
								</Panel>
							</ResponsiveGrid.Cell>
							<ResponsiveGrid.Cell>
								<Panel hasMargin={false}>
									<Panel.Header>2</Panel.Header>
									Stumptown keytar schlitz, vinyl vexillologist humblebrag
									sartorial crucifix cornhole. Four dollar toast 8-bit taiyaki
									asymmetrical helvetica kitsch farm-to-table thundercats.
									Occupy hammock waistcoat pabst ethical. Sartorial umami
									cardigan, farm-to-table bespoke 90's schlitz cray drinking
									vinegar actually freegan bushwick wolf. Shabby xitarian
									gentrify cray. Kogi subway tile gochujang dreamcatcher.
								</Panel>
							</ResponsiveGrid.Cell>
							<ResponsiveGrid.Cell>
								<Panel hasMargin={false}>
									<Panel.Header>3</Panel.Header>
									trust fund live-edge asymmetrical art party intelligentsia
									listicle sriracha. Tote bag ugh meggings, selfies vegan blog
									locavore messenger bag chambray etsy heirloom cronut enamel
									pin hammock umami. Bushwick venmo activated charcoal,
									mumblecore skateboard hashtag literally brooklyn etsy ennui 3
									wolf moon. Before they sold out blog iPhone subway tile,
									truffaut dreamcatcher organic raclette portland whatever
									brooklyn succulents flexitarian gentrify cray. Kogi subway
									tile gochujang dreamcatcher.
								</Panel>
							</ResponsiveGrid.Cell>
							<ResponsiveGrid.Cell>
								<Panel hasMargin={false}>
									<Panel.Header>4</Panel.Header>
									Stumptown keytar schlitz, vinyl vexillologist humblebrag
									sartorial crucifix cornhole. Four dollar toast 8-bit taiyaki
									asymmetrical helvetica kitsch farm-to-table thundercats.
									Occupy hammock waistcoat pabst ethical. Sartorial umami
									cardigan, farm-to-table bespoke 90's schlitz cray drinking
									vinegar actually freegan bushwick wolf. Shabby chic tofu
									celiac shaman, twee af squid blue bottle street art.
									Lumbersexual lo-fi stumptown, iceland locavore tacos chillwave
									portland beard celiac polaroid Keffiyeh kinfolk lumbersexual,
									austin ennui sustainable mlkshk four loko selfies ramps pop-up
									coloring book before they sold out yuccie biodiesel. Yuccie
									taxidermy beard, +1 church-key umami echo park synth. Fanny
									pack farm-to-table pok pok, next level trust fund live-edge
									asymmetrical art party intelligentsia listicle sriracha. Tote
									bag ugh meggings, selfies vegan blog locavore messenger bag
									chambray etsy heirloom cronut enamel pin hammock umami.
									Bushwick venmo activated charcoal, mumblecore skateboard
									hashtag literally brooklyn etsy ennui 3 wolf moon. Before they
									sold out blog iPhone subway tile, truffaut dreamcatcher
									organic raclette portland whatever brooklyn succulents
									flexitarian gentrify cray. Kogi subway tile gochujang
									dreamcatcher crucifix cornhole. Four dollar toast 8-bit
									taiyaki asymmetrical helvetica kitsch farm-to-table
									thundercats. Occupy hammock waistcoat pabst ethical. Sartorial
									umami cardigan, farm-to-table bespoke 90's schlitz cray
									drinking vinegar actually freegan bushwick wolf. Shabby chic
									tofu celiac shaman, twee af squid blue bottle street art.
									Lumbersexual lo-fi stumptown, iceland locavore tacos
									chillwave.
								</Panel>
							</ResponsiveGrid.Cell>
							<ResponsiveGrid.Cell>
								<Panel hasMargin={false}>
									<Panel.Header>5</Panel.Header>
									Stumptown keytar schlitz, vinyl vexillologist humblebrag
									sartorial crucifix cornhole. Four dollar toast 8-bit taiyaki
									asymmetrical helvetica kitsch farm-to-table thundercats.
									Occupy hammock waistcoat pabst ethical. Sartorial umami
									cardigan, farm-to-table bespoke 90's schlitz cray drinking
									vinegar actually freegan bushwick wolf. Shabby chic tofu
									celiac shaman, twee af squid blue bottle street art.
									Lumbersexual lo-fi stumptown, iceland locavore tacos chillwave
									portland beard celiac polaroid Keffiyeh kinfolk lumbersexual,
									austin ennui sustainable mlkshk four loko selfies ramps pop-up
									coloring book before they sold out yuccie biodiesel. Yuccie
									taxidermy beard, +1 church-key umami echo park synth. Fanny
									pack farm-to-table pok pok, next level trust fund live-edge
									asymmetrical art party intelligentsia listicle sriracha. Tote
									bag ugh meggings, selfies vegan blog locavore messenger bag
									chambray etsy heirloom cronut enamel pin hammock umami.
									Bushwick venmo activated charcoal, mumblecore skateboard
									hashtag literally brooklyn etsy ennui 3 wolf moon. Before they
									sold out blog iPhone subway tile, truffaut dreamcatcher
									organic raclette portland whatever brooklyn succulents
									flexitarian gentrify cray. Kogi subway tile gochujang
									dreamcatcher.
								</Panel>
							</ResponsiveGrid.Cell>
							<ResponsiveGrid.Cell>
								<Panel hasMargin={false}>
									<Panel.Header>6</Panel.Header>
									Stumptown keytar schlitz, vinyl vexillologist humblebrag
									sartorial crucifix cornhole. Four dollar toast 8-bit taiyaki
									asymmetrical helvetica kitsch farm-to-table thundercats.
									Occupy hammock waistcoat pabst ethical. Sartorial umami
									cardigan, farm-to-table bespoke 90's schlitz cray drinking
									vinegar actually freegan bushwick wolf. Shabby chic tofu
									celiac shaman, twee af squid blue bottle street art. brooklyn
									etsy ennui 3 wolf moon. Before they sold out blog iPhone
									subway tile, truffaut dreamcatcher organic raclette portland
									whatever brooklyn succulents flexitarian gentrify cray. Kogi
									subway tile gochujang dreamcatcher Lumbersexual lo-fi
									stumptown, iceland locavore tacos chillwave portland beard
									celiac polaroid Keffiyeh kinfolk lumbersexual, austin ennui
									sustainable mlkshk four loko selfies ramps pop-up coloring
									book before they sold out yuccie biodiesel. Yuccie taxidermy
									beard, +1 church-key umami echo park synth. Fanny pack
									farm-to-table pok pok, next level trust fund live-edge
									asymmetrical art party intelligentsia listicle sriracha. Tote
									bag ugh meggings, selfies vegan blog locavore messenger bag
									chambray etsy heirloom cronut enamel pin hammock umami.
									Bushwick venmo activated charcoal, mumblecore skateboard
									hashtag literally brooklyn etsy ennui 3 wolf moon. Before they
									sold out blog iPhone subway tile, truffaut dreamcatcher
									organic raclette portland whatever brooklyn succulents
									flexitarian gentrify cray. Kogi subway tile gochujang
									dreamcatcher.
								</Panel>
							</ResponsiveGrid.Cell>
							<ResponsiveGrid.Cell>
								<Panel hasMargin={false}>
									<Panel.Header>7</Panel.Header>
									Stumptown keytar schlitz, vinyl vexillologist humblebrag
									sartorial crucifix cornhole. Four dollar toast 8-bit taiyaki
									asymmetrical helvetica kitsch farm-to-table thundercats.
									Occupy hammock waistcoat pabst ethical. Sartorial umami
									cardigan, farm-to-table bespoke 90's schlitz cray drinking
									vinegar actually freegan bushwick wolf. Shabby
								</Panel>
							</ResponsiveGrid.Cell>
							<ResponsiveGrid.Cell>
								<Panel hasMargin={false}>
									<Panel.Header>8</Panel.Header>
									Stumptown keytar schlitz, vinyl vexillologist humblebrag
									sartorial crucifix cornhole. Four dollar toast 8-bit taiyaki
									asymmetrical helvetica kitsch farm-to-table thundercats.
									Occupy hammock waistcoat pabst ethical. Sartorial umami
									cardigan, farm-to-table bespoke 90's schlitz cray drinking
									vinegar actually freegan bushwick wolf. Shabby chic tofu
									celiac shaman, twee af squid blue bottle street art. they sold
									out yuccie biodiesel. Yuccie taxidermy beard, +1 church-key
									umami echo park synth. Fanny pack farm-to-table pok pok, next
									level trust fund live-edge asymmetrical art party
									intelligentsia listicle sriracha. Tote bag ugh meggings,
									selfies vegan blog locavore messenger bag chambray etsy
									heirloom cronut enamel pin hammock umami. Bushwick venmo
									activated charcoal, mumblecore skateboard hashtag literally
									brooklyn etsy ennui 3 wolf moon. Before they sold out blog
									iPhone subway tile, truffaut dreamcatcher organic raclette
									portland whatever brooklyn succulents flexitarian gentrify
									cray. Kogi subway tile gochujang dreamcatcher. kitsch
									farm-to-table thundercats. Occupy hammock waistcoat pabst
									ethical. Sartorial umami cardigan, farm-to-table bespoke 90's
									schlitz cray drinking vinegar actually freegan bushwick wolf.
									Shabby chic tofu celiac shaman, twee af squid blue bottle
									street art. they sold out yuccie biodiesel. Yuccie taxidermy
									beard, +1 church-key umami vinegar actually freegan bushwick
									wolf. Shabby chic tofu celiac shaman, twee af squid blue
									bottle street art. they sold out yuccie biodiesel. Yuccie
									taxidermy beard, +1 church-key umami
								</Panel>
							</ResponsiveGrid.Cell>
							<ResponsiveGrid.Cell>
								<Panel hasMargin={false}>
									<Panel.Header>9</Panel.Header>
									Stumptown keytar schlitz, vinyl vexillologist humblebrag
									sartorial crucifix cornhole. Four dollar toast 8-bit taiyaki
									asymmetrical helvetica kitsch farm-to-table thundercats.
									Occupy hammock waistcoat pabst ethical. Sartorial umami
									cardigan, farm-to-table bespoke 90's schlitz cray drinking
									vinegar actually freegan bushwick wolf. Shabby chic tofu
									celiac shaman, twee af squid blue bottle street art.
									Lumbersexual lo-fi stumptown, iceland locavore tacos chillwave
									portland beard celiac polaroid Keffiyeh kinfolk lumbersexual,
									austin ennui sustainable mlkshk four loko selfies ramps pop-up
									coloring book before they sold out yuccie biodiesel. Yuccie
									taxidermy beard, +1 church-key umami echo park synth. Fanny
									pack farm-to-table pok pok, next level trust fund live-edge
									asymmetrical art party intelligentsia listicle sriracha. Tote
									bag ugh meggings, selfies vegan blog locavore messenger bag
									chambray etsy heirloom cronut enamel pin hammock umami.
									Bushwick venmo activated charcoal, mumblecore skateboard
									hashtag literally brooklyn etsy ennui 3 wolf moon. Before they
									sold out blog iPhone subway tile, truffaut dreamcatcher
									organic raclette portland whatever brooklyn succulents
									flexitarian gentrify cray. Kogi subway tile gochujang
									dreamcatcher. Stumptown keytar schlitz, vinyl vexillologist
									humblebrag sartorial crucifix cornhole. Four dollar toast
									8-bit taiyaki asymmetrical helvetica kitsch farm-to-table
									thundercats. Occupy hammock waistcoat pabst ethical. Sartorial
									umami cardigan, farm-to-table bespoke 90's schlitz cray
									drinking vinegar actually freegan bushwick wolf. Shabby chic
									tofu celiac shaman, twee af squid blue bottle street art.
									Lumbersexual lo-fi stumptown, iceland locavore tacos chillwave
									portland beard celiac polaroid Keffiyeh kinfolk lumbersexual,
									austin ennui sustainable mlkshk four loko selfies ramps pop-up
									coloring book before they sold out yuccie biodiesel. Yuccie
									taxidermy beard, +1 church-key umami echo park synth. Fanny
									pack farm-to-table pok pok, next level trust fund live-edge
									asymmetrical art party intelligentsia listicle sriracha. Tote
									bag ugh meggings, selfies vegan blog locavore messenger bag
									chambray etsy heirloom cronut enamel pin hammock umami.
									Bushwick venmo activated charcoal, mumblecore skateboard
									hashtag literally brooklyn etsy ennui 3 wolf moon. Before they
									sold out blog iPhone subway tile, truffaut dreamcatcher
									organic raclette portland whatever brooklyn succulents
									flexitarian gentrify cray. Kogi subway tile gochujang
									dreamcatcher.
								</Panel>
							</ResponsiveGrid.Cell>
							<ResponsiveGrid.Cell>
								<Panel hasMargin={false}>
									<Panel.Header>10</Panel.Header>
									Stumptown keytar schlitz, vinyl vexillologist humblebrag
									sartorial crucifix cornhole. Four dollar toast 8-bit taiyaki
									asymmetrical helvetica kitsch farm-to-table thundercats.
									Occupy hammock waistcoat pabst ethical. Sartorial umami
									cardigan, farm-to-table bespoke 90's schlitz cray drinking
									vinegar actually freegan bushwick wolf. Shabby chic tofu
									celiac shaman, twee af squid blue bottle street art.
									Lumbersexual lo-fi stumptown, iceland locavore tacos chillwave
									portland beard celiac polaroid Keffiyeh kinfolk lumbersexual,
									austin ennui sustainable mlkshk four loko selfies ramps pop-up
									coloring book before they sold out yuccie biodiesel. Yuccie
									taxidermy beard, +1 church-key umami echo park synth. Fanny
									pack farm-to-table pok pok, next level trust fund live-edge
									asymmetrical art party intelligentsia listicle sriracha. Tote
									bag ugh meggings, selfies vegan blog locavore messenger bag
									chambray etsy heirloom cronut enamel pin hammock umami.
									Bushwick venmo activated charcoal, mumblecore skateboard
									hashtag literally brooklyn etsy ennui 3 wolf moon. Before they
									sold out blog iPhone subway tile, truffaut dreamcatcher
									organic raclette portland whatever brooklyn succulents
									flexitarian gentrify cray. Kogi subway tile gochujang
									dreamcatcher.
								</Panel>
							</ResponsiveGrid.Cell>
							<ResponsiveGrid.Cell>
								<Panel hasMargin={false}>
									<Panel.Header>11</Panel.Header>
									Stumptown keytar schlitz, vinyl vexillologist humblebrag
									sartorial crucifix cornhole. Four dollar toast 8-bit taiyaki
									asymmetrical helvetica kitsch farm-to-table thundercats.
									Occupy hammock waistcoat pabst.
								</Panel>
							</ResponsiveGrid.Cell>
						</ResponsiveGrid>
					</div>
				</SidePanel>
			</section>
		);
	}
}
