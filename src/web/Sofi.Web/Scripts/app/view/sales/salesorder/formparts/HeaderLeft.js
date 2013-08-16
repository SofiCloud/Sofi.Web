Ext.define('Sofi.view.sales.salesorder.formparts.HeaderLeft', {
	extend: 'Ext.form.Panel',
	alias: 'widget.salessalesorderformpartsheaderleft',
	initComponent:function(){

		var listenerskeyup = function(self, e){
			(e.getKey() == e.ENTER) && self.nextSibling().focus();
		};
	
		var dataStoreCustomer = Ext.create('Ext.data.Store',{
			fields: ['id','name'],
			data:[{ "id":1, "name": "Budi"},
			{"id":2, "name":"Denny"}]
		});

		var config = {
			bodyPadding: 5,
			layout: 'anchor',
			defaults:{
				anchor: '100%'
			},
			width: 350,
			defaultType: 'textfield',
			items:[{
					fieldLabel: 'Order No',
					name: 'orderno',
					enableKeyEvents: true,
					listeners:{
						keyup: listenerskeyup
					}
				}, {
					fieldLabel: 'Date',
					name: 'date',
					xtype: 'datefield',
					editable: false,
					enableKeyEvents: true,
					listeners:{
						keyup: listenerskeyup
					}
				},
				{
					fieldLabel: 'Customer',
					name: 'customer',
					xtype: 'combobox',
					store: dataStoreCustomer,
					queryMode: 'local',
					displayField:'name',
					valueField:'id',
					editable: false,
					enableKeyEvents: true,
					listeners:{
						keyup: listenerskeyup
					}
				},{
					fieldLabel: 'Requestor',
					name: 'requestor',
					enableKeyEvents: true,
					listeners:{
						keyup: function(thistextfield, e){
							(e.getKey() == e.ENTER) && thistextfield.nextSibling().items.items[0].focus();
						}
					}
				},{
					xtype: 'fieldcontainer',
					hideLabel: true,
					defaultType: 'textfield',
					layout: 'hbox',
					items:[{
						fieldLabel: 'PO No',
						name: 'pono',
						width: 180,
						enableKeyEvents: true,
						listeners:{
							keyup: listenerskeyup
						}
					},{
						fieldLabel: 'PO Date',
						name: 'podate',
						xtype: 'datefield',
						labelWidth: 50,
						editable: false,
						width: 150,
						margin:'margin-left: 8'
					}]
				}]
		};

		Ext.apply(this, config);
		this.callParent(arguments);
	}
});
