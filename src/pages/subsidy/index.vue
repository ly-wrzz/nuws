<template>
	<section class="subsidy">
		<div class="bg">
			<div class="footer">@2018 soucee 重庆搜策网络有限公司</div>
		</div>
		<div class="header" id="boxFixed" :class="{'is_fixed' : isFixed}">
			<div class="chart_box">
				<div id="my_chart"></div>
				<div class="bt">
					<div class="title">最高补贴</div>
					<div class="fee">6.6</div>
					<div class="unit">万</div>
				</div>
			</div>
			<div class="info">
				<ul>
					<li class="li1"><span>人社局 0%</span></li>
					<li class="li2"><span>科委 0%</span></li>
					<li class="li3"><span>经信委 0%</span></li>
					<li class="li4"><span>中小企业局 0%</span></li>
					<li class="li5"><span>其他 0%</span></li>
				</ul>
				<button class="info_btn" :class="{'active': isJump}" @click="Jump">查看详情</button>
			</div>
		</div>
		<div class="content" :class="{'is_fixed' : isFixed}">
			<ul class="select">
				<li>
					<div class="label">所属区域</div>
					<div class="value" @click="show1=true">
						<div class="value_text">{{text1}}</div>
						<i class="fa fa-angle-down"></i>
					</div>
				</li>
				<li>
					<div class="label">所属行业</div>
					<div class="value" @click="show2=true">
						<div class="value_text">{{text2}}</div>
						<i class="fa fa-angle-down"></i>
					</div>
				</li>
				<li>
					<div class="label">上年营收</div>
					<div class="value" @click="show3=true">
						<i class="fa fa-angle-down"></i>
					</div>
				</li>
				<li>
					<div class="label">社保人数</div>
					<div class="value" @click="show4=true">
						{{value4}}人
						<i class="fa fa-angle-down"></i>
					</div>
				</li>
				<li>
					<div class="label">农民工数</div>
					<div class="value" @click="show5=true">
						{{value5}}人
						<i class="fa fa-angle-down"></i>
					</div>
				</li>
				<li>
					<div class="label">大学生数</div>
					<div class="value" @click="show6=true">
						{{value6}}人
						<i class="fa fa-angle-down"></i>
					</div>
				</li>
			</ul>
			<div class="divider"></div>
			<div class="more" v-show="!isMore" @click="isMore=true">
				点击下拉箭头，评估精准补贴
				<i class="fa fa-arrow-down"></i>
			</div>
			<ul class="radio" v-if="isMore">
				<li v-for="(item, i) in subjectList" :key="i">
					<div class="topic">{{i+1}}.{{item.subject}}</div>
					<div class="option_list">
						<div class="option_item" v-for="(val, j) in item.answer" :key="j">
							<input :id="'D'+(i+1)+'_'+(j+1)" type="radio" :value="j+1" :name="item.name" @change="radioChange($event, item.name)">
							<label :for="'D'+(i+1)+'_'+(j+1)">是</label>
						</div>
					</div>
				</li>
			</ul>
		</div>
		<!-- 弹窗 -->
		<popup v-model="show1">
			<popup-header left-text="取消" right-text="确认" title="选择所属区域" @on-click-left="show1=false" @on-click-right="confirm(1)"></popup-header>
			<picker :data="listt1" v-model="value1"></picker>
		</popup>
		<popup v-model="show2">
			<popup-header left-text="取消" right-text="确认" title="选择所属行业" @on-click-left="show2=false" @on-click-right="confirm(2)"></popup-header>
			<picker :data="listt2" v-model="value2"></picker>
		</popup>
		<popup v-model="show3">
			<popup-header left-text="取消" right-text="确认"  title="选择上年报税营收" @on-click-left="show3=false" @on-click-right="confirm(3)"></popup-header>
			<picker :data="listt3" v-model="value3"></picker>
		</popup>


		<popup v-model="show4">
			<popup-header left-text="取消" right-text="确认"  title="输入社保人数" @on-click-left="show4=false" @on-click-right="show4=false"></popup-header>
			<div style="height:238px;">
				<x-number v-model="value4" :min="0" :max="200" :fillable="true" width="100%" button-style="round"></x-number>
			</div>
		</popup>
		<popup v-model="show5">
			<popup-header left-text="取消" right-text="确认"  title="输入农民工数" @on-click-left="show5=false" @on-click-right="show5=false"></popup-header>
			<div style="height:238px;">
				<x-number v-model="value5" :min="0" :max="200" :fillable="true" width="100%" button-style="round"></x-number>
			</div>
		</popup>
		<popup v-model="show6">
			<popup-header left-text="取消" right-text="确认"  title="输入农民工数" @on-click-left="show6=false" @on-click-right="show6=false"></popup-header>
			<div style="height:238px;">
				<x-number v-model="value6" :min="0" :max="200" :fillable="true" width="100%" button-style="round"></x-number>
			</div>
		</popup>
	</section>
</template>

<script>
import { Range, XNumber  } from 'vux'

export default {
	name: 'Subsidy',
	components: { Range, XNumber },
	data () {
		return {
			isFixed: false,

			show1: false,    // 选择区域
			listt1: [["万州区", "黔江区", "涪陵区", "渝中区", "大渡口区", "江北区", "沙坪坝区", "九龙坡区", "南岸区", "北碚区", "渝北区", "巴南区", "长寿区", "江津区", "合川区", "永川区", "南川区", "綦江区", "大足区", "璧山区", "铜梁区", "潼南区", "荣昌区", "开州区", "梁平区", "武隆区", "城口县", "丰都县", "垫江县", "忠县", "云阳县", "奉节县", "巫山县", "巫溪县", "石柱土家族自治县", "秀山土家族苗族自治县", "酉阳土家族苗族自治县", "彭水苗族土家族自治县"]],
			value1: [],
			text1: '',

			show2: false,    // 选择行业
			listt2: [["农、林、牧、渔业", "采矿业", "制造业", "电力、热力、燃气及水的生产和供应业", "环境和公共设施管理业", "建筑业", "交通运输、仓储业和邮政业", "信息传输、计算机服务和软件业", "批发和零售业", "住宿、餐饮业", "金融、保险业", "房地产业", "租赁和商务服务业", "科学研究、技术服务和地质勘查业", "水利、环境和公共设施管理业", "居民服务和其他服务业", "教育", "卫生、社会保障和社会服务业", "文化、体育、娱乐业", "综合（含投资类、主业不明显）", "其它"]],
			value2: [],
			text2: '',

			show3: false,
			listt3: [["北京", "重庆", "武汉"]],
			value3: [],
			text3: '',

			show4: false,    // 社保人数
			value4: 0,

			show5: false,    // 农民工数
			value5: 0,

			show6: false,    // 大学生数
			value6: 0,

			subjectList: [    // 选这题数据
				{
					name: "social_security",
					subject: "员工购买社保社保人数达到5人以上",
					answer: ["是","否"],
				},
				{
					name: "sale_income",
					subject: "主导产品销售收入占本企业销售收入的60%以上",
					answer: ["是","否"],
				},
				{
					name: "shares",
					subject: "是否完成股份制改革",
					answer: ["是","否"],
				},
				{
					name: "develop",
					subject: "是否有自己的研发产品并建立研发台账",
					answer: ["是","否"],
				},
				{
					name: "knowledge",
					subject: "公司产品是否具有相关的知识产权",
					answer: ["是","否"],
				},
				{
					name: "loan",
					subject: "公司是否有贷款产生（抵押+信用）",
					answer: ["是","否"],
				},
				{
					name: "invoice",
					subject: "上下游合同、产品名称、发票是否一致",
					answer: ["是","否"],
				},
				{
					name: "enterprise_cases",
					subject: "企业是否有诉讼案件",
					answer: ["是","否"],
				}
			],

			isMore: false,    // 是否查看更多
			isJump: true,    // 是否能查看详情

			form: {}
		}
	},
	mounted () {
		window.addEventListener('scroll',this.handleScroll, true); // 监听滚动事件，然后用handleScroll这个方法进行相应的处理
		this.Chart();
	},
	methods: {
		Chart(){
			let myChart = this.$echarts.init(document.getElementById('my_chart'))
			// 绘制图表
			myChart.setOption({
				color : [ '#01becc', '#f0573d', '#ffb400', '#ff7d2e', '#9a76be'],
				series: [{
					name: '销量',
					type: 'pie',
					radius: ['58%', '90%'],
					data: [0, 0, 0, 0, 0],
					label: { 　　　　　　　　　　//去除饼图的指示折线label
						normal: {
							show: false,
							position: 'inside',
							formatter:"{b}:{d}%"
						}
					}
				}]
			});
		},
		handleScroll(){
			let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop // 滚动条偏移量
			let offsetTop = document.querySelector('#boxFixed').offsetTop;  // 要滚动到顶部吸附的元素的偏移量
			this.isFixed = scrollTop > offsetTop ? true : false;  // 如果滚动到顶部了，this.isFixed就为true
		},
		confirm(index){
			this["show"+index] = false;
			this["text"+index] = this["value"+index][0];
		},
		Jump(){
			if (this.isJump) {
				 this.$router.push({ path:'/subsidy/projectList'})
			}
		},
		radioChange(e, type){
			var val = e.target.value;
			this.form[type] = val;
			console.log(this.form)
		}
	}
}
</script>

<style scoped lang="less">
html,body,#app{
  width: 100%;
  height: auto;
}
input[type=radio]+label:before {
	content: "";
	display: inline-block;
	vertical-align: middle;
	font-size: 14px;
	position: relative;
	top: -2px;
	width: 1em;
	height: 1em;
	margin-right: .4em;
	border-radius: 50%;
	border: 1px solid #666;
	text-indent: .15em;
	padding: .1em;
}
input[type=radio]:checked+label:before {
	background-color: #147edd;
	border: 1px solid #147edd;
	background-clip: content-box;
}
section.subsidy{
	overflow: hidden;
	.bg{
		width: 100%;
		height: 100%;
		position: fixed;
		background-image: url("../../assets/subsidy_bg.png");
		background-size: 100% 100%;
		background-repeat: no-repeat;
		z-index: -1;
		.footer{
			position: absolute;
			width: 100%;
			left: 0;
			text-align: center;
			bottom: 10px;
			font-size: 12px;
    		color: #666;
		}
	}
	.header{
		background-color: #fff;
		margin: 10px 16px;
		height: 180px;
		border-radius: 10px;
		overflow: hidden;
		display: flex;
		left: 0;
		top: 0;
		&.is_fixed{
			position: fixed;
			top: 0;
			margin: 0 16px;
			width: calc( 100% - 32px );
			border-radius: 0;
			box-shadow: 0 0 10px #888;
			z-index: 99;
		}
		.chart_box{
			width: 55%;
			height: 100%;
			margin-left: 10px;
			position: relative;
			#my_chart{
				width: 100%;
				height: 100%;
			}
			.bt{
				position: absolute;
				top: 52%;
				left: 50%;
				-webkit-transform: translateX(-50%) translateY(-50%);
				transform: translateX(-50%) translateY(-50%);
				color: #333;
				text-align: center;
				line-height: 1.2;
				.title{
					font-size: 12px;
				}
				.fee{
					font-size: 30px;
				}
				.unit{
					font-size: 16px;
				}
			}
		}
		.info{
			width: 40%;
			margin-left: 10px;
			margin-top: 12px;
			ul{
				li{
					font-size: 12px;
					color: #666;
					line-height: 12px;
					padding-bottom: 8px;
					span{
						display: inline-block;
						vertical-align: middle;
					}
					&:before{
						content: "";
						display: inline-block;
						vertical-align: middle;
						width: 6px;
						height: 6px;
						margin-right: 8px;
						border-radius: 50%;
					}
					&.li1{
						&:before{
							background-color: #01becc;
						}
					}
					&.li2{
						&:before{
							background-color: #f0573d;
						}
					}
					&.li3{
						&:before{
							background-color: #ffb400;
						}
					}
					&.li4{
						&:before{
							background-color: #ff7d2e;
						}
					}
					&.li5{
						&:before{
							background-color: #9a76be;
						}
					}
				}
			}
			.info_btn{
				display: block;
				position: relative;
				width: 100px;
				height: 30px;
				color: #fff;
				margin-top: 6px;
				text-align: center;
				background-color: #ccc;
				border-radius: 5px;
				font-size: 16px;
				line-height: 30px;
				border: none;
				&.active{
					background-color: #147edd;
				}
			}
		}
	}
	.content{
		background-color: #fff;
		margin: 0 16px 60px;
		border-radius: 10px;
		&.is_fixed{
			margin-top: 200px;
		}
		ul.select{
			padding: 22px 28px 14px;
			li{
				display: flex;
				align-items: center;
				margin-bottom: 13px;
				.label{
					margin-right: 8px;
					width: 60px;
					text-align: right;
					font-size: 14px;
					color: #999;
				}
				.value{
					flex: 1;
					height: 35px;
					line-height: 35px;
					padding-left: 10px;
					background-color: #f5f5f5;
					border-radius: 4px;
					position: relative;
					color: #333;
					width: 20%;
					padding-right: 20px;
					.value_text{
						overflow: hidden;
						text-overflow:ellipsis;
						white-space: nowrap;
					}
					i{
						display: block;
						position: absolute;
						top: 0;
						right: 10px;
						line-height: 35px;
						font-size: 20px;
						color: #666;
					}
				}
			}
		}
		.divider{
			margin: 0 16px;
    		border-top: 1px dashed #ccc;
		}
		.more{
			text-align: center;
			font-size: 12px;
			color: #999;
			margin-top: 12px;
			i{
				color: #000;
				display: block;
				line-height: 20px;
			}
		}
		ul.radio{
			padding: 25px 16px 0;
			li{
				font-size: 14px;
				color: #666;
				letter-spacing: 1px;
				.option_list{
					padding: 6px 8px;
					.option_item{
						display: inline-block;
						margin-bottom: 14px;
						width: 45%;
						position: relative;
						input{
							position: absolute;
							opacity: 0;
						}
						label {
							display: inline-block;
							width: 100%;
							height: 100%;
						}
					}
				}
			}
		}
	}
}
</style>