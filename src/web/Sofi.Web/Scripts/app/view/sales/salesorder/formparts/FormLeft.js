Ext.define('Sofi.view.sales.salesorder.formparts.FormLeft', {
	extend: 'Ext.form.Panel',
	requires:[
		'Sofi.view.sales.salesorder.formparts.Header',
		'Sofi.view.sales.salesorder.formparts.Grid',
		'Sofi.view.sales.salesorder.formparts.Footer'
	],
	alias: 'widget.salessalesorderformpartsformleft',
	initComponent:function(){

		var config = {
			border: false,
			//height: 1000,
			items: [
			{
				border: false,
				xtype: 'salessalesorderformpartsheader'
			}
			,{
				border: false,
				xtype: 'salessalesorderformpartsgrid'
			}],
			dockedItems:[{
				xtype: 'toolbar',
				dock: 'bottom',
				border: false,
				items: [{
					border: false,
					width: '100%',
					xtype: 'salessalesorderformpartsfooter'	
				}]
			}]
		};

		Ext.apply(this, config);
		this.callParent(arguments);
	}
});