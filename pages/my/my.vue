<template>
	<view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		onShow() {
			this.setTabbarColor();
		},
		methods: {
			setTabbarColor(){
				uni.setTabBarStyle({
					backgroundColor:'#fff',
					selectedColor:'#7967fd'
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
