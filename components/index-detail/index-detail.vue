<template>
	<view class="detail">
		<!-- 图标、名称、(大小、时间)、(分享、下载、删除) -->
		<view class="file-icon">
			<image src="../../static/file/MP4.png" mode=""></image>
		</view>
		<view class="file-title">
			<span>测试文件</span>
		</view>
		<view class="file-info">
			<span>123MB</span>
			<span>2023/05/17 10:09</span>
		</view>
		<view class="file-btns">
			<button>分享</button>
			<button>下载</button>
			<button>删除</button>
		</view>
		<view class="file-content">
			<!-- <button @click="getFileUrl()">我要预览</button> -->
			<!-- <web-view :src="fileUrl" :webview-styles="webviewStyles"></web-view> -->
		</view>
	</view>
</template>

<script>
	
	export default {
		name:"index-detail",
		data() {
			return {
				webviewStyles:{
					width:'0',
					height:"0"
				},
				allowFile:true,
				fileUrl:'',
				oneFile:'http://www.zjhu.edu.cn/_upload/article/files/33/de/94320a8a4a0196b863a3f0b61537/82ab0240-c688-4b89-95f9-2d753e82e8e7.docx',
				officeUrl:'https://view.officeapps.live.com/op/view.aspx?src='
			};
		},
		components:{
			
		},
		created(){
			// this.getFileUrl()
		},
		methods:{
			getFileUrl(){
				this.webviewStyles.height = '500px';
				this.webviewStyles.width = '200px';
				this.fileUrl = this.officeUrl + this.oneFile
				console.log(this.fileUrl)
			}
		}
	}
</script>

<style lang="scss">
	
	.detail{
		padding: 0 0.5rem;
	}
	
	.file-icon{
		display: flex;
		justify-content: center;
		align-items: center;
		image{
			max-width: 6rem;
			max-height: 6rem;
		}
		margin: 1rem auto;
	}
	
	.file-title{
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 24px;
		font-weight: 600;
	}
	
	.file-info{
		margin: 0.5rem auto;
		display: flex;
		justify-content: center;
		align-items: center;
		column-gap: 1rem;
	}
	
	.file-btns{
		display: flex;
		margin: 1rem auto;
		
		button:nth-child(1){
			color: #5746af;
			background-color: #ede9fe;
		}
		
		button:nth-child(2){
			color: #006adc;
			background-color: #e1f0ff;
		}
		
		button:nth-child(3){
			color: #0c7792;
			background-color: #d8f3f6;
		}
		
		button::after {
			border: none;
		}
		
	}
	
	.file-content{
		
		button{
			color: #5746af;
			background-color: #ede9fe;
			cursor: pointer;
		}
		// width: 100%;
		// min-height: 5rem;
		// background-color: #006adc;
	}

</style>