
import { postStockbitTemplates } from '../services/stockbitService.js';

export async function fetchHandler(req, res) {
    try {
        const payload = {
            id: 8,
            data:{
  "name": "BPJS",
  "description": "",
  "save": "0",
  "ordertype": "ASC",
  "ordercol": 9,
  "page": 1,
  "universe": "{\"scope\":\"IHSG\",\"scopeID\":\"0\",\"name\":\"IHSG\"}",
  "filters": "[{\"type\":\"basic\",\"item1\":13620,\"item1name\":\"Value\",\"operator\":\">\",\"item2\":\"5000000000\",\"item2name\":\"\",\"multiplier\":\"0\"},{\"type\":\"compare\",\"item1\":12469,\"item1name\":\"Volume\",\"operator\":\">=\",\"item2\":\"15490\",\"item2name\":\"Previous Volume\",\"multiplier\":\"0.2\"},{\"type\":\"compare\",\"item1\":2661,\"item1name\":\"Price\",\"operator\":\">=\",\"item2\":\"20891\",\"item2name\":\"Open Price\",\"multiplier\":\"1\"},{\"type\":\"compare\",\"item1\":2661,\"item1name\":\"Price\",\"operator\":\">=\",\"item2\":\"13622\",\"item2name\":\"Previous Price\",\"multiplier\":\"1.05\"},{\"type\":\"compare\",\"item1\":2661,\"item1name\":\"Price\",\"operator\":\">=\",\"item2\":\"12459\",\"item2name\":\"Price MA 5\",\"multiplier\":\"1\"},{\"type\":\"basic\",\"item1\":12469,\"item1name\":\"Volume\",\"operator\":\">\",\"item2\":\"60000000\",\"item2name\":\"\",\"multiplier\":\"0\"},{\"type\":\"basic\",\"item1\":3194,\"item1name\":\"Net Foreign Buy / Sell\",\"operator\":\">\",\"item2\":\"200000000\",\"item2name\":\"\",\"multiplier\":\"0\"}]",
  "sequence": "13620,12469,15490,2661,20891,13622,12459,3194",
  "screenerid": "0",
  "type": "TEMPLATE_TYPE_CUSTOM"
}
        };
        const data = await postStockbitTemplates(payload);
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}
