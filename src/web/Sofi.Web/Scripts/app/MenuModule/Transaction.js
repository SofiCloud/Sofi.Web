/*!
* Ext JS Library 4.0
* Copyright(c) 2006-2011 Sencha Inc.
* licensing@sencha.com
* http://www.sencha.com/license
*/

Ext.define('Sofi.MenuModule.Transaction', {
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
            id: 'bogus-sales',
            text: 'Sales',
            iconCls: 'bogus',
            handler: this.createWindow,
            scope: this,
            windowId: windowIndex
        });
        this.launcher.menu.items.push({
            text: 'Purchase',
            iconCls: 'bogus',
            handler: function () {
                return false;
            },
            scope: this,
            menu: {
                items: [{
                    text: 'Purchase 1',
                    iconCls: 'bogus',
                    //handler: this.createWindow,
                    scope: this,
                    windowId: 'Purchase1',
                    listeners:{
                        itemcontextmenu: function(view, rec, node, index, event) {
                            event.stopEvent();
                            console.log('item');
                            //gridContextMenu.showAt(event.getXY());
                            return false;
                        }
                    }
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
            windowId: windowIndex
        });
        this.launcher.menu.items.push({
            text: 'General Ledger',
            iconCls: 'bogus',
            handler: this.createWindow,
            scope: this,
            windowId: windowIndex
        });
    }
});