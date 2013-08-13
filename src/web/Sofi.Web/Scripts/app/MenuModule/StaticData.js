/*!
* Ext JS Library 4.0
* Copyright(c) 2006-2011 Sencha Inc.
* licensing@sencha.com
* http://www.sencha.com/license
*/

Ext.define('Sofi.MenuModule.StaticData', {
    extend: 'Sofi.Shared.WindowModule',

    init: function () {

        this.launcher = {
            text: 'Static Data',
            iconCls: 'notepad',
            hideOnClick: false,
            handler: function () {
                return false;
            },
            menu: {
                items: []
            }
        };

        this.launcher.menu.items.push({
            text: 'Item',
            iconCls: 'bogus',
            handler: this.createWindow,
            scope: this,
            windowId: 'item-module'
        });
        this.launcher.menu.items.push({
            text: 'Group',
            iconCls: 'bogus',
            handler: this.createWindow,
            scope: this,
            windowId: 'group-module'
        });
        this.launcher.menu.items.push({
            text: 'Unit',
            iconCls: 'bogus',
            handler: this.createWindow,
            scope: this,
            windowId: 'unit-module'
        });
        this.launcher.menu.items.push({
            text: 'Currency',
            iconCls: 'bogus',
            handler: this.createWindow,
            scope: this,
            windowId: 'currency-module'
        });
    }
});