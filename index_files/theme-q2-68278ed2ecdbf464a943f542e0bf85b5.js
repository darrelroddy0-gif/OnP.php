define('q2ngam/themejs/theme-q2',["exports"], function(__exports__) {
var themeJS = {
	themeName : "theme-q2",
	cssName : "q2",
	lpColorMap : {
		"C" : "#7d9638",
		"S" : "#d99741",
		"L" : "#dd8862",
		"X" : "#a53326",
		"defaultColor" : "#a53326"
	},
	widgets : [{
			page : "dashboard",
			location : "top",
			orientation : "horizontal",
			devices : ["tablet", "desktop"],
			widgets : [{
					name : "FullBannerAd"
				},{
                    "name": "DynamicForm",
                    "devices": ["phone","tablet"],
                    "extras": {
                             "formId" : 52,
                             "selfSubmitting" : true
                            }
                }
			]
		},{
           page: "dashboard",
           location:"account-card",
           devices: ["tablet", "desktop", "phone"],
           widgets: [
               {
                   name: "SmartAd",
                   spaceId: 6
               },
           ]
       },{
            page: "dashboard",
            location:"account-group",
            devices : ["tablet", "desktop", "phone"],
            widgets: [
                {
                    name: "SmartAd",
                    spaceId: 7
                },
            ]
        },{
			page: "dashboard",
			location: "bottom",
			orientation : "horizontal",
			widgets : [{
					name : "ManualAccounts",
					devices : ["tablet", "desktop", "phone"],
		}, {
					name : "AccountSummary"
				}
			]
		}, {
			page : "dashboard",
			location : "right",
			orientation : "vertical",
			widgets : [{
					name : "Stacked",
					widgets : [{
							name : "Transfer",
						}, {
							name : "CustomLink",
							devices : ["tablet", "phone"],
							linkTitle : "Mobile Deposit",
							linkedRoute : "rdc"
						},{
							"name" : "DynamicForm",
							"extras" : {
							"formId" : 59,
							"title" : "Unlock User",
							"selfSubmitting" : true
							}
						},{
							name : "CustomLink",
							"linkTitle" : "Digital Banking Agreements",
							"externalURL" : "https://www.onpointcu.com/digital-banking/digital-banking-agreements/"
						}
					]
				},{
					"name" : "Tecton",
					"featureName": "RBSPWidget",
					"moduleName": "Main"
				},{
					"name" : "DynamicForm",
					"extras" : {
						"formId" : 41,
						"title" : "",
						"selfSubmitting" : true
					}
				},{
					"name" : "DynamicForm",
					"extras" : {
						"formId" : 36,
						"title" : "",
						"selfSubmitting" : true
					}
				},{
					"name" : "DynamicForm",
					"extras" : {
						"formId" : 39,
						"title" : "",
						"selfSubmitting" : true
					}
				},{
					"name" : "DynamicForm",
					"extras" : {
						"formId" : 49,
						"title" : "",
						"selfSubmitting" : true
					}
				},{
					"name" : "DynamicForm",
					"extras" : {
						"formId" : 64,
						"title" : "",
						"selfSubmitting" : true
					}
				}
			]
		}, {
			page : "commercial",
			location : "right",
			orientation : "vertical",
			widgets : [{
					name : "SmallAd",
					gravity : "above"
				}
			]
		}, {
			page : "template",
			location : "right",
			orientation : "vertical",
			widgets : [{
					name : "SmallAd",
					gravity : "above"
				}
			]
		}, {
			page : "recipient",
			location : "right",
			orientation : "vertical",
			widgets : [{
					name : "SmallAd",
					gravity : "above"
				}
			]
		}, {
			page : "transfer",
			location : "right",
			orientation : "vertical",
			widgets : [{
					name : "SmallAd",
					gravity : "above"
				}
			]
		}, {
			page : "rdc",
			location : "right",
			orientation : "vertical",
			widgets : [{
					name : "SmallAd",
					gravity : "above"
				}
			]
		}, {
			page : "news",
			location : "right",
			orientation : "vertical",
			widgets : [{
					name : "SmallAd",
					gravity : "above"
				}
			]
		}, {
			page : "branches",
			location : "right",
			orientation : "vertical",
			widgets : [{
					name : "SmallAd",
					gravity : "above"
				}
			]
		}, {
			page : "messages",
			location : "top",
			orientation : "horizontal",
			devices : ["tablet", "desktop"],
			widgets : [{
					name : "BannerAd"
				}
			]
		}, {
			page : "messages",
			location : "right",
			orientation : "vertical",
			widgets : [{
					name : "SmallAd",
					gravity : "above"
				}
			]
		}, {
			page : "settings",
			location : "right",
			orientation : "vertical",
			widgets : [{
					name : "SmallAd",
					gravity : "above"
				}
			]
		}, {
			page : "approvals",
			location : "right",
			orientation : "vertical",
			widgets : [{
					name : "SmallAd",
					gravity : "above"
				}
			]
		}
	]
};
__exports__['default'] = themeJS;});
