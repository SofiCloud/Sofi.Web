Ext.define('Sofi.view.sales.salesorder.formparts.formrightparts.Others', {
	extend: 'Ext.form.Panel',
	alias: 'widget.salessalesorderformpartsformrightpartsothers',
	initComponent:function(){

		var config = {
			title: 'Others',
			defaultType: 'button',
			margin: '0 0 10 0',
			items:[
			{
				text: 'Segarkan',
				margin: '5'
			},{
				text: 'Keluar',
				margin: '5'
			}]
		};

		Ext.apply(this, config);
		this.callParent(arguments);
	}
});