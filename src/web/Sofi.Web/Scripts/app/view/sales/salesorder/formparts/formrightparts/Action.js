Ext.define('Sofi.view.sales.salesorder.formparts.formrightparts.Action', {
	extend: 'Ext.form.Panel',
	alias: 'widget.salessalesorderformpartsformrightpartsaction',
	initComponent:function(){

		var config = {
			title: 'Action',
			defaultType: 'button',
			margin: '0 0 10 0',
			items:[
			{
				text: 'Baru',
				margin: '5'
			},{
				text: 'Ubah',
				margin: '5'
			},{
				text: 'Hapus',
				margin: '5'
			}]
		};

		Ext.apply(this, config);
		this.callParent(arguments);
	}
});