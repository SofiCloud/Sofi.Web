/*!
* Ext JS Library 4.0
* Copyright(c) 2006-2011 Sencha Inc.
* licensing@sencha.com
* http://www.sencha.com/license
*/

Ext.define('Sofi.MenuModule.Process', {
    extend: 'Sofi.Shared.WindowModule',

    init: function () {

        this.launcher = {
            text: 'Process',
            iconCls: 'notepad',
            handler: function () {
                return false;
            },
            menu: {
                items: []
            }
        };

        this.launcher.menu.items.push({
            text: 'Close Inventory',
            iconCls: 'bogus',
            handler: this.createWindow,
            scope: this,
            windowId: 'close-inv-module'
        });
    }
});