<template>
	<section class="my">
        <ul>
            <li>
                <router-link class="link_a" to="/my/feedback">
                    <div class="link">
                        <img src="@/assets/feedback.png" alt="">
                        <div class="text">投诉建议</div>
                    </div>
                    <i class="fa fa-angle-right"></i>
                </router-link>
            </li>
            <li>
                <div class="link_a" @click="jump('/my/progressList')">
                    <div class="link">
                        <img src="@/assets/process.png" alt="">
                        <div class="text">办理进度</div>
                    </div>
                    <i class="fa fa-angle-right"></i>
                </div>
            </li>
            <li>
                <router-link class="link_a" to="/my/collectionList">
                    <div class="link">
                        <img src="@/assets/policy.png" alt="">
                        <div class="text">政策收藏</div>
                    </div>
                    <i class="fa fa-angle-right"></i>
                </router-link>
            </li>
            <li>
                <router-link class="link_a" to="/my/register">
                    <div class="link">
                        <img src="@/assets/phone2.png" alt="">
                        <div class="text">更换和绑定手机号</div>
                    </div>
                    <i class="fa fa-angle-right"></i>
                </router-link>
            </li>
            <li>
                <router-link class="link_a" to="/my/enterpriseInfo">
                    <div class="link">
                        <img src="@/assets/server.png" alt="">
                        <div class="text">企业详细资料</div>
                    </div>
                    <i class="fa fa-angle-right"></i>
                </router-link>
            </li>
        </ul>
	</section>
</template>

<script>
export default {
	name: 'My',
	data () {
		return {
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
        },
        jump(url){
            let newsIsBind = localStorage.getItem("newsIsBind") || 0;
            if (newsIsBind != 0) {
                this.$router.push({ path: url})
            }else{
                this.$vux.toast.text('请先绑定手机号');
                setTimeout(()=>{
                    this.$router.push({ path: '/my/register'})
                },1000)
            }
        },
        submit(){

        }
	}
}
</script>

<style scoped lang="less">
section.my{
    height: 100vh;
    background-color: #f1f1f1;
    ul{
        li{
            .link_a{
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0 20px;
                height: 46px;
                background-color: #fff;
                color: #333;
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
                .link{
                    display: flex;
                    img{
                        display: block;
                        width: 25px;
                        height: 25px;
                    }
                    .text{
                        padding-left: 10px;
                        color: #333;
                        font-size: 15px;
                    }
                }
                .fa-angle-right{
                    font-size: 24px;
                    color: #666;
                }
            }
        }
    }
}
</style>