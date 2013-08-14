/*!
* Ext JS Library 4.0
* Copyright(c) 2006-2011 Sencha Inc.
* licensing@sencha.com
* http://www.sencha.com/license
*/
Ext.define('Sofi.Shared.WindowModule', {
    extend: 'Sofi.Shared.Module',
    init: function () {
    },

    createWindow: function (src) {
        var desktop = this.app.getDesktop();
        var win = desktop.getWindow('bogus' + src.windowId);
        if (!win) {
            win = desktop.createWindow({
                id: 'bogus' + src.windowId,
                title: src.text,
                width: src.windowSize.width,
                height: src.windowSize.height,
                iconCls: src.iconCls,
                animCollapse: false,
                constrainHeader: true,
                layout: {
                    type: 'border',
                    padding: 5
                },
                items: src.view
            });
        }
        win.show();
        return win;
    }
});