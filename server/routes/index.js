var express = require('express');
var router = express.Router();
var connection = require('../db/sql.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//查询商品数据接口
router.get('/api/goods/shopList',function(req,res,next){
	//前端给后端的数据
	let [searchName,orderName] = Object.keys(req.query);
	let [name,order] = Object.values(req.query);
	connection.query('select * from goods_list where name like "%'+name+'%" order by '+orderName+' '+order+'',function(error,results){
		res.send({
			code:0,
			data:results
		})
	})
})

//铁观音
router.get('/api/index_list/2/data/1',function (req,res,next){
	res.send({
		data:[
			{
				id:1,
				type:'adList',
				data:[
					{
						id:1,
						imgUrl:'./images/tgy.jpeg'
					},
				]
			},
			{
				id:2,
				type:'likeList',
				data:[
					{
						id:1,
						imgUrl:'./images/like.jpeg',
						name:'建盏茶具套装 红色芝麻毫 12件套',
						price:299
					},
					{
						id:2,
						imgUrl:'./images/like.jpeg',
						name:'建盏茶具套装 红色芝麻毫 12件套',
						price:299
					},
					{
						id:3,
						imgUrl:'./images/like.jpeg',
						name:'建盏茶具套装 红色芝麻毫 12件套',
						price:299
					}
				]
			}
		]
	})
})

//首页大红袍数据
router.get('/api/index_list/1/data/1',function (req,res,next){
	res.send({
		data:[
			{
				id:1,
				type:'adList',
				data:[
					{
						id:1,
						imgUrl:'./images/dhp.jpeg'
					},
				]
			},
			{
				id:2,
				type:'likeList',
				data:[
					{
						id:1,
						imgUrl:'./images/like.jpeg',
						name:'建盏茶具套装 红色芝麻毫 12件套',
						price:299
					},
					{
						id:2,
						imgUrl:'./images/like.jpeg',
						name:'建盏茶具套装 红色芝麻毫 12件套',
						price:299
					},
					{
						id:3,
						imgUrl:'./images/like.jpeg',
						name:'建盏茶具套装 红色芝麻毫 12件套',
						price:299
					}
				]
			}
		]
	})
})
router.get('/api/index_list/0/data/1', function(req, res, next) {
	res.send({
		code:0,
		data:{
			topBar:[
				{id:0,label:'推荐'},
				{id:1,label:'大红袍'},
				{id:2,label:'铁观音'},
				{id:3,label:'绿茶'},
				{id:4,label:'普洱'},
				{id:5,label:'茶具'},
				{id:6,label:'花茶'},
			],
			data:[
				//这是swiper
				{
					id:0,
					type:'swiperList',
					data:[
						{id:0,imgUrl:'./images/swiper1.jpeg'},
						{id:1,imgUrl:'./images/swiper2.jpeg'},
						{id:3,imgUrl:'./images/swiper3.jpeg'}
					]
				},
				//这是icons
				{
					id:1,
					type:'iconsList',
					data:[
						{
							id:1,
							title:'自饮茶',
							imgUrl:'./images/icons1.png'
						},
						{
							id:2,
							title:'茶具',
							imgUrl:'./images/icons2.png'
						},
						{
							id:3,
							title:'茶礼盒',
							imgUrl:'./images/icons3.png'
						},
						{
							id:4,
							title:'领福利',
							imgUrl:'./images/icons4.png'
						},
						{
							id:5,
							title:'官方验证',
							imgUrl:'./images/icons5.png'
						}
					]
				},
				//爆款推荐
				{
					id:3,
					type:'recommendList',
					data:[
						{
							id:1,
							name:'龙井1號铁罐250g',
							content:'鲜爽甘醇 口粮首选',
							price:'68',
							imgUrl:'./images/goods1.jpg'
						},
						{
							id:2,
							name:'龙井1號铁罐250g',
							content:'鲜爽甘醇 口粮首选',
							price:'68',
							imgUrl:'./images/goods4.jpg'
						},
						{
							id:3,
							name:'龙井1號铁罐250g',
							content:'鲜爽甘醇 口粮首选',
							price:'68',
							imgUrl:'./images/goods3.jpg'
						}
					]
				},
				//猜你喜欢
				{
					id:4,
					type:'likeList',
					data:[
						{
							id:1,
							imgUrl:'./images/like.jpeg',
							name:'建盏茶具套装 红色芝麻毫 12件套',
							price:299
						},
						{
							id:2,
							imgUrl:'./images/like.jpeg',
							name:'建盏茶具套装 红色芝麻毫 12件套',
							price:299
						},

						{
							id:3,
							imgUrl:'./images/like.jpeg',
							name:'建盏茶具套装 红色芝麻毫 12件套',
							price:299
						},
						{
							id:4,
							imgUrl:'./images/like.jpeg',
							name:'建盏茶具套装 红色芝麻毫 12件套',
							price:299
						},
						{
							id:5,
							imgUrl:'./images/like.jpeg',
							name:'建盏茶具套装 红色芝麻毫 12件套',
							price:299
						},
						{
							id:6,
							imgUrl:'./images/like.jpeg',
							name:'建盏茶具套装 红色芝麻毫 12件套',
							price:299
						},
						{
							id:7,
							imgUrl:'./images/like3.jpeg',
							name:'建盏茶具套装 红色芝麻毫 12件套',
							price:299
						},
						{
							id:8,
							imgUrl:'./images/like.jpeg',
							name:'建盏茶具套装 红色芝麻毫 12件套',
							price:299
						},
						{
							id:9,
							imgUrl:'./images/like2.jpeg',
							name:'建盏茶具套装 红色芝麻毫 12件套',
							price:299
						},
						{
							id:10,
							imgUrl:'./images/like3.jpeg',
							name:'建盏茶具套装 红色芝麻毫 12件套',
							price:299
						},
					]
				}

			]
		}
	})
});

module.exports = router;
