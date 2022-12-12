'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'mountains',
      [
        {
          name: 'Mt. Elbert',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/1/1e/Mt._Elbert.jpg',
          rank: 1,
          elevation: '14,438 feet',
          range: 'Sawatch',
          lat: 39.118075,
          long: 106.445417,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Mt. Massive',
          image:
            'https://alwaystimefor9.com/wp-content/uploads/2013/09/Mt.Massive_1.jpg',
          rank: 2,
          elevation: '14,427 feet',
          range: 'Sawatch',
          lat: 39.187298,
          long: 106.475548,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Mt. Harvard',
          image:
            'https://cdn-assets.alltrails.com/uploads/photo/image/19652067/extra_large_c70e4bf27cab452b4e719316c33ea6f3.jpg',
          rank: 3,
          elevation: '14,424 feet',
          range: 'Sawatch',
          lat: 38.924328,
          long: 106.320618,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Blanca Peak',
          image:
            'https://www.mountainphotography.com/images/xl/20140623-Blanca-Peak-Dawn-1.jpg',
          rank: 4,
          elevation: '14,350 feet',
          range: 'Sangre de Cristo',
          lat: 37.577473,
          long: 105.485443,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'La Plata Peak',
          image:
            'https://images.rove.me/w_1920,q_85/qy250pnf5lrlgeq2m7yv/colorado-la-plata-peak.jpg',
          rank: 5,
          elevation: '14,344 feet',
          range: 'Sawatch',
          lat: 39.029251,
          long: 106.473145,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Uncompahgre Peak',
          image:
            'https://www.mountainphotography.com/images/xl/20190807-Uncompahgre-Sunrise-Light.jpg',
          rank: 6,
          elevation: '14,318 feet',
          range: 'San Juan',
          lat: 38.071507,
          long: 107.462166,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Crestone Peak',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/9/96/Crestone_peak_2.jpg',
          rank: 7,
          elevation: '14,299 feet',
          range: 'Sangre de Cristo',
          lat: 37.966972,
          long: 105.585304,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Mt. Lincoln',
          image:
            'https://sp-images.summitpost.org/431360.jpg?auto=format&fit=max&h=800&ixlib=php-2.1.1&q=35&s=a6ae5467f5659c428c03cd8760956a03',
          rank: 8,
          elevation: '14,293 feet',
          range: 'Mosquito',
          lat: 39.351391,
          long: 106.111404,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Grays Peak',
          image:
            'https://www.uncovercolorado.com/wp-content/uploads/2018/04/grays-torreys-peaks-colorado-1440x960-1280x853.jpg',
          rank: 9,
          elevation: '14,275 feet',
          range: 'Front Range',
          lat: 39.63382,
          long: 105.81752,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Castle Peak',
          image:
            'https://hiking-and-fishing.nyc3.cdn.digitaloceanspaces.com/2021/01/31014901/Castle-Peak.jpg',
          rank: 10,
          elevation: '14,274 feet',
          range: 'Elk Mountains',
          lat: 39.009647,
          long: 106.86144,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Quandry Peak',
          image:
            'https://cdn-assets.alltrails.com/uploads/photo/image/23572078/extra_large_5f5b52b4ea9f78ae9a59b3faf56558c9.jpg',
          rank: 11,
          elevation: '14,272 feet',
          range: 'Tenmile',
          lat: 39.397236,
          long: 106.10643,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Torreys Peak',
          image:
            'https://i.pinimg.com/originals/28/f6/ea/28f6ea37cad839481c7b5e93e938dd0b.jpg',
          rank: 12,
          elevation: '14,272 feet',
          range: 'Front Range',
          lat: 39.642742,
          long: 105.821259,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Mt. Antero',
          image:
            'https://cdn-assets.alltrails.com/uploads/photo/image/20600551/extra_large_002913b9db41966dddc0534008822eb8.jpg',
          rank: 13,
          elevation: '14,271 feet',
          range: 'Sawatch',
          lat: 38.674088,
          long: 106.246201,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Mt. Evans',
          image:
            'https://i.pinimg.com/originals/52/b8/2a/52b82a9ab3eb8d226616b0ec4d0fa7b4.jpg',
          rank: 14,
          elevation: '14,268 feet',
          range: 'Front Range',
          lat: 39.58836,
          long: 105.643333,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Longs Peak',
          image: 'https://cdn.5280.com/2016/06/5280_longs_close_up.jpg',
          rank: 15,
          elevation: '14,259 feet',
          range: 'Front Range',
          lat: 40.254902,
          long: 105.615738,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Mt. Wilson',
          image:
            'https://images.fineartamerica.com/images-medium-large-5/mount-wilson-in-autumn-from-silver-pick-road-jetson-nguyen.jpg',
          rank: 16,
          elevation: '14,256 feet',
          range: 'San Juan Mountains',
          lat: 37.83931,
          long: 107.99157,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Mt. Shavano',
          image:
            'https://www.mountain-forecast.com/system/images/8420/large_illustration/Mount-Shavano.jpg',
          rank: 17,
          elevation: '14,230 feet',
          range: 'Sawatch',
          lat: 38.619083,
          long: 106.239296,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Mt. Belford',
          image:
            'https://sp-images.summitpost.org/806528.JPG?auto=format&fit=max&ixlib=php-2.1.1&q=35&w=1024&s=404fa51b92da5b8f2270b13c3f1d3727',
          rank: 18,
          elevation: '14,202 feet',
          range: 'Sawatch',
          lat: 38.960575,
          long: 106.360832,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Mt. Princeton',
          image:
            'https://cdn-assets.alltrails.com/uploads/photo/image/23252391/extra_large_2bd9be13646ca3dff756f524a30c97e5.jpg',
          rank: 19,
          elevation: '14,200 feet',
          range: 'Sawatch',
          lat: 38.749062,
          long: 106.242432,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Mt. Yale',
          image:
            'https://cdn-assets.alltrails.com/uploads/photo/image/23272978/extra_large_e3716d5fa3116db6aed0def8adaf2d0e.jpg',
          rank: 20,
          elevation: '14,200 feet',
          range: 'Sawatch',
          lat: 38.844051,
          long: 106.313965,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Crestone Needle',
          image:
            'https://sp-images.summitpost.org/528545.JPG?auto=format&fit=max&h=1000&ixlib=php-2.1.1&q=35&s=8f9d37b4c5b07fd811c2651697ced179',
          rank: 21,
          elevation: '14,196 feet',
          range: 'Sangre de Cristo',
          lat: 37.964737,
          long: 105.576683,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Mt. Bross',
          image:
            'https://sp-images.summitpost.org/99005.jpg?auto=format&fit=max&ixlib=php-2.1.1&q=35&w=1024&s=b2fec7a1dfb91591e4944eda4121810d',
          rank: 22,
          elevation: '14,178 feet',
          range: 'Mosquito',
          lat: 39.33506,
          long: 106.107376,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Kit Carson Peak',
          image:
            'https://sp-images.summitpost.org/533445.JPG?auto=format&fit=max&h=800&ixlib=php-2.1.1&q=35&s=cbc000917372835bda6cc7facc1c7d46',
          rank: 23,
          elevation: '14,167 feet',
          range: 'Sangre de Cristo',
          lat: 37.979759,
          long: 105.602562,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Maroon Peak',
          image:
            'https://www.rickcrandall.net/wp-content/uploads/images/59_Maroon-Peak-climb-2_02.jpg',
          rank: 24,
          elevation: '14,163 feet',
          range: 'Elk Mountains',
          lat: 39.070713,
          long: 106.989113,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Mt. Oxford',
          image:
            'https://cdn-assets.alltrails.com/uploads/photo/image/23816734/extra_large_a1eb20fe82629fc885051f1ed86f254c.jpg',
          rank: 25,
          elevation: '14,158 feet',
          range: 'Sawatch',
          lat: 38.96468,
          long: 106.338432,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Tabeguache Peak',
          image:
            'https://sp-images.summitpost.org/457469.JPG?auto=format&fit=max&h=800&ixlib=php-2.1.1&q=35&s=2ac786df27a48e7d852c967590f10878',
          rank: 26,
          elevation: '14,158 feet',
          range: 'Sawatch',
          lat: 38.625622,
          long: 106.25071,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Mt. Sneffels',
          image:
            'https://www.mountainphotography.com/images/xl/20130608-Alpenglow-on-Mt.-Sneffels.jpg',
          rank: 27,
          elevation: '14,155 feet',
          range: 'San Juan Mountains',
          lat: 38.003605,
          long: 107.792229,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Mt. Democrat',
          image:
            'https://sp-images.summitpost.org/115029.jpg?auto=format&fit=max&h=800&ixlib=php-2.1.1&q=35&s=f3a5005e1e455e26b4146900a0a4ecfe',
          rank: 28,
          elevation: '14,154 feet',
          range: 'Mosquito',
          lat: 39.339542,
          long: 106.139946,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Capitol Peak',
          image:
            'https://sp-images.summitpost.org/801224.JPG?auto=format&fit=max&h=800&ixlib=php-2.1.1&q=35&s=06e012dc7e74be6e4b80c46f1bc49d62',
          rank: 29,
          elevation: '14,138 feet',
          range: 'Elk Mountains',
          lat: 39.150166,
          long: 107.083221,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Pikes Peak',
          image:
            'https://images.fineartamerica.com/images-medium-large-5/pikes-peak-in-winter-john-hoffman.jpg',
          rank: 30,
          elevation: '14,109 feet',
          range: 'Front Range',
          lat: 38.840542,
          long: 105.044357,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Snowmass Mountain',
          image:
            'https://sp-images.summitpost.org/538158.JPG?auto=format&fit=max&h=800&ixlib=php-2.1.1&q=35&s=33af53e61f25f65987c87618f2561e5d',
          rank: 31,
          elevation: '14,105 feet',
          range: 'Elk Mountains',
          lat: 39.118809,
          long: 107.066528,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Windom Peak',
          image:
            'https://sp-images.summitpost.org/1055762.JPG?auto=format&fit=max&h=800&ixlib=php-2.1.1&q=35&s=d0332a3c29c666a704926955f87edc8f',
          rank: 32,
          elevation: '14,089 feet',
          range: 'San Juan Mountains',
          lat: 37.621235,
          long: 107.591774,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Mt. Eolus',
          image: 'https://i.ytimg.com/vi/-j2r3UyqoOs/maxresdefault.jpg',
          rank: 33,
          elevation: '14,087',
          range: 'San Juan Mountains',
          lat: 37.621948,
          long: 107.622498,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Mt. Columbia',
          image:
            'http://s3.amazonaws.com/summitsearchlive/photos/photos/80/medium/columbia.jpg?1362057700',
          rank: 34,
          elevation: '14,075 feet',
          range: 'Sawatch',
          lat: 38.903957,
          long: 106.297485,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Missouri Mountain',
          image:
            'https://cdn-assets.alltrails.com/uploads/photo/image/24253585/extra_large_8b065c1ff5da6ee0cfbc4eb9f4d3df08.jpg',
          rank: 35,
          elevation: '14,071 feet',
          range: 'Sawatch',
          lat: 38.947559,
          long: 106.378471,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Humboldt Peak',
          image:
            'https://sp-images.summitpost.org/649826.JPG?auto=format&fit=max&h=800&ixlib=php-2.1.1&q=35&s=81a03e6d364bfb4dc3c10366b233bbe5',
          rank: 36,
          elevation: '14,068 feet',
          range: 'Sangre de Cristo',
          lat: 37.976105,
          long: 105.555351,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Mt. Bierstadt',
          image:
            'https://www.mountain-forecast.com/system/images/6632/large_illustration/Mount-Bierstadt.jpg',
          rank: 37,
          elevation: '14,066 feet',
          range: 'Front Range',
          lat: 39.582638,
          long: 105.66861,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Sunlight Peak',
          image:
            'https://www.mattpaynephotography.com/images/xl/Sunlight-Peak.jpg',
          rank: 38,
          elevation: '14,061 feet',
          range: 'San Juan Mountains',
          lat: 37.627285,
          long: 107.595894,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Handies Peak',
          image:
            'https://cdn-assets.alltrails.com/uploads/photo/image/11730466/extra_large_7c2cd4d35d4e95438fa358408562cc48.jpg',
          rank: 39,
          elevation: '14,058 feet',
          range: 'San Juan Mountains',
          lat: 37.913021,
          long: 107.504478,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Ellingwood Point',
          image:
            'https://sp-images.summitpost.org/629958.JPG?auto=format&fit=max&h=800&ixlib=php-2.1.1&q=35&s=b1d7a0623b6ff17f2f4fbec7b80e9053',
          rank: 40,
          elevation: '14,057 feet',
          range: 'Sangre de Cristo',
          lat: 37.582508,
          long: 105.492569,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Mt. Lindsey',
          image:
            'https://2.bp.blogspot.com/-Xj67yQ2N0O0/UBX3eDBJeQI/AAAAAAAACTw/kNq5KTKdMzA/s1600/DSC01221.JPG',
          rank: 41,
          elevation: '14,055 feet',
          range: 'Sangre de Cristo',
          lat: 37.583801,
          long: 105.444763,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Culebra Peak',
          image:
            'https://s3-us-west-1.amazonaws.com/peakery-media/images/items/main/cache/culebra-peak.jpg.910x680_q95.jpg',
          rank: 42,
          elevation: '14,053 feet',
          range: 'Sangre de Cristo',
          lat: 37.122173,
          long: 105.185593,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Mt. Sherman',
          image:
            'https://4.bp.blogspot.com/-vpkdEyjNmd8/TlBELVksZxI/AAAAAAAALpg/dmStbIL2C7Y/s1600/1c+Mt.+Sherman.JPG',
          rank: 43,
          elevation: '14,043 feet',
          range: 'Mosquito',
          lat: 39.225006,
          long: 106.169945,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Little Bear Peak',
          image:
            'https://sp-images.summitpost.org/696657.jpg?auto=format&fit=max&h=800&ixlib=php-2.1.1&q=35&s=4f18f450772c00fe73ce53e7baea8e5e',
          rank: 44,
          elevation: '14,041 feet',
          range: 'Sangre de Cristo',
          lat: 37.566624,
          long: 105.497162,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Redcloud Peak',
          image:
            'https://cdn-assets.alltrails.com/uploads/photo/image/11172138/extra_large_39aba54262f272272d68affe06c1c97c.jpg',
          rank: 45,
          elevation: '14,037 feet',
          range: 'San Juan Mountains',
          lat: 37.94088,
          long: 107.421654,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Pyramid Peak',
          image:
            'https://sp-images.summitpost.org/327613.JPG?auto=format&fit=max&h=1000&ixlib=php-2.1.1&q=35&s=a8ea0b549a088fbb43b912c14ade93f1',
          rank: 46,
          elevation: '14,029 feet',
          range: 'Elk Mountains',
          lat: 39.071545,
          long: 106.950188,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'San Luis Peak',
          image:
            'https://i1.wp.com/TheMtsAreCalling.com/wp-content/uploads/2020/05/4CA8C3A1-2196-4472-91FB-81405BA929F9-scaled.jpeg?fit=2560%2C1920&ssl=1',
          rank: 47,
          elevation: '14,023 feet',
          range: 'San Juan Mountains',
          lat: 37.986897,
          long: 106.931389,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'North Maroon Peak',
          image:
            'https://cdn-assets.alltrails.com/uploads/photo/image/19420724/extra_large_e27e4a9c77945b0f374560a17c5ca4c2.jpg',
          rank: 48,
          elevation: '14,022 feet',
          range: 'Elk Mountains',
          lat: 39.076077,
          long: 106.987267,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Wetterhorn Peak',
          image:
            'https://www.mountainphotography.com/images/large/201107_pahgreWetterhornSunset.jpg',
          rank: 49,
          elevation: '14,021 feet',
          range: 'San Juan Mountains',
          lat: 38.060593,
          long: 107.510834,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Wilson Peak',
          image:
            'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/wilson-peak-colorado-joe-schwartz.jpg',
          rank: 50,
          elevation: '14,021 feet',
          range: 'San Juan Mountains',
          lat: 37.859913,
          long: 107.984795,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Mt. of the Holy Cross',
          image:
            'https://mountainfieldguide.com/wp-content/uploads/2017/10/Mount-of-the-Holy-Cross-a-Colorado-Fourteener.jpg',
          rank: 51,
          elevation: '14,007 feet',
          range: 'Sawatch',
          lat: 39.466713,
          long: 106.481766,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Huron Peak',
          image:
            'https://bloximages.newyork1.vip.townnews.com/outtherecolorado.com/content/tncms/assets/v3/editorial/7/43/74345510-dfbe-527a-a770-8712920d7dc9/5eece02e6a872.image.jpg',
          rank: 52,
          elevation: '14,006 feet',
          range: 'Sawatch',
          lat: 38.945423,
          long: 106.438126,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Sunshine Peak',
          image:
            'https://sp-images.summitpost.org/1046469.jpeg?auto=format&fit=max&h=800&ixlib=php-2.1.1&q=35&s=1eb5ec4b0550a4f5ff42242ccad94c76',
          rank: 53,
          elevation: '14,004 feet',
          range: 'San Juan Mountains',
          lat: 37.922604,
          long: 107.425606,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('mountains', null, {})
  }
}
