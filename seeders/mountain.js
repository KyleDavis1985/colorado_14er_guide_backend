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
            'https://en.wikipedia.org/wiki/Mount_Lincoln_(Colorado)#/media/File:Mount_Lincoln_Colorado_July_2016.jpg',
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
            'https://en.wikipedia.org/wiki/Grays_Peak#/media/File:Grays_and_Torreys_Peaks_2006-08-06.jpg',
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
            'https://en.wikipedia.org/wiki/Castle_Peak_(Colorado)#/media/File:Castle_Peak_CO_Full.JPG',
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
            'https://en.wikipedia.org/wiki/Quandary_Peak#/media/File:QuandaryPeak.JPG',
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
            'https://en.wikipedia.org/wiki/Torreys_Peak#/media/File:Torreys.JPG',
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
            'https://en.wikipedia.org/wiki/Mount_Antero#/media/File:Mount_Antero,_taken_from_along_U.S._285,_near_the_town_of_Nathrop.jpg',
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
            'https://en.wikipedia.org/wiki/Mount_Evans#/media/File:Mt_Evans.JPG',
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
          image:
            'https://en.wikipedia.org/wiki/Longs_Peak#/media/File:Fall05-LongsPeakCU_JPG_RSZ_md.jpg',
          rank: 15,
          elevation: '14,259 feet',
          range: 'Front Range',
          lat: 40.254902,
          long: 105.615738,
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