jQuery(document).ready(function(){jQuery(".dynpost").css("opacity",0);jQuery(".dynpost").waypoint({handler:function(e){jQuery(this.element).addClass("fadeInUp"),jQuery(this.element).css({opacity:"1"})},offset:"80%"});jQuery(".featured-posts").owlCarousel({navigation:!0,slideSpeed:300,singleItem:!0,autoHeight:!0,pagination:!0,navigation:!1,addClassActive:!0,rewindNav:!1}),jQuery(".nav-switch").on("click",function(){jQuery("body").toggleClass("isOpen")})});