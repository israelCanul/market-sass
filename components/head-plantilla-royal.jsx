var React = require('react');
var ReactDOM = require('react-dom');


var ContainerMenuPrin = React.createClass({
    render:function(){
        return (
        	    <div className="nav-wrapper">
				      <a href="#" className="brand-logo" > <img style={{background : '#ffffff' }} className="responsive-img" src='https://www.royalresorts.com/wp-content/uploads/2016/01/Royal-Resorts-Logo.png'/></a>
				      <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
				      	<ul className="right hide-on-med-and-down">
					        <li><a className="wrap-submenu" href='https://www.royalresorts.com/discover-royal-resorts/' data-submenu="resorts">DISCOVER ROYAL RESORTS</a></li>
					        <li><a className="dropdown" href="https://www.royalresorts.com/guest-services-and-amenities/" data-activates="dropdown-services-amenities">SERVICE & AMENITIES</a></li>
					        <li><a className="dropdown" href="https://www.royalresorts.com/destinations/" data-activates="dropdown-destinations">DESTINATIONS</a></li>
					        <li><a href="http://rrsignatureclub.com/">SIGNATURE CLUB</a></li>
					        <li><a href="https://www.royalresorts.com/blog-and-newsletter/">BLOG</a></li>
					        <li><a href="https://www.royalresorts.com/special-offers/">VACATIONS SPECIALS</a></li>
					        	<ul id="dropdown-destinations" className="dropdown-content">
								  <li><a href="https://www.royalresorts.com/destinations/cancun-destination-guide/" className="azul-fuerte-diseno-text">CANCUN DESTINATION GUIDE</a></li>
								  <li><a href="https://www.royalresorts.com/destinations/riviera-maya-destination-guide/" className="azul-fuerte-diseno-text">RIVIERA MAYA DESTINATION GUIDE</a></li>
								  <li><a href="https://www.royalresorts.com/destinations/yucatan-destination-guide/" className="azul-fuerte-diseno-text">YUCATAN DESTINATION GUIDE</a></li>
								  <li><a href="https://www.royalresorts.com/destinations/our-recommendations/" className="azul-fuerte-diseno-text">OUR RECOMMENDATIONS</a></li>
								  <li><a href="https://www.royalresorts.com/destinations/weather-in-cancun-and-riviera-maya/" className="azul-fuerte-diseno-text">WEATHER</a></li>
								  <li><a href="https://www.royalresorts.com/weather-and-webcams-in-cancun-and-riviera-maya/" className="azul-fuerte-diseno-text">WEBCAMS</a></li>
								</ul>
		      					<ul id="dropdown-services-amenities" className="dropdown-content">
								  <li><a href="https://app.royalresorts.com/forms/airport_transfers.aspx" className="azul-fuerte-diseno-text">AIRPORT TRANSFERS</a></li>
								  <li><a href="https://www.royalresorts.com/guest-services-and-amenities/refine-all-inclusive-package/" className="azul-fuerte-diseno-text">ALL-INCLUSIVE PACKAGE</a></li>
								  <li><a href="https://www.royalresorts.com/guest-services-and-amenities/restaurants-in-cancun-playa-del-carmen/" className="azul-fuerte-diseno-text">RESTAURANTS & BARS</a></li>
								  <li><a href="https://www.royalresorts.com/guest-services-and-amenities/spa/" className="azul-fuerte-diseno-text">SPA</a></li>
								  <li><a href="https://www.royalresorts.com/guest-services-and-amenities/fitness-center/" className="azul-fuerte-diseno-text">FITNESS CENTER</a></li>
								  <li><a href="https://www.royalresorts.com/guest-services-and-amenities/gift-shops/" className="azul-fuerte-diseno-text">GIFT SHOPS</a></li>
								  <li><a href="https://www.royalresorts.com/guest-services-and-amenities/the-royal-market/" className="azul-fuerte-diseno-text">THE ROYAL MARKET</a></li>
								  <li><a href="https://www.royalresorts.com/guest-services-and-amenities/weddings-and-special-events/" className="azul-fuerte-diseno-text">WEDDINGS & SPECIAL EVENTS</a></li>
								  <li><a href="https://app.royalresorts.com/cybermall/specialGifts.aspx" className="azul-fuerte-diseno-text">GIFTS & CERTIFICATE</a></li>
								  <li><a href="https://www.royalresorts.com/guest-services-and-amenities/activities-sports/" className="azul-fuerte-diseno-text">ACTIVITIES & SPORTS</a></li>
								  <li><a href="https://www.royalresorts.com/guest-services-and-amenities/cancun-tours-water-sports/" className="azul-fuerte-diseno-text">CANCUN TOURS & WATER SPORTS</a></li>
								</ul>

                <div id="resorts" className="submenu-resorts">
                  <ul>
                      <li className="columna-resorts">
                        <ul>
                        <li className="divider"><a href="#">Resorts</a></li>
                        <li><a href="https://www.royalresorts.com/discover-royal-resorts/the-royal-cancun/" className="azul-fuerte-diseno-text">THE ROYAL CANCUN</a></li>
      								  <li><a href="https://www.royalresorts.com/discover-royal-resorts/the-royal-sands/" className="azul-fuerte-diseno-text">THE ROYAL SANDS</a></li>
      								  <li><a href="https://www.royalresorts.com/discover-royal-resorts/the-royal-caribbean/" className="azul-fuerte-diseno-text">THE ROYAL CARIBBEAN</a></li>
      								  <li><a href="https://www.royalresorts.com/discover-royal-resorts/the-royal-islander/" className="azul-fuerte-diseno-text">THE ROYAL ISLANDER</a></li>
      								  <li><a href="https://www.royalresorts.com/discover-royal-resorts/the-royal-haciendas/" className="azul-fuerte-diseno-text">THE ROYAL HACIENDAS</a></li>
      								  <li><a href="https://www.royalresorts.com/discover-royal-resorts/grand-residences/" className="azul-fuerte-diseno-text">GRAND RESIDENCES</a></li>
      								  <li><a href="http://www.royalresortscaribbean.com/" className="azul-fuerte-diseno-text">CARIBBEAN RESORTS</a></li>
      								  <li className="divider"><a href="#" >Member</a></li>
      								  <li><a href="https://www.royalresorts.com/how-to-become-a-member/" className="azul-fuerte-diseno-text">BECOME A MEMBER</a></li>
                        </ul>
                      </li>
                      <li className="imagen-resorts"><img src="" className=""/></li>
                  </ul>
								</div>

				      	</ul>
					    <ul className="side-nav collapsible" data-collapsible="accordion" id="mobile-demo">
					        <li>
								<div className="collapsible-header">DISCOVER ROYAL RESORTS<i className="material-icons right">arrow_drop_down</i></div>
								<div className="collapsible-body">
									<ul >
									  <li><a href="https://www.royalresorts.com/destinations/cancun-destination-guide/" className="azul-fuerte-diseno-text">CANCUN DESTINATION GUIDE</a></li>
									  <li><a href="https://www.royalresorts.com/destinations/riviera-maya-destination-guide/" className="azul-fuerte-diseno-text">RIVIERA MAYA DESTINATION GUIDE</a></li>
									  <li><a href="https://www.royalresorts.com/destinations/yucatan-destination-guide/" className="azul-fuerte-diseno-text">YUCATAN DESTINATION GUIDE</a></li>
									  <li><a href="https://www.royalresorts.com/destinations/our-recommendations/" className="azul-fuerte-diseno-text">OUR RECOMMENDATIONS</a></li>
									  <li><a href="https://www.royalresorts.com/destinations/weather-in-cancun-and-riviera-maya/" className="azul-fuerte-diseno-text">WEATHER</a></li>
									  <li><a href="https://www.royalresorts.com/weather-and-webcams-in-cancun-and-riviera-maya/" className="azul-fuerte-diseno-text">WEBCAMS</a></li>
									</ul>
								</div>
					        </li>
					        <li>
						        <div className="collapsible-header">SERVICE & AMENITIES<i className="material-icons right">arrow_drop_down</i></div>
					        	<div className="collapsible-body">
			      					<ul>
									  <li><a href="https://app.royalresorts.com/forms/airport_transfers.aspx" className="azul-fuerte-diseno-text">AIRPORT TRANSFERS</a></li>
									  <li><a href="https://www.royalresorts.com/guest-services-and-amenities/refine-all-inclusive-package/" className="azul-fuerte-diseno-text">ALL-INCLUSIVE PACKAGE</a></li>
									  <li><a href="https://www.royalresorts.com/guest-services-and-amenities/restaurants-in-cancun-playa-del-carmen/" className="azul-fuerte-diseno-text">RESTAURANTS & BARS</a></li>
									  <li><a href="https://www.royalresorts.com/guest-services-and-amenities/spa/" className="azul-fuerte-diseno-text">SPA</a></li>
									  <li><a href="https://www.royalresorts.com/guest-services-and-amenities/fitness-center/" className="azul-fuerte-diseno-text">FITNESS CENTER</a></li>
									  <li><a href="https://www.royalresorts.com/guest-services-and-amenities/gift-shops/" className="azul-fuerte-diseno-text">GIFT SHOPS</a></li>
									  <li><a href="https://www.royalresorts.com/guest-services-and-amenities/the-royal-market/" className="azul-fuerte-diseno-text">THE ROYAL MARKET</a></li>
									  <li><a href="https://www.royalresorts.com/guest-services-and-amenities/weddings-and-special-events/" className="azul-fuerte-diseno-text">WEDDINGS & SPECIAL EVENTS</a></li>
									  <li><a href="https://app.royalresorts.com/cybermall/specialGifts.aspx" className="azul-fuerte-diseno-text">GIFTS & CERTIFICATE</a></li>
									  <li><a href="https://www.royalresorts.com/guest-services-and-amenities/activities-sports/" className="azul-fuerte-diseno-text">ACTIVITIES & SPORTS</a></li>
									  <li><a href="https://www.royalresorts.com/guest-services-and-amenities/cancun-tours-water-sports/" className="azul-fuerte-diseno-text">CANCUN TOURS & WATER SPORTS</a></li>
									</ul>
					        	</div>
					        </li>
					        <li>
					        	<div className="collapsible-header">DESTINATIONS<i className="material-icons right">arrow_drop_down</i></div>
					        	<div className="collapsible-body">
			      					<ul>
									  <li><a href="https://www.royalresorts.com/discover-royal-resorts/the-royal-cancun/" className="azul-fuerte-diseno-text">THE ROYAL CANCUN</a></li>
									  <li><a href="https://www.royalresorts.com/discover-royal-resorts/the-royal-sands/" className="azul-fuerte-diseno-text">THE ROYAL SANDS</a></li>
									  <li><a href="https://www.royalresorts.com/discover-royal-resorts/the-royal-caribbean/" className="azul-fuerte-diseno-text">THE ROYAL CARIBBEAN</a></li>
									  <li><a href="https://www.royalresorts.com/discover-royal-resorts/the-royal-islander/" className="azul-fuerte-diseno-text">THE ROYAL ISLANDER</a></li>
									  <li><a href="https://www.royalresorts.com/discover-royal-resorts/the-royal-haciendas/" className="azul-fuerte-diseno-text">THE ROYAL HACIENDAS</a></li>
									  <li><a href="https://www.royalresorts.com/discover-royal-resorts/grand-residences/" className="azul-fuerte-diseno-text">GRAND RESIDENCES</a></li>
									  <li className="divider"></li>
									  <li><a href="http://www.royalresortscaribbean.com/" className="azul-fuerte-diseno-text">CARIBBEAN RESORTS</a></li>
									  <li><a href="https://www.royalresorts.com/how-to-become-a-member/" className="azul-fuerte-diseno-text">BECOME A MEMBER</a></li>
									</ul>
					        	</div>
					        </li>
					        <li><a href="http://rrsignatureclub.com/">SIGNATURE CLUB</a></li>
					        <li><a href="https://www.royalresorts.com/special-offers/">BLOG</a></li>
					        <li><a href="https://www.royalresorts.com/special-offers/">VACATIONS SPECIALS</a></li>
					    </ul>
				</div>
            )
    }
});


var ContainerMenuTop= React.createClass({
    render:function(){
        return (
          <div id="contenedor-menu-top" className="">
            <ul className="social_bookmarks left hide-on-med-and-down">
              <li className="social_bookmarks_facebook av-social-link-facebook social_icon_1">
                <a target="_blank" href="https://www.facebook.com/royalresort" aria-hidden="true" className="icon-facebook"  data-av_iconfont="entypo-fontello" title="Facebook"></a>
              </li>
              <li className="social_bookmarks_twitter av-social-link-twitter social_icon_2">
                <a target="_blank" href="https://twitter.com/royalresorts" aria-hidden="true" className="icon-twitter" data-av_iconfont="entypo-fontello" title="Twitter"></a>
              </li>
              <li className="social_bookmarks_instagram av-social-link-instagram social_icon_3">
                <a target="_blank" href="http://instagr.am/royalresorts" aria-hidden="true" className="icon-instagram" data-av_icon="" data-av_iconfont="entypo-fontello" title="Instagram"></a>
              </li>
              <li className="social_bookmarks_pinterest av-social-link-pinterest social_icon_4">
                <a target="_blank" href="https://pinterest.com/royalresorts/" aria-hidden="true" className="icon-pinterest" data-av_icon="" data-av_iconfont="entypo-fontello" title="Pinterest"></a>
              </li>
              <li className="social_bookmarks_mail av-social-link-mail social_icon_5">
                <a href="mailto:askus@royalresorts.com " aria-hidden="true" className="icon-mail" data-av_icon="" data-av_iconfont="entypo-fontello" title="Mail"></a>
              </li>
            </ul>
            <nav className="top-sub-menu">
              <ul id="avia2-menu" className="menu">
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-16179 hide-on-small-only">
                    <a href=""><i className="material-icons left tiny">chat_bubble_outline</i>live Chat</a>
                  </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16352 hide-on-small-only">
                    <a href=""><i className="material-icons left tiny">videocam</i>Webcams</a>
                  </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-16742">
                    <a href="">Members Login</a>
                  </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-16180">
                  <a href="http://royalresorts.com.mx/">Spanish</a></li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-16181 hide-on-small-only">
                    <a href=""><i className="material-icons left tiny">phone</i>1-888838-7842</a>
                  </li>
                <li id="menu-item-19088" className="hidden menu-item menu-item-type-post_type menu-item-object-page menu-item-19088 hide-on-small-only">
                  <a href="tel:+08000488533"><i className="material-icons left tiny">phone</i>UK Toll Free 0-800-048-8533</a>
                  </li>
              </ul>
            </nav>
          </div>
        )
    }
});





ReactDOM.render(<ContainerMenuPrin />, document.getElementById('navegacion'));
ReactDOM.render(<ContainerMenuTop />, document.getElementById('nav-top-menu'));
