Ext.define('Sofi.view.sales.salesorder.formparts.Header', {
	extend: 'Ext.form.Panel',
	requires: [
		'Sofi.view.sales.salesorder.formparts.HeaderLeft',
		'Sofi.view.sales.salesorder.formparts.HeaderRight'
		],
	alias: 'widget.salessalesorderformpartsheader',
	initComponent: function() {

		var config = {
			items: [{
				layout:'column',
				border: false,
				margin: 10,
				items: [{
					xtype: 'salessalesorderformpartsheaderleft',
					// border: 1,
					columnWidth: .50
				},{
					xtype: 'salessalesorderformpartsheaderright',
					// border: 1,
					columnWidth: .50,
					margin:'0 0 0 5'
				}]
			}]
		};

		Ext.apply(this, config);
		this.callParent(arguments);
	}
});