import {createSlice} from '@reduxjs/toolkit'

let data = [
    {
      category: 'salads',
      id: 0,
      name: 'Cesar z kurczakiem i szparagami',
      image:
        'https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/salatka-cezar-z-kurczakiem-szparagami.jpg',
      link: 'https://www.kwestiasmaku.com/przepis/salatka-cezar-z-kurczakiem-i-szparagami',
    },
    {
      category: 'salads',
      id: 1,
      name: 'Z awokado, szpinakiem i kozim serem',
      image:
        'https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/salatka_z_awokado_szpinakiem_serem_kozim.jpg',
      link: 'https://www.kwestiasmaku.com/blog-kulinarny/salatka-z-awokado-szpinakiem-i-serem-kozim',
    },
    {
      category: 'dinners',
      id: 2,
      name: 'Dorsz z sosem botwinkowym',
      image:
        'https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/dorsz_z_sosem_botwnikowym.jpg',
      link: 'https://www.kwestiasmaku.com/blog-kulinarny/dorsz-z-sosem-botwinkowym',
    },
    {
      category: 'dinners',
      id: 3,
      name: 'Tarta z pstrągiem, koprem, papryką',
      image:
        'https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/tarta_z_pstragiem_koprem_papryka.jpg',
      link: 'https://www.kwestiasmaku.com/blog-kulinarny/tarta-z-wedzonym-pstragiem-grillowana-papryka-i-koprem-wloskim',
    },
    {
      category: 'soups',
      id: 4,
      name: 'Chłodnik litewski',
      image:
        'https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/chlodnik_litewski_6.jpg',
      link: 'https://www.kwestiasmaku.com/blog-kulinarny/chlodnik-litewski',
    },
    {
      category: 'soups',
      id: 5,
      name: 'Zupa szparagowa',
      image:
        'https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/zupa-szparagowa_2.jpg',
      link: 'https://www.kwestiasmaku.com/blog-kulinarny/zupa-szparagowa',
    },
    {
      category: 'desserts',
      id: 6,
      name: 'Sernik dekadencki',
      image:
        'https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/sernik_dekadencki.jpg',
      link: 'https://www.kwestiasmaku.com/blog-kulinarny/sernik-dekadencki',
    },
    {
      category: 'desserts',
      id: 7,
      name: 'Czekoladowe ciasto brownie',
      image:
        'https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/brownie_76.jpg',
      link: 'https://www.kwestiasmaku.com/blog-kulinarny/czekoladowe-ciastka-brownie',
    },
  ];

const recepiesSlice = createSlice({
    name: 'recepies',
    initialState: data,
    reducers: {
        setData: (state, action) => {
            return action.payload
        },
        addRecepie: (state,action) => [...state, action.payload]
    }
})

export default recepiesSlice