Ext.define('Sofi.view.sales.salesorder.formparts.Footer', {
	extend: 'Ext.form.Panel',
	requires:[
		'Sofi.view.sales.salesorder.formparts.FooterLeft',
		'Sofi.view.sales.salesorder.formparts.FooterRight',
	],
	alias: 'widget.salessalesorderformpartsfooter',
	initComponent:function(){

		var config = {
			items: [{
				layout:'column',
				border: false,
				width: 700,
				margin: 10,
				items: [{
					xtype: 'salessalesorderformpartsfooterleft',
					columnWidth: .50
				},{
					xtype: 'salessalesorderformpartsfooterright',
					columnWidth: .50,
					margin:'5 0 0 5',
					//padding: ''
				}]
			}]
		};

		Ext.apply(this, config);
		this.callParent(arguments);
	}
});