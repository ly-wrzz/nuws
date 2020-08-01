<template>
	<section class="detail">
		<header>
			<div class="return" @click="back">
				<i class="fa fa-angle-left fa-fw"></i>
				<span>返回</span>
			</div>
			<div class="title">政策细则</div>
		</header>
		<!-- 内容 -->
		<article>
			<div class="doc-title">{{detail.titile}}</div>
			<div class="doc-base-info">
				<div>
					<div>{{detail.created_time}}</div>
					<div>来源：{{detail.department_name}}</div>
				</div>
				<div class="coll" @click="collection">
					<i class="fa fa-fw" :class="detail.is_collect ? 'fa-heart':'fa-heart-o'"></i>收藏
				</div>
			</div>
			<div class="doc-digest">{{detail.brief}}</div>
			<div class="doc-content" v-html="detail.content"></div>
		</article>
	</section>
</template>

<script>
export default {
	name: 'PolicyDetail',
	data () {
		return {
			id: '',
			detail: {}
		}
	},
	mounted () {
		this.id = this.$route.query.id;
		this.getData();
	},
	methods: {
		back(){
			this.$router.go(-1);//返回上一层
		},
		getData(){
			this.$util.get('mobile/policy-detail',{
				id: this.id
			}).then(res=>{
				this.detail = res.data
			})
		},
		// 点击收藏
		collection () {
			var status = this.detail.is_collect == 0 ? 1 : 2;
			var id = this.detail.id;
			this.$util.post('mobile/collect',{
				status,
				id
			}).then(res=>{
				if (data.status==1) {
					Vue.$vux.toast.text("收藏成功");
					this.detail.is_collect = 1;
				}else {
					Vue.$vux.toast.text("取消收藏");
					this.detail.is_collect = 0;
				}
			})
		}
	}
}
</script>

<style scoped lang="less">
section.detail{
	height: 100%;
	overflow-y: scroll;
	header{
		height: 46px;
		display: flex;
		box-pack: justify;
		justify-content: space-between;
		align-items: center;
		height: 46px;
		padding: 0 10px;
		border-bottom: 1px solid #c7c7c7;
		position: relative;
		.return{
			display: flex;
			font-size: 14px;
			color: #000;
			&:active{
				color: #000;
			}
			span{
				display: block;
			}
			.fa-angle-left{
				display: block;
				font-size: 20px;
			}
		}
		.title{
			position: absolute;
			width: 100%;
			line-height: 46px;
			text-align: center;
			left: 0;
			top: 0;
			z-index: -1;
			font-size: 18px;
		}
	}
	article{
		padding: 15px 15px 70px;
		.doc-title{
			font-size: 25px;
			line-height: 30px;
			padding-bottom: 15px;
		}
		.doc-base-info{
			font-size: 14px;
			color: #999;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		.doc-digest{
			font-size: 14px;
			color: #666;
			margin-top: 25px;
			margin-bottom: 40px;
			border-left: 4px solid #ccc;
			padding-left: 15px;
		}
	}
}
</style>