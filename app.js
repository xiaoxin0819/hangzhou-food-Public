const foods=[]

const names=[
"楼外楼","知味观","新白鹿","绿茶餐厅","奎元馆",
"外婆家","张生记","杭州酒家","弄堂里","老头儿油爆虾"
]

const dishes=[
"西湖醋鱼","东坡肉","龙井虾仁","叫花鸡",
"片儿川","虾爆鳝面","葱包桧","小笼包",
"定胜糕","糯米藕","杭三鲜","油爆虾"
]

const categories=["杭帮菜","小吃","面馆","火锅","网红餐厅"]
const districts=["西湖区","上城区","拱墅区","滨江区"]

for(let i=1;i<=320;i++){

foods.push({

name:names+" "+i,
dish:dishes,
category:categories,
district:districts,
rating:(4+Math.random()).toFixed(1),
address:"杭州市"+districts[i%districts.length]+"美食街"+i+"号",
image:"https://source.unsplash.com/400x300/?chinese-food"

})

}

function render(list){

const container=document.getElementById("foodList")

container.innerHTML=""

list.forEach(f=>{

container.innerHTML+=`

<div class="card">

<img src="${f.image}">

<div class="info">

<div class="name">${f.name}</div>

<div class="rating">⭐ ${f.rating}</div>

<div>分类：${f.category}</div>

<div>推荐菜：${f.dish}</div>

<div class="address">
<a href="https://uri.amap.com/search?keyword=${f.name}" target="_blank">
📍 ${f.address}
</a>
</div>

<div class="review">
大众点评：口味很好，本地人常来<br>
美团：性价比高，环境不错<br>
抖音：很多探店博主推荐<br>
小红书：氛围很好适合拍照
</div>

</div>

</div>

`

})

}

render(foods)

function filter(){

let keyword=document.getElementById("search").value
let category=document.getElementById("category").value
let district=document.getElementById("district").value

let filtered=foods.filter(f=>

(f.name.includes(keyword)||f.dish.includes(keyword)) &&
(!category||f.category==category) &&
(!district||f.district==district)

)

render(filtered)

}

document.getElementById("search").addEventListener("input",filter)
document.getElementById("category").addEventListener("change",filter)
document.getElementById("district").addEventListener("change",filter)
