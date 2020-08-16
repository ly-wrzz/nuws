<template>
	<section class="policy">
		<!-- 头部 -->
        <header>
            <div class="return" @click="back">
                <i class="fa fa-angle-left"></i>
                <span>返回</span>
            </div>
            <div class="title">关注的政策</div>
            <div class="right"></div>
        </header>
		<!-- 内容 -->
		<article>
			<scroller class="scroller" :lock-x="true" v-if="policy_list.length">
				<ul>
					<li v-for="(item, index) in policy_list" :key="item.id" @click="detail(item.id)">
						<div class="title">{{item.titile}}</div>
						<div class="content">{{item.brief}}</div>
						<div class="footer">
							<div @click.stop="collection({id:item.id,status: item.is_collect,index:index})"><i class="fa fa-fw" :class="item.is_collect ? 'fa-heart':'fa-heart-o'"></i>收藏</div>
							<div><i class="fa fa-eye fa-fw"></i>{{item.pv}}</div>
							<div>{{item.created_time}}</div>
						</div>
					</li>
				</ul>
			</scroller>
			<div class="scroller no_data" v-else>
				<img src="@/assets/nodata.png" alt="">
				<div class="text">暂无相关文章</div>
			</div>
		</article>
	</section>
</template>

<script>
	import { ChinaAddressV2Data, Scroller, Checker, CheckerItem } from 'vux'
	export default {
		components: {
			Scroller, Checker, CheckerItem
		},
		name: 'ProjectLists',
		data () {
			return {
				policy_list: []
			}
		},
		mounted () {
			this.searchText = this.$route.query.kw || "";
			this.$vux.loading.show({
				text: '加载中'
			})
			this.getData()
		},
		methods: {
			// 跳转详情页
			detail (id) {
				this.$router.push("/policy/detail?id="+id);
			},
			back(){
				this.$router.go(-1);//返回上一层
			},
			getData () {
				this.$util.get('mobile/collect-list').then(res=>{
					this.policy_list = res.data.list;
					this.$vux.loading.hide();
				})
			},
			// 点击收藏
			collection (data) {
				var status = data.status == 0 ? 1 : 2;
				var index = data.index;
				var id = data.id;
				this.$util.get('mobile/collect',{
					status,
					id
				}).then(res=>{
                    this.getData()
				})
			}
		}
	}
</script>

<style scoped lang="less">
	section.policy{
		height: 100%;
		header{
			position: fixed;
			top: 0;
			left: 0;
			z-index: 99;
			width: 100%;
			box-sizing: border-box;
			height: 46px;
			display: flex;
			box-pack: justify;
			justify-content: space-between;
			align-items: center;
			height: 46px;
			padding: 0 18px;
			border-bottom: 1px solid #c7c7c7;
			background-color: #ffffff;
			.return{
				float: left;
				width: 80px;
				display: flex;
				align-items: center;
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
					font-size: 26px;
					margin-right: 6px;
				}
			}
			.title{
				width: 100%;
				line-height: 46px;
				text-align: center;
				left: 0;
				top: 0;
				font-size: 18px;
			}
			.right{
				float: right;
				text-align: right;
				width: 80px;
				font-size: 14px;
			}
		}
		article{
			width: 100%;
			height: calc(100vh - 46px);
			background-color: #f1f1f1;
			padding-top: 46px;
			.scroller{
				height: 100% !important;
				ul{
					li{
						margin-bottom: 10px;
						font-size: 14px;
						color: #666;
						background-color: #fff;
						padding: 15px;
						.title{
							font-size: 16px;
							color: #333;
							line-height: 20px;
							display: -webkit-box;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 2;
							overflow: hidden;
						}
						.content{
							display: flex;
							margin-top: 8px;
							margin-bottom: 8px;
						}
						.footer{
							display: flex;
							align-items: center;
							color: #999;
							margin-top: 18px;
							justify-content: space-between;
							.fa-heart{
								color: #ee5136;
							}
						}
					}
				}
				&.no_data{
					overflow: hidden;
					img{
						display: block;
    					margin: 0 auto;
						margin-top: 50px;
						width: 108px;
						height: 100px;
					}
					.text{
						margin-top: 10px;
						text-align: center;
						color: #b7b7b7;
					}
				}
			}
		}
	}
</style>
