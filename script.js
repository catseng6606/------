$(function () {
    var surveyJSON = {
    "locale": "zh-tw",
    "locales": {
        "en": {
            "page1": {
                "elements": {
                    "nationality": {
                        "title": "Which country/region are you from?",
                        "choices": [
                            { "value": "tw", "text": "Republic of China (Taiwan)" },
                            { "value": "cn", "text": "People's Republic of China (Mainland China)" }
                        ]
                    }
                }
            },
            "page_tw_identity": {
                "elements": {
                    "tw_residency": {
                        "title": "Do you have a permanent or long-term residence status, or an endorsement on your nationality/household registration?",
                        "choices": [
                            { "value": "yes", "text": "Yes" },
                            { "value": "no", "text": "No" }
                        ]
                    }
                }
            },
            "page_cn_household": {
                "elements": {
                    "cn_household_location": {
                        "title": "Where is your current household registration?",
                        "choices": [
                            { "value": "hk_mo_tw_overseas", "text": "Hong Kong, Macau, Taiwan, Overseas (or other specified regions)" },
                            { "value": "other_provinces", "text": "Other provinces and cities (not among the specified 6 provinces and cities)" }
                        ]
                    }
                }
            },
            "result_overseas_local": {
                "description": "You are identified as an Overseas Chinese Student / Local Student. You are eligible to apply."
            },
            "result_local": {
                "description": "You are identified as a Local Student. You are eligible to apply."
            },
            "result_ineligible": {
                "description": "Unfortunately, you do not meet the application status. Thank you for your cooperation."
            },
            "completeText": "Complete",
            "requiredText": "This question is required."
        },
        "zh-tw": {
            "page1": {
                "elements": {
                    "nationality": {
                        "title": "您來自哪個國家/地區？",
                        "choices": [
                            { "value": "tw", "text": "中華民國 (Taiwan)" },
                            { "value": "cn", "text": "中國 (Mainland China)" }
                        ]
                    }
                }
            },
            "page_tw_identity": {
                "elements": {
                    "tw_residency": {
                        "title": "您是否取得居留證或戶籍與國籍身分加簽？",
                        "choices": [
                            { "value": "yes", "text": "是" },
                            { "value": "no", "text": "否" }
                        ]
                    }
                }
            },
            "page_cn_household": {
                "elements": {
                    "cn_household_location": {
                        "title": "您的戶籍於何處？",
                        "choices": [
                            { "value": "hk_mo_tw_overseas", "text": "港澳台僑 + 六省一市 (或圖示中指定的其他區域)" },
                            { "value": "other_provinces", "text": "設籍於其他省市 (不在上述6省1市中)" }
                        ]
                    }
                }
            },
            "result_overseas_local": {
                "description": "您被判定為僑生/本地生。您符合申請資格。"
            },
            "result_local": {
                "description": "您被判定為本地生。您符合申請資格。"
            },
            "result_ineligible": {
                "description": "很抱歉，您不具備申請資格。感謝您的配合。"
            },
            "completeText": "完成",
            "requiredText": "此問題為必填。"
        }
    },
    "pages": [
        {
            "name": "page1_nationality_selection",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "nationality",
                    "isRequired": true,
                    "title": {
                        "default": "Which country/region are you from?",
                        "zh-tw": "您來自哪個國家/地區？"
                    },
                    "choices": [
                        { "value": "tw", "text": { "default": "Republic of China (Taiwan)", "zh-tw": "中華民國 (Taiwan)" } },
                        { "value": "cn", "text": { "default": "People's Republic of China (Mainland China)", "zh-tw": "中國 (Mainland China)" } }
                    ]
                }
            ]
        },
        {
            "name": "page_tw_identity_check",
            "visibleIf": "{nationality} = 'tw'",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "tw_residency",
                    "isRequired": true,
                    "title": {
                        "default": "Do you have a permanent or long-term residence status, or an endorsement on your nationality/household registration?",
                        "zh-tw": "您是否取得居留證或戶籍與國籍身分加簽？"
                    },
                    "choices": [
                        { "value": "yes", "text": { "default": "Yes", "zh-tw": "是" } },
                        { "value": "no", "text": { "default": "No", "zh-tw": "否" } }
                    ]
                }
            ]
        },
        {
            "name": "page_cn_household_check",
            "visibleIf": "{nationality} = 'cn'",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "cn_household_location",
                    "isRequired": true,
                    "title": {
                        "default": "Where is your current household registration?",
                        "zh-tw": "您的戶籍於何處？"
                    },
                    "choices": [
                        { "value": "hk_mo_tw_overseas", "text": { "default": "Hong Kong, Macau, Taiwan, Overseas (or other specified regions)", "zh-tw": "港澳台僑 + 六省一市 (或圖示中指定的其他區域)" } },
                        { "value": "other_provinces", "text": { "default": "Other provinces and cities (not among the specified 6 provinces and cities)", "zh-tw": "設籍於其他省市 (不在上述6省1市中)" } }
                    ]
                }
            ]
        }
    ],
    "triggers": [
        {
            "type": "complete",
            "expression": "{nationality} = 'cn' and {cn_household_location} = 'other_provinces'"
        }
    ],
    "showProgressBar": "bottom",
    "showPrevButton": false,
    "showPageNumbers": true,
    "completeText": {
        "default": "Complete",
        "zh-tw": "完成"
    }
}

    var survey = new Survey.Model(surveyJSON);

    $("#surveyElement").Survey({
        model: survey,
        onCurrentPageChanged: function (sender, options) {
            if (sender.currentPage.name === 'page2') {
                var selectedLanguage = sender.data.language;
                sender.localeValue = selectedLanguage;
            }
        },
        onComplete: function (sender, options) {
            $("#surveyElement").hide();
            $("#result").text(JSON.stringify(sender.data)); // 這裡您可以根據回答產生結果連結
            $("#result").show();
        }
    });
});