<template>
	<section class="search">
		<!-- 头部 -->
		<header>
			<div to="/policy/index" class="fa fa-angle-left fa-fw" @click="back"></div>
			<input class="search-input" v-model="search">
			<button class="search-btn" @click="searchFn">搜索</button>
		</header>
		<div class="search-catalog">
			<div class="title">热门搜索</div>
			<div class="hot-tips">
				<div class="hot-tag" v-for="(item, index) in hotList" :key="index" @click="clickSearch(item)">{{item}}</div>
			</div>
		</div>
		<div class="search-catalog" v-if="historyList.length">
			<div class="title">历史搜索</div>
			<div class="history-tips">
				<div class="history-item" v-for="(item, index) in historyList" :key="index" @click="clickSearch(item)">
					<i class="fa fa-clock-o"></i>
					<div class="history">{{item}}</div>
					<i class="fa fa-times-circle" @click.stop="remove(index)"></i>
				</div>
			</div>
			<div class="history-clear" @click="removeAll">清除搜索记录</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'PolicySearch',
	data () {
		return {
			search: '',
			hotList: ["中小企业","知识产权","高新技术","大学生","困难"],
			historyList: [],
		}
	},
	mounted () {
		var historyList = localStorage.getItem("newsHistoryList") || '[]';
		this.historyList = JSON.parse(historyList);
	},
	methods: {
		back(){
			this.$router.go(-1);//返回上一层
		},
		searchFn(){
			let historyList = this.historyList;
			if (this.search) {
				if (historyList.length==0) {
					historyList.push(this.search);
				}else{
					historyList.unshift(this.search);
				}
				historyList = [...new Set(historyList)];
				if (historyList.length>=5) {
					historyList.pop();
				}
				localStorage.setItem("newsHistoryList", JSON.stringify(historyList));
				this.$router.push("/policy/index?kw="+this.search);
			}else{
				this.$router.push("/policy/index");
			}
		},
		clickSearch(val){
			this.$router.push("/policy/index?kw="+val);
		},
		remove(index){
			this.historyList.splice(index,1);
			localStorage.setItem("newsHistoryList", JSON.stringify(this.historyList));
		},
		removeAll(){
			localStorage.removeItem('newsHistoryList');
			this.historyList = [];
		}
	}
}
</script>

<style scoped lang="less">
	section.search{
		height: 100%;
		background-color: #f1f1f1;
		header{
			display: flex;
			box-pack: justify;
			justify-content: space-between;
			align-items: center;
			height: 50px;
			line-height: 50px;
			background-color: #108eeb;
			padding: 0 10px;
			color: #fff;
			.fa-angle-left{
				font-size: 30px;
				display: block;
				line-height: 50px;
				color: #fff;
			}
			.search-input{
				display: block;
				height: 30px;
				background-color: #fff;
				border-radius: 5px;
				border: 0;
				padding-left: 7px;
				flex-grow: 1;
				margin-left: 10px;
			}
			.search-btn{
				border: none;
				background-color: rgba(0,0,0,0);
				color: #fff;
				font-size: 16px;
				line-height: 50px;
				text-align: right;
				width: 40px;
			}
		}
		.search-catalog{
			min-height: 150px;
			margin: 15px 15px 30px;
			font-size: 15px;
			.title{
				font-size: 15px;
				font-weight: bold;
				color: #333;
			}
			.hot-tips{
				display: flex;
				flex-wrap: wrap;
				.hot-tag{
					color: #999;
					background-color: #fefefe;
					border-radius: 5px;
					margin-top: 15px;
					margin-right: 15px;
					padding: 5px;
				}
			}
			.history-tips{
				.history-item{
					display: flex;
					align-items: center;
					justify-content: space-between;
					font-size: 15px;
					padding: 15px 0;
					border-bottom: 1px solid #c7c7c7;
					i{
						display: block;
						color: #999;
						font-size: 18px;
					}
					.history{
						flex-grow: 1;
						margin: 0 5px;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
				}
			}
			.history-clear{
				color: #999;
				text-align: center;
				padding: 18px 0;
				border-bottom: 1px solid #c7c7c7;
			}
		}
	}
</style>
