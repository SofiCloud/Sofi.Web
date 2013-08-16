Ext.Loader.setConfig({
    disableCaching: false
});

Ext.Loader.setPath({
    'Sofi': '../../../../../../Scripts/app'
});

Ext.application({
	requires:['Ext.container.Viewport','Ext.form.Panel'],
	name: 'Sofi',
	appFolder: '../../../../../../Scripts/app',
	views:['Sofi.view.sales.salesorder.formparts.HeaderLeft'],
	launch: function(){
		Ext.create('Ext.form.Panel', {
			renderTo: Ext.getBody(),
			items:[{
				xtype: 'salessalesorderformpartsheaderleft'
			}]
		});

	}
});