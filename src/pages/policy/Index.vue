<template>
	<section class="policy">
		<!-- 头部 -->
		<header>
			<i class="fa fa-map-marker fa-fw"></i>
			<span class="text">重庆</span>
			<router-link to="/policy/search" class="search-box">
				<i class="fa fa-search fa-fw"></i>
				<span class="">{{searchText ? searchText : "请输入关键词……"}}</span>
			</router-link>
		</header>
		<!-- nav -->
		<nav>
			<div class="select-box">
				<div @click="show1=true" class="select">
					<div class="txt">
						{{this.value1.length>0 && this.value1[0]}}
					</div>
					<i class="fa fa-angle-right fa-fw"></i>
					<i class="fa fa-caret-down fa-fw"></i>
				</div>
				<div @click="show2=true" class="select">
					<div class="txt">
						{{this.value2.length>0 && this.value2[0]}}
					</div>
					<i class="fa fa-angle-right fa-fw"></i>
					<i class="fa fa-caret-down fa-fw"></i>
				</div>
			</div>
			<div class="filter" @click="showFilter">筛选<i class="fa fa-filter fa-fw"></i></div>
		</nav>
		<!-- 内容 -->
		<article>
			<scroller class="scroller" :lock-x="true" v-if="policy_list.length">
				<ul>
					<li v-for="(item, index) in policy_list" :key="item.id" @click="detail">
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
		<!-- 右侧赛选 -->
		<aside :class="isFilter?'active':''" @click="showFilter">
			<div class="filter-box" @click.stop="">
				<div class="title">筛选类目</div>
				<div class="content">
					<div class="content-title">部门</div>
					<checker v-model="department" default-item-class="department-item" selected-item-class="department-active">
						<checker-item v-for="(item) in department_list" :key="item.id" :value.sync="item.id">{{item.name}}</checker-item>
					</checker>
				</div>
				<div class="content">
					<div class="content-title">项目类型</div>
					<checker v-model="project" default-item-class="department-item" selected-item-class="department-active">
						<checker-item v-for="(item) in project_list" :key="item.id" :value.sync="item.id">{{item.name}}</checker-item>
					</checker>
				</div>
				<div class="content">
					<div class="content-title">专题</div>
					<checker v-model="special" default-item-class="department-item" selected-item-class="department-active">
						<checker-item v-for="(item) in special_list" :key="item.id" :value.sync="item.id">{{item.name}}</checker-item>
					</checker>
				</div>
				<div class="foot">
					<button class="reset" @click="filterReset">重置</button>
					<button class="confirm" @click="filterConfirm">确认</button>
				</div>
			</div>
		</aside>
		<!-- 弹窗 -->
		<popup v-model="show1">
			<popup-header left-text="取消" right-text="确认" :show-bottom-border="false" @on-click-left="show1=false" @on-click-right="confirmIndustry"></popup-header>
			<picker :data="industry" v-model="value1"></picker>
		</popup>
		<popup v-model="show2">
			<popup-header left-text="取消" right-text="确认" :show-bottom-border="false" @on-click-left="show2=false" @on-click-right="confirmAddress"></popup-header>
			<picker :data="area" v-model="value2"></picker>
		</popup>
	</section>
</template>

<script>
	import { ChinaAddressV2Data, Scroller, Checker, CheckerItem } from 'vux'
	export default {
		components: {
			Scroller, Checker, CheckerItem
		},
		name: 'Policy',
		data () {
			return {
				isFilter: false,
				address: "",
				searchText: "",

				industry: [["所有行业","制造业","农业","批发零售"]],
				industry_list: [],
				value1: [],
				show1: false,

				area: [["全市"]],
				city_list: [],
				value2: [],
				show2: false,

				department_list: [],
				project_list: [],
				special_list: [],

				department: "",
				project: "",
				special: "",

				city_id: "",
				industry_id: "",

				policy_list: []
				
			}
		},
		mounted () {
			this.searchText = this.$route.query.kw || "";
			this.$vux.loading.show({
				text: '加载中'
			})
			this.getFilterList();
		},
		methods: {
			// 请求数据
			getFilterList () {
				this.$util.get('mobile/category-list',{noLoading: true}).then(res=>{
					let data = res.data;
					// 选行业
					this.industry_list = data.industry_lis;
					let industry_lis = data.industry_lis.map( item => { return {name: item.name,value: item.name} } );
					industry_lis.unshift({name: "所有行业",value :"所有行业"});
					this.industry = [industry_lis];

					// 选区
					this.city_list = data.city_list;
					let city_list = data.city_list.map( item => { return {name: item.name,value: item.name} } );
					city_list.unshift({name: "全市",value :"全市"});
					this.area = [city_list];

					// 筛选
					this.department_list = data.department_list;
					this.project_list = data.project_list;
					this.special_list = data.special_list;

					this.getData();
				})
			},
			// 选择行业
			confirmIndustry () {
				this.show1 = false;
				if (this.value1[0] != "所有行业") {
					let id = this.industry_list.filter(item=>item.name==this.value1[0])[0].id;
					this.industry_id = id;
					this.getData();
				}
			},
			// 选择位置
			confirmAddress () {
				this.show2 = false;
				if (this.value2[0] != "全市") {
					let id = this.city_list.filter(item=>item.name==this.value2[0])[0].id;
					this.city_id = id;
					this.getData();
				}
			},
			// 显示筛选
			showFilter () {
				this.isFilter = !this.isFilter;
			},
			// 筛选重置
			filterReset () {
				this.department = this.project = this.special = "";
			},
			// 取消筛选
			filterConfirm () {
				this.isFilter = false;
				this.getData();
			},
			// 跳转详情页
			detail () {
				this.$router.push("/policy/detail?id=2");
			},
			getData () {
				var data = {
					department_id: this.department,
					project_id: this.project,
					special_id: this.special,
					city_id: this.city_id,
					industry_id: this.industry_id,
					keywords: this.searchText,
					noLoading: true
				}
				this.$util.get('mobile/policy-list',data).then(res=>{
					this.policy_list = res.data.list;
					this.$vux.loading.hide();
				})
			},
			// 点击收藏
			collection (data) {
				var status = data.status == 0 ? 1 : 2;
				var index = data.index;
				var id = data.id;
				this.$util.post('mobile/collect',{
					status,
					id
				}).then(res=>{
					if (data.status==1) {
						this.$vux.toast.text("收藏成功");
						this.policy_list[index].is_collect = 1;
					}else {
						this.$vux.toast.text("取消收藏");
						this.policy_list[index].is_collect = 0;
					}
				})
			}
		}
	}
</script>

<style scoped lang="less">
	section.policy{
		height: 100%;
		header{
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 50px;
			line-height: 50px;
			background-color: #108eeb;
			padding: 0 10px;
			color: #fff;
			.text{
				display: block;
				white-space: nowrap;
				margin-left: 6px;
			}
			.search-box{
				font-size: 14px;
				color: #ccc;
				background-color: #fff;
				padding-left: 7px;
				margin-left: 12px;
				border-radius: 5px;
				height: 30px;
				overflow: hidden;
				display: flex;
				align-items: center;
				flex-grow: 1;
				i{
					display: block;
				}
				span{
					display: block;
					padding: 0 50px 0 10px;
					overflow: hidden;
					text-overflow:ellipsis;
					white-space: nowrap;
				}
			}
		}
		nav{
			display: flex;
			align-items: center;
			justify-content: space-between;
			height: 45px;
			box-sizing: border-box;
			font-size: 16px;
			color: #666;
			background-color: #fff;
			padding: 10px 15px;
			border-bottom: 1px solid #c7c7c7;
			line-height: 45px;
			.select-box{
				display: flex;
				align-items: center;
				.select{
					width: 100px;
					display: flex;
					align-items: center;
					.txt{
						max-width: 80px;
						overflow: hidden;
						text-overflow:ellipsis;
						white-space: nowrap;
						line-height: 1;
					}
					.fa-fw{
						width: 1em;
					}
					&:last-child{
						margin-left: 10px;
					}
				}
			}
		}
		article{
			width: 100%;
			height: calc(100% - 95px);
			background-color: #f1f1f1;
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
		aside{
			position: fixed;
			background: rgba(0,0,0,0);
			width: 100%;
			height: 100%;
			top: 0;
			left: 100%;
			transition: all 0.5s;
			&.active{
				left: 0;
				background: rgba(0,0,0,0.5);
			}
			.filter-box{
				position: absolute;
				background-color: #fff;
				width: 80%;
				height: 100%;
				top: 0;
				right: 0;
				.title{
					height: 50px;
					font-size: 18px;
					line-height: 50px;
					color: #333;
					border-bottom: 1px solid #c7c7c7;
					padding-left:10px;
				}
				.content{
					padding: 0 10px;
					.department-item{
						font-size: 15px;
						background-color: #f1f1f1;
						border: 1px solid #f1f1f1;
						border-radius: 5px;
						margin-right: 10px;
						margin-bottom: 10px;
						padding: 7px 15px;
						&.department-active{
							color: #ec3b1c;
							background-color: #fff;
							border-radius: 5px;
							border: 1px solid #ec3b1c;
						}
					}
					.content-title{
						height: 50px;
						font-size: 18px;
						line-height: 50px;
						color: #333;
					}
				}
				.foot{
					position: absolute;
					bottom: 0;
					width: 100%;
					height: 50px;
					line-height: 50px;
					text-align: center;
					font-size: 18px;
					display: flex;
					justify-content: space-around;
					border-top: 1px solid #c7c7c7;
					button{
						display: block;
						width: 50%;
						border: none;
						font-size: 18px;
						&.reset{
							background-color: #fff;
						}
						&.confirm{
							color: #fff;
							background-color: #ec3b1c;
						}
					}
				}
			}
		}
	}
</style>
