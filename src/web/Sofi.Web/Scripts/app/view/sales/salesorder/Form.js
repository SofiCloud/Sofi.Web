Ext.define('Sofi.view.sales.salesorder.Form', {
	requires:[
		'Sofi.view.sales.salesorder.formparts.FormLeft',
		'Sofi.view.sales.salesorder.formparts.FormRight'
	],
	alias: 'widget.salessalesorderform',
	constructor: function() {
		var items = [
			{
				title: 'Sales Order',
				region: 'center',
				border: false,
				autoScroll: true,
				items:[{
					xtype: 'salessalesorderformpartsformleft'
				}]
			},{
				title: 'Toolbar',
				region: 'east',
				split: true,
				collapsible: true,
				floatable: false,
				border: false,
				width:200,
				items:[{
					xtype: 'salessalesorderformpartsformright'
				}]
			}
		];
		return items;
	}
});