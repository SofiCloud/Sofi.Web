/*!
* Ext JS Library 4.0
* Copyright(c) 2006-2011 Sencha Inc.
* licensing@sencha.com
* http://www.sencha.com/license
*/

Ext.define('Sofi.MenuModule.Report', {
    extend: 'Sofi.BogusModule',

    init: function () {

        this.launcher = {
            text: 'Report',
            iconCls: 'notepad',
            handler: function () {
                return false;
            },
            menu: {
                items: []
            }
        };

        this.launcher.menu.items.push({
            text: 'Sales',
            iconCls: 'bogus',
            handler: this.createWindow,
            scope: this,
            windowId: windowIndex
        });
        this.launcher.menu.items.push({
            text: 'Purchase',
            iconCls: 'bogus',
            handler: this.createWindow,
            scope: this,
            windowId: windowIndex
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