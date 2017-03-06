<template>
	<div class="wrap clearfix">
		<div class="nav">
			<!--<ul>
				<li v-for='(item,index) in admin_nav'>
					&lt;!&ndash;<img src="{{show}}" alt="">&ndash;&gt;
					&lt;!&ndash;<a v-link="{path:'/banner'}">{{ item.name }}</a>&ndash;&gt;
					<router-link class="nav_{ item.path }" to="" linkActiveClass="on">{{ item.name }}</router-link>
				</li>
			</ul>-->
			<h2>导航</h2>
			<ul>
				<li class="nav_list">
					<router-link class="nav_banner" to="/banner">Banner</router-link>
				</li>
				<li class="nav_list">
					<router-link class="nav_goods" to="/goods">商品信息</router-link>
				</li>
			</ul>
		</div>
		<div class="content">

			<router-view></router-view>
		</div>
	</div>

</template>
