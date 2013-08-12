Ext.define("Sofi.Sales.SalesOrder.Create", {
    constructor: function () {
        var view = [
            {
                region: 'east',
                title: 'Toolbar',
                dockedItems: [{
                    dock: 'top',
                    xtype: 'toolbar',
                    items: ['->', {
                        xtype: 'button',
                        text: 'test',
                        tooltip: 'Test Button',
                        handler: function () {
                            Ext.Msg.alert("HAHAHA", "HAHAHA");
                        }
                    }]
                }],
                animCollapse: true,
                collapsible: true,
                split: true,
                width: 150, // give east and west regions a width
                minSize: 135,
                maxSize: 150
            },
            {
                region: 'center',
                title: '',
                border: true
            }];
        return view;
    }
});