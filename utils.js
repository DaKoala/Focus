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
};

const mockData = {
    center: {
        latitude: 31.2257590000,
        longitude: 121.5340000000
    },
    data: [
        {
            title: 'Nice to meet you',
            text: 'Welcome to NYU Shanghai',
            userName: 'Billy',
            time: 'July 01, 2018',
            center: [121.5385293961, 31.2284587001],
            avatar: 'https://s1.ax1x.com/2018/09/03/PzkpSs.png'
        }
    ]
};