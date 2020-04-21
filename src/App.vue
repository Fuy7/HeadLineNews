<template>
  <div id="app">
	  <header>
		  新闻头条
	  </header>
	  <nav>
		  <ul>
			<li :class="isActive=='top'?'navInit':' '" @click="nav('top')">头条新闻</li>
			<li :class="isActive=='type'?'navInit':' '" @click="nav('type')">新闻分类</li>
		  </ul>
	  </nav>
	 <!--路由出口-->
    <router-view/>
  </div>
</template>

<script>
	export default{
		
		data(){
			return{
				isActive:'top'
			}
		},
		methods:{
			nav(param){
				if(param == 'top'){
					this.isActive = 'top'
					this.$router.push({path:'/top'})
				}else if(param == 'type'){
					this.isActive = 'type'
					this.$router.push({path:'/type'})
				}
			}


		}
		
		
	}
</script>


<style>
	html,body,div,h1,h2,h3,h4,h5,h6,p,ul,ol,li{
		margin: 0;
		padding: 0;
		font-family: "微软雅黑";
	}
	ul,ol{
		list-style: none;
	}
	header{
		width: 100%;
		height: 48px;
		background-color: #E03D3E;
		text-align: center;
		line-height: 48px;
		color: #fff;
		font-size: 20px;
		letter-spacing: 4px;
	}
	nav ul{
		width: 160px;
		height: 26px;
		margin: 0 auto;
		margin-top: 15px;
		margin-bottom: 15px;
	}
	nav ul li{
		width: 70px;
		height: 26px;
		float: left;
		text-align: center;
		line-height: 26px;
		margin-left: 10px;
	}
	nav ul li:first-child{
		margin-left: 0px;
		margin-right: 10px;
	}
	/* 点击出现下划线 */
	.navInit{
		color: #E03D3E;
		border-bottom: solid 2px #E03D3E; 
	}
</style>
