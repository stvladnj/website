export const locations = [
    {
        id: 'icon_theotokos',
        description: {
            en: 'Icon of our Lady Theotokos',
            ru: 'У иконы Богородицы',
        },
        image: '/opt/icon_theotokos-w400.webp',
    },
	{
        id: 'icon_nicholas',
        description: {
            en: 'Icon of St. Nicholas',
            ru: 'У иконы св. Николая',
		},
        image: '/opt/st_nicolas-w400.webp',
	},
    {
        id: 'icon_center',
        description: {
            en: 'Festal Icon in the Center',
            ru: 'У центральной иконы',
		},
        image: '/opt/center_icon-w400.webp',
	},
    {
        id: 'icon_vladimir',
        description: {
            en: 'Icon of St. Vladimir',
            ru: 'У иконы св. Владимира',
        },
        image: '/opt/st_vladimir-w400.webp',
    },
    {
    id: 'icon_cross',
        description: {
            en: 'Commemoration Table',
            ru: 'На поминальный столик',
		},
        image: '/opt/comm_table-w400.webp',
    },
    // {
    //     id: 'icon_kiev_sobor',
    //     description: {
    //         en: 'Saints of Kyiv-Pechersk',
    //         ru: 'Собор святых Киево-Печерских',
    //     },
    //     image: '/opt/kiev-sobor-w400.webp',
    // },
    {
        id: 'icon_quick_to_hear',
        description: {
            en: 'Mother of God "Quick to Hear"',
            ru: 'Скоропослушница',
        },
        image: '/opt/quick-to-hear-w400.webp',
    },
];

export const candles = [
    {
        id: 'candle_large',
        price: 6.00,
        description: {
            en: 'Large',
            ru: 'Большая',
        },
        limit: 5,
        height: '40%',
        image: '/lib/candle-box/img/candle_large.png',
    },
    {
        id: 'candle_medium',
        price: 3.00,
        description: {
            en: 'Medium',
            ru: 'Средняя',
        },
        limit: 5,
        height: '25%',
        image: '/lib/candle-box/img/candle_medium.png',
    },
    {
        id: 'candle_small',
        price: 2.00,
        description: {
            en: 'Small',
            ru: 'Малая',
        },
        height: '25%',
        limit: 5,
        image: '/lib/candle-box/img/candle_large.png',
    }
];


export const PROD_CLIENT_ID = 'ASaZpeX62K2Hc4JlCLt0qhusm0E4XBvBpVzAqrxzQKveDpa3nKTaHmrnP8bhi39SeP8NIpc3x4j1X2IW';
export const SANDBOX_CLIENT_ID = 'Abf-cRHoazo0I7rRJuvhv06P5rm3OyUN0u7t9hPpZe1l87q8-BCODsSTIbrgsvIUs1PJBou9_Rttn4F0';
export const paypalClientId =  PROD_CLIENT_ID;

// PayPal shows this as a brand in checkout widget
export const brandName = {
    en: 'St. Vladimir Memorial Church, Jackson, NJ',
    ru: 'Храм-памятник св. князя Владимира в Джексоне, Нью-Джерси',
};

// This message is displayed after successul checkout
export const thankYouMessage = {
    en: 'Thank you for supporting St. Vladimir Memorial Church. God Bless you!',
    ru: 'Благодарим за поддержку храма-памятника св. Владимира. Да хранит вас Господь!',
};