/**
 * Created by billyzou on 2018/7/21.
 */
window.VueAMap.initAMapApiLoader({
    key: '5dc98232e063ec74e82af758707768e5',
    plugin: ['Autocomplete', 'PlaceSearch', 'Scale', 'OverView', 'ToolBar', 'MapType', 'PolyEditor', 'AMap.CircleEditor'],
    v: '1.4.4'
});

const app = new Vue({
    el: '#app',
    data: {
        zoom: 15,
        center: [],
        maskUrl: 'https://s1.ax1x.com/2018/07/21/PGilHf.png',
        locationInit: false,
        pageInit: false,
        modalAppear: false,
        currentUser: null,
        users: [],
    },
    methods: {
        userevent(e) {
            let userIndex = e.index;
            return {
                click: function() {
                    app.currentUser = userIndex;
                    app.modalAppear = true
                }
            }
        },
        makePos(center, flag) {
            let result = [];
            let one = center[0];
            let two = center[1];
            if (flag === 0) { // mask
                result.push([one - 0.002, two - 0.0008]);
                result.push([one + 0.002, two + 0.0024]);
            } else { // avatar
                result.push([one - 0.0012, two + 0.00028]);
                result.push([one + 0.0012, two + 0.00216]);
            }
            return result;
        },
        adjustCenter(center) {
            let result = [];
            let one = center[0];
            let two = center[1];
            return [one, two + 0.0012];
        },
        handleLike() {
            this.users[this.currentUser].like = !this.users[this.currentUser].like;
        },
        handleHideModal() {
            this.modalAppear = false;
        },
        handleDownload() {
            window.location.href = 'https://dakoala.github.io/Focus/oia';
        },
        handleLocateCenter() {

        },
        preventBroadcast() {
            return;
        }
    },
    created: function() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                    console.log(position);
                    let longitude = position.coords.longitude;
                    let latitude = position.coords.latitude;
                    this.center.push(longitude);
                    this.center.push(latitude);
                    this.locationInit = true;
                    axios.post(URLs.ADDRESS_NEARBY, {
                        "lat": this.center[1],
                        "lon": this.center[0],
                        "radius": 10000
                    })
                        .then(response => {
                            this.pageInit = true;
                            const data = response.data;
                            for (let i = 0; i < data.length; i++) {
                                let tmp = {
                                    index: i,
                                    like: false,
                                    title: data[i].title,
                                    text: data[i].text,
                                    images: data[i].media && data[i].media.images,
                                    name: data[i].publisher.userName,
                                    time: timeFormat(data[i].timeStamp),
                                    center: [data[i].location.lon, data[i].location.lat],
                                    avatar: `${API_DOMAIN}/account/avatar/${data[i].publisher.userName}`
                                };
                                this.users.push(tmp);
                            }
                        })
                        .catch(error => {
                            console.log(error)
                        })
                },
                function (e) {
                    console.log(e);
                }
            )
        }
    }
});