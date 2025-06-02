var surveyJSON = {
    "title": "中華民國與中國學生身分組合問卷",
    "description": "用於判斷具備中華民國或中國學生身分相關資格。",
    "pages": [
        {
            "name": "page_residency_and_hukou",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "has_overseas_residency",
                    "title": "您是否取得海外永久/長期居留證件或中華民國僑居身份加簽？",
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
                },
                {
                    "type": "radiogroup",
                    "name": "current_hukou_location",
                    "title": "您目前戶籍所在地為？",
                    "choices": [
                        {
                            "value": "8_provinces",
                            "text": "設籍於北京、上海、江蘇、浙江、福建、廣東、湖北、遼寧 8 省市之一"
                        },
                        {
                            "value": "other_provinces",
                            "text": "設籍於其他省市（不包含 8 省市之一）"
                        }
                    ],
                    "isRequired": true,
                    "colCount": 1
                }
            ],
            "title": "身份與戶籍確認"
        }
    ],
    "showCompletedPage": true,
    "completedHtml": "<h4>感謝您完成！</h4><p>您的身份判斷結果如下：</p>",
    "completedHtmlOnCondition": [
        {
            "expression": "{has_overseas_residency} = 'yes' and {current_hukou_location} = '8_provinces'",
            "html": "<h4>感謝您完成！</h4><p>您的身份可能為：<b>僑生、本地生、陸生</b></p>"
        },
        {
            "expression": "{has_overseas_residency} = 'yes' and {current_hukou_location} = 'other_provinces'",
            "html": "<h4>感謝您完成！</h4><p>您的身份可能為：<b>僑生、本地生</b></p>"
        },
        {
            "expression": "{has_overseas_residency} = 'no' and {current_hukou_location} = '8_provinces'",
            "html": "<h4>感謝您完成！</h4><p>您的身份可能為：<b>本地生、陸生</b></p>"
        },
        {
            "expression": "{has_overseas_residency} = 'no' and {current_hukou_location} = 'other_provinces'",
            "html": "<h4>感謝您完成！</h4><p>您的身份可能為：<b>本地生</b></p>"
        },
        {
            "expression": "true",
            "html": "<h4>感謝您完成！</h4><p>您的身份判斷將根據您提供的資訊進行。請等待進一步的通知。</p>"
        }
    ]
}