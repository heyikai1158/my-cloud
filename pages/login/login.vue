<template>
	<view class="login">
		<image src="/static/bg-3.jpg" mode=""></image>
		<view class="login-form">
			<view class="form-item">
				<view class="title">用户名</view>
				<input class="uni-input" placeholder="请输入用户名" type="text" focus />
			</view>
			<view class="form-item">
				<view class="title">密码</view>
				<input class="uni-input" type="password" placeholder="请输入密码" />
			</view>
			<view class="form-item" v-if="loginOrRegister">
				<view class="title">确认密码</view>
				<input class="uni-input" type="password" placeholder="重复上述的输入" />
			</view>
			<view class="form-item item-btns">
				<button type="default" @click="showTowPage" class="btn-1">{{showStatus}}</button>
				<button type="primary" @click="dueRequest" class="btn-2">GO</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				"loginOrRegister":false,
				"showStatus":"快注册"
			};
		},
		methods:{
			showTowPage(){
				if(this.loginOrRegister){
					this.showStatus = "快注册";
					this.loginOrRegister = false;
				}else{
					this.showStatus = "去登录";
					this.loginOrRegister = true;
				}
			},
			dueRequest(){
				if(this.loginOrRegister){
					console.log("注册");
				}else{
					/**
					 * 注意此处
					 * 小程序请直接给出请求明文地址
					 * 其余设备则通过代理的形式解决跨域问题
					 */
					// #ifdef MP-WEIXIN
					uni.request({
						url:'http://localhost:8000/due/login/',
						method:'POST',
						header: {
							'content-type': 'application/x-www-form-urlencoded'
						},
						data: {
							"username": 'heyikai',
							"passwd": '123456'
						},
						success: (res) => {
							console.log(res);
							console.log("处理成功")
						}
					})
					// #endif
					// #ifndef MP-WEIXIN
					uni.request({
						url:'/api/due/login/',
						method:'POST',
						header: {
							'content-type': 'application/x-www-form-urlencoded'
						},
						data: {
							"username": 'heyikai',
							"passwd": '123456'
						},
						success: (res) => {
							console.log(res);
							console.log("处理成功")
						}
					})
					// #endif
					
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	// @import url("../../static/opposans.scss");
	
	view {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: opposans;
	}
	
	@keyframes slideInLeft {
	    0% {
			opacity: 0.1;
	        transform: translate(-200%,-50%);
	    }
	    100% {
			opacity: 0.9;
	        transform: translate(-50%,-50%);
	    }
	}
	
	@keyframes slideInRight {
	    0% {
	        transform: translateX(-200%);
	    }
	    100% {
	        transform: translateX(0);
	    }
	}

	.login {
		width: 100vw;
		height: 100vh;

		image {
			position: fixed;
			top: 0;
			left: 0;
			width: 100vw;
			height: 100vh;
		}

		.login-form {
			box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.09), 0 4px 6px -4px rgb(0 0 0 / 0.1);;
			opacity: 0.1;
			position: absolute;
			top: 50%;
			left: 50%;
			// transform: translate(-50%, -50%);
			transform: translate(-200%,-50%);
			animation: slideInLeft 1.5s ease-in-out 0s forwards;
			width: 80%;
			display: flex;
			flex-direction: column;
			row-gap: 1rem;
			background-color: #ffffff;
			padding: 3rem;
			border-radius: 2rem;

			.form-item {
				transform: translateX(-200%);
				animation: slideInRight 1s ease-in-out 0s forwards;
				
				.title {
					color: #7e868c;
				}

				.uni-input {
					height: 2.5rem;
					line-height: 2.5rem;
					background-color: #f1f3f5;
					border-radius: 0.5rem;
					padding: 3px 10px;
				}
				
				.uni-input:focus{
					border: 2px solid #68b4f0;
				}
			}

			.item-btns {
				display: flex;
				justify-content: center;
				align-items: center;
				margin-top: 1rem;

				button {
					width: 100px;
				}

				button::after {
					border: none;
				}

				.btn-1 {
					color: #0c7792;
					background-color: #d8f3f6;
				}

				.btn-2 {
					color: #006adc;
					background-color: #e1f0ff;
				}
			}
		}
	}
</style>