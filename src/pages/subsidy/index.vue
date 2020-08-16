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
					<div class="fee">{{amount}}</div>
					<div class="unit">万</div>
				</div>
			</div>
			<div class="info">
				<ul>
					<li class="li1"><span>人社局 {{renshe}}%</span></li>
					<li class="li2"><span>科委 {{kewei}}%</span></li>
					<li class="li3"><span>经信委 {{jingxinwei}}%</span></li>
					<li class="li4"><span>中小企业局 {{zhongxiao}}%</span></li>
					<li class="li5"><span>其他 {{qita}}%</span></li>
				</ul>
				<button class="info_btn" :class="{'active': isJump}" @click="Jump">查看详情</button>
			</div>
		</div>
		<div class="content" :class="{'is_fixed' : isFixed}">
			<ul class="select">
				<li>
					<div class="label">公司名称</div>
					<div class="value">
						<input type="text" class="value_text" v-model="form.company_name">
					</div>
				</li>
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
						<div class="value_text">{{text3}}</div>
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
							<input :id="'D'+(i+1)+'_'+(j+1)" type="radio" :value="j+1" :name="item.name" @change="radioChange($event, item.name)" :checked="j ? true : false">
							<label :for="'D'+(i+1)+'_'+(j+1)">{{j?"否":"是"}}</label>
						</div>
					</div>
				</li>
				<li class="bottom">
					<button class="btn" @click="submit">提交</button>
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
			<popup-header left-text="取消" right-text="确认"  title="输入社保人数" @on-click-left="show4=false" @on-click-right="confirm(4)"></popup-header>
			<div style="height:238px;">
				<x-number v-model="value4" :min="0" :max="200" :fillable="true" width="100%" button-style="round"></x-number>
			</div>
		</popup>
		<popup v-model="show5">
			<popup-header left-text="取消" right-text="确认"  title="输入农民工数" @on-click-left="show5=false" @on-click-right="confirm(5)"></popup-header>
			<div style="height:238px;">
				<x-number v-model="value5" :min="0" :max="200" :fillable="true" width="100%" button-style="round"></x-number>
			</div>
		</popup>
		<popup v-model="show6">
			<popup-header left-text="取消" right-text="确认"  title="输入农民工数" @on-click-left="show6=false" @on-click-right="confirm(6)"></popup-header>
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
			listt1: [],
			value1: [],
			text1: '',

			show2: false,    // 选择行业
			listt2: [],
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

			form: {
				social_security: '2', 
				sale_income: '2',
				shares: '2',
				develop: '2',
				knowledge: '2',
				loan: '2',
				invoice: '2',
				enterprise_cases: '2',
				company_name: '',
				industry_id: '2',
				business_income: '0',
				social_security_num: '0',
				staff_num: '0',
				college_student_num: '0'

			},
			cityList: [],
			industryList: [],
			revenueList: [],
			amount: 0,
			renshe: 0,
			kewei: 0,
			jingxinwei: 0,
			zhongxiao: 0,
			qita: 0
		}
	},
	mounted () {
		window.addEventListener('scroll',this.handleScroll, true); // 监听滚动事件，然后用handleScroll这个方法进行相应的处理
		this.$util.get('mobile/income-list').then(res=>{
			let arr = [], data = res.data, revenueList = [];
			for(var i in data.list){
				arr.push(data.list[i]);
				revenueList.push({
					id: i,
					val: data.list[i]
				})
			}
			this.listt3 = [arr];
			this.revenueList = revenueList;
			console.log(this.revenueList)

			// 选区
			this.cityList = data.city_list;
			let city_list = data.city_list.map( item => { return {name: item.name,value: item.name} } );
			this.listt1 = [city_list];

			// 选行业
			this.industryList = data.industry_list;
			let industry_list = data.industry_list.map( item => { return {name: item.name,value: item.name} } );
			this.listt2 = [industry_list];
		})
		this.Chart();
	},
	methods: {
		Chart(){
			var {renshe, kewei, jingxinwei, zhongxiao, qita} = this;
			let myChart = this.$echarts.init(document.getElementById('my_chart'))
			// 绘制图表
			myChart.setOption({
				color : [ '#01becc', '#f0573d', '#ffb400', '#ff7d2e', '#9a76be'],
				series: [{
					name: '销量',
					type: 'pie',
					radius: ['58%', '90%'],
					data: [renshe, kewei, jingxinwei, zhongxiao, qita],
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
			if (index < 4) {
				this["text"+index] = this["value"+index][0];
			}

			if (index == 2) {
				let id = this.industryList.filter( item => item.name == this.text2 )[0].id;
				this.form.industry_id = id;
			}
			if (index >= 4) {
				this.form.social_security_num = this.text4;
				this.form.college_student_num = this.text6;
				this.form.staff_num = this.text5;
			}

			var revenue = 0;
			if (this.text3) {
				revenue = this.revenueList.filter(item => this.text3 == item.val )[0].id;
				this.form.business_income = revenue;
			}
			var data = {
				college_student: this.value6 || 0,
				social_security: this.value4 || 0,
				staff: this.value5 || 0,
				revenue: revenue || 0
			}
			if (data.college_student || data.social_security || data.staff || data.revenue) {
				this.$util.get('mobile/calculate-amount',data).then(res=>{
					this.amount = res.data.amount;
					this.renshe = res.data.list.renshe;
					this.kewei = res.data.list.kewei;
					this.jingxinwei = res.data.list.jingxinwei;
					this.zhongxiao = res.data.list.zhongxiao;
					this.qita = res.data.list.qita;
					this.Chart();
				})
			}
		},
		Jump(){
			if (this.isJump) {
				 this.$router.push({ path:'/subsidy/projectList'})
			}
		},
		radioChange(e, type){
			var val = e.target.value;
			this.form[type] = val;
		},
		submit(){
			this.$util.get('mobile/receive-subsidy', this.form).then(res=>{
				this.$vux.toast.text('提交成功');
			})
		}
	}
}
</script>

<style scoped lang="less">
html,body,#app{
  width: 100%;
  height: auto;
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
					&.li6{
						&:before{
							background-color: green;
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
					input.value_text{
						overflow: auto;
						border: none;
						outline: none;
						background-color: #f5f5f5;
						color: #333;
						height: 100%;
						display: block;
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
				&.bottom{
					padding-bottom: 10px;
					.btn{
						display: block;
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
						background-color: #147edd;
					}
				}
			}
		}
	}
}
</style>