import Mock from "mockjs";

let Random = Mock.Random;

Random.extend({
  spreadLevel: function(date) {
    var spreadLevels = [
      "一级",
      "二级",
      "三级"
    ];
    return this.pick(spreadLevels);
  },
  type: function(data) {
    return this.pick(["金币","钻石"])
  }
});

let info = {
  "GameID|+1": 100101,
  "Lv1Count|10-15": 0,
  "Lv2Count|6-10": 0,
  "Lv3Count|1-5": 0,
  "TotalReturn|200-400": 0,
  "TotalReceive|0-200": 0
};
let belowList = {
  "UserID|+1": 1,
  "GameID": info.GameID,
  "NickName": "@cname",
  "Level": "@SPREADLEVELS",
};

let returnRecord = {
  "GameID": info.GameID,
  "SourceDiamond|1-100": 0,
  "SpreadLevel": "@SPREADLEVELS",
  "ReturnType": "@TYPE",
  "ReturnNum|1-100": 0,
  "CollectDate": "@datetime"
};

let receiveRecord = {
  "CollectDate": "@datetime",
  "ReceiveType": "@TYPE",
  "ReceiveNum|1-100": 0,
  "ReceiveBefore|200-400": 0
}

Mock.mock("api/data", {
  "data|1": [{"info": info, "belowList|10-30":[belowList], "returnRecord|10-30":[returnRecord], "receiveRecord|10-30": [receiveRecord]}]
});
export default Mock;
