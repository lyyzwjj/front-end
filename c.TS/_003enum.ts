// 枚举 和 literal type 枚举 选择  哪个代码少用哪个

// 不赋值就是 0 1 2
// enum HTTPStatus {
//     OK, // 0
//     NOT_FOUNT, // 1 
//     INTERNAL_SERVER_ERROR // 2
// }

enum HTTPStatus {
    OK = 200,
    NOT_FOUNT = 400,
    INTERNAL_SERVER_ERROR = 500
}

// 对应生成的js是
/*
var HTTPStatus;
(function (HTTPStatus) {
    HTTPStatus[HTTPStatus["OK"] = 200] = "OK";
    HTTPStatus[HTTPStatus["NOT_FOUNT"] = 400] = "NOT_FOUNT";
    HTTPStatus[HTTPStatus["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
})(HTTPStatus || (HTTPStatus = {}));
*/

function _003processHttpStatus(s: HTTPStatus) {
    if (s === HTTPStatus.OK) {
        console.log('good response')
    } else {
        console.log('bad response')
    }
    console.log(s)
    // I want to print INTERNAL_SERVER_ERROR
    console.log(HTTPStatus[s])
    const str: string = HTTPStatus[s]
    s = 0 // 其实就是数字
    console.log(s)
    console.log(HTTPStatus[s]) // 打印undefined 因为不存在
}
_003processHttpStatus(HTTPStatus.INTERNAL_SERVER_ERROR)


enum TimingFunction {
    LINEAR = 'linear',
    EASE = 'ease',
    EASE_IN = 'ease-in'
}
function animation(timingFunction:
    | 'linear'
    | 'ease'
    | 'ease-in') {
    console.log(timingFunction)
    // timingFunction = 'linear' // 其实就是字符串
    // console.log(timingFunction)
}
animation(TimingFunction.EASE)