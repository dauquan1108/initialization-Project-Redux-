import { createSelector } from 'reselect';

const getListData = state => state.DataApp;

const getIdPassIn = (state, props) => props.id;

const mapSelectList = createSelector(
		[getListData, getIdPassIn],
		(items, id) => {
			if (id) {
				const idNews = items.filter((item) => id === item.id);
				return idNews;
			} else {
				return [];
			}
		}
	)

const makeSelectList = (state, idss) => {
	console.log('idss: ================>', idss); // Log QuanDX fix bug
	createSelector(
		(getListData),
		(items) => {
			console.log('items: ================>', items); // Log QuanDX fix bug
			if (idss) {
				const idNews = items.filter((item) => idss === item.id);
				return idNews;
			} else {
				return [];
			}
		}
	)
}

export { mapSelectList };
export default  makeSelectList;
