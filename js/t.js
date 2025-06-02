var surveyJSON = {
  "title": "中華民國學生身分確認",
  "description": "用於判斷您的中華民國學生身分相關資格。",
  "pages": [
    {
      "name": "page1_residency",
      "elements": [
        {
          "type": "radiogroup",
          "name": "residency_status",
          "title": "您是否取得外國永久/長期居留證件或中華民國僑居身份加簽？",
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
      "title": "身份確認"
    }
  ],
  "showCompletedPage": true,
  "completedHtml": "<h4>感謝您完成！</h4><p>您的身份為: <b>{residency_type}</b></p>",
  "completedHtmlOnCondition": [
    {
      "expression": "{residency_status} = 'yes'",
      "html": "<h4>感謝您完成！</h4><p>您的身份為: <b>僑生</b></p>"
    },
    {
      "expression": "{residency_status} = 'no'",
      "html": "<h4>感謝您完成！</h4><p>您的身份為: <b>本地生</b></p>"
    }
  ]
};