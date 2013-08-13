/*!
* Ext JS Library 4.0
* Copyright(c) 2006-2011 Sencha Inc.
* licensing@sencha.com
* http://www.sencha.com/license
*/

Ext.define('Sofi.MenuModule.Report', {
    extend: 'Sofi.Shared.WindowModule',

    init: function () {

        this.launcher = {
            text: 'Report',
            iconCls: 'notepad',
            hideOnClick: false,
            handler: function () {
                return false;
            },
            menu: {
                items: []
            }
        };
    }
});