$(function () {
    var surveyJSON = {
        "locale": "zh-tw",
        "locales": {
            "en": {
                "page1": {
                    "elements": {
                        "language": {
                            "title": "Please select your preferred language",
                            "choices": [
                                { "value": "zh-tw", "text": "Chinese" },
                                { "value": "en", "text": "English" }
                            ]
                        }
                    }
                },
                "page2": {
                    "elements": {
                        "question1": {
                            "title": "This is Survey Question 1."
                        }
                    }
                },
                "page3": {
                    "elements": {
                        "question2": {
                            "title": "This is Survey Question 2."
                        }
                    }
                },
                "page4": {
                    "elements": {
                        "conditionA": {
                            "title": "Is condition A met?",
                            "choices": [
                                { "value": "yes", "text": "Yes" },
                                { "value": "no", "text": "No" }
                            ]
                        }
                    }
                },
                "result_a": {
                    "description": "Result Page A: Congratulations! You meet the conditions."
                },
                "result_b": {
                    "description": "Result Page B: Sorry, you do not meet the conditions."
                },
                "completeText": "Complete"
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
                        "question1": {
                            "title": "這是問卷問題 1。"
                        }
                    }
                },
                "page3": {
                    "elements": {
                        "question2": {
                            "title": "這是問卷問題 2。"
                        }
                    }
                },
                "page4": {
                    "elements": {
                        "conditionA": {
                            "title": "是否符合A條件？",
                            "choices": [
                                { "value": "yes", "text": "是" },
                                { "value": "no", "text": "否" }
                            ]
                        }
                    }
                },
                "result_a": {
                    "description": "結果頁面 A：恭喜！您符合條件。"
                },
                "result_b": {
                    "description": "結果頁面 B：抱歉，您不符合條件。"
                },
                "completeText": "完成"
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
                        "name": "question1",
                        "isRequired": true,
                        "title": {
                            "default": "This is Survey Question 1.",
                            "zh-tw": "這是問卷問題 1。"
                        }
                    }
                ]
            },
            {
                "name": "page3",
                "elements": [
                    {
                        "type": "text",
                        "name": "question2",
                        "isRequired": true,
                        "title": {
                            "default": "This is Survey Question 2.",
                            "zh-tw": "這是問卷問題 2。"
                        }
                    }
                ]
            },
            {
                "name": "page4",
                "elements": [
                    {
                        "type": "radiogroup",
                        "name": "conditionA",
                        "isRequired": true,
                        "title": {
                            "default": "Is condition A met?",
                            "zh-tw": "是否符合A條件？"
                        },
                        "choices": [
                            { "value": "yes", "text": { "default": "Yes", "zh-tw": "是" } },
                            { "value": "no", "text": { "default": "No", "zh-tw": "否" } }
                        ]
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