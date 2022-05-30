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

// redux
import { createStore, combineReducers} from 'redux';

// component Redux
import DataApp from '../reducers/DataApp';

const rootReducer = combineReducers({
	DataApp,
});

const configureStore = () => {
	return createStore(rootReducer);
}

export default configureStore;
