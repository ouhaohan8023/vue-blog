<template>
	<el-container id="app">
		<el-header>
			<Header></Header>
		</el-header>
		<el-main>
			<el-row>
				<el-col :span="22" :offset="1">
					<div>
						<router-view />
					</div>
				</el-col>
			</el-row>
			<el-backtop id="backtop"></el-backtop>
		</el-main>
	</el-container>
</template>

<style lang="scss">
	// html {
	//     /* iPhone6的375px尺寸作为16px基准，600px正好18px大小 */
	//     font-size: calc(100% + 2 * (100vw - 375px) / 225);
	// }
	// @media screen and (min-width: 600px) {
	//     html {
	//         /* 600px-1000px每100像素宽字体增加1px(18px-22px) */
	//         font-size: calc(112.5% + 4 * (100vw - 600px) / 400);
	//     }
	// }
	// @media screen and (min-width: 1000px) {
	//     html {
	//         /* 1000px往后是每100像素0.5px增加 */
	//         font-size: calc(122% + 5 * (100vw - 1000px) / 1000);
	//     }
	// }
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}


	body {
		margin: 0;
		background-image: linear-gradient(to bottom, #13547a 0%, #3e8599 100%);

		.el-main {
			min-height: 93.3vh;
			
			.el-breadcrumb__inner.is-link,
			.el-breadcrumb__inner a,
			.el-breadcrumb__inner,
			.el-breadcrumb__item:last-child .el-breadcrumb__inner,
			.el-breadcrumb__item:last-child .el-breadcrumb__inner a {
				color: snow;
			}
			
			.el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover,
			.el-breadcrumb__item:last-child .el-breadcrumb__inner:hover,
			.el-breadcrumb__inner.is-link:hover,
			.el-breadcrumb__inner:hover {
				color: #FFFFFF;
			}
		}
	}

	a {
		text-decoration: none;
	}
</style>
<script>
	import Header from '@/components/layout/Header.vue'

	export default {
		name: 'App',
		components: {
			Header
		}
	}
</script>
