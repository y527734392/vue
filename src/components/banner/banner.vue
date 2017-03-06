<template>
	<div class="banner">
		<h2>Banner</h2>
		<ul class="banner_list_img">
			<li>
				<span><i>*</i>第一张</span>
				<input type="text" v-model="banner_img">
				<div class="info">
					<div class="info_load" v-if="!imgs">数据加载中....</div>
					<div class="img_info_pic" v-if="imgs">
						<img :src="imgs" alt="">
					</div>
				</div>
			</li>
		</ul>
			
	</div>
</template>
<style lang="less">
	@import "../../common/css/banner.less";
</style>
<script>
	export default {
		data() {
			return {
				banner_img:'',
				imgs:'',
			};
		},
		watch:{
			banner_img:function(id){
				this.setUrl(id);
				let reg=/http:\/\/|https:\/\//;
				if(reg.test(id)){
					this.imgs=id;
				}else {
					this.imgs='';
				}
			}
		},
		methods:{
			setUrl:function(img){
				var _this = this;
				console.log(this);
				console.log(img);
			}
		}
	};
</script>