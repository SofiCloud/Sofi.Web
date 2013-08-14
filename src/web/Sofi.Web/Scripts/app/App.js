/*!
* Ext JS Library 4.0
* Copyright(c) 2006-2011 Sencha Inc.
* licensing@sencha.com
* http://www.sencha.com/license
*/
Ext.Loader.setPath({
    'Sofi': 'Scripts/app'
});

Ext.require('Sofi.App');

var SofiApp;
Ext.onReady(function () {
    SofiApp = new Sofi.App();
});

Ext.define('Sofi.App', {
    extend: 'Sofi.Shared.App',

    requires: [
        'Ext.window.MessageBox',
        'Sofi.Shared.ShortcutModel',
        'Sofi.MenuModule.Transaction',
        'Sofi.MenuModule.Process',
        'Sofi.MenuModule.Report',
        'Sofi.MenuModule.StaticData',
        'Sofi.Shared.WindowModule',
        'Sofi.Settings'
    ],
    init: function () {
        this.callParent();

//        Ext.Msg.confirm('Full Screen', 'Are you want to full screen?', function (btn) {
//            if (btn == "yes") {
//                var el = document.documentElement;
//                var rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen;
//                rfs.call(el);
//            }
//        });
    },

    getModules: function () {
        return [
            new Sofi.MenuModule.Transaction(),
            new Sofi.MenuModule.Process(),
            new Sofi.MenuModule.Report(),
            new Sofi.MenuModule.StaticData()
        ];
    },

    getDesktopConfig: function () {
        var me = this, ret = me.callParent();

        return Ext.apply(ret, {
            //cls: 'ux-desktop-black',
            contextMenuItems: [
                { text: 'Change Settings', handler: me.onSettings, scope: me },
                { text: 'Refresh', handler: me.onRefresh, scope: me }
            ],

            shortcuts: Ext.create('Ext.data.Store', {
                model: 'Sofi.Shared.ShortcutModel',
                data: [
                //                    { name: 'Transaction', iconCls: 'grid-shortcut', module: 'sub-shortcut-transaction' },
                //                    { name: 'Report', iconCls: 'accordion-shortcut', module: 'acc-win' },
                //                    { name: 'Process', iconCls: 'notepad-shortcut', module: 'notepad' },
                //                    { name: 'Static Data', iconCls: 'cpu-shortcut', module: 'systemstatus' }
                ]
            }),

            wallpaper: '/Content/images/wallpapers/desk.jpg',
            wallpaperStretch: true
        });
    },

    // config for the start menu
    getStartConfig: function () {
        var me = this, ret = me.callParent();

        return Ext.apply(ret, {
            title: 'Guest',
            iconCls: 'user',
            height: 300,
            toolConfig: {
                width: 100,
                items: [
                    {
                        text: 'Settings',
                        iconCls: 'settings',
                        handler: me.onSettings,
                        scope: me
                    },
                    '-',
                    {
                        text: 'Logout',
                        iconCls: 'logout',
                        handler: me.onLogout,
                        scope: me
                    }
                ]
            }
        });
    },

    getTaskbarConfig: function () {
        var ret = this.callParent();

        return Ext.apply(ret, {
            quickStart: [
//                { name: 'Accordion Window', iconCls: 'accordion', module: 'acc-win' },
//                { name: 'Grid Window', iconCls: 'icon-grid', module: 'grid-win' }
            ],
            trayItems: [
                { xtype: 'trayclock', flex: 1 }
            ]
        });
    },

    onLogout: function () {
        Ext.Msg.confirm('Logout', 'Are you sure you want to logout?', function (btn) {
            if (btn == "yes") {
                window.location = "/Account/LogOff";
            }
        });
    },

    onSettings: function () {
        var dlg = new Sofi.Settings({
            desktop: this.desktop
        });
        dlg.show();
    },

    onRefresh: function () {
        window.location.reload();
    }
});
