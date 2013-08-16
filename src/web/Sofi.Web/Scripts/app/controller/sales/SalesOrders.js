Ext.define('Sofi.controller.sales.SalesOrders', {
	extend: 'Ext.app.Controller',
	views: ['sales.salesorder.Form'],
	stores: ['sales.salesorder.Items'],
	models: ['sales.salesorder.Item'],
	init: function() {
		this.control({
			'salessalesorderformpartsformrightpartsfilter button[action=sortir]': {
				click: function(){
					Ext.Msg.alert("berhasil memakai controller","Tekan OK please!!!");
				}
			}
		});
	}
});