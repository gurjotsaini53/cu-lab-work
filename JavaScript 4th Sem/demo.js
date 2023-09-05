var items = [
    {
        image:'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61d1xNY54HL._AC_UY327_FMwebp_QL65_.jpg',
    
        title:'HP ChromeBook 11a',
        price:21490,
        description:'MediaTek MT8183 Processor 11.6 inch thin and light touchscreen laptop'
    
    },
    {
        image:'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61d1xNY54HL._AC_UY327_FMwebp_QL65_.jpg',
    
        title:'HP ChromeBook 11a',
        price:21490,
        description:'MediaTek MT8183 Processor 11.6 inch thin and light touchscreen laptop'
    
    },
    {
        image:'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61d1xNY54HL._AC_UY327_FMwebp_QL65_.jpg',
    
        title:'HP ChromeBook 11a',
        price:21490,
        description:'MediaTek MT8183 Processor 11.6 inch thin and light touchscreen laptop'
    
    }
    ]

 items.forEach(function(product){
    var productTitle = document.createElement('h2');
    productTitle.innerText = product.title;
    var productImage = document.createElement('img');
    img.src = product.image;
 });