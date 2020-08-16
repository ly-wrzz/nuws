<template>
    <section class="projectlist">
        <header>
            <div class="return" @click="back">
                <i class="fa fa-angle-left"></i>
                <span>返回</span>
            </div>
            <div class="title">项目列表</div>
            <div class="right" @click="checkAll">{{isCheckAll?"取消全选":"全选"}}</div>
        </header>
        <ul class="content">
            <li @click="jump">
                <div class="proj-header">
                    <div class="title">社会保险补贴</div>
                    <div  @click.stop>
                        <check-icon :value.sync="demo1" checklist-icon-active-color="red"></check-icon>
                    </div>
                </div>
                <div class="proj-body">
                    <div class="subsidy">
                        <div class="sum">
                            <span class="num">12900</span>
                            <span class="unit">元/人/年</span>
                        </div>
                        <div class="subsidy-tip">最高补贴</div>
                    </div>
                    <div class="period-easy">
                        <div class="period">
                            申报周期
                            <span>6个月内</span>
                        </div>
                        <div class="easy">
                            难易程度
                            <img src="@/assets/star.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="proj-footer">
                    <div>--------</div>
                    <div>34家企业已享受</div>
                </div>
            </li>
            <li>
                <div class="proj-header">
                    <div class="title">社会保险补贴</div>
                    <check-icon :value.sync="demo2" checklist-icon-active-color="red"></check-icon>
                </div>
                <div class="proj-body">
                    <div class="subsidy">
                        <div class="sum">
                            <span class="num">12900</span>
                            <span class="unit">元/人/年</span>
                        </div>
                        <div class="subsidy-tip">最高补贴</div>
                    </div>
                    <div class="period-easy">
                        <div class="period">
                            申报周期
                            <span>6个月内</span>
                        </div>
                        <div class="easy">
                            难易程度
                            <img src="@/assets/star.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="proj-footer">
                    <div>--------</div>
                    <div>34家企业已享受</div>
                </div>
            </li>
            <li>
                <div class="proj-header">
                    <div class="title">社会保险补贴</div>
                    <check-icon :value.sync="demo2" checklist-icon-active-color="red"></check-icon>
                </div>
                <div class="proj-body">
                    <div class="subsidy">
                        <div class="sum">
                            <span class="num">12900</span>
                            <span class="unit">元/人/年</span>
                        </div>
                        <div class="subsidy-tip">最高补贴</div>
                    </div>
                    <div class="period-easy">
                        <div class="period">
                            申报周期
                            <span>6个月内</span>
                        </div>
                        <div class="easy">
                            难易程度
                            <img src="@/assets/star.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="proj-footer">
                    <div>--------</div>
                    <div>34家企业已享受</div>
                </div>
            </li>
        </ul>
        <footer>
            <router-link class="btn" to="/subsidy/projectId">一键办理</router-link>
        </footer>
    </section>
</template>

<script>
import { CheckIcon } from 'vux'
export default {
    name: 'ProjectList',
    components: {
        CheckIcon
    },
    data () {
        return {
            demo1: false,
            demo2: false,
            isCheckAll: false
        }
    },
    mounted () {

    },
    methods: {
        checkAll(){
            this.isCheckAll = !this.isCheckAll;
            if (this.isCheckAll) {
                this.demo1 = true;
                this.demo2 = true;
            }else{
                this.demo1 = false;
                this.demo2 = false;
            }
        },
        jump(){
            this.$router.push({
                path: "/subsidy/document",
            })
        },
		back(){
			this.$router.go(-1);//返回上一层
		}
    }
}
</script>

<style scoped lang="less">
.projectlist{
    height: 100%;
    overflow: hidden;
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
    ul.content{
        padding: 46px 15px 60px;
        overflow-y: scroll;
        height: 100%;
        box-sizing: border-box;
        li{
            font-size: 14px;
            color: #999;
            margin-top: 10px;
            background-color: #fff;
            border-radius: 5px;
            padding: 10px 19px;
            .proj-header{
                display: flex;
                justify-content: space-between;
                align-items: center;
                .title{
                    font-size: 20px;
                    color: #333;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    padding-right: 10px;
                }
            }
            .proj-body{
                display: flex;
                justify-content: space-between;
                padding: 12px 4px;
                position: relative;
                .subsidy{
                    .sum{
                        color: #ff0505;
                        .num{
                            font-size: 30px;
                        }
                        .unit{
                            font-size: 15px;
                        }
                    }
                    .subsidy-tip{
                        font-size: 14px;
                        color: #999;
                        margin-top: -5px;
                    }
                }
                .period-easy{
                    .period{
                        margin-top: 10px;
                        margin-bottom: 8px;
                        span{
                            font-size: 16px;
                            color: #333;
                            padding-left: 4px;
                        }
                    }
                    .easy{
                        img{
                            height: 15px;
                            width: 15px;
                            padding-left: 4px;
                            position: relative;
                            top: 2px;
                        }
                    }
                }
                &::after{
                    content: " ";
                    position: absolute;
                    left: 0;
                    right: 0;
                    height: 1px;
                    width: 100%;
                    border-top: 1px solid #c7c7c7;
                    bottom: 0;
                    transform: scaleY(.5);
                }
            }
            .proj-footer{
                display: flex;
                justify-content: space-between;
                padding-top: 10px;
            }
        }
    }
    footer{
        background-color: #f1f1f1;
        box-sizing: border-box;
        padding: 5px 10px;
        position: fixed;
        width: 100%;
        height: 50px;
        bottom: 0;
        left: 0;
        box-shadow: 0 -1px 5px #dadada;
        .btn{
            display: block;
            color: #fff;
            text-align: center;
            font-size: 18px;
            line-height: 40px;
            background-color: #108eeb;
            border-radius: 5px;
            width: 100%;
            border: none;
        }
    }
}
</style>