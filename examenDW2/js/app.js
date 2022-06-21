// Dom7
var $$ = Dom7;

// Init App
var app = new Framework7({
  	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: true
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'App Staff',
	panel: {

		swipe: true,

	},
  	routes: [
		{
		path: '/shoes/',
    	url: 'index.html',
    	name: 'shoes',
  		},
		{
		path: '/sobre-staff/',
    	url: 'sobre-staff.html',
    	name: 'sobre-staff',
  		},
		{
		path: '/checkout/',
    	url: 'checkout.html',
    	name: 'checkout',
  		},
		
	],
	dialog: {
		title: '¡Shoes and Bags!',
		buttonOk: 'Aceptar',
  	},
	popup: {
		closeOnEscape: true,
		backdrop : false
	},
	sheet: {
		closeOnEscape: true,
	},
	popover: {
		closeOnEscape: true,
	},
	actions: {
		closeOnEscape: true,
	}
});



$$('#btnLogin').on('click', function (e) {
	e.preventDefault();
	
	var $valid = $$('#form-login')[0].checkValidity();
	if ($valid){
        $$('#form-login').trigger('reset');	
        app.loginScreen.close('#modal-login');
		
		app.dialog.alert('¡Gracias por unírte al servicio de Shoes!');
    }
	
});



$$(document).on('click', '#btnCheckout', function (e) {
	e.preventDefault();


	app.dialog.confirm('¿Seguro desea finalizar su compra?', function () {

		

		//app.dialog.alert('Great!');

	
		var notification = app.notification.create({
		 icon: '<i class="material-icons">check</i>',
		 title: 'Compra Completada',
		 titleRightText: '',
		 subtitle: '',
		 text: "Tu orden a sido recibida, muchas gracias por tu compra.",
		 closeTimeout: 3000,
		});
		notification.open();
		
		
	});
	
});





