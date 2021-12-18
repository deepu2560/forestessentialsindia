var data = [
    { imgurl:"https://images.forestessentialsindia.com/pub/media/catalog/product/cache/314dec89b3219941707ad62ccc90e585/i/l/illuminating_ojas_balm_15g_front.png",
        prodhead:"OJAS ILUMMINATING NIGHT BEAUTY",
        prodweight:"15g",
        prodprice:"2000",
    }, { imgurl:"https://images.forestessentialsindia.com/pub/media/catalog/product/cache/314dec89b3219941707ad62ccc90e585/s/o/soundarya_radiance_cream_with_24k_gold_spf25_15g.png",
    prodhead:"SOUNDARYA RADIANCE CREAM",
    prodweight:"25g",
    prodprice:"2080",
    },
    { imgurl:"https://images.forestessentialsindia.com/pub/media/catalog/product/cache/314dec89b3219941707ad62ccc90e585/1/5/15344_anti_pollution_purifying_mist_130ml_front.png",
    prodhead:"ANTI POLLUTION CREAM",
    prodweight:"150g",
    prodprice:"3000",
    }, { imgurl:"https://images.forestessentialsindia.com/pub/media/catalog/product/cache/314dec89b3219941707ad62ccc90e585/a/d/advanced_sanjeevani_beauty_elixir_15g_front.png",
    prodhead:"SANJEEVANI BEAUTY SERUM",
    prodweight:"30g",
        prodprice:"2900",
    }, { imgurl:"https://images.forestessentialsindia.com/pub/media/catalog/product/cache/314dec89b3219941707ad62ccc90e585/s/o/soundarya_advanced_serum_with_24_karat_gold_12ml_front_1.png",
    prodhead:"ADVANCED SERUM 24K",
    prodweight:"15g",
    prodprice:"3400",
    },{ imgurl:"https://images.forestessentialsindia.com/pub/media/catalog/product/cache/314dec89b3219941707ad62ccc90e585/l/i/listing_image2.png",
    prodhead:"TINTED LIP SERUM",
    prodweight:"15g",
    prodprice:"5690",
    },{ imgurl:"https://images.forestessentialsindia.com/pub/media/catalog/product/cache/314dec89b3219941707ad62ccc90e585/a/d/advanced_eternal_youth_formula_15g_front.png",
    prodhead:"ADVANCED YOUTH FORMULA",
    prodweight:"15g",
    prodprice:"2500",
    },{ imgurl:"https://images.forestessentialsindia.com/pub/media/catalog/product/cache/314dec89b3219941707ad62ccc90e585/1/0/1087-png_open.png",
    prodhead:"TINTED LIP SERUM",
        prodweight:"15g",
        prodprice:"4000",
    }, { imgurl:"https://images.forestessentialsindia.com/pub/media/catalog/product/cache/314dec89b3219941707ad62ccc90e585/i/l/illuminating_ojas_balm_15g_front.png",
        prodhead:"OJAS ILUMMINATING NIGHT BEAUTY",
        prodweight:"15g",
        prodprice:"2500",
    }, { imgurl:"https://images.forestessentialsindia.com/pub/media/catalog/product/cache/314dec89b3219941707ad62ccc90e585/s/o/soundarya_radiance_cream_with_24k_gold_spf25_15g.png",
    prodhead:"SOUNDARYA RADIANCE CREAM",
    prodweight:"25g",
    prodprice:"4080",
    },{ imgurl:"https://images.forestessentialsindia.com/pub/media/catalog/product/cache/314dec89b3219941707ad62ccc90e585/a/d/advanced_eternal_youth_formula_15g_front.png",
    prodhead:"ADVANCED YOUTH FORMULA",
    prodweight:"15g",
    prodprice:"200",
    },{ imgurl:"https://images.forestessentialsindia.com/pub/media/catalog/product/cache/314dec89b3219941707ad62ccc90e585/1/0/1087-png_open.png",
    prodhead:"TINTED LIP SERUM",
        prodweight:"15g",
        prodprice:"3000",
    },{ imgurl:"https://images.forestessentialsindia.com/pub/media/catalog/product/cache/314dec89b3219941707ad62ccc90e585/1/5/15344_anti_pollution_purifying_mist_130ml_front.png",
    prodhead:"ANTI POLLUTION CREAM",
    prodweight:"150g",
    prodprice:"5600",
    }, { imgurl:"https://images.forestessentialsindia.com/pub/media/catalog/product/cache/314dec89b3219941707ad62ccc90e585/a/d/advanced_sanjeevani_beauty_elixir_15g_front.png",
    prodhead:"SANJEEVANI BEAUTY SERUM",
    prodweight:"30g",
        prodprice:"1900",
    }, { imgurl:"https://images.forestessentialsindia.com/pub/media/catalog/product/cache/314dec89b3219941707ad62ccc90e585/s/o/soundarya_advanced_serum_with_24_karat_gold_12ml_front_1.png",
    prodhead:"ADVANCED SERUM 24K",
    prodweight:"15g",
    prodprice:"1400",
    },{ imgurl:"https://images.forestessentialsindia.com/pub/media/catalog/product/cache/314dec89b3219941707ad62ccc90e585/l/i/listing_image2.png",
    prodhead:"TINTED LIP SERUM",
    prodweight:"15g",
    prodprice:"3690",
    },
 ]
 var cart = JSON.parse(localStorage.getItem("cart"))|| [];
 var wishlist = JSON.parse(localStorage.getItem("wishlist"))|| [];
 displayItem(data);
 function pricesort(){
    var selected= document.querySelector(".sortbutton").value;
if(selected=="high"){
    data.sort(function(a,b){
        return Number(b.prodprice) - Number(a.prodprice);
    })
}
if(selected=="low"){
    data.sort(function(a,b){
        return Number(a.prodprice) - Number(b.prodprice);
    })
}
displayItem(data);
 }

 function displayItem(data){
    document.querySelector(".facialproducts").textContent="";
data.map(function(elem){
    var maindiv = document.createElement("div");
    var div1 = document.createElement("span");
    var img0 = document.createElement("img");
   
   
    img0.setAttribute("src","https://cdn-icons.flaticon.com/png/512/3870/premium/3870922.png?token=exp=1639563142~hmac=c211f716b578985c0a5f05b4429e170e");
    img0.setAttribute("class","wishlistimg");
    img0.addEventListener("click",addwishlist);
    function addwishlist(){
        addtowishlist(elem);
    }
   
   
    div1.append(img0);
    div1.setAttribute("class","icon-wishlist");
    maindiv.setAttribute("class","productdiv")
    var img = document.createElement("img");
    img.setAttribute("src",elem.imgurl);
    div1.addEventListener("click",function(){
        showProductDetails(elem,data);
    })
    div1.append(img);
   
   
    var name = document.createElement("p");
    name.textContent = elem.prodhead;
   
   
    var qty = document.createElement("P");
    qty.textContent = elem.prodweight;
   
   
    var price =document.createElement("P");
    price.textContent = elem.prodprice;
   
   
    var productbutton = document.createElement("button");
    productbutton.textContent="ADD TO CART";
    productbutton.setAttribute("class","productbutton")
    productbutton.addEventListener("click",addfunc);
   
    function addfunc(){
    addtocart(elem);
}
   
    var smalldiv = document.createElement("div");
    smalldiv.setAttribute("class","smalldiv");
    smalldiv.append(name,qty,price,productbutton);
    maindiv.append(div1,smalldiv);
    document.querySelector(".facialproducts").append(maindiv);
});
}
var details =  []
function showProductDetails(elem , data){
	details.push(elem)	
	localStorage.setItem("productDetails" , JSON.stringify(details))
	localStorage.setItem("related_products" , JSON.stringify(data))
	
	window.location.href = "../pages/productDetails.html"
}

function addtocart(ele){
    cart.push(ele);
    localStorage.setItem("cart",JSON.stringify(cart));
}

function addtowishlist(elem){
    wishlist.push(elem);
    localStorage.setItem("wishlist",JSON.stringify(wishlist));
}