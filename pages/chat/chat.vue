<template>
	<view class="chat">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		
		/*#ifdef APP-PLUS*/
		<view class="chat-header">
			<span>我的会话</span>
		</view>
		/*#endif*/
		
		<view class="chat-items">
			<view class="chat-item">
				<image src="../../static/chat/qun.png" mode=""></image>
				<view class="item-info">
					<span class="info-name">何益恺</span>
					<span class="info-last-content">
						123
					</span>
				</view>
				<span>2018/12/10 19:58</span>
				<button>删除</button>
			</view>
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
					backgroundColor: '#171425',
					selectedColor: '#fff'
				})
				uni.setNavigationBarColor({
					frontColor: '#ffffff',
					backgroundColor: '#2f2c4d'
				})
			}
		}
	}
</script>

<style lang="scss">
	/*#ifdef APP-PLUS*/
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
	}
	/*#endif*/

	.chat {
		background-color: #171425;
		width: 100vw;
		height: 100vh;
		color: #fff;
		
		/*#ifdef APP-PLUS*/
		.chat-header{
			display: flex;
			justify-content: center;
			align-items: center;
			border-bottom-left-radius: 1rem;
			border-bottom-right-radius: 1rem;
			padding: 1rem;
			background-color: #403d5b;
		}
		/*#endif*/
		
		.chat-items{
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			
			.chat-item{
				background-color: #2f2c4d;
				display: grid;
				grid-template-columns: 1fr 4fr 1fr;
				overflow-x: scroll;
				
				image{
					max-width: 3rem;
					max-height: 3rem;
				}
				
				.item-info{
					display: flex;
					flex-direction: column;
					align-items: flex-start;
					justify-content: space-between;
					background-color: #403d5b;
					
					.item-name{
						font-size: 20px;
						font-weight: 500;
					}
					.item-last-content{
						max-width: 2rem;
						overflow-x: hidden;
					}
				}
			}
		}
	}
</style>