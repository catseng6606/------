var surveyJSON = {
    "title": "中華民國與香港學生身分確認",
    "description": "用於判斷您的中華民國與香港學生身分相關資格。",
    "pages": [
        {
            "name": "page_taiwan_hongkong_residency",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "continuous_residency_abroad_th",
                    "title": "最近連續居留境外（台灣以外）6 年以上？",
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
            "title": "境外居留狀態"
        }
    ],
    "showCompletedPage": true,
    "completedHtml": "<h4>感謝您完成！</h4><p>您的資格判斷結果如下：</p>",
    "completedHtmlOnCondition": [
        {
            "expression": "{continuous_residency_abroad_th} = 'yes'",
            "html": "<h4>感謝您完成！</h4><p>您的資格為：<b>本地生、港澳生</b></p>"
        },
        {
            "expression": "{continuous_residency_abroad_th} = 'no'",
            "html": "<h4>感謝您完成！</h4><p>您的資格為：<b>本地生</b></p>"
        },
        {
            "expression": "true",
            "html": "<h4>感謝您完成！</h4><p>無法判斷您的資格，請聯繫相關單位。</p>"
        }
    ]
}