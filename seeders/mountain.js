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
        },
        {
          name: 'Mt. Wilson',
          image:
            'https://en.wikipedia.org/wiki/Mount_Wilson_(Colorado)#/media/File:Mount_Wilson_cropped.jpg',
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
            'https://en.wikipedia.org/wiki/Mount_Shavano#/media/File:Esprit_Point_and_Mount_Shavano.jpg',
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
            'https://en.wikipedia.org/wiki/Mount_Belford#/media/File:Mt._belford_north_approach.jpg',
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
            'https://upload.wikimedia.org/wikipedia/commons/d/d3/Mtprinceton.JPG',
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
            'https://en.wikipedia.org/wiki/Mount_Yale#/media/File:Mt.yale_edit.JPG',
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
            'https://en.wikipedia.org/wiki/Crestone_Needle#/media/File:Crestone_needle_and_lower_south_colony_lake_2008.JPG',
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
            'https://en.wikipedia.org/wiki/Mount_Bross#/media/File:Mt_Bross.jpg',
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
            'https://en.wikipedia.org/wiki/Kit_Carson_Peak#/media/File:Kitcarsonmtn.jpg',
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
            'https://en.wikipedia.org/wiki/Maroon_Bells#/media/File:Maroon_Bells_(11553)a.jpg',
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
            'https://en.wikipedia.org/wiki/Mount_Oxford_(Colorado)#/media/File:Mount_Oxford_(Colorado)_-_2006-07-16.jpg',
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
            'https://en.wikipedia.org/wiki/Tabeguache_Peak#/media/File:Tabeguache_Peak,_Sawatch_Range,_Chaffee_County,_Colorado,_USA_01.jpg',
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
            'https://en.wikipedia.org/wiki/Mount_Sneffels#/media/File:MtSneffelsMarch2008.jpg',
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
            'https://en.wikipedia.org/wiki/Mount_Democrat#/media/File:Mt_Democrat.jpg',
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
            'https://en.wikipedia.org/wiki/Capitol_Peak_(Colorado)#/media/File:Capitol_Peak_CO.jpg',
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
            'https://en.wikipedia.org/wiki/Pikes_Peak#/media/File:Pikespeak.JPG',
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
            'https://en.wikipedia.org/wiki/Snowmass_Mountain#/media/File:Hagerman_Peak_and_Snowmass_Mountain.jpg',
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
            'https://en.wikipedia.org/wiki/Windom_Peak#/media/File:Windom_Peak_and_Unnamed_above_Chicago_Basin.jpg',
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
          image:
            'https://en.wikipedia.org/wiki/Mount_Eolus#/media/File:Mount_Eolus.jpg',
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
            'https://en.wikipedia.org/wiki/Mount_Columbia_(Colorado)#/media/File:Mount_Columbia_(Colorado)_-_2004-08-07.jpg',
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
            'https://en.wikipedia.org/wiki/Missouri_Mountain#/media/File:Missouri_Mountain_(Colorado)_-_2006-07-16.jpg',
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
            'https://en.wikipedia.org/wiki/Humboldt_Peak_(Colorado)#/media/File:Humboldt_Peak_from_near_south_colony_lakes_trailhead.jpg',
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
            'https://en.wikipedia.org/wiki/Mount_Bierstadt#/media/File:2007-07-08-biers-reflectio2.jpg',
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
            'https://en.wikipedia.org/wiki/Sunlight_Peak#/media/File:Sunlight_Peak.jpg',
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
            'https://en.wikipedia.org/wiki/Handies_Peak#/media/File:Handies_Peak_Colorado.jpg',
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
            'https://en.wikipedia.org/wiki/Ellingwood_Point#/media/File:MtBlancaEast.jpg',
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
            'https://en.wikipedia.org/wiki/Mount_Lindsey#/media/File:Mount_Lindsey_and_Iron_Nipple.jpg',
          rank: 41,
          elevation: '14,055 feet',
          range: 'Sangre de Cristo',
          lat: 37.583801,
          long: 105.444763,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Snowmass Mountain',
          image:
            'https://en.wikipedia.org/wiki/Snowmass_Mountain#/media/File:Hagerman_Peak_and_Snowmass_Mountain.jpg',
          rank: 31,
          elevation: '14,105 feet',
          range: 'Elk Mountains',
          lat: 37.621235,
          long: 107.591774,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Culebra Peak',
          image:
            'https://en.wikipedia.org/wiki/Culebra_Peak#/media/File:Culebra_Peak.jpg',
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
            'https://en.wikipedia.org/wiki/Mount_Sherman#/media/File:MountSherman.JPG',
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
            'https://en.wikipedia.org/wiki/Little_Bear_Peak#/media/File:Little_Bear_Peak_from_southwest_ridge,_Feb_2012.JPG',
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
            'https://en.wikipedia.org/wiki/Redcloud_Peak#/media/File:Sanjuan14ers-8.jpg',
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
            'https://en.wikipedia.org/wiki/Pyramid_Peak_(Colorado)#/media/File:Pyramid_Peak.jpg',
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
            'https://en.wikipedia.org/wiki/San_Luis_Peak#/media/File:San_Luis_Peak,_San_Juan_Mountains,_Saguache_County,_Colorado,_USA_01.jpg',
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
            'https://en.wikipedia.org/wiki/Wetterhorn_Peak#/media/File:Wetterhorn_peak.jpg',
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
            'https://en.wikipedia.org/wiki/Wilson_Peak#/media/File:Wilson_Peak_near_Telluride.jpg',
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
            'https://en.wikipedia.org/wiki/Mount_of_the_Holy_Cross#/media/File:Mount_of_the_Holy_Cross,_2009.jpg',
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
            'https://en.wikipedia.org/wiki/Huron_Peak#/media/File:Huron_Peak_(48458753091).jpg',
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
            'https://en.wikipedia.org/wiki/Sunshine_Peak#/media/File:Red_Cloud_Peak_WSA_(9470419585).jpg',
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
