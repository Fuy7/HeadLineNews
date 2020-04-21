<template>
	<div>
		<article>
			<img src="../assets/logo.png">
		</article>
		
		<NewsList :data="newsList"></NewsList>
	</div>
</template>

<script>
	import NewsList from '@/components/NewsList.vue'
	export default{
		data(){
			return{
				newsList:[]
			}
		},
		methods:{
			
		},
		mounted() {
			this.$axios.get('/juheNews',{
				params:{
					key:'de7bf8847cdf09198414f823f5e62e12'
				}
			})
			.then(response => {
				console.log(response)
				this.newsList = response.data.result.data
			})
			.catch(error => {
				console.log(error)
			})
		},
		components:{
			NewsList
		}
	}
</script>

<style scoped>
	article img{
		width: 100%;
		height: 100px;
		display: block;
	}
</style>
