Ext.Loader.setConfig({
    disableCaching: false
});

Ext.Loader.setPath({
    'Sofi': '../../../../../Scripts/app'
});

Ext.application({
    name: 'Sofi',
    appFolder: '../../../../../Scripts/app',
	views:['Sofi.view.sales.salesorder.Form'],
    stores: ['sales.salesorder.Items'],
    models: ['sales.salesorder.Item'],
	launch: function(){
        var win = Ext.create('widget.window',{
            title: 'Sales Order',
            width: '100%',
            height: '100%',
            animCollapse: false,
            constrainHeader: true,
            layout: {
                    type: 'border',
                    padding: 5
                },
            items: new Sofi.view.sales.salesorder.Form()
        });
		win.show();
	}
});