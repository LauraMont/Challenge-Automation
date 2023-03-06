import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";

async function setupNodeEvents(on,config){
	on(
		'file:preprocessor',
		createBundler()
	);
	//Make sure to return the config object as ir might have been modifeed by the plugin
	return config;
}

export default defineConfig({
	e2e: {
			setupNodeEvents,
			specPattern:[
				'cypress/e2e/**/*.cy.*'
			],
		},
	env:{
		baseUrl: 'https://www.saucedemo.com',
		swagLabs: {
			endpoint: {
				inventory: '/inventory.html',
				cart: '/cart.html',
				checkoutOne: '/checkout-step-one.html',
				checkoutTwo: '/checkout-step-two.html',
				checkoutAll: '/checkout-complete.html',
			},
			login: {
				users: {
					correctUser: 'standard_user',
					correctPass: 'secret_sauce',
					lockUser: 'locked_out_user',
					problemUser: 'problem_user',
					passInv: 'invalid_password',
					glitchUser: 'performance_glitch_user',
					userInv: 'invalid_username',
				},
				errorMsg: {
					inventoryError: "Epic sadface: You can only access '/inventory.html' when you are logged in.",
					cartError: "Epic sadface: You can only access '/cart.html' when you are logged in.",
					checkoutOneError: "Epic sadface: You can only access '/checkout-step-one.html' when you are logged in.",
					checkoutTwoError: "Epic sadface: You can only access '/checkout-step-two.html' when you are logged in.",
					checkoutAllError: "Epic sadface: You can only access '/checkout-complete.html' when you are logged in.",
					lockedUser: 'Epic sadface: Sorry, this user has been locked out.',
					PassOrUserInv: 'Epic sadface: Username and password do not match any user in this service',
					UserNull: 'Epic sadface: Username is required',
					PassNull: 'Epic sadface: Password is required',
				},
			},
		},
	},
})
