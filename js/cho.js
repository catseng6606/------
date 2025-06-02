var surveyJSON = {
    "title": "中國、香港與其他國家學生身分確認",
    "description": "用於判斷您的中國、香港與其他國家學生身分相關資格。",
    "pages": [
        {
            "name": "page_hukou_location_cho",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "china_hukou_location_cho",
                    "title": "您目前的戶籍所在地為？",
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
            "name": "page_taiwan_hukou_cho",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "has_taiwan_hukou_cho",
                    "title": "您是否曾在台灣設過戶籍？",
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
    "completedHtml": "<h4>感謝您完成！</h4><p>您的資格判斷結果如下：</p>",
    "completedHtmlOnCondition": [
        // 1. 設籍於北京、上海、江蘇、浙江、福建、廣東、湖北、遼寧 8 省市之一
        {
            "expression": "{china_hukou_location_cho} = '8_provinces' and {has_taiwan_hukou_cho} = 'yes'",
            "html": "<h4>感謝您完成！</h4><p>您的資格為：<b>本地生、陸生</b></p>"
        },
        {
            "expression": "{china_hukou_location_cho} = '8_provinces' and {has_taiwan_hukou_cho} = 'no'",
            "html": "<h4>感謝您完成！</h4><p>您的資格為：<b>僑生、陸生</b></p>"
        },
        // 2. 設籍於其他省市（不包含 8 省市之一）
        {
            "expression": "{china_hukou_location_cho} = 'other_provinces' and {has_taiwan_hukou_cho} = 'yes'",
            "html": "<h4>感謝您完成！</h4><p>您的資格為：<b>本地生</b></p>"
        },
        {
            "expression": "{china_hukou_location_cho} = 'other_provinces' and {has_taiwan_hukou_cho} = 'no'",
            "html": "<h4>感謝您完成！</h4><p>您的資格為：<b>僑生</b></p>"
        },
        {
            "expression": "true", // 萬用條件，如果上述條件都不滿足
            "html": "<h4>感謝您完成！</h4><p>無法判斷您的資格，請聯繫相關單位。</p>"
        }
    ]
}