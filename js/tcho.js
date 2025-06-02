var surveyJSON= {
    "title": "學生身分判斷確認：包含中華民國、中國、香港、其他國家",
    "description": "用於判斷學生身分相關資格。",
    "pages": [
        {
            "name": "page_hukou_location",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "hukou_location_china",
                    "title": "您目前戶籍所在地為：",
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
            "title": "戶籍所在地"
        },
        {
            "name": "page_taiwan_hukou",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "has_taiwan_hukou_china",
                    "title": "您是否在台灣設過戶籍？",
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
            "title": "台灣戶籍確認"
        }
    ],
    "showCompletedPage": true,
    "completedHtml": "<h4>感謝您完成！</h4><p>您的身份判斷結果如下：</p>",
    "completedHtmlOnCondition": [
        {
            "expression": "{hukou_location_china} = '8_provinces' and {has_taiwan_hukou_china} = 'yes'",
            "html": "<h4>感謝您完成！</h4><p>您的身份可能為：<b>本地生、陸生</b></p>"
        },
        {
            "expression": "{hukou_location_china} = '8_provinces' and {has_taiwan_hukou_china} = 'no'",
            "html": "<h4>感謝您完成！</h4><p>您的身份可能為：<b>本地生、陸生、僑生</b></p>"
        },
        {
            "expression": "{hukou_location_china} = 'other_provinces' and {has_taiwan_hukou_china} = 'yes'",
            "html": "<h4>感謝您完成！</h4><p>您的身份可能為：<b>本地生</b></p>"
        },
        {
            "expression": "{hukou_location_china} = 'other_provinces' and {has_taiwan_hukou_china} = 'no'",
            "html": "<h4>感謝您完成！</h4><p>您的身份可能為：<b>本地生、僑生</b></p>"
        },
        {
            "expression": "true", // 萬用條件，如果上述條件都不滿足
            "html": "<h4>感謝您完成！</h4><p>您的身份判斷將根據您提供的資訊進行。請等待進一步的通知。</p>"
        }
    ]
}