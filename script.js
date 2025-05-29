$(function() {
    var surveyJSON = {
        "locale": "zh-tw", // 預設語系為繁體中文
        "locales": {
            "en": {
                "page1": {
                    "elements": {
                        "language": {
                            "title": "Please select your preferred language",
                            "choices": [
                                { "value": "zh-tw", "text": "中文" },
                                { "value": "en", "text": "English" }
                            ]
                        }
                    }
                },
                "page2": {
                    "elements": {
                        "name": {
                            "title": "What is your name?"
                        },
                        "age": {
                            "title": "How old are you?"
                        }
                    }
                }
            },
            "zh-tw": {
                "page1": {
                    "elements": {
                        "language": {
                            "title": "請選擇您偏好的語言",
                            "choices": [
                                { "value": "zh-tw", "text": "中文" },
                                { "value": "en", "text": "英文" }
                            ]
                        }
                    }
                },
                "page2": {
                    "elements": {
                        "name": {
                            "title": "您的姓名是？"
                        },
                        "age": {
                            "title": "您的年齡是？"
                        }
                    }
                }
            }
        },
        "pages": [
            {
                "name": "page1",
                "elements": [
                    {
                        "type": "radiogroup",
                        "name": "language",
                        "isRequired": true,
                        "title": {
                            "default": "Please select your preferred language",
                            "zh-tw": "請選擇您偏好的語言"
                        },
                        "choices": [
                            { "value": "zh-tw", "text": { "default": "Chinese", "zh-tw": "中文" } },
                            { "value": "en", "text": { "default": "English", "zh-tw": "英文" } }
                        ]
                    }
                ]
            },
            {
                "name": "page2",
                "elements": [
                    {
                        "type": "text",
                        "name": "name",
                        "title": {
                            "default": "What is your name?",
                            "zh-tw": "您的姓名是？"
                        }
                    },
                    {
                        "type": "number",
                        "name": "age",
                        "title": {
                            "default": "How old are you?",
                            "zh-tw": "您的年齡是？"
                        }
                    }
                ]
            }
        ],
        "showProgressBar": "bottom",
        "showPrevButton": false,
        "showPageNumbers": true,
        "completeText": {
            "default": "Complete",
            "zh-tw": "完成"
        }
    };

    var survey = new Survey.Model(surveyJSON);

    $("#surveyElement").Survey({
        model: survey,
        onCurrentPageChanged: function(sender, options) {
            if (sender.currentPage.name === 'page2') {
                var selectedLanguage = sender.data.language;
                sender.localeValue = selectedLanguage;
            }
        },
        onComplete: function(sender, options) {
            $("#surveyElement").hide();
            $("#result").text(JSON.stringify(sender.data)); // 這裡您可以根據回答產生結果連結
            $("#result").show();
        }
    });
});