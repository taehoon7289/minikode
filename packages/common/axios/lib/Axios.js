import { __assign, __awaiter, __generator } from "tslib";
import axios from 'axios';
var init = function (_a) {
    var url = _a.url, header = _a.header, method = _a.method, parameter = _a.parameter;
    return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, axios({
                        headers: {},
                        url: url,
                        method: method,
                        data: __assign({}, parameter)
                    })];
                case 1: return [2 /*return*/, _b.sent()];
            }
        });
    });
};
export var request = function (config) { return __awaiter(void 0, void 0, void 0, function () {
    var res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, init(config)];
            case 1:
                res = _a.sent();
                console.log('res', res);
                console.log('res1', res);
                return [2 /*return*/, res.data];
        }
    });
}); };
//# sourceMappingURL=Axios.js.map