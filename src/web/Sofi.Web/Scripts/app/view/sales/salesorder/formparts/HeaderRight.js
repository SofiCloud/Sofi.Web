Ext.define('Sofi.view.sales.salesorder.formparts.HeaderRight', {
	extend: 'Ext.form.Panel',
	alias: 'widget.salessalesorderformpartsheaderright',
	initComponent:function(){

		var listenerskeyup = function(self, e){
			(e.getKey() == e.ENTER) && self.nextSibling().focus();
		}

		var dataStorePaymentTerm = Ext.create('Ext.data.Store',{
			fields: ['id','name','value'],
			data:[{ "id":1, "name": "Right Now", "value":"0"},
			{"id":2, "name":"15 Days", "value": "15"},
			{"id": 3, "name": "30 Days", "value": "30"},
			{"id": 4, "name": "45 Days", "value": "45"}
			]
		});

		var dataStoreSalesman = Ext.create('Ext.data.Store',{
			fields:['id', 'name'],
			data:[
			{ id:1, name: "Salesman 1"},
			{ id: 2, name: "Salesman 2" },
			{ id: 3, name: "Salesman 3"}]
		});

		var dataStoreDivision = Ext.create('Ext.data.Store',{
			fields:['id', 'name'],
			data:[
			{ id:1, name: "Division 1"},
			{ id: 2, name: "Division 2" },
			{ id: 3, name: "Division 3"}]
		});

		var dataStoreDepartement = Ext.create('Ext.data.Store',{
			fields:['id', 'name'],
			data:[
			{ id:1, name: "Departement 1"},
			{ id: 2, name: "Departement 2" },
			{ id: 3, name: "Departement 3"}]
		});

		var dataStoreProject = Ext.create('Ext.data.Store',{
			fields:['id', 'name'],
			data:[
			{ id:1, name: "Project 1"},
			{ id: 2, name: "Project 2" },
			{ id: 3, name: "Project 3"}]
		});

		var config = {
			bodyPadding: 5,
			layout: 'anchor',
			defaults:{
				anchor: '100%'
			},
			defaultType: 'combobox',
			items:[, {
					fieldLabel: 'Payment Term',
					name: 'paymentterm',
					store: dataStorePaymentTerm,
					queryMode: 'local',
					displayField:'name',
					valueField:'value',
					editable: false,
					enableKeyEvents: true,
					listeners:{
						keyup: listenerskeyup
					}
				}, {
					fieldLabel: 'Salesman',
					name: 'salesman',
					store: dataStoreSalesman,
					queryMode: 'local',
					displayField:'name',
					valueField:'id',
					editable: false,
					enableKeyEvents: true,
					listeners:{
						keyup: listenerskeyup
					}
				}, {
					fieldLabel: 'Division',
					name: 'division',
					store: dataStoreDivision,
					queryMode: 'local',
					displayField:'name',
					valueField:'id',
					editable: false,
					enableKeyEvents: true,
					listeners:{
						keyup: listenerskeyup
					}
				}, {
					fieldLabel: 'Departement',
					name: 'departement',
					store: dataStoreDepartement,
					queryMode: 'local',
					displayField:'name',
					valueField:'id',
					editable: false,
					enableKeyEvents: true,
					listeners:{
						keyup: listenerskeyup
					}
				}, {
					fieldLabel: 'Project',
					name: 'project',
					store: dataStoreProject,
					queryMode: 'local',
					displayField:'name',
					valueField:'id',
					editable: false
				}]
		};

		Ext.apply(this, config);
		this.callParent(arguments);
	}
});
