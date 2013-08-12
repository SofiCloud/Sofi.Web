/*!
* Ext JS Library 4.0
* Copyright(c) 2006-2011 Sencha Inc.
* licensing@sencha.com
* http://www.sencha.com/license
*/

Ext.define('Sofi.SubShortcut.Transaction', {
    extend: 'Sofi.Shared.Module',

    requires: [
        'Ext.data.ArrayStore',
        'Ext.util.Format',
        'Ext.grid.Panel',
        'Ext.grid.RowNumberer'
    ],

    id: 'sub-shortcut-transaction',

    init: function () {
        this.launcher = {
            text: 'Transaction',
            iconCls: 'icon-grid'
        };
    },

    createWindow: function () {
        var desktop = this.app.getDesktop();
        var win = desktop.getWindow('grid-win');
        if (!win) {
            win = desktop.createWindow({
                height: 500,
                width: 800,
                modal: false,
                border: false,
                minimizable: false,
                maximizable: false,
                id: 'sub-shortcut-transaction',
                title: 'Transaction',
                closable: true,
                iconCls: 'icon-grid',
                layout: 'fit',
                items: [{
                    xtype: 'tabpanel',
                    dock: 'top',
                    height: 224,
                    activeTab: 0,
                    tabPosition: 'left',
                    layout: {
                        deferredRender: false,
                        type: 'card'
                    },
                    items: [
                        {
                            xtype: 'panel',
                            icon: 'test',
                            iconCls: 'test',
                            title: 'Sales',
                            bodyStyle: { "background-color": "#add2ed" }
                        },
                        {
                            xtype: 'panel',
                            icon: 'test',
                            iconCls: 'test',
                            title: 'Purchase',
                            bodyStyle: { "background-color": "#add2ed" }
                        }
                    ]
                }]
            });
        }
        return win;
    }
});
