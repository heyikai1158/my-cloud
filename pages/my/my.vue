<template>
	<view class="my">
		<view class="header-info">
			<image src="../../static/chat/test1.jpeg" mode=""></image>
			<label for="">早上好，XXX</label>
		</view>
		<view class="my-vip">
			<label for="" class="vip-title">我的会员</label>
			<view class="vip-type">
				<image src="../../static/my/v1.png" mode=""></image>
				<label for="">普通会员</label>
			</view>
		</view>
		<view class="my-size">
			<label for="">剩余容量</label>
			<progress :percent="60" activeColor="#2FC1FF" stroke-width="15" show-info font-size='15' active='true' />
		</view>
		<view class="footer-info">
			<button type="warn">退出登录</button>
		</view>
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
			setTabbarColor() {
				uni.setTabBarStyle({
					backgroundColor: '#fff',
					selectedColor: '#7967fd'
				})
			}
		}
	}
</script>

<style lang="scss">
	.my {
		background-color: #fbfbfb;
		width: 100vw;
		height: 100vh;

		.header-info {
			width: 90%;
			margin: 0 auto;
			padding: 1rem 0;
			border-bottom-left-radius: 1rem;
			border-bottom-right-radius: 1rem;
			font-weight: 600;
			font-size: 1.2rem;
			display: flex;
			align-items: center;
			justify-content: space-between;

			image {
				max-width: 5rem;
				max-height: 5rem;
				border-radius: 50%;
				shape-outside: circle();
			}

			label {
				margin-left: 1rem;
			}
		}

		.my-vip {
			.vip-title {
				margin-left: 0.5rem;
			}

			background-color: #fff;
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 90%;
			margin: 0.5rem auto;
			padding: 0.5rem;
			border-radius: 1rem;

			.vip-type {
				display: flex;
				align-items: center;

				image {
					max-width: 2rem;
					max-height: 2rem;
				}

				label {
					margin: 0 0.5rem;
					font-family: 'Times New Roman', Times, serif;
				}
			}
		}
		
		.my-size{
			width: 90%;
			margin: 0.5rem auto;
			padding: 0.5rem;
			background-color: #fff;
			display: flex;
			flex-direction: column;
			border-radius: 1rem;
		}
		
		.footer-info{
			width: 80%;
			margin: 1rem auto;
		}
	}
</style>