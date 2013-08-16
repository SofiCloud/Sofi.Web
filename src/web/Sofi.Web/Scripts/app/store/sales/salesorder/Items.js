Ext.define('Sofi.store.sales.salesorder.Items', {
	extend: 'Ext.data.Store',
	model: 'Sofi.model.sales.salesorder.Item',
	autoLoad: true,
	proxy: {
		type: 'ajax',
		api: {
			// read: 'test/sales/salesorder/data/items.json',
			// update: 'test/sales/salesorder/data/items.json'
			read: '../../../../../../test/sales/salesorder/data/items.json',
			update: '../../../../../../test/sales/salesorder/data/itemsupdate.json'
		},
		reader: {
			type: 'json',
			root: 'items',
			successProperty: 'success'
		}
	}
});