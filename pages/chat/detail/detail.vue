<template>
	<view class="chat-detail">
		<!-- 时间每分钟检测一次，若在新的一分钟内发送信息，则刷新时间并插入 -->
		<view class="detail-time">
			<label>2018-12-10 21:51</label>
		</view>
		<view class="detail-body">
			<view class="body-left">
				<view class="left-img">
					<image src="../../../static/chat/test1.jpeg" mode=""></image>
					<!-- <view class="left-status status-online"></view> -->
					<view class="left-status status-offline"></view>
				</view>
				<view class="left-info">
					<label for="">小李</label>
					<view class="info-content">
						<label for="">
							国台办发言人马晓光19日答记者问表示，经向有关主管部门了解，即日起恢复旅行社经营台湾居民来大陆团队游业务。我们热忱欢迎台湾同胞来大陆旅游观光，游览大好河山，看看各地发展新貌。
						</label>
					</view>
				</view>
			</view>
			<view class="body-right">
				<view class="right-info">
					<label for="">我</label>
					<view class="info-content">
						<!-- <label for=""> -->
							<!-- 国台办发言人马晓光19日答记者问表示，经向有关主管部门了解，即日起恢复旅行社经营台湾居民来大陆团队游业务。我们热忱欢迎台湾同胞来大陆旅游观光，游览大好河山，看看各地发展新貌。 -->
						<!-- </label> -->
						<!-- <image src="../../../static/bg-1.jpg" mode=""></image> -->
						<navigator url="/pages/index/index" open-type="switchTab">分享给你的文件</navigator>
					</view>
				</view>
				<view class="right-img">
					<image src="../../../static/chat/test2.jpeg" mode=""></image>
					<view class="right-status status-online"></view>
					<!-- <view class="right-status status-offline"></view> -->
				</view>
			</view>
		</view>
		<view class="detail-footer">
			<!-- 包含输入框、表情符、(文件/发送按钮) -->
			<view class="footer-main">
				<input type="text" placeholder="你想说什么">
				<view class="main-btns">
					<uni-icons type="paperclip" size="30" color="#fff"></uni-icons>
					<uni-icons @click="addTest" type="paperplane" size="30" color="#fff"></uni-icons>
				</view>
			</view>
			<view class="footer-other">
				暂时不放东西
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
		onLoad(options) {
			console.log(options.userid)
		},
		onShow() {
			this.updateHeaderStyle()
		},
		methods: {
			updateHeaderStyle() {
				uni.setNavigationBarColor({
					frontColor: '#ffffff',
					backgroundColor: "#171425"
				})
			},
			addTest(){
				console.log("动态添加信息")
			}
		}
	}
</script>

<style lang="scss" scoped>
	
	@keyframes slideInLeft {
	    0% {
	        transform: translateX(-200%);
	    }
	    100% {
	        transform: translateX(0);
	    }
	}
	
	@keyframes slideInRight {
	    0% {
	        transform: translateX(200%);
	    }
	    100% {
	        transform: translateX(0);
	    }
	}
	
	.chat-detail{
		color: #fff;
		width: 100vw;
		height: 100vh;
		background-color: #171425;
		
		.detail-time{
			display: flex;
			justify-content: center;
			align-items: center;
			color: #82808e;
			height: 2rem;
			line-height: 2rem;
			margin-bottom: 0.3rem;
			
			label{
				font-weight: 200;
			}
		}
		
		.detail-body{
			display: flex;
			flex-direction: column;
			width: 90%;
			margin: 0.3rem auto;
			
			.body-left{
				margin-bottom: 0.5rem;
				display: flex;
				transform: translateX(-200%);
				animation: slideInLeft 1.5s ease-in-out 0s forwards;
				
				.left-img{
					width: 3rem;
					height: 3rem;
					
					image{
						max-width: 3rem;
						max-height: 3rem;
						border-radius: 50%;
					}
					
					.left-status{
						width: 1rem;
						height: 1rem;
						position: relative;
						right: -2rem;
						bottom: 1rem;
						border-radius: 50%;
					}
					
					.status-online{
						background-color: greenyellow;
					}
					
					.status-offline{
						background-color: darkgrey;
					}
				}
				
				.left-info{
					display: flex;
					flex-direction: column;
					margin: 0 0.2rem;
					padding: 0.1rem 0;
					
					label{
						font-weight: 200;
						font-size: 0.8rem;
						margin-bottom: 0.2rem;
					}
					
					.info-content{
						min-height: 1.8rem;
						line-height: 1.8rem;
						border-radius: 0.5rem;
						padding: 0.5rem;
						background-color: #3f3b52;
						max-width: 75vw;
						
						image{
							min-width: 50vw;
							width: 100%;
						}
					}
				}
			}
			
			.body-right{
				margin-bottom: 0.5rem;
				display: flex;
				justify-content: flex-end;
				transform: translateX(200%);
				animation: slideInRight 1.5s ease-in-out 0s forwards;
				
				.right-img{
					width: 3rem;
					height: 3rem;
					
					image{
						max-width: 3rem;
						max-height: 3rem;
						border-radius: 50%;
					}
					
					.right-status{
						width: 1rem;
						height: 1rem;
						position: relative;
						bottom: 1rem;
						border-radius: 50%;
					}
					
					.status-online{
						background-color: greenyellow;
					}
					
					.status-offline{
						background-color: darkgrey;
					}
				}
				
				.right-info{
					display: flex;
					flex-direction: column;
					margin: 0 0.2rem;
					padding: 0.1rem 0;
					
					label{
						display: flex;
						justify-content: flex-end;
						font-weight: 200;
						font-size: 0.8rem;
						margin-bottom: 0.2rem;
					}
					
					.info-content{
						min-height: 1.8rem;
						line-height: 1.8rem;
						border-radius: 0.5rem;
						padding: 0.5rem;
						background-color: #3f3b52;
						max-width: 75vw;
						
						image{
							min-width: 50vw;
							width: 100%;
						}
						
						a{
							font-size: 1rem;
							font-weight: 200;
						}
					}
				}
			}
		}
		.detail-footer{
			width: 100vw;
			position: fixed;
			bottom: 0;
			background-color: #221f30;
			
			.footer-main{
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 0.5rem 0.8rem;
				
				input{
					flex-grow: 1;
				}
			}
			
			.footer-other{
				display: flex;
				justify-content: center;
				align-items: center;
				width: 100%;
				min-height: 15vh;
				background-color: #3f3b52;
			}
		}
	}

</style>