/**
 * Copyright 2021-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author quandx.bkav@gmail.com on 5/30/2022.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

'use strict';

import React from 'react';
import PropTypes from 'prop-types';

function MapView(props) {
	const { dataMap } = props;

    return(
        <div className='map-view'>
	        <h1>mapStateToProps</h1>
	        {
		        dataMap.length > 0 && dataMap.map((item) => (
			        <div key={item.id}>
				        <h3>
					        {item.title}
				        </h3>
			        </div>
		        ))
	        }
	    </div>
    );
}

MapView.propTypes = {
	dataMap: PropTypes.any,
};
MapView.defaultProps = {
	dataMap: [],
};
export default MapView;




