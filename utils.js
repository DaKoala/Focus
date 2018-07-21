/**
 * Created by billyzou on 2018/7/22.
 */
const API_DOMAIN = 'https://hackshdemowk1.eastasia.cloudapp.azure.com';
const URLs = {
    ADDRESS_NEARBY: `${API_DOMAIN}/stream/live`
};

const addZero = function(n) {
  let s = String(n);
  return (s.length === 1 ? `0${s}` : s)
};

const timeFormat = function(timeStamp) {
    let date = new Date(timeStamp);
    return `${date.getFullYear()}/${addZero(date.getMonth() + 1)}/${addZero(date.getDate())} ${addZero(date.getHours())}:${addZero(date.getMinutes())}:${addZero(date.getSeconds())}`;
}