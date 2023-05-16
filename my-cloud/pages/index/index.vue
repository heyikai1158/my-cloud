<template>
	<view class="content">
		<view class="uni-margin-wrap">
			<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
				:duration="duration">
				<swiper-item>
					<view class="swiper-item uni-bg-red">
						<image class="imgSize"
							src="https://www.hzvtc.edu.cn/__local/E/F6/A3/6F3DD3B69C002C9151647CAEB19_69D76B05_31CD7.jpg"
							mode=""></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-green">
						<image class="imgSize"
							src="https://www.hzvtc.edu.cn/__local/6/E4/BE/84961BF024B1C1997AB340B50E9_A5FB6A3F_214DA.jpg"
							mode=""></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-blue">
						<image class="imgSize"
							src="https://www.hzvtc.edu.cn/__local/A/18/95/5CF567B0CFC27AF189EBFA8F4A7_FA9F12E9_1A732.jpg"
							mode=""></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="file-nav">
			<view class="nav-home">
				<image src="../../static/home.png" mode=""></image>
				<span>主页</span>
			</view>
			<view class="nav-fl">
				/
			</view>
			<view class="nav-item">
				123
			</view>
		</view>
		<view class="file-list">
			<view class="list-title">
				<span>名称</span>
				<span>大小</span>
				<span>操作</span>
			</view>
			<view class="list-items">
				<view class="one-item">
					<view class="item-name">
						<image src="../../static/file/wenjianjia.png" mode=""></image>
						<span>这是文件夹名称这是文件夹名称这是文件夹名称</span>
					</view>
					<view class="item-size">
						999MB
					</view>
					<view class="item-btns">
						<button type="primary" size="mini">查看</button>
						<button type="warn" size="mini">删除</button>
					</view>
				</view>
				<view class="one-item">
					<view class="item-name">
						<image src="../../static/file/java.png" mode=""></image>
						<span>123</span>
					</view>
					<view class="item-size">
						999MB
					</view>
					<view class="item-btns">
						<button type="primary" size="mini">查看</button>
						<button type="warn" size="mini">删除</button>
					</view>
				</view>
			</view>
		</view>
		<view class="file-detail">
			<IndexDetail></IndexDetail>
		</view>
	</view>
</template>

<script>
	import IndexDetail from '../../components/index-detail/index-detail.vue'
	export default {
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 5000,
				duration: 500
			}
		},
		components:{
			IndexDetail
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
	@keyframes slideInLeft {
		0% {
			opacity: 0.1;
			transform: translateX(-200%);
		}

		100% {
			opacity: 0.9;
			transform: translateX(0%);
		}
	}

	.content {
		background-color: #f7f8fa;
		width: 100vw;
		height: 100vh;
		
		.uni-margin-wrap{
			display: none;
		}
		
		.file-detail{
			width: 90%;
			margin: 10px auto;
			border-radius: 15px;
			padding: 10px;
			box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.09), 0 4px 6px -4px rgb(0 0 0 / 0.1);
		}

		.file-nav {
			width: 90%;
			margin: 0rem auto;
			padding: 1rem 0;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			transform: translateX(-200%);
			animation: slideInLeft 0.5s ease-in-out 0s forwards;

			.nav-home {
				margin-right: 0.2rem;
				display: flex;
				align-items: center;

				image {
					max-width: 2rem;
					max-height: 2rem;
					margin-right: 0.2rem;
				}

				padding: 5px;
			}
			
			.nav-item{
				padding: 5px;
				margin: 0 0.2rem;
			}

			.nav-home:active,
			.nav-item:active {
				background-color: #e2e3e6;
				box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.09), 0 4px 6px -4px rgb(0 0 0 / 0.1);
				border-radius: 13px;
			}
		}

		.file-list {
			width: 90%;
			margin: 1rem auto;
			transform: translateX(-200%);
			animation: slideInLeft 0.5s ease-in-out 0s forwards;
			box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.09), 0 4px 6px -4px rgb(0 0 0 / 0.1);

			.list-title {
				height: 2.5rem;
				line-height: 2.5rem;
				background-color: #fff;
				padding: 5px 10px;
				border-top-left-radius: 15px;
				border-top-right-radius: 15px;
				display: grid;
				grid-template-columns: 4fr 2fr 2fr;
			}

			.list-items {
				display: flex;
				flex-direction: column;
				background-color: #fff;
				padding-bottom: 0.5rem;

				.one-item {
					transform: translateX(-200%);
					animation: slideInLeft 1s ease-in-out 0s forwards;
					padding: 5px;
					background-color: #fff;
					display: grid;
					grid-template-columns: 4fr 2fr 2fr;
					justify-content: center;
					align-items: center;

					.item-name {
						display: flex;
						align-items: center;

						image {
							max-width: 2rem;
							max-height: 2rem;
							margin-right: 5px;
						}

						span {
							max-width: 120px;
							-webkit-transform: translate3d(0, 0, 0);
							transform: translate3d(0, 0, 0);
							overflow: hidden;
							white-space: nowrap;
							text-overflow: ellipsis;
						}
					}

					.item-size {
						font-size: 15px;
					}

					.item-btns {
						display: flex;
						justify-content: center;
						align-items: center;

						button {
							width: 2.5rem;
							max-height: 2rem;
							text-align: center;
						}
					}
				}
			}
		}
	}

	.imgSize {
		width: 100%;
	}
</style>