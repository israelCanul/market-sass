(function($)
{
    "use strict";
    var resortsMenuLista=$('.columna-resorts');
    var resortsMenuImagen=$('.imagen-resorts');
    var btn_cart=$('#button-cart'); //elemento para abrir y cerrar el carrito de compras
    var cart=$('#wrap-preview-cart');
    var btnClose_preview_cart=$('.close-preview-cart');
    var action_columns = $('.action.column');
    var action_list = $('.action.list');
    var wrap_items=$('.wrap-product-items');
    var close_item_cart=$('.close-item-cart');
    var add_unit_item_cart=$('.action.add-unit-item');
    var remove_unit_item_cart=$('.action.remove-unit-item');




	$(window).ready(function(){

  //setea el primer objeto que se va a mostrar al abrir el mega menu
  resortsMenuImagen.html('<img class="responsive-img imagen-resorts" src="'+hoteles('THE ROYAL CANCUN').img+'" alt="" itemprop="image">');
  //inicializamos el menu dropdown
  $(".dropdown").dropdown({
			hover:true,
			belowOrigin: true,
	});
  //inicializamos todos los select de la plantilla
   $('select').material_select();
  //inicalizamos el menu mobile
  $(".button-collapse").sideNav({edge:'right'});//inicializar la navegacion
  $("#button-departaments").sideNav();
  // declaracion e inicializacion del carousel gallery de la pagina
  $("#owl-demo").owlCarousel({
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      autoPlay:5000
  });
  $("#owl-demo-2").owlCarousel({
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      autoPlay:5000
  });
  $("#owl-demo-3").owlCarousel({
      items : 3, //10 items above 1000px browser width
      itemsDesktop : [1000,3], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,3], // betweem 900px and 601px
      itemsTablet: [600,2], //2 items between 600 and 0
      itemsMobile : true, // itemsMobile disabled - inherit from itemsTablet option
      autoPlay:5000,
      pagination:false
  });

  submenus();//inicializacion de los submenus

  //set handler event to button cart component
  btn_cart.on('click',function(){
    cart.toggleClass('active');
    btn_cart.closest('.right').toggleClass('active');
  });
  btnClose_preview_cart.on('click',function(){
    cart.toggleClass('active');
    btn_cart.closest('.right').toggleClass('active');
  });
  action_list.on('click',function(){
    if(!wrap_items.hasClass('list')){
      wrap_items.removeClass('column');
      wrap_items.addClass('list');
      action_columns.removeClass('active');
      $(this).toggleClass('active');
    }
  });
  action_columns.on('click',function(){

    if(!wrap_items.hasClass('column')){
      wrap_items.removeClass('list');
      wrap_items.addClass('column');
      action_list.removeClass('active');
      $(this).toggleClass('active');
    }
  });

  close_item_cart.on('click',function(){
    var padre=$(this).closest('.item');
    padre.remove();
  });

  add_unit_item_cart.on('click',function(){
    var padre=$(this).closest('.wrap-units');
    var input=padre.find('input');
    input.val(Number(input.val())+1);
  });
  remove_unit_item_cart.on('click',function(){
    var padre=$(this).closest('.wrap-units');
    var input=padre.find('input');
    var resultado=Number(input.val())-1;
    if(resultado>-1) input.val(resultado);
  });

});// final del window ready

$(window).on("scroll", function() {
  var actual = $(this).scrollTop();

  if(actual>=100){
    console.log('entro');
    //$('.menu_fixed').removeClass('hide');
    $('#top-menu').hide();
  }else{
    //$('#top-menu').addClass('hide');
    $('#top-menu').show();
  }
});

  $(window).resize(function() {
    var ancho=$(window).width();
    if(ancho<601){
      wrap_items.removeClass('column');
      wrap_items.addClass('list');
      action_columns.removeClass('active');
      action_list.addClass('active');
    }
    submenus();
  });

//
//variables
//




//
//Funciones
//

  //cualquier lista con la estrcutura indicada podra ser jalada e insertada en los componentes padres asignados
  function submenus(){
    var padre=$('li .wrap-submenu');
    padre.each(function(){
        var padre=$(this).closest('li');
        var namehijo=$(this).data("submenu");
        var hijo=$('#'+namehijo);
        var posicionPadre=$(this).position();
        var final=hijo;
        hijo.remove();
        padre.append(final);
        hijo.css({
           'left': posicionPadre.left,
            display:"none",
            opacity:1
        });
        $(this).hover(
          function(){
            hijo.css({
              display:'block',
              opacity:1
            });
          },function(){
            hijo.css({
              display:"none",
              opacity:0
            });
        });
        hijo.hover(
          function(){
            hijo.css({
              display:'block',
              opacity:1
            });
          },function(){
            hijo.css({
              display:"none",
              opacity:0
            });
        });
        hijo.find('a').hover(function(event){

              event.preventDefault();// evitar que se ejecute el link
              var resort=hoteles($(this).text());
              if(resort!=null && resort!=""){
              resortsMenuImagen.html('<img class="responsive-img imagen-resorts" src="'+resort.img+'" alt="" itemprop="image">');
              }
        });
        console.log(padre);
    });
  }
  function hoteles(hotel){
    var hoteles={
      'THE ROYAL CANCUN':{
        'accomodations':'/discover-royal-resorts/the-royal-cancun/',
        'photo_gallery':'/discover-royal-resorts/the-royal-cancun/',
        'location':'/discover-royal-resorts/the-royal-cancun-location/',
        'tours':'/discover-royal-resorts/the-royal-cancun/',
        'royal_experiences':'/discover-royal-resorts/the-royal-cancun/',
        'img':'https://www.royalresorts.com/wp-content/uploads/2016/01/the-royal-cancun-2.jpg',
        'url':'/discover-royal-resorts/the-royal-cancun/',
        'img_s':'https://www.royalresorts.com/wp-content/uploads/2016/04/TRC.png',
        'mapa':'/discover-royal-resorts/the-royal-cancun/#mapa-resort',
        'airport':'https://app.royalresorts.com/forms/airport_transfers.aspx',
        'tittle':'THE ROYAL CANCUN',
      },
      'THE ROYAL SANDS':{
        'accomodations':'/discover-royal-resorts/the-royal-sands/',
        'photo_gallery':'/discover-royal-resorts/the-royal-sands/',
        'location':'/discover-royal-resorts/the-royal-sands-location/',
        'tours':'/discover-royal-resorts/the-royal-sands/',
        'royal_experiences':'/discover-royal-resorts/the-royal-sands/',
        'img':'https://www.royalresorts.com/wp-content/uploads/2016/01/the-royal-sands-2.jpg',
        'url':'/discover-royal-resorts/the-royal-sands/',
        'img_s':'https://www.royalresorts.com/wp-content/uploads/2016/04/RS.png',
        'mapa':'/discover-royal-resorts/the-royal-sands/#mapa-resort',
        'airport':'https://app.royalresorts.com/forms/airport_transfers.aspx',
        'tittle':'THE ROYAL SANDS',
      },
      'THE ROYAL CARIBBEAN':{
        'accomodations':'/discover-royal-resorts/the-royal-caribbean/',
        'photo_gallery':'/discover-royal-resorts/the-royal-caribbean/',
        'location':'/discover-royal-resorts/the-royal-caribbean-location/',
        'tours':'/discover-royal-resorts/the-royal-caribbean/',
        'royal_experiences':'/discover-royal-resorts/the-royal-caribbean/',
        'img':'https://www.royalresorts.com/wp-content/uploads/2016/01/the-royal-caribbean-2.jpg',
        'url':'/discover-royal-resorts/the-royal-caribbean/',
        'img_s':'https://www.royalresorts.com/wp-content/uploads/2016/04/RC.png',
        'mapa':'/discover-royal-resorts/the-royal-caribbean/#mapa-resort',
        'airport':'https://app.royalresorts.com/forms/airport_transfers.aspx',
        'tittle':'THE ROYAL CARIBBEAN',
      },
      'THE ROYAL ISLANDER':{
        'accomodations':'/discover-royal-resorts/the-royal-islander/',
        'photo_gallery':'/discover-royal-resorts/the-royal-islander/',
        'location':'/discover-royal-resorts/the-royal-islander-location/',
        'tours':'/discover-royal-resorts/the-royal-islander/',
        'royal_experiences':'/discover-royal-resorts/the-royal-islander/',
        'img':'https://www.royalresorts.com/wp-content/uploads/2016/01/the-royal-islander-2.jpg',
        'url':'/discover-royal-resorts/the-royal-islander/',
        'img_s':'https://www.royalresorts.com/wp-content/uploads/2016/04/RI.png',
        'mapa':'/discover-royal-resorts/the-royal-islander/#mapa-resort',
        'airport':'https://app.royalresorts.com/forms/airport_transfers.aspx',
        'tittle':'THE ROYAL ISLANDER',
      },
      'THE ROYAL HACIENDAS':{
        'accomodations':'/discover-royal-resorts/the-royal-haciendas/',
        'photo_gallery':'/discover-royal-resorts/the-royal-haciendas/',
        'location':'/discover-royal-resorts/the-royal-haciendas-location/',
        'tours':'/discover-royal-resorts/the-royal-haciendas/',
        'royal_experiences':'/discover-royal-resorts/the-royal-haciendas/',
        'img':'https://www.royalresorts.com/wp-content/uploads/2016/01/the-royal-haciendas-2.jpg',
        'url':'/discover-royal-resorts/the-royal-haciendas/',
        'img_s':'https://www.royalresorts.com/wp-content/uploads/2016/04/RH.png',
        'mapa':'/discover-royal-resorts/the-royal-haciendas/#mapa-resort',
        'airport':'https://app.royalresorts.com/forms/airport_transfers.aspx',
        'tittle':'THE ROYAL HACIENDAS',
      },
      'GRAND RESIDENCES':{
        'accomodations':'/discover-royal-resorts/grand-residences/',
        'photo_gallery':'/discover-royal-resorts/grand-residences/',
        'location':'/discover-royal-resorts/grand-residences-location/',
        'tours':'/discover-royal-resorts/grand-residences/',
        'royal_experiences':'/discover-royal-resorts/grand-residences/',
        'img':'https://www.royalresorts.com/wp-content/uploads/2016/04/GR.png',
        'url':'/discover-royal-resorts/grand-residences/',
        'img_s':'https://www.royalresorts.com/wp-content/uploads/2016/04/GR.png',
        'mapa':'/discover-royal-resorts/grand-residences/#mapa-resort',
        'airport':'https://app.royalresorts.com/forms/airport_transfers.aspx',
        'tittle':'GRAND RESIDENCES',
      },
      'CARIBBEAN RESORTS':{
        'accomodations':'http://www.royalresortscaribbean.com/',
        'photo_gallery':'http://www.royalresortscaribbean.com/',
        'location':'http://www.royalresortscaribbean.com/',
        'tours':'/discover-royal-resorts/grand-residences/',
        'royal_experiences':'http://www.royalresortscaribbean.com/',
        'img':'https://www.royalresorts.com/wp-content/uploads/2016/05/Caribbean-Resorts.jpg',
        'url':'http://www.royalresortscaribbean.com/',
        'img_s':'https://www.royalresorts.com/wp-content/uploads/2016/05/Caribbean-Resorts.jpg',
        'airport':'https://app.royalresorts.com/forms/airport_transfers.aspx',
        'mapa':'#',
        'tittle':'CARIBBEAN RESORTS',
      },
      'BECOME A MEMBER':{
        'img':'https://www.royalresorts.com/wp-content/uploads/2016/06/become-member.jpg',
        'url':'/discover-royal-resorts/grand-residences/',
        'img_s':'https://www.royalresorts.com/wp-content/uploads/2016/06/become-member.jpg',
      },
    };
    return hoteles[hotel];
  }


  ////////////////////////////////////////

})(jQuery);
