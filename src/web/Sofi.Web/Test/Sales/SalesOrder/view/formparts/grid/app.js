Ext.Loader.setConfig({
	disableCaching: false
});

Ext.Loader.setPath({
    'Sofi': '../../../../../Scripts/app'
});

Ext.application({
	requires: ['Ext.container.Viewport', 'Ext.form.Panel'],
	name: 'Sofi',
	appFolder: '../../../../../../Scripts/app',
	views: ['sales.salesorder.formparts.Grid'],
	stores: ['sales.salesorder.Items'],
	models: ['sales.salesorder.Item'],
	launch: function() {
		Ext.create('Ext.form.Panel', {
			renderTo: Ext.getBody(),
			items: [{
				xtype: 'salessalesorderformpartsgrid'
			}]
		});
	}
});