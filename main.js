let list=document.getElementById('list')
let filter=document.querySelector('.filter')
let count=document.getElementById('count')
let litsProducts=[
    {
        id:1,
        name:'Name product white',
        price:'205600',
        quantity: 0,
        image:'img1.jpg',
        nature:{
            color: ['white','black'],
            size: ['S','M','L'],
            type: 'T-shirt'
        }
    },
    {
        id:2,
        name:'Name product black',
        price:'300000',
        quantity: 30,
        image:'img2.png',
        nature:{
            color: ['white','black','yellow'],
            size: ['S','M','L'],
            type: 'Polo'
        }
    },
    {
        id:3,
        name:'Name product red',
        price:'400000',
        quantity: 30,
        image:'img3.jpg',
        nature:{
            color: ['white','black','red'],
            size: ['S','M','L'],
            type: 'T-shirt'
        }
    },
    {
        id:4,
        name:'Name product white-black',
        price:'400000',
        quantity: 30,
        image:'img4.jpg',
        nature:{
            color: ['white','black','red'],
            size: ['S','M','L'],
            type: 'Polo'
        }
    },
    {
        id:5,
        name:'Name product brown',
        price:'320000',
        quantity: 30,
        image:'img5.jpg',
        nature:{
            color: ['brown'],
            size: ['S','M','L'],
            type: 'Polo'
        }
    },
    {
        id:6,
        name:'Name product white-black',
        price:'320000',
        quantity: 30,
        image:'img6.jpg',
        nature:{
            color: ['white','black'],
            size: ['S','M','L'],
            type: 'Shirt'
        }
    },
];
let producFilter=litsProducts;
showProduct(producFilter)
function showProduct(producFilter){
    count.innerText=producFilter.length;
    list.innerHTML='';
    producFilter.forEach(item =>{
        let newItem=document.createElement('div');
        newItem.classList.add('item');

        let newImage=new Image();
        newImage.src=item.image;
        newItem.appendChild(newImage)

        let newTitle=document.createElement('div');
        newTitle.classList.add('title');
        newTitle.innerText=item.name;
        newItem.appendChild(newTitle);

        let newPrice=document.createElement('div');
        newPrice.classList.add('price');
        newPrice.innerText=item.price.toLocaleString()+ ' đ';
        newItem.appendChild(newPrice);
        list.appendChild(newItem);
    })
}

filter.addEventListener('submit',function(event){
    event.preventDefault();
    let valueFilter=event.target.elements;
    producFilter=litsProducts.filter(item=>{
        if(valueFilter.category.value!= ''){
            if(item.nature.type!= valueFilter.category.value){
                return false;
            }
        }
        if(valueFilter.color.value!= ''){
            if(!item.nature.color.includes(valueFilter.color.value)){
                return false;
            }
        }
        if(valueFilter.name.value!= ''){
            if(!item.name.includes(valueFilter.name.value)){
                return false;
            }
        }
        if(valueFilter.minPrice.value!= ''){
            if(item.price<valueFilter.minPrice.value){
                return false;
            }
        }

        if(valueFilter.maxPrice.value!= ''){
            if(item.price>valueFilter.maxPrice.value){
                return false;
            }
        }
        return true;
    })
    showProduct(producFilter)
})