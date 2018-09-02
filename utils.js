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

const images = {
    mask: 'https://s1.ax1x.com/2018/07/21/PGilHf.png',
    avatar1: 'https://s1.ax1x.com/2018/09/03/PzkpSs.png',
    avatar2: 'https://s1.ax1x.com/2018/09/03/PzA029.png',
    avatar3: 'https://s1.ax1x.com/2018/09/03/PzAdC4.png',
    img1: 'https://s1.ax1x.com/2018/09/03/PzAXGQ.jpg',
    img2: 'https://s1.ax1x.com/2018/09/03/PzAvxs.jpg',
    img3: 'https://s1.ax1x.com/2018/09/03/PzAj2j.jpg'
};

const mockData = {
    center: {
        latitude: 31.2257590000,
        longitude: 121.5340000000
    },
    data: [
        {
            title: 'Nice to meet you',
            text: 'My name is Billy. Glad to see you here.',
            userName: 'Billy',
            time: 'July 01, 2018',
            center: [121.5385293961, 31.2284587001],
            avatar: images.avatar1,
            images: [images.img1]
        },
        {
            title: 'Welcome to NYU Shanghai',
            text: 'Welcome to NYU Shanghai! Shanghai is a beautiful city and NYU Shanghai is a wonderful university :)',
            userName: 'Tina',
            time: 'June 06, 2018',
            center: [121.5345597267, 31.2302476719],
            avatar: images.avatar2,
            images: []
        },
        {
            title: 'More than 1 images',
            text: 'You can upload more than 1 images and all of them will be displayed here.',
            userName: 'Jerry',
            time: 'August 31, 2018',
            center: [121.5335297585, 31.2227291753],
            avatar: images.avatar3,
            images: [images.img2, images.img3]
        }
    ]
};