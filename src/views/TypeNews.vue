<template>
	<div>
		<article>
			<a :href="news.url">
				<img :src="news.thumbnail_pic_s">
			</a>
		</article>
		<div id="typeNews">
			<ul>
				<li v-for="item in typeList" :class="isAlive==item.id?'typeInit':''" @click="typeChange('item.id')">{{item.name}}</li>
			</ul>
		</div>
		<NewsList :data="newsList"></NewsList>
	</div>
</template>

<script>
	import NewsList from '@/components/NewsList.vue'
	export default{
		data(){
			return{
				newsList:[],
				typeList:[
					{id:'shehui',name:'社会'},
					{id:'guonei',name:'国内'},
					{id:'guoji',name:'国际'},
					{id:'yule',name:'娱乐'},
					{id:'tiyu',name:'体育'},
					{id:'junshi',name:'军事'},
					{id:'keji',name:'科技'},
					{id:'caijing',name:'财经'},
					{id:'shishang',name:'时尚'}
				],
				isAlive:'shehui',
				news:{}
			}
		},
		methods:{
			typeChange(param){
				this.isAlive = param
				this.$axios.get('/juheNews',{
					params:{
						key:'de7bf8847cdf09198414f823f5e62e12',
						type:param
					}
				})
				.then(response => {
					this.newsList = response.data.result.data
					this.news = this.newsList[Math.floor(Math.random()*this.newsList.length)];
				})
				.catch(error => {
					console.log(error)
				})
			}
		},
		components:{
			NewsList
		},
		mounted() {
			this.typeChange('shehui')
		}
		
	}
</script>

<style>
	article a img{
		width: 100%;
		height: 200px;
		display: block;
	}
	#typeNews{
		width: 96%;
		margin: 0 auto;
		height: 68px;
		margin-top: 10px;
	}
	#typeNews ul{
		width: 100%;
	}
	#typeNews ul li{
		float: left;
		width: 45px;
		height: 20px;
		text-align: center;
		line-height: 20px;
		border: solid 1px #E03D3E;
		border-radius: 10px;
		margin: 6px 10px 5px;
		font-size: 14px;
		color: #E03D3E;
	}
	.typeInit{
		color: #FFFFFF !important;
		background-color: #E03D3E;
		
	}
</style>
