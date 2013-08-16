Ext.application({
    name: 'Sofi',
    appFolder: '../../../../Scripts/app',
    requires:['Ext.container.Viewport'],
    controllers:['sales.SalesOrders'],
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
        Ext.Msg.alert("How To","Tekan tombol sortir di sebelah kanan, untuk memunculkan pesan sesuai dengan test ini")
	}
});