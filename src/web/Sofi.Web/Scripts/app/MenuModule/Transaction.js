/*!
* Ext JS Library 4.0
* Copyright(c) 2006-2011 Sencha Inc.
* licensing@sencha.com
* http://www.sencha.com/license
*/

Ext.define('Sofi.MenuModule.Transaction', {
    extend: 'Sofi.Shared.WindowModule',

    requires: ["Sofi.Sales.SalesOrder.Create"],
    init: function () {
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
        });

        this.launcher.menu.items.push({
            text: 'Purchase',
            iconCls: 'bogus',
            handler: function () {
                return false;
            },
            scope: this,
            windowId: 'purchase-module',
            menu: {
                items: [{
                    text: 'Purchase 1',
                    iconCls: 'bogus',
                    handler: this.createWindow,
                    scope: this,
                    windowId: 'Purchase1'
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