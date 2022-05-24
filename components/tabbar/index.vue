<template>
	<view class="tabbar" :style="('height:100rpx')">
		<view class="item">
			<image src="@/static/images/tabbar/home-nor@3x.png" mode="widthFix"></image>
			<text>首页</text>
		</view>
		<view class="item">
			<image src="@/static/images/tabbar/home-nor@3x.png"></image>
			<text>分类</text>
		</view>
		<view class="item">
			<image src="@/static/images/tabbar/home-nor@3x.png"></image>
			<text>发现</text>
		</view>
		<view class="item">
			<image src="@/static/images/tabbar/home-nor@3x.png"></image>
			<text>购物车</text>
		</view>
		<view class="item">
			<image src="@/static/images/tabbar/home-nor@3x.png"></image>
			<text>我的</text>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			height: {
				type: Number,
				require: false,
				default: 50
			},
		},
		data() {
			return {

			}
		},
		mounted() {
			console.log("tomyang", this.height);
		},
		methods: {

		}
	}
</script>

<style scoped>
	.tabbar {
		position: fixed;
		bottom: 0;
		left: 0;
		display: flex;
		flex-direction: column;
		width: 100%;
		overflow: hidden;
		z-index: 99999;
	}

	.tabbar .item {
		width: 25%;
		height: 100%;
	}

	.tabbar .item image {
		display: block;
		width: 50rpx;
		height: 100%;
	}
</style>
