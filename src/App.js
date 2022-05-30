import React from 'react';

// component
import MapViewContainer from './component/mapView/MapViewContainer';
import MakeViewContainer from './component/makeView/MakeViewContainer';

function App() {
	return (
		<div className='app'>
			<MapViewContainer id={1} />
			<MakeViewContainer id={2} />
			{/*<MakeViewContainer id={3} />*/}
			{/*<MakeViewContainer id={4} />*/}
		</div>
	);
}

export default App;
