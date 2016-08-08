var React = require('react');
var ReactDOM = require('react-dom'); 


var ContainerMenuPrin = React.createClass({
    render:function(){
        return (
        	    <div className="nav-wrapper">
				      <a href="#" className="brand-logo" > <img style={{background : '#ffffff' }} className="responsive-img" src='https://www.royalresorts.com/wp-content/uploads/2016/01/Royal-Resorts-Logo.png'/></a>
				      <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
				      	<ul className="right hide-on-med-and-down">
					        <li><a className="dropdown" href='https://www.royalresorts.com/discover-royal-resorts/' data-activates="dropdown-1">Nuestros Desarrollos</a></li>
					        <li><a href="https://www.royalresorts.com/guest-services-and-amenities/">Ofertas Especiales</a></li>
					        <li><a className="dropdown" href="https://www.royalresorts.com/destinations/" data-activates="dropdown-2">Servicios y Amenidades</a></li>
					        <li><a href="http://rrsignatureclub.com/">Riviera Maya y Cancun</a></li>
					        

					        	


					        	<ul id="dropdown-1" className="dropdown-content">
								  <li><a href="http://royalresorts.com.mx/the-royal-haciendas.asp" className="azul-fuerte-diseno-text">The Royal Haciendas®</a></li>
								  <li><a href="http://royalresorts.com.mx/the-royal-cancun.asp" className="azul-fuerte-diseno-text">The Royal Cancun®</a></li>
								  <li><a href="http://royalresorts.com.mx/the-royal-sands.asp" className="azul-fuerte-diseno-text">The Royal Sands®</a></li>
								  <li><a href="http://royalresorts.com.mx/the-royal-caribbean.asp" className="azul-fuerte-diseno-text">The Royal Caribbean®</a></li>
								  <li><a href="http://royalresorts.com.mx/the-royal-islander.asp" className="azul-fuerte-diseno-text">The Royal Islander®</a></li>
								  <li><a href="http://grandresidences.com.mx/" className="azul-fuerte-diseno-text">Grand Residences</a></li>
								  <li><a href="http://www.royalreservations.com/resorts.asp#caribbeanresorts" className="azul-fuerte-diseno-text">Desarrollos en el Caribe</a></li>
								</ul>
		      					<ul id="dropdown-2" className="dropdown-content">
								  <li><a href="http://royalresorts.com.mx/paquetes/default.asp" className="azul-fuerte-diseno-text">Paquetes Refine</a></li>
								  <li><a href="http://www.rrsignatureclub.com/es/" className="azul-fuerte-diseno-text">Royal Resorts Signature Club</a></li>
								  <li><a href="http://royalresorts.com.mx/restaurantes.asp" className="azul-fuerte-diseno-text">Restaurantes y Bares</a></li>
								  <li><a href="http://royalresorts.com.mx/spa.asp" className="azul-fuerte-diseno-text">El Spa</a></li>
								  <li><a href="http://royalresorts.com.mx/gimnasio.asp" className="azul-fuerte-diseno-text">Gimnasio</a></li>
								  <li><a href="http://royalresorts.com.mx/ther-royal-mayan.asp" className="azul-fuerte-diseno-text">Actividades y Deportes</a></li>
								  <li><a href="http://royalresorts.com.mx/tienda-de-regalos.asp" className="azul-fuerte-diseno-text">Tiendas de Regalos</a></li>
								  <li><a href="http://royalresorts.com.mx/the-royal-market.asp" className="azul-fuerte-diseno-text">The Royal Market</a></li>
								</ul>						
		      					
				      	</ul>
					    <ul className="side-nav collapsible" data-collapsible="accordion" id="mobile-demo">
					        <li>
								<div className="collapsible-header">Nuestros Desarrollos<i className="material-icons right">arrow_drop_down</i></div>
								<div className="collapsible-body">
						        	<ul >
									  <li><a href="http://royalresorts.com.mx/the-royal-haciendas.asp" className="azul-fuerte-diseno-text">The Royal Haciendas®</a></li>
									  <li><a href="http://royalresorts.com.mx/the-royal-cancun.asp" className="azul-fuerte-diseno-text">The Royal Cancun®</a></li>
									  <li><a href="http://royalresorts.com.mx/the-royal-sands.asp" className="azul-fuerte-diseno-text">The Royal Sands®</a></li>
									  <li><a href="http://royalresorts.com.mx/the-royal-caribbean.asp" className="azul-fuerte-diseno-text">The Royal Caribbean®</a></li>
									  <li><a href="http://royalresorts.com.mx/the-royal-islander.asp" className="azul-fuerte-diseno-text">The Royal Islander®</a></li>
									  <li><a href="http://grandresidences.com.mx/" className="azul-fuerte-diseno-text">Grand Residences</a></li>
									  <li><a href="http://www.royalreservations.com/resorts.asp#caribbeanresorts" className="azul-fuerte-diseno-text">Desarrollos en el Caribe</a></li>
									</ul>									
								</div> 
					        </li>
					        <li><a href="https://www.royalresorts.com/guest-services-and-amenities/">Ofertas Especiales</a></li>
					        <li>
						        <div className="collapsible-header">Servicios y Amenidades<i className="material-icons right">arrow_drop_down</i></div>
					        	<div className="collapsible-body">
			      					<ul>
									  <li><a href="http://royalresorts.com.mx/paquetes/default.asp" className="azul-fuerte-diseno-text">Paquetes Refine</a></li>
									  <li><a href="http://www.rrsignatureclub.com/es/" className="azul-fuerte-diseno-text">Royal Resorts Signature Club</a></li>
									  <li><a href="http://royalresorts.com.mx/restaurantes.asp" className="azul-fuerte-diseno-text">Restaurantes y Bares</a></li>
									  <li><a href="http://royalresorts.com.mx/spa.asp" className="azul-fuerte-diseno-text">El Spa</a></li>
									  <li><a href="http://royalresorts.com.mx/gimnasio.asp" className="azul-fuerte-diseno-text">Gimnasio</a></li>
									  <li><a href="http://royalresorts.com.mx/ther-royal-mayan.asp" className="azul-fuerte-diseno-text">Actividades y Deportes</a></li>
									  <li><a href="http://royalresorts.com.mx/tienda-de-regalos.asp" className="azul-fuerte-diseno-text">Tiendas de Regalos</a></li>
									  <li><a href="http://royalresorts.com.mx/the-royal-market.asp" className="azul-fuerte-diseno-text">The Royal Market</a></li>
									</ul>
					        	</div>
					        </li>
					        <li><a href="http://rrsignatureclub.com/">Riviera Maya y Cancun</a></li>
					       
					    </ul>
				</div>
            )
    }
});


var ContainerMenuTop= React.createClass({
    render:function(){
        return <div className="right"><a href="tel:1-888-838-7842" className="black-text"><i className="material-icons left naraja-fuerte-diseno-text">phone</i>1-888-838-7842</a></div>
	}    
});





ReactDOM.render(<ContainerMenuPrin />, document.getElementById('navegacion')); 
ReactDOM.render(<ContainerMenuTop />, document.getElementById('nav-top-menu')); 









