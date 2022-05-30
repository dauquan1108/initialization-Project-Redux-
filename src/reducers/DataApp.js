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

import * as types from '../constants/ActionType';

let todos = [
	{
		id: 1,
		title: 'Đậu Xuân Quân 1'
	},
	{
		id: 2,
		title:'Đậu Xuân Quân 2'
	},
	{
		id: 3,
		title:'Đậu Xuân Quân 3'
	},
	{
		id: 4,
		title:'Đậu Xuân Quân 4'
	}
];

const DataApp = (state = todos, action) => {
	switch (action.type) {
		case types.ADD_DATA:
			const value = action.payload;
			return [...state, value];
		default:
			return [...state];
	}
};

export default DataApp;
