<template>
	<div class="header">
		<a href="#/">
			<div class="logo">
				如衣服的博客
			</div>
		</a>
		<div class="nav">
			<ul>
				<li v-for="m in menus" :key=m.id><router-link :to="{ path: '/', query: { classify: m.id } }">{{m.name}}</router-link></li>
			</ul>
		</div>

	</div>
</template>

<script>
	export default {
		name: 'Header',
		data() {
			return {
				menus: []
			};
		},
		created() {
			this.getHeaderMenus()
		},
		methods: {
			getHeaderMenus() {
				let url = "/classify/menu";
				this.axios.get(url).then(res => {
					this.menus = res.data.data;
				})
			}
		}
	}
</script>
<style lang="scss">
	.header {
		// width: 100vw;
		height: 7vh;
		border-bottom: 1px solid #0f5279;
		box-shadow: #42B983;

		.logo {
			color: aliceblue;
			font-size: 1.5rem;
			line-height: 7vh;
			left: 1.5rem;
			position: absolute;
			width: 10rem;
		}

		.nav {
			position: absolute;
			width: 70vw;
			left: 12rem;
			font-size: 1rem;
		}

		.nav ul {
			margin: 0;
			padding: 0;
			text-align: left;

			li {
				display: inline;
				line-height: 7vh;
				margin-left: 5rem;

				a {
					color: aliceblue;
				}

				a:hover {
					color: #FFFFFF;
				}
			}
		}
	}
</style>
