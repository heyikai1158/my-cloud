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
			<view class="chat-item" @touchstart="touchStart" @touchend="touchEnd">
				<image src="../../static/chat/qun.png" mode=""></image>
				<view class="item-info">
					<label class="info-name">何益恺</label>
					<label class="info-last-content">
						123123123123123
					</label>
				</view>
				<label>2018/12/10 19:58</label>
				<button size="mini">DEL</button>
			</view>
			<view class="chat-item" @touchstart="touchStart" @touchend="touchEnd">
				<image src="../../static/chat/qun.png" mode=""></image>
				<view class="item-info">
					<label class="info-name">何益恺</label>
					<label class="info-last-content">
						123123123123123
					</label>
				</view>
				<label>2018/12/10 19:58</label>
				<button size="mini">DEL</button>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				//初始化点击位置的x坐标
				startX: 0,
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
			},
			touchStart: function(e) {
				if (e.touches.length == 1) {
					//设置触摸起始点水平方向位置
					this.startX = e.touches[0].clientX;
				}
			},
			touchEnd: function(e) {
				if (e.changedTouches.length == 1) {
					//手指移动结束后水平位置
					var endX = e.changedTouches[0].clientX;
					let diff = endX - this.startX;
					if (Math.abs(diff) >= 50) {
						console.log('打印' + diff)
						if (diff >= 0) {
							console.log('左滑');
							console.log(e)
							// 向右滑动，隐藏DEL按钮
							e.target.querySelector('button').classList.remove('show-btn');
						} else {
							console.log('右滑');
							// 向左滑动，显示DEL按钮
							e.target.querySelector('button').classList.add('show-btn');
						}
					}
				}
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
		.chat-header {
			display: flex;
			justify-content: center;
			align-items: center;
			border-bottom-left-radius: 1rem;
			border-bottom-right-radius: 1rem;
			padding: 1rem;
			background-color: #403d5b;
		}

		/*#endif*/

		.chat-items {
			width: 100vw;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: flex-start;

			.chat-item {
				width: 95%;
				max-height: 3rem;
				overflow: hidden;
				background-color: #403d5b;
				display: flex;
				column-gap: 1rem;
				box-shadow: 0 3px 6px 0 rgba(199, 85, 237, 0.2), 0 -3px 6px 0 rgba(0, 200, 250, 0.26);
				border-radius: 1rem;
				margin: 0.5rem auto;
				padding: 0.1rem 0.5rem;

				image {
					border-radius: 50%;
					max-width: 3rem;
					max-height: 3rem;
				}

				.item-info {
					flex-grow: 1;
					display: flex;
					flex-direction: column;
					align-items: flex-start;
					justify-content: space-evenly;

					.item-name {
						font-size: 20px;
						font-weight: 500;
					}

					.item-last-content {
						max-width: 2rem;
						overflow-x: hidden;
					}
				}

				label {
					flex: 1;
					display: flex;
					align-items: center;
					font-weight: 100;
				}

				button {
					background-color: #F34541;
					color: #fff;
					font-size: 16px;
					font-weight: 600;
					flex: 0.5;
					display: flex;
					justify-content: center;
					align-items: center;
					border-radius: 20px;
					margin-left: 0.5rem;
					// transform: translateX(500%);
					right: -4rem;
				}


				@keyframes btnIn {
					0% {
						transform: translateX(500%);
					}

					100% {
						transform: translateX(0);
					}
				}

				.show-btn {
					right: 0;
					animation: btnIn 1.5s ease-in-out 0s forwards;
				}
			}
		}
	}
</style>