Ext.define('Sofi.view.sales.salesorder.formparts.FormRight', {
	extend: 'Ext.form.Panel',
	requires:[
		'Sofi.view.sales.salesorder.formparts.formrightparts.Filter',
		'Sofi.view.sales.salesorder.formparts.formrightparts.Action',
		'Sofi.view.sales.salesorder.formparts.formrightparts.Others'
	],
	alias: 'widget.salessalesorderformpartsformright',
	initComponent:function(){

		var config = {
			border: false,
			items: [
			{
				border: true,
				margin: '0 0 5 0',
				xtype: 'salessalesorderformpartsformrightpartsfilter'
			},{
				border: true,
				margin: '0 0 5 0',
				xtype: 'salessalesorderformpartsformrightpartsaction'
			},{
				border: true,
				margin: '0 0 5 0',
				xtype: 'salessalesorderformpartsformrightpartsothers'

			}]
		};

		Ext.apply(this, config);
		this.callParent(arguments);
	}
});