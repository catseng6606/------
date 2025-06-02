var surveyJSON = {
    "title": "中華民國與其他國家學生身分確認",
    "description": "用於判斷您的中華民國與其他國家戶籍學生身分相關資格。",
    "pages": [
        {
            "name": "page_taiwan_hukou_status",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "has_taiwan_hukou_to",
                    "title": "是否在台灣設過戶籍？",
                    "choices": [
                        {
                            "value": "yes",
                            "text": "是"
                        },
                        {
                            "value": "no",
                            "text": "否"
                        }
                    ],
                    "isRequired": true,
                    "colCount": 1
                }
            ],
            "title": "台灣戶籍狀態"
        }
    ],
    "showCompletedPage": true,
    "completedHtml": "<h4>感謝您完成！</h4><p>您的資格判斷結果如下：</p>",
    "completedHtmlOnCondition": [
        {
            "expression": "{has_taiwan_hukou_to} = 'yes'",
            "html": "<h4>感謝您完成！</h4><p>您的資格為：<b>僑生、本地生</b></p>"
        },
        {
            "expression": "{has_taiwan_hukou_to} = 'no'",
            "html": "<h4>感謝您完成！</h4><p>您的資格為：<b>僑生、國際生、本地生</b></p>"
        },
        {
            "expression": "true",
            "html": "<h4>感謝您完成！</h4><p>無法判斷您的資格，請聯繫相關單位。</p>"
        }
    ]
}