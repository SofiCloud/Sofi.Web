Ext.define('Sofi.view.sales.salesorder.formparts.Grid', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.salessalesorderformpartsgrid',
	store: 'sales.salesorder.Items',
	initComponent:function(){
		var config = {
			border: false,
			minHeight: 200,
			columns: [
				{header: 'Part Name', dataIndex: 'partname',flex: 1},
				{header: 'COA', dataIndex: 'coa',flex: 1},
				{header: 'Require Date', dataIndex: 'requiredate',flex: 1},
				{header: 'UoM', dataIndex: 'uom',flex: 1},
				{header: 'Qty', dataIndex: 'qty',flex: 1}
			]
		};

		Ext.apply(this, config);
		this.callParent(arguments);
	}
});