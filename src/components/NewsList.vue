<template>
	<div>
		<section>
			<ul>
				<li v-for="newsList in data" @click="handle(newsList.url)">
					<div class="left">
						<img :src="newsList.thumbnail_pic_s" />
					</div>
					<div class="right">
						<h3>{{newsList.title | titleFilter}}</h3>
						<p>{{newsList.author_name}} {{newsList.date}}</p>
					</div>
					<div class="hx"></div>
				</li>
			</ul>
		</section>
	</div>
</template>

<script>
	export default{
		props:['data'],
		methods:{
			handle(url){
				location.href=url
			}
		},
		filters:{
			titleFilter:function(value){
				if(value.length>26){
					return value.substr(0,25)+'...'
				}else{
					return value
				}
				
			}
		}

	}
</script>

<style scoped>
	section{
		width: 100%;
	}
	section ul{
		width: 100%;
		margin-top: 10px;
		
	}
	section ul li{
		width: 96%;
		height: 93px;
		margin: 0 auto;
		cursor: pointer;
		margin-top: 6px;
	}
	section ul li .hx{
		width: 100%;
		height: 0;
		border-bottom: dashed 1px #DDD;
	}
	section ul li .left{
		width: 30%;
		height: 80px;
		float: left;
	}
	section ul li .left img{
		width: 100%;
		height: 80px;
	}
	section ul li .right{
		width: 70%;
		height: 80px;
		float: left;
	}
	section ul li .right h3{
		font-weight: normal;
		font-size: 16px;
		margin-left: 10px;
		margin-bottom: 8px;
	}
	section ul li .right p{
		font-size: 14px;
		text-align: right;
		margin-right: 10px;
	}
</style>
