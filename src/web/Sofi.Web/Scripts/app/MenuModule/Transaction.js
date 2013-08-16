/*!
* Ext JS Library 4.0
* Copyright(c) 2006-2011 Sencha Inc.
* licensing@sencha.com
* http://www.sencha.com/license
*/

Ext.define('Sofi.MenuModule.Transaction', {
    extend: 'Sofi.Shared.WindowModule',
    requires: [
        "Sofi.Sales.SalesOrder.Create",
        "Sofi.controller.sales.SalesOrders",
    ],
    init: function () {
        this.launcher = {
            text: 'Transaction',
            iconCls: 'bogus',
            hideOnClick: false,
            handler: function (launcher, e) {
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
            scope: this,
            windowId: 'sales-module',
            hideOnClick: false,
            menu: {
                items: [{
                    text: 'Sales Order',
                    iconCls: 'sales-order',
                    handler: this.createWindow,
                    scope: this,
                    windowId: 'sales-order',
                    windowSize: { 
                        width: '100%',
                        height: '100%'
                    },
                    view: new Sofi.view.sales.salesorder.Form()
                }]
            }
        });

        this.launcher.menu.items.push({
            text: 'Purchase',
            iconCls: 'bogus',
            hideOnClick: false,
            handler: function () {
                return false;
            },
            scope: this,
            windowId: 'purchase-module',
            menu: {
                items: [{
                    text: 'Purchase 1',
                    iconCls: 'bogus',
                    xtype: 'button',
                    scope: this,
                    windowId: 'Purchase1',
                    listeners:{
                        click: function(){
                            console.log('click');
                        }
                    },
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


        Ext.define('Data', {
            extend: 'Ext.data.Model',
            fields: [
                { name:'html', type:'string' }
            ]
        });

        Ext.create('Ext.data.Store', {
            id:'datasStore',
            model: 'Data',
            data: [
                { html:'show context menu 1'},
                { html:'show context menu 2'}
            ]
        });

        var imageTpl = new Ext.XTemplate('<tpl for=".">',
            '<div class="menu">{html}<div>',
            '</tpl>');

        var test = Ext.create('Ext.view.View', {
            store: Ext.data.StoreManager.lookup('datasStore'),
            tpl: imageTpl,
            itemSelector: 'div.menu'
        });

        var rightclick = new Ext.create('Ext.menu.Menu',{
            width: 100,
            margin: '0 0 10 0',
            plain: true,
            items:[{
                text: 'Item 1'
            },{
                text: 'Item 2'
            }]
        });

        test.on({
            itemcontextmenu:{
                fn:function (test, record, item, index, e, eOpts){
                    e.stopEvent();
                    rightclick.showAt(e.getXY());
                    console.log('kebuka');
                },
                scope: test
            }
        });

        this.launcher.menu.items.push({
            hideOnClick: false,
            text: 'Inventory',
            iconCls: 'bogus',
            hideOnClick: false,
            handler: function(){
                return false;
            },
            scope: this,
            menu: [test]
        });

        this.launcher.menu.items.push({
            text: 'General Ledger',
            iconCls: 'bogus',
            hideOnClick: false,
            handler: function(){
                return false;
            }
        });
    }
});