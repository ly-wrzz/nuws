<template>
	<section class="my">
        <header>
            <div class="return" @click="back">
                <i class="fa fa-angle-left"></i>
                <span>返回</span>
            </div>
            <div class="title">投诉建议</div>
            <div class="right"></div>
        </header>
        <article>
            <ul class="radio">
				<li>
					<div class="topic">1.服务态度</div>
					<div class="option_list">
						<div class="option_item">
                            <input type="radio" id="radio1-1" name="service_type" @change="radioChange($event, 'service_type')" value="1" checked>
                            <label for="radio1-1">满意</label>
                        </div>
						<div class="option_item">
                            <input type="radio" id="radio1-2" name="service_type" @change="radioChange($event, 'service_type')" value="2">
                            <label for="radio1-2">不满意</label>
                        </div>
					</div>
				</li>
				<li>
					<div class="topic">2.服务时效</div>
					<div class="option_list">
						<div class="option_item">
                            <input type="radio" id="radio2-1" name="service_time" @change="radioChange($event, 'service_time')" value="1" checked>
                            <label for="radio2-1">满意</label>
                        </div>
						<div class="option_item">
                            <input type="radio" id="radio2-2" name="service_time" @change="radioChange($event, 'service_time')" value="2">
                            <label for="radio2-2">不满意</label>
                        </div>
					</div>
				</li>
				<li>
					<div class="topic">3.服务结果</div>
					<div class="option_list">
						<div class="option_item">
                            <input type="radio" id="radio3-1" name="service_result" @change="radioChange($event, 'service_result')" value="1" checked>
                            <label for="radio3-1">满意</label>
                        </div>
						<div class="option_item">
                            <input type="radio" id="radio3-2" name="service_result" @change="radioChange($event, 'service_result')" value="2">
                            <label for="radio3-2">不满意</label>
                        </div>
					</div>
				</li>
				<li class="bottom">
					<button class="btn" @click="submit">提交</button>
				</li>
			</ul>
        </article>
	</section>
</template>

<script>
export default {
	name: 'Feedback',
	data () {
		return {
            form: {
                service_type: '1',
                service_time: '1',
                service_result: '1'
            }
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
		radioChange(e, type){
            var val = e.target.value;
			this.form[type] = val;
		},
        submit(){
            this.$util.get('mobile/suggest',this.form).then(res=>{
                this.$vux.toast.text('提交成功');
                setTimeout(()=>{
			        this.$router.go(-1);//返回上一层
                },2000)
            })
        }
	}
}
</script>

<style scoped lang="less">
section.my{
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
    article{
        padding: 56px 10px;
		ul.radio{
            background-color: #fff;
            padding: 25px 16px 0;
            border-radius: 8px;
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
				&.bottom{
					padding-bottom: 20px;
					.btn{
                        display: block;
                        margin: 0 auto;
						width: 150px;
						height: 40px;
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