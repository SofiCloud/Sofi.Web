/*!
* Ext JS Library 4.0
* Copyright(c) 2006-2011 Sencha Inc.
* licensing@sencha.com
* http://www.sencha.com/license
*/

Ext.define('Sofi.MenuModule.Transaction', {
<<<<<<< HEAD
    extend: 'Sofi.BogusModule',
    init: function () {
        var replaceAction = Ext.create('Ext.Action', {
            text: 'Replace above text with selected value',
            handler: function (widget, event) {
                var rec = grid.getSelectionModel().getSelection()[0];
                if (rec) {
                    Ext.get("playcontainer").update(rec.get('name'));
                } else {
                    alert('Please select a name from the grid');
                }
            }
        });

        var gridContextMenu = Ext.create('Ext.menu.Menu', {
            items: [
                replaceAction
            ]
        });

=======
    extend: 'Sofi.Shared.WindowModule',

    requires: ["Sofi.Sales.SalesOrder.Create"],
    init: function () {
>>>>>>> 28d14525b41bec83d04ef789b95be7c911316ee0
        this.launcher = {
            text: 'Transaction',
            iconCls: 'bogus',
            handler: function () {
                return false;
            },
            menu: {
                items: []
            }
        };

        this.launcher.menu.items.push({
            id: 'sales-module',
            text: 'Sales',
            iconCls: 'bogus',
            handler: this.createWindow,
            scope: this,
<<<<<<< HEAD
            windowId: windowIndex
=======
            windowId: 'sales-module',
            menu: {
                items: [{
                    text: 'Sales Order',
                    iconCls: 'sales-order',
                    handler: this.createWindow,
                    scope: this,
                    windowId: 'sales-order',
                    windowSize: { 
                        width: '90%',
                        height: '90%'
                    },
                    view: new Sofi.Sales.SalesOrder.Create()
                }]
            }
>>>>>>> 28d14525b41bec83d04ef789b95be7c911316ee0
        });

        this.launcher.menu.items.push({
            text: 'Purchase',
            iconCls: 'bogus',
            handler: function () {
                return false;
            },
            scope: this,
<<<<<<< HEAD
=======
            windowId: 'purchase-module',
>>>>>>> 28d14525b41bec83d04ef789b95be7c911316ee0
            menu: {
                items: [{
                    text: 'Purchase 1',
                    iconCls: 'bogus',
                    //handler: this.createWindow,
                    scope: this,
<<<<<<< HEAD
                    windowId: 'Purchase1',
                    listeners:{
                        itemcontextmenu: function(view, rec, node, index, event) {
                            event.stopEvent();
                            console.log('item');
                            //gridContextMenu.showAt(event.getXY());
                            return false;
                        }
                    }
=======
                    windowId: 'Purchase1'
>>>>>>> 28d14525b41bec83d04ef789b95be7c911316ee0
                }, {
                    text: 'Purchase 2',
                    iconCls: 'bogus',
                    handler: this.createWindow,
                    scope: this,
                    windowId: 'Purchase2'
                }, {
                    text: 'Purchase 3',
                    iconCls: 'bogus',
                    handler: this.createWindow,
                    scope: this,
                    windowId: 'Purchase3'
                }]
            }
        });

        this.launcher.menu.items.push({
            text: 'Inventory',
            iconCls: 'bogus',
            handler: this.createWindow,
            scope: this,
            windowId: 'inventory-module'
        });

        this.launcher.menu.items.push({
            text: 'General Ledger',
            iconCls: 'bogus',
            handler: this.createWindow,
            scope: this,
            windowId: 'gl-module'
        });
    }
});