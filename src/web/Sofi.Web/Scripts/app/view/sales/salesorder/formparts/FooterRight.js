Ext.define('Sofi.view.sales.salesorder.formparts.FooterRight', {
	extend: 'Ext.form.Panel',
	requires:['Ext.form.field.Number'],
	alias: 'widget.salessalesorderformpartsfooterright',
	initComponent:function(){

		var listenerskeyup = function(self, e){
			(e.getKey() == e.ENTER) && self.nextSibling().focus();
		};
	
		var dataStoreSubTotal = Ext.create('Ext.data.Store',{
			fields: ['id','name'],
			data:[{ "id":1, "name": "US$"},
			{"id":2, "name":"SG$"}]
		});

		var config = {
			bodyPadding: '5 5 0 5',
			width: 340,
			defaultType: 'numberfield',
			layout:{
				type:'vbox',
				align: 'stretch'
			},
			items:[
				{
					xtype: 'fieldcontainer',
					hideLabel: true,
					defaultType: 'numberfield',
					layout: 'hbox',
					items:[{
						fieldLabel: 'Sub Total',
						name: 'subtotalcurrency',
						width: 180,
						xtype: 'combobox',
						store: dataStoreSubTotal,
						queryMode: 'local',
						displayField:'name',
						valueField:'id',
						editable: false,
						enableKeyEvents: true,
						listeners:{
							keyup: listenerskeyup
						}
					},{
						name: 'subtotal',
						width: 150
					}]
				},{
					xtype: 'fieldcontainer',
					fieldLabel: 'Total Discount',
					defaultType: 'numberfield',
					layout: 'hbox',
					items:[{
						text: '...',
						xtype: 'button',
						enableKeyEvents: true,
						listeners:{
							keyup: listenerskeyup
						}
					},{
						name: 'totaldiscount',
						width: 200
					}]
				},{
					xtype: 'fieldcontainer',
					fieldLabel: 'Total Tax',
					defaultType: 'numberfield',
					layout: 'hbox',
					items:[{
						text: '...',
						xtype: 'button',
						enableKeyEvents: true,
						listeners:{
							keyup: listenerskeyup
						}
					},{
						name: 'totaltaxcurrency',
						width: 50
					},{
						name: 'totaltax',
						width: 150
					}]
				},{
					xtype: 'fieldcontainer',
					fieldLabel: 'Total Charge',
					defaultType: 'numberfield',
					layout: 'hbox',
					items:[{
						text: '...',
						xtype: 'button',
						enableKeyEvents: true,
						listeners:{
							keyup: listenerskeyup
						}
					},{
						name: 'totalcharge',
						width: 200
					}]
				},{
					xtype: 'fieldcontainer',
					fieldLabel: 'Prepaid',
					defaultType: 'numberfield',
					layout: 'hbox',
					items:[{
						text: '...',
						xtype: 'button',
						enableKeyEvents: true,
						listeners:{
							keyup: listenerskeyup
						}
					},{
						name: 'prepaid',
						width: 200
					}]
				},{
					fieldLabel: 'Net Total',
					name: 'nettotal',
					width: 300
				}
			]
		};

		Ext.apply(this, config);
		this.callParent(arguments);
	}
});
