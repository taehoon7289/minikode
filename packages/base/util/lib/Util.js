import dayjs from 'dayjs';
export var nowDate = function (format) {
    if (format === void 0) { format = 'YY-MM-DD'; }
    return dayjs().format(format);
};
//# sourceMappingURL=Util.js.map