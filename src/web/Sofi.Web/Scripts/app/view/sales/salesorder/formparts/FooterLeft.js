Ext.define('Sofi.view.sales.salesorder.formparts.FooterLeft', {
	extend: 'Ext.tab.Panel',
	alias: 'widget.salessalesorderformpartsfooterleft',
	initComponent:function(){

		var config = {
			width: 400,
			height: 178,
			padding:5,
			items:[
			{
				title: 'Note'
			},
			{
				title: 'Delivery Option'
			},
			{
				title: 'Additional Information'
			},
			{
				title: 'Others'
			}]
		};

		Ext.apply(this, config);
		this.callParent(arguments);
	}
});