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
			<view class="chat-item" v-for="(item, index) in chatItems" :key="index"
				@touchstart="touchStart($event, index)" @touchend="touchEnd($event, index)" data-index="{{index}}">
				<image src="../../static/chat/test1.jpeg" mode=""></image>
				<view class="item-info" @click="toChat(index)">
					<label class="info-name">何益恺</label>
					<label class="info-last-content">
						123123123123123
					</label>
				</view>
				<label>2018/12/10 19:58</label>
				<button size="mini" v-show="item.showDelButton" @click="clickButton(index)">DEL</button>
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
				showDelButton: false,
				chatItems: [] // 存储chat-item的状态
			};
		},
		onShow() {
			this.setTabbarColor();
		},
		created() {
			const chatItemsCount = 2; // chat-item的数量，根据实际情况修改
			for (let i = 0; i < chatItemsCount; i++) {
				this.chatItems.push({
					showDelButton: false,
					startX: 0
				});
			}
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
			toChat(index) {
				uni.navigateTo({
					url: '/pages/chat/detail/detail?userid=' + index
				})
			},
			touchStart(event, toIndex) {
				// #ifdef MP-WEIXIN
				const index = event.currentTarget.dataset.index;
				this.chatItems[index].startX = event.touches[0].clientX;
				// #endif
				// #ifndef MP-WEIXIN
				this.chatItems[toIndex].startX = event.touches[0].clientX;
				// #endif

			},
			touchEnd(event, toIndex) {
				// #ifdef MP-WEIXIN
				const index = event.currentTarget.dataset.index;
				const endX = event.changedTouches[0].clientX;
				const diff = endX - this.chatItems[index].startX;
				console.log(diff)
				if (Math.abs(diff) >= 50) {
					if (diff > 0) {
						this.chatItems[index].showDelButton = false; // 向右滑动，隐藏DEL按钮
					} else {
						this.chatItems[index].showDelButton = true; // 向左滑动，显示DEL按钮
					}
				}
				// #endif
				// #ifndef MP-WEIXIN
				const endX = event.changedTouches[0].clientX;
				const diff = endX - this.chatItems[toIndex].startX;
				console.log(diff)
				if (Math.abs(diff) >= 50 || diff == 0) {
					if (diff > 0) {
						this.chatItems[toIndex].showDelButton = false; // 向右滑动，隐藏DEL按钮
					} else {
						this.chatItems[toIndex].showDelButton = true; // 向左滑动，显示DEL按钮
					}
				}
				// #endif
			},
			clickButton(index) {
				console.log("点击按钮");
			}
		}
	}
</script>

<style lang="scss" scoped>
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
			align-items: center;
			padding-top: 0.2rem;

			.chat-item {
				width: 93%;
				max-height: 3rem;
				overflow: hidden;
				background-color: #403d5b;
				display: flex;
				// column-gap: 1rem;
				// box-shadow: 0 3px 6px 0 rgba(199, 85, 237, 0.2), 0 -3px 6px 0 rgba(0, 200, 250, 0.26);
				border-radius: 1rem;
				padding: 0.5rem;
				margin: 0.2rem auto;

				image {
					border-radius: 50%;
					max-width: 3rem;
					max-height: 3rem;
					margin-right: 0.5rem;
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
				}
			}
		}
	}
</style>