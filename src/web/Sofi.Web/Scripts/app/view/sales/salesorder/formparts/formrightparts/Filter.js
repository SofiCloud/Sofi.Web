Ext.define('Sofi.view.sales.salesorder.formparts.formrightparts.Filter', {
	extend: 'Ext.form.Panel',
	alias: 'widget.salessalesorderformpartsformrightpartsfilter',
	initComponent:function(){

		var config = {
			title: 'Filter',
			defaultType: 'button',
			margin: '10 0',
			items:[
			{
				text: 'Sortir',
				margin: '5',
				action: 'sortir'
			},{
				text: 'Cari',
				margin: '5'
			}]
		};

		Ext.apply(this, config);
		this.callParent(arguments);
	}
});