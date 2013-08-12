/*!
* Ext JS Library 4.0
* Copyright(c) 2006-2011 Sencha Inc.
* licensing@sencha.com
* http://www.sencha.com/license
*/
Ext.Loader.setPath({
    'Sofi': '/Scripts/app'
});

Ext.require('Sofi.Sales.SalesOrder.Create');

Ext.onReady(function () {
    new Sofi.Sales.SalesOrder.Create();
});
