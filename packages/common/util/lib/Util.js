import dayjs from 'dayjs';
export var nowDate = function (format) {
    if (format === void 0) { format = 'YYYY-MM-DD'; }
    return dayjs().format(format);
};
//# sourceMappingURL=Util.js.map