<template>
	<section class="progress_list">
        <header>
            <div class="return" @click="back">
                <i class="fa fa-angle-left"></i>
                <span>返回</span>
            </div>
            <div class="title">办理进度</div>
            <div class="right"></div>
        </header>
        <nav>
            <div @click="changeType(1)" :class="{active: type==1}">办理中</div>
            <div @click="changeType(2)" :class="{active: type==2}">已完成</div>
        </nav>
        <article>
			<scroller class="scroller" :lock-x="true" v-if="list.length">
				<ul>
					<li v-for="(item) in list" :key="item.id">
                        <div class="list_item">
                            <div class="label">公司名字：</div>
                            <div class="val">{{item.company_name}}</div>
                        </div>
                        <div class="list_item">
                            <div class="label">服务项目：</div>
                            <div class="val">{{item.service_items}}</div>
                            <!-- <div class="val" v-if="item.service_items==1">财税呆账</div>
                            <div class="val" v-if="item.service_items==2">项目申报</div>
                            <div class="val" v-if="item.service_items==3">人社补贴</div>
                            <div class="val" v-if="item.service_items==4">资质办理</div>
                            <div class="val" v-if="item.service_items==5">工商服务</div>
                            <div class="val" v-if="item.service_items==6">其他服务</div> -->
                        </div>
                        <div class="list_item">
                            <div class="label">合同金额：</div>
                            <div class="val">{{item.amount}}</div>
                        </div>
                        <div class="list_item">
                            <div class="label">项目周期：</div>
                            <div class="val">{{item.service_cycle}}</div>
                        </div>
                        <div class="list_item">
                            <div class="label">其他：</div>
                            <div class="val">{{item.othe_remark}}</div>
                        </div>
                        <div class="list_item">
                            <div class="label">备注：</div>
                            <div class="val">{{item.remark}}</div>
                        </div>
                        <div class="list_item">
                            <div class="label">办理进度：</div>
                            <div class="val">{{item.order_status_name}}</div>
                        </div>
                        <div class="list_item">
                            <div class="label">创建时间：</div>
                            <div class="val">{{item.create_time}}</div>
                        </div>
					</li>
				</ul>
			</scroller>
			<div class="scroller no_data" v-else>
				<img src="@/assets/nodata.png" alt="">
				<div class="text">暂无办理进度</div>
			</div>
        </article>
	</section>
</template>

<script>
import { Scroller } from 'vux'
export default {
    components: {
        Scroller
    },
	name: 'ProgressList',
	data () {
		return {
            type: 1,
            list: [],
            allList: []
		}
	},
	mounted () {
		this.getData();
	},
	methods: {
		back(){
			this.$router.go(-1);//返回上一层
		},
		getData(){
            this.$util.get('mobile/order-list').then(res=>{
                this.allList = res.data.list;
                this.list = this.allList.filter(item => item.order_status != 7);
            })
        },
        changeType(index) {
            this.type = index;
            if (index==1) {
                this.list = this.allList.filter(item => item.order_status != 7);
            }else{
                this.list = this.allList.filter(item => item.order_status == 7);
            }
        },
        submit(){

        }
	}
}
</script>

<style scoped lang="less">
section.progress_list{
    height: 100vh;
    background-color: #f1f1f1;
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
    nav{
        padding-top: 46px;
        background-color: #fff;
        display: flex;
        align-items: center;
        line-height: 50px;
        position: relative;
        &::after{
            content: " ";
            width: 100%;
            position: absolute;
            left: 0;
            bottom: 0;
            height: 1px;
            background-color: #c7c7c7;
            transform: scaleY(.5);
        }
        div{
            width: 50%;
            text-align: center;
            font-size: 18px;
            &.active{
                color: #108eeb;
            }
        }
    }
    article{
        height: calc(100% - 96px);
        .scroller{
            height: 100% !important;
        }
        ul{
            li{
                background-color: #fff;
                margin-bottom: 10px;
                padding: 10px;
                .list_item{
                    display: flex;
                    padding-bottom: 2px;
                    .label{
                        width: 82px;
                        color: #666;
                    }
                }
            }
        }
        .no_data{
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
</style>